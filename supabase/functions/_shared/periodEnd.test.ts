// supabase/functions/_shared/periodEnd.test.ts
import { assertEquals } from "jsr:@std/assert";
import { resolveCurrentPeriodEnd } from "./periodEnd.ts";

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
  });
  assertEquals(result, 2000);
});

Deno.test("itemsとcurrent_period_endが無い場合、cancel_atが使われる", () => {
  const result = resolveCurrentPeriodEnd({ cancel_at: 3000, trial_end: 4000 });
  assertEquals(result, 3000);
});

Deno.test("cancel_atまで無い場合、trial_endが使われる", () => {
  const result = resolveCurrentPeriodEnd({ trial_end: 4000, ended_at: 5000 });
  assertEquals(result, 4000);
});

Deno.test("trial_endまで無い場合、ended_atが使われる", () => {
  const result = resolveCurrentPeriodEnd({ ended_at: 5000 });
  assertEquals(result, 5000);
});

Deno.test("どれも存在しない場合は null を返す", () => {
  assertEquals(resolveCurrentPeriodEnd({}), null);
});

Deno.test("値が0（Unixエポック）でも正しく採用される", () => {
  assertEquals(resolveCurrentPeriodEnd({ current_period_end: 0 }), 0);
});