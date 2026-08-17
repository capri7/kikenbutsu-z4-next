import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import NotificationOfChangesQuiz from './NotificationOfChangesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 7節：変更の届出',
  description:
    '危険物乙4 第1章7節。製造所等における変更の届出を整理。品名・数量・指定数量の倍数変更は10日前までの事前届出、譲渡・引渡し・廃止・保安統括管理者や保安監督者の選任解任は遅滞なくの事後届出、届出不要となる例外を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/notification_of_changes',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 7節：変更の届出',
    description:
      '危険物乙4 第1章7節。製造所等における変更の届出を整理。品名・数量・指定数量の倍数変更は10日前までの事前届出、譲渡・引渡し・廃止・保安統括管理者や保安監督者の選任解任は遅滞なくの事後届出、届出不要となる例外を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/notification_of_changes',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 7節：変更の届出',
    description:
      '危険物乙4 第1章7節。製造所等における変更の届出を整理。品名・数量・指定数量の倍数変更は10日前までの事前届出、譲渡・引渡し・廃止・保安統括管理者や保安監督者の選任解任は遅滞なくの事後届出、届出不要となる例外を確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function NotificationOfChangesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '7節：変更の届出' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 届出が必要な変更事項 */}
        <section className={shared.section}>
          <h2>届出が必要な変更事項</h2>
          <div className={shared.bandCard}>
            <p>危険物の製造所等で次の変更が発生した場合は、必ず<strong>市町村長等</strong>へ届け出を行わなければならない。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">届出が必要な変更事項</caption>
              <colgroup>
                <col className={styles.colItem} />
                <col className={styles.colContent} />
                <col className={styles.colLimit} />
                <col className={styles.colApply} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">内容</th>
                  <th scope="col">申請期限</th>
                  <th scope="col">申請先</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物の品名／数量／指定数量の倍数の変更
                  </th>
                  <td>
                    危険物の品名・数量、または指定数量の倍数を変更して貯蔵・取扱いを行う場合は、変更予定日の<strong>10日前までに市町村長等へ</strong>届け出なければならない。
                  </td>
                  <td className={styles.vcol}>
                    <div className={styles.vtext}>
                      事前
                      <br />
                      （10日前）
                    </div>
                  </td>
                  <td className={styles.vcol} rowSpan={5}>
                    <div className={styles.vtext}>
                      <strong>市町村長等</strong>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    製造所等の譲渡引き渡し
                  </th>
                  <td>
                    製造所等を譲渡または引渡しされた場合、<strong>譲受人または引渡しを受けた者</strong>がその地位を承継し、遅滞なく届け出を行わなければならない。
                  </td>
                  <td className={styles.vcol} rowSpan={4}>
                    <div className={styles.vtext}>
                      事後
                      <br />
                      （遅滞なく）
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    製造所等の廃止
                  </th>
                  <td>
                    製造所等の用途を廃止した場合、その製造所等を所有・管理・占有する者は、<strong>遅滞なく</strong>届け出を行わなければならない。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物保安統括管理者の選任・解任
                  </th>
                  <td>
                    同一事業所内で製造所等を所有・管理・占有する者は、危険物保安統括管理者を任命または解任した場合、<strong>遅滞なくその旨を届け出なければならない。</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物保安監督者の選任解任
                  </th>
                  <td>
                    製造所等を所有・管理・占有する者は、危険物保安監督者を任命または解任した場合、<strong>遅滞なく</strong>届け出なければならない。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>補足コラム</h3>
            <p>
              ※法別表第1に掲げられた危険物について、同じ類・同じ品名で数量または指定数量の倍数が変わらない場合は、物品名を変更しても<strong>届け出は不要</strong>である。例えば、第4類危険物の特殊引火物としてジエチルエーテルを貯蔵している製造所等が、同じ第4類・特殊引火物の品目である二硫化炭素に切り替えた場合、数量または指定数量が同数であれば届け出は不要となる。
            </p>
            <p>
              ※<strong>「譲渡」</strong>とは権利や財産を他者に渡すことをいい、<strong>「引渡し」</strong>とは動産の占有を他者に移すことをいう。また、<strong>「遅滞」</strong>とは正当な理由なく行為を停止または遅らせることを指す。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                危険物の品名・数量・指定数量の<strong>倍数</strong>を変えるときは、変更予定日の<strong>10日前までに</strong>届出が必要。
              </li>
              <li>
                「製造所等の譲渡・引き渡し」「製造所等の廃止」「危険物保安統括管理者・危険物保安監督者の選任・解任」は、いずれも<strong>遅滞なく（事後）</strong>届出を行う。
              </li>
              <li>同じ類・同じ品名で、数量や指定数量の倍数が変わらない場合は、物品名が変わっても<strong>届出は不要</strong>。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>試験では、「<strong>誰が</strong>」「<strong>いつまでに</strong>」届け出るかを入れ替えたひっかけがよく出る。</p>
            <p>
              特に、製造所等を譲渡・引き渡したときに届出義務があるのは、<strong>譲渡人ではなく譲受人または引渡しを受けた者</strong>である点に注意。
            </p>
            <p>
              また、「危険物の品名／数量／指定数量の倍数の変更」の届出期限は<strong>変更予定日の10日前まで</strong>であり、「10日以内」ではないところも典型的なひっかけ。
            </p>
          </div>
        </section>

        {/* 2. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <NotificationOfChangesQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}