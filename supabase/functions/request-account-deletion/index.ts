// supabase/functions/request-account-deletion/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL     = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const ACTIVE_STATUSES = ["active", "trialing", "past_due"];

const ALLOWED_ORIGINS = new Set([
  "https://kikenbutsu-z4.com",
  "https://www.kikenbutsu-z4.com",
  "http://localhost:5173",
  "http://localhost:3000"
]);

function corsHeaders(origin) {
  const allowOrigin = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://kikenbutsu-z4.com";
  return {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": allowOrigin,
    "access-control-allow-headers": "authorization, content-type, apikey, x-client-info",
    "access-control-allow-methods": "POST, OPTIONS",
    "vary": "Origin"
  };
}

const j = (body, status, headers) =>
  new Response(JSON.stringify(body), { status, headers });

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
  if (req.method !== "POST") return j({ error: "METHOD_NOT_ALLOWED" }, 405, headers);

  const jwt = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
  if (!jwt) return j({ error: "UNAUTHORIZED" }, 401, headers);

  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const { data: { user }, error: userErr } = await admin.auth.getUser(jwt);
  if (userErr || !user) return j({ error: "UNAUTHORIZED" }, 401, headers);

  const user_id = user.id;

  const { data: subRow, error: subErr } = await admin
    .from("subscriptions")
    .select("id, status, current_period_end")
    .eq("user_id", user_id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (subErr) return j({ error: "DB_ERROR", message: subErr.message }, 500, headers);

  const status = (subRow?.status ?? "").toLowerCase();
  const isPaid = ACTIVE_STATUSES.includes(status);

  if (isPaid) {
    const { error: updateErr } = await admin
      .from("subscriptions")
      .update({ deletion_requested: true, updated_at: new Date().toISOString() })
      .eq("id", subRow.id);

    if (updateErr) return j({ error: "DB_ERROR", message: updateErr.message }, 500, headers);

    return j({ scheduled: true, effective_date: subRow.current_period_end }, 200, headers);
  }

  const { error: delError } = await admin.auth.admin.deleteUser(user_id);
  if (delError) return j({ error: "DELETE_FAILED", message: delError.message }, 500, headers);

  return j({ deleted: true }, 200, headers);
});