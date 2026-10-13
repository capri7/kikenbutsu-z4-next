// supabase/functions/_shared/stripe-events/decision.test.ts
import { assertEquals } from "jsr:@std/assert";
import {
  isUserDeletionFailure,
  shouldPhysicallyDeleteUser,
} from "./decision.ts";

// 受け取りと重複の判定は receive.test.ts で確かめる

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
// --- isUserDeletionFailure ---

Deno.test("アカウントの削除にエラーがなければ、失敗としない", () => {
  assertEquals(isUserDeletionFailure(null), false);
});

Deno.test("アカウントがすでに削除されていた（user_not_found）なら、削除は済んでいるので失敗としない", () => {
  assertEquals(isUserDeletionFailure({ code: "user_not_found" }), false);
});

Deno.test("それ以外のエラーは失敗とし、通知を未処理のまま残して処理し直す", () => {
  assertEquals(isUserDeletionFailure({ code: "unexpected_failure" }), true);
  assertEquals(isUserDeletionFailure({}), true);
});
