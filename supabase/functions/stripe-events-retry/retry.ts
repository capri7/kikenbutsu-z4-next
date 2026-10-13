// supabase/functions/stripe-events-retry/retry.ts
//
// 未処理のまま残った Stripe の通知を処理し直し、Better Stack の Heartbeat に結果を送る流れ。
// DB と通信は deps に任せ、テストで差し替える（stripe-events-retry/retry.test.ts）。
import { type EventStore, processAndFinish } from "../_shared/stripe-events/receive.ts";

/** 処理し直す通知（stripe_events の id と、受け取ったときの中身） */
export type DueEvent = { id: string; payload: unknown };

export type RetryDeps = {
  /** 処理し直す対象の通知を、受け取った順に返す（DB の stripe_events_due_for_retry()） */
  dueEvents(): Promise<DueEvent[]>;
  /** 受け取ってから3時間以上たっても未処理の通知の件数（DB の stripe_events_overdue_count()） */
  overdueCount(): Promise<number>;
  /** 処理を1回試みた結果の記録（DB の finish_stripe_event()） */
  store: Pick<EventStore, "finish">;
  /** 通知を処理する（stripe-webhook と同じ処理） */
  process(payload: unknown): Promise<void>;
  /** Heartbeat を送る。ok が false なら失敗として送る */
  heartbeat(ok: boolean): Promise<void>;
};

export type RetryResult = { processed: number; failed: number; overdue: number };

/**
 * 処理し直す対象の通知を、受け取った順に1件ずつ処理し、結果を記録する。
 * 最後に、受け取ってから3時間以上たっても未処理の通知があれば、Heartbeat に失敗として送り、なければ成功として送る。
 * 対象の読み込みや件数の読み込みに失敗したら、Heartbeat に失敗として送ってから投げる。
 */
export async function retryDueEvents(deps: RetryDeps): Promise<RetryResult> {
  let events: DueEvent[];
  try {
    events = await deps.dueEvents();
  } catch (e) {
    await sendHeartbeat(deps, false);
    throw e;
  }

  let processed = 0;
  let failed = 0;
  for (const event of events) {
    const result = await processAndFinish(event.id, deps.store, () => deps.process(event.payload));
    if (result === "processed") processed++;
    else failed++;
  }

  let overdue: number;
  try {
    overdue = await deps.overdueCount();
  } catch (e) {
    await sendHeartbeat(deps, false);
    throw e;
  }

  await sendHeartbeat(deps, overdue === 0);
  return { processed, failed, overdue };
}

// Heartbeat を送れなくても、処理し直しの結果は変わらないため、投げずにログに出す
// （送れなければ Heartbeat が届かず、Better Stack が知らせる）
async function sendHeartbeat(deps: RetryDeps, ok: boolean): Promise<void> {
  try {
    await deps.heartbeat(ok);
  } catch (e) {
    console.error("[stripe-events-retry] failed to send heartbeat:", e);
  }
}

/**
 * Heartbeat の URL。成功ならそのまま、失敗なら末尾に /fail を付ける
 * （Better Stack の公式の文書「Cron and heartbeat monitor」）
 */
export function heartbeatUrl(baseUrl: string, ok: boolean): string {
  return ok ? baseUrl : `${baseUrl.replace(/\/+$/, "")}/fail`;
}
