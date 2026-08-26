// supabase/functions/billing-portal/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14?target=denonext";
import { createClient } from "npm:@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"), {
  apiVersion: "2024-06-20"
});

const allow = new Set([
  "https://kikenbutsu-z4.com",
  "https://www.kikenbutsu-z4.com",
  "http://localhost:5173",
  "http://localhost:3000"
]);

function cors(origin) {
  const o = allow.has(origin) ? origin : "https://kikenbutsu-z4.com";
  return {
    "Access-Control-Allow-Origin": o,
    "Access-Control-Allow-Headers": "authorization, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin"
  };
}

serve(async (req) => {
  const origin = req.headers.get("origin") ?? "";
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors(origin) });

  try {
    const supabase = createClient(Deno.env.get("SUPABASE_URL"), Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"));
    const jwt = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
    const { data: { user }, error: userErr } = await supabase.auth.getUser(jwt);
    if (userErr || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "content-type": "application/json", ...cors(origin) }
      });
    }

    const { data: profile, error: profErr } = await supabase
      .from("user_profiles")
      .select("stripe_customer_id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (profErr) {
      return new Response(JSON.stringify({ error: "Profile lookup failed" }), {
        status: 500,
        headers: { "content-type": "application/json", ...cors(origin) }
      });
    }

    const customerId = profile?.stripe_customer_id ?? null;
    if (!customerId) {
      return new Response(JSON.stringify({ error: "No Stripe customer linked" }), {
        status: 400,
        headers: { "content-type": "application/json", ...cors(origin) }
      });
    }

    const body = await req.json().catch(() => ({}));

    const return_url = body.return_url;
    if (!return_url) {
      return new Response(JSON.stringify({ error: "MISSING_RETURN_URL" }), {
        status: 400,
        headers: { "content-type": "application/json", ...cors(origin) }
      });
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { "content-type": "application/json", ...cors(origin) }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { "content-type": "application/json", ...cors(origin) }
    });
  }
});