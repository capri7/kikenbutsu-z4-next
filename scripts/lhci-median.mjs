#!/usr/bin/env node
// 使い方: node scripts/lhci-median.mjs [ディレクトリ(既定: .lighthouseci)]
// lhr-*.json をURLごとに集計し、各指標の中央値をMarkdown表で出力する
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2] ?? '.lighthouseci';

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

const byUrl = new Map();
const files = readdirSync(dir).filter((f) => /^lhr-.*\.json$/.test(f));
if (files.length === 0) {
  console.error(`${dir} に lhr-*.json がありません`);
  process.exit(1);
}

for (const f of files) {
  const lhr = JSON.parse(readFileSync(join(dir, f), 'utf8'));
  const url = lhr.requestedUrl ?? lhr.finalUrl;
  const a = lhr.audits;
  const row = byUrl.get(url) ?? { perf: [], a11y: [], lcp: [], tbt: [], cls: [] };
  row.perf.push(lhr.categories.performance.score * 100);
  row.a11y.push(lhr.categories.accessibility.score * 100);
  row.lcp.push(a['largest-contentful-paint'].numericValue);
  row.tbt.push(a['total-blocking-time'].numericValue);
  row.cls.push(a['cumulative-layout-shift'].numericValue);
  byUrl.set(url, row);
}

console.log('| URL | 回数 | Performance | Accessibility | LCP (ms) | TBT (ms) | CLS |');
console.log('|---|---|---|---|---|---|---|');
for (const [url, r] of [...byUrl].sort()) {
  console.log(
    `| ${url} | ${r.perf.length} | ${Math.round(median(r.perf))} | ${Math.round(median(r.a11y))} | ` +
      `${Math.round(median(r.lcp))} | ${Math.round(median(r.tbt))} | ${median(r.cls).toFixed(3)} |`
  );
}