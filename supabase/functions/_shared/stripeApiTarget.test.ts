// supabase/functions/_shared/stripeApiTarget.test.ts
import { assertEquals, assertThrows } from "jsr:@std/assert";
import { stripeApiTarget } from "./stripeApiTarget.ts";

Deno.test("STRIPE_API_BASE_URL がなければ、空の設定を返す（本番の Stripe の宛先のまま）", () => {
  assertEquals(stripeApiTarget(undefined, "sk_live_xxx"), {});
  assertEquals(stripeApiTarget("", "sk_test_xxx"), {});
});

Deno.test("http の URL なら、host・port・protocol に分ける（E2E の偽の Stripe API）", () => {
  assertEquals(
    stripeApiTarget("http://host.docker.internal:54399", "sk_test_e2e_dummy"),
    { host: "host.docker.internal", port: 54399, protocol: "http" },
  );
});

Deno.test("ポートがなければ、http は 80、https は 443 にする", () => {
  assertEquals(stripeApiTarget("http://localhost", "sk_test_xxx"), {
    host: "localhost",
    port: 80,
    protocol: "http",
  });
  assertEquals(stripeApiTarget("https://example.com", "sk_test_xxx"), {
    host: "example.com",
    port: 443,
    protocol: "https",
  });
});

Deno.test("本番の鍵（sk_live_・rk_live_）と一緒に設定されていたら、止める", () => {
  assertThrows(() => stripeApiTarget("http://localhost:54399", "sk_live_xxx"), Error, "本番の鍵");
  assertThrows(() => stripeApiTarget("http://localhost:54399", "rk_live_xxx"), Error, "本番の鍵");
});

Deno.test("http・https 以外の URL なら、止める", () => {
  assertThrows(() => stripeApiTarget("ftp://localhost:54399", "sk_test_xxx"), Error, "http か https");
});
