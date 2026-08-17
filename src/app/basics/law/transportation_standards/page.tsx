import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import TransportationStandardsQuiz from './TransportationStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 36節：運搬の基準',
  description:
    '危険物乙4 第1章36節。運搬の基準として運搬容器の材質・構造・最大容積、危険等級Ⅰ〜Ⅲと適合容器、積載方法の原則と例外を整理。固体95%以下・液体98%以下の収納率、55℃での空間容積（ウレージ）、類別ごとの火気厳禁・禁水・空気接触厳禁などの表示事項を収録。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/transportation_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 36節：運搬の基準',
    description:
      '危険物乙4 第1章36節。運搬の基準として運搬容器の材質・構造・最大容積、危険等級Ⅰ〜Ⅲと適合容器、積載方法の原則と例外を整理。固体95%以下・液体98%以下の収納率、55℃での空間容積（ウレージ）、類別ごとの火気厳禁・禁水・空気接触厳禁などの表示事項を収録。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/transportation_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 36節：運搬の基準',
    description:
      '危険物乙4 第1章36節。運搬の基準として運搬容器の材質・構造・最大容積、危険等級Ⅰ〜Ⅲと適合容器、積載方法の原則と例外を整理。固体95%以下・液体98%以下の収納率、55℃での空間容積（ウレージ）、類別ごとの火気厳禁・禁水・空気接触厳禁などの表示事項を収録。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function TransportationStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '36節：運搬の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 運搬の基準 */}
        <section className={shared.section}>
          <h2>運搬の基準</h2>
          <div className={shared.bandCard}>
            <p>
              危険物の運搬とは、トラックなどの<strong>車両で危険物を移動させること</strong>をいう。この運搬に関する<strong>技術上の基準（運搬の基準）</strong>は、<strong>指定数量未満</strong>の危険物にも<strong>適用</strong>される。
            </p>
            <p>なお、危険物の運搬には<strong>届出や許可の義務はない</strong>。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>危険物の運搬＝トラックなどの<strong>車両で危険物を移動させること</strong>。</li>
              <li>
                <strong>運搬の基準</strong>は、<strong>指定数量未満</strong>の危険物にも適用される。
              </li>
              <li>運搬そのものに<strong>届出・許可は不要</strong>。</li>
            </ul>
          </div>
        </section>

        {/* 2. 運搬容器：材質・構造・最大容積 */}
        <section className={shared.section}>
          <h2>運搬容器：材質・構造・最大容積</h2>
          <div className={shared.bandCard}>
            <p>
              危険物は、運搬の際には<strong>必ず容器に収納して運搬</strong>しなければならない。危険物の<strong>性状・危険性・数量</strong>に応じた容器の<strong>材質・構造・最大容積</strong>は、<strong>政令</strong>で定められている。
            </p>
          </div>

          <h3>材質</h3>
          <div className={shared.bandCard}>
            <p>運搬容器の<strong>材質</strong>として、次のようなものが認められている。</p>
            <ul className={shared.compact}>
              <li>鋼板、アルミニウム板、ぶりき板、ガラス、金属板</li>
              <li>紙、プラスチック、ファイバ板、ゴム板</li>
              <li>合成繊維、麻、木、陶磁器</li>
            </ul>
          </div>

          <h3>構造</h3>
          <div className={shared.bandCard}>
            <p>
              容器は<strong>堅固</strong>で<strong>容易に破損しない</strong>こと、また<strong>口部から内容物が漏れない構造</strong>であることが必要である。
            </p>
            <p>
              容器の<strong>構造</strong>および<strong>最大容積</strong>は、容器の区分ごとに<strong>細かく規定</strong>されている。
            </p>
          </div>

          <h3>性能試験</h3>
          <div className={shared.bandCard}>
            <p>容器は、告示で定められた<strong>性能試験に適合</strong>している必要がある。</p>
            <dl className={styles.defList}>
              <dt><strong>機械荷役構造を有しない容器</strong></dt>
              <dd>落下試験／気密試験／内圧試験／積み重ね試験</dd>
              <dt><strong>機械荷役構造を有する容器</strong></dt>
              <dd>
                落下試験／気密試験／内圧試験／積み重ね試験／底部持ち上げ試験／頂部つり上げ試験／裂け伝播試験／引き落とし試験／引き起こし試験
              </dd>
            </dl>
            <p className={shared.muted}>
              ※ <strong>機械荷役構造</strong>…フォークリフトやクレーンでつり上げ・持ち上げができるようにした構造のこと。
            </p>
          </div>

          <h3>危険等級と容器の適合</h3>
          <div className={shared.bandCard}>
            <p>
              危険物は危険性の程度に応じて<strong>危険等級I・II・III</strong>に区分される。それぞれの危険等級ごとに、<strong>危則別表第3の2</strong>に基づいて使用できる容器（適合容器）が定められている。
            </p>
            <p>例：灯油・軽油（危険等級III） → ガラス容器、プラスチック容器、金属製容器 など</p>
          </div>

          <h3>特例（内装容器＋外装容器）</h3>
          <div className={shared.bandCard}>
            <p>
              第4類のうち、次のものは<strong>内装容器＋外装容器</strong>の組合せを条件に、特例として運搬容器と認められる。
            </p>
            <ul className={shared.compact}>
              <li>
                <strong>第4類の第3石油類・第4石油類・動植物油類</strong>：<em>プラスチックフィルム袋</em>を<strong>内装容器</strong>とし、<em>木箱・プラスチック箱・ファイバ板箱</em>などの<strong>外装容器</strong>に収納したもの
              </li>
              <li>
                <strong>第4類のアルコール類</strong>：<em>最大容積1L以下のプラスチックフィルム袋</em>を<strong>内装容器</strong>とし、<em>ファイバ板箱（不活性の緩衝材入りに限る）</em>を<strong>外装容器</strong>としたもの
              </li>
            </ul>
            <p className={shared.muted}>※ 「内装容器」は中身を入れる袋やびん、「外装容器」はそれをまとめて入れる箱のイメージ。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>運搬基準</strong>は<strong>指定数量未満</strong>の危険物にも適用される。
              </li>
              <li>
                容器の<strong>性能試験</strong>は「機械荷役構造の有無」で内容が変わる。有する容器は<strong>試験が増える</strong>ことを押さえる。
              </li>
              <li>
                第4類の<strong>第3・第4石油類・動植物油類・アルコール類</strong>には、<strong>内装容器＋外装容器</strong>の特例がある。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「運搬基準は<strong>指定数量以上</strong>だけに適用」とする誤った記述に注意（正しくは<strong>未満にも適用</strong>）。
              </li>
              <li>
                危険物の運搬そのものに<strong>届出・許可は不要</strong>。「運搬には許可が必要」と書かれていたら×。
              </li>
              <li>
                アルコール類の特例は<strong>「最大容積1L以下」のプラスチックフィルム袋</strong>が条件。「2L」「5L」など数字だけ変えた選択肢は要チェック。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 危険等級 */}
        <section className={shared.section}>
          <h2>危険等級</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">危険等級</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colGrade} />
                <col className={styles.colItemName} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>類別</th>
                  <th scope="col">等級</th>
                  <th scope="col">品名等</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory1}`}>第1類</span>
                  </th>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>I</span></td>
                  <td>第1種酸化性固体</td>
                </tr>
                <tr>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>II</span></td>
                  <td>第2種酸化性固体</td>
                </tr>
                <tr>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>III</span></td>
                  <td>第3種酸化性固体</td>
                </tr>

                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory2}`}>第2類</span>
                  </th>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>II</span></td>
                  <td>
                    第1種可燃性固体（例：硫化りん、<strong>赤りん</strong>、<strong>硫黄</strong>など）
                  </td>
                </tr>
                <tr>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>III</span></td>
                  <td>第2種可燃性固体（II以外のもの）</td>
                </tr>

                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory3}`}>第3類</span>
                  </th>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>I</span></td>
                  <td>
                    第1種自然発火性・禁水性物質（例：<strong>黄りん</strong>、アルキルアルミニウム、アルキルリチウム、<strong>カリウム</strong>、<strong>ナトリウム</strong>など）
                  </td>
                </tr>
                <tr>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>II</span></td>
                  <td>第2種・第3種自然発火性・禁水性物質（I以外のもの）</td>
                </tr>

                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory4}`}>第4類</span>
                  </th>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>I</span></td>
                  <td>特殊引火物</td>
                </tr>
                <tr>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>II</span></td>
                  <td>
                    <strong>第1石油類</strong>、<strong>アルコール類</strong>
                  </td>
                </tr>
                <tr>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>III</span></td>
                  <td>第2〜4石油類・動植物油類</td>
                </tr>

                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory5}`}>第5類</span>
                  </th>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>I</span></td>
                  <td>第1種自己反応性物質</td>
                </tr>
                <tr>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>II</span></td>
                  <td>第2種自己反応性物質</td>
                </tr>

                <tr>
                  <th scope="rowgroup" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory6}`}>第6類</span>
                  </th>
                  <td className={styles.gradeCell}><span className={styles.gradeBadge}>I</span></td>
                  <td>すべて（例：過塩素酸、過酸化水素、硝酸）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. 積載方法：容器への収納方法 */}
        <section className={shared.section}>
          <h2>積載方法：容器への収納方法</h2>
          <div className={shared.bandCard}>
            <p>
              危険物を車両に積載するときは、<strong>どのような容器に・どのくらいの割合で収納するか</strong>が決められている。代表的なルールを、原則と例外に分けて整理しておく。
            </p>
          </div>

          <ol className={styles.rulesList}>
            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgePrinciple}`}>原則</span>
                危険物は運搬容器に収納して積載します。
              </h3>
              <p className={styles.ruleBody}>
                危険物は、原則として<strong>運搬容器に収納</strong>して積載する。むき出しのまま積むことはできない。
              </p>
              <div className={styles.ruleException}>
                <span className={`${styles.badge} ${styles.badgeException}`}>例外</span>
                <ul className={shared.compact}>
                  <li>
                    <strong>塊状の硫黄等</strong>を運搬するために積載する場合。
                  </li>
                  <li>
                    同一の敷地内で、<strong>製造所等から同一敷地内の他の製造所等へ</strong>運搬するために積載する場合。
                  </li>
                </ul>
              </div>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgePrinciple}`}>原則</span>
                容器は密封して収納します。
              </h3>
              <p className={styles.ruleBody}>
                温度変化などによっても<strong>内容物が漏れないよう密封</strong>して収納する。
              </p>
              <div className={styles.ruleException}>
                <span className={`${styles.badge} ${styles.badgeException}`}>例外</span>
                <p>
                  温度変化等で<strong>ガスが発生して内圧が上昇</strong>するおそれがある場合は、<strong>毒性や引火性の危険がないときに限り</strong>、<strong>ガス抜き口</strong>（危険物の漏えい・他物質の浸透を防止する構造）を設けた運搬容器に収納することができる。
                </p>
              </div>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgePrinciple}`}>原則</span>
                危険物の性質に適合する容器材質を用います。
              </h3>
              <p className={styles.ruleBody}>
                収納する危険物と<strong>危険な反応を起こさない</strong>など、当該危険物の<strong>性質に適合する材質</strong>の運搬容器を使用する。
              </p>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgePrinciple}`}>原則</span>
                固体は容器内容積の95％以下で収納します。
              </h3>
              <p className={styles.ruleBody}>
                <strong>固体</strong>の危険物は、原則として運搬容器の内容積の<strong>95％以下</strong>の収納率で収納する。
              </p>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgePrinciple}`}>原則</span>
                液体は98％以下で、55℃でも漏れない空間を確保します。
              </h3>
              <p className={styles.ruleBody}>
                <strong>液体</strong>の危険物は、運搬容器の内容積の<strong>98％以下</strong>で収納し、<strong>55℃</strong>においても漏れないよう、十分な<strong>空間容積（ウレージ）</strong>を確保する。
              </p>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgeProhibit}`}>禁止</span>
                ひとつの外装容器に異なる類の混載はできません。
              </h3>
              <p className={styles.ruleBody}>
                <strong>ひとつの外装容器</strong>には、原則として<strong>類を異にする危険物</strong>を収納してはならない。
              </p>
            </li>
          </ol>
        </section>

        {/* 5. 積載方法：容器表示 */}
        <section className={shared.section}>
          <h2>積載方法：容器表示</h2>
          <div className={shared.bandCard}>
            <p>
              危険物は、原則として<strong>運搬容器の外部</strong>に、次の事項を<strong>表示</strong>して積載する。
            </p>
          </div>

          <h3>運搬容器の外側に表示すべき事項</h3>
          <div className={shared.bandCard}>
            <p>運搬容器の外側に表示すべき事項は次のとおりである。</p>
            <ol className={styles.orderedCompact}>
              <li>
                <strong>危険物の品名</strong>
              </li>
              <li>危険等級</li>
              <li>化学名</li>
              <li>
                （第4類のみ）水溶性のものは<strong>「水溶性」</strong>
              </li>
              <li>危険物の数量</li>
              <li>
                収納する危険物に応じた<strong>注意事項</strong>
              </li>
            </ol>
          </div>

          <details className={styles.note}>
            <summary>補足：機械荷役用の運搬容器</summary>
            <p>
              機械により荷役する構造を有する運搬容器の外部には、上記に加えて<strong>製造年月日</strong>および<strong>製造者の名称</strong>なども表示しなければならない。
            </p>
          </details>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 6. 収納する危険物に応じた注意事項 */}
        <section className={shared.section}>
          <h2>収納する危険物に応じた注意事項</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">収納する危険物に応じた注意事項</caption>
              <colgroup>
                <col className={styles.colClassWide} />
                <col className={styles.colName} />
                <col className={styles.colNote} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>類別等</th>
                  <th scope="col">品名</th>
                  <th scope="col">注意事項</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory1}`}>
                      第1類
                      <br />
                      酸化性固体
                    </span>
                  </th>
                  <th scope="row">
                    アルカリ金属の過酸化物／
                    <br />
                    これらの含有品
                  </th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipFire}`}>火気・衝撃注意</span>
                    <span className={`${styles.chip} ${styles.chipWater}`}>禁水</span>
                    <span className={`${styles.chip} ${styles.chipContact}`}>可燃物接触注意</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">その他のもの</th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipFire}`}>火気・衝撃注意</span>
                    <span className={`${styles.chip} ${styles.chipContact}`}>可燃物接触注意</span>
                  </td>
                </tr>

                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory2}`}>
                      第2類
                      <br />
                      可燃性固体
                    </span>
                  </th>
                  <th scope="row">
                    金属粉／マグネシウム／
                    <br />
                    鉄粉／これらの含有品
                  </th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipFire}`}>火気注意</span>
                    <span className={`${styles.chip} ${styles.chipWater}`}>禁水</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">引火性固体</th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipStrict}`}><strong>火気厳禁</strong></span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">その他のもの</th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipFire}`}>火気注意</span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory3}`}>
                      第3類
                      <br />
                      自然発火性物質
                    </span>
                  </th>
                  <th scope="row">すべて</th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipAir}`}>空気接触厳禁</span>
                    <span className={`${styles.chip} ${styles.chipStrict}`}>火気厳禁</span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory3}`}>
                      第3類
                      <br />
                      禁水性物質
                    </span>
                  </th>
                  <th scope="row">すべて</th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipWater}`}>禁水</span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory4}`}>
                      第4類
                      <br />
                      引火性液体
                    </span>
                  </th>
                  <th scope="row">すべて</th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipStrict}`}><strong>火気厳禁</strong></span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory5}`}>
                      第5類
                      <br />
                      自己反応性物質
                    </span>
                  </th>
                  <th scope="row">すべて</th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipStrict}`}>火気厳禁</span>
                    <span className={`${styles.chip} ${styles.chipShock}`}>衝撃注意</span>
                  </td>
                </tr>

                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory6}`}>
                      第6類
                      <br />
                      酸化性液体
                    </span>
                  </th>
                  <th scope="row">すべて</th>
                  <td>
                    <span className={`${styles.chip} ${styles.chipContact}`}>可燃物接触注意</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <details className={styles.note}>
            <summary>補足：収納する危険物に応じた注意事項の注記</summary>
            <p>第1類のうち、アルカリ金属の過酸化物（過酸化カリウム・過酸化ナトリウムなど）は水と反応して酸素と熱を発生する。</p>
          </details>
        </section>

        {/* 7. 積載方法：積載時の注意事項 */}
        <section className={shared.section}>
          <h2>積載方法：積載時の注意事項</h2>

          <ol className={styles.rulesList}>
            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgePrinciple}`}>原則</span>
                落下・転倒・破損を防ぐように積載します。
              </h3>
              <p className={styles.ruleBody}>
                危険物が<strong>転落</strong>したり、危険物を収納した<strong>運搬容器が落下・転倒・破損</strong>しないように、確実に固定して積載する。
              </p>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgePrinciple}`}>原則</span>
                収納口は上向きで積載します。
              </h3>
              <p className={styles.ruleBody}>
                運搬容器は、<strong>収納口を上方</strong>に向けて積載する。
              </p>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgeRequire}`}>必須</span>
                日光の直射を避けるため遮光性の被覆で覆います。
              </h3>
              <p className={styles.ruleBody}>
                次の危険物は、日光の直射を避けるため<strong>遮光性の被覆</strong>で覆わなければならない。
              </p>
              <ul className={shared.compact}>
                <li>第1類の危険物</li>
                <li>
                  第3類のうち<strong>自然発火性物質</strong>
                </li>
                <li>
                  第4類のうち<strong>特殊引火物</strong>
                </li>
                <li>第5類の危険物</li>
                <li>第6類の危険物</li>
              </ul>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgeProhibit}`}>禁止</span>
                危険物と高圧ガスは混載できません。
              </h3>
              <p className={styles.ruleBody}>
                危険物と<strong>高圧ガス</strong>は、原則として<strong>混載してはならない</strong>。
              </p>
              <div className={styles.ruleException}>
                <span className={`${styles.badge} ${styles.badgeException}`}>例外</span>
                <p>
                  ただし、<strong>内容積が120L未満</strong>の容器に充てんされた高圧ガスについては、この限りではない。
                </p>
              </div>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgeProhibit}`}>禁止</span>
                同一車両で災害のおそれのある物品と混載しません。
              </h3>
              <p className={styles.ruleBody}>
                危険物は、同一車両で<strong>災害を発生させるおそれ</strong>のある物品を<strong>混載</strong>しない。
              </p>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgeRequire}`}>必須</span>
                第3類 自然発火性物質は空気に触れさせません。
              </h3>
              <p className={styles.ruleBody}>
                第3類危険物の<strong>自然発火性物質</strong>は、<strong>不活性ガスを投入して密封</strong>するなど、空気と接しないようにする。
              </p>
            </li>
          </ol>
        </section>

        {/* 8. 混載してはならない危険物（類別マトリクス） */}
        <section className={shared.section}>
          <h2>混載してはならない危険物（類別マトリクス）</h2>
          <div className={shared.bandCard}>
            <p>
              同一車両で類を異にする危険物を運搬するとき、次の組合せは<strong>混載不可</strong>である（対称・NG優先で正規化）。
              <br />
              <small>
                ※ <strong>指定数量の1/10以下</strong>の危険物には適用しない。
              </small>
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">類別マトリクス</caption>
              <colgroup>
                <col className={styles.colHead} />
                <col className={styles.colMatrix} />
                <col className={styles.colMatrix} />
                <col className={styles.colMatrix} />
                <col className={styles.colMatrix} />
                <col className={styles.colMatrix} />
                <col className={styles.colMatrix} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>類別</th>
                  <th scope="col">第1類</th>
                  <th scope="col">第2類</th>
                  <th scope="col">第3類</th>
                  <th scope="col">第4類</th>
                  <th scope="col">第5類</th>
                  <th scope="col">第6類</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第1類</th>
                  <td className={styles.matrixSelf}>—</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixOk}>可</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第2類</th>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixSelf}>—</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixOk}>可</td>
                  <td className={styles.matrixOk}>可</td>
                  <td className={styles.matrixNg}>不可</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第3類</th>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixSelf}>—</td>
                  <td className={styles.matrixOk}>可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixNg}>不可</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第4類</th>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixOk}>可</td>
                  <td className={styles.matrixOk}>可</td>
                  <td className={styles.matrixSelf}>—</td>
                  <td className={styles.matrixOk}>可</td>
                  <td className={styles.matrixNg}>不可</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第5類</th>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixOk}>可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixOk}>可</td>
                  <td className={styles.matrixSelf}>—</td>
                  <td className={styles.matrixNg}>不可</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第6類</th>
                  <td className={styles.matrixOk}>可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixNg}>不可</td>
                  <td className={styles.matrixSelf}>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.legend}>
            <span className={`${styles.pill} ${styles.pillOk}`}>可</span>：混載して差し支えありません。
            <br />
            <span className={`${styles.pill} ${styles.pillNg}`}>不可</span>：混載できません。
          </p>

          <ul className={shared.compact}>
            <li>
              上表の適用除外：<strong>指定数量の1/10以下</strong>の危険物。
            </li>
            <li>
              積み重ねは<strong>高さ3以下</strong>とする。
            </li>
          </ul>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                【適用範囲】運搬の基準は<strong>指定数量未満</strong>にもかかってくる。ただし運搬そのものには<strong>届出・許可はいらない</strong>。ここはセットで押さえておく。
              </li>
              <li>
                【収納率】収納率は<strong>固体95％以下・液体98％以下</strong>。さらに<strong>55℃でも漏れない空間容積（ウレージ）</strong>を取っておくイメージ。
              </li>
              <li>
                【容器の向き】運搬容器の<strong>収納口は必ず上向き</strong>で積む。上以外は全部アウト、くらいの感覚で覚えておく。
              </li>
              <li>
                【遮光】遮光性の被覆が必要なのは、<strong>第1類</strong>、<strong>第3類の自然発火性物質</strong>、<strong>第4類の特殊引火物</strong>、<strong>第5類</strong>、<strong>第6類</strong>のセット。「1・3自発火・4特引・5・6」でワンパックにしておく。
              </li>
              <li>
                【容器表示】第4類の水溶性はラベルに<strong>「水溶性」</strong>とちゃんと書く。<strong>機械荷役容器</strong>はさらに<strong>製造年月日・製造者名</strong>も追加表示、ここまでがフルセット。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                【容器性能試験】機械荷役容器は、ふつうの<strong>落下・気圧・内圧・積み重ね</strong>に加えて、<strong>底部持ち上げ／頂部つり上げ／裂け伝播／引き落とし／引き起こし</strong>までまとめて見られる。「こんなにやるのか…」くらいの長いセットとして覚えておくと迷わない。
              </li>
              <li>
                【混載マトリクス】例外で<strong>「混載可」</strong>になるのは<strong>1⇔6・2⇔5・3⇔4・2⇔4・4⇔5</strong>だけ。それ以外は<strong>全部「不可」側</strong>と決め打ちしておくと早い。さらに<strong>指定数量の1/10以下</strong>の危険物はこの表そのものの<strong>適用外</strong>になる点もひっかけポイント。
              </li>
              <li>
                【その他の禁止・例外】危険物と<strong>高圧ガス</strong>は<strong>原則いっしょに積まない（混載不可）</strong>。ただし<strong>内容積120L未満容器の高圧ガス</strong>だけは例外パターンで混載OK。それと<strong>積み重ねは高さ3以下</strong>まで、という数字もセットで覚えておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 9. 運搬方法 */}
        <section className={shared.section}>
          <h2>運搬方法</h2>

          <ul className={styles.rulesList}>
            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgePrinciple}`}>原則</span>
                摩擦・動揺を著しく生じさせないように運搬します。
              </h3>
              <p className={styles.ruleBody}>
                危険物または危険物を収納した運搬容器が、<strong>著しく摩擦</strong>または<strong>動揺</strong>を起こさないように運搬する。荷締め・滑り止め・当て木などで確実に固定する。
              </p>
            </li>

            <li className={styles.ruleItem}>
              <h3 className={styles.ruleTitle}>
                <span className={`${styles.badge} ${styles.badgeRequire}`}>必須</span>
                指定数量以上を車両で運搬するときの規制
              </h3>
              <ol className={styles.orderedCompact}>
                <li>
                  <strong>標識の掲示</strong>：車両の<strong>前後の見やすい箇所</strong>に掲げる。
                  <figure className={shared.formulaCard}>
                    <img
                      src="/images/basics/law/danger_transport.svg"
                      alt="危険物を運搬するときに掲げる標識の例"
                      className={shared.circuitSvg}
                      width={320}
                      height={320}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className={shared.figureCaption}>
                      <p>
                        仕様：<strong>一辺0.3m</strong>の<strong>黒色の板</strong>に、<strong>黄色の反射</strong>塗料（又は反射材料）で<strong>「危」</strong>と表示したもの。
                      </p>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <strong>一時停止時の安全確保</strong>：積替え・休憩・故障などで停止するときは、<strong>安全な場所を選定</strong>し、運搬する<strong>危険物の保安</strong>に注意する。
                </li>
                <li>
                  <strong>消火設備</strong>：運搬する危険物に<strong>適合する消火設備</strong>を備える。
                </li>
              </ol>
            </li>
          </ul>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>運搬方法の注意点</h3>
            <ul className={shared.compact}>
              <li>
                運搬中に<strong>漏えいなどで災害のおそれ</strong>があると感じたときは、まず可能な範囲で<strong>応急措置</strong>をとり、続けて最寄りの<strong>消防機関等へ通報</strong>する。
              </li>
              <li>
                複数の品名を積むときは、各危険物の数量を<strong>それぞれの指定数量で割り</strong>、その<strong>合計が1以上</strong>になったら<strong>「指定数量以上」</strong>とみなす（合算規定）。
              </li>
              <li>
                <strong>運搬</strong>とは、容器に詰めた危険物を<strong>車両で運ぶ行為</strong>である。原則として<strong>危険物取扱者の同乗は不要</strong>だが、<strong>積み卸し</strong>で指定数量以上を扱う場合は、取扱者が<strong>自ら作業を行うか立会い</strong>をしなければならない。
              </li>
              <li>
                <strong>移送</strong>とは、移動タンク貯蔵所（タンクローリー）での輸送を指し、<strong>危険物取扱者の同乗が必要</strong>である。「運搬」との違いを混同しないようにする。
              </li>
              <li>
                指定数量の<strong>1/10以下</strong>の危険物は、このページの<strong>混載マトリクスの対象外</strong>だが、<strong>運搬の基準そのものは数量にかかわらず適用</strong>される。
              </li>
              <li>
                容器の<strong>積み重ねは高さ3以下</strong>（おおむね<strong>3段まで</strong>）にとどめて積載する。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                【適用範囲】<strong>運搬の基準は指定数量に関係なく全部にかかる</strong>。少なくてもアウトラインは同じ。ただし<strong>運搬そのものは届出・許可いらない</strong>、このセットで覚えておく。
              </li>
              <li>
                【収納率＆向き】<strong>固体95％／液体98％＋55℃</strong>がド定番。容器の<strong>空間容積をきちんと残す</strong>＋<strong>収納口は上向き</strong>で積む、ここまでワンセット。
              </li>
              <li>
                【遮光】<strong>遮光性の被覆が必須</strong>なのは<strong>1類・3類（自然発火性）・4類（特殊引火物）・5類・6類</strong>の5グループ。並びでゴロっと覚えてしまう。
              </li>
              <li>
                【容器表示】外側表示は「<strong>品名／等級／化学名／数量／注意事項</strong>」＋<strong>第4類だけ「水溶性」</strong>を追加。さらに<strong>機械荷役容器</strong>だけは<strong>製造年月日・製造者名</strong>がオマケで付く。
              </li>
              <li>
                【指定数量以上の運搬】<strong>「危」標識</strong>（黒板0.3m角＋黄色反射）を<strong>車両の前後</strong>に掲げる／危険物に合った<strong>消火設備</strong>を積む／停止するときは<strong>安全な場所</strong>を選ぶ。この<strong>三点セット</strong>を落とさない。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                【混載マトリクス】テーブルは<strong>ほとんどNG、OKはごく一部</strong>って世界観だけキープ。細かいペアは上の「出る出る」でチェックするイメージ。本番のひっかけは<strong>「指定数量1/10以下なのに表のNGを当てはめてくる」</strong>とか、<strong>「高さ3以下の積み重ねルールまで外してくる」</strong>あたりを狙ってくる。
              </li>
              <li>
                【運搬と移送】<strong>運搬＝容器入り危険物を車で運ぶだけ</strong>なら、原則<strong>取扱者の同乗はいらない</strong>のが基本ライン。でも<strong>積み卸しが指定数量以上</strong>に触れた瞬間、<strong>取扱者が自分でやるか立ち会う</strong>ことが条件になる。いっぽう<strong>移送（タンクローリー）</strong>は<strong>最初から同乗必須</strong>。ここを入れ替えた選択肢は、見た瞬間にバッサリ切り捨てたいポイント。
              </li>
              <li>
                【数量の合算ルール】複数品名をまとめて運ぶときは、それぞれの数量を<strong>各指定数量で割って足し算</strong>、合計<strong>1以上なら指定数量以上扱い</strong>。「足し算なのに平均を取らせる」「指定数量じゃなくて容量で割らせる」みたいな書き換えは全部ひっかけ候補。
              </li>
            </ul>
          </div>
        </section>

        {/* 10. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <TransportationStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}