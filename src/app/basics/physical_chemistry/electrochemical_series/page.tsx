// src/app/basics/physical_chemistry/electrochemical_series/page.tsx
import type { Metadata } from 'next'

import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import ElectroChemicalSeriesQuiz from './ElectroChemicalSeriesQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 27節：イオン化傾向',
  description:
    '危険物乙4 第2章27節。金属のイオン化列、水素との位置づけ、イオン化傾向の大小による金属の反応性の違いを整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/electrochemical_series',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 27節：イオン化傾向',
    description:
      '危険物乙4 第2章27節。金属のイオン化列、水素との位置づけ、イオン化傾向の大小による金属の反応性の違いを整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/electrochemical_series',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 27節：イオン化傾向',
    description:
      '危険物乙4 第2章27節。金属のイオン化列、水素との位置づけ、イオン化傾向の大小による金属の反応性の違いを整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function IonizationTendencyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '27節：イオン化傾向' },
        ]}
      />

      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <div className={shared.bandCard}>
            <p className={shared.summaryLabel}>👉このページでわかること</p>
            <p>
              ここでは、金属のイオン化列、水素とイオン化列の関係、イオン化傾向の大小による金属の反応性の違い、水・酸・空気中における金属の反応性を解説します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>イオン化列</h2>
          <div className={shared.bandCard}>
            <p>
              金属は電解質の水溶液に溶け出すと陽イオンになります。金属の種類によって、イオンのなりやすさは異なり、このイオンのなりやすさを<strong>イオン化傾向</strong>といいます。金属をイオン化傾向の大きい順に並べたものを<strong>金属のイオン化列</strong>と呼びます。
            </p>
          </div>

            <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/ionization_series.svg"
              alt="金属のイオン化列を示す図。イオン化傾向の大きい順に、リチウムLi・カリウムK・カルシウムCa・ナトリウムNa・マグネシウムMg・アルミニウムAl・亜鉛Zn・鉄Fe・ニッケルNiと続き、スズSn・鉛Pb・水素H2・銅Cu・水銀Hg・銀Ag・白金Pt・金Auの順に並ぶ。"
              className={shared.circuitSvg}
              fetchPriority="high"
              decoding="async"
              width={994}
              height={536}
            />
            <figcaption className={shared.figureCaption}>
              <strong>金属のイオン化列</strong> — 元素記号と元素名を対応させて示しています。
            </figcaption>
          </figure>
            <h3>覚え方</h3>
          <div className={shared.examNotes}>
            <p>貸そうかな、まああてにすんなひどすぎる借金</p>
            <figure className={shared.formulaCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/basics/physical_chemistry/ionization_mnemonic.svg"
                alt="語呂合わせ「貸そうかな、まああてにすんなひどすぎる借金」と元素記号の対応図。貸そう＝K、か＝Ca、な＝Na、ま＝Mg、あ＝Al、あ＝Zn、て＝Fe、に＝Ni、すん＝Sn、な＝Pb、ひ＝H、ど＝Cu、す＝Hg、ぎる＝Ag、借＝Pt、金＝Auに対応する。"
                className={shared.circuitSvg}
                loading="lazy"
                decoding="async"
                width={884}
                height={310}
              />
            <figcaption className={shared.figureCaption}>
              Liはこの語呂合わせに含まれないため、対応表はK〜Auの16元素のみです。
            </figcaption>
            </figure>
          </div>

          <div className={shared.bandCard}>
            <p>
              水素は金属ではないが、金属と同じく陽イオンになるため、イオン化列に組み入れることが多いです。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              鉄や亜鉛を酸に溶かしたとき水溶液から水素ガスが発生するのは、鉄や亜鉛が水素よりイオン化傾向が大きく、水素イオンが電子を受け取って水素原子に戻り、2個結びついて水素分子（H₂）になるためです。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              イオン化傾向が大きい金属は、化学変化しやすいため取り扱いに注意が必要です。また、イオン化傾向が小さい金属は化学的に安定しています。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>金属のイオン化列と反応性</h2>
          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/ionization_reactivity.svg"
              alt="金属のイオン化列と、水・酸・空気中での反応性をまとめた図。イオン化傾向の大きい順にLi・K・Ca・Naは冷水と反応し、Mgは熱水と反応し、Al・Zn・Feは高温の水蒸気と反応する。塩酸・希硫酸とはLi〜Pbが反応して水素を発生し、硝酸や熱濃硫酸にはLi〜Agが溶けるがAl・Fe・Niは不動態となり溶けない。王水にはLi〜Auすべてが溶ける。空気中ではLi〜Naが速やかに酸化し、Mg〜Agは表面に酸化被膜をつくり、Pt・Auは酸化されない。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1872}
              height={819}
            />
            <figcaption className={shared.figureCaption}>
              王水とは濃硝酸と濃塩酸を体積比1:3で混合した溶液。強い酸化力がある。
            </figcaption>
          </figure>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <ElectroChemicalSeriesQuiz/>
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}