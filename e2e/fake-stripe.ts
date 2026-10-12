/**
 * E2E 用の偽の Stripe API（e2e/fake-stripe-server.mjs）に、stripe-webhook が取りに来たときに返す中身を登録する。
 * 偽の Stripe API は、playwright.config.ts の webServer が起動する。
 */
const FAKE_STRIPE_URL = 'http://127.0.0.1:54399';

export async function putStripeObject(
  resource: 'subscriptions' | 'customers' | 'invoices',
  object: { id: string },
): Promise<void> {
  const res = await fetch(`${FAKE_STRIPE_URL}/__test/${resource}/${object.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
  });
  if (!res.ok) throw new Error(`偽の Stripe API に登録できませんでした（${res.status}）：${resource}/${object.id}`);
}
