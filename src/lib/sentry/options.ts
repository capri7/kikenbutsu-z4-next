import type * as Sentry from "@sentry/nextjs";

type SentryInitOptions = NonNullable<Parameters<typeof Sentry.init>[0]>;

// URL の ? から後ろ（問い合わせの条件）を消す。
// 画面の URL（?email=…）、Supabase の問い合わせ（?user_id=eq.…）、
// 決済の戻り先（?session_id=…）を送らないため
const stripQuery = <T>(url: T): T =>
  typeof url === "string" ? (url.split("?")[0] as T) : url;

// ブラウザ・サーバー・Edge の3か所で共通の設定。
// 目的はエラーの記録と、セッション（ページを開いたことの記録）の集計に限る。
// 利用者を特定できる情報は送らない。
export const sentryOptions: SentryInitOptions = {
  // 未設定の環境（ローカル・CI）では DSN が空になり、何も送らない
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? "development",

  // SDK 11 は既定で利用者の情報や通信の中身を集めるため、すべて無効にする
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpHeaders: false,
    httpBodies: [],
    urlQueryParams: false,
    stackFrameVariables: false,
    databaseQueryData: false,
  },

  // dataCollection だけでは消えない情報を、送る直前に消す
  beforeSend(event) {
    // エラーが起きた画面・リクエストの URL のクエリ（urlQueryParams: false でも残る）
    if (event.request?.url) {
      event.request.url = stripQuery(event.request.url);
    }
    if (event.tags?.url) {
      event.tags.url = stripQuery(event.tags.url);
    }
    const nextjs = event.contexts?.nextjs;
    if (nextjs && "request_path" in nextjs) {
      nextjs.request_path = stripQuery(nextjs.request_path);
    }

    // 受け取る側に、送信元の IP アドレスを利用者の情報として記録させない
    if (event.sdk) {
      event.sdk.settings = { ...event.sdk.settings, infer_ip: "never" };
    }
    if (event.user) {
      delete event.user.ip_address;
    }

    // サーバーの機械の名前（開発の機械では個人名を含む）
    delete event.server_name;
    if (event.tags) {
      delete event.tags.server_name;
    }
    return event;
  },

  // エラーの前の記録（Breadcrumbs）は dataCollection の対象外のため、ここで加工する
  beforeBreadcrumb(breadcrumb) {
    // コンソールの出力は、利用者の情報を含みうるため送らない
    if (breadcrumb.category === "console") return null;

    // 通信と画面の移動は、宛先だけを残す
    const data = breadcrumb.data;
    if (data) {
      for (const key of ["url", "from", "to"] as const) {
        if (key in data) data[key] = stripQuery(data[key]);
      }
    }
    return breadcrumb;
  },

  // ログと計測は送らない（SDK 11 では既定で有効）。
  // 性能の計測（tracing）は tracesSampleRate を書かないことで無効のままにする
  beforeSendLog: () => null,
  beforeSendMetric: () => null,
};
