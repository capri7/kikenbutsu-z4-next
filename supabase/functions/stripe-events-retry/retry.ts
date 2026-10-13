// supabase/functions/stripe-events-retry/retry.ts
//
// 未処理のまま残った Stripe の通知を処理し直し、Better Stack の Heartbeat に結果を送る流れ。
// DB と通信は deps に任せ、テストで差し替える（stripe-events-retry/retry.test.ts）。
import type { EventStore } from "../_shared/stripe-events/receive.ts";

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
 * （1つ目のコミット：まだ何もしない。テストが失敗することを確かめるため）
 */
export function retryDueEvents(_deps: RetryDeps): Promise<RetryResult> {
  return Promise.resolve({ processed: 0, failed: 0, overdue: 0 });
}

/**
 * Heartbeat の URL。成功ならそのまま、失敗なら末尾に /fail を付ける
 * （1つ目のコミット：まだ /fail を付けない）
 */
export function heartbeatUrl(baseUrl: string, _ok: boolean): string {
  return baseUrl;
}
