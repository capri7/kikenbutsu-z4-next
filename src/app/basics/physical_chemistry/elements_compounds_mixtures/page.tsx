// src/app/basics/physical_chemistry/elements_compounds_mixtures/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import ElementsCompoundsMixturesQuiz from './ElementsCompoundsMixturesQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 20節：単体・化合物・混合物',
  description:
    '危険物乙4 第2章20節。純物質と混合物、単体と化合物、混合物と分離、同素体と異性体を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/elements_compounds_mixtures',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 20節：単体・化合物・混合物',
    description:
      '危険物乙4 第2章20節。純物質と混合物、単体と化合物、混合物と分離、同素体と異性体を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/elements_compounds_mixtures',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 20節：単体・化合物・混合物',
    description:
      '危険物乙4 第2章20節。純物質と混合物、単体と化合物、混合物と分離、同素体と異性体を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ElementsCompoundsMixturesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '20節：単体・化合物・混合物' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>純物質と混合物</h2>

          <div className={shared.bandCard}>
            <p>
              すべての物質は、<strong>純物質</strong>と<strong>混合物</strong>に分類することができます。
            </p>
            <p>
              純物質は、化学的にみて単一の物質からなるもので、一定の化学組成を持ちます。窒素（N<sub>2</sub>）、酸素（O<sub>2</sub>）、水（H<sub>2</sub>O）、二酸化炭素（CO<sub>2</sub>）、メタノール（CH<sub>3</sub>OH）などが該当します。
            </p>
            <p>
              混合物は、2種またはそれ以上の物質が化学的結合をせずに混じり合ったもので、空気、ガソリン、灯油、食塩水、海水などが該当します。蒸留やろ過などの物理的操作によって、2種類以上の純物質に分離できます。ガソリンや灯油は、複数の炭化水素からなる混合物です。
            </p>
            <p>
              純物質にはさらに、<strong>化合物</strong>と<strong>単体</strong>があります。2種類以上の元素からなるものは化合物、1種類の元素からなるものは単体です。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/classification_of_matter_diagram.svg"
              alt="物質の分類図。純物質と混合物は、混合と分離・精製（蒸留・ろ過など）で相互に変換できる。純物質はさらに単体（1種類の元素）と化合物（2種類以上の元素）に分かれ、両者は化合と分解の関係にある。純物質の例としてN2、O2、H2O、CO2、メタノール（CH3OH）を示す。混合物の例として空気・ガソリン・灯油・食塩水・海水を示す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={900}
            />
            <figcaption className={shared.figureCaption}>
              <strong>物質の分類</strong> — 純物質と混合物は「混合」「分離・精製」で、単体と化合物は「化合」「分解」で相互に結びついています。
            </figcaption>
          </figure>

        </section>

        <section className={shared.section}>
          <h2>単体と化合物</h2>

            <div className={shared.bandCard}>
              <p>
                純物質はさらに、<strong>単体</strong>と<strong>化合物</strong>に区分することができます。
              </p>
              <p>
                単体は、1種類の元素からなる純物質です。水素（H<sub>2</sub>）、酸素（O<sub>2</sub>）、硫黄（S）、リン（P）、水銀（Hg）などが該当します。単体の名称は、通常元素名と同じです。ただし、オゾン（O<sub>3</sub>）のように異なるものもあります。
              </p>
              <p>
                化合物は、2種類以上の元素からなる純物質です。水（H<sub>2</sub>O）は、水素が燃焼することで生成します。また、水は電気分解により水素と酸素に分解できます。水のほか、ジエチルエーテル（C<sub>4</sub>H<sub>10</sub>O、(C<sub>2</sub>H<sub>5</sub>)<sub>2</sub>O）、エタノール（C<sub>2</sub>H<sub>5</sub>OH）、二酸化炭素（CO<sub>2</sub>）、塩化ナトリウム（NaCl）、硝酸（HNO<sub>3</sub>）などが該当します。
              </p>
            </div>
        </section>

        <section className={shared.section}>
          <h2>混合物と分離</h2>

          <div className={shared.bandCard}>
            <p>
              混合物を純物質に分けるには、それぞれの物質の性質の違いを利用した、次のような操作が用いられます。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">分離法</th>
                  <th scope="col">説明</th>
                  <th scope="col">例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ろ過</th>
                  <td>ろ紙を用いて、液体とそれに溶けていない固体を分離する。</td>
                  <td>泥水をろ紙に通して泥と水に分離する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>蒸留</th>
                  <td>液体を含む混合物を沸騰させ、生じた蒸気を冷やして、再び液体として分離する。</td>
                  <td>海水から水を分離する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>分留</th>
                  <td>2種類以上の液体の混合物から、沸点の差を利用して、沸点の低い順に蒸留し分離する。</td>
                  <td>原油を分留して、LPガス、ガソリン、灯油、軽油、重油に分離する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>昇華法</th>
                  <td>昇華しやすい性質をもつ物質を、混合物から分離する。</td>
                  <td>ヨウ素と塩化ナトリウムの混合物を加熱すると、ヨウ素だけが昇華し、生じた気体を冷却することで、ヨウ素のみを分離する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>再結晶</th>
                  <td>温度による物質の溶解度の差を利用して、固体の物質中の不純物を除く。</td>
                  <td>少量の硫酸銅（Ⅱ）を含む硝酸カリウムの水溶液（高温）を冷却すると、硝酸カリウムのみが析出する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>抽出</th>
                  <td>目的とする物質や成分を、適当な溶媒に溶かし出して分離する。</td>
                  <td>コーヒー豆にお湯を注いで成分を溶かし出し、コーヒーを抽出する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>クロマトグラフィー</th>
                  <td>物質の種類によって、溶媒に運ばれる移動速度が異なることを利用して分離する。混合物をろ紙上の一点につけ、ろ紙の下端から溶媒を染み込ませていくと、溶媒の移動とともに成分の物質が分かれていく。</td>
                  <td>ろ紙に黒の水性ペンで点を書き、点の部分に水を染み込ませると、黒色の点が赤色、青色、黄色の成分に分離する。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <h2>同素体と異性体</h2>
 
          <div className={shared.bandCard}>
            <p>
              <strong>同素体</strong>とは、同一元素からなるが、その原子の配列や結合が異なり、性質も違う単体をいいます。
            </p>
          </div>
 
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">元素</th>
                  <th scope="col">同素体</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>硫黄（S）</th>
                  <td>斜方硫黄、単斜硫黄、ゴム状硫黄</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>炭素（C）</th>
                  <td>黒鉛、ダイヤモンド</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酸素（O）</th>
                  <td>酸素（O<sub>2</sub>）、オゾン（O<sub>3</sub>）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>リン（P）</th>
                  <td>赤リン、黄リン</td>
                </tr>
              </tbody>
            </table>
          </div>
 
          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>覚え方</h3>
            <p>
              同素体をもつ元素は、硫黄・炭素・酸素・リンの4種類に限られます。元素記号を並べると「<strong>SCOP</strong>」となり、「スコップ」と覚えます。
            </p>

            <h3>ひっかけ注意！</h3>
            <p>
             「同素体」と「同位体」を混同しないよう注意してください。<strong>同素体</strong>は、同じ元素からなる単体同士で、化学的性質が異なるものをいい、対象は硫黄・炭素・酸素・リンの4元素（SCOP）に限られます。一方、<strong>同位体</strong>は、原子番号（陽子の数）が同じで中性子の数（質量数）が異なる原子同士をいい、化学的性質はほとんど変わりません。「体」の前が「素（元素）」か「位（原子番号の位置）」かで区別すると整理しやすくなります。
            </p>
          </div>
          <div className={shared.bandCard}>
            <p>
              <strong>異性体</strong>とは、同じ数、同じ種類の原子をもっているが、異なる構造をしている物質をいいます。エタノールとジメチルエーテルは、いずれも炭素（C）2個、水素（H）6個、酸素（O）1個で構成されていますが、構造が全く違うため、互いに異性体です。
            </p>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
             src="/images/basics/physical_chemistry/isomers_diagram.svg"
             alt="エタノールとジメチルエーテルの比較表。どちらも分子式C2H6Oで同じだが、示性式・構造式・電子式で表すと、エタノールはヒドロキシ基（-OH）をもつC2H5OH、ジメチルエーテルは炭素-酸素-炭素の骨格をもつCH3OCH3という異なる構造であることが分かる。"
             className={shared.circuitSvg}
             loading="lazy"
             decoding="async"
             width={1700}
             height={1000}
            />
            <figcaption className={shared.figureCaption}>
              <strong>エタノールとジメチルエーテル（異性体）</strong> — 分子式は同じC2H6Oでも、構造がまったく異なります。
            </figcaption>
          </figure>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
          <h3>分子式と示性式の違い</h3>
            <p>
              分子式（例：C<sub>2</sub>H<sub>6</sub>O）は、分子を構成する原子の種類と数だけを表したものです。一方、示性式（例：C<sub>2</sub>H<sub>5</sub>OH）は、官能基（-OHなど）をまとまりとして書き分けることで、分子式だけでは区別できない構造異性体を見分けられるようにしたものです。実際、エタノールとジメチルエーテルはどちらも分子式がC<sub>2</sub>H<sub>6</sub>Oで同じですが、示性式で書けばC<sub>2</sub>H<sub>5</sub>OH（ヒドロキシ基をもつアルコール）とCH<sub>3</sub>OCH<sub>3</sub>（エーテル結合をもつエーテル）という違いが一目で分かります。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>組成式</h3>
              <p>
                 <strong>組成式</strong>は、物質を構成する原子の種類とその数を、最も簡単な整数比で表した化学式です。塩化ナトリウム（NaCl）のようなイオン結晶は、決まった数の原子が集まった「分子」を作らないため、分子式ではなく組成式で表されます。NaClは、ナトリウムイオンと塩化物イオンが1：1の割合で存在することを示しています。
              </p>
          </div>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
                <thead>
                  <tr>
                    <th scope="col">化学式</th>
                    <th scope="col">対象となる物質</th>
                    <th scope="col">目的</th>
                  </tr>
                </thead>
                <tbody>
                   <tr>
                     <th scope="row" className={shared.stickyCol}>分子式</th>
                     <td>分子を作る物質（共有結合）</td>
                     <td>分子内の原子の種類と数を示す</td>
                   </tr>
                   <tr>
                     <th scope="row" className={shared.stickyCol}>示性式</th>
                     <td>分子を作る物質のうち、特に有機化合物</td>
                     <td>官能基を示し、異性体を区別する</td>
                   </tr>
                   <tr>
                     <th scope="row" className={shared.stickyCol}>組成式</th>
                     <td>分子を作らない物質（イオン結晶・共有結合の結晶・金属）</td>
                     <td>原子（イオン）の最も簡単な整数比を示す</td>
                   </tr>
                </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
          <h3>3つの化学式の分かれ道</h3>
            <p>
              分子式・示性式・組成式が混同されやすいのは、それぞれ別の軸の話だからです。まず「その物質が分子を作るかどうか」で分子式と組成式に分かれます。示性式は、分子式で表せる物質（特に有機化合物）を、官能基が分かるように書き分けたものです。
            </p>
          </div>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <ElementsCompoundsMixturesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}

