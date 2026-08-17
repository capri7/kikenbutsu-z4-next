// src/app/basics/properties_prevention/class4_petroleum_properties/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Class4PetroleumPropertiesQuiz from './Class4PetroleumPropertiesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第3章 11節：第4石油類の性状',
  description:
    '危険物乙4 第3章。第4石油類の性状を整理。引火点の範囲、代表例、消火の注意点、試験で狙われやすいポイントを教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/class4_petroleum_properties',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第3章 11節：第4石油類の性状',
    description:
      '危険物乙4 第3章。第4石油類の性状を整理。引火点の範囲、代表例、消火の注意点、試験で狙われやすいポイントを教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/class4_petroleum_properties',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '基礎知識 | 第3章 11節：第4石油類の性状',
    description:
      '危険物乙4 第3章。第4石油類の性状を整理。引火点の範囲、代表例、消火の注意点、試験で狙われやすいポイントを教科書的に確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function Class4PetroleumPropertiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '11節：第4石油類の性状' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 第4石油類 */}
        <section className={shared.section}>
          <h2>第4石油類</h2>

          <div className={shared.bandCard}>
            <p>第4石油類とは、1気圧・20℃で液状であり、引火点が<strong>200℃以上250℃未満</strong>の危険物を指します。</p>
            <p>
              第4石油類に属するものは、大きく「<strong>潤滑油（ギヤー油、シリンダー油、切削油など）</strong>」と
              「<strong>可塑剤（リン酸トリクレジル〈TCP〉、フタル酸ジオクチル〈DEHP／DOP〉など）</strong>」の2つに分類できます。
              一般に、潤滑油の多くは第4石油類に該当します。
            </p>
          </div>

          <h3>第4石油類の特徴</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">第4石油類の特徴</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">代表値／試験対策メモ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>比重</th>
                  <td>
                    非水溶性で、粘度が高く、<strong>比重が1より小さい（水より軽い）</strong>ものが多い。
                    <br />
                    <small>
                      ※例外の覚え方：TCP（リン酸トリクレジル）は比重が約1.17で水より重く、
                      多くの第4石油類（比重1未満で水より軽い）とは異なります。
                    </small>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>引火点</th>
                  <td>引火点が高いため、一般に、<strong>加熱しない限り引火の危険性は相対的に小さい。</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼</th>
                  <td>
                    燃焼温度が高く、火災時には<strong>温度が非常に高く</strong>なる。
                    このため、水系の消火剤を使用すると水分が沸騰蒸発し、消火が困難になる。
                    また、棒状での注水は、高温となった油を周囲に飛び散らせてしまう危険がある。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼範囲</th>
                  <td>
                    <strong>霧状</strong>にしたもの、<strong>布に染み込んだもの</strong>などは、空気との接触面積が大きくなるため、引火しやすくなる。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>揮発性</th>
                  <td>揮発性がほとんどないため、<strong>蒸発しにくい</strong>。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>定義の境界：引火点は<strong>200℃以上250℃未満</strong>（250℃以上は「指定可燃物（可燃性液体類）」）</li>
              <li>指定数量：<strong>6,000 L</strong></li>
              <li>例外の覚え方：<strong>TCP（リン酸トリクレジル）は比重約1.17で水より重い</strong>（多くは1未満）</li>
              <li>代表例：<strong>DOP（DEHP）引火点 約206℃</strong> → 第4石油類の代表可塑剤</li>
              <li>消火：<strong>泡・粉末・CO₂</strong>が有効。<strong>棒状注水は厳禁</strong>（霧状水で冷却）。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>
              第4石油類の引火点は「200℃以上250℃未満」です。
              「200〜250℃」とだけ覚えると、250℃ちょうども第4石油類と勘違いしやすいので注意しましょう。
            </p>
            <p>250℃以上は「指定可燃物（可燃性液体類）」に分類されます。</p>
          </div>
        </section>

        {/* 2. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <Class4PetroleumPropertiesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}