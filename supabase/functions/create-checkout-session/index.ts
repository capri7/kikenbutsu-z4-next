// supabase/functions/create-checkout-session/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14?target=denonext";
import { corsHeaders } from "../_shared/cors.ts";
import { parseAllowList, resolveCheckoutIdentity, validateCheckoutRequest } from "./decision.ts";
import { getAuthenticatedUser } from "../_shared/auth.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
const ALLOW_LIST = parseAllowList(Deno.env.get("PRICE_IDS"));

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20"
});

const j = (body: unknown, status: number, headers: HeadersInit) =>
  new Response(JSON.stringify(body), { status, headers });

// ---- handler ----
Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  // Preflight
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
  if (req.method !== "POST") return j({ error: "METHOD_NOT_ALLOWED" }, 405, headers);

  // JSON parse
  let body;
  try {
    body = await req.json();
  } catch {
    return j({ error: "INVALID_JSON" }, 400, headers);
  }

  const { priceId, success_url, cancel_url } = body;

  const validation = validateCheckoutRequest({ priceId, success_url, cancel_url }, ALLOW_LIST);
  if (!validation.valid) {
    if (validation.error === "PRICE_IDS_NOT_CONFIGURED") {
      // 設定の誤りなので、利用者の入力の誤り（400）ではなく 500 を返し、ログに残す
      console.error("[create-checkout-session] PRICE_IDS が設定されていないため、決済の開始を拒否しました");
      return j({ error: validation.error }, 500, headers);
    }
    if (validation.error === "PRICE_NOT_ALLOWED") {
      return j({ error: validation.error, priceId: validation.priceId }, 400, headers);
    }
    return j({ error: validation.error }, 400, headers);
  }

  // 本人はトークン（JWT）から確定する。本文の user_id・email は使わない。
  // 本文の ID を信じると、他人の ID を指定して決済したときに、その人の user_profiles（email・stripe_customer_id）が
  // 支払った人のものに書き換わるため。ログインしていなければゲストの購入として扱う。
  const { user } = await getAuthenticatedUser(req);
  const { userId, email } = resolveCheckoutIdentity(user);

  try {
    // userId があれば client_reference_id と metadata の両方に載せる（Webhook で本人を特定するため）
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url,
      cancel_url,
      client_reference_id: userId ?? undefined,
      customer_email: email ?? undefined,
      metadata: userId ? { user_id: userId } : undefined,
      subscription_data: userId ? { metadata: { user_id: userId } } : undefined
    });

    return j({ url: session.url, id: session.id }, 200, headers);
  } catch (e) {
    return j({ error: "STRIPE_ERROR", message: String(e) }, 500, headers);
  }
});
