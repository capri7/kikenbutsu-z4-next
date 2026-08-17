import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SelfRefuelingStationStandardsQuiz from './SelfRefuelingStationStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 31節：セルフ型の給油取扱所の基準',
  description:
    '危険物乙4 第1章31節。セルフ型給油取扱所の基準を整理。顧客用固定給油設備の5要件（自動停止・安全分離・誤給油防止・上限設定・地震時停止）、品目別の識別色、制御卓の監視要件と第3種泡消火設備を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/self_refueling_station_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 31節：セルフ型の給油取扱所の基準',
    description:
      '危険物乙4 第1章31節。セルフ型給油取扱所の基準を整理。顧客用固定給油設備の5要件（自動停止・安全分離・誤給油防止・上限設定・地震時停止）、品目別の識別色、制御卓の監視要件と第3種泡消火設備を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/self_refueling_station_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 31節：セルフ型の給油取扱所の基準',
    description:
      '危険物乙4 第1章31節。セルフ型給油取扱所の基準を整理。顧客用固定給油設備の5要件（自動停止・安全分離・誤給油防止・上限設定・地震時停止）、品目別の識別色、制御卓の監視要件と第3種泡消火設備を教科書的に確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SelfRefuelingStationStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '31節：セルフ型の給油取扱所の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 構造・設備 */}
        <section className={shared.section}>
          <h2>構造・設備</h2>
          <div className={shared.bandCard}>
            <p>
              顧客に自ら給油等をさせる給油取扱所（セルフ型スタンド）は、顧客が<strong>進入したときに見やすい位置</strong>に「<strong>顧客が自ら給油等を行うことができる給油取扱所</strong>」である旨を<strong>表示</strong>しなければならない。
            </p>
            <p>
              <strong>顧客用固定給油設備</strong>：顧客に自ら<strong>自動車等へ給油</strong>させるための固定給油設備をいう。
              <br />
              <strong>顧客用固定注油設備</strong>：顧客に自ら<strong>灯油または軽油を容器へ詰替え</strong>させるための固定注油設備をいう。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>セルフ型スタンド＝<strong>顧客が自分で給油等を行う方式</strong>の給油取扱所。</li>
              <li>
                入口付近など<strong>進入時に見える位置</strong>に、「顧客が自ら給油する取扱所」であることを<strong>表示</strong>する。
              </li>
              <li>
                <strong>顧客用固定給油設備</strong>：自動車などの<strong>車両に給油</strong>するための設備。
              </li>
              <li>
                <strong>顧客用固定注油設備</strong>：灯油・軽油を<strong>容器に詰め替える</strong>ための設備。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 顧客用固定給油設備の構造および設備 */}
        <section className={shared.section}>
          <h2>顧客用固定給油設備の構造および設備</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">顧客用固定給油設備の構造および設備</caption>
              <colgroup>
                <col className={styles.colRequirements} />
                <col className={styles.colContent} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>要件</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>自動停止ノズル</th>
                  <td>
                    燃料タンクが<strong>満量</strong>になると<strong>自動停止</strong>する構造の給油ノズルであること。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>安全分離ホース</th>
                  <td>
                    著しい引張力で<strong>安全に分離</strong>し、分離部からの<strong>漏えいを防止</strong>する構造の給油ホースであること。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>誤給油防止</th>
                  <td>ガソリン／軽油の<strong>誤給油を有効に防止</strong>できる構造であること（口径・識別・ロック機構等）。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>上限設定</th>
                  <td>
                    <strong>1回の連続給油量</strong>および<strong>給油時間の上限</strong>をあらかじめ設定できる構造であること。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>地震時停止</th>
                  <td>
                    <strong>地震時に危険物の供給を自動停止</strong>できる構造であること。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            顧客が自分で操作しても安全を保てるよう、固定給油設備・固定注油設備・簡易タンクには、自動車等の<strong>衝突防止措置（車止め等）</strong>もあわせて設ける。
          </p>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>自動停止ノズル</strong>＝「<strong>満量になったら自動停止</strong>」。満量検知だけで止まらないノズルは×。
              </li>
              <li>
                <strong>安全分離ホース</strong>＝強く引っ張られたら<strong>安全に分離し、分離部から漏れない</strong>構造。
              </li>
              <li>
                <strong>誤給油防止</strong>＝ガソリンと軽油を取り違えさせない<strong>口径・色・ロック</strong>の工夫をまとめて押さえる。
              </li>
              <li>
                <strong>上限設定</strong>は<strong>「1回の連続給油量＋給油時間」</strong>の上限。<strong>1日合計量</strong>などにすり替えるひっかけに注意。
              </li>
              <li>
                <strong>地震時停止＋衝突防止</strong>：地震のときは<strong>供給を自動停止</strong>、平常時は<strong>車止め等で衝突を防ぐ</strong>セットで覚える。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 危険物の品目表示と色（識別） */}
        <section className={shared.section}>
          <h2>危険物の品目表示と色（識別）</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">危険物の品目表示と色（識別）</caption>
              <colgroup>
                <col className={styles.colItemName} />
                <col className={styles.colNotation} />
                <col className={styles.colColor} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>品目</th>
                  <th scope="col">表記（例）</th>
                  <th scope="col">色</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ハイオクガソリン</th>
                  <td>「ハイオクガソリン」／「ハイオク」</td>
                  <td>
                    <span className={`${styles.chip} ${styles.chipPremium}`}>
                      <span className={styles.dot}></span>黄
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>レギュラーガソリン</th>
                  <td>「レギュラーガソリン」／「レギュラー」</td>
                  <td>
                    <span className={`${styles.chip} ${styles.chipRegular}`}>
                      <span className={styles.dot}></span>赤
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>軽油</th>
                  <td>「軽油」</td>
                  <td>
                    <span className={`${styles.chip} ${styles.chipDiesel}`}>
                      <span className={styles.dot}></span>緑
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>灯油</th>
                  <td>「灯油」</td>
                  <td>
                    <span className={`${styles.chip} ${styles.chipKerosene}`}>
                      <span className={styles.dot}></span>青
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.badgesLegend}>
            <span className={`${styles.legendBadge} ${styles.chipPremium}`}>
              <span className={styles.dot}></span>ハイオク
            </span>
            <span className={`${styles.legendBadge} ${styles.chipRegular}`}>
              <span className={styles.dot}></span>レギュラー
            </span>
            <span className={`${styles.legendBadge} ${styles.chipDiesel}`}>
              <span className={styles.dot}></span>軽油
            </span>
            <span className={`${styles.legendBadge} ${styles.chipKerosene}`}>
              <span className={styles.dot}></span>灯油
            </span>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>黄＝ハイオク／赤＝レギュラー／緑＝軽油／青＝灯油</strong>の対応をセットで暗記。色の入れ替え問題が定番。
              </li>
              <li>
                ガソリン2種（ハイオク・レギュラー）は<strong>どちらもガソリン</strong>だが、色は別々というところを問うパターンに注意。
              </li>
              <li>
                「レギュラー＝黄」「軽油＝青」など、<strong>ガソリン・軽油・灯油の色すり替え</strong>は全部バツだと意識しておく。
              </li>
              <li>
                表記は「ハイオクガソリン」「ハイオク」「レギュラーガソリン」「レギュラー」などの<strong>組み合わせ</strong>で出題。紛らわしい略称や造語（例：「ハイレギ」など）は×。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. 監視・制御設備 */}
        <section className={shared.section}>
          <h2>監視・制御設備</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>制御卓（ブース）</strong>は全ての顧客用固定給油・固定注油設備の使用状況を<strong>直接視認</strong>可能な位置に設置する。
            </p>
            <p>ただし、<strong>監視設備</strong>で視認できる場合はその限りではない。</p>
            <p>
              <strong>可搬式の制御機器</strong>（タブレット等）を用いる場合は<strong>供給開始/停止</strong>の制御装置、<strong>一斉停止</strong>の制御装置を備える。
            </p>
            <p>
              顧客に自ら自動車等へ給油させるセルフ型給油取扱所には、<strong>第3種泡消火設備</strong>を設置する。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>制御卓（ブース）</strong>は、全ての顧客用固定給油・固定注油設備の使用状況を<strong>一元的に監視・制御</strong>する中枢。
              </li>
              <li>
                原則は<strong>直接視認</strong>できる位置に設置。ただし<strong>監視設備</strong>（カメラ等）で視認できる場合は例外として認められる。
              </li>
              <li>
                <strong>可搬式の制御機器</strong>（タブレット等）を用いるときは、<strong>供給開始／停止</strong>の制御装置と<strong>一斉停止</strong>の制御装置を必ず備える。
              </li>
              <li>
                セルフ型給油取扱所には<strong>第3種泡消火設備</strong>を設置。「セルフ＝第3種泡」とセットで押さえる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                セルフでも<strong>容器へのガソリン詰替えは不可</strong>。ガソリン携行缶への詰替えは<strong>従業員が実施</strong>し、顧客が扱える容器は<strong>灯油・軽油のみ</strong>。
              </li>
              <li>
                <strong>給油空地に支障物なし</strong>が原則。
                <br />
                「注意して置けばOK」「表示板を少し置くだけなら可」などの文言はすべて<strong>×</strong>。
              </li>
              <li>
                <strong>誤給油防止構造</strong>は「口径・識別・キー機構＋色分け」がセット。
                <br />
                色の組み合わせを入れ替えた選択肢（例：軽油＝青、灯油＝緑）はすべて<strong>誤り</strong>。
              </li>
              <li>
                <strong>自動停止ノズル＋地震時停止</strong>はセルフ特有の安全装置としてセットで問われる。どちらか一方だけの記述は<strong>不完全で×</strong>。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 5. 取扱いの基準 */}
        <section className={shared.section}>
          <h2>取扱いの基準</h2>
          <div className={shared.bandCard}>
            <p>
              顧客用<strong>以外</strong>の固定給油設備を使って、顧客に自ら<strong>給油させない</strong>こと。
            </p>
            <p>
              顧客用固定給油設備は、<strong>1回の連続給油量</strong>と<strong>給油時間の上限</strong>を、想定される利用状況に応じて<strong>適正値に設定</strong>すること。
            </p>
            <p>
              顧客用<strong>以外</strong>の固定注油設備で、顧客に<strong>容器への詰替えをさせない</strong>こと。
            </p>
            <p>
              制御卓（コントロールブース）で、顧客の給油作業等を<strong>監視・制御</strong>し、必要な<strong>指示</strong>を行うこと。
            </p>
          </div>

          <h3>制御卓（コントロールブース）での主な作業</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">制御卓（コントロールブース）での主な作業</caption>
              <colgroup>
                <col className={styles.colTaskItem} />
                <col className={styles.colTaskContent} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>監視</th>
                  <td>
                    顧客の給油作業等を<strong>直接視認</strong>（または監視設備で視認）できるよう<strong>適切に監視</strong>する。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>開始時の確認</th>
                  <td>
                    作業<strong>開始</strong>前に<strong>火気の不在</strong>、その他安全上の支障がないことを確認し、制御装置でホース機器への危険物供給を<strong>開始</strong>して作業可能状態にする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>終了処理</th>
                  <td>
                    作業<strong>終了</strong>時は制御装置でホース機器への供給を<strong>停止</strong>し、顧客が作業を継続できない状態にする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>非常時対応</th>
                  <td>
                    非常時や安全上の支障がある場合は、すべての固定給油・固定注油設備のホース機器への危険物供給を<strong>一斉停止</strong>する。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>連絡・指示</th>
                  <td>
                    制御卓には<strong>通話装置</strong>を設け、場内の全顧客に<strong>必要な指示</strong>を行えるよう<strong>放送設備</strong>を設ける。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>顧客が操作できる設備</strong>は「顧客用固定給油・固定注油設備」に限定。その他の固定設備は<strong>従業員のみ操作</strong>できるイメージで線引き。
              </li>
              <li>
                <strong>上限設定は義務</strong>：1回の連続給油量と給油時間には、想定利用に応じた<strong>適正な上限値</strong>を設定する（無制限や形だけの設定は×）。
              </li>
              <li>
                <strong>開始前チェック</strong>：火気の不在・安全上の支障がないことを確認してから、制御卓で<strong>供給を開始</strong>する流れをセットで覚える。
              </li>
              <li>
                <strong>終了後は供給停止</strong>：作業終了時は制御装置で<strong>ホース機器への供給を停止</strong>し、顧客が再操作できない状態にしてから終わり。
              </li>
              <li>
                <strong>非常時は一斉停止</strong>：トラブル時は個別停止だけでなく、すべての固定給油・固定注油設備への供給を<strong>一斉停止</strong>できることが条件。
              </li>
              <li>
                <strong>連絡・指示は場内全体へ</strong>：制御卓には<strong>通話装置＋放送設備</strong>を設け、必要な指示を<strong>全顧客に届く形</strong>で行う。
              </li>
            </ul>
          </div>
        </section>

        {/* 6. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <SelfRefuelingStationStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}