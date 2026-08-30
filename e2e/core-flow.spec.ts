import { test, expect } from '@playwright/test';

/**
 * コアフロー：無料登録 〜 マイページ 〜 練習問題への回答 〜 誤答リストへの遷移
 *
 * このサービスの価値の核（無料で100問を体験し、気に入れば有料転換する導線）が
 * 一連の操作として壊れていないかを検証する。決済（Stripe）は含まない。
 *
 * 実行のたびに新規メールアドレスを生成するため、既存の会員データとは衝突しない。
 */

function uniqueTestEmail(): string {
  return `e2e-test+${Date.now()}@example.com`;
}

test.describe('無料登録からマイページ・練習問題までのコアフロー', () => {
  test('新規登録すると、認証確認なしでマイページに到達できる', async ({ page }) => {
    const email = uniqueTestEmail();
    const password = 'test-password-e2e';

    await page.goto('/signup');

    await page.getByLabel('メールアドレス').fill(email);
    await page.getByLabel('パスワード').fill(password);
    await page.getByRole('button', { name: /登録/ }).click();

    // signup成功後は /mypage に遷移する実装（SignupForm.tsx参照）。
    // メール確認が必須の設定になっている場合は /login にリダイレクトされ、ここで失敗する。
    await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });
  });

  test('マイページから練習問題に進み、回答すると正誤フィードバックが表示される', async ({ page }) => {
    const email = uniqueTestEmail();
    const password = 'test-password-e2e';

    await page.goto('/signup');
    await page.getByLabel('メールアドレス').fill(email);
    await page.getByLabel('パスワード').fill(password);
    await page.getByRole('button', { name: /登録/ }).click();
    await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });

    // 「📚 練習問題」セクションの「スタート」ボタンから出題ページへ
    await page.getByRole('button', { name: 'スタート' }).click();
    await expect(page).toHaveURL(/\/contents\/.+/, { timeout: 15000 });

    // 選択肢（ChoicesTable.tsx: role="button" の行）の1つ目を選ぶ
    const firstChoice = page.locator('tr[role="button"][data-index="0"]');
    await expect(firstChoice).toBeVisible();
    await firstChoice.click();

    // 「正解と解説を見る」ボタンでフィードバックを開く
    await page.getByRole('button', { name: '正解と解説を見る' }).click();
    await expect(page.getByText(/正解：/)).toBeVisible();
  });

  test('マイページから誤答リストを開ける', async ({ page }) => {
    const email = uniqueTestEmail();
    const password = 'test-password-e2e';

    await page.goto('/signup');
    await page.getByLabel('メールアドレス').fill(email);
    await page.getByLabel('パスワード').fill(password);
    await page.getByRole('button', { name: /登録/ }).click();
    await expect(page).toHaveURL(/\/mypage/, { timeout: 15000 });

    await page.getByRole('button', { name: '誤答リストを開く' }).click();
    await expect(page).toHaveURL(/\/mistakes\?view=wrong/, { timeout: 15000 });
  });
});