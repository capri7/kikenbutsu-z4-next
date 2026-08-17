// src/app/basics/properties_prevention/special_flammable_properties/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SpecialFlammablePropertiesQuiz from './SpecialFlammablePropertiesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第3章 6節：特殊引火物の性状',
  description:
    '危険物乙4。ジエチルエーテル・二硫化炭素・アセトアルデヒド・酸化プロピレン・イソプレンの引火点・発火点・燃焼範囲・蒸気比重。発火点90℃の二硫化炭素など重要数値の整理。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/special_flammable_properties',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第3章 6節：特殊引火物の性状',
    description:
      '危険物乙4。ジエチルエーテル・二硫化炭素・アセトアルデヒド・酸化プロピレン・イソプレンの引火点・発火点・燃焼範囲・蒸気比重。発火点90℃の二硫化炭素など重要数値の整理。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/special_flammable_properties',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '基礎知識 | 第3章 6節：特殊引火物の性状',
    description:
      '危険物乙4。ジエチルエーテル・二硫化炭素・アセトアルデヒド・酸化プロピレン・イソプレンの引火点・発火点・燃焼範囲・蒸気比重。発火点90℃の二硫化炭素など重要数値の整理。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SpecialFlammablePropertiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '6節：特殊引火物の性状' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 特殊引火物 */}
        <section className={shared.section}>
          <h2>特殊引火物</h2>

          <div className={shared.bandCard}>
            <p>
              特殊引火物とは、常圧（1気圧）の条件において、<strong>発火点が100℃以下</strong>である物質、
              または<strong>引火点が−20℃以下</strong>かつ<strong>沸点が40℃以下</strong>の物質を指します。
            </p>
          </div>

          <h3>特殊引火物の特性</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">特殊引火物の特性</caption>
              <colgroup>
                <col className={styles.colSpecialFlammables} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>特殊引火物の主な特性</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={`${shared.stickyCol} ${styles.specialFlammablesRow}`}>
                    ① <strong>引火点が低い</strong> ➡️ ごくわずかな熱や火源でも着火しやすい。
                  </th>
                </tr>
                <tr>
                  <th scope="row" className={`${shared.stickyCol} ${styles.specialFlammablesRow}`}>
                    ② <strong>沸点が低い</strong> ➡️ 常温でも容易に蒸発し、揮発性が高い。
                  </th>
                </tr>
                <tr>
                  <th scope="row" className={`${shared.stickyCol} ${styles.specialFlammablesRow}`}>
                    ③ <strong>燃焼範囲が広い</strong> ➡️ 蒸気が空気中で燃焼しやすい。
                  </th>
                </tr>
              </tbody>

            </table>
          </div>
        </section>

        {/* 2. ジエチルエーテル */}
        <section className={shared.section}>
          <h2>ジエチルエーテル （C₂H₅OC₂H₅）</h2>

          <div className={shared.bandCard}>
            <p>ここでは、特殊引火物の代表物質であるジエチルエーテルについて、乙種第4類で問われやすい物理的性質を整理します。</p>
          </div>

          <h3>ジエチルエーテルの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">ジエチルエーテルの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colNumericalValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">数値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.7</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>35℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-45℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>160℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>1.9 ～ 36 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>2.6</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ジエチルエーテルの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>引火点が最も低い。</strong></li>
              <li>無色の液体で、甘い刺激臭がある。</li>
              <li><strong>水には少しだけ溶け、アルコールにはよく溶ける。</strong></li>
              <li>
                <strong>空気</strong>との接触や<strong>日光</strong>にさらされると、<strong>酸化</strong>されて<strong>爆発性の過酸化物</strong>を生成する。
                過酸化物は、熱や衝撃を加えると、爆発する危険性が高い。
              </li>
              <li><strong>電気</strong>の<strong>不導体</strong>で、<strong>静電気</strong>を発生しやすい。</li>
              <li>蒸気には<strong>麻酔性</strong>がある。</li>
              <li>二酸化炭素、耐アルコール泡（水溶性液体用泡消火剤）等を用いた窒息消化が有効。</li>
              <li><strong>冷暗所</strong>で貯蔵し、容器に収納した場合は密栓する。</li>
              <li>
                アクリル樹脂など多くのプラスティック、ゴムを侵すため、それらの材質の容器は使用できない。
                <strong>金属製、ガラス製、</strong>テフロン性などの容器を使用する。
              </li>
            </ol>
          </div>
        </section>

        {/* 3. 二硫化炭素 */}
        <section className={shared.section}>
          <h2>二硫化炭素（CS₂）</h2>

          <div className={shared.bandCard}>
            <p>
              ここでは、特殊引火物の中でも発火点が極めて低く、蒸気の危険性が高い二硫化炭素について、
              乙種第4類で問われやすい物理的性質を整理します。
            </p>
          </div>

          <h3>二硫化炭素の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">二硫化炭素の物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colNumericalValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">数値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>1.3</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>46℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-30℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>90℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>1.3 ～ 50 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>2.6</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>二硫化炭素の性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>発火点が極めて低い。</strong></li>
              <li>純粋なものは<strong>無色</strong>だが、光により分解が進み、長時間日光にさらされると<strong>黄色</strong>を呈する。</li>
              <li>純粋なものはほとんど無臭だが、通常は特有の<strong>不快臭</strong>を放つ。</li>
              <li>蒸気は特に<strong>有毒</strong>である。かつて、殺虫剤などに利用された。</li>
              <li>
                貯蔵の際は<strong>液面上に水を張る</strong>ことで蒸気の発生を抑制する。
                また、屋外タンクでは<strong>水槽にタンクごと水没</strong>させる。これは比重が水より大きく、水に難溶である性質を利用している。
              </li>
              <li><strong>電気不導体</strong>であり、<strong>静電気</strong>を帯びやすい。</li>
              <li>
                空気中では<strong>青い炎</strong>を上げて燃焼し、<strong>二酸化炭素</strong>と有毒な<strong>二酸化硫黄</strong>
                （亜硫酸ガス）を発生する。<code>CS₂ + 3O₂ → CO₂ + 2SO₂</code>
              </li>
            </ol>
          </div>
        </section>

        {/* 4. アセトアルデヒド */}
        <section className={shared.section}>
          <h2>アセトアルデヒド（CH₃CHO）</h2>

          <div className={shared.bandCard}>
            <p>
              ここでは、沸点が極めて低く燃焼範囲も広いアセトアルデヒドについて、
              健康影響にも関わる物理的性質を乙種第4類の出題ポイントとあわせて整理します。
            </p>
          </div>

          <h3>アセトアルデヒドの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">アセトアルデヒドの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colNumericalValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">数値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.8</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>21℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-39℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>175℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>4.0 ～ 60 vol%（極めて広い）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>1.5</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>アセトアルデヒドの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>沸点が極めて低く、燃焼範囲が広い。</strong></li>
              <li>無色の液体で、刺激臭をもち、揮発性が高い。</li>
              <li>
                <strong>水によく溶け、有機溶剤にも溶ける。</strong>
                <br />
                <span style={{ fontSize: '0.85em' }}>
                  ※有機溶剤は有機溶媒ともいい、有機化合物の溶媒である。
                  水溶性ではない多くの溶質を溶かすことができる。エタノール、ジエチルエーテル、ベンゼン、アセトン、クロロホルム、ヘキサンなどがある。
                </span>
              </li>
              <li>
                還元性をもち、人体ではエタノールの酸化によって生成され、二日酔いの原因とされる。
                また、さらに<strong>酸化すると酢酸</strong>（カルボン酸に属する）となり、還元（水素化）されるとアルコールになる。
                <code>CH₃CHO + 1/2O₂ → CH₃COOH</code>
              </li>
              <li>
                <strong>空気</strong>と長時間接触、または加圧下で接触すると、<strong>爆発性の過酸化物</strong>を生成するおそれがある。
                また、<strong>熱または光で分解し</strong>、メタン（CH₄）と一酸化炭素（CO）を生じる。
                <code>CH₃CHO → CH₄ + CO</code>
              </li>
              <li>
                貯蔵の際は窒素などの<strong>不活性ガス</strong>を封入し、容器は<strong>炭素鋼・ステンレス鋼</strong>（必要に応じ適合アルミ）を用いる。
                <strong>銅・銅合金・銀</strong>は使用しない（接触で危険物質生成のおそれ）。
              </li>
              <li>一般の泡消火剤は不適当。耐アルコール泡（水溶性液体用泡消火剤）、ハロゲン化合物等の消火剤が有効。</li>
              <li><strong>有毒</strong>であるため、<strong>直接触れない。</strong>皮膚に付着した場合は、速やかに多量の水と石けんで洗い流すこと。</li>
            </ol>
          </div>
        </section>

        {/* 5. 酸化プロピレン */}
        <section className={shared.section}>
          <h2>酸化プロピレン （C₃H₆O）</h2>

          <div className={shared.bandCard}>
            <p>
              ここでは、沸点が低く燃焼範囲も広く、重合しやすい性質をもつ酸化プロピレンについて、
              乙種第4類で押さえておきたい物理的性質を整理します。
            </p>
          </div>

          <h3>酸化プロピレンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">酸化プロピレンの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colNumericalValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">数値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.8</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>35℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-37℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>449℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>2.1 ～ 39 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>2.0</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>酸化プロピレンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>無色の液体で特有のエーテル臭をもつ。</strong></li>
              <li><strong>水によく溶け</strong>、エタノール、ジエチルエーテルにも溶ける。</li>
              <li>容器等に貯蔵する場合は、窒素等の<strong>不活性ガスを封入</strong>し、安定化を図る。</li>
              <li>一般の泡消火剤は不適当。耐アルコール泡（水溶性液体用泡消火剤）、ハロゲン化合物等の消火剤が有効。</li>
              <li>
                <strong>重合性</strong>をもち、反応時に発熱するため火災・爆発の危険がある。特に<strong>アルカリ存在下</strong>では重合が促進される。
              </li>
            </ol>
          </div>
        </section>

        {/* 6. イソプレン */}
        <section className={shared.section}>
          <h2>イソプレン（C₅H₈）</h2>

          <div className={shared.bandCard}>
            <p>
              ここでは、可燃性・引火性が高く、霧状で空気中に分散すると爆発の危険が大きいイソプレンについて、
              危険物として押さえておきたい物理的性質を整理します。
            </p>
          </div>

          <h3>イソプレンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">イソプレンの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colNumericalValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">数値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.68</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>34℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-48℃または-54℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>220℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>融点</th><td>約-147℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>2.35</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>イソプレンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>無色の液体で<strong>揮発性が高く</strong>、やや刺激臭をもつ。</li>
              <li><strong>水には溶けにくい</strong>が、アルコールやエーテルにはよく溶ける。</li>
              <li><strong>可燃性・引火性に富み</strong>、特に霧状で空気中に分散すると爆発の危険がある。</li>
              <li>燃焼時には<strong>刺激性または有毒ガス</strong>を発生する。</li>
              <li>酸化剤・無機酸・ハロゲンなどと激しく反応し、爆発の危険がある。</li>
            </ol>
          </div>
        </section>

        {/* 7. 特殊引火物のまとめ */}
        <section className={shared.section}>
          <h2>特殊引火物のまとめ</h2>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！特殊引火物のここを狙われやすい</h4>
            <ul className={shared.compact}>
              <li>
                特殊引火物の定義では<strong>「引火点」と「発火点」</strong>を取り違えないこと。
                「引火点が−20℃以下」「沸点が40℃以下」などの条件を、第1石油類の条件とごちゃまぜにしない。
              </li>
              <li>
                <strong>ジエチルエーテルの溶け方</strong>は「水には少し溶け、アルコールにはよく溶ける」。
                「水にほとんど溶けない」「水にもアルコールにもよく溶ける」といった文章は誤り。
              </li>
              <li>
                <strong>二硫化炭素の蒸気比重</strong>は空気より重い。「漏れた蒸気は足もと・くぼ地にたまりやすい」という記述をからめた問題でよくひっかけに使われる。
              </li>
              <li>
                アセトアルデヒド・酸化プロピレン・イソプレンは、いずれも<strong>燃焼範囲が広く、爆発性が高い</strong>ことが共通ポイント。
                「燃焼範囲が狭い」「爆発性は低い」と書いてあれば誤り。
              </li>
            </ul>
          </div>
        </section>

        {/* 8. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <SpecialFlammablePropertiesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}