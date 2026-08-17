import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節-5：各種届出と届出先',
  description:
    '危険物乙4 第1章41節-5。製造所等の各種届出と届出先を一覧で整理。品名・数量・指定数量の倍数変更は10日前まで、統括管理者・保安監督者の選任解任、譲渡・引渡し・廃止は遅滞なく届出。届出先はすべて市町村長等で、届出義務者は製造所等の所有者等である点を確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/notifications_and_destinations',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節-5：各種届出と届出先',
    description:
      '危険物乙4 第1章41節-5。製造所等の各種届出と届出先を一覧で整理。品名・数量・指定数量の倍数変更は10日前まで、統括管理者・保安監督者の選任解任、譲渡・引渡し・廃止は遅滞なく届出。届出先はすべて市町村長等で、届出義務者は製造所等の所有者等である点を確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/notifications_and_destinations',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節-5：各種届出と届出先',
    description:
      '危険物乙4 第1章41節-5。製造所等の各種届出と届出先を一覧で整理。品名・数量・指定数量の倍数変更は10日前まで、統括管理者・保安監督者の選任解任、譲渡・引渡し・廃止は遅滞なく届出。届出先はすべて市町村長等で、届出義務者は製造所等の所有者等である点を確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function NotificationsAndDestinationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-5：各種届出と届出先' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 5. 各種届出と届出先 */}
        <section className={shared.section}>
          <h2>5. 各種届出と届出先</h2>
          <div className={shared.bandCard}>
            <p>各種届出は、製造所等の所有者・使用者・管理者など「製造所等の所有者等」が行う。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">各種届出の有無</caption>
              <colgroup>
                <col className={styles.colContents} />
                <col className={styles.colDeadline} />
                <col className={styles.colNotification} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>内容</th>
                  <th scope="col">提出期限</th>
                  <th scope="col">届出先</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物の品名／数量／
                    <br />
                    指定数量の倍数の変更
                  </th>
                  <td>10日前まで</td>
                  <td><strong>市町村長等</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物保安統括管理者の
                    <br />
                    選任／解任
                  </th>
                  <td>遅滞なく</td>
                  <td>市町村長等</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物保安監督者の
                    <br />
                    選任／解任
                  </th>
                  <td>遅滞なく</td>
                  <td>市町村長等</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    製造所等の譲渡／
                    <br />
                    引き渡し／廃止
                  </th>
                  <td>遅滞なく</td>
                  <td>市町村長等</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* まとめ：出る出るポイント・ひっかけ注意 */}
        <section className={shared.section}>
          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>届出するのは「製造所等の所有者等」</strong>。現場でタンクにさわってる乙4の資格者本人が、直接消防署に走るイメージじゃない。
              </li>
              <li>
                <strong>提出期限のパターンは1：3</strong>。「品名・数量・指定数量の倍数の変更」だけ<strong>10日前まで</strong>、それ以外の3つ（統括管理者／監督者の選任・解任、譲渡・引渡し・廃止）はまとめて<strong>「遅滞なく」</strong>。
              </li>
              <li>
                <strong>届出先は全部そろって「市町村長等」</strong>。実務上は所轄消防本部・消防署だけど、試験のキーワードはあくまでこの表記。
              </li>
              <li>
                <strong>「指定数量の倍数」の変更も単独で届出対象</strong>。品名も数量も同じでも、倍数が境目をまたいだら届出が必要になる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「遅滞なく」≠「◯日以内」</strong>。選択肢で「10日以内」「14日以内」みたいに日数で書きかえてきたら問答無用で<strong>×</strong>。
              </li>
              <li>
                <strong>選任だけ／解任だけ届出はNG</strong>。統括管理者も保安監督者も、<strong>選任も解任も両方届出</strong>が正解。
              </li>
              <li>
                <strong>届出を「許可」や「申請」にすり替え</strong>てきたら×。ここは一貫して<strong>「届出」</strong>の話。用語の取り違えに注意。
              </li>
              <li>
                <strong>譲渡・引渡し・廃止の3つセット</strong>。「廃止のみ」「譲渡のみ」など1つだけにしてきたら×。逆に<strong>一時休止</strong>はこの表の外（届出不要）なのも、細かいひっかけポイント。
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