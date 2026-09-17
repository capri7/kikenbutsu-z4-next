// src/app/basics/physical_chemistry/metal_corrosion/page.tsx
import type { Metadata } from 'next'

import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import MetalCorrosionQuiz from './MetalCorrosionQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 28節：金属の腐食',
  description:
    '危険物乙4 第2章28節。金属の腐食のしくみと、腐食電池が形成される過程、腐食しやすい条件を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/metal_corrosion',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 28節：金属の腐食',
    description:
      '危険物乙4 第2章28節。金属の腐食のしくみと、腐食電池が形成される過程、腐食しやすい条件を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/metal_corrosion',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 28節：金属の腐食',
    description:
      '危険物乙4 第2章28節。金属の腐食のしくみと、腐食電池が形成される過程、腐食しやすい条件を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function MetalCorrosionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '28節：金属の腐食' },
        ]}
      />

      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <div className={shared.bandCard}>
            <p className={shared.summaryLabel}>👉このページでわかること</p>
            <p>
              ここでは、金属が腐食するしくみと腐食電池が形成される過程、金属が腐食しやすくなる条件、腐食の防止対策、流電陽極法の原理を解説します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>金属の腐食</h2>
          <div className={shared.bandCard}>
            <p>
              一般の金属材料は自然環境の中で使用中に腐食します。これは金属が精錬前の鉱石（酸化物）に戻ろうとする作用ともいえ、特に地中に埋没された金属体はこの作用を強く受けます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              地下に埋没された鋼製のタンクや配管は、防食被覆等が劣化した部分から鉄が陽イオンとなって周囲の土壌に溶け出し、残された電子が配管等を移動することで腐食電池が形成され、腐食が進行します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>腐食しやすい場合</h2>
          <div className={shared.bandCard}>
            <ul className={shared.compact}>
              <li>酸性の強い土中に埋没した場合、酸により腐食します。</li>
              <li>土質の異なる場所にまたがって配管等を埋没した場合。</li>
              <li>配管等に使用されている金属より、イオン化傾向の小さい金属が接触している場合。</li>
              <li>金属製の配管等を酸性の土壌や海水に浸した場合、腐食が進みます。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>電食</h4>
            <p>
              送電線や直流電気鉄道のレールが近い場所、直流溶接機を使用する工場では、迷走電流によって埋設されている金属の腐食が進みます。金属から土中に電気が流れ出す際、金属は陽イオンとなって溶け出すため腐食が進行し、これを電食といいます。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>コンクリート内の鉄筋腐食</h4>
            <p>
              鉄は本来、強アルカリ性の環境下では耐食性のある酸化被膜（不動態被膜）に覆われているため腐食が進行しません。しかし、強アルカリ性であるコンクリート内で中性化が進むと、埋め込まれている鉄筋などの鉄は不動態被膜を失い、腐食が進行します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>腐食の防止対策</h2>
          <div className={shared.bandCard}>
            <ul className={shared.compact}>
              <li>埋設の際にコンクリートを使用する場合、調合には海砂ではなく山砂を使用します。</li>
              <li>電気防食設備を設けます。</li>
              <li>地下水と接触しないようにします。</li>
              <li>タンク埋設時に塗覆装面を傷つけないようにします。傷がつくとそこから腐食が進行します。</li>
              <li>配管をさや管で覆ったり、スリーブを使用します。</li>
              <li>
                鉄製の配管やタンクを埋設する場合、鉄よりイオン化傾向の大きい亜鉛やアルミニウムなどの金属を接続してアースします（流電陽極法。犠牲陽極法とも呼ばれる）。
              </li>
              <li>配管等にエポキシ樹脂塗料を塗布します。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>エポキシ樹脂</h4>
            <p>
              エポキシ樹脂は、エポキシ基の重合によって生成する熱硬化性樹脂です。耐水性や耐薬品性、電気絶縁性に優れており、接着剤やコーティング剤として広く使われています。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>流電陽極法</h2>
          <div className={shared.bandCard}>
            <p>
              流電陽極法は、金属のイオン化傾向の高低を利用した防食方法です。鉄よりイオン化傾向の大きい金属（マグネシウム、アルミニウム、亜鉛など）を鉄とつないで、それぞれを地中に埋設します。イオン化傾向の大きい金属は地中にイオンとなって放出されるため腐食がより速く進み、一方、イオン化傾向の小さい鉄はイオン化せずにそのままの状態を維持するため腐食を防ぐことができます。
            </p>
          </div>

          <h3>流電陽極法の由来</h3>
          <div className={shared.examNotes}>
            <p>
              金属は陽イオンとなることから陽極となり、これが流電陽極法の名称の由来です。なお、流電陽極（鉄よりイオン化傾向の大きい金属）は定期的に交換する必要があります。
            </p>
          </div>
        </section>

        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <MetalCorrosionQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}