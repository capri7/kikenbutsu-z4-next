import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import RegularInspectionsQuiz from './RegularInspectionsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 18節：定期点検',
  description:
    '危険物乙4 第1章18節。定期点検の実施者・対象施設・数量要件を一覧表で整理。点検の頻度（年1回以上）・記録の保存期間（3年間）・漏れ点検の周期（地下タンク1年・移動貯蔵タンク5年）や、内部点検（屋外タンク貯蔵所）の周期・延長・記録保存も解説している。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/regular_inspections',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 18節：定期点検',
    description:
      '危険物乙4 第1章18節。定期点検の実施者・対象施設・数量要件を一覧表で整理。点検の頻度（年1回以上）・記録の保存期間（3年間）・漏れ点検の周期（地下タンク1年・移動貯蔵タンク5年）や、内部点検（屋外タンク貯蔵所）の周期・延長・記録保存も解説している。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/regular_inspections',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 18節：定期点検',
    description:
      '危険物乙4 第1章18節。定期点検の実施者・対象施設・数量要件を一覧表で整理。点検の頻度（年1回以上）・記録の保存期間（3年間）・漏れ点検の周期（地下タンク1年・移動貯蔵タンク5年）や、内部点検（屋外タンク貯蔵所）の周期・延長・記録保存も解説している。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function RegularInspectionsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '18節：定期点検' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 定期点検とは */}
        <section className={shared.section}>
          <h2>定期点検とは</h2>
          <div className={shared.bandCard}>
            <p>
              法令で定める製造所等の<strong>所有者等</strong>（所有者・管理者・占有者）は、当該製造所等について<strong>定期に点検</strong>を実施し、その<strong>点検記録を作成</strong>して一定期間<strong>保存</strong>しなければならない。
            </p>
            <p>
              定期点検は、製造所等の<strong>位置・構造・設備</strong>が、消防法で定める<strong>技術上の基準に適合</strong>しているかどうかを確認するために行う。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>義務者は<strong>製造所等の所有者等</strong>（所有者・管理者・占有者）。</li>
              <li><strong>定期に点検</strong>する・<strong>点検記録を作成</strong>する・<strong>一定期間保存</strong>するのがセット。</li>
              <li>点検の中身は<strong>位置・構造・設備が技術上の基準に合っているか</strong>のチェック。</li>
            </ul>
          </div>
        </section>

        {/* 2. 定期点検の実施者 */}
        <section className={shared.section}>
          <h2>定期点検の実施者</h2>
          <div className={shared.bandCard}>
            <p>
              定期点検は、原則として<strong>危険物取扱者（甲種・乙種・丙種）</strong>または<strong>危険物施設保安員</strong>が行う。
            </p>
            <p>
              ただし、<strong>危険物取扱者（甲・乙・丙）の立会いがある場合</strong>は、資格を持たない者でも点検を実施できる（点検そのものは無資格者でも可）。
            </p>
            <p>
              ※<strong>「定期点検の立会い」</strong>と<strong>「危険物の取扱作業の立会い」</strong>は別ものである。危険物の取扱作業の立会いができるのは、<strong>甲種または乙種の危険物取扱者のみ</strong>で、丙種は<strong>取扱作業の立会いは不可</strong>である。
            </p>
            <p>
              また、<strong>地下貯蔵タンク・地下埋設配管・移動貯蔵タンク等の漏えい点検</strong>は、点検方法に関する十分な<strong>知識・技能</strong>を有する者が行わなければならない。<strong>固定式泡消火設備の点検</strong>も同様に、泡の<strong>発泡機構</strong>や<strong>泡消火薬剤の性状・性能</strong>についての知識・技能を持つ者が実施する。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>定期点検の実施者は<strong>危険物取扱者</strong>か<strong>危険物施設保安員</strong>。</li>
              <li><strong>危険物取扱者の立会い</strong>があれば、<strong>無資格者でも点検実施OK</strong>。</li>
              <li>
                地下タンク・地下埋設配管・移動タンク・固定式泡消火設備などは<strong>専門的な知識・技能を持つ者</strong>による点検が必要。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>
              <strong>定期点検の立会い</strong>は「甲・乙・丙 いずれの危険物取扱者でもOK」だが、<strong>危険物の取扱作業の立会い</strong>は<strong>甲種・乙種のみ</strong>。「丙も立会いできる」と思い込んでいると、<strong>取扱作業の立会い</strong>の問題で誤答させられる典型パターンである。
            </p>
          </div>
        </section>

        {/* 3. 定期点検の対象施設 */}
        <section className={shared.section}>
          <h2>定期点検の対象施設</h2>
          <p>定期に点検しなければならない製造所等は、次のとおりである。</p>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">定期に点検をしなければならない製造所等</caption>
              <colgroup>
                <col className={styles.colPlant} />
                <col className={styles.colQuantity} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象施設</th>
                  <th scope="col">貯蔵・取り扱う危険物の数量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>製造所</strong></th>
                  <td>指定数量の倍数が<strong>10以上</strong>、<strong>または地下タンクを有するもの</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋内貯蔵所</th>
                  <td>指定数量の倍数が<strong>150以上</strong>のもの</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外タンク貯蔵所</th>
                  <td>指定数量の倍数が<strong>200以上</strong>のもの</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外貯蔵所</th>
                  <td>指定数量の倍数が<strong>100以上</strong>のもの</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>地下タンク貯蔵所</th>
                  <td><strong>すべて</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>移動タンク貯蔵所</th>
                  <td><strong>すべて</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>給油取扱所</th>
                  <td><strong>地下タンクを有するもの</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>移送取扱所</th>
                  <td><strong>すべて</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>一般取扱所</th>
                  <td>指定数量の倍数が<strong>10以上</strong>、<strong>または地下タンクを有するもの</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>地下タンク貯蔵所</strong>と<strong>移動タンク貯蔵所</strong>は、<strong>すべて</strong>が定期点検の対象。</li>
              <li><strong>移送取扱所</strong>も、取り扱い量に関係なく<strong>すべて</strong>定期点検の対象。</li>
              <li><strong>製造所・一般取扱所</strong>は「<strong>10倍以上</strong>」か「<strong>地下タンクあり</strong>」で対象になる。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p>次の施設は、<strong>定期点検の対象から除外</strong>される。</p>
            <ul className={shared.compact}>
              <li><strong>火薬類取締法</strong>による危害予防規定を定めている製造所等</li>
              <li><strong>鉱山保安法</strong>による保安規定を定めている製造所等</li>
              <li>
                <strong>指定数量の倍数が30以下</strong>かつ<strong>引火点40℃以上</strong>の第4類危険物のみを容器に詰め替える<strong>一般取扱所</strong>（<strong>地下タンクを有するものを除く</strong>）
              </li>
              <li>
                次のような、<strong>定期点検を行わなくてもよい製造所等</strong>：
                <ul>
                  <li><strong>屋内タンク貯蔵所</strong></li>
                  <li><strong>簡易タンク貯蔵所</strong></li>
                  <li><strong>販売取扱所</strong></li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. 定期点検の時期と記録の保存 */}
        <section className={shared.section}>
          <h2>定期点検の時期と記録の保存</h2>
          <div className={shared.bandCard}>
            <p>定期点検は、原則として<strong>1年に1回以上</strong>行わなければならない。</p>
            <p>
              ただし、災害その他の非常事態の発生や、保安上の特別な必要が生じたことにより定期点検の実施が困難と認められる場合には、<strong>市町村長等が点検期限を別途定めることができる</strong>。
            </p>
            <p>
              このうち、<strong>タンクや配管の漏れの有無を確認する点検</strong>については、次のように<strong>点検期間が別に定められている</strong>。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>定期点検（全体）は<strong>年1回以上</strong>が原則。</li>
              <li><strong>地下タンク・地下埋設配管の漏れ点検</strong>：<strong>1年ごとに1回以上</strong>。</li>
              <li><strong>移動貯蔵タンクの漏れ点検</strong>：<strong>5年ごとに1回以上</strong>。</li>
            </ul>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">地下貯蔵タンク・地下埋設配管の漏れ点検の期間</caption>
              <colgroup>
                <col className={styles.colSubject} />
                <col className={styles.colPeriod} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象</th>
                  <th scope="col">漏れ点検の期間</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <strong>
                      地下貯蔵タンク／
                      <br />
                      地下埋設配管
                    </strong>
                  </th>
                  <td>
                    設置の<strong>完成検査済証</strong>（または<strong>変更の許可</strong>）の交付日、もしくは<strong>前回の漏れの検査</strong>を行った日から、<strong>1年を経過する日の属する月の末日まで</strong>の間に<strong>1回以上</strong>実施する。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">移動貯蔵タンクの漏れ点検の期間</caption>
              <colgroup>
                <col className={styles.colSubject} />
                <col className={styles.colPeriod} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象</th>
                  <th scope="col">漏れ点検の期間</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>移動貯蔵タンク</strong></th>
                  <td>
                    設置の<strong>完成検査済証</strong>（または<strong>変更の許可</strong>）の交付日、または<strong>前回の漏れの点検</strong>を行った日から、<strong>5年を経過する日の属する月の末日まで</strong>の間に<strong>1回以上</strong>実施する。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                定期点検の記録は<strong>3年間保存</strong>する。ただし、<strong>移動タンク貯蔵所の漏れの点検記録</strong>は<strong>10年間保存</strong>する。
              </li>
              <li>
                <strong>「すべて」が2つ</strong>：<strong>給油取扱所</strong>（屋外の自家用車給油取扱所を除く）と<strong>移送取扱所</strong>は、危険物の数量にかかわらず定期点検が<strong>例外なく必要</strong>である（前のセクションの復習）。
              </li>
              <li>定期点検の記録は、市町村長等や消防機関へ<strong>届け出る義務はない</strong>が、資料の提出を求められることがある。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>漏れ点検の周期</strong>は、地下タンク・地下埋設配管<strong>＝1年</strong>、移動貯蔵タンク<strong>＝5年</strong>。「どっちが1年でどっちが5年か」を取り違える定番ひっかけである。
              </li>
              <li>
                記録の保存は、通常の定期点検<strong>＝3年</strong>、移動タンクの漏れ点検<strong>＝10年</strong>。<strong>「3年」と「10年」</strong>の数字を入れ替える問題にも注意。
              </li>
            </ul>
          </div>
        </section>

        {/* 5. 定期点検のまとめ */}
        <section className={shared.section}>
          <h2>定期点検のまとめ</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">定期点検のまとめ</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colGeneralInspection} />
                <col className={styles.colLeakCheck} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">一般の点検</th>
                  <th scope="col">漏れの点検（※1）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>点検の実施者</th>
                  <td>
                    <ol className={styles.tableList}>
                      <li>危険物取扱者（甲・乙・丙）</li>
                      <li>危険物施設保安員</li>
                      <li>1または2の<strong>立会いがある者</strong></li>
                    </ol>
                  </td>
                  <td>
                    <ol className={styles.tableList}>
                      <li>危険物取扱者（甲・乙・丙）（※2）</li>
                      <li>危険物施設保安員（※2）</li>
                      <li>危険物取扱者の<strong>立会いがある者</strong>（※2）</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>実施回数</th>
                  <td>1年に1回以上</td>
                  <td>1年に1回以上（<strong>移動貯蔵タンクは5年に1回以上（※3）</strong>）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>記録保存</th>
                  <td>3年間</td>
                  <td>3年間（<strong>移動貯蔵タンクは10年間（※3）</strong>）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>注釈</h3>
            <ul className={shared.compact}>
              <li>（※1）地下貯蔵タンク、地下埋設配管、および移動貯蔵タンク。</li>
              <li>（※2）漏れの点検の方法に関し、知識および技能を有する者。</li>
              <li>（※3）移動貯蔵タンク。</li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 6. 内部点検 */}
        <section className={shared.section}>
          <h2>内部点検</h2>
          <div className={shared.bandCard}>
            <p>
              定期点検に加えて、引火性液体の危険物を貯蔵または取り扱う<strong>屋外タンク貯蔵所</strong>（<strong>岩盤タンク</strong>および<strong>海上タンク</strong>に係るものを除く）で、容量が<strong>1,000kL以上10,000kL未満</strong>のものは、<strong>内部点検</strong>を行う必要がある。
            </p>
            <p>
              内部点検は、<strong>13年または15年の周期（※）</strong>を超えない日までの間に<strong>1回以上</strong>実施しなければならない。
            </p>
            <p>
              ただし、当該期間内に内部点検を行うことが困難な場合で、その旨を市町村長等に届け出たときは、点検の時期を<strong>2年に限り延長</strong>することができる。
            </p>
            <p>（※）周期の起点となる日は、次のいずれかである。</p>
            <ul className={shared.compact}>
              <li><strong>完成検査済証の交付日</strong></li>
              <li><strong>直近の内部点検実施日</strong></li>
              <li><strong>保安検査を受検した日</strong></li>
            </ul>
            <p>
              また、<strong>15年周期</strong>とすることができるのは、法令で定める<strong>保安措置が講じられていること</strong>に加え、<strong>あらかじめ市町村長等へその旨を届け出ている場合</strong>に限られる。
            </p>
            <p>内部点検の記録は、<strong>26年間または30年間</strong>保存しなければならない。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>対象は<strong>屋外タンク貯蔵所</strong>のうち、<strong>1,000kL以上10,000kL未満</strong>のタンク。</li>
              <li><strong>岩盤タンク・海上タンクは対象外</strong>であることに注意。</li>
              <li>内部点検は<strong>13年または15年の周期</strong>ごとに<strong>1回以上</strong>実施する。</li>
              <li>やむを得ない事情があれば、<strong>届け出により2年間まで延長可</strong>。</li>
              <li>内部点検の記録は<strong>26年または30年保存</strong>が必要。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>内部点検の周期<strong>13年／15年</strong>と、記録保存<strong>26年／30年</strong>の数字の組合せは頻出。</li>
              <li>周期の起点は、<strong>完成検査済証交付日・直近の内部点検実施日・保安検査受検日</strong>のいずれか。</li>
              <li>
                <strong>15年周期</strong>にできるのは、<strong>保安措置が講じられている</strong>＋<strong>事前の届け出</strong>がある場合のみ。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「<strong>岩盤タンクや海上タンクも内部点検の対象</strong>」とまとめて書かれていたら<strong>誤り</strong>。</li>
              <li>「いつでも15年周期でよい」と書かれていたら<strong>誤り</strong>で、保安措置＋事前届け出が必要。</li>
              <li>
                「内部点検の記録は<strong>3年間保存</strong>」など、通常の定期点検と同じ年数を混同させる出題に要注意。
              </li>
            </ul>
          </div>
        </section>

        {/* 7. 点検記録の記載事項 */}
        <section className={shared.section}>
          <h2>点検記録の記載事項</h2>
          <div className={shared.bandCard}>
            <p>点検記録には、次の事項を記載しなければならない。</p>
            <ol className={shared.compact}>
              <li>点検を実施した製造所等の名称</li>
              <li>点検の方法および結果</li>
              <li>点検年月日</li>
              <li>点検を行った危険物取扱者または危険物施設保安員の氏名、または点検に立ち会った危険物取扱者の氏名</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                点検記録は<strong>「どこで・どう点検したか・いつ・だれが」</strong>の<strong>4点セット</strong>で覚える。
              </li>
              <li>4つのうち<strong>1つでも欠けると不正解</strong>になる出題が多い。</li>
              <li>
                氏名の欄には、<strong>点検を行った危険物取扱者または保安員</strong>か、<strong>点検に立ち会った危険物取扱者</strong>を記載する。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「<strong>危険物の貯蔵数量</strong>」「<strong>タンクの容量</strong>」などは点検記録の記載事項ではない。</li>
              <li>
                「<strong>点検結果のみ</strong>を記載すればよい」とする肢は誤り。<strong>点検の方法</strong>も必ず記録する。
              </li>
              <li>
                「点検に立ち会った者の氏名」として、<strong>誰でもよい</strong>と書かれていたら誤り。立会者として記録できるのは<strong>危険物取扱者に限られる</strong>。
              </li>
            </ul>
          </div>
        </section>

        {/* 8. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <RegularInspectionsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}