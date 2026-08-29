// supabase/functions/request-account-deletion/decision.test.ts
import { assertEquals } from "jsr:@std/assert";
import { decideAccountDeletion } from "./decision.ts";

Deno.test("有料会員（active）かつ解約予約済みなら scheduled を返す", () => {
  const result = decideAccountDeletion({
    id: "sub_1",
    status: "active",
    current_period_end: "2026-09-30T00:00:00Z",
    cancel_at_period_end: true,
  });
  assertEquals(result, {
    action: "schedule",
    subscriptionId: "sub_1",
    effectiveDate: "2026-09-30T00:00:00Z",
  });
});

Deno.test("有料会員（trialing）かつ解約予約済みなら scheduled を返す", () => {
  const result = decideAccountDeletion({
    id: "sub_2",
    status: "trialing",
    current_period_end: "2026-10-01T00:00:00Z",
    cancel_at_period_end: true,
  });
  assertEquals(result.action, "schedule");
});

Deno.test("有料会員（past_due）だが解約未予約なら SUBSCRIPTION_NOT_CANCELLED で拒否する", () => {
  const result = decideAccountDeletion({
    id: "sub_3",
    status: "past_due",
    current_period_end: null,
    cancel_at_period_end: false,
  });
  assertEquals(result, { action: "reject", error: "SUBSCRIPTION_NOT_CANCELLED" });
});

Deno.test("cancel_at_period_end が null（未設定）の場合も解約未予約として扱う", () => {
  const result = decideAccountDeletion({
    id: "sub_4",
    status: "active",
    current_period_end: null,
    cancel_at_period_end: null,
  });
  assertEquals(result.action, "reject");
});

Deno.test("status が canceled（非アクティブ）なら即時削除を返す", () => {
  const result = decideAccountDeletion({
    id: "sub_5",
    status: "canceled",
    current_period_end: "2026-08-01T00:00:00Z",
    cancel_at_period_end: false,
  });
  assertEquals(result, { action: "delete" });
});

Deno.test("subscriptions行が1件も無い（一度も課金していない）場合も即時削除を返す", () => {
  const result = decideAccountDeletion(null);
  assertEquals(result, { action: "delete" });
});

Deno.test("status が大文字（ACTIVE）でも小文字化して正しく有料会員判定する", () => {
  const result = decideAccountDeletion({
    id: "sub_6",
    status: "ACTIVE",
    current_period_end: "2026-09-30T00:00:00Z",
    cancel_at_period_end: true,
  });
  assertEquals(result.action, "schedule");
});