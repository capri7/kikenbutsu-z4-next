// src/app/basics/physical_chemistry/dust_explosions/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import DustExplosionsQuiz from './DustExplosionsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 7節：粉じん爆発',
  description:
    '危険物乙4 第2章7節。粉じん爆発が起こるための3要素（粉じん雲・発火源・酸素）、爆発が起こりやすい条件、最小着火エネルギーの特性を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/dust_explosions',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 7節：粉じん爆発',
    description:
      '危険物乙4 第2章7節。粉じん爆発が起こるための3要素（粉じん雲・発火源・酸素）、爆発が起こりやすい条件、最小着火エネルギーの特性を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/dust_explosions',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 7節：粉じん爆発',
    description:
      '危険物乙4 第2章7節。粉じん爆発が起こるための3要素（粉じん雲・発火源・酸素）、爆発が起こりやすい条件、最小着火エネルギーの特性を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function DustExplosionsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '7節：粉じん爆発' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 概要 */}
        <section className={shared.section}>
          <h2>概要</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>粉じん爆発</strong>とは、可燃性の固体微粒子が空気中に浮遊している状態（粉じん雲）で、
              点火源などにより急激な燃焼が生じ、その結果として<strong>多量の熱の発生・気体の体積膨張・圧力上昇</strong>が起こる現象をいいます。
            </p>
            <p>
              発生した火炎と爆発音により、設備の破損や人的被害など、周囲に大きな被害を与えるおそれがある、非常に危険な爆発現象です。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={`${shared.styledTable} ${styles.conditionTable}`}>
              <caption className="sr-only">粉じん爆発が起きるための3要素</caption>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>粉じん爆発が起きるための3要素</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ① 微粉化した粉じんが、<strong>一定濃度で空気中に浮遊（粉じん雲）</strong>していること
                  </th>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ② <strong>発火源</strong>（例：火花・高温面・静電気放電 など）が存在すること
                  </th>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ③ 空気中に<strong>酸素</strong>が存在すること
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p>
              粉じん爆発が起こりやすい条件は、<strong>「粉じん雲」</strong>、<strong>「発火源」</strong>、<strong>「酸素」</strong>の
              <strong>3要素セット</strong>で押さえておく。
            </p>
            <ol className={shared.compact}>
              <li>微粉化した粉じんが、<strong>一定濃度で空気中に浮遊（粉じん雲）</strong>していること</li>
              <li><strong>発火源</strong>（火花・高温面・静電気放電 など）が存在すること</li>
              <li>空気中に<strong>酸素</strong>が存在すること</li>
            </ol>
            <p>
              さらに、粉じん濃度には<strong>爆発範囲（燃焼範囲）</strong>があり、<strong>下限＝爆発下限界・上限＝爆発上限界</strong>という用語もセットで問われやすい。
            </p>
            <p>
              最小着火エネルギーは一般に<strong>粉じん ＞ 可燃性ガス</strong>で、粉じんのほうが<strong>着火しにくい</strong>特性をもつ点も一緒に覚えておく。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>選択肢では、粉じん爆発の3要素を<strong>わざと崩した文章</strong>がよく出てくる。次のような記述はNGパターンとして覚えておく。</p>
            <ul className={shared.compact}>
              <li>
                「床にたい積した粉じんが燃焼して粉じん爆発が起こる」→ 床に積もった粉じんは<strong>普通は爆発ではなく火災</strong>どまり。爆発には<strong>粉じん雲</strong>が必要。
              </li>
              <li>
                「粉じん濃度が高いほど、無制限に爆発しやすくなる」→ 濃度が高すぎると<strong>酸素が不足して爆発しにくい</strong>。粉じん爆発は<strong>爆発範囲内</strong>の濃度で起こる。
              </li>
              <li>
                「粉じんの最小着火エネルギーは可燃性ガスより小さい」→ 実際は<strong>粉じんのほうが大きく、着火しにくい</strong>。ガス爆発との比較を問う選択肢は要注意。
              </li>
            </ul>
            <p className={shared.muted}>
              「粉じん雲 ＋ 範囲内の濃度 ＋ 発火源 ＋ 酸素」がそろったときに爆発、というイメージで選択肢をチェックすると、ひっかけに引っかかりにくくなる。
            </p>
          </div>

          <h3>粉じん爆発の特徴</h3>
          <div className={shared.bandCard}>
            <p>
              粉じんには<strong>爆発範囲（燃焼範囲）</strong>があり、爆発が可能な濃度の下限を<strong>爆発下限界</strong>、上限を<strong>爆発上限界</strong>といいます。
            </p>
            <p>
              <strong>最小着火エネルギー</strong>は、一般に<strong>粉じん &gt; 可燃性ガス</strong>となり、粉じんは<strong>着火しにくい</strong>という特性をもちます。
            </p>
            <p>
              一方で、粉じん爆発は<strong>一次爆発で舞い上がった粉じんが再着火</strong>して、<strong>二次・三次爆発へ連鎖</strong>しやすい現象です。
              このため、結果として<strong>被害規模が大きくなりやすい</strong>点に注意が必要です。
            </p>
            <p>
              可燃性粉じんと空気の混合気は、固体粒子を含むため、可燃性ガスと空気の混合気に比べて<strong>見かけの比重が大きくなりやすい</strong>という特徴があります。
            </p>
            <p>
              粉じん雲では、粒子間隔が<strong>近すぎると酸素不足</strong>で燃焼が進まず、逆に<strong>離れすぎると火炎が伝播しません</strong>。
              <strong>適度に分散している状態</strong>が爆発成立の条件となります。
            </p>
            <p>
              有機粉じんでは粒径が比較的大きく、<strong>不完全燃焼</strong>が起こりやすくなります。その結果、<strong>一酸化炭素（CO）が多量に発生</strong>し、
              <strong>CO中毒</strong>の危険性が高くなります。
            </p>
            <p>
              粉じんの<strong>粒子径が大きい</strong>ほど空気中に浮遊しにくく、爆発の危険性は相対的に小さくなります。
              さらに<strong>開放空間</strong>では粉じんが拡散しやすいため、爆発は起こりにくくなります。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={`${shared.styledTable} ${styles.conditionTable}`}>
              <caption className="sr-only">粉じん爆発が起こりやすい条件</caption>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>粉じん爆発が起こりやすい条件</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ① <strong>粒子が細かい</strong>こと（比表面積が大きく、反応が速い／空気中に浮遊しやすい）
                  </th>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ② <strong>粉じんと空気が均一に混合している</strong>こと（よく撹拌・乱流で分散している）
                  </th>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ③ <strong>空間中の粉じん濃度が爆発範囲内にある</strong>こと（濃すぎても薄すぎても起こらない）
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            ※ <strong>静電気</strong>は通常、粒子や物体の表面に帯電します。塊を微粉化すると表面積が増えるため、粉体は
            <strong>単位質量あたりの帯電量が増えやすく</strong>なり、その結果、放電が<strong>発火源</strong>となる危険が高まります。
          </p>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>粉じん爆発が起こりやすいのは、<strong>細かい・よく混ざる・適度な濃度</strong>の３条件がそろったときです。</li>
              <li>粉じんは<strong>着火しにくいが、いったん爆発すると二次・三次爆発で被害が拡大しやすい</strong>点をセットで覚えておきましょう。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「<strong>粒子が大きいほど危険</strong>」という選択肢は誤りです。爆発しやすいのは<strong>粒子が細かい</strong>ときです。</li>
              <li>「<strong>粉じん濃度が高いほど危険</strong>」という表現も要注意です。爆発しやすいのは<strong>爆発範囲内（適度な濃度）</strong>のときだけです。</li>
              <li>静電気は<strong>帯電量が増えやすい粉体</strong>ほど危険です。「粉じんは静電気とは無関係」とする選択肢は誤りです。</li>
            </ul>
          </div>
        </section>

        {/* 2. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <DustExplosionsQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}