// supabase/functions/cancel-account-deletion/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { admin } from "../_shared/stripeSync.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { getAuthenticatedUser } from "../_shared/auth.ts";
import { decideCancelDeletion } from "./decision.ts";

const j = (body, status, headers) =>
  new Response(JSON.stringify(body), { status, headers });

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
  if (req.method !== "POST") return j({ error: "METHOD_NOT_ALLOWED" }, 405, headers);

  const { user, error: authErr } = await getAuthenticatedUser(req);
  if (authErr) return j({ error: authErr }, 401, headers);

  const user_id = user.id;

  const { data: subRow, error: subErr } = await admin
    .from("subscriptions")
    .select("id, deletion_requested")
    .eq("user_id", user_id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (subErr) return j({ error: "DB_ERROR", message: subErr.message }, 500, headers);

  const decision = decideCancelDeletion(subRow);

  if (decision.action === "reject") {
    return j({ error: decision.error }, 404, headers);
  }

  if (decision.action === "noop") {
    return j({ cancelled: true, already: true }, 200, headers);
  }

  const { error: updateErr } = await admin
    .from("subscriptions")
    .update({ deletion_requested: false, updated_at: new Date().toISOString() })
    .eq("id", decision.subscriptionId);

  if (updateErr) return j({ error: "DB_ERROR", message: updateErr.message }, 500, headers);

  return j({ cancelled: true }, 200, headers);
});