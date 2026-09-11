// src/app/basics/physical_chemistry/physical_and_chemical_changes/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import PhysicalAndChemicalChangesQuiz from './PhysicalAndChemicalChangesQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 19節：物理変化と化学変化',
  description:
    '危険物乙4 第2章19節。物理変化と化学変化の違い、潮解・風解、代表的な物理変化の例を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/physical_and_chemical_changes',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 19節：物理変化と化学変化',
    description:
      '危険物乙4 第2章19節。物理変化と化学変化の違い、潮解・風解、代表的な物理変化の例を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/physical_and_chemical_changes',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 19節：物理変化と化学変化',
    description:
      '危険物乙4 第2章19節。物理変化と化学変化の違い、潮解・風解、代表的な物理変化の例を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function PhysicalAndChemicalChangesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '19節：物理変化と化学変化' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>物理変化</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>物理変化</strong>は、化学組成の変化なしに起こる変化をいいます。すなわち、物質の状態や形が変わるだけの変化です。原油の分留（混合物を蒸留して分けること）は、物理変化を利用したものです。
            </p>
            <p>
              具体的には、固体・液体・気体の三態変化や、<strong>潮解</strong>（固体が空気中の水分を吸収して溶解する現象）、<strong>風解</strong>（結晶性の物質や水和物が空気中で粉末状になったり、水分が失われる現象）などの変化をいいます。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>物理変化の例</h3>
            <ol className={shared.compact}>
              <li>ニクロム線に電気を通じると発熱する。</li>
              <li>氷が溶けて水になる。</li>
              <li>食塩水を煮詰めると食塩の結晶が析出する。</li>
              <li>ドライアイスが気体になる。</li>
            </ol>
          </div>
        </section>

        <section className={shared.section}>
          <h2>化学変化</h2>
 
          <div className={shared.bandCard}>
            <p>
              <strong>化学変化</strong>は、物質を構成する原子の結合の組み替えが伴う変化をいいます。すなわち、2種類以上の物質から、性質が異なる物質になる変化です。
            </p>
            <p>
              具体的には、<strong>酸化・中和・燃焼・分解</strong>などの変化をいいます。
            </p>
          </div>
 
          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>化学変化の例</h3>
            <ol className={shared.compact}>
              <li>木炭が燃えると灰になる。</li>
              <li>鉄が錆びるとボロボロになる。</li>
              <li>水に電気を通すと、分解して酸素と水素になる。</li>
              <li>紙が濃硫酸に触れると黒くなる。</li>
            </ol>
          </div>
 
          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>紙が濃硫酸に触れると黒くなる理由</h3>
            <p>
              紙の原料である植物繊維は、<strong>セルロース（(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>n</sub>）</strong>が主成分です。一方、濃度90％以上の濃硫酸は、強力な酸化力と<strong>脱水作用</strong>があります。セルロースから水分（H<sub>2</sub>O）を取り除くと炭素（C）が残り、これが黒く変色する原因となります。
            </p>
          </div>
        </section>
 
        <section className={shared.section}>
          <h2>化合</h2>
 
          <div className={shared.bandCard}>
            <p>
              <strong>化合</strong>とは、2種類以上の物質が化学的に結合して、別の物質ができることをいいます。また、化合の結果、新たにできる物質を<strong>化合物</strong>といいます。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>
              「化合」と「混合」を混同しないよう注意してください。<strong>化合</strong>は2種類以上の物質が化学反応を起こして別の物質（化合物）になる変化で、化学式で表すことができます。一方、<strong>混合</strong>は2種類以上の物質が化学変化を起こさず単純に混ざり合っているだけの状態（混合物）で、化学式では表せません。混合物は、元の物質がそれぞれの性質を保ったままなので、蒸留やろ過などの物理的な方法で元の物質に分けることができますが、化合物は化学反応を起こさない限り、元の物質に分けることはできません。
            </p>
          </div>
 
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">区分</th>
                  <th scope="col">化合物</th>
                  <th scope="col">混合物</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>できかた</th>
                  <td>化学反応を起こして生成</td>
                  <td>化学変化を伴わず混ざる</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>化学式</th>
                  <td>表すことができる</td>
                  <td>表すことができない</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>元の物質への分離</th>
                  <td>化学反応なしには分けられない</td>
                  <td>物理的な方法（蒸留・ろ過等）で分けられる</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>具体例</th>
                  <td>食塩（NaCl）、水（H<sub>2</sub>O）</td>
                  <td>空気、海水、原油</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
 
        <section className={shared.section}>
          <h2>物理変化と化学変化の見分け方</h2>
 
          <div className={shared.bandCard}>
            <p>
              物理変化と化学変化は、「変化の前後で別の物質になっているかどうか」で見分けることができます。
            </p>
          </div>
 
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">区分</th>
                  <th scope="col">物理変化</th>
                  <th scope="col">化学変化</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>物質の種類</th>
                  <td>変化しない（同じ物質のまま）</td>
                  <td>別の物質に変化する</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>化学式</th>
                  <td>変化前後で同じ</td>
                  <td>変化前後で異なる</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>該当する変化</th>
                  <td>状態変化、潮解、風解、分留、溶解 など</td>
                  <td>酸化、中和、燃焼、分解、化合 など</td>
                </tr>
              </tbody>
            </table>
          </div>
 
          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>分解のもう一つの例</h3>
            <p>
              炭酸水素ナトリウム（重曹）を加熱すると、<strong>炭酸ナトリウム・水・二酸化炭素</strong>の3種類の物質に分かれます。これも「分解」による化学変化の一例です。
            </p>
          </div>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
  <h2 id="quiz-label">クイズ</h2>
  <PhysicalAndChemicalChangesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}

