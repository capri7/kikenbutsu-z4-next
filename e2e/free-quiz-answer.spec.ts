import { test, expect, type Page } from '@playwright/test';

/**
 * 回帰テスト：無料32問の回答と解説の表示。
 * - 解説を見る前は、選んだ選択肢にチェックが付き、選ぶたびに判定が出る
 * - 解説を見た後は、判定を消し、選択肢を変えられない。「次へ」は押せる
 * - 「次へ」で進んでから「戻る」で戻ると、未回答の状態に戻り、もう一度解ける
 * - reset=1 で開くと、記録が消え、URL から reset=1 が外れる
 * Q1（FREE_001）の正解は 5（プロパン）。
 */

const choice = (page: Page, n: number) => page.locator(`input[name="choice"][value="${n}"]`);

test('解説を見る前は選ぶたびに判定が出て、解説を見た後は選択を変えられず、戻るともう一度解ける', async ({ page }) => {
  await page.goto('/contents/free');
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });

  // 1回目：不正解
  await choice(page, 2).click();
  await expect(choice(page, 2)).toBeChecked();
  await expect(page.locator('.judge')).toContainText('不正解です');

  // 2回目：別の不正解
  await choice(page, 3).click();
  await expect(choice(page, 3)).toBeChecked();
  await expect(choice(page, 2)).not.toBeChecked();
  await expect(page.locator('.judge')).toContainText('不正解です');

  // 解説を見る
  await page.getByRole('button', { name: '正解と解説を見る' }).click();
  await expect(page.locator('.explanation')).toContainText('正解：5. プロパン');
  await expect(page.getByText('あなたの解答：3')).toBeVisible();
  await expect(page.locator('.judge')).toHaveCount(0);
  for (let n = 1; n <= 5; n++) await expect(choice(page, n)).toBeDisabled();
  await expect(page.getByRole('button', { name: '次へ', exact: true })).toBeEnabled();

  // 次へ進んでから戻る
  await page.getByRole('button', { name: '次へ', exact: true }).click();
  await expect(page.getByText('Q2', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: '戻る', exact: true }).click();
  await expect(page.getByText('Q1', { exact: true })).toBeVisible();

  // 未回答の状態に戻っている
  for (let n = 1; n <= 5; n++) {
    await expect(choice(page, n)).not.toBeChecked();
    await expect(choice(page, n)).toBeEnabled();
  }
  await expect(page.getByText(/あなたの解答/)).toHaveCount(0);
  await expect(page.locator('.explanation')).toHaveCount(0);
  await expect(page.locator('.judge')).toHaveCount(0);

  // もう一度解ける
  await choice(page, 5).click();
  await expect(choice(page, 5)).toBeChecked();
  await expect(page.locator('.judge')).toHaveText('正解です。');
});

// 回帰テスト：以前は URL に reset=1 が残り、再読み込みすると記録が再びリセットされていた
test('reset=1 で開くと、記録が消えて Q1 から始まり、URL から reset が外れる', async ({ page }) => {
  await page.goto('/contents/free');
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });
  await choice(page, 5).click();
  await expect(page.getByText('正解 1/32')).toBeVisible();
  await page.getByRole('button', { name: '次へ', exact: true }).click();
  await expect(page.getByText('Q2', { exact: true })).toBeVisible();

  await page.goto('/contents/free?reset=1');
  await expect(page).toHaveURL(/\/contents\/free$/, { timeout: 15000 });
  await expect(page.getByText('Q1', { exact: true })).toBeVisible();
  await expect(page.getByText('正解 0/32')).toBeVisible();

  // 再読み込みしても消えたまま（空の状態が保存されている）
  await page.reload();
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });
  await expect(page.getByText('正解 0/32')).toBeVisible();
});