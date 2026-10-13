// supabase/functions/stripe-events-retry/index.ts
//
// 未処理のまま残った Stripe の通知を処理し直す。pg_cron が10分ごとに pg_net で呼ぶ
// （supabase/migrations/20261013120000_stripe_events_retry.sql）。
// 呼び出しは、新しい形式の秘密の鍵（apikey ヘッダー）を @supabase/server が確かめる
// （Supabase の公式の文書「Securing Edge Functions」の Service-to-service calls。config.toml で verify_jwt = false）。
// 照らし合わせる鍵は、関数の secret の STRIPE_EVENTS_RETRY_SECRET_KEY に置き、withSupabase の env で渡す
// （@supabase/server の文書「Using env overrides」）。本番の関数では、環境変数 SUPABASE_SECRET_KEYS から
// 鍵を読めなかったため（2026-10-13 確認）。secret がない手元と CI では、渡さずに SUPABASE_SECRET_KEYS を読む。
// 処理の中身は stripe-webhook と同じ（_shared/stripe-events/process.ts）。
import { withSupabase } from "npm:@supabase/server@1.9.1";
import type Stripe from "npm:stripe@18.2.1";
import { eventStore, processEvent } from "../_shared/stripe-events/process.ts";
import { type DueEvent, heartbeatUrl, retryDueEvents } from "./retry.ts";

// 呼び出しを確かめる鍵（本番の関数の secret。なければ SUPABASE_SECRET_KEYS の default を使う）
const SECRET_KEY = Deno.env.get("STRIPE_EVENTS_RETRY_SECRET_KEY");

// Better Stack の Heartbeat の URL（本番の関数の secret。手元と CI では E2E 用の偽のサーバーを指す。なければ送らない）
const HEARTBEAT_URL = Deno.env.get("BETTERSTACK_HEARTBEAT_URL");

export default {
  fetch: withSupabase({
    auth: "secret",
    cors: "disabled",
    ...(SECRET_KEY ? { env: { secretKeys: { default: SECRET_KEY } } } : {}),
  }, async (_req, ctx) => {
    try {
      const result = await retryDueEvents({
        async dueEvents() {
          const { data, error } = await ctx.supabaseAdmin.rpc("stripe_events_due_for_retry");
          if (error) throw error;
          return (data ?? []) as DueEvent[];
        },
        async overdueCount() {
          const { data, error } = await ctx.supabaseAdmin.rpc("stripe_events_overdue_count");
          if (error) throw error;
          return data as number;
        },
        store: eventStore,
        process(payload) {
          // 署名は、受け取ったときに stripe-webhook が確かめている
          const event = payload as Stripe.Event;
          return processEvent(event, !!event.livemode);
        },
        async heartbeat(ok) {
          if (!HEARTBEAT_URL) return;
          const res = await fetch(heartbeatUrl(HEARTBEAT_URL, ok));
          await res.body?.cancel();
          if (!res.ok) throw new Error(`Heartbeat に送れなかった（${res.status}）`);
        },
      });
      console.log("[stripe-events-retry] done:", result);
      return Response.json(result);
    } catch (e) {
      console.error("[stripe-events-retry] failed:", e);
      return Response.json({ error: "retry failed" }, { status: 500 });
    }
  }),
};
