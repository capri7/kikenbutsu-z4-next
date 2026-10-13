import { assertEquals, assertThrows } from "jsr:@std/assert";
import { resolveSecretKey } from "./secretKey.ts";

const env = (vars: Record<string, string>) => (name: string) => vars[name];

Deno.test("EDGE_SECRET_KEY があれば、それを使う", () => {
  assertEquals(
    resolveSecretKey(env({
      EDGE_SECRET_KEY: "sb_secret_own",
      SUPABASE_SECRET_KEYS: '{"default":"sb_secret_default"}',
    })),
    "sb_secret_own",
  );
});

Deno.test("EDGE_SECRET_KEY がなければ、SUPABASE_SECRET_KEYS の default を使う", () => {
  assertEquals(
    resolveSecretKey(env({ SUPABASE_SECRET_KEYS: '{"default":"sb_secret_default","other":"sb_secret_other"}' })),
    "sb_secret_default",
  );
});

Deno.test("EDGE_SECRET_KEY が空の文字なら、SUPABASE_SECRET_KEYS の default を使う", () => {
  assertEquals(
    resolveSecretKey(env({ EDGE_SECRET_KEY: "", SUPABASE_SECRET_KEYS: '{"default":"sb_secret_default"}' })),
    "sb_secret_default",
  );
});

Deno.test("どちらもなければ止める", () => {
  assertThrows(() => resolveSecretKey(env({})), Error, "秘密の鍵がない");
});

Deno.test("SUPABASE_SECRET_KEYS が JSON でなければ止める", () => {
  assertThrows(() => resolveSecretKey(env({ SUPABASE_SECRET_KEYS: "sb_secret_plain" })), Error, "秘密の鍵がない");
});

Deno.test("SUPABASE_SECRET_KEYS に default がなければ止める", () => {
  assertThrows(() => resolveSecretKey(env({ SUPABASE_SECRET_KEYS: '{"other":"sb_secret_other"}' })), Error, "秘密の鍵がない");
});
