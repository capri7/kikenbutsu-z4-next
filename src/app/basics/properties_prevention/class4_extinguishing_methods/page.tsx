// src/app/basics/properties_prevention/class4_extinguishing_methods/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Class4ExtinguishingMethodsQuiz from './Class4ExtinguishingMethodsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第3章 3節：第4類危険物の消火',
  description:
    '危険物乙4。第4類危険物の消火は窒息・抑制が原則。棒状注水が禁止される理由、強化液・泡・粉末・CO₂消火剤の使い分け、水溶性液体に耐アルコール泡が必要な理由。アセトン・酸化プロピレンなど水溶性物品の消火対策。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/class4_extinguishing_methods',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第3章 3節：第4類危険物の消火',
    description:
      '危険物乙4。第4類危険物の消火は窒息・抑制が原則。棒状注水が禁止される理由、強化液・泡・粉末・CO₂消火剤の使い分け、水溶性液体に耐アルコール泡が必要な理由。アセトン・酸化プロピレンなど水溶性物品の消火対策。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/class4_extinguishing_methods',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '基礎知識 | 第3章 3節：第4類危険物の消火',
    description:
      '危険物乙4。第4類危険物の消火は窒息・抑制が原則。棒状注水が禁止される理由、強化液・泡・粉末・CO₂消火剤の使い分け、水溶性液体に耐アルコール泡が必要な理由。アセトン・酸化プロピレンなど水溶性物品の消火対策。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function Class4ExtinguishingMethodsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '3節：第4類危険物の消火' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 消火の方法 */}
        <section className={shared.section}>
          <h2>消火の方法</h2>

          <div className={shared.bandCard}>
            <p>
              第4類危険物の火災では、可燃物を取り除く「除去消火」や、温度を下げる「冷却消火」が難しいケースが少なくありません。
              そのため、空気を遮断する<strong>窒息消火</strong>や、燃焼反応を抑制する<strong>抑制消火（負触媒効果）</strong>が効果的です。
            </p>
            <p>
              使用される主な消火剤には、強化液消火剤（霧状）をはじめ、ハロゲン化物消火剤、二酸化炭素消火剤、泡消火剤、粉末消火剤などがあります。
              中でも<strong>強化液消火剤</strong>は、棒状に放射すると危険物が飛び散るおそれがあるため、<strong>必ず霧状で使用</strong>しなければなりません。
            </p>
            <p>
              また、第4類危険物の多くは水より軽く、液体の比重が1未満です。そのため水を注ぐと<strong>水面に浮いて広がり</strong>、
              かえって火災の拡大につながる危険性が増します。
            </p>
            <p>
              さらに、アルコールなどの<strong>水溶性液体</strong>は、通常の泡消火剤の泡を分解してしまう性質があるため、
              このような火災には<strong>水溶性液体専用の泡消火剤</strong>を用いることが求められます。
            </p>
            <p>以下に、水に溶けやすい代表的な第4類危険物を、品名ごとに分類して示します。</p>
          </div>

          <h3>水溶性の主な危険物</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">水溶性の主な危険物</caption>
              <colgroup>
                <col className={styles.colCategory} />
                <col className={styles.colProductName} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>品名</th>
                  <th scope="col">物品名</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>特殊引火物</th>
                  <td><strong>アセトアルデヒド</strong></td>
                </tr>
                <tr>
                  <td><strong>酸化プロピレン</strong></td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>第1石油類</th>
                  <td><strong>アセトン</strong></td>
                </tr>
                <tr>
                  <td><strong>ピリジン</strong></td>
                </tr>
                <tr>
                  <td><strong>エチルメチルケトン</strong></td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>アルコール類</th>
                  <td><strong>メタノール</strong></td>
                </tr>
                <tr>
                  <td><strong>エタノール</strong></td>
                </tr>
                <tr>
                  <td><strong>n-プロピルアルコール（1-プロパノール）</strong></td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>第2石油類</th>
                  <td><strong>酢酸</strong></td>
                </tr>
                <tr>
                  <td><strong>アクリル酸</strong></td>
                </tr>
                <tr>
                  <td><strong>プロピオン酸</strong></td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>第3石油類</th>
                  <td><strong>エチレングリコール</strong></td>
                </tr>
                <tr>
                  <td><strong>グリセリン</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                水に溶けやすい代表的な第4類危険物は、表にある「アセトアルデヒド」「酸化プロピレン」などの<strong>特殊引火物</strong>、
                「アセトン」「ピリジン」「エチルメチルケトン」などの<strong>第1石油類</strong>、
                アルコール類（メタノール・エタノール・n-プロピルアルコール）、
                「酢酸・アクリル酸・プロピオン酸」などの<strong>第2石油類</strong>、
                「エチレングリコール・グリセリン」などの<strong>第3石油類</strong>。
              </li>
              <li>これら<strong>水溶性液体の火災には「水溶性液体用の泡消火剤」</strong>を使う。通常の泡消火剤だと泡が分解されてしまう。</li>
              <li>
                水に溶けるかどうかと、<strong>第1〜第3石油類・特殊引火物などの類別は別物</strong>。
                「水溶性だけれど第○石油類」というセットで覚えると、分類問題にも強くなる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>酸化プロピレン</strong>は<strong>水溶性の特殊引火物</strong>。第1石油類や第2石油類と取り違えさせるひっかけが出やすい。
              </li>
              <li>
                <strong>アセトン</strong>は<strong>第1石油類かつ水溶性</strong>。ベンゼンなど「非水溶性の第1石油類」との区別を問われやすい。
              </li>
              <li>
                <strong>酢酸・アクリル酸・プロピオン酸</strong>は<strong>いずれも第2石油類で水溶性</strong>。
                酢酸エチルなどの<strong>エステル類（多くは非水溶性）</strong>と混同に注意。
              </li>
              <li>
                <strong>エチレングリコール・グリセリン</strong>は<strong>第3石油類で水溶性</strong>。
                「第3石油類＝重油系で水に溶けにくい」というイメージだけだと誤答しやすい。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <Class4ExtinguishingMethodsQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}