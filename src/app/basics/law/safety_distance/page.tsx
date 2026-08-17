import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SafetyDistanceQuiz from './SafetyDistanceQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '保安距離とは？建築物ごとの距離の基準と必要な施設【乙4対策】',
  description: '保安距離が必要な施設（製造所・屋内貯蔵所・屋外タンク貯蔵所など）と建築物ごとの距離（住居10m・高圧ガス20m・学校30m・文化財50m）。乙4対策。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/safety_distance',
  },
  robots: 'index,follow',
  openGraph: {
    title: '保安距離とは？建築物ごとの距離の基準と必要な施設【乙4対策】',
    description: '保安距離が必要な施設（製造所・屋内貯蔵所・屋外タンク貯蔵所など）と建築物ごとの距離（住居10m・高圧ガス20m・学校30m・文化財50m）。乙4対策。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/safety_distance',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '保安距離とは？建築物ごとの距離の基準と必要な施設【乙4対策】',
    description: '保安距離が必要な施設（製造所・屋内貯蔵所・屋外タンク貯蔵所など）と建築物ごとの距離（住居10m・高圧ガス20m・学校30m・文化財50m）。乙4対策。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SafetyDistancePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '20節：保安距離' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 建築物等からの保安距離 */}
        <section className={shared.section}>
          <h2>建築物等からの保安距離</h2>
          <div className={shared.bandCard}>
            <p>
              製造所等は、下表に掲げる<strong>建築物等</strong>に対して、製造所等の<strong>外壁</strong>（またはこれに相当する工作物の外側）から、各項目ごとに定められた距離（<strong>保安距離</strong>）を<strong>確保しなければならない</strong>。ここでいう距離は、製造所等と<strong>当該建築物等</strong>との間に防火上有効な塀が設けられていないものとして定める（<strong>特例基準</strong>が適用される場合を除く）。
            </p>
            <p>
              <strong>保安距離</strong>とは、製造所等で火災・爆発などの災害が発生したときに、周囲の建築物等への影響を抑え、<strong>延焼防止</strong>や<strong>避難の確保</strong>を図るために必要とされる距離のことである。
            </p>
          </div>
        </section>

        {/* 2. 建築物等と保安距離 */}
        <section className={shared.section}>
          <h2>建築物等と保安距離</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">建築物等と保安距離</caption>
              <colgroup>
                <col className={styles.colBuilding} />
                <col className={styles.colSecurityDistance} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>建築物等</th>
                  <th scope="col">保安距離</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <strong>特別高圧架空電線</strong>
                    <br />
                    （7,000V超〜35,000V以下）
                  </th>
                  <td>
                    <strong>3m以上</strong>
                    <br />
                    （水平距離）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <strong>特別高圧架空電線</strong>
                    <br />
                    （35,000V超）
                  </th>
                  <td>
                    <strong>5m以上</strong>
                    <br />
                    （水平距離）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    製造所等の敷地外にある
                    <br />
                    住居
                  </th>
                  <td><strong>10m以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <strong>
                      高圧ガス・液化石油ガスの
                      <br />
                      施設
                    </strong>
                  </th>
                  <td><strong>20m以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <strong>学校※・病院・劇場・公会堂</strong>
                    <br />
                    など多人数収容施設
                  </th>
                  <td><strong>30m以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <strong>
                      重要文化財・重要有形
                      <br />
                      民俗文化財
                    </strong>
                    <br />
                    などの<strong>建造物</strong>
                  </th>
                  <td><strong>50m以上</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>特別高圧架空電線</strong>は、<strong>7,000V超〜35,000V以下：3m以上</strong>、<strong>35,000V超：5m以上</strong>。いずれも<strong>水平方向の距離</strong>であることに注意。
              </li>
              <li>
                建築物ごとの保安距離は、<strong>住居：10m以上</strong>、<strong>高圧ガス・液化石油ガス施設：20m以上</strong>、<strong>学校・病院・劇場・公会堂など：30m以上</strong>、<strong>重要文化財等の建造物：50m以上</strong>と段階的に大きくなる。
              </li>
              <li>
                距離の並びは<strong>10 → 20 → 30 → 50</strong> の「だんだん遠くなる」流れでまとめて覚えると得点源にしやすい。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                表の<strong>「学校※」</strong>には、<strong>幼稚園（保育所を含む）から高等学校まで</strong>が含まれる。小中高校だけでなく、幼稚園・保育所も対象である点を落とさない。
              </li>
              <li>
                <strong>社会福祉施設</strong>（児童福祉施設・老人福祉施設など）も、学校と同じく<strong>30m以上</strong>の保安距離が必要となる。
              </li>
              <li>
                重要文化財などは<strong>建造物</strong>が対象。「収蔵品そのもの」や「展示物だけ」をイメージさせる選択肢は誤り。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 保安距離が必要な製造所等 */}
        <section className={shared.section}>
          <h2>保安距離が必要な製造所等</h2>
          <div className={shared.bandCard}>
            <p>
              保安距離の確保が必要となる製造所等は、次のとおりである。したがって、<strong>屋外タンク貯蔵所以外のタンク貯蔵所</strong>、<strong>給油取扱所</strong>、<strong>販売取扱所</strong>は、原則として保安距離を必要としない。
            </p>

            <h3>保安距離が必要な製造所等の一覧</h3>
            <ol className={shared.compact}>
              <li><strong>製造所</strong></li>
              <li>屋内貯蔵所</li>
              <li>屋外貯蔵所</li>
              <li><strong>屋外タンク貯蔵所</strong></li>
              <li>一般取扱所</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>給油取扱所・販売取扱所</strong>は市街地に多いが、取り扱い量が比較的小さいため、原則<strong>保安距離は不要</strong>。
              </li>
              <li>
                <strong>屋外タンク貯蔵所以外のタンク貯蔵所</strong>（屋内タンク・地下タンクなど）も、原則<strong>保安距離は不要</strong>。
              </li>
              <li>
                <strong>屋内貯蔵所</strong>は原則「平家建の独立専用建築物」。ただし条件により「平家建以外」や<strong>多用途建築物内の一部</strong>も認められる。とくに<strong>多用途建築物内の屋内貯蔵所は保安距離不要</strong>という点を押さえる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>タンク貯蔵所＝すべて保安距離が必要</strong>」は誤り。保安距離が必要なのは<strong>屋外タンク貯蔵所だけ</strong>。
              </li>
              <li>
                「<strong>給油取扱所・販売取扱所</strong>」は危険そうに見えるが、原則として<strong>保安距離は不要</strong>。
              </li>
              <li>
                「<strong>多用途建築物内にある屋内貯蔵所</strong>」は<strong>保安距離を要しない</strong>。原則の「平家建の独立専用建築物」と混同しない。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <SafetyDistanceQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}