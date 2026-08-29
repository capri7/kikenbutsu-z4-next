// supabase/functions/check-guest-subscription/decision.test.ts
import { assertEquals } from "jsr:@std/assert";
import { findActiveSubscription } from "./decision.ts";

Deno.test("active状態の契約があれば、そのオブジェクト全体を返す", () => {
  const result = findActiveSubscription([
    { id: "sub_1", status: "active", current_period_end: 1000 },
  ]);
  assertEquals(result, { id: "sub_1", status: "active", current_period_end: 1000 });
});

Deno.test("trialing状態の契約があれば、それを返す", () => {
  const result = findActiveSubscription([{ id: "sub_2", status: "trialing" }]);
  assertEquals(result, { id: "sub_2", status: "trialing" });
});

Deno.test("canceled等の非アクティブな契約しかなければ null を返す", () => {
  const result = findActiveSubscription([
    { id: "sub_3", status: "canceled" },
    { id: "sub_4", status: "past_due" },
    { id: "sub_5", status: "incomplete_expired" },
  ]);
  assertEquals(result, null);
});

Deno.test("契約が1件も無ければ null を返す", () => {
  assertEquals(findActiveSubscription([]), null);
});

Deno.test("非アクティブな契約の後にactiveがあっても、正しくactiveを見つける", () => {
  const result = findActiveSubscription([
    { id: "sub_6", status: "canceled" },
    { id: "sub_7", status: "active" },
  ]);
  assertEquals(result, { id: "sub_7", status: "active" });
});

Deno.test("activeとtrialingが両方ある場合、配列内で先に出てきた方を返す", () => {
  const result = findActiveSubscription([
    { id: "sub_8", status: "trialing" },
    { id: "sub_9", status: "active" },
  ]);
  assertEquals(result, { id: "sub_8", status: "trialing" });
});