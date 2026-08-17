// src/app/basics/physical_chemistry/flammability_range/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FlammabilityRangeQuiz from './FlammabilityRangeQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 5節：燃焼範囲',
  description:
    '危険物乙4 第2章5節。燃焼範囲（爆発範囲）の定義、燃焼限界の上限・下限、代表的な物質のvol％と引火点、蒸気濃度の計算方法を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/flammability_range',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 5節：燃焼範囲',
    description:
      '危険物乙4 第2章5節。燃焼範囲（爆発範囲）の定義、燃焼限界の上限・下限、代表的な物質のvol％と引火点、蒸気濃度の計算方法を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/flammability_range',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 5節：燃焼範囲',
    description:
      '危険物乙4 第2章5節。燃焼範囲（爆発範囲）の定義、燃焼限界の上限・下限、代表的な物質のvol％と引火点、蒸気濃度の計算方法を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function FlammabilityRangePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '5節：燃焼範囲' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 燃焼範囲とは */}
        <section className={shared.section}>
          <h2>燃焼範囲とは</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>燃焼範囲</strong>とは、空気中で可燃性蒸気が着火し、燃焼を続けることができる
              <strong>蒸気濃度の下限から上限までの範囲</strong>をいいます。
              この範囲は、蒸気と空気の混合気体中に含まれる可燃性蒸気の<strong>体積％（vol％）</strong>で表します。
              なお、「爆発」を対象とする場合には、ほぼ同じ考え方で<strong>爆発範囲</strong>と呼びます。
            </p>
            <p>
              「vol％」は、混合気体中に含まれる可燃性蒸気の<strong>体積（容量）百分率</strong>を表します。
              ここでの vol は、英語の<em>volume</em>（体積）の略です。
            </p>
            <p>
              <strong>燃焼限界</strong>は、可燃性蒸気が燃焼を維持できる<strong>最小濃度</strong>と<strong>最大濃度</strong>の境目をいいます。
              蒸気濃度が高い側の限界を<strong>上限界（上限値）</strong>、低い側の限界を<strong>下限界（下限値）</strong>と呼びます。
              一般に、燃焼範囲が広く、特に下限界が低いほど、少量の蒸気で引火しやすく危険性が高くなります。
            </p>
            <p>
              また、燃焼範囲の<strong>下限界</strong>に相当する蒸気濃度を生じさせる液温を<strong>引火点</strong>といいます。
            </p>
          </div>

          <h3>燃焼範囲（爆発範囲）と引火点の例</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">燃焼範囲（爆発範囲）と引火点の例</caption>
              <colgroup>
                <col className={styles.colGas} />
                <col className={styles.colVol} />
                <col className={styles.colFlashPoint} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>気体</th>
                  <th scope="col">vol％</th>
                  <th scope="col">引火点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>ガソリン</strong></th>
                  <td>1.4〜7.6</td>
                  <td>-40℃以下</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>灯油</th>
                  <td>1.1〜6.0</td>
                  <td>40℃</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>二硫化炭素</th>
                  <td>1.3〜50</td>
                  <td>-30℃</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ジエチルエーテル</th>
                  <td>1.9〜36.0</td>
                  <td>-45℃</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>水素</th>
                  <td>4.0〜75</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ベンゼン</th>
                  <td>1.2〜7.8</td>
                  <td>-11℃</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酢酸エチル</th>
                  <td>2.0〜11</td>
                  <td>-4℃</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>エタノール</th>
                  <td>3.3〜19</td>
                  <td>13℃</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p>
              可燃性蒸気の燃焼範囲は物質ごとに異なり、同じ物質でも試験条件（点火源の種類、容器の形状、温度、圧力など）によって
              <strong>数値は変化します</strong>。
            </p>
            <p>
              まずは、表の中で<strong>どの物質の範囲が広いか</strong>、特に<strong>水素や二硫化炭素のように燃焼範囲が極端に広い物質ほど危険</strong>だ
              というイメージを押さえましょう。
            </p>
            <p>
              一般に、<strong>温度や圧力が上昇するほど燃焼／爆発範囲は広がり</strong>、特に濃度の<strong>上限界が大きくなります</strong>。
              試験では「温度が下がると燃焼範囲は広がる」「圧力が低いほど燃焼範囲が広い」といった文は<strong>ひっかけ</strong>になりやすいので要注意です。
            </p>
          </div>

          <h3>混合気の蒸気濃度</h3>
          <div className={shared.bandCard}>
            <p>
              たとえばガソリンの爆発範囲は<strong>1.4～7.6 vol％</strong>です。
              したがってガソリンエンジンでは、混合気中のガソリン蒸気濃度が<strong>1.4～7.6 vol％</strong>の範囲内にあるときに燃焼（爆発）が起こり、
              それより薄い（下限未満）または濃い（上限超）の場合には燃焼（爆発）は起こりません。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/vapor_concentration_formula.svg"
              alt="混合気の蒸気濃度の求め方（蒸気量 ÷（空気量＋蒸気量）×100％）"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              混合気中の蒸気濃度（vol％）は、<strong>蒸気量 ÷（空気量＋蒸気量）×100％</strong> で求めます。単位は体積百分率（vol％）です。
            </figcaption>
          </figure>

          <h3>ガソリン量に対する蒸気濃度</h3>
          <div className={shared.bandCard}>
            <p>
              ここでは、空気を<strong>100 L</strong>と一定にしておき、そこに加えるガソリンの量を<strong>1 L → 3 L → 10 L</strong>と変化させたときの
              混合気の蒸気濃度を計算します。
            </p>
            <p>
              計算した蒸気濃度が、先ほどのガソリンの爆発範囲<strong>1.4～7.6 vol％</strong>のどこに位置するかを確認し、引火の可否を判断していきます。
            </p>
          </div>

          <h4>空気100Lに対してガソリンが1Lのときの蒸気濃度</h4>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/vapor_concentration_example_1.svg"
              alt="空気100Lに対してガソリンが1Lのときの蒸気濃度"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              蒸気濃度は約<strong>0.99 vol％</strong>で、爆発範囲の下限<strong>1.4 vol％</strong>に達していないため引火しません。
            </figcaption>
          </figure>

          <h4>空気100Lに対してガソリンが3Lのときの蒸気濃度</h4>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/vapor_concentration_example_2.svg"
              alt="空気100Lに対してガソリンが3Lのときの蒸気濃度"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              蒸気濃度は約<strong>2.91 vol％</strong>で、爆発範囲<strong>1.4～7.6 vol％</strong>の範囲内に入るため引火します。
            </figcaption>
          </figure>

          <h4>空気100Lに対してガソリンが10Lのときの蒸気濃度</h4>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/vapor_concentration_example_3.svg"
              alt="空気100Lに対してガソリンが10Lのときの蒸気濃度"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              蒸気濃度は約<strong>9.09 vol％</strong>で、爆発範囲の上限<strong>7.6 vol％</strong>を超えるため引火しません。
            </figcaption>
          </figure>
        </section>

        {/* 2. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <FlammabilityRangeQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}