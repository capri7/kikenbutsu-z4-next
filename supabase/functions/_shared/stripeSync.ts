// supabase/functions/_shared/stripeSync.ts
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL     = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

export const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { persistSession: false } });

export const toIsoOrNull = (sec?: number | string | null) =>
  sec != null && !Number.isNaN(Number(sec))
    ? new Date(Number(sec) * 1000).toISOString()
    : null;

export async function upsertUserProfiles(args: {
  user_id: string; email?: string | null; stripe_customer_id?: string | null;
  subscription_status?: string | null; current_period_end?: string | null;
}) {
  const payload: any = {
    user_id: args.user_id,
    email: args.email ?? null,
    stripe_customer_id: args.stripe_customer_id ?? null,
    subscription_status: args.subscription_status ?? null,
    updated_at: new Date().toISOString(),
  };
  if (args.current_period_end) payload.current_period_end = args.current_period_end;
  const { error } = await admin.from("user_profiles").upsert(payload, { onConflict: "user_id" });
  if (error) throw error;
}

export async function upsertSubscriptions(args: {
  user_id: string; stripe_customer_id: string | null; stripe_subscription_id: string;
  status: string | null; current_period_end: string | null; expires_at: string | null;
  livemode: boolean | null;
}) {
  const payload: any = {
    user_id: args.user_id,
    stripe_customer_id: args.stripe_customer_id,
    stripe_subscription_id: args.stripe_subscription_id,
    status: args.status,
    livemode: args.livemode,
    updated_at: new Date().toISOString(),
  };
  if (args.current_period_end) {
    payload.current_period_end = args.current_period_end;
    payload.expires_at = args.current_period_end;
  }
  const { error } = await admin.from("subscriptions").upsert(payload, { onConflict: "user_id" });
  if (error) throw error;
}