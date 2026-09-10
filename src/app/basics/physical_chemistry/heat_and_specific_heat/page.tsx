// src/app/basics/physical_chemistry/heat_and_specific_heat/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import HeatAndSpecificHeatQuiz from './HeatAndSpecificHeatQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 16節：熱量と比熱',
  description:
    '危険物乙4 第2章16節。熱量の定義、比熱の定義（物質1gを1℃または1K上げるのに必要な熱量）を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/heat_and_specific_heat',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 16節：熱量と比熱',
    description:
      '危険物乙4 第2章16節。熱量の定義、比熱の定義（物質1gを1℃または1K上げるのに必要な熱量）を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/heat_and_specific_heat',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 16節：熱量と比熱',
    description:
      '危険物乙4 第2章16節。熱量の定義、比熱の定義（物質1gを1℃または1K上げるのに必要な熱量）を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function HeatAndSpecificHeatPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '16節：熱量と比熱' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>熱量</h2>

          <div className={shared.bandCard}>
            <p>
              温度の異なる物体同士が接触したとき、高温体から低温体へ熱が伝わります。この伝わる熱のエネルギーを「<strong>熱量</strong>」といいます。単位はエネルギーと同じ<strong>J（ジュール）</strong>を用います。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>比熱</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>比熱</strong>とは、ある物質1gの温度を1℃または1Kだけ高めるのに要する熱量をいいます。単位は<strong>J/(g・K)</strong>を用います。
            </p>
            <p>
              同じ質量の物質でも、温まりやすさは異なります。比熱はこの温まりやすさ・温まりにくさを表す指標で、比熱の大きな物体ほど、温まりにくく冷めにくくなります。
            </p>
            <p>
              水（15℃）の比熱は約4.19J/(g・K)であるのに対し、鉄（0℃）の比熱は約0.44J/(g・K)です。鉄は水より温まりやすく、冷めやすい性質をもちます。また、水は気体を除くと最も比熱の大きい物質です。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>熱容量</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>熱容量</strong>とは、ある物体の温度を1℃または1Kだけ高めるのに要する熱量をいいます。物体の質量をm、比熱をcとすると、その物体の熱容量Cは次の式で表すことができます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/heat_capacity_formula.svg"
              alt="熱容量の公式。熱容量C（単位J/K）は、質量m（単位g）と比熱c（単位J/(g・K)）の積に等しい（C＝m×c）。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={700}
            />
            <figcaption className={shared.figureCaption}>
              <strong>熱容量の公式</strong> — 熱容量Cは、質量mと比熱cの積で求められます（C＝m×c）。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>熱量の計算</h2>

          <div className={shared.bandCard}>
            <p>
              物体の質量をm、物体の比熱をcとすると、その物体の温度をΔt（K）上げるのに必要な熱量Qは、次の式で表すことができます。Δ（デルタ）は「変化量」を表す記号で、Δtは温度の変化量（上昇温度）を意味します。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/heat_quantity_formula.svg"
              alt="熱量の公式。熱量Q（単位J）は、質量m（単位g）と比熱c（単位J/(g・K)）と温度差Δt（単位K）の積に等しい（Q＝m×c×Δt）。Δtは温度の変化量（上昇温度）を意味する。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={700}
            />
            <figcaption className={shared.figureCaption}>
              <strong>熱量の公式</strong> — 熱量Qは、質量m・比熱c・温度差Δtの積で求められます（Q＝m×c×Δt）。
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <p>
              水は常温の液体の中で最も比熱が大きい物質です。比熱が大きいということは、水自身の温度を上げるために多くの熱量が必要ということでもあり、火災の際に水をかけると、水の温度が上がりきるまでの間に燃焼物から多くの熱を奪うことができます。これが、水が<strong>冷却消火</strong>に広く使われる理由です。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              代表的な物質の比熱は、次のとおりです。
            </p>
          </div>

          <div className={shared.tableContainer}>
          <table className={shared.styledTable}>
            <thead>
              <tr>
                <th scope="col">物質</th>
                <th scope="col">比熱〔J/(g・K)〕</th>
              </tr>
            </thead>
          <tbody>
             <tr>
               <th scope="row" className={shared.stickyCol}>水（15℃）</th>
               <td>約4.19</td>
             </tr>
             <tr>
               <th scope="row" className={shared.stickyCol}>氷（－1℃）</th>
               <td>約2.10</td>
             </tr>
             <tr>
               <th scope="row" className={shared.stickyCol}>アルミニウム（0℃）</th>
               <td>約0.88</td>
             </tr>
             <tr>
               <th scope="row" className={shared.stickyCol}>鉄（0℃）</th>
               <td>約0.44</td>
             </tr>
             <tr>
               <th scope="row" className={shared.stickyCol}>銅（0℃）</th>
               <td>約0.38</td>
             </tr>
             <tr>
               <th scope="row" className={shared.stickyCol}>銀（0℃）</th>
               <td>約0.24</td>
             </tr>
          </tbody>
        </table>
      </div>
    </section>

    {/* クイズ */}
    <section className={`${shared.section} ${shared.quizSection}`}>
      <h2 id="quiz-label">クイズ</h2>
      <HeatAndSpecificHeatQuiz />
    </section>

    {/* 次に進む */}
    <section className={shared.signupCta}>
      <a href="/signup">この範囲の問題を解く（登録無料）</a>
    </section>
    </div>
    </>
  )
}