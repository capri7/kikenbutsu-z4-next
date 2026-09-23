import { test, expect, type Page } from '@playwright/test';
import { randomUUID } from 'node:crypto';

/**
 * 回帰テスト：低速回線でも、マイページのボタンとリンクが、最初のクリックで動くこと。
 * 以前は、JavaScript が届く前（ハイドレーションの前）のクリックが失われ、画面が移動しなかった。
 * 通信を遅くして（遅延 400ms、上り下りとも 400kbps）、JavaScript の到着を遅らせて確かめる。
 */

test.beforeEach(async ({ page }) => {
  // 通信が遅いと、全体の時間も延びるため、テストの制限時間を延ばす
  test.setTimeout(120_000);
  const client = await page.context().newCDPSession(page);
  await client.send('Network.enable');
  // 遅延 400ms、上り下りとも 400kbps
  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 400,
    downloadThroughput: (400 * 1024) / 8,
    uploadThroughput: (400 * 1024) / 8,
  });
});

async function signupAndOpenMypage(page: Page) {
  await page.goto('/signup');
  await page.getByLabel('メールアドレス').fill(`e2e-test+${randomUUID()}@example.com`);
  await page.getByLabel('パスワード').fill('test-password-e2e');
  await page.getByRole('button', { name: /登録/ }).click();
  await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });
}

test('低速回線でも、スタートボタンで出題ページに移動できる', async ({ page }) => {
  await signupAndOpenMypage(page);
  await page.getByRole('button', { name: 'スタート' }).click();
  await expect(page).toHaveURL(/\/contents\/.+/, { timeout: 15000 });
});

test('低速回線でも、誤答リストを開くリンクで移動できる', async ({ page }) => {
  await signupAndOpenMypage(page);
  await page.getByRole('link', { name: '誤答リストを開く' }).click();
  await expect(page).toHaveURL(/\/mistakes\?view=wrong/, { timeout: 15000 });
});