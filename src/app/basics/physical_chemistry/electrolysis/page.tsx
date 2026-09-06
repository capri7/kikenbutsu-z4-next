// src/app/basics/physical_chemistry/electrolysis/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'

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
      </div>
    </>
  )
}