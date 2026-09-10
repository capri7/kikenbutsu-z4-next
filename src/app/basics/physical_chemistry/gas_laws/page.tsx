// src/app/basics/physical_chemistry/gas_laws/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import GasLawsQuiz from './GasLawsQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 15節：ボイルの法則／シャルルの法則／ドルトンの法則',
  description:
    '危険物乙4 第2章15節。ボイルの法則、シャルルの法則、理想気体、ドルトンの分圧の法則を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/gas_laws',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 15節：ボイルの法則／シャルルの法則／ドルトンの法則',
    description:
      '危険物乙4 第2章15節。ボイルの法則、シャルルの法則、理想気体、ドルトンの分圧の法則を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/gas_laws',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 15節：ボイルの法則／シャルルの法則／ドルトンの法則',
    description:
      '危険物乙4 第2章15節。ボイルの法則、シャルルの法則、理想気体、ドルトンの分圧の法則を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function GasLawsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '15節：ボイルの法則／シャルルの法則／ドルトンの法則' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>ボイルの法則</h2>

          <div className={shared.bandCard}>
            <p>
              「温度が一定のとき、気体の体積は圧力に<strong>反比例</strong>する。」という法則です。
            </p>
            <p>
              ボイルの法則に従うと、温度が一定のとき、圧力（P）を2倍にすると体積（V）は2分の1になります。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/boyles_law_formula.svg"
              alt="ボイルの法則の公式。体積Vは一定をPで割った値に等しい（V＝一定／P）。またはP×V＝一定と表される。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1400}
              height={800}
            />
            <figcaption className={shared.figureCaption}>
              <strong>ボイルの法則</strong> — 温度一定のとき、圧力Pと体積Vの積は常に一定になります。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>シャルルの法則</h2>

          <div className={shared.bandCard}>
            <p>
             「圧力が一定のとき、一定質量の気体の体積は、温度が1℃上昇または下降するごとに、0℃における体積の273分の1ずつ膨張または収縮する。」という法則です。
            </p>
            <p>
             「0℃における体積の273分の1」は、0℃における絶対温度が273Kであることに由来します。絶対温度は－273℃を基準としたもので、単位にK（ケルビン）を用います。
            </p>
          </div>

          <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/basics/physical_chemistry/absolute_temperature_scale.svg"
            alt="摂氏温度と絶対温度の対応を示す数直線。－273℃が絶対零度で0K、0℃が氷点で273K、100℃が沸点で373Kとなる。絶対温度（K）＝摂氏温度（℃）＋273という関係式を示す。"
            className={shared.circuitSvg}
            loading="lazy"
            decoding="async"
            width={1560}
            height={700}
          />
          <figcaption className={shared.figureCaption}>
            <strong>絶対温度と摂氏温度の対応</strong> — 絶対温度（K）は摂氏温度（℃）に273を足した値になります。
          </figcaption>
          </figure>

          <div className={shared.bandCard}>
            <p>
              絶対温度を用いてシャルルの法則を言い換えると、「圧力が一定のとき、一定質量の気体の体積は絶対温度に比例する。」となります。
            </p>
            <p>
              シャルルの法則に従うと、圧力が一定のとき、温度（T）を273Kから373Kにすると、体積（V）は373/273倍になります。273K時の体積をV1、373K時の体積をV2とすると、次の等式が成り立ちます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/charles_law_equation.svg"
              alt="シャルルの法則の関係式。273Kのときの体積V1を273で割った値と、373Kのときの体積V2を373で割った値が等しい（V1/273＝V2/373）。圧力一定のとき体積は絶対温度に比例するためこの関係が成り立つ。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1400}
              height={700}
            />
            <figcaption className={shared.figureCaption}>
              <strong>シャルルの法則の関係式</strong> — V1/273＝V2/373のように、体積と絶対温度の比は常に一定になります。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>理想気体</h2>

          <div className={shared.bandCard}>
            <p>
              ボイルの法則とシャルルの法則に従う仮想的な気体を<strong>理想気体</strong>といいます。
            </p>
            <p>
              実在する気体は、厳密には2つの法則に従いません。温度が高く、圧力が低いときに理想気体に近づきます。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>ドルトンの分圧の法則</h2>

          <div className={shared.bandCard}>
            <p>
             「混合気体の全圧は、各気体の圧力の和に等しい。」という法則です。
            </p>
            <p>
              混合気体を構成する各気体の圧力を「<strong>分圧</strong>」といい、混合気体の圧力を「<strong>全圧</strong>」といいます。
            </p>
            <p>
              気体Aと気体Bからなる混合気体の全圧をPとしたとき、気体A・Bの分圧をそれぞれPA、PBとすると、次のようになります。
            </p>
          </div>

          <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/basics/physical_chemistry/daltons_law_formula.svg"
            alt="ドルトンの分圧の法則の公式。全圧Pは気体Aの分圧PAと気体Bの分圧PBの和に等しい（P＝PA＋PB）。"
            className={shared.circuitSvg}
            loading="lazy"
            decoding="async"
            width={1400}
            height={700}
           />
           <figcaption className={shared.figureCaption}>
             <strong>ドルトンの分圧の法則</strong> — 混合気体の全圧Pは、各成分気体の分圧の和に等しくなります。
           </figcaption>
          </figure>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
            <GasLawsQuiz />
          </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}