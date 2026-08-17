// src/app/basics/properties_prevention/class4_properties/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Class4PropertiesQuiz from './Class4PropertiesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第3章 2節：第4類危険物の性状',
  description:
    '危険物乙4。第4類危険物に共通する5つの性状——引火性・蒸気比重1以上・液比重1未満・非水溶性・静電気発生——を整理。引火点・発火点・燃焼範囲の定義と読み方、ガソリン・二硫化炭素など主要物品の数値を解説。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/class4_properties',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第3章 2節：第4類危険物の性状',
    description:
      '危険物乙4。第4類危険物に共通する5つの性状——引火性・蒸気比重1以上・液比重1未満・非水溶性・静電気発生——を整理。引火点・発火点・燃焼範囲の定義と読み方、ガソリン・二硫化炭素など主要物品の数値を解説。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/class4_properties',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '基礎知識 | 第3章 2節：第4類危険物の性状',
    description:
      '危険物乙4。第4類危険物に共通する5つの性状——引火性・蒸気比重1以上・液比重1未満・非水溶性・静電気発生——を整理。引火点・発火点・燃焼範囲の定義と読み方、ガソリン・二硫化炭素など主要物品の数値を解説。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function Class4PropertiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '2節：第4類危険物の性状' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 共通する性状 */}
        <section className={shared.section}>
          <h2>共通する性状</h2>

          <div className={shared.bandCard}>
            <p>
              第4類危険物は、20°C・1気圧において<strong>液体</strong>であり、いずれも<strong>引火性</strong>を有しています。
              液体であるため<strong>流動性が高く</strong>、ひとたび火災が発生すると、燃焼拡大のおそれがあります。
              液比重は1未満のものが多く、水より軽い傾向にあります。
            </p>
            <p>
              燃焼範囲の上限はおおむね60vol%以下、発火点は多くが650°C未満です。
              たとえば、アセトアルデヒドの燃焼範囲は4.0〜60vol%、アニリンの発火点は615°Cです。
            </p>
          </div>

          <h3>比重が1より大きいもの</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">比重が1より大きいもの</caption>
              <colgroup>
                <col className={styles.colCategory1} />
                <col className={styles.colProductName1} />
                <col className={styles.colSpecificGravity} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>品名</th>
                  <th scope="col">物品名</th>
                  <th scope="col">液比重</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="rowgroup" rowSpan={1} className={shared.stickyCol}>特殊引火物</th>
                  <td><strong>二硫化炭素</strong></td>
                  <td><strong>1.3</strong></td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>第2石油類</th>
                  <td><strong>クロロベンゼン</strong></td>
                  <td><strong>1.1</strong></td>
                </tr>
                <tr>
                  <td><strong>酢酸</strong></td>
                  <td><strong>1.05</strong></td>
                </tr>
                <tr>
                  <td><strong>アクリル酸</strong></td>
                  <td><strong>1.05</strong></td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>第3石油類</th>
                  <td><strong>ニトロベンゼン</strong></td>
                  <td><strong>1.2</strong></td>
                </tr>
                <tr>
                  <td><strong>グリセリン</strong></td>
                  <td><strong>1.3</strong></td>
                </tr>
                <tr>
                  <td><strong>アニリン</strong></td>
                  <td><strong>1.01</strong></td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={1} className={shared.stickyCol}>第4石油類</th>
                  <td><strong>リン酸トリクレジル</strong></td>
                  <td><strong>1.17</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. 非水溶性と水溶性 */}
        <section className={shared.section}>
          <h2>非水溶性と水溶性</h2>

          <div className={shared.bandCard}>
            <p>
              第4類危険物の多くは<strong>非水溶性</strong>（水に溶けない）ですが、なかには<strong>水溶性</strong>のものも存在します。
            </p>
            <p>
              非水溶性の危険物は、<strong>流動やかくはん</strong>などの動きによって<strong>静電気</strong>が発生しやすく、
              さらに<strong>電気の不導体</strong>であるため、静電気が蓄積されやすいという性質があります。
            </p>
            <p>
              その結果、静電気による火花が引火源となるおそれがあります。代表例として、二硫化炭素、トルエン、軽油などが挙げられます。
            </p>
          </div>

          <h3>水溶性のもの</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">水溶性のもの</caption>
              <colgroup>
                <col className={styles.colCategory2} />
                <col className={styles.colProductName2} />
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
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>第1石油類</th>
                  <td><strong>アセトン</strong></td>
                </tr>
                <tr>
                  <td><strong>ピリジン</strong></td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={1} className={shared.stickyCol}>アルコール類</th>
                  <td><strong>※すべて</strong></td>
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
          <p>※ アルコール類はすべて水に溶け、水溶性です（例外なし）。</p>
        </section>

        {/* 3. 蒸気 */}
        <section className={shared.section}>
          <h2>蒸気</h2>
          <div className={shared.bandCard}>
            <p>多くの第4類危険物は、<strong>蒸気が空気とわずかに混合した状態</strong>でも引火する危険性があります。</p>
            <p>
              ただし、蒸気の濃度が燃焼範囲から外れている場合は、点火しても引火には至りません。
              燃焼範囲が広い物質ほど、引火や爆発のリスクが高くなります。また、液体の温度が上がるにつれて、可燃性蒸気の発生量も増加します。
            </p>
            <p>
              <strong>蒸気比重はすべて1より大きく</strong>、空気よりも重いため、蒸気は低い場所に滞留したり、地表付近を伝って遠方へ流れやすい性質があります。
              また、特有の臭気をもつものが多いのも特徴です。
            </p>
            <p>可燃性蒸気は、<strong>沸点が低い物質ほど発生しやすく</strong>、そのぶん引火の危険性も高まります。</p>
          </div>
        </section>

        {/* 4. 発火点 */}
        <section className={shared.section}>
          <h2>発火点</h2>
          <div className={shared.bandCard}>
            <p>
              多くの第4類危険物は、<strong>発火点が100°C以上</strong>です。物質が発火点に達すると、
              火源がなくても<strong>自ら発火して燃焼</strong>を始めます。
            </p>
            <p>ただし、例外もあり、<strong>二硫化炭素</strong>の発火点は<strong>90°C</strong>と比較的低く、注意が必要です。</p>
          </div>
        </section>

        {/* 5. 引火点 */}
        <section className={shared.section}>
          <h2>引火点</h2>
          <div className={shared.bandCard}>
            <p>
              第4類危険物の中には、20°Cで引火するものと、引火しないものがあります。
              中でも<strong>引火点が特に低い</strong>物質として、ガソリン（-40°C以下）、ジエチルエーテル（-45°C）、
              二硫化炭素（-30°C以下）などが挙げられます。
            </p>
            <p>
              <strong>引火点が低い物質</strong>は、それだけ<strong>引火の危険性が高く</strong>、
              また<strong>揮発性（揮発しやすさ）も高い</strong>ため、蒸気が発生しやすいという特徴があります。
            </p>
            <p>
              一方で、水に溶ける物質（水溶性）は、注水によって<strong>濃度を下げる</strong>ことで蒸気圧が低下し、
              結果として<strong>引火点が高く</strong>なります。
            </p>
            <p>蒸気には燃焼範囲があり、これを満たすために必要な液温が低いほど、引火の危険性は大きくなります。</p>
            <p>
              一般に、<strong>蒸気比重が小さい物質</strong>は、<strong>引火点が低い</strong>ものが多く、
              <strong>沸点が低い物質</strong>も同様に<strong>引火点が低く</strong>なります。
            </p>
            <p>一方、<strong>分子量が大きい物質</strong>では、<strong>引火点が高くなる</strong>傾向があります。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>
                第4類で<strong>液比重が1より大きい</strong>代表例：二硫化炭素、クロロベンゼン、酢酸、アクリル酸、ニトロベンゼン、グリセリン、アニリン、リン酸トリクレジル。
              </li>
              <li>二硫化炭素は<strong>比重1.3</strong>だが、分類は<strong>「特殊引火物」</strong>であって第2石油類ではない。</li>
              <li>アルコール類は<strong>すべて水溶性</strong>（例外なし）。</li>
              <li>第4類危険物の<strong>蒸気比重はすべて1より大きい</strong>ため、蒸気は低所に滞留しやすい。</li>
            </ul>
          </div>
        </section>

        {/* 6. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <Class4PropertiesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}