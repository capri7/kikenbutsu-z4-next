// supabase/functions/stripe-webhook/receive.test.ts
import { assertEquals } from "jsr:@std/assert";
import {
  type EventStore,
  errorMessage,
  processAndFinish,
  receiveEvent,
  type StripeEventRecord,
} from "./receive.ts";

const EVENT: StripeEventRecord = {
  id: "evt_test_1",
  type: "customer.subscription.created",
  livemode: false,
  payload: { id: "evt_test_1" },
};

// DB の代わりに、記録の状態をメモリに持つ偽物。失敗させたい呼び出しを指定できる
function fakeStore(opts: { processed?: boolean; failRecord?: boolean; failFinish?: boolean } = {}) {
  const calls = { record: 0, finish: [] as Array<{ id: string; error: string | null }> };
  let processed = opts.processed ?? false;
  const store: EventStore = {
    record() {
      calls.record++;
      if (opts.failRecord) return Promise.reject({ code: "PGRST000", message: "upstream connection reset" });
      return Promise.resolve(processed);
    },
    finish(id, error) {
      calls.finish.push({ id, error });
      if (opts.failFinish) return Promise.reject(new Error("upstream connection reset"));
      if (error === null) processed = true;
      return Promise.resolve();
    },
  };
  return { store, calls };
}

// ---- 受け取り ----

Deno.test("初めて届いた通知は、記録して 200 を返し、処理する", async () => {
  const { store, calls } = fakeStore();
  assertEquals(await receiveEvent(EVENT, store), { status: 200, body: "ok", shouldProcess: true });
  assertEquals(calls.record, 1);
});

Deno.test("処理済みの通知が再送されたら、200 の ok (duplicate) を返し、処理しない", async () => {
  const { store } = fakeStore({ processed: true });
  assertEquals(await receiveEvent(EVENT, store), { status: 200, body: "ok (duplicate)", shouldProcess: false });
});

Deno.test("記録はあるが未処理の通知（前回の処理が失敗）が再送されたら、重複として飛ばさず、もう一度処理する", async () => {
  const { store } = fakeStore({ processed: false });
  // 前回：処理が失敗し、未処理のまま残っている
  await receiveEvent(EVENT, store);
  await processAndFinish(EVENT.id, store, () => Promise.reject(new Error("db write failed")));
  // 再送
  assertEquals(await receiveEvent(EVENT, store), { status: 200, body: "ok", shouldProcess: true });
});

Deno.test("通知を記録できなかったら（DB に書けない）、500 を返して処理しない（Stripe に再送させる）", async () => {
  const { store } = fakeStore({ failRecord: true });
  assertEquals(await receiveEvent(EVENT, store), { status: 500, body: "failed to record event", shouldProcess: false });
});

// ---- 処理と結果の記録 ----

Deno.test("処理が成功したら、成功として記録する", async () => {
  const { store, calls } = fakeStore();
  assertEquals(await processAndFinish(EVENT.id, store, () => Promise.resolve()), "processed");
  assertEquals(calls.finish, [{ id: EVENT.id, error: null }]);
});

Deno.test("処理が失敗したら、投げずに失敗の内容を記録し、未処理のまま残す", async () => {
  const { store, calls } = fakeStore();
  const result = await processAndFinish(EVENT.id, store, () =>
    Promise.reject({ code: "23503", message: 'insert or update on table "user_profiles" violates foreign key constraint' })
  );
  assertEquals(result, "failed");
  assertEquals(calls.finish, [
    { id: EVENT.id, error: '23503: insert or update on table "user_profiles" violates foreign key constraint' },
  ]);
  // 未処理のまま残るので、再送されたら処理し直す
  assertEquals((await receiveEvent(EVENT, store)).shouldProcess, true);
});

Deno.test("処理は成功したが結果を記録できなかったら、投げずに終わり、未処理のまま残る（処理し直してよい）", async () => {
  const { store, calls } = fakeStore({ failFinish: true });
  assertEquals(await processAndFinish(EVENT.id, store, () => Promise.resolve()), "processed");
  assertEquals(calls.finish.length, 1);
  assertEquals((await receiveEvent(EVENT, store)).shouldProcess, true);
});

// ---- 失敗の内容の文字列 ----

Deno.test("Error は、名前と内容を記録する", () => {
  assertEquals(errorMessage(new TypeError("x is undefined")), "TypeError: x is undefined");
});

Deno.test("Supabase のエラー（{ code, message }）は、コードと内容を記録する", () => {
  assertEquals(errorMessage({ code: "PGRST000", message: "connection reset" }), "PGRST000: connection reset");
});

Deno.test("長すぎる内容は、1000文字までに切る", () => {
  assertEquals(errorMessage("a".repeat(1500)).length, 1000);
});
