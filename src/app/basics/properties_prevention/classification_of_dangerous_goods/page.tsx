// src/app/basics/properties_prevention/classification_of_dangerous_goods/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ClassificationOfDangerousGoodsQuiz from './ClassificationOfDangerousGoodsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第3章 1節：危険物の分類',
  description:
    '危険物乙4。第1類〜第6類の分類と各類の性質・危険性。酸化性固体・可燃性固体・自然発火性・禁水性・引火性液体・自己反応性・酸化性液体の特徴と、第4類の位置づけ・指定数量・危険等級の基本。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/classification_of_dangerous_goods',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第3章 1節：危険物の分類',
    description:
      '危険物乙4。第1類〜第6類の分類と各類の性質・危険性。酸化性固体・可燃性固体・自然発火性・禁水性・引火性液体・自己反応性・酸化性液体の特徴と、第4類の位置づけ・指定数量・危険等級の基本。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/classification_of_dangerous_goods',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '基礎知識 | 第3章 1節：危険物の分類',
    description:
      '危険物乙4。第1類〜第6類の分類と各類の性質・危険性。酸化性固体・可燃性固体・自然発火性・禁水性・引火性液体・自己反応性・酸化性液体の特徴と、第4類の位置づけ・指定数量・危険等級の基本。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

type ClassRow = {
  category: 1 | 2 | 3 | 4 | 5 | 6
  conditions: string[]
  points: React.ReactNode[]
}

const ROWS: ClassRow[] = [
  {
    category: 1,
    conditions: ['酸化性固体', '不燃性', '固体'],
    points: [
      <>比重は<strong>1より大きい。</strong></>,
      <><strong>加熱・衝撃・摩擦</strong>に不安定である（分解しやすい）。</>,
      <>酸化性が強く、他の物質を強く酸化させる。可燃物との接触・混合は爆発の危険性がある。</>,
      <>物質そのものは燃焼しない（不燃性）。</>,
      <>多量の酸素を含有しており、<strong>加熱すると分解して酸素を放出する。</strong></>,
      <>多くは<strong>無色</strong>または<strong>白色</strong>である。</>,
      <>水溶性のものが多い。</>,
    ],
  },
  {
    category: 2,
    conditions: ['可燃性固体', '可燃性', '固体'],
    points: [
      <>酸化されやすい（燃えやすい）。また、酸化剤と接触・混合すると爆発する危険性がある。</>,
      <>火炎により着火しやすい。または<strong>比較的低温</strong>（40°C未満）で<strong>引火・着火</strong>しやすい。</>,
      <>燃焼の際に<strong>有毒ガス</strong>を発生するもの、水と接触すると<strong>水素と熱</strong>を発するものがある。</>,
      <>引火性固体（固形アルコールなど）の燃焼は主に蒸発燃焼である。</>,
      <>引火性固体を除き、一般に比重は<strong>1より大きく</strong>、水に溶けない。</>,
      <>微粉状のものは、<strong>粉じん爆発</strong>の危険性がある。</>,
    ],
  },
  {
    category: 3,
    conditions: ['自然発火性物質及び禁水性物質', '可燃性', '不燃性（一部）', '固体', '液体'],
    points: [
      <>空気にさらされると<strong>自然発火</strong>するものがある。</>,
      <>水と接触すると<strong>発火</strong>または<strong>可燃性ガスを発生</strong>するものがある。</>,
      <>多くは、自然発火性と禁水性の<strong>両方の性質</strong>をもつ（例外として、リチウムは禁水性、黄りんは自然発火性のみの性質をもつ）。</>,
    ],
  },
  {
    category: 4,
    conditions: ['引火性液体', '可燃性', '液体'],
    points: [
      <>引火性があり、蒸気を発生させ引火や爆発のおそれのあるものがある。</>,
      <>蒸気比重は1より大きく、蒸気は低所に滞留する。</>,
      <>液比重は1より小さく、水に溶けないものが多い。</>,
      <>非水溶性のものは、電気の不導体のため、静電気を発生しやすい。</>,
    ],
  },
  {
    category: 5,
    conditions: ['自己反応性物質', '可燃性', '固体', '液体'],
    points: [
      <>内部（自己）燃焼する物質が多い。</>,
      <>加熱すると爆発的に分解・燃焼する<strong>（燃焼速度が速い）</strong>。</>,
      <>加熱・衝撃・摩擦等により、発火・爆発するおそれがある。</>,
      <><strong>可燃物と酸素供給源が共存</strong>（分子内に酸素を含有）している物質のため、酸素がなくても自身で酸素を出して自己燃焼する。</>,
      <>分子内に<strong>窒素</strong>を含有しているものもある。</>,
      <>比重は<strong>1より大きい</strong>。</>,
    ],
  },
  {
    category: 6,
    conditions: ['酸化性液体', '不燃性', '液体'],
    points: [
      <>物質そのものは燃焼しない（不燃性）。</>,
      <>他の物質を強く酸化させる（強酸化剤）。</>,
      <>酸素を分離して他の燃焼を助けるものがある。</>,
      <>多くは腐食性があり、皮膚に接触すると危険。また、蒸気は有毒である。</>,
      <>比重は<strong>1より大きい</strong>。</>,
    ],
  },
]

export default function ClassificationOfDangerousGoodsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防', href: '/basics/properties_prevention' },
          { label: '1節：危険物の分類' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {ROWS.map((row) => (
          <section key={row.category} className={shared.section}>
            <h2>第{row.category}類の性質と危険性</h2>

            <div className={shared.tableContainer}>
              <table className={shared.styledTable}>
                <caption className="sr-only">第{row.category}類の性質と危険性</caption>
                <colgroup>
                  <col className={styles.colClassification} />
                  <col className={styles.colCondition} />
                  <col className={styles.colState} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" className={shared.stickyCol}>類別</th>
                    <th scope="col">性質・燃焼性・状態</th>
                    <th scope="col">主な性質と危険性</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className={shared.stickyCol}>
                      <span className={`${shared.tag} ${shared[`category${row.category}`]}`}>
                        第{row.category}類
                      </span>
                    </th>
                    <td>
                      <ul className={shared.compact}>
                        {row.conditions.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ol className={shared.compact}>
                        {row.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {row.category === 6 && (
              <div className={`${shared.callout} ${shared.calloutWarn}`}>
                <h3>注意！</h3>
                <p>※ 液体とは：20°C・1気圧で液状であるもの。または温度20°Cを超え40°C以下の間において液状となるもののことです。</p>
                <p>※ 固体とは：液体または気体（20°C・1気圧のときに気体状であるもの）以外のもののことです。</p>
              </div>
            )}
          </section>
        ))}

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <ClassificationOfDangerousGoodsQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}