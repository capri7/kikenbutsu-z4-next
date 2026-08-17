import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import IndoorTankStorageStandardsQuiz from './IndoorTankStorageStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 25節：屋内タンク貯蔵所の基準',
  description:
    '危険物乙4 第1章25節。屋内タンク貯蔵所の構造・設備の基準を解説。設置場所と間隔、容量の上限、通気・安全装置、タンク専用室の構造、床・出入口の要件、付帯設備を表で整理。試験に出るポイントもまとめている。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/indoor_tank_storage_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 25節：屋内タンク貯蔵所の基準',
    description:
      '危険物乙4 第1章25節。屋内タンク貯蔵所の構造・設備の基準を解説。設置場所と間隔、容量の上限、通気・安全装置、タンク専用室の構造、床・出入口の要件、付帯設備を表で整理。試験に出るポイントもまとめている。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/indoor_tank_storage_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 25節：屋内タンク貯蔵所の基準',
    description:
      '危険物乙4 第1章25節。屋内タンク貯蔵所の構造・設備の基準を解説。設置場所と間隔、容量の上限、通気・安全装置、タンク専用室の構造、床・出入口の要件、付帯設備を表で整理。試験に出るポイントもまとめている。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function IndoorTankStorageStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '25節：屋内タンク貯蔵所の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 構造・設備 */}
        <section className={shared.section}>
          <h2>構造・設備</h2>
          <div className={shared.bandCard}>
            <p>
              屋内タンク貯蔵所のタンクは、<strong>平家建の建築物</strong>に設けられた<strong>タンク専用室</strong>に設置する。
            </p>
            <p>
              地下や2階以上に設置すると、火災時の避難・消火が難しくなり、漏れた危険物が下階へ流れ出すおそれもある。このため、法令では<strong>平家建の建築物</strong>に設けた<strong>タンク専用室内に設置する</strong>ことと定められている。
            </p>
            <p>
              ここでは、屋内タンク貯蔵所のうち<strong>「どこに置くか（設置場所）」</strong>と<strong>「どれだけ離すか（離隔）」</strong>が出題のポイントである。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>平家建の建築物</strong>であること。</li>
              <li><strong>タンク専用室</strong>に設置すること。</li>
              <li><strong>地下階・2階以上には設置しない</strong>こと。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>屋内タンク貯蔵所は、<strong>「平家建＋タンク専用室」</strong>をワンセットで覚える。</li>
              <li>地下階・2階以上は<strong>避難・消火・漏えい時の安全性</strong>の面から原則として認められない。</li>
              <li>このあと出てくる<strong>離隔</strong>の数字と合わせて「場所＋距離」で整理しておくと得点源になりやすい。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「<strong>地下に設置してもよい</strong>」「<strong>2階以上にも設置してよい</strong>」といった記述は<strong>すべて誤り</strong>。</li>
              <li>
                「<strong>工場の一部の室に他の設備と一緒に置いてよい</strong>」という記述も×。正しくは<strong>タンク専用室に単独で設置</strong>するイメージを持っておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 設置場所と間隔 */}
        <section className={shared.section}>
          <h2>設置場所と間隔</h2>
          <div className={shared.bandCard}>
            <p>
              屋内貯蔵タンクが壁や他のタンクに近すぎると、漏えいや火災が起きたときに被害が拡大しやすくなる。このため法令では、タンクの<strong>設置場所</strong>と<strong>タンク同士・壁との間隔</strong>について次のような基準が定められている。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">屋内貯蔵タンクの設置場所と間隔の基準</caption>
              <colgroup>
                <col className={styles.colPlace} />
                <col className={styles.colStandards} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">適用される基準</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>設置場所</th>
                  <td>
                    <strong>平家建の建築物</strong>に設けた<strong>タンク専用室</strong>に設置する。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>間隔</th>
                  <td>
                    タンクと壁との間、および同一専用室内のタンク相互間は<strong>0.5m以上</strong>あける。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>
                屋内貯蔵タンクは<strong>「平家建」</strong>の<strong>「タンク専用室」</strong>に設置する。
              </li>
              <li>タンクと壁・タンク相互の間隔は<strong>0.5m以上</strong>あける。</li>
              <li>「距離」の問題では、屋外タンク貯蔵所との違いとセットで整理しておくとよい。</li>
            </ul>
          </div>
        </section>

        {/* 3. 容量の上限 */}
        <section className={shared.section}>
          <h2>容量の上限</h2>
          <div className={shared.bandCard}>
            <p>
              屋内貯蔵タンクには、火災時の危険性をおさえるために<strong>タンク1基ごとの容量</strong>と<strong>同じ専用室内にあるタンクの合計容量</strong>に上限が定められている。
            </p>
            <p>
              試験では、<strong>①「指定数量の何倍までよいか」</strong>、<strong>②「第4石油類だけ別枠で数字が出る」</strong>の2点がよく問われる。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">屋内貯蔵タンクの容量制限</caption>
              <colgroup>
                <col className={styles.colGeneral} />
                <col className={styles.colQuantity} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">数量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>一般</th>
                  <td>容量は<strong>指定数量の40倍以下</strong>とする。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    第4石油類
                    <br />
                    動植物油類を除く
                  </th>
                  <td>1基の容量は<strong>20,000L以下</strong>とする。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>複数タンク</th>
                  <td>
                    同一専用室内のタンクについては、<strong>容量の総計</strong>も上記の制限内におさめる。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>一般の屋内貯蔵タンク：容量は<strong>指定数量の40倍以下</strong>。</li>
              <li>第4石油類（動植物油類を除く）は<strong>1タンク20,000L以下</strong>。</li>
              <li>
                複数タンクの場合も、同一専用室内の<strong>総容量</strong>が「<strong>40倍</strong>」「<strong>20,000L</strong>」のいずれも超えないようにする。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. 通気・安全装置 */}
        <section className={shared.section}>
          <h2>通気・安全装置</h2>
          <div className={shared.bandCard}>
            <p>屋内貯蔵タンクでは、タンク内の圧力を安全に逃がすために<strong>通気設備</strong>や<strong>安全装置</strong>を設ける。</p>
            <ul className={shared.compact}>
              <li>
                <strong>圧力タンク以外</strong>：<strong>無弁通気管</strong>を設ける。
              </li>
              <li>
                <strong>圧力タンク</strong>：<strong>安全装置</strong>を設ける。
              </li>
            </ul>
            <p>
              <strong>無弁通気管</strong>は、バルブ部をもたない常に「開」の状態になっている通気管である。圧力差で開閉する<strong>弁内蔵型の安全弁</strong>とは、構造も働き方も異なる点に注意する。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">無弁通気管の詳細基準</caption>
              <colgroup>
                <col className={styles.colPosition} />
                <col className={styles.colOverview} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">概要</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>先端の位置</th>
                  <td>
                    通気管の先端は<strong>屋外</strong>に設け、地上<strong>4m以上</strong>の高さとする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>敷地境界との離隔</th>
                  <td>
                    貯蔵物が<strong>引火点40℃未満</strong>のとき、通気管は<strong>敷地境界線から1.5m以上</strong>離す。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>
                <strong>圧力タンク以外＝無弁通気管</strong>、<strong>圧力タンク＝安全装置</strong>のセットで覚える。
              </li>
              <li>無弁通気管の先端は<strong>屋外・地上4m以上</strong>。</li>
              <li>
                貯蔵物が<strong>引火点40℃未満</strong>の場合、通気管は<strong>敷地境界線から1.5m以上</strong>離す。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「貯蔵物の引火点が<strong>40℃以上</strong>のときも、通気管は敷地境界線から1.5m以上離す」とする選択肢は誤り。条件は<strong>40℃未満</strong>のときだけ。
              </li>
              <li>
                通気管の高さは<strong>地上4m以上</strong>が正解。「3m以上」「5m以上」など、数字違いは×。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 5. タンク専用室の構造 */}
        <section className={shared.section}>
          <h2>タンク専用室の構造</h2>
          <div className={shared.bandCard}>
            <p>
              タンク専用室は、屋内で危険物をまとめて扱う「最後の防火ライン」である。火災が起きても<strong>炎や熱が外へ広がりにくい構造</strong>にしておくことが求められる。
            </p>
            <p>
              そのため、壁・柱・床・屋根だけでなく、<strong>窓や出入口に使うガラス</strong>まで含めて「燃えにくい」「火を通しにくい」材料・設備にすることがポイントである。
            </p>
            <p>
              ただし、<strong>引火点70℃以上の第4類のみ</strong>を貯蔵する場合など、危険性が比較的低い条件では一部に<strong>例外</strong>が認められている。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">タンク専用室の構造要件</caption>
              <colgroup>
                <col className={styles.colStructure} />
                <col className={styles.colContent} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>主要構造</th>
                  <td>
                    壁・柱・床は<strong>耐火構造</strong>、<strong>はりは不燃材料</strong>とする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    例外
                    <br />
                    （高引火点）
                  </th>
                  <td>
                    <strong>引火点70℃以上の第4類のみ</strong>を貯蔵する場合で、延焼のおそれがなければ<strong>外壁・柱・床を不燃材料</strong>とすればよい。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>開口部</th>
                  <td>
                    <strong>窓・出入口に防火設備</strong>を設ける。延焼のおそれのある外壁の出入口は<strong>自閉式の特定防火設備</strong>とする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋根・天井</th>
                  <td>
                    <strong>屋根は不燃材料</strong>とし、<strong>天井は設けない</strong>。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ガラス</th>
                  <td>
                    窓または出入口にガラスを用いる場合は<strong>網入りガラス</strong>とする。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>主要構造：<strong>壁・柱・床＝耐火構造／はり＝不燃材料</strong>。</li>
              <li>
                例外：<strong>引火点70℃以上の第4類のみ</strong>なら、延焼のおそれがない範囲で<strong>外壁・柱・床＝不燃材料で可</strong>。
              </li>
              <li>
                開口部：窓・出入口は<strong>防火設備</strong>、延焼おそれのある外壁の出入口は<strong>自閉式の特定防火設備</strong>。
              </li>
              <li>屋根・天井：<strong>屋根＝不燃材料／天井＝設けない</strong>。</li>
              <li>ガラス：窓・出入口に使うガラスは必ず<strong>網入りガラス</strong>。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>天井も不燃材料とする</strong>」という選択肢は誤り。正しくは<strong>屋根＝不燃材料／天井＝設けない</strong>。
              </li>
              <li>
                「<strong>引火点70℃以上の第4類のみなら、外壁・柱・床は耐火構造とする</strong>」という書き方も×。この場合は<strong>不燃材料でよい</strong>点を問われやすい。
              </li>
              <li>
                「窓や出入口のガラスは<strong>普通ガラスでよい</strong>」という選択肢も×。使用するのは必ず<strong>網入りガラス</strong>。
              </li>
            </ul>
          </div>
        </section>

        {/* 6. 床・出入口 */}
        <section className={shared.section}>
          <h2>床・出入口</h2>
          <div className={shared.bandCard}>
            <p>床まわりは、こぼれた危険物が<strong>外に流れ出さないように閉じ込める</strong>ことが目的である。</p>
            <p>
              そのため床は<strong>しみ込まない構造（不浸透構造）</strong>とし、こぼれた危険物が一か所に集まるよう<strong>適当な傾斜＋貯留設備</strong>を組み合わせる。
            </p>
            <p>
              さらに、出入口の<strong>敷居を床面より高く</strong>しておくことで、タンク室の外へ危険物があふれ出ないようにしている、というイメージである。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">床・敷居の基準</caption>
              <colgroup>
                <col className={styles.colFloorStructure} />
                <col className={styles.colContents} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>床構造</th>
                  <td>
                    床は<strong>不浸透構造</strong>とし、<strong>適当な傾斜</strong>および<strong>貯留設備</strong>を設ける。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>敷居の高さ</th>
                  <td>出入口の<strong>敷居高さ＝床面から0.2m以上</strong>とする。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>
                床まわりのキーワードは<strong>不浸透構造</strong>と<strong>適当な傾斜＋貯留設備</strong>。「床で受け止めて一か所に集める」イメージで押さえる。
              </li>
              <li>
                出入口の<strong>敷居</strong>は<strong>床面より高く（0.2m以上）</strong>。外への流出を防ぐ<strong>止水ライン</strong>として働く。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>
                床構造は<strong>「不浸透構造＋傾斜＋貯留設備」</strong>の3点セットで覚える（どれか1つ抜かれるひっかけに注意）。
              </li>
              <li>
                敷居高さは<strong>0.2m以上</strong>。「0.1m」「0.3m」などの数字の入れ替え問題でよく狙われる。
              </li>
            </ul>
          </div>
        </section>

        {/* 7. 付帯設備 */}
        <section className={shared.section}>
          <h2>付帯設備</h2>
          <div className={shared.bandCard}>
            <p>屋内貯蔵タンクには、腐食や誤操作、静電気火花などによる災害を防ぐためにいくつかの<strong>付帯設備</strong>を取り付ける。</p>
            <p>ポイントは、<strong>「どのタンクに」「どんな目的の設備を付けるか」</strong>をセットで覚えておくことである。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>タンク外面</strong>には、腐食を防ぐため<strong>さび止め塗装</strong>を施す。
              </li>
              <li>
                <strong>液体危険物</strong>の屋内貯蔵タンクには、残量を常時確認できるよう<strong>自動液面表示装置</strong>を設ける。
              </li>
              <li>
                <strong>ガソリン・ベンゼンなど静電気災害の危険が大きいもの</strong>では、注入口付近に静電気を大地に逃がすための<strong>接地電極（静電気除去用）</strong>を設ける。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>
                <strong>腐食対策＝さび止め塗装</strong>（タンク外面）。ほかの塗装名にすり替えられるひっかけに注意。
              </li>
              <li><strong>液体危険物タンク＝自動液面表示装置</strong>。</li>
              <li>
                <strong>ガソリン・ベンゼンなど静電気リスク大＝接地電極</strong>（静電気除去用）。
              </li>
            </ul>
          </div>
        </section>

        {/* 8. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <IndoorTankStorageStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}