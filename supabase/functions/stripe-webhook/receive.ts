// supabase/functions/stripe-webhook/receive.ts
//
// Stripe の通知の受け取りと、処理の結果の記録の流れ（DB の呼び出しは store に任せ、テストで差し替える）
// Stripe の勧め：すぐに 2xx を返し、処理は非同期で行う。重複の判定は「処理済み」の通知に限る
// https://docs.stripe.com/webhooks

export type StripeEventRecord = {
  id: string;
  type: string;
  livemode: boolean;
  payload: unknown;
};

export type EventStore = {
  /** 未処理として記録する（すでにあれば残す）。すでに処理済みなら true を返す */
  record(event: StripeEventRecord): Promise<boolean>;
  /** 処理を1回試みた結果を記録する。error が null なら成功 */
  finish(eventId: string, error: string | null): Promise<void>;
};

export type ReceiveResult = {
  status: number;
  body: string;
  shouldProcess: boolean;
};

/**
 * 署名を確かめた通知を記録し、Stripe に返す応答と、処理するかどうかを決める。
 * 記録に失敗したら 500 を返す（Stripe が再送する）。記録できないまま 200 を返すと、通知が失われるため
 */
export async function receiveEvent(event: StripeEventRecord, store: EventStore): Promise<ReceiveResult> {
  let alreadyProcessed: boolean;
  try {
    alreadyProcessed = await store.record(event);
  } catch (e) {
    console.error("[webhook] failed to record event:", event.id, e);
    return { status: 500, body: "failed to record event", shouldProcess: false };
  }
  if (alreadyProcessed) {
    return { status: 200, body: "ok (duplicate)", shouldProcess: false };
  }
  return { status: 200, body: "ok", shouldProcess: true };
}

/**
 * 通知を処理し、結果を記録する。処理が失敗しても投げずに、失敗の内容を記録して未処理のまま残す。
 * 結果の記録に失敗した場合も未処理のまま残る（処理は何度行っても結果が同じになる作りのため、処理し直してよい）
 */
export async function processAndFinish(
  eventId: string,
  store: EventStore,
  process: () => Promise<void>,
): Promise<"processed" | "failed"> {
  let error: string | null = null;
  try {
    await process();
  } catch (e) {
    error = errorMessage(e);
    console.error("[webhook] processing failed:", eventId, e);
  }
  try {
    await store.finish(eventId, error);
  } catch (e) {
    console.error("[webhook] failed to record result:", eventId, e);
  }
  return error === null ? "processed" : "failed";
}

const MAX_ERROR_LENGTH = 1000;

/** 失敗の内容を、記録できる文字列にする（Supabase のエラーは Error ではなく { code, message } の形で届く） */
export function errorMessage(e: unknown): string {
  let text: string;
  if (e instanceof Error) {
    text = `${e.name}: ${e.message}`;
  } else if (typeof e === "object" && e !== null && "message" in e) {
    const { code, message } = e as { code?: unknown; message?: unknown };
    text = code ? `${String(code)}: ${String(message)}` : String(message);
  } else {
    text = String(e);
  }
  return text.length > MAX_ERROR_LENGTH ? text.slice(0, MAX_ERROR_LENGTH) : text;
}
