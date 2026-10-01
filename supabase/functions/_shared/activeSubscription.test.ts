// supabase/functions/_shared/activeSubscription.test.ts
import { assertEquals } from "jsr:@std/assert";
import { pickActiveSubscription } from "./activeSubscription.ts";

Deno.test("行がなければ null（無料会員）", () => {
  assertEquals(pickActiveSubscription([]), null);
});

Deno.test("canceled の行しかなければ null（無料会員）", () => {
  const rows = [{ id: "a", status: "canceled", updated_at: "2026-10-01T00:00:00Z" }];
  assertEquals(pickActiveSubscription(rows), null);
});

Deno.test("canceled の行の方が新しく更新されていても、active の行を選ぶ", () => {
  const rows = [
    { id: "new_active", status: "active", updated_at: "2026-09-01T00:00:00Z" },
    { id: "old_canceled", status: "canceled", updated_at: "2026-10-01T00:00:00Z" },
  ];
  assertEquals(pickActiveSubscription(rows)?.id, "new_active");
});

Deno.test("有効な行が2つあれば、新しく更新された方を選ぶ", () => {
  const rows = [
    { id: "older", status: "active", updated_at: "2026-09-01T00:00:00Z" },
    { id: "newer", status: "past_due", updated_at: "2026-09-15T00:00:00Z" },
  ];
  assertEquals(pickActiveSubscription(rows)?.id, "newer");
});

Deno.test("状態が大文字でも有効として扱う（has_active_subscription と同じ）", () => {
  const rows = [{ id: "a", status: "ACTIVE", updated_at: "2026-09-01T00:00:00Z" }];
  assertEquals(pickActiveSubscription(rows)?.id, "a");
});
