// supabase/functions/_shared/periodEnd.ts

/**
 * Stripeのサブスクリプションオブジェクトから契約終了日（Unix秒）を解決する。
 * 優先順位: items.data[0].current_period_end > current_period_end > cancel_at > trial_end > ended_at
 * どれも存在しなければ null。
 */
export function resolveCurrentPeriodEnd(sub: {
  items?: { data?: Array<{ current_period_end?: number | null }> };
  current_period_end?: number | null;
  cancel_at?: number | null;
  trial_end?: number | null;
  ended_at?: number | null;
}): number | null {
  return (
    sub.items?.data?.[0]?.current_period_end ??
    sub.current_period_end ??
    sub.cancel_at ??
    sub.trial_end ??
    sub.ended_at ??
    null
  );
}