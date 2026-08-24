// supabase/functions/stripe-webhook/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14?target=denonext";
import {
  admin,
  toIsoOrNull,
  upsertUserProfiles,
  upsertSubscriptions,
} from "../_shared/stripeSync.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY")!;
const STRIPE_WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

async function selectSingleUserIdByEmail(
  email: string,
): Promise<string | null> {
  const { data, error } = await admin
    .from("user_profiles")
    .select("user_id")
    .eq("email", email)
    .maybeSingle();
  if (error || !data?.user_id) return null;
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
    if (!error && data?.user_id) return data.user_id as string;
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
      const inv = await stripe.invoices.retrieve(invId);
      if (inv.customer_email) return inv.customer_email;
    }
    const customerId =
      typeof sub.customer === "string" ? sub.customer : sub.customer?.id;
    if (customerId) {
      const cust = await stripe.customers.retrieve(customerId);
      const email = (cust as any)?.email as string | undefined;
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

  const periodEndSec =
    (sub as any).items?.data?.[0]?.current_period_end ??
    (sub as any).current_period_end ??
    (sub as any).cancel_at ??
    (sub as any).trial_end ??
    (sub as any).ended_at ??
    null;

  const currentPeriodEnd = toIsoOrNull(periodEndSec);

  await upsertUserProfiles({
    user_id,
    email: email ?? null,
    stripe_customer_id: customerId,
    subscription_status: status,
    current_period_end: currentPeriodEnd,
  });

  await upsertSubscriptions({
    user_id,
    stripe_customer_id: customerId,
    stripe_subscription_id: sub.id,
    status,
    current_period_end: currentPeriodEnd,
    livemode,
  });

  return user_id;
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
      );
    } catch (err) {
      console.error("[webhook] signature verification failed:", err);
      return new Response("invalid signature", { status: 400 });
    }

    const livemode = !!event.livemode;

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        // まずは保険で profiles に customer / email を紐付け
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

        // 本命の subscription から確定値を同期
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
            const { data: subRow } = await admin
              .from("subscriptions")
              .select("deletion_requested")
              .eq("stripe_subscription_id", sub.id)
              .maybeSingle();

            if (subRow?.deletion_requested) {
              const { error: delError } =
                await admin.auth.admin.deleteUser(user_id);
              if (delError) {
                console.error(
                  "[webhook] failed to delete user after deletion_requested:",
                  delError,
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
        if (inv.subscription) {
          const sub = await stripe.subscriptions.retrieve(
            String(inv.subscription),
          );
          await syncFromSubscription(sub, livemode);
        }
        break;
      }

      default:
        // 未使用イベントは200で返す
        break;
    }

    return new Response("ok", { status: 200 });
  } catch (e) {
    console.error("handler error:", e);
    return new Response(`handler error: ${String(e)}`, { status: 400 });
  }
});