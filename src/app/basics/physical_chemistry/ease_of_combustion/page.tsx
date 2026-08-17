// src/app/basics/physical_chemistry/ease_of_combustion/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import EaseOfCombustionQuiz from './EaseOfCombustionQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 3節：燃焼の難易',
  description:
    '危険物乙4 第2章3節。燃えやすさを決める要素、燃焼の抑制（負触媒作用）、燃焼熱、最小着火エネルギー、数値が小さい／大きいほど危険な因子の一覧を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/ease_of_combustion',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 3節：燃焼の難易',
    description:
      '危険物乙4 第2章3節。燃えやすさを決める要素、燃焼の抑制（負触媒作用）、燃焼熱、最小着火エネルギー、数値が小さい／大きいほど危険な因子の一覧を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/ease_of_combustion',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 3節：燃焼の難易',
    description:
      '危険物乙4 第2章3節。燃えやすさを決める要素、燃焼の抑制（負触媒作用）、燃焼熱、最小着火エネルギー、数値が小さい／大きいほど危険な因子の一覧を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function EaseOfCombustionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '3節：燃焼の難易' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 燃えやすい要素 */}
        <section className={shared.section}>
          <h2>燃えやすい要素</h2>

          <div className={shared.bandCard}>
            <p>
              可燃物がどれくらい燃えやすいかは、物質そのものの性質と周囲の条件によって決まります。
              主な要素は次のとおりです。
            </p>

            <ol className={shared.compact}>
              <li>
                <strong>酸化されやすさ</strong><br />
                酸化反応を起こしやすい物質（例：水素や炭素など）は燃焼しやすくなります。
                空気と接触する<strong>表面積が大きい</strong>ほど酸素と反応しやすく、燃焼が促進されます。
              </li>
              <li>
                <strong>発熱量の大きさ</strong><br />
                発熱量が大きい物質は、燃焼時に多くの熱エネルギーを放出しやすくなります。
                発熱量とは<strong>１モルの物質が完全燃焼したときに発生する熱量</strong>で、
                例えば C（黒鉛） + O₂ → CO₂ では約395 kJ になります。
              </li>
              <li>
                <strong>蒸発・熱分解しやすさ</strong><br />
                加熱によって熱分解や蒸発を起こし、可燃性の蒸気を容易に発生させる物質は着火しやすくなります。
                液体ガソリンや固体硫黄は、このように<strong>蒸気を出して燃える代表例</strong>です。
              </li>
              <li>
                <strong>熱伝導率の低さ</strong><br />
                熱伝導率が低い物質は熱を逃しにくく、その場に熱がたまりやすいため燃焼しやすくなります。
                熱伝導率とは物質が熱を伝える度合いを示す値で、<strong>金属は高く、液体や気体は低い</strong>性質があります。
              </li>
              <li>
                <strong>沸点の低さ・乾燥の程度</strong><br />
                沸点が低い物質は常温でも容易に気化し、可燃性蒸気を発生させるため着火しやすくなります。
                また、含水量が少なく乾燥した物質は、水分の蒸発に必要な熱が少ない分だけ温度が速く上昇し、
                燃焼が促進されます。
              </li>
              <li>
                <strong>周囲温度の高さ</strong><br />
                <strong>周囲温度が高い</strong>環境では化学反応速度が速くなるため、
                酸化反応が進みやすく燃焼が起こりやすくなります。
              </li>
              <li>
                <strong>酸素濃度</strong><br />
                酸素濃度が高いほど酸化反応が促進され、燃焼は激しくなります。
                逆に酸素濃度が<strong>約14〜15％以下</strong>になると、
                多くの可燃性物質は燃焼を維持できなくなります。
              </li>
              <li>
                <strong>熱容量・比熱</strong><br />
                熱容量は物質全体を1 K上昇させるのに必要な熱量で、
                比熱は物質1 gを1 K上昇させるのに必要な熱量を示します。
                いずれも<strong>値が小さいほど少ない熱で温度が上がる</strong>ため、燃えやすくなります。
              </li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>「<strong>酸素濃度14〜15％</strong>付近で多くの可燃物が燃焼を維持できなくなる」値は要暗記。</li>
              <li>「<strong>表面積が大きい・乾燥している・周囲温度が高い</strong>」と燃えやすくなる、という方向性を押さえておく。</li>
              <li>熱容量・比熱は「<strong>小さいほど少ない熱で温度が上がる＝燃えやすい</strong>」とワンセットで覚える。</li>
            </ul>
          </div>

          <h3>燃えやすい要素</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">燃えやすい要素のまとめ</caption>
              <colgroup>
                <col className={styles.colItem} />
                <col className={styles.colExplanation} />
                <col className={styles.colPoint} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">説明</th>
                  <th scope="col">ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酸化されやすさ</th>
                  <td>水素や炭素など、酸化反応を起こしやすい物質</td>
                  <td><strong>酸化されやすい物質ほど燃焼しやすい</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>接触面積</th>
                  <td>空気と接する表面積の大きさ</td>
                  <td><strong>表面積が大きいほど酸素と反応しやすい</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>発熱量</th>
                  <td>1モルの物質が完全燃焼したときに発生する熱量（例：C + O₂ → CO₂ + 395 kJ）</td>
                  <td><strong>大きいほど放出される熱エネルギーが大きい</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>可燃性蒸気の発生</th>
                  <td>熱分解や蒸発により可燃性蒸気を出す性質（ガソリン・硫黄など）</td>
                  <td><strong>蒸気を発生しやすいほど着火しやすい</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>熱伝導率</th>
                  <td>熱をどの程度伝えやすいかを示す性質（液体・気体は低く、金属は高い）</td>
                  <td><strong>低いほど熱がその場にたまりやすい</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>沸点</th>
                  <td>常温で気化しやすいかどうか</td>
                  <td><strong>低いほど蒸発燃焼しやすい</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>含水量</th>
                  <td>物質に含まれる水分の多さ（乾燥しているほど水分が少ない）</td>
                  <td><strong>水分が少ないほど温度上昇が早く燃えやすい</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>周囲温度</th>
                  <td>環境温度が高いほど化学反応速度が速くなる</td>
                  <td><strong>高温ほど燃焼が起こりやすい</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酸素濃度</th>
                  <td>空気中の酸素の割合（通常は約21％。高いほど燃焼は激しく、約14〜15％以下で多くの可燃性物質は燃焼を維持できない）</td>
                  <td><strong>濃度が高いほど燃焼が激しくなる</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>熱容量・比熱</th>
                  <td>物質全体または1gの温度を1K上昇させるのに必要な熱量</td>
                  <td><strong>小さいほど少ない熱で温度が上がり、燃えやすい</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li><strong>熱伝導率</strong>は「低いほど燃えやすい」が正解。選択肢で「高いほど燃えやすい」と書いてあったらバツ。</li>
              <li><strong>含水量</strong>は「水分が少ない＝燃えやすい」。「湿っているほど燃えやすい」は完全に逆向き。</li>
              <li><strong>酸素濃度</strong>は「高いほど燃焼が激しい」＋「約14〜15％以下で多くの可燃物は燃焼を維持できない」という数字セットで狙われやすい。</li>
              <li><strong>熱容量・比熱 vs 発熱量</strong>も要注意。「発熱量：大きいほど燃えやすい」「熱容量・比熱：小さいほど燃えやすい」と、方向が逆なので混同しやすい。</li>
            </ul>
          </div>
        </section>

        {/* 2. 燃焼の難易に影響しない要素 */}
        <section className={shared.section}>
          <h2>燃焼の難易に影響しない要素</h2>
          <div className={shared.bandCard}>
            <p>
              燃焼のしやすさには、ほとんど関係しない性質もあります。代表例が<strong>体膨張率</strong>です。
            </p>
            <p>
              体膨張率は、温度を1℃上げたときの体積増加の割合を示す指標で、物質の膨張挙動を表しますが、
              燃えやすさそのものには直接関係しません。
            </p>
          </div>
        </section>

        {/* 3. 燃焼の抑制 */}
        <section className={shared.section}>
          <h2>燃焼の抑制</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>燃焼の抑制</strong>とは、可燃物の反応性を低下させて燃焼反応の連鎖を途中で断ち、
              燃焼を進みにくくする作用を指します。このメカニズムは<strong>負触媒作用</strong>とも呼ばれます。
            </p>
            <p>
              ※「不活性」とは、化学反応を起こしにくい性質を表し、化学的に安定または反応速度が遅い状態をいいます。
            </p>
            <p>
              燃焼抑制に利用される代表的な元素に<strong>ハロゲン</strong>があります。
              ハロゲンとはフッ素（F）、塩素（Cl）、臭素（Br）、ヨウ素（I）などを指し、
              いずれも電子を受け取る性質が強く、酸化剤として働くことで燃焼反応の連鎖を断ち切るのに利用されます。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント!</h4>
            <ul className={shared.compact}>
              <li>「<strong>体膨張率</strong>」は<strong>燃焼の難易には直接関係しない性質</strong>として押さえておく。</li>
              <li><strong>燃焼の抑制</strong>＝可燃物の反応性を下げて燃焼反応の連鎖を断つ働きであり、名称は<strong>負触媒作用</strong>。</li>
              <li>燃焼抑制に利用される代表的な元素は<strong>ハロゲン（F, Cl, Br, I）</strong>。「ハロゲン一族が抑制役」とセットで覚える。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「体膨張率が大きいほど燃えやすい」など、体膨張率を燃焼の難易と結びつける選択肢は<strong>×</strong>。</li>
              <li>燃焼の抑制を単に「触媒作用」としている選択肢も<strong>×</strong>。正しくは<strong>負触媒作用</strong>である。</li>
            </ul>
          </div>
        </section>

        {/* 4. 燃焼熱 */}
        <section className={shared.section}>
          <h2>燃焼熱</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>燃焼熱</strong>とは、物質が完全燃焼したときに放出される熱量のことで、
              一定の質量あたりまたは一定の物質量あたりで表します。すべての燃焼反応は発熱反応です。
            </p>
            <p>
              物理分野では「1gあたり」、化学分野では「1モルあたり」の熱量で示すのが一般的です。
            </p>
          </div>
        </section>

        {/* 5. 最小着火エネルギー */}
        <section className={shared.section}>
          <h2>最小着火エネルギー</h2>

          <div className={shared.bandCard}>
            <p>
              可燃性ガスと空気の混合気に火花放電を与えたとき、放電エネルギーがある閾値を超えると着火・爆発が起こります。
              この閾値を<strong>最小着火エネルギー</strong>といいます。
            </p>
            <p>
              着火に必要なエネルギーは、可燃性物質の濃度や粒度、形状、温度などの条件によって変化します。
              最も着火しやすい混合比（下限爆発濃度付近）でのエネルギー量を最小着火エネルギーとし、
              <strong>この値が小さいほど危険性が高くなります。</strong>
            </p>
            <p>
              ※<strong>閾値（しきい値）</strong>とは、反応を開始させるために必要な最小限のエネルギーや強度のことです。
            </p>
            <p>
              これらの物性値のうち、「値が小さいほど危険」「値が大きいほど危険」となるものは、下の一覧でまとめて整理しておきましょう。
            </p>
          </div>

          {/* 6. 危険因子のまとめ */}
          <div className={styles.dangerFactorWrapper}>
            <div className={`${shared.callout} ${shared.calloutList}`}>
              <h3>数値が小さいほど危険な因子</h3>
              <ul className={shared.compact}>
                <li>発火点</li>
                <li>引火点</li>
                <li>沸点</li>
                <li>比熱</li>
                <li>熱容量</li>
                <li>燃焼範囲の下限界</li>
                <li>最小着火エネルギー</li>
                <li>電気伝導度（電気伝導率・動電率ともいう）</li>
              </ul>
            </div>

            <div className={`${shared.callout} ${shared.calloutList}`}>
              <h3>数値が大きいほど危険な因子</h3>
              <ul className={shared.compact}>
                <li>燃焼範囲（広い）</li>
                <li>燃焼速度（速い）</li>
                <li>燃焼熱</li>
                <li>蒸気圧</li>
                <li>火炎伝播速度（速い）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <EaseOfCombustionQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}