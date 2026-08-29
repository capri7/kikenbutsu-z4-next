// supabase/functions/stripe-webhook/decision.test.ts
import { assertEquals } from "jsr:@std/assert";
import {
  decideWebhookResponse,
  shouldPhysicallyDeleteUser,
} from "./decision.ts";

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