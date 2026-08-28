// supabase/functions/check-guest-subscription/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14?target=denonext";
import { toIsoOrNull, upsertUserProfiles, upsertSubscriptions } from "../_shared/stripeSync.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { getAuthenticatedUser } from "../_shared/auth.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY")!;

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);
  const j = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers });

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });

  if (req.method !== "POST")   return j({ error: "METHOD_NOT_ALLOWED" }, 405);

  // 認証: リクエストのJWTから本人を確定する。email/user_idはリクエストボディから信用しない
  const { user, error: authErr } = await getAuthenticatedUser(req);
  if (authErr) return j({ error: authErr }, 401);

  const user_id = user.id;
  const email = (user.email ?? "").trim().toLowerCase();
  if (!email) return j({ error: "NO_EMAIL_ON_ACCOUNT" }, 400);

  try {
    const customers = await stripe.customers.list({ email, limit: 10 });
    if (customers.data.length === 0) {
      return j({ matched: false, reason: "NO_CUSTOMER" }, 200);
    }

    for (const customer of customers.data) {
      const subs = await stripe.subscriptions.list({
        customer: customer.id,
        status: "all",
        limit: 10,
      });

      const active = subs.data.find(
        (s) => s.status === "active" || s.status === "trialing"
      );

      if (active) {
        // stripe-webhookと同じ取得順（items.data[0]優先）に統一
        const periodEndSec =
          (active as any).items?.data?.[0]?.current_period_end ??
          (active as any).current_period_end ??
          (active as any).cancel_at ??
          (active as any).trial_end ??
          (active as any).ended_at ?? null;
        const currentPeriodEnd = toIsoOrNull(periodEndSec);
        const status = active.status.toLowerCase();

        await upsertUserProfiles({
          user_id,
          email,
          stripe_customer_id: customer.id,
          subscription_status: status,
          current_period_end: currentPeriodEnd,
        });

        await upsertSubscriptions({
          user_id,
          stripe_customer_id: customer.id,
          stripe_subscription_id: active.id,
          status,
          current_period_end: currentPeriodEnd,
          livemode: active.livemode,
        });

        return j({ matched: true, subscription_id: active.id }, 200);
      }
    }

    return j({ matched: false, reason: "NO_ACTIVE_SUBSCRIPTION" }, 200);
  } catch (e) {
    return j({ error: "STRIPE_ERROR", message: String(e) }, 500);
  }
});










