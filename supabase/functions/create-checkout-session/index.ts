// supabase/functions/create-checkout-session/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14?target=denonext";
import { corsHeaders } from "../_shared/cors.ts";
import { validateCheckoutRequest } from "./decision.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
const ALLOW_LIST = (Deno.env.get("PRICE_IDS") ?? "").split(",").map((s) => s.trim()).filter(Boolean);

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20"
});

const j = (body, status, headers) =>
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

  const { priceId, user_id, email, success_url, cancel_url } = body;

  const validation = validateCheckoutRequest({ priceId, success_url, cancel_url }, ALLOW_LIST);
  if (!validation.valid) {
    if (validation.error === "PRICE_NOT_ALLOWED") {
      return j({ error: validation.error, priceId: validation.priceId }, 400, headers);
    }
    return j({ error: validation.error }, 400, headers);
  }

  try {
    // ここが肝心：user_id を client_reference_id と metadata の両方に載せる
    // email があれば customer_email として渡す
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url,
      cancel_url,
      client_reference_id: user_id ?? undefined,
      customer_email: email ?? undefined,
      metadata: user_id ? { user_id } : undefined,
      subscription_data: user_id ? { metadata: { user_id } } : undefined
    });

    return j({ url: session.url, id: session.id }, 200, headers);
  } catch (e) {
    return j({ error: "STRIPE_ERROR", message: String(e) }, 500, headers);
  }
});