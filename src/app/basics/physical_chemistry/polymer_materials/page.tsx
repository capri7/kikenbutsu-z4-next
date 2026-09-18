// src/app/basics/physical_chemistry/polymer_materials/page.tsx
import type { Metadata } from 'next'

import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import PolymerMaterialsQuiz from './PolymerMaterialsQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 30節：高分子材料',
  description:
    '危険物乙4 第2章30節。高分子化合物の定義、重合・付加重合・縮合重合のしくみ、高分子材料の用途と特徴を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/polymer_materials',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 30節：高分子材料',
    description:
      '危険物乙4 第2章30節。高分子化合物の定義、重合・付加重合・縮合重合のしくみ、高分子材料の用途と特徴を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/polymer_materials',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 30節：高分子材料',
    description:
      '危険物乙4 第2章30節。高分子化合物の定義、重合・付加重合・縮合重合のしくみ、高分子材料の用途と特徴を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function PolymerMaterialsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '30節：高分子材料' },
        ]}
      />

      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <div className={shared.bandCard}>
            <p className={shared.summaryLabel}>👉このページでわかること</p>
            <p>
              ここでは、高分子化合物の定義と重合・付加重合・縮合重合のしくみ、付加重合によって得られる高分子材料とその用途、高分子材料の主な特徴、プラスチックの熱可塑性樹脂と熱硬化性樹脂の違いを解説します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>高分子化合物</h2>
          <div className={shared.bandCard}>
            <p>
              高分子化合物とは、分子量の大きい化合物の総称です。特に、分子量10,000以上の化合物を指します。1種類の分子（単量体）が2個以上結合して、分子量の大きい新たな分子を生成する反応を重合といいます。また、重合によって結合された化合物を重合体といいます。
            </p>
            <p>
              重合には付加重合と縮合重合があります。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>付加重合</h4>
            <p>
              付加とは、不飽和結合を含む化合物が、その結合を開いて新たに原子団などと付加する反応をいいます。付加重合は、付加反応を繰り返すことで高分子を生成する反応をいいます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/polyethylene_polymerization.svg"
              alt="ポリエチレンの付加重合を示す図。n個のエチレン分子（二重結合をもつ）が付加重合すると、二重結合が単結合になり、繰り返し単位-CH2-CH2-がn個つながったポリエチレンが生成する。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={760}
              height={320}
            />
            <figcaption className={shared.figureCaption}>
              ポリエチレンの付加重合 — エチレンの二重結合が開き、繰り返し単位がつながります。
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>縮合重合</h4>
            <p>
              縮合とは、複数の化合物（特に有機化合物）が、互いに分子内から水やアルコールなどの小分子を取り外して結合（縮合）する反応をいいます。縮合重合は、縮合反応が連鎖的につながって高分子が生成されることをいいます。塗料は、縮合重合によって硬化して塗膜を形成するものが多くなっています。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h3>付加重合によって得られる高分子材料と主な用途</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">重合体名</th>
                  <th scope="col">単量体名</th>
                  <th scope="col">主な用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ポリエチレン（PE）</th>
                  <td>エチレン</td>
                  <td>フィルム、容器、袋、包装材、ロープ、地中埋設用ガス管 他</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ポリプロピレン（PP）</th>
                  <td>プロピレン（プロペン）</td>
                  <td>食品容器、バケツ、椅子、自動車部品などの大型工作物 他</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ポリスチレン（PS）</th>
                  <td>スチレン</td>
                  <td>菓子類の容器、発泡スチロールなどの緩衝梱包材、断熱材 他</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ポリアクリロニトリル（PAN）</th>
                  <td>アクリロニトリル</td>
                  <td>アクリル繊維など</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ポリ塩化ビニル（PVC）</th>
                  <td>塩化ビニル</td>
                  <td>プラ消しゴム、ホース、パイプ、電線被覆、ビニールシート 他</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <h3>高分子材料の主な特徴</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">分類</th>
                  <th scope="col">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>加工性</th>
                  <td>成形加工性のよさ</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>光学的性質</th>
                  <td>透明な材料が多い</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>化学的性質</th>
                  <td>耐水性・耐薬品性・耐食性に優れる。酸・塩基に侵されにくい</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>熱的性質</th>
                  <td>伝熱性の低さ。耐熱性・耐候性に優れるものがある</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>機械的性質</th>
                  <td>強度の高いものがある。表面硬度が低い（傷つきやすい）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>電気的性質</th>
                  <td>電気絶縁性がよい</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>経済性・その他</th>
                  <td>軽量性。低価格</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <h2>プラスチックの熱特性</h2>
          <div className={shared.bandCard}>
            <p>
              プラスチック（樹脂）は、熱を加えたときの変化から熱可塑性樹脂と熱硬化性樹脂に分類されます。
            </p>
            <p>
              熱可塑性樹脂は、加熱すると軟化し、別の形に変形しうる性質をもつ樹脂です。ポリエチレン、ポリプロピレン、ポリ塩化ビニル樹脂などが該当します。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>可塑剤</h4>
            <p>
              可塑剤とは、柔軟性・加工性・耐候性などの向上を目的として熱可塑性樹脂に添加する添加剤の総称です。「可塑」とは、やわらかくて形を変えやすいこと、成形しやすいことをいいます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              熱硬化性樹脂は、加熱すると分子がところどころで結合し、不溶不融の状態に硬化する性質をもつ樹脂です。エポキシ樹脂、フェノール樹脂、尿素樹脂、メラミン樹脂などが該当します。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              プラスチック全般のその他の特性として、一般に電気絶縁性が高いものが多く、酸や塩基に侵されにくく、腐食しにくいです。密度が小さく、軽量です。
            </p>
          </div>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <PolymerMaterialsQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}