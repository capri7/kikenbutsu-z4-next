// src/app/basics/physical_chemistry/spontaneous_combustion/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SpontaneousCombustionQuiz from './SpontaneousCombustionQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 6節：自然発火',
  description:
    '危険物乙4 第2章6節。自然発火の仕組み、発熱の機構（酸化・分解・発酵・吸着）ごとの代表物質、乾性油とヨウ素価、可燃性粉体の自然発火の要因を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/spontaneous_combustion',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 6節：自然発火',
    description:
      '危険物乙4 第2章6節。自然発火の仕組み、発熱の機構（酸化・分解・発酵・吸着）ごとの代表物質、乾性油とヨウ素価、可燃性粉体の自然発火の要因を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/spontaneous_combustion',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 6節：自然発火',
    description:
      '危険物乙4 第2章6節。自然発火の仕組み、発熱の機構（酸化・分解・発酵・吸着）ごとの代表物質、乾性油とヨウ素価、可燃性粉体の自然発火の要因を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SpontaneousCombustionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '6節：自然発火' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 熱の発生機構 */}
        <section className={shared.section}>
          <h2>熱の発生機構</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>自然発火</strong>とは、マッチや火花などの<strong>点火源がなく</strong>、また
              <strong>外部から加熱されていない</strong>のに、物質が常温の空気中で自分自身の反応によって
              <strong>発熱し続ける</strong>現象です。この熱が周囲へ逃げずに<strong>長時間たまり続ける</strong>ことで、
              やがて物質の<strong>発火点</strong>に達し、自然に燃焼が始まります。
            </p>
            <p>
              このような熱は、主に<strong>酸化による発熱</strong>、<strong>化学分解による発熱</strong>、
              <strong>発酵による発熱</strong>、そして<strong>吸着による発熱</strong>などによって生じます。
              それぞれの発熱の仕組みに対応する代表的な発熱性物質を整理すると、次の表のようになります。
            </p>
          </div>

          <h3>発熱する物質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">発熱の機構ごとに代表的な発熱性物質をまとめた表</caption>
              <colgroup>
                <col className={styles.colHeatGeneration} />
                <col className={styles.colMaterial} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>発熱の機構</th>
                  <th scope="col">発熱する物質の例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>酸化</strong></th>
                  <td>
                    <ul className={shared.compact}>
                      <li>乾燥油（アマニ油、キリ油等）</li>
                      <li>原綿</li>
                      <li>石炭</li>
                      <li>ゴム粉</li>
                      <li>鉄粉など</li>
                    </ul>
                    <p>
                      ※ カリウム・ナトリウムなどの第3類危険物は、リチウムを除き<strong>ほとんどが自然発火性</strong>をもち、
                      空気中で酸化して自然発火します。
                      アルキルアルミニウムは<strong>-50℃以下</strong>でも空気と激しく反応して自然発火します。
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>分解</strong></th>
                  <td>
                    <ul className={shared.compact}>
                      <li><strong>セルロイド</strong></li>
                      <li><strong>ニトロセルロース（第5類危険物）など</strong></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>発酵</strong></th>
                  <td>
                    <ul className={shared.compact}>
                      <li>堆肥</li>
                      <li>ゴミ</li>
                      <li>ほし草</li>
                      <li>ほしわらなど</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>吸着</strong></th>
                  <td>
                    <ul className={shared.compact}>
                      <li>活性炭</li>
                      <li>木炭粉末（脱臭剤など）</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>その他</strong></th>
                  <td>エチレンがポリエチレンに重合するときの<strong>重合反応熱</strong>など</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p>自然発火では、<strong>「発熱の機構」と「代表物質のセット」</strong>がよく問われます。</p>
            <ul className={shared.compact}>
              <li><strong>酸化：</strong>乾燥油・石炭・ゴム粉・鉄粉、第3類危険物（金属Na・Kなど）</li>
              <li><strong>分解：</strong>セルロイド、ニトロセルロース（第5類危険物）</li>
              <li><strong>発酵：</strong>堆肥、ゴミ、ほし草・ほしわら</li>
              <li><strong>吸着：</strong>活性炭、木炭粉末（脱臭剤）</li>
            </ul>
            <p>
              特に<strong>セルロイド＋ニトロセルロース</strong>と、<strong>乾燥油・堆肥・活性炭</strong>は頻出コンビとして押さえておきましょう。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>乾燥油</strong>は「第4類の動植物油類」ですが、<strong>酸化による自然発火</strong>の代表例です。
                「ただの油」として見落とさないように。
              </li>
              <li>
                <strong>第3類危険物（金属Na・Kなど）</strong>は「水と激しく反応する」イメージが強いですが、
                <strong>空気中で酸化して自然発火</strong>する点も問われます。
              </li>
              <li>
                <strong>活性炭・木炭粉末</strong>は「脱臭剤だから安全」と思いがちですが、
                多量に吸着すると<strong>吸着熱で自然発火</strong>することがあります。
              </li>
              <li>
                選択肢で<strong>セルロイドやニトロセルロースを「発酵」や「吸着」グループに紛れ込ませる</strong>ひっかけに注意しましょう。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 乾性油 */}
        <section className={shared.section}>
          <h2>乾性油</h2>

          <div className={shared.bandCard}>
            <p>
              動植物油類（第4類危険物）は空気中で徐々に酸化され、その<strong>酸化熱がたまりすぎる</strong>と自然発火を起こします。
              なかでも<strong>よく乾く油（乾性油）ほど酸化が進みやすく</strong>、時間とともに固まっていく性質があります。
            </p>
            <p>
              乾性油は分子内に<strong>不飽和結合（C＝C結合）が多い</strong>のが特徴です。
              この二重結合の部分に酸素が入り込むと<strong>酸化反応が進み、熱が発生</strong>します。
              油脂100gが吸収する<strong>ヨウ素の量（ヨウ素価）</strong>で不飽和度を表し、
              値が大きいほど二重結合が多い＝酸化しやすい油だという意味になります。
            </p>
            <p>
              ヨウ素価で見ると、<strong>100以下が不乾性油、100〜130が半乾性油、130以上が乾性油</strong>に分類されます。
              乾性油は水（比重1）より軽く、比重はおよそ<strong>0.9</strong>、水には溶けにくく、不飽和脂肪酸を多く含むという特徴があります。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p>
              乾性油の分類は<strong>ヨウ素価の境目</strong>がそのまま狙われることが多い。
              数値は<strong>100 / 130</strong>で区切られ、<strong>100以下＝不乾性油、100〜130＝半乾性油、130以上＝乾性油</strong>の3区分をセットで押さえておく。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>
              乾性油は<strong>第4類危険物「動植物油類」</strong>に属し、空気中で酸化熱がたまりやすい<strong>自然発火の代表例</strong>。
              選択肢では「第3類の自然発火性物質」や「単なる可燃性液体」と入れ替えてくることが多いので、
              <strong>「動植物油類 ＋ 自然発火」</strong>の組み合わせで覚えておく。
            </p>
          </div>
        </section>

        {/* 3. 可燃性粉体のたい積物 */}
        <section className={shared.section}>
          <h2>可燃性粉体のたい積物</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>粉体</strong>とは、非常に細かい固体粒子が集まっているものをいいます。
              可燃性粉体の例としては、<strong>セルロース</strong>、コルク、粉ミルク、砂糖、エポキシ樹脂、ポリエチレン、
              ポリプロピレン、活性炭、木炭、アルミニウム、マグネシウム、鉄 などがあります。
            </p>
            <p>
              これらの粉体が一か所に<strong>たい積</strong>すると、粒子どうしのすき間に空気が入り込み、
              表面積が大きくなるため、酸化反応が進みやすくなります。
              とくに<strong>空気中の湿度が高い場合</strong>や、粉体の<strong>含水率が大きい場合</strong>には、
              発熱と蓄熱が進みやすくなり、自然発火に至る危険性が高まります。
            </p>
            <p>
              このように「細かい粉が山になっている」「湿った状態になっている」条件は、可燃性粉体の自然発火を引き起こす重要な要因です。
            </p>
          </div>

          <h3>自然発火の要因</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">自然発火の要因</caption>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>事由</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={`${shared.stickyCol} ${styles.reasonRow}`}>
                    ① 空気中の<strong>湿度</strong>が高く、<strong>気温</strong>が高いとき
                  </th>
                </tr>
                <tr>
                  <th scope="row" className={`${shared.stickyCol} ${styles.reasonRow}`}>
                    ② 気温が高く、<strong>たい積物内の温度</strong>が高いとき
                  </th>
                </tr>
                <tr>
                  <th scope="row" className={`${shared.stickyCol} ${styles.reasonRow}`}>
                    ③ 物質の表面積が広く、酸素との<strong>接触面積</strong>が大きいとき
                  </th>
                </tr>
                <tr>
                  <th scope="row" className={`${shared.stickyCol} ${styles.reasonRow}`}>
                    ④ 物質の熱伝導率が小さく、<strong>保温効果</strong>が高いとき
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p>
              自然発火が起こりやすい条件は、<strong>「高温」「高湿」「広い表面積」「熱が逃げにくい」</strong>の４つです。
            </p>
            <ul className={shared.compact}>
              <li>空気中の<strong>湿度が高く</strong>、気温も<strong>高い</strong>。</li>
              <li>たい積物の内部温度が<strong>高く</strong>、熱がこもりやすい。</li>
              <li>粉体などで<strong>表面積・接触面積が大きい</strong>。</li>
              <li>熱伝導率が<strong>小さく</strong>、周囲へ熱が逃げにくい（保温効果が高い）。</li>
            </ul>
            <p>この４条件はセットで押さえておくと、本試験でも迷いにくくなります。</p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>選択肢では、上の４条件と<strong>逆の状態</strong>が紛れ込んでいることがあります。</p>
            <ul className={shared.compact}>
              <li>「空気中の<strong>湿度が低い</strong>」</li>
              <li>「たい積物の内部温度が<strong>低い</strong>」</li>
              <li>「物質の<strong>表面積が小さい</strong>」</li>
              <li>「熱伝導率が<strong>大きく</strong>、熱が逃げやすい」</li>
            </ul>
            <p>
              これらは<strong>自然発火の要因としては不適切（ひっかけ）</strong>なので、
              「高温・高湿・広い・逃げない」の４キーワードと照らして判断しましょう。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutNg}`}>
            <h3>おっとNG！</h3>
            <p>
              <strong>「乾燥していて、熱がよく逃げるほど自然発火しやすい」</strong>といった文章は完全に誤りです。
              自然発火は、<strong>湿っていて・熱がこもる環境で危険度アップ</strong>と覚えておきましょう。
            </p>
          </div>
        </section>

        {/* 4. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <SpontaneousCombustionQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}