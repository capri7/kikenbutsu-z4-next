// supabase/functions/_shared/stripeApiTarget.ts

/** stripe-node の設定のうち、API の宛先を決める項目（host・port・protocol） */
export type StripeApiTarget = {
  host?: string;
  port?: number;
  protocol?: "http" | "https";
};

/**
 * Stripe の API の宛先を、環境変数 STRIPE_API_BASE_URL で差し替えるための設定を作る。
 * 手元と CI の E2E で、偽の Stripe API（e2e/fake-stripe-server.mjs）に向けるためだけに使う。
 * 本番では設定しない。設定がなければ空の設定を返し、stripe-node の既定の宛先（https://api.stripe.com）のまま。
 * 本番の鍵（sk_live_・rk_live_）と一緒に設定されていたら、本番の鍵を偽の宛先に送らないよう、誤りとして止める。
 */
export function stripeApiTarget(
  baseUrl: string | undefined,
  secretKey: string,
): StripeApiTarget {
  if (!baseUrl) return {};
  if (secretKey.startsWith("sk_live_") || secretKey.startsWith("rk_live_")) {
    throw new Error("STRIPE_API_BASE_URL は、本番の鍵と一緒には使えない");
  }
  const url = new URL(baseUrl);
  const protocol = url.protocol === "http:"
    ? "http"
    : url.protocol === "https:"
    ? "https"
    : null;
  if (protocol === null) {
    throw new Error(`STRIPE_API_BASE_URL は http か https の URL にする：${baseUrl}`);
  }
  const port = url.port ? Number(url.port) : protocol === "https" ? 443 : 80;
  return { host: url.hostname, port, protocol };
}
