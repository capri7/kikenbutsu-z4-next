// supabase/functions/billing-portal/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "https://esm.sh/stripe@14?target=denonext";
import { admin } from "../_shared/stripeSync.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { getAuthenticatedUser } from "../_shared/auth.ts";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"), {
  apiVersion: "2024-06-20"
});

const j = (body, status, headers) =>
  new Response(JSON.stringify(body), { status, headers });

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
  if (req.method !== "POST") return j({ error: "METHOD_NOT_ALLOWED" }, 405, headers);

  try {
    const { user, error: authErr } = await getAuthenticatedUser(req);
    if (authErr) return j({ error: authErr }, 401, headers);

    const { data: profile, error: profErr } = await admin
      .from("user_profiles")
      .select("stripe_customer_id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (profErr) return j({ error: "PROFILE_LOOKUP_FAILED", message: profErr.message }, 500, headers);

    const customerId = profile?.stripe_customer_id ?? null;
    if (!customerId) return j({ error: "NO_STRIPE_CUSTOMER" }, 400, headers);

    const body = await req.json().catch(() => ({}));

    const return_url = body.return_url;
    if (!return_url) return j({ error: "MISSING_RETURN_URL" }, 400, headers);

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url
    });

    return j({ url: session.url }, 200, headers);
  } catch (e) {
    return j({ error: "STRIPE_ERROR", message: String(e) }, 500, headers);
  }
});