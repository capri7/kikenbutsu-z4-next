// supabase/functions/cancel-account-deletion/decision.test.ts
import { assertEquals } from "jsr:@std/assert";
import { decideCancelDeletion } from "./decision.ts";

Deno.test("subscriptions行が無い場合は NO_SUBSCRIPTION で拒否する", () => {
  const result = decideCancelDeletion(null);
  assertEquals(result, { action: "reject", error: "NO_SUBSCRIPTION" });
});

Deno.test("deletion_requested が既に false の場合は何もせず noop（二重送信対策）", () => {
  const result = decideCancelDeletion({ id: "sub_1", deletion_requested: false });
  assertEquals(result, { action: "noop" });
});

Deno.test("deletion_requested が null（未設定）の場合も noop 扱いにする", () => {
  const result = decideCancelDeletion({ id: "sub_2", deletion_requested: null });
  assertEquals(result, { action: "noop" });
});

Deno.test("deletion_requested が true の場合は cancel を返し、該当行のidを渡す", () => {
  const result = decideCancelDeletion({ id: "sub_3", deletion_requested: true });
  assertEquals(result, { action: "cancel", subscriptionId: "sub_3" });
});