// supabase/functions/create-checkout-session/decision.ts

export type ValidationResult =
  | { valid: true }
  | { valid: false; error: "MISSING_PRICE_ID" | "MISSING_REDIRECT_URL" | "PRICE_IDS_NOT_CONFIGURED" }
  | { valid: false; error: "PRICE_NOT_ALLOWED"; priceId: string };

/**
 * 環境変数 PRICE_IDS（カンマ区切り）を、許可する Price ID の一覧にする。前後の空白と空の要素は除く。
 */
export function parseAllowList(raw: string | undefined): string[] {
  return (raw ?? "").split(",").map((s) => s.trim()).filter(Boolean);
}

/**
 * create-checkout-sessionのリクエストボディを検証する。
 * チェック順序: priceId必須 → success_url/cancel_url必須 → 許可リストの設定 → 価格許可リスト
 * 許可リストが空（PRICE_IDS の設定漏れ）なら、どの価格も許可しない（フェイルクローズ）。
 */
export function validateCheckoutRequest(
  body: { priceId?: string; success_url?: string; cancel_url?: string },
  allowList: string[],
): ValidationResult {
  if (!body.priceId) {
    return { valid: false, error: "MISSING_PRICE_ID" };
  }

  if (!body.success_url || !body.cancel_url) {
    return { valid: false, error: "MISSING_REDIRECT_URL" };
  }

  if (!allowList.length) {
    return { valid: false, error: "PRICE_IDS_NOT_CONFIGURED" };
  }

  if (!allowList.includes(body.priceId)) {
    return { valid: false, error: "PRICE_NOT_ALLOWED", priceId: body.priceId };
  }

  return { valid: true };
}

export type CheckoutIdentity = { userId: string | null; email: string | null };

/**
 * 決済のセッションに載せる本人の情報を決める。
 * 本人はリクエストのトークン（JWT）から確定したユーザーだけを使い、本文の user_id・email は使わない。
 * ログインしていない（ゲストの購入）なら、どちらも null。
 */
export function resolveCheckoutIdentity(
  authUser: { id: string; email?: string | null } | null,
): CheckoutIdentity {
  if (!authUser) return { userId: null, email: null };
  return { userId: authUser.id, email: authUser.email ?? null };
}
