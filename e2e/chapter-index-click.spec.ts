import { test, expect } from '@playwright/test';

/**
 * 章トップの節の一覧：行のどこを押しても、その節のページに移る
 *
 * 行（背景つきの帯）の右端など、文字のない余白を押しても移動できることを確かめる。
 * 文字の上でしか押せないと、行が全体で押せるように見えるのに、押しても何も起きない。
 */

const CHAPTERS = [
  { name: '第1章（法令）', path: '/basics/law', index: '第1章の節一覧' },
  { name: '第2章（物理・化学）', path: '/basics/physical_chemistry', index: '第2章の節一覧' },
  { name: '第3章（性質・予防）', path: '/basics/properties_prevention', index: '第3章の節一覧' },
];

for (const chapter of CHAPTERS) {
  test(`${chapter.name}：節の行の右端の余白を押すと、その節のページに移る`, async ({ page }) => {
    await page.goto(chapter.path);

    const firstRow = page.getByRole('navigation', { name: chapter.index }).locator('li').first();
    const link = firstRow.getByRole('link');
    const href = await link.getAttribute('href');
    if (!href) throw new Error('節へのリンクが見つからない');

    const row = await firstRow.boundingBox();
    const text = await link.boundingBox();
    if (!row || !text) throw new Error('節の行が見つからない');
    // 押す位置（行の右端の近く）が、リンクの文字の部分の外側にあることを前提にする
    const x = row.x + row.width - 10;
    expect(x).toBeGreaterThan(text.x + text.width);

    await page.mouse.click(x, row.y + row.height / 2);
    await expect(page).toHaveURL(new RegExp(`${href}$`));
  });
}
