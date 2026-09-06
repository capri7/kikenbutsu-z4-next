// src/app/basics/physical_chemistry/electrolysis/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import ElectrolysisQuiz from './ElectrolysisQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 11節：電気分解',
  description:
    '危険物乙4 第2章11節。電気分解の原理、陰極・陽極の定義、塩化銅（Ⅱ）水溶液の電気分解（電離式・陰極と陽極の半反応式）を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/electrolysis',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 11節：電気分解',
    description:
      '危険物乙4 第2章11節。電気分解の原理、陰極・陽極の定義、塩化銅（Ⅱ）水溶液の電気分解（電離式・陰極と陽極の半反応式）を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/electrolysis',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 11節：電気分解',
    description:
      '危険物乙4 第2章11節。電気分解の原理、陰極・陽極の定義、塩化銅（Ⅱ）水溶液の電気分解（電離式・陰極と陽極の半反応式）を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ElectrolysisPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '11節：電気分解' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>電気分解</h2>
          <div className={shared.bandCard}>
            <p>
              電解液に電極を入れて電流を流すと、各電極で電子の授受が行われ、<strong>酸化還元反応</strong>が起こります。
              これを<strong>電気分解</strong>といいます。電気分解は「<strong>電気エネルギーを使って化学変化を起こす</strong>」操作といえます。
            </p>
            <p>
              電気分解では、電源の<strong>負極（－）</strong>につないだ電極を<strong>陰極</strong>、
              <strong>正極（＋）</strong>につないだ電極を<strong>陽極</strong>といいます。
            </p>
          </div>

          <h2>塩化銅（Ⅱ）の電気分解</h2>
          <div className={shared.bandCard}>
            <p>
              塩化銅（Ⅱ）（CuCl<sub>2</sub>）水溶液に2本の炭素棒を電極として入れ、直流電流を流すと、
              <strong>陰極では銅が析出</strong>し、<strong>陽極では塩素分子（Cl<sub>2</sub>）が発生</strong>します。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
          <h3>電離</h3>
            <p>
              CuCl<sub>2</sub> → Cu<sup>2+</sup> + 2Cl<sup>−</sup>
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
          <h3>陰極・陽極の反応</h3>
            <ol className={shared.compact}>
              <li>
                <strong>陰極（還元）：</strong> Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu
              </li>
              <li>
                <strong>陽極（酸化）：</strong> 2Cl<sup>−</sup> → Cl<sub>2</sub> + 2e<sup>−</sup>
              </li>
            </ol>
            <p>
              陰極では電子が流れ込むため、陽イオンや水分子が電子を受け取る<strong>還元反応</strong>が起こります。
              陽極では外部に電子を放出するため、陰イオンや水分子が電子を失う<strong>酸化反応</strong>が起こります。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/cucl2_electrolysis.svg"
              alt="塩化銅（Ⅱ）水溶液に炭素電極を入れて直流電流を流すと、陰極でCu2+が還元されて銅が析出し、陽極でCl-が酸化されて塩素が発生する電気分解装置の図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1560}
              height={980}
            />
            <figcaption className={shared.figureCaption}>
              <strong>塩化銅（Ⅱ）の電気分解</strong> — 陰極でCu<sup>2+</sup>が還元されて銅が析出し、陽極でCl<sup>−</sup>が酸化されて塩素が発生します。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>水の電気分解</h2>
          <div className={shared.bandCard}>
          <p>
            純粋な水はほとんど電離せず、電気をほぼ通しません。そこで少量の
            <strong>水酸化ナトリウム（NaOH）</strong>や<strong>希硫酸（H<sub>2</sub>SO<sub>4</sub>）</strong>
            を加えて電離度を高め、反応しにくい<strong>白金（Pt）</strong>を電極として電気分解を行います。
          </p>
          <p>
           陰極では還元反応により<strong>水素（H<sub>2</sub>）</strong>が、
           陽極では酸化反応により<strong>酸素（O<sub>2</sub>）</strong>が発生します。
          </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
          <h3>全体の反応式</h3>
          <p>
            2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub>
          </p>
        </div>

        <p>
          加える電解質によって、電離の様子と陰極・陽極それぞれの反応式が異なります。
        </p>

        <div className={`${shared.callout} ${shared.calloutList}`}>
        <h3>① 希硫酸（H<sub>2</sub>SO<sub>4</sub>）を加えた場合</h3>
          <p>
            電離：H<sub>2</sub>SO<sub>4</sub> → 2H<sup>+</sup> + SO<sub>4</sub><sup>2−</sup>
          </p>
          <ol className={shared.compact}>
           <li>
             <strong>陰極（還元）：</strong> 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>
           </li>
           <li>
             <strong>陽極（酸化）：</strong> 2H<sub>2</sub>O → O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>−</sup>
           </li>
          </ol>
        </div>

        <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
             src="/images/basics/physical_chemistry/h2so4_electrolysis.svg"
             alt="希硫酸を加えた水の電気分解装置の図。陰極でH+が還元されて水素が発生し、陽極で水が酸化されて酸素が発生する。SO4 2-イオンは反応せず溶液中に残る"
             className={shared.circuitSvg}
             loading="lazy"
             decoding="async"
             width={1560}
             height={980}
          />
          <figcaption className={shared.figureCaption}>
            <strong>希硫酸を加えた水の電気分解</strong> — 陰極でH<sup>+</sup>が還元されて水素が発生し、陽極で水分子が酸化されて酸素が発生します。SO<sub>4</sub><sup>2−</sup>は反応に関与しない傍観イオンです。
          </figcaption>
        </figure>

        {/* ①希硫酸のfigureの直後に配置 */}
        <div className={`${shared.callout} ${shared.calloutWarn}`}>
          <h3>ひっかけ注意</h3>
          <p>
            SO<sub>4</sub><sup>2−</sup>は電極反応に関与せず、そのまま溶液中に残ります（傍観イオン）。
            そのため、この反応で正味に分解されているのは水だけで、加えたH<sub>2</sub>SO<sub>4</sub>自体の量は変化しません。
            また、発生する気体の体積比はH<sub>2</sub>：O<sub>2</sub>＝2：1です。
          </p>
        </div>

        <div className={`${shared.callout} ${shared.calloutList}`}>
        <h3>② 水酸化ナトリウム（NaOH）を加えた場合</h3>
          <p>
            電離：NaOH → Na<sup>+</sup> + OH<sup>−</sup>
          </p>
          <ol className={shared.compact}>
           <li>
              <strong>陰極（還元）：</strong> 2H<sub>2</sub>O + 2e<sup>−</sup> → H<sub>2</sub> + 2OH<sup>−</sup>
           </li>
           <li>
             <strong>陽極（酸化）：</strong> 4OH<sup>−</sup> → O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup>
           </li>
          </ol>
        </div>
        <figure className={shared.formulaCard}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/basics/physical_chemistry/naoh_electrolysis.svg"
          alt="水酸化ナトリウムを加えた水の電気分解装置の図。陰極で水が還元されて水素とOH−が発生し、OH−は溶液中を陽極へ移動して酸化され、酸素と水が生成する。"
          className={shared.circuitSvg}
          loading="lazy"
          decoding="async"
          width={1560}
          height={900}
        />
        <figcaption className={shared.figureCaption}>
        <strong>水酸化ナトリウムを加えた水の電気分解</strong> — 陰極で水が還元されて水素とOH<sup>−</sup>が生じ、OH<sup>−</sup>は溶液中を移動して陽極で酸化され、酸素と水に戻ります。
        </figcaption>
        </figure>

        {/* ②水酸化ナトリウムのfigureの直後に配置 */}
        <div className={`${shared.callout} ${shared.calloutWarn}`}>
        <h3>ひっかけ注意</h3>
        <p>
          Na<sup>+</sup>は電極反応に関与せず、そのまま溶液中に残ります（傍観イオン）。
          陰極で生じたOH<sup>−</sup>が溶液中を移動して陽極で消費されるため、加えたNaOH自体の量は変化せず、正味では水だけが分解されています。
          発生する気体の体積比はH<sub>2</sub>：O<sub>2</sub>＝2：1です。
        </p>
        </div>

      </section>

      <section className={shared.section}>
        <h2>電気分解のまとめ</h2>

        <div className={shared.bandCard}>
          <p>
            陰極ではe<sup>−</sup>を受け取る還元反応が起こります。水溶液中に存在する陽イオン（金属イオンなど）や水分子のうち、還元されやすいものから優先的に反応が進みます。
          </p>
        </div>

        <div className={shared.tableContainer}>
          <table className={shared.styledTable}>
            <thead>
              <tr>
                <th scope="col">物質</th>
                <th scope="col">陰極での反応式</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className={shared.stickyCol}>銀イオン</th>
                <td>Ag<sup>+</sup> + e<sup>−</sup> → Ag</td>
              </tr>
              <tr>
                <th scope="row" className={shared.stickyCol}>銅イオン</th>
                <td>Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu</td>
              </tr>
              <tr>
                <th scope="row" className={shared.stickyCol}>水素イオン</th>
                <td>2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub></td>
              </tr>
              <tr>
                <th scope="row" className={shared.stickyCol}>水（水分子）</th>
                <td>2H<sub>2</sub>O + 2e<sup>−</sup> → H<sub>2</sub> + 2OH<sup>−</sup></td>
              </tr>
            </tbody>
         </table>
       </div>

       <div className={`${shared.callout} ${shared.calloutList}`}>
         <h3>還元されやすさの順序</h3>
          <p>Ag &gt; Cu &gt; H<sub>2</sub></p>
       </div>

       <p>
         この順序により、水溶液の種類ごとに陰極で生成する物質が決まります。
       </p>

       <div className={shared.tableContainer}>
         <table className={shared.styledTable}>
           <thead>
             <tr>
               <th scope="col">水溶液</th>
               <th scope="col">陰極での生成物</th>
            </tr>
           </thead>
          <tbody>
            <tr>
              <th scope="row" className={shared.stickyCol}>硝酸銀（AgNO<sub>3</sub>）</th>
              <td>Agが析出</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>硫酸銅（Ⅱ）（CuSO<sub>4</sub>）</th>
              <td>Cuが析出</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>塩化銅（Ⅱ）（CuCl<sub>2</sub>）</th>
              <td>Cuが析出</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>塩酸（HCl）</th>
              <td>H<sub>2</sub>が発生</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>ヨウ化カリウム（KI）</th>
              <td>H<sub>2</sub>が発生</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={`${shared.callout} ${shared.calloutWarn}`}>
        <h3>陽極の生成物と電極材質の注意</h3>
        <p>
          陽極ではe<sup>−</sup>を放出する酸化反応が起こり、主にハロゲン（Cl<sub>2</sub>など）や酸素（O<sub>2</sub>）が生成します。
          ただし、電極に白金（Pt）や炭素（C）以外の金属を使用している場合は、溶液中のイオンではなく電極自体が酸化されて溶け出す点に注意してください。
        </p>
      </div>

      <div className={shared.tableContainer}>
        <table className={shared.styledTable}>
          <thead>
            <tr>
              <th scope="col">水溶液</th>
              <th scope="col">陽極での生成物</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className={shared.stickyCol}>塩酸（HCl）</th>
              <td>Cl<sub>2</sub>が発生</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>塩化銅（Ⅱ）（CuCl<sub>2</sub>）</th>
              <td>Cl<sub>2</sub>が発生</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>ヨウ化カリウム（KI）</th>
              <td>I<sub>2</sub>が発生</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>硫酸（H<sub>2</sub>SO<sub>4</sub>）</th>
              <td>O<sub>2</sub>が発生</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>硫酸銅（Ⅱ）（CuSO<sub>4</sub>）</th>
              <td>O<sub>2</sub>が発生</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>水酸化ナトリウム（NaOH）</th>
              <td>O<sub>2</sub>が発生</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* クイズ */}
    <section className={`${shared.section} ${shared.quizSection}`}>
      <h2 id="quiz-label">クイズ</h2>
      <ElectrolysisQuiz />
    </section>

    {/* 次に進む */}
    <section className={shared.signupCta}>
      <a href="/signup">この範囲の問題を解く（登録無料）</a>
    </section>

      </div>
    </>
  )
}