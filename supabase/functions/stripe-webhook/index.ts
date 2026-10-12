// supabase/functions/stripe-webhook/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
// edge-runtime.d.ts の宣言は、JSR から読み込むとグローバルにならず、deno check で EdgeRuntime が見つからない
// （同じファイルを手元にコピーして読み込むとグローバルになることを確認済み）。型だけを取り出して globalThis から呼ぶ。
// import type は実行時には消えるため、動きは変わらない。
import type * as EdgeRuntimeTypes from "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "npm:stripe@18.2.1";
import {
  admin,
  toIsoOrNull,
  upsertUserProfiles,
  upsertSubscriptions,
} from "../_shared/stripeSync.ts";

import {
  isUserDeletionFailure,
  shouldPhysicallyDeleteUser,
} from "./decision.ts";
import { type EventStore, processAndFinish, receiveEvent } from "./receive.ts";
import { resolveCurrentPeriodEnd } from "../_shared/periodEnd.ts";
import { subscriptionIdFromInvoice } from "./invoice.ts";
import { stripeApiTarget } from "../_shared/stripeApiTarget.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY")!;
const STRIPE_WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

// SDK の版（stripe@18.2.1）は、アカウントと Webhook の送信先の API の版（2025-05-28.basil）に合わせて固定する
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2025-05-28.basil",
  // 手元と CI の E2E だけ、偽の Stripe API に向ける（STRIPE_API_BASE_URL。本番では設定しない）
  ...stripeApiTarget(Deno.env.get("STRIPE_API_BASE_URL"), STRIPE_SECRET_KEY),
});
// Deno では Web Crypto で署名を確かめる（Supabase の公式の例と同じ）
const cryptoProvider = Stripe.createSubtleCryptoProvider();

// 通知の記録は、DB の関数で行う（supabase/migrations/20261010203000_stripe_event_functions.sql）
const eventStore: EventStore = {
  async record(event) {
    const { data, error } = await admin.rpc("record_stripe_event", {
      p_id: event.id,
      p_type: event.type,
      p_livemode: event.livemode,
      p_payload: event.payload,
    });
    if (error) throw error;
    return data === true;
  },
  async finish(eventId, errorText) {
    const { error } = await admin.rpc("finish_stripe_event", {
      p_id: eventId,
      p_error: errorText,
    });
    if (error) throw error;
  },
};

async function selectSingleUserIdByEmail(
  email: string,
): Promise<string | null> {
  const { data, error } = await admin
    .from("user_profiles")
    .select("user_id")
    .eq("email", email)
    .maybeSingle();
  // 読み込みの失敗を「見つからない」として扱うと、通知が反映されないまま処理済みになるため、投げる
  if (error) throw error;
  if (!data?.user_id) return null;
  return data.user_id as string;
}

async function findUserIdByCustomerOrEmail(
  customer_id?: string | null,
  email?: string | null,
) {
  if (customer_id) {
    const { data, error } = await admin
      .from("user_profiles")
      .select("user_id")
      .eq("stripe_customer_id", customer_id)
      .maybeSingle();
    if (error) throw error;
    if (data?.user_id) return data.user_id as string;
  }
  if (email) {
    const uid = await selectSingleUserIdByEmail(email);
    if (uid) return uid;
  }
  return null;
}

async function getEmailForSubscription(
  sub: Stripe.Subscription,
): Promise<string | null> {
  try {
    if (sub.latest_invoice) {
      const invId =
        typeof sub.latest_invoice === "string"
          ? sub.latest_invoice
          : sub.latest_invoice.id;
      // Basil 以降、Invoice の id は型の上で省略されうる（プレビューの請求書には id がない）
      if (invId) {
        const inv = await stripe.invoices.retrieve(invId);
        if (inv.customer_email) return inv.customer_email;
      }
    }

    const customerId =
      typeof sub.customer === "string" ? sub.customer : sub.customer?.id;
    if (customerId) {
      const cust = await stripe.customers.retrieve(customerId);
      const email = "deleted" in cust ? undefined : (cust.email ?? undefined);
      if (email) return email;
    }
  } catch (e) {
    console.warn("getEmailForSubscription failed:", e);
  }
  return null;
}

async function resolveUserIdFromSubscription(
  sub: Stripe.Subscription,
): Promise<string | null> {
  // 優先: metadata.user_id → 顧客ID/メール照合
  const metaUid = (sub.metadata?.user_id || sub.metadata?.uid || "").trim();
  if (metaUid) return metaUid;

  const customerId =
    typeof sub.customer === "string" ? sub.customer : sub.customer?.id;
  const email = await getEmailForSubscription(sub);
  return await findUserIdByCustomerOrEmail(customerId, email ?? undefined);
}

