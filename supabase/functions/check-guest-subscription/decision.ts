// supabase/functions/check-guest-subscription/decision.ts

/**
 * サブスクリプション一覧から、有効な契約（active/trialing）を探す。
 * 複数該当する場合は配列内で最初に見つかったものを返す（Array.find相当）。
 * 見つからなければ null。オブジェクト全体をそのまま返すため、呼び出し側での再検索は不要。
 */
export function findActiveSubscription<T extends { status: string }>(
  subscriptions: T[],
): T | null {
  return (
    subscriptions.find((s) => s.status === "active" || s.status === "trialing") ?? null
  );
}