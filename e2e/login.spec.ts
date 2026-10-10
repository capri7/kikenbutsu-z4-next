import { test, expect, type Page } from '@playwright/test';
import { randomUUID } from 'node:crypto';

/**
 * ログイン：登録済みのメールアドレスとパスワードでログインすると、移動先に移る（FR-03-5）
 *
 * ログインの状態が変わる移動は、ページ全体を読み込み直す（LoginClient.tsx）。
 * 移動先の指定（?next=）がなければマイページ、あればそのページに移ることを確かめる。
 */

const PASSWORD = 'test-password-e2e';

// 新しい会員を登録してからログアウトし、ログインしていない状態にする
async function signUpAndLogout(page: Page): Promise<string> {
  const email = `e2e-test+${randomUUID()}@example.com`;
  await page.goto('/signup');
  await page.getByLabel('メールアドレス').fill(email);
  await page.getByLabel('パスワード').fill(PASSWORD);
  await page.getByRole('button', { name: /登録/ }).click();
  await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });

  await page.getByRole('link', { name: 'ログアウト', exact: true }).click();
  await expect(page).toHaveURL(/\/login$/, { timeout: 15000 });
  return email;
}

async function logIn(page: Page, email: string) {
  await page.getByLabel('メールアドレス').fill(email);
  await page.getByLabel('パスワード', { exact: true }).fill(PASSWORD);
  await page.getByRole('button', { name: 'ログイン', exact: true }).click();
}

test.describe('ログイン', () => {
  test('ログインすると、マイページに移る（FR-03-5）', async ({ page }) => {
    const email = await signUpAndLogout(page);

    await logIn(page, email);
    await expect(page).toHaveURL(/\/mypage$/, { timeout: 15000 });
    await expect(page.getByRole('link', { name: 'ログアウト', exact: true })).toBeVisible();
  });

  test('移動先（?next=）を指定してログインすると、そのページに移る（FR-03-5）', async ({ page }) => {
    const email = await signUpAndLogout(page);

    await page.goto('/login?next=/checkout');
    await logIn(page, email);
    await expect(page).toHaveURL(/\/checkout$/, { timeout: 15000 });
  });
});
