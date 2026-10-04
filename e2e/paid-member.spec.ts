import { test, expect, type Page } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';

/**
 * 有料会員の画面の出し分け：有料の問題・ヘッダー・退会のカード
 *
 * 決済（Stripe）は通さず、テストの中で subscriptions に有効な契約の行を直接作る。
 * subscriptions はクライアントから書けないため、service_role の鍵で書く。
 * 接続先は playwright.config.ts でローカルの Supabase に限定している。
 */

const PAID_QUESTION_ID = 'E2E_Test_004'; // seed.sql の有料の問題（is_paid = true）

function adminClient() {
  const url = process.env.E2E_SUPABASE_URL;
  const key = process.env.E2E_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('E2E_SUPABASE_URL・E2E_SUPABASE_SERVICE_ROLE_KEY がありません（playwright.config.ts で設定する）。');
  }
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
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

// 登録したユーザーに、有効な契約（解約していない）の行を作る
async function makePaid(email: string): Promise<void> {
  const admin = adminClient();
  const { data, error } = await admin.auth.admin.listUsers({ perPage: 1000 });
  if (error) throw error;
  const user = data.users.find((u) => u.email === email);
  if (!user) throw new Error(`ユーザーが見つかりません：${email}`);

  const id = randomUUID();
  const { error: insertError } = await admin.from('subscriptions').insert({
    user_id: user.id,
    stripe_customer_id: `cus_e2e_${id}`,
    stripe_subscription_id: `sub_e2e_${id}`,
    status: 'active',
    current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    livemode: false,
    cancel_at_period_end: false,
  });
  if (insertError) throw insertError;
}

test.describe('有料会員の画面の出し分け', () => {
  test('無料会員は有料の問題を開けず、有料会員になると開ける', async ({ page }) => {
    const email = await signUp(page);

    await page.goto(`/contents/${PAID_QUESTION_ID}`);
    await expect(page.getByText('This page could not be found')).toBeVisible();

    await makePaid(email);

    await page.goto(`/contents/${PAID_QUESTION_ID}`);
    await expect(page.getByText('E2Eテスト用の有料の問題です。')).toBeVisible();
  });

  test('有料会員になると、ヘッダーが「購入」から「請求情報」に変わる', async ({ page }) => {
    const email = await signUp(page);
    await expect(page.getByRole('link', { name: '購入', exact: true })).toBeVisible();

    await makePaid(email);
    await page.reload();

    await expect(page.getByRole('link', { name: '請求情報', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: '購入', exact: true })).toHaveCount(0);
  });

  test('有料会員の退会のカードは、解約の案内を表示する', async ({ page }) => {
    const email = await signUp(page);
    await expect(page.getByRole('button', { name: '退会する', exact: true })).toBeVisible();

    await makePaid(email);
    await page.reload();

    await expect(page.getByText('退会をご希望の場合は、上記「請求情報を開く」からサブスクリプションを解約してください。')).toBeVisible();
    await expect(page.getByRole('button', { name: '退会する', exact: true })).toHaveCount(0);
  });
});
