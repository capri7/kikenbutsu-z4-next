// supabase/functions/create-checkout-session/decision.test.ts
import { assertEquals } from "jsr:@std/assert";
import { resolveCheckoutIdentity, validateCheckoutRequest } from "./decision.ts";

Deno.test("priceIdが無ければ MISSING_PRICE_ID を返す", () => {
  const result = validateCheckoutRequest(
    { success_url: "https://example.com/ok", cancel_url: "https://example.com/ng" },
    [],
  );
  assertEquals(result, { valid: false, error: "MISSING_PRICE_ID" });
});

Deno.test("success_urlが無ければ MISSING_REDIRECT_URL を返す", () => {
  const result = validateCheckoutRequest(
    { priceId: "price_1", cancel_url: "https://example.com/ng" },
    [],
  );
  assertEquals(result, { valid: false, error: "MISSING_REDIRECT_URL" });
});

Deno.test("cancel_urlが無ければ MISSING_REDIRECT_URL を返す", () => {
  const result = validateCheckoutRequest(
    { priceId: "price_1", success_url: "https://example.com/ok" },
    [],
  );
  assertEquals(result, { valid: false, error: "MISSING_REDIRECT_URL" });
});

Deno.test("許可リストが空（未設定）なら、priceIdの中身を問わず許可する", () => {
  const result = validateCheckoutRequest(
    {
      priceId: "price_anything",
      success_url: "https://example.com/ok",
      cancel_url: "https://example.com/ng",
    },
    [],
  );
  assertEquals(result, { valid: true });
});

Deno.test("許可リストに無いpriceIdは PRICE_NOT_ALLOWED を返し、priceIdを含める", () => {
  const result = validateCheckoutRequest(
    {
      priceId: "price_bad",
      success_url: "https://example.com/ok",
      cancel_url: "https://example.com/ng",
    },
    ["price_good"],
  );
  assertEquals(result, { valid: false, error: "PRICE_NOT_ALLOWED", priceId: "price_bad" });
});

Deno.test("許可リストにあるpriceIdは valid を返す", () => {
  const result = validateCheckoutRequest(
    {
      priceId: "price_good",
      success_url: "https://example.com/ok",
      cancel_url: "https://example.com/ng",
    },
    ["price_good"],
  );
  assertEquals(result, { valid: true });
});

Deno.test("priceIdとURL両方が欠けている場合、priceIdのエラーが優先される（チェック順序の確認）", () => {
  const result = validateCheckoutRequest({}, []);
  assertEquals(result, { valid: false, error: "MISSING_PRICE_ID" });
});


Deno.test("ログイン中なら、トークンから確定したユーザーの ID とメールアドレスを使う", () => {
  const result = resolveCheckoutIdentity({ id: "user-1", email: "a@example.com" });
  assertEquals(result, { userId: "user-1", email: "a@example.com" });
});

Deno.test("ログイン中でメールアドレスがなければ、email は null", () => {
  const result = resolveCheckoutIdentity({ id: "user-1" });
  assertEquals(result, { userId: "user-1", email: null });
});

Deno.test("ログインしていない（ゲストの購入）なら、ID もメールアドレスも null", () => {
  const result = resolveCheckoutIdentity(null);
  assertEquals(result, { userId: null, email: null });
});
