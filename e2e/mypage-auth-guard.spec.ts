import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';

/**
 * ログインしていない状態でマイページを開くと、ログインに移る（FR-03-2）
 *
 * マイページはサーバー側で Supabase Auth の getUser() を確かめ、ログインしていなければ /login に移す。
 * 一度もログインしていない場合と、ログアウトしたあとの場合の両方を確かめる。
 */

test.describe('ログインしていない状態のマイページ', () => {
  test('一度もログインしていなければ、マイページを開くとログインに移る（FR-03-2）', async ({ page }) => {
    await page.goto('/mypage');
    await expect(page).toHaveURL(/\/login$/, { timeout: 15000 });
    await expect(page.getByRole('heading', { name: 'ログイン' })).toBeVisible();
  });

  test('ログアウトしたあとにマイページを開くと、ログインに移る（FR-03-2）', async ({ page }) => {
    await page.goto('/signup');
    await page.getByLabel('メールアドレス').fill(`e2e-test+${randomUUID()}@example.com`);
    await page.getByLabel('パスワード').fill('test-password-e2e');
    await page.getByRole('button', { name: /登録/ }).click();
    await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });

    await page.getByRole('link', { name: 'ログアウト', exact: true }).click();
    await expect(page).toHaveURL(/\/login$/, { timeout: 15000 });

    await page.goto('/mypage');
    await expect(page).toHaveURL(/\/login$/, { timeout: 15000 });
    await expect(page.getByRole('heading', { name: 'ログイン' })).toBeVisible();
  });
});
