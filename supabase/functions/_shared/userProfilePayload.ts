// supabase/functions/_shared/userProfilePayload.ts

export type UserProfilePayload = {
  user_id: string;
  email?: string;
  stripe_customer_id?: string;
  updated_at: string;
};

/**
 * user_profiles に書き込む値を作る。
 * メールアドレスと Stripe の顧客 ID は、値があるときだけ含める。
 * Stripe からの取得に失敗して null のときに、今の値を null で上書きしないため（含めない列は upsert で変わらない）。
 */
export function buildUserProfilePayload(
  args: { user_id: string; email?: string | null; stripe_customer_id?: string | null },
  now: Date,
): UserProfilePayload {
  const payload: UserProfilePayload = {
    user_id: args.user_id,
    updated_at: now.toISOString(),
  };
  if (args.email) payload.email = args.email;
  if (args.stripe_customer_id) payload.stripe_customer_id = args.stripe_customer_id;
  return payload;
}
