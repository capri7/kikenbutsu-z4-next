// src/app/basics/physical_chemistry/heat_transfer/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import HeatTransferQuiz from './HeatTransferQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 17節：熱の移動',
  description:
    '危険物乙4 第2章17節。熱の移動の3つの形態（伝導・対流・放射）と、それぞれの性質、放射熱と保安距離の関係を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/heat_transfer',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 17節：熱の移動',
    description:
      '危険物乙4 第2章17節。熱の移動の3つの形態（伝導・対流・放射）と、それぞれの性質、放射熱と保安距離の関係を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/heat_transfer',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 17節：熱の移動',
    description:
      '危険物乙4 第2章17節。熱の移動の3つの形態（伝導・対流・放射）と、それぞれの性質、放射熱と保安距離の関係を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function HeatTransferPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '17節：熱の移動' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <div className={shared.bandCard}>
            <p>
              熱の伝わる方向には、<strong>伝導・対流・放射（ふく射）</strong>の3つがあります。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>伝導</h2>

          <div className={shared.bandCard}>
            <p>
              熱が物体の高温部から低温部へ、物体中を伝わって移動する現象を「<strong>伝導</strong>」といいます。
            </p>
            <p>
              物体には、熱が伝わりやすいものと伝わりにくいものがあります。<strong>熱伝導率</strong>は、この熱の伝わりやすさを表す数値で、数値が大きいものほど熱を伝えやすくなります。
            </p>
            <p>
              固体・液体・気体について熱伝導率を比較すると、<strong>固体が最も大きく、気体が最も小さく</strong>なります。固体は熱を伝えやすく、気体は熱を伝えにくい性質をもちます。銀は、すべての金属中、熱伝導率が最も大きい物質です。
            </p>
          </div>
          <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/basics/physical_chemistry/conduction_diagram.svg"
            alt="伝導のイメージ図。炎で加熱された金属棒が、高温部（赤）から低温部（青）へグラデーションで示されている。物体を構成する粒子の振動が次々と隣へ伝わり、熱が高温部から低温部へ移動する様子を表す。固体で最も起こりやすく、金属の中では銀の熱伝導率が最も大きい。"
            className={shared.circuitSvg}
            loading="lazy"
            decoding="async"
            width={1500}
            height={800}
          />
           <figcaption className={shared.figureCaption}>
             <strong>伝導のイメージ</strong> — 粒子の振動が隣へ伝わることで、熱は高温部から低温部へ移動します。
           </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>対流</h2>

          <div className={shared.bandCard}>
            <p>
              熱が液体または気体を介して移動する現象を「<strong>対流</strong>」といいます。したがって、固体の場合は対流が起こりません。
            </p>
            <p>
              対流の例として、①ストーブによる暖房では天井近くが暖かくなること、②水を沸かすと表面から暖かくなること、などが挙げられます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/convection_diagram.svg"
              alt="対流のイメージ図。左は液体の対流の例として水を沸かす様子を示し、熱源で温められた水は上昇し、冷たい水は下降する循環が起こる。右は気体の対流の例としてストーブ暖房を示し、ストーブで温められた空気は上昇して天井付近が暖かくなり、冷たい空気は下降して床付近は涼しいままになる。固体では対流は起こらない。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={950}
            />
            <figcaption className={shared.figureCaption}>
              <strong>対流のイメージ</strong> — 温められた液体・気体は上昇し、冷えた部分が下降することで熱が全体へ運ばれます。固体では対流は起こりません。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>放射（ふく射）</h2>

          <div className={shared.bandCard}>
            <p>
              熱せられた物体が熱（放射熱）を放射する現象を「<strong>放射（ふく射）</strong>」といいます。
            </p>
            <p>
              放射熱は真空中でも伝わり、直進します。また、物体にあたると吸収されたり、反射したりします。太陽の光にあたると暖かいのは、この放射熱によるものです。
            </p>
          </div>

          <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/radiation_diagram.svg"
              alt="放射（ふく射）のイメージ図。左は太陽の放射熱が真空中でも物質を介さず直進し、人に届いて暖かく感じさせる様子を示す。右は熱源から出た放射熱が物体に当たり、一部が吸収され、一部が反射される様子を示す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={950}
            />
            <figcaption className={shared.figureCaption}>
             <strong>放射（ふく射）のイメージ</strong> — 放射熱は物質を介さず直進して伝わり、物体に当たると吸収されたり反射したりします。
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <p>
              屋外タンク貯蔵所などに定められている「保安距離」は、火災時の<strong>放射熱（輻射熱）による周囲への延焼</strong>を防ぐために確保されている距離です。放射熱は空気中の物質を介さず直進して伝わるため、離れたタンクであっても火災の熱を受けて危険な状態になり得ます。伝導・対流・放射のうち、<strong>法令の保安距離規定と直接結びつくのは放射熱</strong>である、という点は関連づけて覚えておく価値があります。
            </p>
          </div>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
             <HeatTransferQuiz />
        </section>

        {/* 次に進む */}
          <section className={shared.signupCta}>
            <a href="/signup">この範囲の問題を解く（登録無料）</a>
          </section>

      </div>
    </>
  )
}