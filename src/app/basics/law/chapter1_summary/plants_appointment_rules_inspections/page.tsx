import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節-7：製造所等における選任・予防規定・定期点検',
  description:
    '危険物乙4 第1章41節-7。製造所等における危険物保安監督者・危険物施設保安員・危険物保安統括管理者・自衛消防組織・予防規定・定期点検の要否を整理。製造所・貯蔵所（7区分）・取扱所（4区分）ごとに必置／条件付き／不要を一覧で確認でき、指定数量の倍数による条件も解説。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/plants_appointment_rules_inspections',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節-7：製造所等における選任・予防規定・定期点検',
    description:
      '危険物乙4 第1章41節-7。製造所等における危険物保安監督者・危険物施設保安員・危険物保安統括管理者・自衛消防組織・予防規定・定期点検の要否を整理。製造所・貯蔵所（7区分）・取扱所（4区分）ごとに必置／条件付き／不要を一覧で確認でき、指定数量の倍数による条件も解説。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/plants_appointment_rules_inspections',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節-7：製造所等における選任・予防規定・定期点検',
    description:
      '危険物乙4 第1章41節-7。製造所等における危険物保安監督者・危険物施設保安員・危険物保安統括管理者・自衛消防組織・予防規定・定期点検の要否を整理。製造所・貯蔵所（7区分）・取扱所（4区分）ごとに必置／条件付き／不要を一覧で確認でき、指定数量の倍数による条件も解説。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function PlantsAppointmentRulesInspectionsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-7：製造所等における選任・予防規定・定期点検' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 7. 製造所等における選任／予防規定／定期点検 */}
        <section className={shared.section}>
          <h2>7. 製造所等における選任／予防規定／定期点検</h2>
          <div className={shared.bandCard}>
            <p>このページの表では、列見出しを読みやすくするために次の略称を使っている。</p>
            <ul className={shared.compact}>
              <li>
                <strong>保安監督者</strong>：危険物保安監督者の選任
              </li>
              <li>
                <strong>施設保安員</strong>：危険物施設保安員の選任
              </li>
              <li>
                <strong>統括／消防</strong>：危険物保安統括管理者の選任／自衛消防組織の設置
              </li>
              <li>
                <strong>予防規定</strong>：予防規定の作成
              </li>
              <li>
                <strong>定期点検</strong>：定期点検の実施
              </li>
            </ul>

            <h3>共通凡例</h3>
            <ul className={shared.compact}>
              <li>必置 ＝ ◎</li>
              <li>
                条件付きで必要 ＝ ○
                <br />
                <small>（括弧内は指定数量の倍数などの目安）</small>
              </li>
              <li>不要 ＝ −</li>
            </ul>
            <p>※給油取扱所の予防規定は、法令・条例に基づき必置となる。</p>
          </div>
        </section>

        {/* ① 製造所 */}
        <section className={shared.section}>
          <h3>製造所における選任／予防規定／定期点検</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">製造所における選任・予防規定・定期点検</caption>
              <colgroup>
                <col className={styles.colNull} />
                <col className={styles.colSupervisor} />
                <col className={styles.colSecurityGuard} />
                <col className={styles.colAdministrator} />
                <col className={styles.colPreventiveProvision} />
                <col className={styles.colRegularInspection} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}></th>
                  <th scope="col">保安監督者</th>
                  <th scope="col">施設保安員</th>
                  <th scope="col">統括／消防</th>
                  <th scope="col">予防規定</th>
                  <th scope="col">定期点検</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>製造所</th>
                  <td>◎</td>
                  <td>
                    ○
                    <br />
                    <small>（100以上）</small>
                  </td>
                  <td>
                    ○
                    <br />
                    <small>（3,000以上）</small>
                  </td>
                  <td>
                    ○
                    <br />
                    <small>（10以上）</small>
                  </td>
                  <td>
                    ○
                    <br />
                    <small>（10以上または地下タンク）</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <small>※（）内の数字は指定数量の倍数</small>
          </p>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ol className={styles.orderedCompact}>
              <li>（地下タンク）という表記は「地下タンクを有するもの」という意味。</li>
              <li>危険物保安監督者は基本的に◎。○は施設の細かい区分で変わる。</li>
              <li>危険物保安統括管理者が必要な施設は、自衛消防組織も必置。</li>
              <li>（※）自家用の屋外給油取扱所は対象外。</li>
            </ol>
          </div>
        </section>

        {/* ② 貯蔵所 */}
        <section className={shared.section}>
          <h3>貯蔵所における選任／予防規定／定期点検</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">貯蔵所における選任・予防規定・定期点検</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colSupervisors} />
                <col className={styles.colSecurityGuards} />
                <col className={styles.colAdministrators} />
                <col className={styles.colStorageProvisions} />
                <col className={styles.colStorageInspection} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">保安監督者</th>
                  <th scope="col">施設保安員</th>
                  <th scope="col">統括／消防</th>
                  <th scope="col">予防規定</th>
                  <th scope="col">定期点検</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋内貯蔵所</th>
                  <td>○</td>
                  <td>–</td>
                  <td>–</td>
                  <td>
                    ○
                    <br />
                    <small>（150以上）</small>
                  </td>
                  <td>
                    ○
                    <br />
                    <small>（150以上）</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    屋外タンク
                    <br />
                    貯蔵所
                  </th>
                  <td>◎</td>
                  <td>–</td>
                  <td>–</td>
                  <td>
                    ○
                    <br />
                    <small>（200以上）</small>
                  </td>
                  <td>
                    ○
                    <br />
                    <small>（200以上）</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    屋内タンク
                    <br />
                    貯蔵所
                  </th>
                  <td>○</td>
                  <td>–</td>
                  <td>–</td>
                  <td>–</td>
                  <td>–</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    地下タンク
                    <br />
                    貯蔵所
                  </th>
                  <td>○</td>
                  <td>–</td>
                  <td>–</td>
                  <td>–</td>
                  <td>◎</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    簡易タンク
                    <br />
                    貯蔵所
                  </th>
                  <td>○</td>
                  <td>–</td>
                  <td>–</td>
                  <td>–</td>
                  <td>–</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    移動タンク
                    <br />
                    貯蔵所
                  </th>
                  <td>–</td>
                  <td>–</td>
                  <td>–</td>
                  <td>–</td>
                  <td>◎</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外貯蔵所</th>
                  <td>
                    ○
                    <br />
                    <small>（30超）</small>
                  </td>
                  <td>–</td>
                  <td>–</td>
                  <td>
                    ○
                    <br />
                    <small>（100以上）</small>
                  </td>
                  <td>
                    ○
                    <br />
                    <small>（100以上）</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ③ 取扱所 */}
        <section className={shared.section}>
          <h3>取扱所における選任／予防規定／定期点検</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">取扱所における選任・予防規定・定期点検</caption>
              <colgroup>
                <col className={styles.colHandlingClass} />
                <col className={styles.colHandlingSupervisors} />
                <col className={styles.colHandlingSecurityGuards} />
                <col className={styles.colHandlingAdministrators} />
                <col className={styles.colHandlingProvisions} />
                <col className={styles.colHandlingInspection} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">保安監督者</th>
                  <th scope="col">施設保安員</th>
                  <th scope="col">統括／消防</th>
                  <th scope="col">予防規定</th>
                  <th scope="col">定期点検</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    給油
                    <br />
                    取扱所
                  </th>
                  <td>◎</td>
                  <td>–</td>
                  <td>–</td>
                  <td>◎（※）</td>
                  <td>
                    ○
                    <br />
                    <small>（地下タンク）</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    販売
                    <br />
                    取扱所
                  </th>
                  <td>○</td>
                  <td>–</td>
                  <td>–</td>
                  <td>–</td>
                  <td>–</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    移送
                    <br />
                    取扱所
                  </th>
                  <td>◎</td>
                  <td>◎</td>
                  <td>
                    ○
                    <br />
                    <small>（指定数量以上）</small>
                  </td>
                  <td>◎</td>
                  <td>◎</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    一般
                    <br />
                    取扱所
                  </th>
                  <td>○</td>
                  <td>
                    ○
                    <br />
                    <small>（100以上）</small>
                  </td>
                  <td>
                    ○
                    <br />
                    <small>（3,000以上）</small>
                  </td>
                  <td>
                    ○
                    <br />
                    <small>（10以上）</small>
                  </td>
                  <td>
                    ○
                    <br />
                    <small>（10以上または地下タンク）</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>製造所</strong>：保安監督者は<strong>いつでも◎</strong>。それ以外は「保安員100以上／統括3,000以上／予防10以上／点検10以上（地下タンク含む）」の数字セットで○になる。
              </li>
              <li>
                <strong>貯蔵所（屋外タンク）</strong>：監督者は◎、予防と点検はどちらも「200以上」で○。
              </li>
              <li>
                <strong>貯蔵所（屋内）</strong>：監督者は○、予防・点検は「150以上」で○。
              </li>
              <li>
                <strong>貯蔵所（地下タンク）</strong>：点検は<strong>無条件で◎</strong>、予防規定は不要（–）。
              </li>
              <li>
                <strong>貯蔵所（移動タンク）</strong>：監督者は不要（–）だけど、点検は<strong>必ず◎</strong>。ここがひっかけポイント。
              </li>
              <li>
                <strong>取扱所（給油）</strong>：監督者は◎、予防規定は法・条例で<strong>必置扱い◎</strong>。地下タンクがあるときだけ点検○。自家用の屋外給油取扱所は対象外。
              </li>
              <li>
                <strong>取扱所（移送）</strong>：監督者◎・保安員◎・予防◎・点検◎のフルセット。統括管理者だけ「指定数量以上」で○。
              </li>
              <li>
                <strong>統括管理者が必要な施設</strong>では、自衛消防組織もセットで必置（セットで出題されやすい）。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">無料登録して練習問題を解く</a>
        </section>
      </div>
    </>
  )
}