// supabase/functions/cancel-account-deletion/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL     = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

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
    .select("id, deletion_requested")
    .eq("user_id", user_id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (subErr) return j({ error: "DB_ERROR", message: subErr.message }, 500, headers);
  if (!subRow) return j({ error: "NO_SUBSCRIPTION" }, 404, headers);

  if (!subRow.deletion_requested) {
    return j({ cancelled: true, already: true }, 200, headers);
  }

  const { error: updateErr } = await admin
    .from("subscriptions")
    .update({ deletion_requested: false, updated_at: new Date().toISOString() })
    .eq("id", subRow.id);

  if (updateErr) return j({ error: "DB_ERROR", message: updateErr.message }, 500, headers);

  return j({ cancelled: true }, 200, headers);
});