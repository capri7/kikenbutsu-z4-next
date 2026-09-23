import { test, expect, type Page } from '@playwright/test';
import { randomUUID } from 'node:crypto';

/**
 * 回帰テスト：誤答リスト・復習リストに進んだ後、マイページに戻っても、「スタート」が動くこと。
 * 戻り方は、ブラウザの「戻る」と、メニューの「マイページ」の2通りを確かめる。
 */

async function signupAndOpenMypage(page: Page) {
  await page.goto('/signup');
  await page.getByLabel('メールアドレス').fill(`e2e-test+${randomUUID()}@example.com`);
  await page.getByLabel('パスワード').fill('test-password-e2e');
  await page.getByRole('button', { name: /登録/ }).click();
  await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });
}

const targets = [
  { name: '誤答リストを開く', url: /\/mistakes\?view=wrong/ },
  { name: '復習リストを開く', url: /\/review/ },
];

for (const target of targets) {
  test(`${target.name} → ブラウザの「戻る」→ スタートで出題ページに移動できる`, async ({ page }) => {
    await signupAndOpenMypage(page);
    await page.getByRole('link', { name: target.name }).click();
    await expect(page).toHaveURL(target.url, { timeout: 15000 });

    await page.goBack();
    await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });

    await page.getByRole('button', { name: 'スタート' }).click();
    await expect(page).toHaveURL(/\/contents\/.+/, { timeout: 15000 });
  });

  test(`${target.name} → メニューの「マイページ」→ スタートで出題ページに移動できる`, async ({ page }) => {
    await signupAndOpenMypage(page);
    await page.getByRole('link', { name: target.name }).click();
    await expect(page).toHaveURL(target.url, { timeout: 15000 });

    await page
      .getByRole('navigation', { name: 'メインメニュー' })
      .getByRole('link', { name: 'マイページ' })
      .click();
    await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });

    await page.getByRole('button', { name: 'スタート' }).click();
    await expect(page).toHaveURL(/\/contents\/.+/, { timeout: 15000 });
  });
}