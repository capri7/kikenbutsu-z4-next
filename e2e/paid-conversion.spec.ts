import { test, expect, type Page } from '@playwright/test';
import { createHmac, randomUUID } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';

/**
 * 有料転換：Stripe の通知（Webhook）を受けて、契約が DB に入り、有料の問題が開けるようになるまで。
 * あわせて、契約の更新（解約の予約）と終了の通知が反映されること
 *
 * 本物の stripe-webhook（ローカルの Supabase の Edge Functions）に、Stripe と同じ方式で署名した
 * customer.subscription.created の通知を送る。Stripe の決済画面は、Stripe の案内に従い自動テストの
 * 対象外とする（https://docs.stripe.com/automated-testing）。
 *
 * 署名の鍵はテスト専用の値で、supabase/functions/.env（Git の管理外）に同じ値を置く。
 * CI では、ワークフローが supabase start の前にこのファイルを作る。
 */

const WEBHOOK_SECRET = 'whsec_e2e_local_only';
const PAID_QUESTION_ID = 'E2E_Test_004'; // seed.sql の有料の問題（is_paid = true）

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

async function userIdOf(email: string): Promise<string> {
  const { data, error } = await adminClient().auth.admin.listUsers({ perPage: 1000 });
  if (error) throw error;
  const user = data.users.find((u) => u.email === email);
  if (!user) throw new Error(`ユーザーが見つかりません：${email}`);
  return user.id;
}

// 本番の決済と同じく、契約の metadata.user_id で本人を決める（create-checkout-session が載せる値）
function subscriptionCreatedEvent(userId: string) {
  const id = randomUUID();
  const periodEnd = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60;
  return {
    id: `evt_e2e_${id}`,
    object: 'event',
    type: 'customer.subscription.created',
    livemode: false,
    created: Math.floor(Date.now() / 1000),
    data: {
      object: {
        id: `sub_e2e_${id}`,
        object: 'subscription',
        customer: `cus_e2e_${id}`,
        status: 'active',
        cancel_at_period_end: false,
        current_period_end: periodEnd,
        latest_invoice: null,
        metadata: { user_id: userId },
        items: { object: 'list', data: [{ current_period_end: periodEnd }] },
      },
    },
  };
}

// Stripe の署名の方式：v1 = HMAC-SHA256(鍵, "<時刻>.<本文>")、ヘッダーは "t=<時刻>,v1=<署名>"
function stripeSignature(payload: string, secret: string): string {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = createHmac('sha256', secret).update(`${timestamp}.${payload}`).digest('hex');
  return `t=${timestamp},v1=${signature}`;
}

