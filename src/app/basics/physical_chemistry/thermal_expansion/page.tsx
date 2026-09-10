// src/app/basics/physical_chemistry/thermal_expansion/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import ThermalExpansionQuiz from './ThermalExpansionquiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 18節：熱膨張',
  description:
    '危険物乙4 第2章18節。熱膨張の定義、増加する体積の公式、線膨張と体膨張の違いを整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/thermal_expansion',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 18節：熱膨張',
    description:
      '危険物乙4 第2章18節。熱膨張の定義、増加する体積の公式、線膨張と体膨張の違いを整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/thermal_expansion',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 18節：熱膨張',
    description:
      '危険物乙4 第2章18節。熱膨張の定義、増加する体積の公式、線膨張と体膨張の違いを整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ThermalExpansionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '18節：熱膨張' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>線膨張と体膨張</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>熱膨張</strong>は、物体の体積が温度の上昇に伴って増大する現象です。増加する体積は、次の式で表すことができます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/volume_expansion_formula.svg"
              alt="増加する体積の公式。増加する体積は、元の体積に、上昇した温度と元の温度の差、および体膨張率を掛けたものに等しい。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={700}
            />
            <figcaption className={shared.figureCaption}>
              <strong>増加する体積の公式</strong> — 元の体積・温度差・体膨張率の積で求められます。
            </figcaption>
          </figure>

          <div className={shared.bandCard}>
            <p>
              熱膨張には、棒状の物質の長さが増加する「<strong>線膨張</strong>」と、縦・横・奥行きの体積が増加する「<strong>体膨張</strong>」とがあります。
            </p>
            <p>
              気体と液体の熱膨張は「体膨張」のみを、固体の熱膨張は「線膨張」と「体膨張」で考えます。また、固体と液体の膨張率は物質によって異なりますが、<strong>気体の膨張率はどの物質でも同じ</strong>です。
            </p>
          </div>
        </section>
        <section className={shared.section}>
          <h2>線膨張率</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>線膨張率</strong>は、物体の温度を1℃上げたときの長さの増加量と、元の長さとの比です。たとえば、長さ10mmの物体が1℃上昇することで長さが10.1mmになった場合、線膨張率は0.01となります。
            </p>
          </div>

          <figure className={shared.formulaCard}>
           {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
             src="/images/basics/physical_chemistry/linear_expansion_diagram.svg"
             alt="線膨張率のイメージ図。常温で10mmの棒が1℃上昇すると10.1mmになり、増加分0.1mmが赤色で強調されている。線膨張率は増加した長さ0.1mmを元の長さ10mmで割った0.01として計算される。"
             className={shared.circuitSvg}
             loading="lazy"
             decoding="async"
             width={1500}
             height={800}
            />
            <figcaption className={shared.figureCaption}>
              <strong>線膨張率のイメージ</strong> — 線膨張率は、増加した長さを元の長さで割って求めます。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>体膨張率</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>体膨張率</strong>は、物体の温度を1℃上げたときの体積の増加量と、元の体積との比です。たとえば一辺10mmの立方体が1℃上昇することで、一辺がそれぞれ10.1mmになったと仮定すると、体積は1000mm³から約1030.3mm³に増加します。この場合、体膨張率は0.0303となります。なお、同一の物体における体膨張率は、一般に線膨張率の約3倍とみなすことができます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/volume_expansion_cube_diagram.svg"
              alt="体膨張率のイメージ図。常温で一辺10mmの立方体（体積1000mm³）が1℃上昇すると一辺10.1mmになり、体積は約1030.3mm³に増加する。体膨張率は増加した体積30.3mm³を元の体積1000mm³で割った約0.0303として計算される。同一の物体では、体膨張率は線膨張率の約3倍とみなせることも示す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={980}
            />
            <figcaption className={shared.figureCaption}>
              <strong>体膨張率のイメージ</strong> — 体膨張率は、増加した体積を元の体積で割って求めます。同一の物体では、線膨張率の約3倍とみなせます。
            </figcaption>
          </figure>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <ThermalExpansionQuiz />
        </section>

        {/* 次に進む */}
         <section className={shared.signupCta}>
           <a href="/signup">この範囲の問題を解く（登録無料）</a>
         </section>
      </div>
    </>
  )
}