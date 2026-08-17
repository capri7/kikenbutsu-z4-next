import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節-3：危険物取扱者の区分等',
  description:
    '危険物乙4 第1章41節-3。危険物取扱者の免状区分（甲種・乙種・丙種）と取扱い範囲・立合い権限を整理。丙種が自ら取扱える第4類の一部（ガソリン・灯油・重油・引火点130℃以上の第3石油類等）と、軽油・アルコール類・アセトンが丙NGとなる点を確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/operator_categories',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節-3：危険物取扱者の区分等',
    description:
      '危険物乙4 第1章41節-3。危険物取扱者の免状区分（甲種・乙種・丙種）と取扱い範囲・立合い権限を整理。丙種が自ら取扱える第4類の一部（ガソリン・灯油・重油・引火点130℃以上の第3石油類等）と、軽油・アルコール類・アセトンが丙NGとなる点を確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/operator_categories',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節-3：危険物取扱者の区分等',
    description:
      '危険物乙4 第1章41節-3。危険物取扱者の免状区分（甲種・乙種・丙種）と取扱い範囲・立合い権限を整理。丙種が自ら取扱える第4類の一部（ガソリン・灯油・重油・引火点130℃以上の第3石油類等）と、軽油・アルコール類・アセトンが丙NGとなる点を確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function OperatorCategoriesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-3：危険物取扱者の区分等' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 3. 危険物取扱者の区分等 */}
        <section className={shared.section}>
          <h2>3. 危険物取扱者の区分等</h2>
          <div className={shared.bandCard}>
            <p>危険物取扱者の免状は、種類ごとに「自分で取り扱える危険物の範囲」と「他人の作業に立ち会える範囲」が異なる。</p>
            <p>免状の種類は「甲・乙・丙」の3つである。ここでは、それぞれの取扱い範囲と立合いの可否を整理する。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">危険物取扱者の区分等</caption>
              <colgroup>
                <col className={styles.colLicense} />
                <col className={styles.colGoods} />
                <col className={styles.colAttendance} />
                <col className={styles.colInspectionAttendance} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>免状</th>
                  <th scope="col">自ら取扱える危険物</th>
                  <th scope="col">（他者の）取扱作業への立合い</th>
                  <th scope="col">定期点検への立合い</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>甲種</th>
                  <td>すべての危険物</td>
                  <td>可（すべての危険物）</td>
                  <td>○</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>乙種</th>
                  <td>免状で定められた「当該類」のみ</td>
                  <td>可（当該類のみ）</td>
                  <td>○</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>丙種</th>
                  <td>
                    第4類の一部のみ
                    <br />
                    <small className={shared.muted}>（下の注意を参照）</small>
                  </td>
                  <td>×（立合い権限なし）</td>
                  <td>○</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 注意：丙種の範囲 */}
        <section className={shared.section}>
          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>丙種が自ら取扱える範囲（第4類の一部）</h3>
            <p><strong>可（OK）</strong></p>
            <ul className={shared.compact}>
              <li><span className={`${styles.badge} ${styles.badgeOk}`}>ガソリン</span></li>
              <li><span className={`${styles.badge} ${styles.badgeOk}`}>灯油</span></li>
              <li><span className={`${styles.badge} ${styles.badgeOk}`}>第3石油類（引火点130℃以上）</span></li>
              <li><span className={`${styles.badge} ${styles.badgeOk}`}>重油</span></li>
              <li><span className={`${styles.badge} ${styles.badgeOk}`}>一部の潤滑油</span></li>
              <li><span className={`${styles.badge} ${styles.badgeOk}`}>第4石油類</span></li>
              <li><span className={`${styles.badge} ${styles.badgeOk}`}>動植物油類</span></li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutNg}`}>
            <h3>丙種が自ら取扱えない（第4類の一部）</h3>
            <p><strong>不可（NG）</strong></p>
            <ul className={shared.compact}>
              <li><span className={`${styles.badge} ${styles.badgeNg}`}>軽油（第3石油類・130℃未満）</span></li>
              <li><span className={`${styles.badge} ${styles.badgeNg}`}>アルコール類（メタノール・エタノール等）</span></li>
              <li><span className={`${styles.badge} ${styles.badgeNg}`}>アセトン（第1石油類）</span></li>
            </ul>
          </div>

          <p>
            ※<strong>丙＝「第4類の一部」だけ自らOK／立合いはNG</strong>。130℃の境目と、アルコール類・アセトンの不可をセットで覚える。
          </p>
        </section>

        {/* まとめ：出る出るポイント・ひっかけ注意 */}
        <section className={shared.section}>
          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>製造所等では数量に関係なく立合い必須</strong>：指定数量未満でも、無資格者に扱わせるなら〈甲〉または〈当該類の乙〉の立合いが必要。
              </li>
              <li>
                <strong>立合いできるのは〈甲〉と〈当該類の乙〉のみ</strong>：丙には立合い権限がない。立合い要員はこの2種類で固定。
              </li>
              <li>
                <strong>丙が自ら扱えるのは「第4類の一部」だけ</strong>：キーワードは<strong>引火点130℃以上の第3石油類</strong>＋第4石油類＋動植物油類。
              </li>
              <li>
                <strong>アルコール類・アセトンは丙不可</strong>：エタノール＝第4類〔アルコール類〕、アセトン＝第4類〔第1石油類〕 → どちらも丙の自らの取扱い対象外。
              </li>
              <li>
                <strong>乙の立合い範囲＝当該類のみ</strong>：第1類の乙が第2類に立ち会う…はNG。類をまたぐ立合いはできない。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>軽油（第3石油類・130℃未満）は丙NG</strong>：同じ第3石油類でも、<u>130℃未満の軽油は丙の自ら取扱い不可</u>。
              </li>
              <li>
                <strong>「品名」ではなく「類」で判断</strong>：ガソリンとアセトンのように名前が似ていても、<u>類が違えば可否が変わる</u>。
              </li>
              <li>
                <strong>ありがちな置換ミス</strong>：正解は「貯蔵<strong>または</strong>取扱い」「保安の確保」「<strong>遵守</strong>」。<u>及び／安全の確保／準拠</u>はひっかけワード。
              </li>
              <li>
                <strong>「所有者の指示」「実務◯か月」は免除にならない</strong>：立合い要件は<strong>資格（免状の種類）</strong>で決まり、<u>指示や経験年数では代替できない</u>。
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