async function sendWebhook(payload: string, signatureHeader: string) {
  const res = await fetch(`${supabaseUrl()}/functions/v1/stripe-webhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'stripe-signature': signatureHeader },
    body: payload,
  });
  return { status: res.status, body: await res.text() };
}

async function profileOf(userId: string) {
  const { data, error } = await adminClient()
    .from('user_profiles')
    .select('email, stripe_customer_id')
    .eq('user_id', userId)
    .single();
  if (error) throw error;
  return data;
}

async function subscriptionRows(subscriptionId: string) {
  const { data, error } = await adminClient()
    .from('subscriptions')
    .select('status, user_id')
    .eq('stripe_subscription_id', subscriptionId);
  if (error) throw error;
  return data ?? [];
}

test.describe('有料転換（Webhook から有料の問題の解放まで）', () => {
  test('契約の通知を受けると有料会員になり、有料の問題を開ける（FR-11-3・FR-04-2）', async ({ page }) => {
    const email = await signUp(page);
    const userId = await userIdOf(email);

    await page.goto(`/contents/${PAID_QUESTION_ID}`);
    await expect(page.getByText('This page could not be found')).toBeVisible();

    const event = subscriptionCreatedEvent(userId);
    const payload = JSON.stringify(event);
    const res = await sendWebhook(payload, stripeSignature(payload, WEBHOOK_SECRET));
    expect(res).toEqual({ status: 200, body: 'ok' });

    // 契約の反映は、応答を返したあとに裏で行われるため、反映されるまで待つ
    await expect
      .poll(() => subscriptionRows(event.data.object.id), { timeout: 15000 })
      .toEqual([{ status: 'active', user_id: userId }]);

    await page.goto(`/contents/${PAID_QUESTION_ID}`);
    await expect(page.getByText('E2Eテスト用の有料の問題です。')).toBeVisible();
    await expect(page.getByRole('link', { name: '請求情報', exact: true })).toBeVisible();
  });

  test('同じ通知が2回届いても、1回だけ処理する（FR-11-2）', async ({ page }) => {
    const email = await signUp(page);
    const userId = await userIdOf(email);

    const event = subscriptionCreatedEvent(userId);
    const payload = JSON.stringify(event);

    const first = await sendWebhook(payload, stripeSignature(payload, WEBHOOK_SECRET));
    expect(first).toEqual({ status: 200, body: 'ok' });
    await expect
      .poll(() => subscriptionRows(event.data.object.id), { timeout: 15000 })
      .toHaveLength(1);

    const second = await sendWebhook(payload, stripeSignature(payload, WEBHOOK_SECRET));
    expect(second).toEqual({ status: 200, body: 'ok (duplicate)' });
    expect(await subscriptionRows(event.data.object.id)).toHaveLength(1);
  });

  test('署名が正しくない通知は拒否し、有料会員にしない（FR-11-1）', async ({ page }) => {
    const email = await signUp(page);
    const userId = await userIdOf(email);

    const event = subscriptionCreatedEvent(userId);
    const payload = JSON.stringify(event);
    const res = await sendWebhook(payload, stripeSignature(payload, 'whsec_wrong_secret'));
    expect(res).toEqual({ status: 400, body: 'invalid signature' });

    expect(await subscriptionRows(event.data.object.id)).toHaveLength(0);
    await page.goto(`/contents/${PAID_QUESTION_ID}`);
    await expect(page.getByText('This page could not be found')).toBeVisible();
  });

  test('Stripe からメールアドレスを取れなくても、会員のメールアドレスを消さない（FR-11-4）', async ({ page }) => {
    const email = await signUp(page);
    const userId = await userIdOf(email);

    // テストの Stripe の鍵は本物ではないため、stripe-webhook は Stripe からメールアドレスを取得できない（null になる）
    const event = subscriptionCreatedEvent(userId);
    expect(await sendSigned(event)).toEqual({ status: 200, body: 'ok' });
    await expect
      .poll(() => subscriptionRows(event.data.object.id), { timeout: 15000 })
      .toEqual([{ status: 'active', user_id: userId }]);

    // user_profiles は subscriptions より先に書き込まれる。登録時のメールアドレスは残り、顧客 ID は反映される
    expect(await profileOf(userId)).toEqual({ email, stripe_customer_id: event.data.object.customer });
  });
});

// 同じ契約について、あとから届く通知（更新・終了）を作る。イベントの ID は通知ごとに新しくする
function followUpEvent(
  created: ReturnType<typeof subscriptionCreatedEvent>,
  type: 'customer.subscription.updated' | 'customer.subscription.deleted',
  changes: { status: string; cancel_at_period_end: boolean },
) {
  return {
    ...created,
    id: `evt_e2e_${randomUUID()}`,
    type,
    created: Math.floor(Date.now() / 1000),
    data: { object: { ...created.data.object, ...changes } },
  };
}

async function sendSigned(event: object) {
  const payload = JSON.stringify(event);
  return sendWebhook(payload, stripeSignature(payload, WEBHOOK_SECRET));
}

async function subscriptionState(subscriptionId: string) {
  const { data, error } = await adminClient()
    .from('subscriptions')
    .select('status, cancel_at_period_end')
    .eq('stripe_subscription_id', subscriptionId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

test.describe('契約の更新・終了（Webhook）', () => {
  test('解約の予約の通知を受けると反映され、期間の終わりまでは有料会員のまま（FR-11-3）', async ({ page }) => {
    const email = await signUp(page);
    const userId = await userIdOf(email);
    const created = subscriptionCreatedEvent(userId);
    const subscriptionId = created.data.object.id;

    expect(await sendSigned(created)).toEqual({ status: 200, body: 'ok' });
    await expect
      .poll(() => subscriptionState(subscriptionId), { timeout: 15000 })
      .toEqual({ status: 'active', cancel_at_period_end: false });

    const updated = followUpEvent(created, 'customer.subscription.updated', {
      status: 'active',
      cancel_at_period_end: true,
    });
    expect(await sendSigned(updated)).toEqual({ status: 200, body: 'ok' });
    await expect
      .poll(() => subscriptionState(subscriptionId), { timeout: 15000 })
      .toEqual({ status: 'active', cancel_at_period_end: true });

    // 期間の終わりまでは有料の問題を開け、退会のカードは退会の予約の案内に変わる
    await page.goto(`/contents/${PAID_QUESTION_ID}`);
    await expect(page.getByText('E2Eテスト用の有料の問題です。')).toBeVisible();
    await page.goto('/mypage');
    await expect(page.getByRole('button', { name: '退会予約に進む', exact: true })).toBeVisible({ timeout: 15000 });
  });

  test('契約終了の通知を受けると無料会員に戻り、有料の問題を開けなくなる（FR-11-3）', async ({ page }) => {
    const email = await signUp(page);
    const userId = await userIdOf(email);
    const created = subscriptionCreatedEvent(userId);
    const subscriptionId = created.data.object.id;

    expect(await sendSigned(created)).toEqual({ status: 200, body: 'ok' });
    await expect
      .poll(() => subscriptionState(subscriptionId), { timeout: 15000 })
      .toEqual({ status: 'active', cancel_at_period_end: false });
    await page.goto(`/contents/${PAID_QUESTION_ID}`);
    await expect(page.getByText('E2Eテスト用の有料の問題です。')).toBeVisible();

    const deleted = followUpEvent(created, 'customer.subscription.deleted', {
      status: 'canceled',
      cancel_at_period_end: false,
    });
    expect(await sendSigned(deleted)).toEqual({ status: 200, body: 'ok' });
    await expect
      .poll(() => subscriptionState(subscriptionId), { timeout: 15000 })
      .toEqual({ status: 'canceled', cancel_at_period_end: false });

    await page.goto(`/contents/${PAID_QUESTION_ID}`);
    await expect(page.getByText('This page could not be found')).toBeVisible();
    await expect(page.getByRole('link', { name: '購入', exact: true })).toBeVisible();
    // 退会の予約がないので、アカウントは残る
    expect(await userIdOf(email)).toBe(userId);
  });
});
