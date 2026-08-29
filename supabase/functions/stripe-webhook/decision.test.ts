// supabase/functions/stripe-webhook/decision.test.ts
import { assertEquals } from "jsr:@std/assert";
import {
  resolveCurrentPeriodEnd,
  decideWebhookResponse,
  shouldPhysicallyDeleteUser,
} from "./decision.ts";

// --- resolveCurrentPeriodEnd ---

Deno.test("items.data[0].current_period_end が最優先で使われる", () => {
  const result = resolveCurrentPeriodEnd({
    items: { data: [{ current_period_end: 1000 }] },
    current_period_end: 2000,
    cancel_at: 3000,
    trial_end: 4000,
    ended_at: 5000,
  });
  assertEquals(result, 1000);
});

Deno.test("itemsが無い場合、current_period_endが使われる", () => {
  const result = resolveCurrentPeriodEnd({
    current_period_end: 2000,
    cancel_at: 3000,
    trial_end: 4000,
    ended_at: 5000,
  });
  assertEquals(result, 2000);
});

Deno.test("itemsとcurrent_period_endが無い場合、cancel_atが使われる", () => {
  const result = resolveCurrentPeriodEnd({
    cancel_at: 3000,
    trial_end: 4000,
    ended_at: 5000,
  });
  assertEquals(result, 3000);
});

Deno.test("cancel_atまで無い場合、trial_endが使われる（トライアル中の解約等）", () => {
  const result = resolveCurrentPeriodEnd({
    trial_end: 4000,
    ended_at: 5000,
  });
  assertEquals(result, 4000);
});

Deno.test("trial_endまで無い場合、ended_atが使われる（完全に終了した契約）", () => {
  const result = resolveCurrentPeriodEnd({ ended_at: 5000 });
  assertEquals(result, 5000);
});

Deno.test("どれも存在しない場合は null を返す", () => {
  const result = resolveCurrentPeriodEnd({});
  assertEquals(result, null);
});

Deno.test("値が0（Unixエポック）の場合、falsyでも正しく採用される", () => {
  // ??演算子を使っているため、0はnullish coalescingでスキップされない想定を確認
  const result = resolveCurrentPeriodEnd({ current_period_end: 0 });
  assertEquals(result, 0);
});

// --- decideWebhookResponse ---

Deno.test("重複イベントの場合、200/ok (duplicate)を返し、後続処理はしない", () => {
  const result = decideWebhookResponse(true);
  assertEquals(result, { status: 200, body: "ok (duplicate)", shouldProcess: false });
});

Deno.test("新規イベントの場合、200/okを返し、後続処理を行う", () => {
  const result = decideWebhookResponse(false);
  assertEquals(result, { status: 200, body: "ok", shouldProcess: true });
});

// --- shouldPhysicallyDeleteUser ---

Deno.test("user_idが解決済み、かつdeletion_requestedがtrueなら削除する", () => {
  assertEquals(shouldPhysicallyDeleteUser("user_1", true), true);
});

Deno.test("user_idが解決済みでも、deletion_requestedがfalseなら削除しない", () => {
  assertEquals(shouldPhysicallyDeleteUser("user_1", false), false);
});

Deno.test("deletion_requestedがtrueでも、user_idが解決できていなければ削除しない", () => {
  assertEquals(shouldPhysicallyDeleteUser(null, true), false);
});

Deno.test("deletion_requestedがnull（未設定）の場合は削除しない", () => {
  assertEquals(shouldPhysicallyDeleteUser("user_1", null), false);
});