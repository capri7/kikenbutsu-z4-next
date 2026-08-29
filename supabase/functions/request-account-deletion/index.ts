// supabase/functions/request-account-deletion/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { admin } from "../_shared/stripeSync.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { getAuthenticatedUser } from "../_shared/auth.ts";
import { decideAccountDeletion } from "./decision.ts";

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
    .select("id, status, current_period_end, cancel_at_period_end")
    .eq("user_id", user_id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (subErr) return j({ error: "DB_ERROR", message: subErr.message }, 500, headers);

  const decision = decideAccountDeletion(subRow);

  if (decision.action === "reject") {
    return j({ error: decision.error }, 400, headers);
  }

  if (decision.action === "schedule") {
    const { error: updateErr } = await admin
      .from("subscriptions")
      .update({ deletion_requested: true, updated_at: new Date().toISOString() })
      .eq("id", decision.subscriptionId);

    if (updateErr) return j({ error: "DB_ERROR", message: updateErr.message }, 500, headers);

    return j({ scheduled: true, effective_date: decision.effectiveDate }, 200, headers);
  }

  const { error: delError } = await admin.auth.admin.deleteUser(user_id);
  if (delError) return j({ error: "DELETE_FAILED", message: delError.message }, 500, headers);

  return j({ deleted: true }, 200, headers);
});