// vanilla/public/basics/*.html -> BasicsPage JSON への抽出ロジック。
// 方針: 想定外のDOM構造に当たったら StructureError を投げて「処理を止める」。
//       それらしく解釈して埋めることはしない。
//
// 実データ調査で確認した「許容パターン」のみをホワイトリスト化している。
// (調査済み: law 2ページ+properties_prevention 1ページを精読、
//  さらに全79ファイルの <img>/<base>/callout class/section class を機械的に走査)

import { readFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

export class StructureError extends Error {
  constructor(code, detail) {
    super(`[${code}] ${detail}`);
    this.name = 'StructureError';
    this.code = code;
  }
}

const CHAPTERS = ['law', 'physical_chemistry', 'properties_prevention'];

// 章ごとに実在を確認した画像ルート (public/{chapter}_svg 相当 + 共通 /images/)
// 参照: node調査で全79ページの <img src> を <base href> 起点で解決した結果
const IMAGE_ROOT_ALLOW = {
  law: (p) => p.startsWith('/law_svg/') || p.startsWith('/basics/law/') || p.startsWith('/images/'),
  physical_chemistry: (p) => p.startsWith('/phy_svg/') || p.startsWith('/images/'),
  properties_prevention: (p) => p.startsWith('/pro_svg/') || p.startsWith('/images/'),
};

const CALLOUT_TYPES = new Set(['ok', 'warn', 'check', 'ng']);
const SECTION_CONTENT_CLASSES = new Set(['law-section', 'prop-section', 'phy-section', 'summary-section']);
const SECTION_SKIP_CLASSES = new Set(['signup-cta']);
const SECTION_QUIZ_CLASS = 'quiz-section';

function text($, el) {
  return $(el).text().replace(/\s+/g, ' ').trim();
}

// p / li を文書順で string[] に平坦化する。h3・h4(見出しラベル)はスキップ。
// スキーマの string[] には段落と箇条書きを区別するフィールドが無いため、
// 「両方を平坦化して1エントリずつ入れる」というルールで統一している。
function flattenTextBlocks($, container) {
  const out = [];
  $(container)
    .children()
    .each((_, child) => {
      const tag = child.tagName?.toLowerCase();
      if (tag === 'h3' || tag === 'h4') return; // 見出しは呼び出し側で個別に取得
      if (tag === 'p') {
        if ($(child).find('figure').length > 0) {
          throw new StructureError('NESTED_FIGURE_IN_TEXT', 'p 内に figure が入れ子になっている');
        }
        const t = text($, child);
        if (t) out.push(t);
        return;
      }
      if (tag === 'ul' || tag === 'ol') {
        $(child)
          .find('li')
          .each((_, li) => {
            if ($(li).find('figure').length > 0) {
              throw new StructureError('NESTED_FIGURE_IN_LIST', 'li 内に figure が入れ子になっている(例: transportation_standards)');
            }
            const t = text($, li);
            if (t) out.push(t);
          });
        return;
      }
      if (tag === 'div') {
        // div.compact のような単なるラッパーとして扱い、中身を再帰的に平坦化する
        out.push(...flattenTextBlocks($, child));
        return;
      }
      throw new StructureError('UNEXPECTED_TEXT_BLOCK_CHILD', `想定外の子要素 <${tag}> (class="${$(child).attr('class') || ''}")`);
    });
  return out;
}

function extractTable($, tableContainerDiv) {
  const tables = $(tableContainerDiv).find('> table');
  if (tables.length !== 1) {
    throw new StructureError('TABLE_CONTAINER_SHAPE', `table-container 内の <table> が ${tables.length} 個(期待値: 1)`);
  }
  const table = tables.first();

  const spanEls = table.find('[rowspan], [colspan]');
  if (spanEls.length > 0) {
    throw new StructureError(
      'TABLE_SPAN_UNSUPPORTED',
      `rowspan/colspan を含むセルが ${spanEls.length} 個ある。rows: string[][] ではセル位置がずれるため機械抽出不可`
    );
  }

  const captionEl = table.find('> caption');
  if (captionEl.length !== 1) {
    throw new StructureError('MISSING_CAPTION', 'table に <caption> が無い(または複数ある)');
  }
  const caption = text($, captionEl[0]);

  const headerCells = table.find('> thead > tr > th');
  if (headerCells.length === 0) {
    throw new StructureError('MISSING_HEADERS', 'table に thead > tr > th が無い');
  }
  const headers = headerCells.map((_, th) => text($, th)).get();

  const rows = [];
  table.find('> tbody > tr').each((_, tr) => {
    const cells = $(tr).children('th, td');
    const rowVals = cells.map((_, c) => text($, c)).get();
    if (rowVals.length !== headers.length) {
      throw new StructureError('ROW_LENGTH_MISMATCH', `行のセル数が ${rowVals.length} (ヘッダー数 ${headers.length} と不一致)`);
    }
    rows.push(rowVals);
  });

  return { caption, headers, rows };
}

function extractCallout($, div) {
  const classes = ($(div).attr('class') || '').split(/\s+/).filter(Boolean);
  const type = classes.find((c) => c !== 'callout');
  if (!CALLOUT_TYPES.has(type)) {
    throw new StructureError('UNKNOWN_CALLOUT_TYPE', `callout の型 "${type}" が ok|warn|check|ng のいずれにも一致しない (class="${classes.join(' ')}")`);
  }
  const h3 = $(div).children('h3').first();
  if (h3.length === 0) {
    throw new StructureError('MISSING_CALLOUT_HEADING', 'callout に <h3> が無い');
  }
  const heading = text($, h3[0]);
  const items = flattenTextBlocks($, div);
  if (items.length === 0) {
    throw new StructureError('EMPTY_CALLOUT_ITEMS', 'callout から items を1件も抽出できなかった');
  }
  return { type, heading, items };
}

function extractExamBlock($, div, kind) {
  const items = flattenTextBlocks($, div);
  if (items.length === 0) {
    throw new StructureError('EMPTY_EXAM_BLOCK', `${kind} から項目を1件も抽出できなかった`);
  }
  return items;
}

function extractFigure($, figureEl, chapter, baseHref) {
  const img = $(figureEl).children('img').first();
  if (img.length === 0) throw new StructureError('MISSING_FIGURE_IMG', 'figure に <img> が無い');
  const srcAttr = img.attr('src');
  const alt = img.attr('alt');
  if (!srcAttr) throw new StructureError('MISSING_FIGURE_SRC', 'img に src が無い');
  if (srcAttr === '#' || srcAttr.startsWith('#')) {
    throw new StructureError('PLACEHOLDER_IMAGE_SRC', `img の src がプレースホルダ("${srcAttr}")のまま(例: electrolysis)`);
  }
  if (!alt) throw new StructureError('MISSING_FIGURE_ALT', 'img に alt が無い');

  const figcaption = $(figureEl).children('figcaption').first();
  if (figcaption.length === 0) throw new StructureError('MISSING_FIGCAPTION', 'figure に <figcaption> が無い');
  const caption = text($, figcaption[0]);
  if (!caption) throw new StructureError('EMPTY_FIGCAPTION', 'figcaption が空');

  // <base href> はチャプター直下(例: /basics/law/)を指すため、
  // 実ファイルのサブフォルダに関わらずこの base 起点で相対パスを解決する。
  const resolved = path.posix.normalize(path.posix.join(baseHref, srcAttr));
  const allow = IMAGE_ROOT_ALLOW[chapter];
  if (!allow(resolved)) {
    throw new StructureError('UNKNOWN_IMAGE_ROOT', `解決後のパス "${resolved}" が既知のアセットルートに一致しない`);
  }

  return { src: resolved, alt, caption };
}

function extractQuiz($, quizSectionEl) {
  const forms = $(quizSectionEl).find('form');
  if (forms.length !== 1) {
    throw new StructureError('MULTIPLE_QUIZ_FORMS', `quiz-section 内の <form> が ${forms.length} 個(期待値: 1)`);
  }
  const form = forms.first();

  const questionEl = form.find('legend, p[id^="q1-label"], p#q1-label').first();
  if (questionEl.length === 0) {
    throw new StructureError('MISSING_QUIZ_QUESTION', 'quiz の設問テキスト(legend または p#q1-label)が見つからない');
  }
  const question = text($, questionEl[0]);

  const optionEls = form.find('.quiz-option');
  if (optionEls.length === 0) {
    throw new StructureError('EMPTY_QUIZ', 'quiz-option が1件も無い');
  }

  const inputs = optionEls.map((_, opt) => $(opt).find('input[type="radio"]')[0]).get();
  const withFeedback = inputs.filter((i) => $(i).attr('data-feedback') != null);

  if (withFeedback.length === 0) {
    // パターン2: data-feedback が無い = インラインscriptのif文でメッセージをベタ書きしている可能性が高い
    const hasInlineIfScript = $(quizSectionEl)
      .find('script')
      .toArray()
      .some((s) => /if\s*\(\s*picked\.value\s*===/.test($(s).html() || ''));
    if (hasInlineIfScript) {
      throw new StructureError('QUIZ_PATTERN2_INLINE_SCRIPT', 'data-feedback 属性が無く、script内のif文でフィードバックがベタ書きされている(既知の逸脱パターン#6) — 自動抽出しない');
    }
    throw new StructureError('QUIZ_NO_FEEDBACK_SOURCE', 'data-feedback も判定可能なinline scriptも見つからない');
  }
  if (withFeedback.length !== inputs.length) {
    throw new StructureError('QUIZ_INCONSISTENT_FEEDBACK', `${inputs.length}個中${withFeedback.length}個のみ data-feedback を持つ(混在)`);
  }

  const choices = optionEls
    .map((_, opt) => {
      const input = $(opt).find('input[type="radio"]').first();
      const label = $(opt).is('label') ? $(opt) : $(opt).find('label').first();
      const clone = label.length ? label.clone() : $(opt).clone();
      clone.find('input').remove();
      const choiceText = text($, clone[0] ?? opt);
      return {
        text: choiceText,
        correct: input.attr('data-correct') === 'true',
        feedback: input.attr('data-feedback') || '',
      };
    })
    .get();

  if (!choices.some((c) => c.correct)) {
    throw new StructureError('QUIZ_NO_CORRECT_ANSWER', 'data-correct="true" の選択肢が無い');
  }

  return { question, choices };
}

function deriveSlug(chapterRoot, filePath) {
  const relDir = path.relative(chapterRoot, path.dirname(filePath));
  if (relDir === 'tables') {
    const base = path.basename(filePath, '.html').replace(/_00\d+$/, '');
    return `tables/${base}`;
  }
  return relDir.split(path.sep).join('/');
}

function detectChapter(filePath, chapterRoot) {
  for (const chapter of CHAPTERS) {
    if (filePath.startsWith(path.join(chapterRoot, chapter) + path.sep)) return chapter;
  }
  throw new StructureError('UNKNOWN_CHAPTER', `${filePath} がどの章にも属さない`);
}

export function extractPage(filePath, chapterRoot) {
  const html = readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  const chapter = detectChapter(filePath, chapterRoot);
  const slug = deriveSlug(chapterRoot, filePath);

  const baseHref = $('base').attr('href');
  if (baseHref !== `/basics/${chapter}/`) {
    throw new StructureError('BASE_HREF_MISMATCH', `<base href> が "${baseHref}" (期待値: "/basics/${chapter}/")`);
  }

  const seoTitle = text($, $('title')[0]);
  if (!seoTitle) throw new StructureError('MISSING_TITLE', '<title> が空');

  const description = $('meta[name="description"]').attr('content');
  if (!description) throw new StructureError('MISSING_DESCRIPTION', 'meta[name=description] が無い');

  const h1 = $('header .site-title').first();
  if (h1.length === 0) throw new StructureError('MISSING_H1', 'header .site-title が見つからない');
  const displayTitle = text($, h1[0]);
  if (!displayTitle) throw new StructureError('EMPTY_H1', 'header .site-title が空');

  const main = $('main.site-main').first();
  if (main.length === 0) throw new StructureError('MISSING_MAIN', 'main.site-main が見つからない(site-wrapper構成を含め再確認要)');

  const sections = [];
  let currentSection = null; // ContentSection | null
  let quiz;
  let quizFound = false;

  main.children('section').each((_, sectionEl) => {
    const classes = ($(sectionEl).attr('class') || '').split(/\s+/).filter(Boolean);

    if (classes.some((c) => SECTION_SKIP_CLASSES.has(c))) return; // signup-cta 等は無視してよい

    if (classes.includes(SECTION_QUIZ_CLASS)) {
      if (quizFound) throw new StructureError('MULTIPLE_QUIZ_SECTIONS', 'quiz-section が複数存在する');
      quizFound = true;
      quiz = extractQuiz($, sectionEl);
      return;
    }

    const isContentSection = classes.some((c) => SECTION_CONTENT_CLASSES.has(c));
    if (!isContentSection) {
      throw new StructureError('UNKNOWN_SECTION_CLASS', `<section class="${classes.join(' ')}"> は既知のクラスに一致しない`);
    }

    const h2 = $(sectionEl).children('h2').first();
    if (h2.length > 0) {
      currentSection = { heading: text($, h2[0]) };
      sections.push(currentSection);
    } else if (!currentSection) {
      throw new StructureError('ORPHAN_SECTION_NO_H2', 'h2の無いsectionが、それ以前にContentSectionを1つも生成していない状態で出現した');
    }

    const subsectionsList = [];
    let cur = null;
    let introSet = false;

    const flushCur = () => {
      if (cur) subsectionsList.push(cur);
      cur = null;
    };
    const ensureCur = () => {
      if (!cur) cur = {};
      return cur;
    };

    $(sectionEl)
      .children()
      .each((__, child) => {
        const tag = child.tagName?.toLowerCase();
        const childClasses = ($(child).attr('class') || '').split(/\s+/).filter(Boolean);

        if (tag === 'h2') return; // 既に処理済み
        if (tag === 'script') return; // 無視してよい

        if (childClasses.includes('band-card')) {
          // h2直後・最初のband-cardは ContentSection.intro。
          // それ以外(h3直後など)は普通の本文として扱い subsection.body に平坦化する
          // (実データ: handler_certification 等でこのパターンを確認済み)
          const flattened = flattenTextBlocks($, child);
          if (flattened.length === 0) throw new StructureError('EMPTY_BAND_CARD', 'band-card から内容を1件も抽出できなかった');

          if (h2.length > 0 && !introSet && !cur) {
            currentSection.intro = flattened;
            introSet = true;
          } else {
            const c = ensureCur();
            c.body = (c.body || []).concat(flattened);
          }
          return;
        }

        if (tag === 'h3') {
          flushCur();
          cur = { heading: text($, child) };
          return;
        }

        if (childClasses.includes('table-container')) {
          const c = ensureCur();
          if (c.table) throw new StructureError('DUPLICATE_TABLE_IN_SUBSECTION', '1つのsubsection内にtableが複数出現した');
          c.table = extractTable($, child);
          return;
        }

        if (childClasses.includes('callout')) {
          const c = ensureCur();
          if (c.callout) throw new StructureError('DUPLICATE_CALLOUT_IN_SUBSECTION', '1つのsubsection内にcalloutが複数出現した');
          c.callout = extractCallout($, child);
          return;
        }

        if (childClasses.includes('exam-notes')) {
          const c = ensureCur();
          if (c.examNotes) throw new StructureError('DUPLICATE_EXAM_NOTES', '1つのsubsection内にexam-notesが複数出現した');
          c.examNotes = extractExamBlock($, child, 'exam-notes');
          return;
        }

        if (childClasses.includes('exam-points')) {
          const c = ensureCur();
          if (c.examPoints) throw new StructureError('DUPLICATE_EXAM_POINTS', '1つのsubsection内にexam-pointsが複数出現した');
          c.examPoints = extractExamBlock($, child, 'exam-points');
          return;
        }

        if (tag === 'figure') {
          const c = ensureCur();
          if (c.figure) throw new StructureError('DUPLICATE_FIGURE_IN_SUBSECTION', '1つのsubsection内にfigureが複数出現した');
          c.figure = extractFigure($, child, chapter, baseHref);
          return;
        }

        if (tag === 'p') {
          const c = ensureCur();
          if ($(child).find('figure').length > 0) throw new StructureError('NESTED_FIGURE_IN_TEXT', 'p 内に figure が入れ子になっている');
          const t = text($, child);
          if (t) {
            c.body = c.body || [];
            c.body.push(t);
          }
          return;
        }

        throw new StructureError('UNKNOWN_ELEMENT', `想定外の要素 <${tag} class="${childClasses.join(' ')}">`);
      });

    flushCur();
    if (subsectionsList.length > 0) {
      currentSection.subsections = (currentSection.subsections || []).concat(subsectionsList);
    }
  });

  if (sections.length === 0) throw new StructureError('NO_SECTIONS', 'ContentSection を1件も抽出できなかった');

  const page = { slug, displayTitle, seoTitle, description, chapter, sections };
  if (quiz) page.quiz = quiz;
  return page;
}
