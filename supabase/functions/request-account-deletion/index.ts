// supabase/functions/request-account-deletion/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { admin } from "../_shared/stripeSync.ts";
import { corsHeaders } from "../_shared/cors.ts";
import { getAuthenticatedUser } from "../_shared/auth.ts";

const ACTIVE_STATUSES = ["active", "trialing", "past_due"];

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

  const status = (subRow?.status ?? "").toLowerCase();
  const isPaid = ACTIVE_STATUSES.includes(status);

  if (isPaid) {
    // Stripe側でまだ解約されていない場合は拒否する（フロントのボタン制御をバイパスされても防ぐ保険）
    if (!subRow?.cancel_at_period_end) {
      return j({ error: "SUBSCRIPTION_NOT_CANCELLED" }, 400, headers);
    }

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