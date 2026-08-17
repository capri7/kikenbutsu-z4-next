import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import GeneralStandardsPart2Quiz from './GeneralStandardsPart2Quiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 35節：共通の基準【2】',
  description:
    '危険物乙4 第1章35節。共通の基準【2】として貯蔵・取扱いの技術上の基準を整理。類が異なる危険物の同時貯蔵の原則と例外、容器の積み重ね高さ（3m・4m・6m）、製造・詰替・消費・廃棄における取扱基準、屋内多量貯蔵の10倍区分と0.3m離隔を収録。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/general_standards_part2',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 35節：共通の基準【2】',
    description:
      '危険物乙4 第1章35節。共通の基準【2】として貯蔵・取扱いの技術上の基準を整理。類が異なる危険物の同時貯蔵の原則と例外、容器の積み重ね高さ（3m・4m・6m）、製造・詰替・消費・廃棄における取扱基準、屋内多量貯蔵の10倍区分と0.3m離隔を収録。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/general_standards_part2',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 35節：共通の基準【2】',
    description:
      '危険物乙4 第1章35節。共通の基準【2】として貯蔵・取扱いの技術上の基準を整理。類が異なる危険物の同時貯蔵の原則と例外、容器の積み重ね高さ（3m・4m・6m）、製造・詰替・消費・廃棄における取扱基準、屋内多量貯蔵の10倍区分と0.3m離隔を収録。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function GeneralStandardsPart2Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '35節：共通の基準【2】' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 共通の基準【2】 */}
        <section className={shared.section}>
          <h2>共通の基準【2】</h2>
          <div className={shared.bandCard}>
            <p>
              共通の基準【2】では、危険物の<strong>貯蔵方法</strong>と<strong>同時に貯蔵してよい組み合わせ</strong>に関する技術上の基準を扱う。危険物以外の物品や、類の異なる危険物を同じ場所に置けるのは、<strong>原則として不可</strong>で、<strong>例外的に条件がそろった場合だけOK</strong>になる。ここでは「ふつうはダメ／この条件ならOK」という線引きを整理しておく。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>原則：危険物は単独で貯蔵</strong>…他の物品や別の類の危険物と一緒に置くのは基本NG。
              </li>
              <li>
                <strong>例外は「条件がそろったときだけ」</strong>…区画・離隔・容器などで<strong>混触せず、危険性が増えない</strong>場合に限り同時貯蔵OK。
              </li>
              <li>
                <strong>キーワードは「危険性が著しく増大しないこと」</strong>…一緒に置くことで火災・爆発がひどくなりそうならアウト。
              </li>
              <li>
                <strong>試験では「原則NG＋一定の基準を満たす場合に限り例外OK」</strong>という言い回しが出たらマル候補としてチェック。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 貯蔵の基準 */}
        <section className={shared.section}>
          <h2>貯蔵の基準</h2>
          <div className={shared.bandCard}>
            <p>
              危険物の貯蔵場所では、まず<strong>危険物だけを置く</strong>のが基本である。周囲に不要な物品があると、発火や延焼拡大のきっかけになりやすく、事故の被害も大きくなる。このため、<strong>原則として危険物以外の物品を貯蔵してはならない</strong>。
            </p>
            <p>ただし、次に示すような場合には、例外として危険物と同時に貯蔵することが認められる。</p>
          </div>

          <h3>同時に貯蔵できる場合</h3>
          <div className={shared.bandCard}>
            <p>ここでは、<strong>例外として同時に貯蔵してよいケース</strong>を整理しておく。</p>
            <ol className={styles.orderedCompact}>
              <li>
                <strong>屋内貯蔵所</strong>または<strong>屋外貯蔵所</strong>では、危険物と危険物以外の物品をそれぞれまとめて貯蔵し、両者のあいだに<strong>相互1m以上の間隔</strong>を確保している場合は、同時に貯蔵することができる。
              </li>
              <li>
                <strong>屋外タンク貯蔵所・屋内タンク貯蔵所・地下タンク貯蔵所・移動タンク貯蔵所</strong>では、危険物と危険物以外の物品を、それぞれの<strong>区画ごと</strong>に分けて貯蔵している場合は、同時に貯蔵することができる。
              </li>
            </ol>
            <p>
              <small>※ 危険物以外の物品の具体的な種類は、ここでは省略する。</small>
            </p>
            <p>
              また、法別表第1に掲げる<strong>類が異なる危険物どうし</strong>は、原則として<strong>同一の貯蔵所</strong>（耐火構造の隔壁で完全に区分された室が2以上ある場合は、同一の室内）で<strong>一緒に貯蔵してはならない</strong>。
            </p>
            <p>
              ただし、<strong>屋内貯蔵所</strong>または<strong>屋外貯蔵所</strong>において、次のとおり<strong>類別ごと</strong>に危険物を取りまとめ、それぞれのあいだに<strong>相互1m以上の間隔</strong>を確保している場合は、類の異なる危険物であっても同時に貯蔵することができる。
            </p>
          </div>

          <h3>同時に貯蔵できる類</h3>
          <div className={shared.bandCard}>
            <p>
              法別表第1に掲げる<strong>類が異なる危険物</strong>どうしは、原則として同一の貯蔵所に<strong>混載しない</strong>。
            </p>
            <p>
              ただし、一定の条件を満たす場合に限り、<strong>例外的に同時に貯蔵してよい組み合わせ</strong>が認められている。試験ではこの「原則NG＋条件付きで例外OK」の整理が頻出テーマである。
            </p>
            <p>
              下の表は「どの類を<strong>基準</strong>にして、どの相手となら<strong>同時貯蔵OK</strong>かをまとめたもの」である。<strong>基準となる類＋相手＋条件</strong>をセットで暗記しておく。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>原則</strong>：類が異なる危険物どうしは<strong>同じ貯蔵所に混載しない</strong>。
              </li>
              <li>
                <strong>例外</strong>：屋内貯蔵所・屋外貯蔵所などで、<strong>類別ごとにまとめて1m以上の間隔</strong>を取るなど、<strong>決められた条件</strong>を満たしたときだけ同時貯蔵OK。
              </li>
              <li>
                表の左列は<strong>「基準となる類」</strong>、右列は<strong>「同時に貯蔵できる相手＋条件」</strong>という役割で見る。
              </li>
              <li>
                覚え方は、<strong>「基準となる類 → 相手 → 条件」</strong>の<strong>3点セット</strong>で一気に暗記する。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                選択肢で<strong>「原則混載してよい」</strong>と書かれていたらNG。正しいのは<strong>「原則混載しない／条件を満たした場合のみ混載可」</strong>。
              </li>
              <li>
                <strong>1m以上の間隔</strong>を「2m」「3m」など別の数字にすり替えるひっかけに注意。数字が変わっていたら要チェック。
              </li>
              <li>
                表の内容を<strong>逆向き</strong>に聞く問題（「第○類を基準にしたとき、同時貯蔵できる相手は？」など）がよく出る。<strong>基準の側と相手の側を取り違えない</strong>こと。
              </li>
              <li>
                「条件なしで同時貯蔵できる」「複数の類をまとめて一括で同時貯蔵できる」といった<strong>条件を書き落とした選択肢</strong>も定番の×パターン。
              </li>
            </ul>
          </div>

          <h3>類ごとの同時貯蔵一覧</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">類ごとの共通基準</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colCondition} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>基準となる類</th>
                  <th scope="col">同時に貯蔵できる相手（条件付きを含む）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory1}`}>第1類</span>
                  </th>
                  <td>
                    第5類（有機過酸化物）
                    <br />
                    <small>※ただし<strong>アルカリ金属の過酸化物等</strong>は除く</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory1}`}>第1類</span>
                  </th>
                  <td>第6類（酸化性液体）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory2}`}>第2類</span>
                  </th>
                  <td>
                    第3類（自然発火性物品）のうち<strong>黄りん（およびその含有品のみ）</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory2}`}>第2類</span>
                  </th>
                  <td>
                    第4類のうち<strong>アルキルアルミニウム又はアルキルリチウムを含有するもの</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory4}`}>第4類</span>
                  </th>
                  <td>
                    <strong>第4類</strong>（有機過酸化物とその含有品）と<strong>第5類</strong>（有機過酸化物とその含有品）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory4}`}>第4類</span>
                  </th>
                  <td>
                    第5類のうち<strong>1-アリルオキシ-2,3-エポキシプロパン（アリルグリシジルエーテル）</strong>又は<strong>4-メチリデンオキセタン-2-オン</strong>
                    （いずれかの<strong>含有品</strong>を含む）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutNg}`}>
            <h3>おっとNG!</h3>
            <p>
              上記はいずれも、<strong>屋内貯蔵所又は屋外貯蔵所で、類別ごとに取りまとめ、相互に1m以上の間隔</strong>を確保していることが前提である。
              <br />
              この3条件がそろって初めて「例外OK」。それ以外は<strong>原則どおり同時貯蔵NG</strong>と押さえておく。
            </p>
          </div>

          <h3>同時貯蔵・貯蔵方法のポイント</h3>
          <div className={shared.bandCard}>
            <p>同時に貯蔵するときの基本ルールは次のとおりである。</p>
            <ul className={shared.compact}>
              <li>
                <strong>水中保存物品</strong>と<strong>禁水性物品</strong>は、同一の貯蔵所に一緒に置かない。
              </li>
            </ul>
            <p>
              特に第3類では、<strong>黄りん等（水中保存する物品）</strong>と<strong>禁水性物品</strong>を同じ貯蔵所で保管すると、水との接触禁止のルールと矛盾して危険性が高まる。そのため、これらは<strong>別々の貯蔵所で管理する</strong>と押さえておく。
            </p>
          </div>

          <h3>屋内で多量に貯蔵する場合</h3>
          <div className={shared.bandCard}>
            <p>
              屋内貯蔵所で、同一品名の危険物のうち<strong>自然発火のおそれ</strong>又は<strong>災害が著しく増大するおそれ</strong>のあるものを多量に貯蔵する場合は、次のように整理して貯蔵する。
            </p>
            <ul className={shared.compact}>
              <li>
                <strong>指定数量の10倍以下ごと</strong>に区分して区画を分ける。
              </li>
              <li>
                各区分の間は<strong>0.3m以上</strong>離して貯蔵する。
              </li>
            </ul>
            <p>
              「多くなったら<strong>10倍ごとに区切る＋0.3m離す</strong>」とセットで暗記しておく。
            </p>
          </div>

          <h3>容器の積み重ね高さの上限</h3>
          <div className={shared.bandCard}>
            <p>
              容器を積み重ねて貯蔵できる<strong>高さの上限</strong>は、容器の種類や条件によって決まっている。単なる数字ではなく、<strong>「どんな容器なら何mまでOKか」</strong>をセットで覚えておく。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">容器の積み重ね高さの上限</caption>
              <colgroup>
                <col className={styles.colContainerTarget} />
                <col className={styles.colUpperLimit} />
                <col className={styles.colRemarks} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象</th>
                  <th scope="col">上限高さ</th>
                  <th scope="col">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    一般
                    <br />
                    <small>（蓄電器による貯蔵を除く）</small>
                  </th>
                  <td><strong>3</strong>m</td>
                  <td>屋内・屋外いずれも</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    第4類の<strong>第3石油類／第4石油類／動植物油類</strong>のみ
                  </th>
                  <td><strong>4</strong>m</td>
                  <td><strong>当該類の容器だけ</strong>を積み重ねる場合</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    機械荷役対応の
                    <br />
                    容器のみ
                  </th>
                  <td><strong>6</strong>m</td>
                  <td>フォークリフト等で<strong>機械荷役する構造</strong>の容器のみ</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    屋外貯蔵所の
                    <br />
                    <strong>架台</strong>による貯蔵
                  </th>
                  <td><strong>6</strong>m</td>
                  <td>架台（ラック）の<strong>高さの上限</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>高さの並びは「3 → 4 → 6 → 6」</strong>。数字の流れでまず暗記。
              </li>
              <li>
                <strong>4m OK</strong>は<strong>第3石油類・第4石油類・動植物油類だけ</strong>を積むときだけ。
              </li>
              <li>
                <strong>6m OK</strong>は<strong>機械荷役対応容器のみ</strong>と<strong>屋外貯蔵所の架台</strong>の2パターン。
              </li>
              <li>
                一般容器は<strong>3mまで（蓄電器を除く）</strong>。電池関係は別枠で注意しておく。
              </li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>補足：電池関連の注記</h3>
            <p>
              リチウムイオン蓄電池の電解液は、一般に<strong>第4類第2石油類</strong>に該当する。一定数量以上を取り扱う場合は、危険物規制の対象となる点に注意する。
            </p>
          </div>
        </section>

        {/* 貯蔵の基準：容器収納・温度管理・弁の管理などの実務ルール */}
        <section className={shared.section}>
          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>容器収納が原則（例外：塊状硫黄等の屋内例外）</h3>
            <p>
              屋内・屋外の貯蔵は、原則として<strong>基準に適合する容器に収納</strong>して行う。ただし、屋内貯蔵所で<strong>塊状の硫黄等（硫黄または硫黄含有品）</strong>を貯蔵する場合は、この限りではない。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>屋内の容器は55℃を超えないよう管理</h3>
            <p>
              屋内貯蔵所では、容器収納して貯蔵する危険物の温度が<strong>55℃</strong>を超えないように必要な措置を講じる。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>計量口・元弁・注入口の弁は「作業時以外は閉鎖」</h3>
            <p>
              屋外・屋内・地下の各<strong>貯蔵タンク</strong>の<strong>計量口</strong>は、計量時以外は<strong>閉鎖</strong>する。
              <br />
              また、これらタンクの<strong>元弁（タンク直近の弁）</strong>及び<strong>注入口の弁・ふた</strong>は、危険物の<strong>出入時以外は閉鎖</strong>する。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>防油堤の水抜口は通常閉鎖</h3>
            <p>
              屋外貯蔵タンク周囲の<strong>防油堤</strong>に設ける<strong>水抜口</strong>は通常<strong>閉鎖</strong>する。堤内に<strong>滞油・滞水</strong>が生じたときは、<strong>遅滞なく排出</strong>する。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>屋外での塊状硫黄等は囲い＋シートで飛散防止</h3>
            <p>
              屋外貯蔵所では、塊状の<strong>硫黄等</strong>は<strong>囲いの高さ以下</strong>で貯蔵し、<strong>あふれ・飛散</strong>を防ぐために囲いを設け、全体を<strong>難燃性または不燃性シート</strong>で覆い、シートを囲いに<strong>確実に固定</strong>する。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                類が異なる危険物は原則同一貯蔵所で<strong>NG</strong>。ただし屋内／屋外で類別ごとに取りまとめ、<strong>1m以上の離隔</strong>を取れば同時貯蔵可。
              </li>
              <li>
                第3類の<strong>黄りん（水中保存）</strong>と<strong>禁水性物品</strong>は、同一貯蔵所で貯蔵不可（取り違え注意）。
              </li>
              <li>
                屋内で多量に貯蔵する場合は、同一品名ごとに<strong>指定数量10倍以下</strong>ごと区分し、区分間を<strong>0.3m以上</strong>離す。
              </li>
              <li>
                積み重ね高さの目安：通常<strong>3m</strong>、第4類〈第3・第4石油類＋動植物油類のみ〉は<strong>4m</strong>、機械荷役容器と屋外架台は<strong>6m</strong>まで。
              </li>
              <li>
                容器収納が原則。屋内では基準適合容器に収納し、例外は<strong>塊状の硫黄等</strong>。屋外では囲いと<strong>難燃・不燃シート</strong>で飛散防止。
              </li>
              <li>
                屋内貯蔵所では、容器収納した危険物の温度が<strong>55℃</strong>を超えないよう管理する。
              </li>
              <li>
                貯蔵タンクの<strong>計量口</strong>は計量時以外閉鎖。<strong>元弁</strong>や<strong>注入口の弁・ふた</strong>も出入時以外閉鎖。
              </li>
              <li>
                防油堤の<strong>水抜口</strong>は通常閉鎖。堤内の滞油・滞水は<strong>遅滞なく排出</strong>する。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 3. 取扱いの基準 */}
        <section className={shared.section}>
          <h2>取扱いの基準</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">取扱いの基準</caption>
              <colgroup>
                <col className={styles.colHandling} />
                <col className={styles.colStandard} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>取扱い</th>
                  <th scope="col">技術上の基準</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory1}`}>製造</span>
                  </th>
                  <td>
                    <ol className={styles.orderedCompact}>
                      <li>蒸留工程では、設備内圧の変動等により液体・蒸気・ガスが<strong>漏れない</strong>ようにする。</li>
                      <li>抽出工程では、抽出缶の<strong>内圧が異常に上昇しない</strong>ようにする。</li>
                      <li>乾燥工程では、危険物の温度が<strong>局部的に上昇しない方法</strong>で加熱または乾燥する。</li>
                      <li>
                        粉砕工程では、危険物の粉末が<strong>著しく浮遊</strong>している状態や、粉末が<strong>機械器具等に著しく付着</strong>している状態で、当該機械器具等を取り扱わないようにする。
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory2}`}>詰替</span>
                  </th>
                  <td>
                    <ol className={styles.orderedCompact}>
                      <li>危険物を容器に詰め替える場合は、<strong>総務省令の定めに従って収納</strong>する。</li>
                      <li>詰替作業は、<strong>防火上安全な場所</strong>で行う。</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory3}`}>消費</span>
                  </th>
                  <td>
                    <ol className={styles.orderedCompact}>
                      <li>吹付塗装は、<strong>防火上有効な隔壁等で区画された安全な場所</strong>で行う。</li>
                      <li>焼入れは、危険物が<strong>危険な温度に達しない</strong>ようにして行う。</li>
                      <li>
                        染色・洗浄は、<strong>可燃性蒸気の換気を十分に確保</strong>し、廃液は<strong>みだりに放置せず安全に処置</strong>する。
                      </li>
                      <li>
                        バーナーを使用する場合は、<strong>逆火を防止</strong>し、危険物が<strong>あふれない</strong>ようにする。
                        <br />
                        <small>※ 逆火（ぎゃっか）は、燃焼速度と噴出速度の関係により炎がバーナー側へ戻る現象である。</small>
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory4}`}>廃棄</span>
                  </th>
                  <td>
                    <ol className={styles.orderedCompact}>
                      <li>
                        焼却する場合は、<strong>安全な場所</strong>で、かつ<strong>燃焼・爆発により他に危害・損害を及ぼさない方法</strong>で行い、<strong>見張人</strong>を付ける。
                      </li>
                      <li>埋没する場合は、危険物の性質に応じて<strong>安全な場所</strong>で行う。</li>
                      <li>
                        危険物を<strong>海中又は水中に流出・投下</strong>しない。
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                蒸留・抽出：内圧管理のキーワードは<strong>漏れない</strong>／<strong>異常上昇させない</strong>。語尾が「〜してはならない」でも意味は同じ。
              </li>
              <li>
                乾燥・加熱：押さえるのは<strong>局部過熱の防止</strong>。装置名より「局部的に上昇させない」を拾う。
              </li>
              <li>
                粉砕工程：粉末の<strong>浮遊・付着が著しいときは機械を扱わない</strong>（「扱う」は×）。
              </li>
              <li>
                詰替：<strong>総務省令に従って収納</strong>＋<strong>防火上安全な場所</strong>。場所条件の抜けに注意。
              </li>
              <li>
                消費（バーナー）：<strong>逆火防止</strong>と<strong>あふれ防止</strong>のセット。問題文の「あふれやすいように」は完全に×。
              </li>
              <li>
                廃棄：焼却は<strong>見張人付き</strong>で安全な方法なら可。<strong>海中・水中への流出・投下</strong>は絶対に不可。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <GeneralStandardsPart2Quiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}