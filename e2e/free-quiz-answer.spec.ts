import { test, expect, type Page } from '@playwright/test';

/**
 * 回帰テスト：無料32問の回答と解説の表示。
 * - 解説を見る前は、選んだ選択肢にチェックが付き、選ぶたびに判定が出る
 * - 解説を見た後は、判定を消し、選択肢を変えられない。「次へ」は押せる
 * - 「次へ」で進んでから「戻る」で戻ると、未回答の状態に戻り、もう一度解ける
 * - reset=1 で開くと、記録が消え、URL から reset=1 が外れる
 * - 正解していない問題は、再読み込み・戻る・次へで表示し直すと未回答の状態に戻る
 * - 選択肢は、ラジオボタンと文字を押したときだけ選ばれる（余白を押しても選ばれない）
 * - 選択肢を押せるときだけ、ラジオボタンと文字の上でカーソルが指の形になる
 * - 「ヒントを見る」は不正解のときだけ表示し、正解した後は表示しない
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
  // 押せないときは、ラジオボタンにも文字にも、カーソルを指の形にしない
  await expect(choice(page, 1)).toHaveCSS('cursor', 'default');
  await expect(page.getByText('過酸化水素', { exact: true })).toHaveCSS('cursor', 'default');
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


// 次の問題に進んでから再読み込みしても、まだ解いていない問題に選択が付かないこと
test('次の問題に進んでから再読み込みしても、未回答の問題に選択が付かない', async ({ page }) => {
  await page.goto('/contents/free');
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });
  await choice(page, 5).click();
  await expect(page.getByText('正解 1/32')).toBeVisible();
  await page.getByRole('button', { name: '次へ', exact: true }).click();
  await expect(page.getByText('Q2', { exact: true })).toBeVisible();

  await page.reload();
  await expect(page.getByText('Q2', { exact: true })).toBeVisible({ timeout: 15000 });
  // 再読み込みの後に遅れて選択が起きないかを見るため、あえて待つ
  await page.waitForTimeout(3000);

  await expect(page.getByText('正解 1/32')).toBeVisible();
  for (let n = 1; n <= 5; n++) await expect(choice(page, n)).not.toBeChecked();
  await expect(page.getByText(/あなたの解答/)).toHaveCount(0);
  const saved = await page.evaluate(() => localStorage.getItem('free32_progress_v1'));
  expect(saved).not.toContain('FREE_002');
});


test('選択肢の文字の右側の余白を押しても選ばれず、文字を押すと選ばれる', async ({ page }) => {
  await page.goto('/contents/free');
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });
  // 押せる部分（ラジオボタンと文字）では、カーソルが指の形になる
  await expect(choice(page, 1)).toHaveCSS('cursor', 'pointer');
  await expect(page.getByText('過酸化水素', { exact: true })).toHaveCSS('cursor', 'pointer');

  // 選択肢の一覧の右端近く（文字のない余白）を、1行目の高さで押す
  const list = await page.locator('ul.choices').boundingBox();
  const firstRow = await page.locator('ul.choices li').first().boundingBox();
  if (!list || !firstRow) throw new Error('選択肢の一覧が見つからない');
  await page.mouse.click(list.x + list.width - 10, firstRow.y + firstRow.height / 2);
  for (let n = 1; n <= 5; n++) await expect(choice(page, n)).not.toBeChecked();

  // 文字を押すと選ばれる
  await page.getByText('硫黄', { exact: true }).click();
  await expect(choice(page, 2)).toBeChecked();
});

test('正解していない問題は、再読み込みすると未回答の状態に戻る', async ({ page }) => {
  await page.goto('/contents/free');
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });
  await choice(page, 2).click();
  await expect(page.locator('.judge')).toContainText('不正解です');

  await page.reload();
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });
  for (let n = 1; n <= 5; n++) await expect(choice(page, n)).not.toBeChecked();
  await expect(page.getByText(/あなたの解答/)).toHaveCount(0);
  await expect(page.locator('.judge')).toHaveCount(0);
});

test('正解していない問題は、戻る・次へで表示し直すと未回答の状態に戻る', async ({ page }) => {
  await page.goto('/contents/free');
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });
  await choice(page, 5).click();
  await page.getByRole('button', { name: '次へ', exact: true }).click();
  await expect(page.getByText('Q2', { exact: true })).toBeVisible();

  // Q2（正解は 2）で不正解を選んでから、戻って、また Q2 に進む
  await choice(page, 1).click();
  await expect(page.locator('.judge')).toContainText('不正解です');
  await page.getByRole('button', { name: '戻る', exact: true }).click();
  await expect(page.getByText('Q1', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: '次へ', exact: true }).click();
  await expect(page.getByText('Q2', { exact: true })).toBeVisible();

  for (let n = 1; n <= 5; n++) await expect(choice(page, n)).not.toBeChecked();
  await expect(page.getByText(/あなたの解答/)).toHaveCount(0);
  await expect(page.locator('.judge')).toHaveCount(0);
});

// 回帰テスト：以前は正解した後も「ヒントを見る」が表示されていた
test('不正解のときはヒントを見られ、正解した後はヒントを表示しない', async ({ page }) => {
  await page.goto('/contents/free');
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });

  // 不正解：ヒントを見られる
  await choice(page, 2).click();
  await expect(page.locator('.judge')).toContainText('不正解です');
  await page.getByRole('button', { name: 'ヒントを見る' }).click();
  await expect(page.locator('.hint')).toContainText('気体ではなく');

  // 正解：ヒントもボタンも表示しない。解説は見られる
  await choice(page, 5).click();
  await expect(page.locator('.judge')).toHaveText('正解です。');
  await expect(page.locator('.hint')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'ヒントを見る' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: '正解と解説を見る' })).toBeVisible();
});

test('1回目で正解したときは、ヒントを表示しない', async ({ page }) => {
  await page.goto('/contents/free');
  await expect(page.getByText('Q1', { exact: true })).toBeVisible({ timeout: 15000 });

  await choice(page, 5).click();
  await expect(page.locator('.judge')).toHaveText('正解です。');
  await expect(page.getByRole('button', { name: 'ヒントを見る' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: '正解と解説を見る' })).toBeVisible();
});