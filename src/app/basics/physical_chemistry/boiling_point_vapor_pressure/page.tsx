// src/app/basics/physical_chemistry/boiling_point_vapor_pressure/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import BoilingPointVaporPressureQuiz from './BoilingPointVaporPressureQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 13節：沸点と飽和蒸気圧',
  description:
    '危険物乙4 第2章13節。沸点と沸騰の仕組み、飽和蒸気圧、蒸発熱（気化熱）、蒸気圧降下を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/boiling_point_vapor_pressure',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 13節：沸点と飽和蒸気圧',
    description:
      '危険物乙4 第2章13節。沸点と沸騰の仕組み、飽和蒸気圧、蒸発熱（気化熱）、蒸気圧降下を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/boiling_point_vapor_pressure',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 13節：沸点と飽和蒸気圧',
    description:
      '危険物乙4 第2章13節。沸点と沸騰の仕組み、飽和蒸気圧、蒸発熱（気化熱）、蒸気圧降下を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function BoilingPointVaporPressurePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '13節：沸点と飽和蒸気圧' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>沸点</h2>

          <div className={shared.bandCard}>
            <p>
              液体を加熱していくと、気泡が液体内部から発生し、液体の温度はそれ以上、上昇しなくなります。この現象を「<strong>沸騰</strong>」といい、このときの温度を<strong>沸点</strong>といいます。液体内部から発生している気泡は、その物質の<strong>蒸気（気体）</strong>です。
            </p>
            <p>
              沸点は気圧によって変化します。平地（1気圧）の場合よりも、高地などの気圧の低い場所では、沸点は低くなります。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>飽和蒸気圧</h2>

          <div className={shared.bandCard}>
            <p>
              液体が蒸発する際の空間が限定されていると、その蒸発はある一定の状態まで進み、見かけ上はそれ以上蒸発しなくなります。この状態では、蒸発と凝縮（液化）が平衡しており、空間はその液体の蒸気で飽和されています。このときの蒸気の圧力を<strong>飽和蒸気圧</strong>といいます。
            </p>
            <p>
              液体が沸騰しているとき、その蒸気圧は大気圧（外圧、外気圧）と等しくなっています。また、沸点は、その液体の蒸気圧が大気圧と等しくなる温度とも言えます。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>沸点時の飽和蒸気圧＝大気圧のイメージ</h3>
            <p>
              水は1気圧・100℃で沸騰しますが、これは同時に、水の100℃における飽和蒸気圧が1気圧であることを意味します。また、高地では気圧が低いため、水の沸点も下がります。すなわち、<strong>液体の飽和蒸気圧は、温度が下がると低くなります</strong>。
            </p>
            <p>
              液体の温度ごとの飽和蒸気圧を調べるには、大気圧を変化させたときの沸点を測定します。そのときの大気圧が、その液体の温度（沸点）における飽和蒸気圧となります。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              一般に、液体の温度が上昇すると、その空間中に存在しうる飽和蒸気の量も増えるため、<strong>飽和蒸気圧は増大します</strong>。
            </p>
          </div>

          <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/basics/physical_chemistry/saturated_vapor_pressure_curve.svg"
            alt="水の飽和蒸気圧曲線のグラフ。横軸は温度（℃）で0、20、40、60、80、100の目盛り、縦軸は飽和蒸気圧（kPa）で0、20、40、60、80、100の目盛りを示す。温度が上がるほど飽和蒸気圧は急激に大きくなる右上がりの曲線で、100℃で約101kPa（1気圧）に達し、この点が水の沸点にあたる。"
            className={shared.circuitSvg}
            loading="lazy"
            decoding="async"
            width={1600}
            height={1000}
          />
            <figcaption className={shared.figureCaption}>
              <strong>水の飽和蒸気圧曲線</strong> — 温度が上がるほど飽和蒸気圧は大きくなり、100℃で大気圧（約101kPa）と等しくなります。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>蒸発熱（気化熱）</h2>

          <div className={shared.bandCard}>
            <p>
              液体1gが蒸発するときに吸収される熱量を「<strong>蒸発熱</strong>」または「<strong>気化熱</strong>」といいます。蒸発熱が大きいほど蒸発しにくく、蒸発するときには多くの熱を周囲から奪います。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ひっかけ注意</h3>
            <p>
             「液体から気体」への変化は熱を吸収（吸熱）し、「気体から液体」への変化は熱を放出（放熱）します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>蒸気圧降下</h2>

          <div className={shared.bandCard}>
            <p>
              海水で濡れた水着は、真水に濡れたものより乾きにくいです。塩化ナトリウム（NaCl）のような不揮発性物質を溶かした希薄溶液では、純溶媒より蒸気圧が低くなります。この現象を<strong>蒸気圧降下</strong>といいます。
            </p>
            <p>
              希薄溶液では蒸気圧降下が起こるため、100℃よりも高い温度にならないと沸騰しません。このように、沸点上昇は蒸気圧降下から説明することができます。蒸気圧降下の程度は、質量モル濃度が同じであれば、溶質の種類に関係なく同じです。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/vapor_pressure_depression_curve.svg"
              alt="水溶液の蒸気圧降下と沸点上昇を示すグラフ。横軸は温度（℃）、縦軸は蒸気圧（×10の5乗Pa）で、1.0のところに大気圧を示す破線を引く。水の蒸気圧曲線は100℃で1.0×10の5乗Paに達し、これが水の沸点となる。水溶液の蒸気圧曲線は同じ温度では水より低い位置にあり、この差が蒸気圧降下を示す。水溶液の蒸気圧曲線が1.0×10の5乗Paに達する温度は100℃より高く、水の沸点との差が沸点上昇を示す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1600}
              height={1000}
            />
            <figcaption className={shared.figureCaption}>
              <strong>水溶液の蒸気圧降下と沸点上昇</strong> — 同じ温度で比べると水溶液の蒸気圧は水より低く（蒸気圧降下）、その分だけ水溶液の沸点は水より高くなります（沸点上昇）。
            </figcaption>
          </figure>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <BoilingPointVaporPressureQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}