async function syncFromSubscription(
  sub: Stripe.Subscription,
  livemode: boolean,
): Promise<string | null> {
  const user_id = await resolveUserIdFromSubscription(sub);
  if (!user_id) {
    console.warn("[webhook] could not resolve user_id for sub:", sub.id);
    return null;
  }

  const customerId =
    typeof sub.customer === "string"
      ? sub.customer
      : (sub.customer?.id ?? null);
  const email = await getEmailForSubscription(sub);
  const status = (sub.status ?? "none").toLowerCase();


  // Basil（2025-03-31）以降、契約終了日は items.data[].current_period_end にある
  const periodEndSec = resolveCurrentPeriodEnd(sub);
  const currentPeriodEnd = toIsoOrNull(periodEndSec);

  await upsertUserProfiles({
    user_id,
    email: email ?? null,
    stripe_customer_id: customerId,
  });

  await upsertSubscriptions({
    user_id,
    stripe_customer_id: customerId,
    stripe_subscription_id: sub.id,
    status,
    current_period_end: currentPeriodEnd,
    livemode,
    cancel_at_period_end: sub.cancel_at_period_end ?? null,
  });

  return user_id;
}

// ---------------- イベント種別ごとの実処理（バックグラウンド実行） ----------------
// 失敗したら投げる。processAndFinish が失敗として記録し、通知を未処理のまま残す
async function processEvent(event: Stripe.Event, livemode: boolean) {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      const uidFromSession = (
        session.metadata?.user_id ||
        session.client_reference_id ||
        ""
      ).trim();
      if (uidFromSession) {
        const customerId =
          typeof session.customer === "string"
            ? session.customer
            : (session.customer?.id ?? null);
        const email =
          session.customer_details?.email ??
          (typeof session.customer_email === "string"
            ? session.customer_email
            : null);
        await upsertUserProfiles({
          user_id: uidFromSession,
          email: email ?? null,
          stripe_customer_id: customerId,
        });
      }

      if (session.subscription) {
        const sub = await stripe.subscriptions.retrieve(
          String(session.subscription),
        );
        await syncFromSubscription(sub, livemode);
      }
      break;
    }

    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const user_id = await syncFromSubscription(sub, livemode);


      if (event.type === "customer.subscription.deleted") {
        if (!user_id) {
          console.warn(
            "[webhook] deletion check skipped: user_id not resolved for sub:",
            sub.id,
          );
        } else {
          const { data: subRow, error: subRowError } = await admin
            .from("subscriptions")
            .select("deletion_requested")
            .eq("stripe_subscription_id", sub.id)
            .maybeSingle();
          // 読めないまま進むと、退会の予約があっても削除しないまま処理済みになるため、投げる
          if (subRowError) throw subRowError;

          if (shouldPhysicallyDeleteUser(user_id, subRow?.deletion_requested)) {
            const { error: delError } =
              await admin.auth.admin.deleteUser(user_id);
            if (isUserDeletionFailure(delError)) {
              // 削除できなかった。投げて未処理のまま残し、処理し直す
              throw delError;
            } else if (delError) {
              console.log(
                "[webhook] user already deleted per deletion_requested flag:",
                user_id,
              );
            } else {
              console.log(
                "[webhook] user deleted per deletion_requested flag:",
                user_id,
              );
            }
          }
        }
      }
      break;
    }

    case "invoice.paid":
    case "invoice.payment_succeeded": {
      const inv = event.data.object as Stripe.Invoice;
      // 契約と関係のない請求書は同期しない
      const subscriptionId = subscriptionIdFromInvoice(inv);
      if (subscriptionId) {
        const sub = await stripe.subscriptions.retrieve(subscriptionId);
        await syncFromSubscription(sub, livemode);
      }
      break;
    }

    default:
      break;
  }
}

// ---------------- handler ----------------
Deno.serve(async (req) => {
  try {
    const sig = req.headers.get("stripe-signature");
    const body = await req.text();

    let event: Stripe.Event;
    try {
      event = await stripe.webhooks.constructEventAsync(
        body,
        sig!,
        STRIPE_WEBHOOK_SECRET,
        undefined,
        cryptoProvider,
      );
    } catch (err) {
      console.error("[webhook] signature verification failed:", err);
      return new Response("invalid signature", { status: 400 });
    }

    const livemode = !!event.livemode;

    // 未処理として記録してから応答する。記録できなければ 500（Stripe が再送する）
    const received = await receiveEvent(
      { id: event.id, type: event.type, livemode, payload: event },
      eventStore,
    );

    if (received.shouldProcess) {
      (globalThis as unknown as { EdgeRuntime: typeof EdgeRuntimeTypes.EdgeRuntime }).EdgeRuntime.waitUntil(
        processAndFinish(event.id, eventStore, () => processEvent(event, livemode)),
      );
    } else if (received.status === 200) {
      console.log("[webhook] duplicate event, skipping:", event.id);
    }

    return new Response(received.body, { status: received.status });
  } catch (e) {
    console.error("handler error:", e);
    return new Response(`handler error: ${String(e)}`, { status: 400 });
  }
});
