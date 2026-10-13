// supabase/functions/stripe-webhook/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
// edge-runtime.d.ts の宣言は、JSR から読み込むとグローバルにならず、deno check で EdgeRuntime が見つからない
// （同じファイルを手元にコピーして読み込むとグローバルになることを確認済み）。型だけを取り出して globalThis から呼ぶ。
// import type は実行時には消えるため、動きは変わらない。
import type * as EdgeRuntimeTypes from "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "npm:stripe@18.2.1";
import { processAndFinish, receiveEvent } from "../_shared/stripe-events/receive.ts";
import { eventStore, processEvent, stripe } from "../_shared/stripe-events/process.ts";

const STRIPE_WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;
// Deno では Web Crypto で署名を確かめる（Supabase の公式の例と同じ）
const cryptoProvider = Stripe.createSubtleCryptoProvider();

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
