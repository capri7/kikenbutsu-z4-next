// src/app/basics/physical_chemistry/ignition_and_flash_point/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import IgnitionAndFlashPointQuiz from './IgnitionAndFlashPointQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 4節：引火と発火',
  description:
    '危険物乙4 第2章4節。引火点・燃焼点・発火点の違い、着火源と発火源、防爆構造とすべき電気設備の範囲を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/ignition_and_flash_point',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 4節：引火と発火',
    description:
      '危険物乙4 第2章4節。引火点・燃焼点・発火点の違い、着火源と発火源、防爆構造とすべき電気設備の範囲を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/ignition_and_flash_point',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 4節：引火と発火',
    description:
      '危険物乙4 第2章4節。引火点・燃焼点・発火点の違い、着火源と発火源、防爆構造とすべき電気設備の範囲を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function IgnitionAndFlashPointPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '4節：引火と発火' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 引火点と発火点 */}
        <section className={shared.section}>
          <h2>引火点と発火点</h2>

          <div className={shared.bandCard}>
            <p>
              危険物の温度管理でまず押さえておきたい指標が<strong>引火点</strong>です。
              引火点とは、可燃性液体が点火源によって燃え始める最低の液温を表し、試験では次の２つの定義で問われます。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>引火点の定義</h3>
            <ol className={shared.compact}>
              <li>
                空気中で点火したとき、可燃性液体が<strong>燃え出すのに必要な濃度の蒸気</strong>を
                液面上に発生する<strong>最低の液温</strong>。
              </li>
              <li>可燃性液体が燃焼範囲の<strong>下限値の濃度</strong>の蒸気を発生するときの液体の温度。</li>
            </ol>
          </div>

          <div className={shared.bandCard}>
            <p>液温が引火点を超えると、点火源により可燃性蒸気が一時的に発火しやすくなります。</p>
            <p>
              <strong>燃焼点</strong>は、一度着火した蒸気が<strong>自己持続的に燃焼を継続</strong>するために必要な温度であり、
              通常は<strong>引火点より数℃高い</strong>値です。引火点では燃焼を維持できません。
            </p>
            <p>
              可燃性液体は、その液温に対応した蒸気圧を持ち、液面付近には一定の蒸気濃度が存在します。
              液温が高いほど蒸気発生量は増大し、低いほど減少します。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <p>
              同じ可燃性液体なら、<strong>引火点が低いほど危険性が高い</strong>。
              さらに<strong>「引火点＝燃え出す最低温度」「燃焼点＝燃え続ける最低温度」</strong>のセットで覚えておく。
            </p>
          </div>
        </section>

        {/* 2. 発火点 */}
        <section className={shared.section}>
          <h2>発火点</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>発火点</strong>とは、可燃性物質を空気中で加熱した際に、外部から火源を与えなくても
              <strong>自己発火</strong>して燃焼を開始する最低温度をいいます。
            </p>
            <p>
              引火点が「点火源を与えれば燃え出す温度」であるのに対し、発火点は
              <strong>点火源がなくても勝手に燃え始める温度</strong>であり、一般に<strong>引火点よりかなり高い温度</strong>になります。
            </p>
            <p>
              例：ガソリンでは発火点が約300&nbsp;℃（引火点は−40&nbsp;℃以下）、灯油では発火点が約220&nbsp;℃（引火点は40&nbsp;℃以上）です。
              同じ可燃性液体なら、<strong>発火点が低いほど危険性が高い</strong>と覚えておきましょう。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>引火点と発火点を入れ替えた記述</strong>が定番のひっかけ。「発火点の方が低い」と書かれていたら要注意。
              </li>
              <li>
                <strong>点火源の有無</strong>もよく逆にされる。「引火点は点火源が必要」「発火点は点火源なしで自己発火」のペアでセット暗記しておこう。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 着火源（点火源）・発火源となるもの */}
        <section className={shared.section}>
          <h2>着火源（点火源）・発火源となるもの</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>着火源（点火源）</strong>とは、物質に発火に必要なエネルギーを与え、直接火をつける原因となるものです。
            </p>
            <p>
              <strong>発火源</strong>とは、実際に火災を引き起こした火種や現象そのものを指し、火災原因の調査などで用いられる用語です。
            </p>
            <p>
              試験では「エネルギーを与えて火をつけるもの＝着火源」「火災の原因となったもの＝発火源」の区別をおさえておきます。
            </p>
            <p>代表的な着火源・発火源の例：</p>
            <ul className={shared.compact}>
              <li>火炎</li>
              <li>機械的な摩擦による摩擦熱・火花</li>
              <li>衝撃による熱・火花</li>
              <li>高温金属（表面が高温になった金属）</li>
              <li>高温ガス</li>
              <li>電気火花</li>
              <li>酸化熱・分解熱・発酵熱・重合熱</li>
              <li>放射熱</li>
              <li>レーザー光線・赤外線・紫外線などの光・電磁波</li>
              <li>急激な圧縮圧力・衝撃波</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <p>
              代表的な着火源は、<strong>火炎・電気火花・機械的摩擦・高温物体</strong>あたりが頻出です。
              「エネルギーを与えて火をつけるもの」をまとめて押さえておきましょう。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>
              <strong>引火点・発火点・燃焼範囲</strong>などの物性値は、着火源そのものではありません。
              選択肢に「発火点」「引火点」が混ざっていても、これは<strong>温度条件</strong>であって「火をつける原因」ではない点に注意します。
            </p>
          </div>
        </section>

        {/* 4. 防爆構造 */}
        <section className={shared.section}>
          <h2>防爆構造</h2>

          <div className={shared.bandCard}>
            <p>
              可燃性蒸気や粉じんが空気と混合して<strong>爆発下限界以上の可燃性雰囲気</strong>となる場所や、
              可燃性危険物・腐食性ガスが存在する特殊な環境に設置する電気機器は、<strong>防爆構造</strong>としなければなりません。
            </p>
            <p>
              これは、通常の電気機器から発生する火花や熱が発火源となり、可燃混合気に引火して爆発事故を起こす危険があるためです。
            </p>
            <p>防爆構造とすべき電気設備の範囲は、次のとおりです。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>電気設備を防爆構造としなければならない範囲</h3>
            <ol className={shared.compact}>
              <li>引火点が40℃未満の危険物を貯蔵し、または取り扱う場合。</li>
              <li>引火点が40℃以上の可燃性液体を、<strong>引火点以上の温度</strong>で貯蔵し、または取り扱う場合。</li>
              <li>可燃性微粉じんが著しく浮遊するおそれのある場合。</li>
            </ol>
          </div>

          <h3>防爆構造の電気機器の例</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">防爆構造の電気機器の例</caption>
              <colgroup>
                <col className={styles.colEquipment} />
                <col className={styles.colExplanation} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>機器の区分</th>
                  <th scope="col">説明の例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>回転機</th>
                  <td>電動機（モータ）など</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>変圧器類</th>
                  <td>変圧器・変成器など</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>開閉器及び<br />制御器類</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>開閉器（スイッチ）・遮断機</li>
                      <li>抵抗器・継電器<strong>（リレー）</strong></li>
                      <li>制御器・始動器・振動機器</li>
                      <li>差込接続機・分電盤・制御盤</li>
                      <li>操作盤・ヒューズ など</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>計測器類</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>測温抵抗体・熱電対・伝送機類</li>
                      <li>流量計・レベル計・スイッチ類</li>
                      <li>分析計・諸量計・ガス検知器</li>
                      <li>変換器類・指示計・信号</li>
                      <li>警報装置・通信装置など</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>照明器具</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>定置灯または移動灯（白熱灯・蛍光灯・水銀灯・ナトリウム灯など）</li>
                      <li>表示灯類（LEDなど）</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>電気配線</th>
                  <td>防爆電気配線など</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <p>
              防爆構造とすべき電気機器は、選択肢で「どれが防爆構造とすべき機器か」「防爆構造の例はどれか」としてまとめて問われやすいところです。
            </p>
            <ol className={shared.compact}>
              <li>回転機（電動機）</li>
              <li>変圧器類</li>
              <li>開閉器・制御器類</li>
              <li>計測器類</li>
              <li>照明器具</li>
              <li>電気配線</li>
            </ol>
            <p>この６グループを「防爆構造セット」として丸ごと覚えておくと安心です。</p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>選択肢では、防爆構造と<strong>関係の薄い設備</strong>がさりげなく混ぜられることがあります。</p>
            <ul className={shared.compact}>
              <li>ボイラー本体や配管など、電気機器ではないもの</li>
              <li>単なる建築設備（床・壁・窓 など）</li>
              <li>「消火設備」「換気設備」など、防爆<strong>対策</strong>そのもの</li>
            </ul>
            <p>「<strong>電気機器かどうか</strong>」「表にある６グループに入るかどうか」を軸に、迷った選択肢を切っていこう。</p>
          </div>

          <h3>リレー（継電器）とは</h3>
          <div className={shared.bandCard}>
            <p>
              <strong>リレー（継電器）</strong>は、コイルに電流を流すと磁力が生まれ、
              内部の可動接点を「つなぐ／切る」ことで他の回路をON／OFFできるスイッチ部品です。
              機械的に接点が動くため、開閉時に火花が飛びやすい点に注意が必要です。
            </p>
            <p>
              さらに、電気設備に限らず、ボイラーや加熱炉など可燃性物質を扱うすべての機器は<strong>必ず確実に接地</strong>してください。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/relay_principle_diagram.gif"
              alt="リレーのコイルと可動接点の動作原理を示した図"
              className={`${shared.circuitSvg} ${styles.relayImage}`}
              loading="lazy"
              decoding="async"
              width={335}
              height={300}
            />
            <figcaption className={shared.figureCaption}>
              <small>
                画像出典：
                <a href="https://commons.wikimedia.org/wiki/File:Relay_principle_horizontal_new.gif">
                  Relay principle horizontal new
                </a>
                {' '}&copy; Digigalos,{' '}
                <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>
              </small>
            </figcaption>
          </figure>

          <h3>常開接点とは</h3>
          <div className={shared.bandCard}>
            <p>
              コイルに通電していないときは回路が開いている接点です。<strong>「常に開いている」</strong>状態から「常開接点」と呼ばれ、
              コイルに通電すると接点が閉じて回路がONになります。
            </p>
          </div>

          <h3>常閉接点とは</h3>
          <div className={shared.bandCard}>
            <p>
              コイルに通電していないときは<strong>回路が閉じている</strong>接点です。<strong>「常に閉じている」</strong>状態から「常閉接点」と呼ばれ、
              コイルに通電すると接点が開いて回路がOFFになります。
            </p>
          </div>
        </section>

        {/* 5. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <IgnitionAndFlashPointQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}