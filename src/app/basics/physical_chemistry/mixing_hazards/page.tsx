// src/app/basics/physical_chemistry/mixing_hazards/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import MixingHazardsQuiz from './MixingHazardsQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 25節：混合危険',
  description:
    '危険物乙4 第2章25節。混合危険の定義と危険性の現れ方、混合危険性を示す物質の組み合わせを整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/mixing_hazards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 25節：混合危険',
    description:
      '危険物乙4 第2章25節。混合危険の定義と危険性の現れ方、混合危険性を示す物質の組み合わせを整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/mixing_hazards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 25節：混合危険',
    description:
      '危険物乙4 第2章25節。混合危険の定義と危険性の現れ方、混合危険性を示す物質の組み合わせを整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function MixingHazardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '25節：混合危険' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <div className={shared.bandCard}>
            <p className={shared.summaryLabel}>👉このページでわかること</p>
            <p>
              ここでは、混合危険の定義、化学物質どうしの混合による危険性の分類、空気や水との接触による危険性を解説します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>混合危険</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>混合危険</strong>とは、2種類以上の物質を混合することで、物質単体が持つ危険性よりも高い危険性が生じることをいいます。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">混合危険の現れ方</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>有毒ガス・可燃性ガスの発生</th>
                  <td>2種類以上の物質が混合すると同時に有毒ガスまたは可燃性ガスを発生させ、その生成物が発火や爆発を引き起こす</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>刺激による発火・爆発</th>
                  <td>2種類以上の物質を混合したものに、点火源・加熱・衝撃・摩擦のいずれかを加えることで発火や爆発を起こす</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>急激なガス放出</th>
                  <td>急速にガスを放出し、そのガスの圧力によって周囲に被害を与える</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>有毒・腐食性物質の生成</th>
                  <td>有毒または腐食性の物質を生成し、混合前より不安定な化合物または混合物を生成する</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.bandCard}>
            <p>
              混合危険性を示す物質の組み合わせは、2種類以上の化学物質の混合、空気との接触、水との接触の3つに分類され、発火・爆発・可燃性ガスや有毒物質の発生などの危険性を示します。
            </p>
          </div>
      
          <h3>2種類以上の化学物質の混合</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">分類</th>
                  <th scope="col">内容・具体例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酸化性物質と還元性物質の混合</th>
                  <td>酸化性物質（第1類・第6類危険物等）と還元性物質（第2類・第4類危険物等）を混合すると、発火や爆発を起こす</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酸化性塩類と強酸の混合</th>
                  <td>酸化性塩類（第1類危険物の塩素酸塩類・過塩素酸塩類・過マンガン酸塩類など）と強酸（硫酸・濃硝酸など）が混合すると、強い酸化力をもつ物質が生成され、可燃物を発火させたり自身が分解して爆発を起こす</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>極めて敏感な爆発性物質の生成</th>
                  <td>物質どうしが接触して化学反応を起こし、極めて敏感な爆発性物質（三塩化窒素（塩化窒素）、塩素酸アンモニウム、三ヨウ化窒素、雷銀等）をつくる。例：アンモニア＋塩素→三塩化窒素、アンモニア＋塩素酸カリウム→塩素酸アンモニウム、アンモニア＋よう素→三ヨウ化窒素</td>
                </tr>
              </tbody>
            </table>
          </div>
          </section>

          <section className={shared.section}>
          <h2>空気との接触・水との接触</h2>

          <div className={shared.bandCard}>
            <p>
              金属粉や第3類危険物の禁水性物質は、水と接触すると水素ガスを発生し、その反応熱によって発火します。
            </p>
            <p>
              第3類危険物の禁水性物質および自然発火性物質は、リチウム（禁水性のみ）と黄リン（自然発火性のみ）を除き、ほとんどのものが両方の危険性を持っています。そのため、空気や水に接触すると直ちに危険性が生じます。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <p>
              「金属粉」は第2類危険物のアルミニウム粉・マグネシウム粉などをいいます。「禁水性物質」は第3類危険物のナトリウム・カリウムなどをいい、反応性が高く空気中の水分でも反応します。「自然発火性物質」は第3類危険物のアルキルアルミニウム・黄リンなどをいいます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              第5類危険物（自己反応性物質）の中には、空気中に放置すると分解が進み、自然発火するものがあります（過酸化ベンゾイル・ニトログリセリン・ニトロセルロースなど）。
            </p>
          </div>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <MixingHazardsQuiz/>
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}