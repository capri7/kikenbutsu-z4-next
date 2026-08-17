import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import UndergroundTankStorageStandardsQuiz from './UndergroundTankStorageStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 26節：地下タンク貯蔵所の基準',
  description:
    '危険物乙4 第1章26節。地下タンク貯蔵所の基準を整理。タンクの種類A〜D、二重殻タンクSS・SF・FFの違い、漏えい検知方式、通気管・安全装置、注入口・計量装置の設置ルールを教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/underground_tank_storage_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 26節：地下タンク貯蔵所の基準',
    description:
      '危険物乙4 第1章26節。地下タンク貯蔵所の基準を整理。タンクの種類A〜D、二重殻タンクSS・SF・FFの違い、漏えい検知方式、通気管・安全装置、注入口・計量装置の設置ルールを教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/underground_tank_storage_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 26節：地下タンク貯蔵所の基準',
    description:
      '危険物乙4 第1章26節。地下タンク貯蔵所の基準を整理。タンクの種類A〜D、二重殻タンクSS・SF・FFの違い、漏えい検知方式、通気管・安全装置、注入口・計量装置の設置ルールを教科書的に確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function UndergroundTankStorageStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '26節：地下タンク貯蔵所の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 構造・設備 */}
        <section className={shared.section}>
          <h2>構造・設備</h2>
          <div className={shared.bandCard}>
            <p>
              地下貯蔵タンクは、地中に埋めて使用するため、漏えいに気付きにくく<strong>一度事故が起きると被害が大きくなりやすい設備</strong>である。
            </p>
            <p>
              そのため、<strong>タンク自体の構造</strong>と<strong>地中への設置方法</strong>について詳しい基準が定められており、<strong>どの組合せかによって使えるタンクの種類が変わる</strong>仕組みになっている。
            </p>
            <p>
              まずは<strong>「どの設置方法で、どの種類のタンクが使えるか」</strong>を大まかなイメージとして整理しておく。
            </p>
          </div>
        </section>

        {/* 2. 地下貯蔵タンクの種類と設置方法 */}
        <section className={shared.section}>
          <h2>地下貯蔵タンクの種類と設置方法</h2>
          <div className={shared.bandCard}>
            <p>
              地下タンクでは、次の<strong>3つの設置方法</strong>と<strong>4種類のタンク（A〜D）</strong>の組合せを押さえる。
            </p>
            <p>
              この<strong>「設置方法 × タンクの種類」</strong>の対応関係がそのまま試験の選択肢として問われることが多いので、後に出てくる表とセットで覚えておく。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>鋼製一重殻タンク（A）</strong>が使えるのは、<strong>地盤面下のタンク室</strong>に設置するときだけ。
              </li>
              <li>
                <strong>二重殻タンク（B・C）</strong>は、タンク室設置に加えて<strong>地盤面下への直接埋設</strong>にも使用できる。
              </li>
              <li>
                <strong>D：漏れ防止構造タンク</strong>は、コンクリートなどで被覆して<strong>漏えいを外に出さない構造</strong>とし、<strong>被覆したまま直接埋設するタイプ</strong>。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 地下貯蔵タンクの一覧表 */}
        <section className={shared.section}>
          <h2>地下貯蔵タンクの一覧表</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">地下貯蔵タンクの種類と設置方法</caption>
              <colgroup>
                <col className={styles.colInstallationMethod} />
                <col className={styles.colTank} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>設置方法</th>
                  <th scope="col">タンクの種類</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    地盤面下の
                    <br />
                    タンク室に設置
                  </th>
                  <td>
                    <strong>A.</strong> 二重殻タンク以外（鋼製タンク）
                    <br />
                    <strong>B.</strong> 二重殻タンク（SS・SF・FF）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    地盤面下に
                    <br />
                    直接埋設
                  </th>
                  <td>
                    <strong>C.</strong> 二重殻タンク（SS・SF・FF）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    漏れ防止構造
                    <br />
                    （被覆直接埋設）
                  </th>
                  <td>
                    <strong>D.</strong> 漏れ防止構造によるタンク
                    <br />
                    <small>例：コンクリートなどでタンク全体を被覆し、そのまま地盤面下に直接埋設するタイプ。</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>省略記号（SS・SF・FF）の意味</h3>
            <ul className={shared.compact}>
              <li><strong>SS</strong>：STEEL &amp; STEEL（鋼製二重殻）</li>
              <li><strong>SF</strong>：STEEL &amp; FRP（鋼製＋強化プラスチック製二重殻）</li>
              <li><strong>FF</strong>：FRP &amp; FRP（強化プラスチック製二重殻）</li>
            </ul>
          </div>
        </section>

        {/* 4. A. 地盤面下のタンク室に設置する二重殻タンク以外の地下貯蔵タンク */}
        <section className={shared.section}>
          <h2>A. 地盤面下のタンク室に設置する二重殻タンク以外の地下貯蔵タンク</h2>
          <div className={shared.bandCard}>
            <p>
              Aは、いわゆる<strong>鋼製一重殻タンク</strong>を、地盤面下に設けた<strong>タンク室の中に設置するタイプ</strong>である。
            </p>
            <p>
              タンク室に収めた場合でも、漏えいに<strong>早く気付き、安全を確保できるように</strong>、<strong>タンクと室内側とのすき間・タンク頂部の深さ・通気管の高さ</strong>などが法令で細かく決められている。
            </p>
          </div>
        </section>

        {/* 5. 数値基準の早見表 */}
        <section className={shared.section}>
          <h2>数値基準の早見表</h2>
          <div className={shared.bandCard}>
            <p>Aタイプの地下タンクで<strong>特によく問われる数値</strong>を、まとめて確認する。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">数値基準の早見表</caption>
              <colgroup>
                <col className={styles.colItem} />
                <col className={styles.colStandard} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">基準</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>タンクと室内側の間隔</th>
                  <td>
                    <strong>0.1m以上</strong>あけ、そのすき間に<strong>乾燥砂</strong>を充填
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>タンク頂部の深さ</th>
                  <td>地盤面から<strong>0.6m以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>タンク相互間隔</th>
                  <td>
                    原則<strong>1m以上</strong>
                    <br />
                    <small>
                      ※ タンク容量の合計が<strong>指定数量の100倍以下</strong>の場合は、<strong>0.5m以上</strong>まで緩和される。
                    </small>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>通気管の先端</th>
                  <td>屋外に設け、地上<strong>4m以上</strong>の高さとする</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>設置場所：</strong>地盤面下に設けた<strong>タンク室</strong>に設置する。
              </li>
              <li>
                <strong>離隔（タンク⇄室内側）：</strong>
                <strong>0.1m以上</strong>あけ、そのすき間に<strong>乾燥砂</strong>を充填。
              </li>
              <li>
                <strong>埋設深さ（頂部）：</strong>タンク頂部が、地盤面下<strong>0.6m以上</strong>となるように埋設。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>0.1m（タンクと室内側）</strong>と<strong>0.6m（頂部の深さ）</strong>の<strong>数字だけ入れ替えるトラップ</strong>に注意。
              </li>
              <li>
                <strong>相互間隔1m／特例0.5m</strong>は、「タンク容量の合計が<strong>指定数量の100倍以下</strong>」のときだけ緩和される。
              </li>
              <li>
                <strong>通気管の先端4m</strong>は屋内タンクでも登場する数字なので、他のタンクと<strong>セットで整理</strong>しておく。
              </li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>標識・掲示</h3>
            <ul className={shared.compact}>
              <li>
                <strong>標識：</strong>地下タンク貯蔵所である旨を、出入口付近などの<strong>見やすい場所</strong>に表示する。
              </li>
              <li>
                <strong>掲示板：</strong>防火上の<strong>必要事項</strong>
                （禁止事項・取扱い上の注意・緊急時の連絡先 など）を掲示する。
              </li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>外面保護の考え方</h3>
            <p>
              地下貯蔵タンクの<strong>外面保護</strong>は、タンクの種類や設置方法に応じて、防食被覆の種類や厚さなどがA／B／C／Dごとに細かく規定されている。
            </p>
            <p>
              本試験では、細かい数値そのものよりも、<strong>「一重殻タンクなどは特に外面保護が重要になる」</strong>といった考え方を押さえておくと、選択肢の見極めに役立つ。
            </p>
          </div>
        </section>

        {/* 6. 通気・安全装置 */}
        <section className={shared.section}>
          <h2>通気・安全装置</h2>
          <div className={shared.bandCard}>
            <p>
              地下タンクは、温度変化などによって内部の液体や空気が膨張・収縮し、タンク内の<strong>圧力（内圧）が変化</strong>する。そのため、内圧を適切に保つ<strong>通気管または安全装置</strong>と、漏えい時に早期発見するための<strong>漏えい検知設備</strong>を備える。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">通気・安全装置</caption>
              <colgroup>
                <col className={styles.colEquipment} />
                <col className={styles.colSafeStandard} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>設備</th>
                  <th scope="col">基準</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>通気管・安全装置</th>
                  <td>
                    タンクの内圧を適切に保つため、<strong>通気管または安全装置</strong>
                    （圧力・真空弁など）のいずれかを設ける。
                    <br />
                    通気管の先端は<strong>屋外</strong>に出し、地上<strong>4m以上</strong>の高さとする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>漏えい検知</th>
                  <td>
                    タンク又はその周囲に<strong>漏えい検知設備</strong>を設け、漏えいを<strong>早期に把握</strong>できるようにする。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                地下タンクには、必ず<strong>通気管または安全装置</strong>のいずれかを設ける（両方必須ではない）。
              </li>
              <li>通気管の先端は<strong>屋外・地上4m以上</strong>。屋内の天井付近などは誤り。</li>
              <li>
                <strong>漏えい検知設備</strong>は、タンクまたはその周囲に設け、漏えいを「早く気付く」ための設備である点をおさえる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「通気管<strong>および</strong>安全装置を設けることを要する」という<strong>両方必須</strong>の書き方は誤り。正しくは<strong>通気管または安全装置</strong>のいずれかでよい。
              </li>
              <li>
                「通気管の先端を屋内の高い位置に設ける」など、<strong>屋外・地上4m</strong>から外れる表現は×。
              </li>
            </ul>
          </div>
        </section>

        {/* 7. 漏えい検知の方式（A〜D別） */}
        <section className={shared.section}>
          <h2>漏えい検知の方式（A〜D別）</h2>
          <div className={shared.bandCard}>
            <p>
              漏えい検知の方法は、タンクタイプによって<strong>「検査孔」方式</strong>か<strong>「自動検知装置」方式</strong>のどちらを採用するかが決まっている。
            </p>
            <p>
              A〜Dの組合せは、<strong>表の○と—の位置関係</strong>をそのまま穴埋めにする問題が多いので、確実に押さえておく。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">漏えい検知の方式（A〜D別）</caption>
              <colgroup>
                <col className={styles.colTankType} />
                <col className={styles.colInspectionHole} />
                <col className={styles.colInspectionEquipment} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>タンクタイプ</th>
                  <th scope="col">漏えい<strong>検査孔</strong>（4か所以上）</th>
                  <th scope="col">自動<strong>検知装置</strong>（警報機能）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    A：二重殻タンク以外
                    <br />
                    （タンク室設置）
                  </th>
                  <td>必要（○）</td>
                  <td>—</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    B：二重殻タンク
                    <br />
                    （SS/SF/FF・タンク室設置）
                  </th>
                  <td>—</td>
                  <td>必要（○）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    C：二重殻タンク
                    <br />
                    （SS/SF/FF・直接埋設）
                  </th>
                  <td>—</td>
                  <td>必要（○）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    D：漏れ防止構造タンク
                    <br />
                    （被覆直接埋設）
                  </th>
                  <td>必要（○）</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>
                <strong>A・D：</strong>一重殻タンク／漏れ防止構造タンクは<strong>検査孔方式</strong>（○／—）。
              </li>
              <li>
                <strong>B・C：</strong>二重殻タンクは<strong>自動検知装置方式</strong>（—／○）。
              </li>
              <li>
                覚えるときは<strong>「一重殻系（A・D）＝検査孔」「二重殻系（B・C）＝自動検知」</strong>のセットで整理する。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 8. 注入・計量・接地 */}
        <section className={shared.section}>
          <h2>注入・計量・接地</h2>
          <div className={shared.bandCard}>
            <p>
              地下タンクへの注入・計量では、<strong>数量の把握・漏えい防止・静電気火花の防止</strong>がポイントになる。ここでは、そのために必要な設備の配置とルールを整理する。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>注入まわりの基準</h3>
            <ul className={shared.compact}>
              <li>
                <strong>計量装置：</strong>タンク内の危険物の量を<strong>自動表示</strong>できる装置を設ける。
              </li>
              <li>
                <strong>注入口：</strong>必ず<strong>屋外</strong>に設ける。
                <br />
                ホースや配管と<strong>確実に結合</strong>でき、危険物が漏えいしない構造とし、使用しないときは<strong>弁またはふた</strong>で閉じる。
              </li>
              <li>
                <strong>静電気対策：</strong>ガソリン・ベンゼン等、静電気災害のおそれがある液体では、注入口付近に<strong>接地電極</strong>を設け、静電気を大地に逃がす。
              </li>
              <li>
                <strong>配管：</strong>地下タンクの<strong>配管はタンク頂部</strong>に取り付ける。（側面や底からの配管は×）
              </li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>消火設備の注意点</h3>
            <ul className={shared.compact}>
              <li>
                地下タンク貯蔵所には、<strong>第5種消火設備を2個以上</strong>設置する。（1個だけでは基準を満たさない）
              </li>
            </ul>
          </div>
        </section>

        {/* 9. B. 二重殻タンク（タンク室設置） */}
        <section className={shared.section}>
          <h2>B. 地盤面下のタンク室に設置する二重殻タンク（SS・SF・FF）</h2>
          <div className={shared.bandCard}>
            <p>
              Bは、二重殻タンク（SS／SF／FF）を地盤面下に設けた<strong>タンク室の中に設置</strong>するタイプである。Aと同じく「タンク室タイプ」だが、<strong>漏えい検知は二重殻の検知層を利用する自動検知装置方式</strong>になる点が特徴である。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <ul className={shared.compact}>
              <li>
                <strong>設置形態：</strong>地盤面下の<strong>タンク室</strong>に、二重殻タンク（SS／SF／FF）を設置する。
                <br />
                数値基準（相互間隔1m／特例0.5m、通気管先端4m、頂部0.6mなど）は<strong>Aタイプと同じ</strong>。
              </li>
              <li>
                <strong>漏えい検知：</strong>二重殻の<strong>検知層（すき間部分）</strong>を利用する<strong>漏えい検知装置</strong>を設ける。
                <br />
                漏えいを検知すると<strong>警報が鳴り、容易にリセットできない</strong>などの要件を満たす自動検知装置方式となる。
              </li>
              <li>
                <strong>外面保護：</strong>二重殻タンクであっても、構造に応じた防食被覆などの<strong>外面保護</strong>を行い、関連する告示・運用基準に適合させる。
              </li>
            </ul>
          </div>

          <h3>二重殻の区分と典型</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">二重殻の区分と典型</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colShellOverview} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">概要</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>SS</th>
                  <td>STEEL &amp; STEEL（内側も外側も<strong>鋼</strong>の二重殻タンク）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>SF</th>
                  <td>STEEL &amp; FRP（内側<strong>鋼</strong>＋外側<strong>FRP</strong>の二重殻タンク）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>FF</th>
                  <td>FRP &amp; FRP（内側も外側も<strong>FRP</strong>の二重殻タンク）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>※ SS／SF／FF は、タンク室設置（B）・直接埋設（C）の<strong>どちらの二重殻タンクでも使用される区分</strong>である。</p>
        </section>

        {/* 10. C. 二重殻タンク（直接埋設） */}
        <section className={shared.section}>
          <h2>C. 地盤面下に直接埋設する二重殻タンク（SS・SF・FF）</h2>
          <div className={shared.bandCard}>
            <p>
              Cは、二重殻タンク（SS／SF／FF）を<strong>地盤面下に直接埋設</strong>するタイプである。Bのような<strong>タンク室は設けず</strong>、その代わりに<strong>二重殻＋漏えい検知装置</strong>の組合せで安全性を確保する。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <ul className={shared.compact}>
              <li>
                <strong>設置形態：</strong>二重殻タンク（SS／SF／FF）を<strong>直接埋設</strong>する。（タンク室は設けない）
              </li>
              <li>
                <strong>漏えい検知：</strong>二重殻の<strong>検知層（すき間部分）</strong>に対する<strong>漏えい検知装置</strong>で常時監視・警報を行う。
                <br />
                複数基を同じ装置で監視する場合は、<strong>どのタンクで漏えいが起きたか特定できること</strong>が必要。
              </li>
              <li>
                <strong>外面保護：</strong>二重殻の構造・被覆仕様に応じて外面保護を行う。
                <br />
                検知に用いる液体などで<strong>外殻の樹脂が侵されない</strong>ことなどの要件を満たす。
              </li>
            </ul>
          </div>

          <p>※ 相互間隔・通気管の高さ・標識・掲示などの<strong>共通の数値基準</strong>は、A・Bタイプと同様に整理する。</p>
        </section>

        {/* 11. 製造所等の定期点検に関する指導指針の整備について */}
        <section className={shared.section}>
          <h2>製造所等の定期点検に関する指導指針の整備について</h2>
          <div className={shared.bandCard}>
            <p>地下タンク貯蔵所では、<strong>定期点検</strong>により漏えい・腐食・損傷などを早期に発見することが求められる。</p>
            <p>
              点検指針では、<strong>どの部分を・どのような方法で確認するか</strong>が項目ごとに示されている。ここでは、代表的な点検項目をまとめておく。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">製造所等の定期点検に関する指導指針の整備について</caption>
              <colgroup>
                <col className={styles.colInspectionItems} />
                <col className={styles.colInspectionDetails} />
                <col className={styles.colInspectionMethod} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>点検項目</th>
                  <th scope="col">点検内容</th>
                  <th scope="col">点検方法</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>上部スラブ</th>
                  <td>亀裂・崩没・不等沈下の有無</td>
                  <td>目視</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>タンク本体</th>
                  <td>漏えいの有無</td>
                  <td>ガス又は液体等で加圧し、漏えいの有無を確認</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>通気管</th>
                  <td>腐食・損傷・目詰まりの有無</td>
                  <td>目視</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>各計測装置</th>
                  <td>損傷の有無・作動状況・計量口のふたの状態</td>
                  <td>目視</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    漏えい
                    <br />
                    検査孔
                  </th>
                  <td>変形・損傷・土砂等の堆積の有無</td>
                  <td>検査棒等により確認し、併せて漏えいの有無も確認</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>注入口</th>
                  <td>変形・損傷の有無</td>
                  <td>目視</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    注入口
                    <br />
                    ピット
                  </th>
                  <td>亀裂・損傷・滞水・土砂等の堆積の有無</td>
                  <td>目視</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>標識／掲示板</th>
                  <td>取付状況・記載事項の適否、損傷・汚損の有無</td>
                  <td>目視</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>消火器</th>
                  <td>位置・設置数、外観的機能の適否</td>
                  <td>目視</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>タンク本体：</strong>
                <strong>ガス又は液体等で加圧して漏えい確認</strong>する点がポイント。
              </li>
              <li>
                <strong>漏えい検査孔：</strong>
                <strong>検査棒等で確認＋漏えいの有無も併せて確認</strong>する。
              </li>
              <li>
                それ以外の項目（上部スラブ・通気管・注入口など）は<strong>基本は目視</strong>で点検する。
              </li>
            </ul>
          </div>

          <p>
            ※ その他、配管、<strong>バルブ</strong>等、ポンプ設備、電気設備、警報装置についても点検項目が定められている（本ページでは割愛）。
          </p>
        </section>

        {/* 12. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <UndergroundTankStorageStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}