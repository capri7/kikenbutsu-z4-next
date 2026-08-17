// 使い方:
//   node scripts/migrate-basics/run.mjs --sample   -> あらかじめ選んだ3ページだけ変換して結果表示
//   node scripts/migrate-basics/run.mjs --all      -> 全79ページを走査して正常/要確認に仕分け、
//                                                      out/normal/*.json と out/report.json を出力

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractPage, StructureError } from './extract.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// next/ がシンボリックリンクの環境があるため、import.meta.url由来のrealpathからの
// 相対解決とcwd由来の相対解決の両方を候補にして、実在する方を採用する。
const CANDIDATE_ROOTS = [
  path.resolve(__dirname, '../../../vanilla/public/basics'),
  path.resolve(process.cwd(), '../vanilla/public/basics'),
  '/Users/hayakawakazue/Desktop/migration-workspace/vanilla/public/basics',
];
const CHAPTER_ROOT = CANDIDATE_ROOTS.find((p) => existsSync(p));
if (!CHAPTER_ROOT) {
  throw new Error(`vanilla/public/basics が見つからない。候補: ${CANDIDATE_ROOTS.join(', ')}`);
}
const OUT_DIR = path.resolve(__dirname, 'out');

function walkHtml(dir) {
  let out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walkHtml(p));
    else if (entry.name.endsWith('.html')) out.push(p);
  }
  return out;
}

function isChapterContentFile(filePath) {
  // 章トップページ(law.html等)とtop-level index.htmlはBasicsPageの対象外
  const rel = path.relative(CHAPTER_ROOT, filePath);
  const top = rel.split(path.sep)[0];
  return ['law', 'physical_chemistry', 'properties_prevention'].includes(top);
}

function runOne(filePath) {
  const rel = path.relative(CHAPTER_ROOT, filePath);
  try {
    const page = extractPage(filePath, CHAPTER_ROOT);
    return { ok: true, file: rel, page };
  } catch (err) {
    if (err instanceof StructureError) {
      return { ok: false, file: rel, code: err.code, reason: err.message };
    }
    return { ok: false, file: rel, code: 'UNEXPECTED_JS_ERROR', reason: String(err.stack || err) };
  }
}

function printResult(result) {
  console.log('='.repeat(90));
  console.log(result.file);
  if (result.ok) {
    console.log('  -> 正常変換');
    console.log(JSON.stringify(result.page, null, 2));
  } else {
    console.log(`  -> 要確認: ${result.reason}`);
  }
}

const mode = process.argv.includes('--all') ? 'all' : 'sample';

if (mode === 'sample') {
  // 法令2ページ(tables/配下1つ + 通常トピック1つ) + 性質予防1ページ
  const sampleFiles = [
    path.join(CHAPTER_ROOT, 'law/tables/operator_categories_001.html'),
    path.join(CHAPTER_ROOT, 'law/facility_categories/Otsux_Law_Facility_Categories_001.html'),
    path.join(CHAPTER_ROOT, 'properties_prevention/alcohol_properties/Otsux_Prop_Alcohol_Properties_001.html'),
  ];
  const results = sampleFiles.map(runOne);
  results.forEach(printResult);

  const okCount = results.filter((r) => r.ok).length;
  console.log('='.repeat(90));
  console.log(`サンプル結果: 正常変換 ${okCount} / 要確認 ${results.length - okCount} (計 ${results.length})`);
} else {
  const allFiles = walkHtml(CHAPTER_ROOT).filter(isChapterContentFile);
  const results = allFiles.map(runOne);

  mkdirSync(path.join(OUT_DIR, 'normal'), { recursive: true });

  const normal = results.filter((r) => r.ok);
  const needsReview = results.filter((r) => !r.ok);

  for (const r of normal) {
    const outFile = path.join(OUT_DIR, 'normal', r.page.chapter + '__' + r.page.slug.replace(/\//g, '_') + '.json');
    writeFileSync(outFile, JSON.stringify(r.page, null, 2), 'utf8');
  }

  const report = {
    totalPages: results.length,
    normalCount: normal.length,
    needsReviewCount: needsReview.length,
    needsReview: needsReview.map((r) => ({ file: r.file, code: r.code, reason: r.reason })),
  };
  writeFileSync(path.join(OUT_DIR, 'report.json'), JSON.stringify(report, null, 2), 'utf8');

  console.log(`走査対象: ${results.length}ページ`);
  console.log(`正常変換: ${normal.length}`);
  console.log(`要確認  : ${needsReview.length}`);
  console.log(`出力先  : ${OUT_DIR}`);
}
