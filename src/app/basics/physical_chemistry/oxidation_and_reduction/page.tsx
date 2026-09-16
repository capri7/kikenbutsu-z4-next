// src/app/basics/physical_chemistry/oxidation_and_reduction/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import OxidationAndReductionQuiz from './OxidationAndReductionQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 24節：酸化と還元',
  description:
    '危険物乙4 第2章24節。狭い意味・広い意味の酸化と還元、酸化剤と還元剤を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/oxidation_and_reduction',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 24節：酸化と還元',
    description:
      '危険物乙4 第2章24節。狭い意味・広い意味の酸化と還元、酸化剤と還元剤を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/oxidation_and_reduction',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 24節：酸化と還元',
    description:
      '危険物乙4 第2章24節。狭い意味・広い意味の酸化と還元、酸化剤と還元剤を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function OxidationAndReductionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '24節：酸化と還元' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <div className={shared.bandCard}>
            <p className={shared.summaryLabel}>👉このページでわかること</p>
            <p>
              ここでは、狭い意味と広い意味での酸化・還元の定義、酸化剤と還元剤の働き、代表的な酸化剤・還元剤の例を解説します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>狭い意味の酸化と還元</h2>

          <div className={shared.bandCard}>
            <p>
              狭い意味では、物質が酸素と化合することを<strong>酸化</strong>といい、酸化物が酸素を失うことを<strong>還元</strong>といいます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
              C＋O<sub>2</sub> → CO<sub>2</sub>（酸化）
            </p>
          </figure>

          <div className={shared.bandCard}>
            <p>
              炭素Cが酸素と化合してCO<sub>2</sub>になっており、炭素が酸化されています。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
              CO<sub>2</sub>＋C → 2CO
            </p>
          </figure>

          <div className={shared.bandCard}>
            <p>
              この反応では、二酸化炭素CO<sub>2</sub>が酸素を失って一酸化炭素COになっており<strong>還元</strong>され、炭素Cは酸素と化合して一酸化炭素COになっており<strong>酸化</strong>されています。
            </p>
          </div>
        </section>

        <section className={shared.section}>
        <h2>広い意味の酸化と還元</h2>
        <div className={shared.bandCard}>
        <p>
          広い意味では、物質が水素または電子を失うことを<strong>酸化</strong>といい、物質が水素または電子を得ることを<strong>還元</strong>といいます。
        </p>
        <p>
          電子の授受にまで酸化と還元の定義を広げると、酸化と還元は常に同時に起きていることになります。これを<strong>酸化還元反応</strong>といいます。
        </p>
        <p>
          例えば、物質AとBがあり、Aは酸化によりCに変化し、Bは還元によりDに変化したとします。この場合、A・BからC・Dへの変化全体を酸化還元反応といい、Aの酸化とBの還元は同時に進行します。
        </p>
      </div>

      <figure className={shared.formulaCard}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/basics/physical_chemistry/redox_agent_diagram.svg"
          alt="酸化還元反応A（還元剤）＋B（酸化剤）→C＋Dを示す図。還元剤Aが酸化されて生成物Cになり、酸化剤Bが還元されて生成物Dになることを、それぞれ曲線矢印で示す。この2つの変化は1つの反応の中で同時に進行する。"
          className={shared.circuitSvg}
          loading="lazy"
          decoding="async"
          width={1500}
          height={750}
        />
        <figcaption className={shared.figureCaption}>
          <strong>酸化還元反応（A＋B→C＋D）</strong> — 還元剤Aが酸化されてCになるのと同時に、酸化剤Bが還元されてDになります。
        </figcaption>
      </figure>

        <h3>酸化剤と還元剤の関係</h3>

        <div className={shared.bandCard}>
          <p>
            先ほどの例を用いると、次のように表せます。
          </p>
        </div>

        <figure className={shared.formulaCard}>
          <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
            A（還元剤）＋ B（酸化剤） → C ＋ D
          </p>
        </figure>

        <div className={shared.bandCard}>
          <p>
            AからCへの変化が酸化であり、BからDへの変化が還元です。
          </p>
        </div>

        <div className={shared.tableContainer}>
          <table className={shared.styledTable}>
            <thead>
              <tr>
                <th scope="col">基準</th>
                <th scope="col">酸化</th>
                <th scope="col">還元</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className={shared.stickyCol}>酸素</th>
                <td>酸素を得る（酸化数増加）</td>
                <td>酸素を失う（酸化数減少）</td>
              </tr>
              <tr>
                <th scope="row" className={shared.stickyCol}>水素</th>
                <td>水素を失う</td>
                <td>水素を得る</td>
              </tr>
              <tr>
                <th scope="row" className={shared.stickyCol}>電子</th>
                <td>電子を失う</td>
                <td>電子を得る</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

              <section className={shared.section}>
          <h2>酸化剤と還元剤</h2>

          <div className={shared.bandCard}>
            <p>
              酸化剤は相手物質を酸化させ、自身は還元される物質です。還元剤は相手物質を還元させ、自身は酸化される物質です。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">基準</th>
                  <th scope="col">酸化剤</th>
                  <th scope="col">還元剤</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>働き</th>
                  <td>相手を酸化させる</td>
                  <td>相手を還元させる</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>相手への作用</th>
                  <td>酸素を与える・水素を奪う・電子を奪う</td>
                  <td>酸素を奪う・水素を与える・電子を与える</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>反応後の自身</th>
                  <td>還元される</td>
                  <td>酸化される</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.bandCard}>
            <p>
              一般に酸化剤になりやすい物質として、酸素O<sub>2</sub>があります。また、ハロゲン（塩素Cl<sub>2</sub>・臭素Br<sub>2</sub>・ヨウ素I<sub>2</sub>）は相手物質から電子を奪う性質があるため、酸化剤としてはたらきます。
            </p>
            <p>
              還元剤になりやすい物質として、水素H<sub>2</sub>・一酸化炭素CO・ナトリウムNa・カリウムKがあります。特にナトリウムやカリウムなどの金属は、陽イオンになることで相手物質に電子を与えやすい性質があります。
            </p>
            <p>
              過酸化水素H<sub>2</sub>O<sub>2</sub>は、相手物質から電子を受け取る酸化剤としてはたらく場合が多いです。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
              H<sub>2</sub>O<sub>2</sub>＋2H<sup>+</sup>＋2e<sup>-</sup> → 2H<sub>2</sub>O
            </p>
          </figure>

          <div className={shared.bandCard}>
            <p>
              しかし、過マンガン酸カリウムKMnO<sub>4</sub>のような強い酸化剤に対しては、過酸化水素H<sub>2</sub>O<sub>2</sub>は相手物質に電子を与える還元剤としてはたらきます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
              H<sub>2</sub>O<sub>2</sub> → O<sub>2</sub>＋2H<sup>+</sup>＋2e<sup>-</sup>
            </p>
          </figure>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <OxidationAndReductionQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}