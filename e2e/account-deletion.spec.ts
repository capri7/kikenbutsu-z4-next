import { test, expect, type Page } from '@playwright/test';
import { createHmac, randomUUID } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';

/**
 * 退会：無料会員の即時削除、有料会員の退会の予約と取り消し、契約終了の通知による削除
 *
 * 画面から、ローカルの Supabase で動く本物の request-account-deletion・cancel-account-deletion を呼ぶ。
 * 契約終了は、Stripe と同じ方式で署名した customer.subscription.deleted の通知を、本物の stripe-webhook に送る。
 * 署名の鍵はテスト専用の値で、supabase/functions/.env（Git の管理外）に同じ値を置く（paid-conversion.spec.ts と同じ）。
 */

const WEBHOOK_SECRET = 'whsec_e2e_local_only';

function supabaseUrl(): string {
  const url = process.env.E2E_SUPABASE_URL;
  if (!url) throw new Error('E2E_SUPABASE_URL がありません（playwright.config.ts で設定する）。');
  return url;
}

function adminClient() {
  const key = process.env.E2E_SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error('E2E_SUPABASE_SERVICE_ROLE_KEY がありません（playwright.config.ts で設定する）。');
  return createClient(supabaseUrl(), key, { auth: { persistSession: false, autoRefreshToken: false } });
}

async function signUp(page: Page): Promise<string> {
  const email = `e2e-test+${randomUUID()}@example.com`;
  await page.goto('/signup');
  await page.getByLabel('メールアドレス').fill(email);
  await page.getByLabel('パスワード').fill('test-password-e2e');
  await page.getByRole('button', { name: /登録/ }).click();
  await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });
  return email;
}

async function findUserId(email: string): Promise<string | null> {
  const { data, error } = await adminClient().auth.admin.listUsers({ perPage: 1000 });
  if (error) throw error;
  return data.users.find((u) => u.email === email)?.id ?? null;
}

async function userIdOf(email: string): Promise<string> {
  const id = await findUserId(email);
  if (!id) throw new Error(`ユーザーが見つかりません：${email}`);
  return id;
}

async function profileCount(userId: string): Promise<number> {
  const { count, error } = await adminClient()
    .from('user_profiles')
    .select('user_id', { count: 'exact', head: true })
    .eq('user_id', userId);
  if (error) throw error;
  return count ?? 0;
}

// Stripe で解約の手続きを済ませた（期間の終わりで終了する）有料会員の、契約の行を作る
async function makeCancelledPaid(userId: string): Promise<string> {
  const id = randomUUID();
  const subscriptionId = `sub_e2e_${id}`;
  const { error } = await adminClient().from('subscriptions').insert({
    user_id: userId,
    stripe_customer_id: `cus_e2e_${id}`,
    stripe_subscription_id: subscriptionId,
    status: 'active',
    current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    livemode: false,
    cancel_at_period_end: true,
  });
  if (error) throw error;
  return subscriptionId;
}

async function subscriptionRow(subscriptionId: string) {
  const { data, error } = await adminClient()
    .from('subscriptions')
    .select('user_id, status, deletion_requested')
    .eq('stripe_subscription_id', subscriptionId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

// Stripe の署名の方式：v1 = HMAC-SHA256(鍵, "<時刻>.<本文>")、ヘッダーは "t=<時刻>,v1=<署名>"
function stripeSignature(payload: string, secret: string): string {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = createHmac('sha256', secret).update(`${timestamp}.${payload}`).digest('hex');
  return `t=${timestamp},v1=${signature}`;
}

async function sendSubscriptionDeleted(subscriptionId: string, userId: string) {
  const endedAt = Math.floor(Date.now() / 1000);
  const payload = JSON.stringify({
    id: `evt_e2e_${randomUUID()}`,
    object: 'event',
    type: 'customer.subscription.deleted',
    livemode: false,
    created: endedAt,
    data: {
      object: {
        id: subscriptionId,
        object: 'subscription',
        customer: subscriptionId.replace('sub_', 'cus_'),
        status: 'canceled',
        cancel_at_period_end: false,
        current_period_end: endedAt,
        ended_at: endedAt,
        latest_invoice: null,
        metadata: { user_id: userId },
        items: { object: 'list', data: [{ current_period_end: endedAt }] },
      },
    },
  });
  const res = await fetch(`${supabaseUrl()}/functions/v1/stripe-webhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'stripe-signature': stripeSignature(payload, WEBHOOK_SECRET) },
    body: payload,
  });
  return { status: res.status, body: await res.text() };
}

test.describe('退会', () => {
  test('無料会員が退会すると、アカウントと個人の記録がすぐに削除される（FR-13-1）', async ({ page }) => {
    const email = await signUp(page);
    const userId = await userIdOf(email);
    expect(await profileCount(userId)).toBe(1);

    await page.getByRole('button', { name: '退会する', exact: true }).click();
    await page.getByRole('button', { name: '本当に退会する', exact: true }).click();

    await expect(page).toHaveURL(/\/account-deleted/, { timeout: 15000 });
    await expect(page.getByText('退会手続きが完了しました')).toBeVisible();
    expect(await findUserId(email)).toBeNull();
    // 個人の記録のテーブルは ON DELETE CASCADE で消える
    expect(await profileCount(userId)).toBe(0);
  });

  test('解約の手続きを済ませた有料会員は、退会を予約でき、取り消せる（FR-13-2・FR-13-3）', async ({ page }) => {
    const email = await signUp(page);
    const userId = await userIdOf(email);
    const subscriptionId = await makeCancelledPaid(userId);
    await page.reload();

    await page.getByRole('button', { name: '退会予約に進む', exact: true }).click();
    await page.getByRole('button', { name: '本当に退会を予約する', exact: true }).click();
    await expect(page.getByText(/退会を予約しています。/)).toBeVisible({ timeout: 15000 });
    expect(await subscriptionRow(subscriptionId)).toEqual({ user_id: userId, status: 'active', deletion_requested: true });
    // 予約しただけでは、アカウントは削除されない
    expect(await findUserId(email)).toBe(userId);

    await page.getByRole('button', { name: '退会予約をキャンセル', exact: true }).click();
    await expect(page.getByRole('button', { name: '退会予約に進む', exact: true })).toBeVisible({ timeout: 15000 });
    expect(await subscriptionRow(subscriptionId)).toEqual({ user_id: userId, status: 'active', deletion_requested: false });
  });

  test('退会を予約した有料会員は、契約終了の通知でアカウントが削除され、契約の記録は残る（FR-13-2）', async ({ page }) => {
    const email = await signUp(page);
    const userId = await userIdOf(email);
    const subscriptionId = await makeCancelledPaid(userId);
    await page.reload();

    await page.getByRole('button', { name: '退会予約に進む', exact: true }).click();
    await page.getByRole('button', { name: '本当に退会を予約する', exact: true }).click();
    await expect(page.getByText(/退会を予約しています。/)).toBeVisible({ timeout: 15000 });

    const res = await sendSubscriptionDeleted(subscriptionId, userId);
    expect(res).toEqual({ status: 200, body: 'ok' });

    // 削除は、応答を返したあとに裏で行われるため、削除されるまで待つ
    await expect.poll(() => findUserId(email), { timeout: 15000 }).toBeNull();
    expect(await profileCount(userId)).toBe(0);
    // 契約の記録は ON DELETE SET NULL で、個人と切り離して残る
    expect(await subscriptionRow(subscriptionId)).toEqual({ user_id: null, status: 'canceled', deletion_requested: true });
  });
});
