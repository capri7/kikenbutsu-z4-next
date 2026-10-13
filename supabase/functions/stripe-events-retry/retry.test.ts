// supabase/functions/stripe-events-retry/retry.test.ts
import { assertEquals, assertRejects } from "jsr:@std/assert";
import { type DueEvent, heartbeatUrl, type RetryDeps, retryDueEvents } from "./retry.ts";

type Recorder = {
  finished: { id: string; error: string | null }[];
  processedPayloads: unknown[];
  heartbeats: boolean[];
};

function fakeDeps(
  options: {
    events?: DueEvent[];
    overdue?: number;
    failIds?: string[];
    dueEventsError?: Error;
    overdueError?: Error;
    heartbeatError?: Error;
  },
): { deps: RetryDeps; rec: Recorder } {
  const rec: Recorder = { finished: [], processedPayloads: [], heartbeats: [] };
  const deps: RetryDeps = {
    dueEvents() {
      if (options.dueEventsError) return Promise.reject(options.dueEventsError);
      return Promise.resolve(options.events ?? []);
    },
    overdueCount() {
      if (options.overdueError) return Promise.reject(options.overdueError);
      return Promise.resolve(options.overdue ?? 0);
    },
    store: {
      finish(id, error) {
        rec.finished.push({ id, error });
        return Promise.resolve();
      },
    },
    process(payload) {
      rec.processedPayloads.push(payload);
      const id = (payload as { id: string }).id;
      if (options.failIds?.includes(id)) return Promise.reject(new Error(`処理に失敗：${id}`));
      return Promise.resolve();
    },
    heartbeat(ok) {
      rec.heartbeats.push(ok);
      if (options.heartbeatError) return Promise.reject(options.heartbeatError);
      return Promise.resolve();
    },
  };
  return { deps, rec };
}

const EVENTS: DueEvent[] = [
  { id: "evt_1", payload: { id: "evt_1" } },
  { id: "evt_2", payload: { id: "evt_2" } },
  { id: "evt_3", payload: { id: "evt_3" } },
];

Deno.test("対象の通知を、受け取った順に処理し、結果を記録する", async () => {
  const { deps, rec } = fakeDeps({ events: EVENTS });
  const result = await retryDueEvents(deps);
  assertEquals(rec.processedPayloads, [{ id: "evt_1" }, { id: "evt_2" }, { id: "evt_3" }]);
  assertEquals(rec.finished, [
    { id: "evt_1", error: null },
    { id: "evt_2", error: null },
    { id: "evt_3", error: null },
  ]);
  assertEquals(result, { processed: 3, failed: 0, overdue: 0 });
});

Deno.test("処理に失敗した通知は、失敗の内容を記録し、残りの通知の処理を続ける", async () => {
  const { deps, rec } = fakeDeps({ events: EVENTS, failIds: ["evt_2"] });
  const result = await retryDueEvents(deps);
  assertEquals(rec.finished, [
    { id: "evt_1", error: null },
    { id: "evt_2", error: "Error: 処理に失敗：evt_2" },
    { id: "evt_3", error: null },
  ]);
  assertEquals(result, { processed: 2, failed: 1, overdue: 0 });
});

Deno.test("3時間たっても未処理の通知がなければ、Heartbeat に成功を送る", async () => {
  const { deps, rec } = fakeDeps({ events: EVENTS, overdue: 0 });
  await retryDueEvents(deps);
  assertEquals(rec.heartbeats, [true]);
});

Deno.test("3時間たっても未処理の通知があれば、Heartbeat に失敗を送る", async () => {
  const { deps, rec } = fakeDeps({ events: [], overdue: 2 });
  const result = await retryDueEvents(deps);
  assertEquals(rec.heartbeats, [false]);
  assertEquals(result, { processed: 0, failed: 0, overdue: 2 });
});

Deno.test("処理し直す対象がなくても、Heartbeat を送る（ジョブが動いていることを知らせる）", async () => {
  const { deps, rec } = fakeDeps({ events: [], overdue: 0 });
  await retryDueEvents(deps);
  assertEquals(rec.heartbeats, [true]);
});

Deno.test("対象の読み込みに失敗したら、Heartbeat に失敗を送ってから投げ、何も処理しない", async () => {
  const { deps, rec } = fakeDeps({ dueEventsError: new Error("DB に届かない") });
  await assertRejects(() => retryDueEvents(deps), Error, "DB に届かない");
  assertEquals(rec.heartbeats, [false]);
  assertEquals(rec.processedPayloads, []);
});

Deno.test("3時間の件数の読み込みに失敗したら、Heartbeat に失敗を送ってから投げる", async () => {
  const { deps, rec } = fakeDeps({ events: EVENTS, overdueError: new Error("DB に届かない") });
  await assertRejects(() => retryDueEvents(deps), Error, "DB に届かない");
  assertEquals(rec.finished.length, 3);
  assertEquals(rec.heartbeats, [false]);
});

Deno.test("Heartbeat を送れなくても、投げずに結果を返す", async () => {
  const { deps, rec } = fakeDeps({ events: EVENTS, heartbeatError: new Error("Better Stack に届かない") });
  const result = await retryDueEvents(deps);
  assertEquals(result, { processed: 3, failed: 0, overdue: 0 });
  assertEquals(rec.heartbeats, [true]);
});

Deno.test("Heartbeat の URL：成功はそのまま、失敗は末尾に /fail を付ける", () => {
  const base = "https://uptime.betterstack.com/api/v1/heartbeat/abc";
  assertEquals(heartbeatUrl(base, true), base);
  assertEquals(heartbeatUrl(base, false), `${base}/fail`);
  assertEquals(heartbeatUrl(`${base}/`, false), `${base}/fail`);
});
