// supabase/functions/_shared/userProfilePayload.test.ts
import { assertEquals } from "jsr:@std/assert";
import { buildUserProfilePayload } from "./userProfilePayload.ts";

const now = new Date("2026-10-09T10:00:00Z");

Deno.test("メールアドレスと顧客 ID が取れたら、どちらも書き込む", () => {
  const payload = buildUserProfilePayload(
    { user_id: "user-1", email: "a@example.com", stripe_customer_id: "cus_1" },
    now,
  );
  assertEquals(payload, {
    user_id: "user-1",
    email: "a@example.com",
    stripe_customer_id: "cus_1",
    updated_at: "2026-10-09T10:00:00.000Z",
  });
});

Deno.test("メールアドレスが取れなければ（null）、メールアドレスの列を含めず、今の値を消さない", () => {
  const payload = buildUserProfilePayload(
    { user_id: "user-1", email: null, stripe_customer_id: "cus_1" },
    now,
  );
  assertEquals(payload, { user_id: "user-1", stripe_customer_id: "cus_1", updated_at: "2026-10-09T10:00:00.000Z" });
  assertEquals("email" in payload, false);
});

Deno.test("顧客 ID が取れなければ（null）、顧客 ID の列を含めず、今の値を消さない", () => {
  const payload = buildUserProfilePayload(
    { user_id: "user-1", email: "a@example.com", stripe_customer_id: null },
    now,
  );
  assertEquals(payload, { user_id: "user-1", email: "a@example.com", updated_at: "2026-10-09T10:00:00.000Z" });
  assertEquals("stripe_customer_id" in payload, false);
});

Deno.test("どちらも取れなければ、本人の ID と更新日時だけを書き込む（空の文字列も取れなかったものとして扱う）", () => {
  assertEquals(buildUserProfilePayload({ user_id: "user-1", email: "", stripe_customer_id: undefined }, now), {
    user_id: "user-1",
    updated_at: "2026-10-09T10:00:00.000Z",
  });
});
