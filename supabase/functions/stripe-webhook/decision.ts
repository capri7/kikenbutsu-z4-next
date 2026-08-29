// supabase/functions/stripe-webhook/decision.ts

/**
 * Stripeのサブスクリプションオブジェクトから契約終了日（Unix秒）を解決する。
 * 優先順位: items.data[0].current_period_end > current_period_end > cancel_at > trial_end > ended_at
 * どれも存在しなければ null。
 */
export function resolveCurrentPeriodEnd(sub: {
  items?: { data?: Array<{ current_period_end?: number | null }> };
  current_period_end?: number | null;
  cancel_at?: number | null;
  trial_end?: number | null;
  ended_at?: number | null;
}): number | null {
  return (
    sub.items?.data?.[0]?.current_period_end ??
    sub.current_period_end ??
    sub.cancel_at ??
    sub.trial_end ??
    sub.ended_at ??
    null
  );
}

/**
 * stripe_eventsテーブルへの存在確認結果から、Webhookの応答を決定する。
 * 重複イベントの場合はバックグラウンド処理を実行しない（二重同期・二重削除を防ぐ）。
 */
export type WebhookResponseDecision = {
  status: number;
  body: string;
  shouldProcess: boolean;
};

export function decideWebhookResponse(existingEventFound: boolean): WebhookResponseDecision {
  if (existingEventFound) {
    return { status: 200, body: "ok (duplicate)", shouldProcess: false };
  }
  return { status: 200, body: "ok", shouldProcess: true };
}

/**
 * customer.subscription.deleted受信時、実際にauth.usersを物理削除すべきか判定する。
 * user_idが解決できていない、またはdeletion_requestedフラグが立っていない場合は削除しない。
 */
export function shouldPhysicallyDeleteUser(
  userId: string | null,
  deletionRequested: boolean | null | undefined,
): boolean {
  return !!userId && !!deletionRequested;
}