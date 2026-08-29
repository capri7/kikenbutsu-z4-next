// supabase/functions/create-checkout-session/decision.ts

export type ValidationResult =
  | { valid: true }
  | { valid: false; error: "MISSING_PRICE_ID" | "MISSING_REDIRECT_URL" }
  | { valid: false; error: "PRICE_NOT_ALLOWED"; priceId: string };

/**
 * create-checkout-sessionのリクエストボディを検証する。
 * チェック順序: priceId必須 → success_url/cancel_url必須 → 価格許可リスト
 * （元のコードの分岐順序をそのまま維持している）
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

  if (allowList.length && !allowList.includes(body.priceId)) {
    return { valid: false, error: "PRICE_NOT_ALLOWED", priceId: body.priceId };
  }

  return { valid: true };
}