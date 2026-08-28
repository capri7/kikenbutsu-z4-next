// supabase/functions/checkout-session-info/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14?target=denonext";
import { corsHeaders } from "../_shared/cors.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20"
});

function cors(status, body, origin) {
  // この関数だけセッション個人情報を返すためキャッシュ禁止を上乗せ
  const headers = {
    ...corsHeaders(origin),
    "cache-control": "no-store"
  };
  if (status === 204) return new Response(null, {
    status,
    headers
  });
  return new Response(JSON.stringify(body), {
    status,
    headers
  });
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  if (req.method === "OPTIONS") return cors(204, null, origin);
  if (req.method !== "POST") return cors(405, {
    error: "METHOD_NOT_ALLOWED"
  }, origin);

  let session_id;
  try {
    const json = await req.json();
    session_id = json?.session_id;
  } catch {
    return cors(400, {
      error: "INVALID_JSON"
    }, origin);
  }

  if (!session_id) return cors(400, {
    error: "MISSING_SESSION_ID"
  }, origin);

  try {
    const s = await stripe.checkout.sessions.retrieve(session_id);
    // できるだけ確実にメールを取りにいく
    let email = s.customer_details?.email ?? s.customer_email ?? null;
    let customer_id = null;
    if (typeof s.customer === "string") {
      customer_id = s.customer;
      if (!email) {
        const c = await stripe.customers.retrieve(s.customer);
        if (!("deleted" in c)) email = c.email ?? null;
      }
    }
    return cors(200, {
      email,
      customer_id,
      status: s.status,
      payment_status: s.payment_status,
      subscription_id: typeof s.subscription === "string" ? s.subscription : null
    }, origin);
  } catch (e) {
    return cors(500, {
      error: "STRIPE_ERROR",
      detail: String(e)
    }, origin);
  }
});