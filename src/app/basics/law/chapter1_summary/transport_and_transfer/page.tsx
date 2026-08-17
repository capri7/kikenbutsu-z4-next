import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節-10：運搬と移送',
  description:
    '危険物乙4 第1章41節-10。「運搬」と「移送」の違いを整理。運搬は容器に収納した危険物を車両等で運ぶ行為で危険物取扱者の同乗は原則不要、移送は移動タンク貯蔵所（タンクローリー）による輸送で危険物取扱者の同乗が必須。運搬容器の収納率（固体95%以下・液体98%以下）と表示事項も確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/transport_and_transfer',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節-10：運搬と移送',
    description:
      '危険物乙4 第1章41節-10。「運搬」と「移送」の違いを整理。運搬は容器に収納した危険物を車両等で運ぶ行為で危険物取扱者の同乗は原則不要、移送は移動タンク貯蔵所（タンクローリー）による輸送で危険物取扱者の同乗が必須。運搬容器の収納率（固体95%以下・液体98%以下）と表示事項も確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/transport_and_transfer',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節-10：運搬と移送',
    description:
      '危険物乙4 第1章41節-10。「運搬」と「移送」の違いを整理。運搬は容器に収納した危険物を車両等で運ぶ行為で危険物取扱者の同乗は原則不要、移送は移動タンク貯蔵所（タンクローリー）による輸送で危険物取扱者の同乗が必須。運搬容器の収納率（固体95%以下・液体98%以下）と表示事項も確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function TransportAndTransferPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-10：運搬と移送' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 10. 運搬と移送 */}
        <section className={shared.section}>
          <h2>10. 運搬と移送</h2>
          <div className={shared.bandCard}>
            <p>
              「運搬」と「移送」は名前が似ているが、法令上まったく別の行為として扱われる。まずはこの2つの<strong>言葉の違い</strong>を押さえておく。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">運搬と移送の違い</caption>
              <colgroup>
                <col className={styles.colItem} />
                <col className={styles.colTransport} />
                <col className={styles.colTransfer} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">運搬</th>
                  <th scope="col">移送</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>定義</th>
                  <td>容器に収納した危険物を車両等で運ぶこと</td>
                  <td>
                    <strong>移動タンク貯蔵所（タンクローリー）</strong>で危険物を運ぶこと
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物取扱者の
                    <br />
                    同乗
                  </th>
                  <td>
                    原則<strong>不要</strong>
                    <br />
                    <small>（ただし指定数量以上の積み卸しは、取扱者が自ら行うか立ち会う）</small>
                  </td>
                  <td>
                    <strong>必要</strong>（同乗が必須）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>適用対象</th>
                  <td>指定数量未満の危険物にも運搬の基準が適用される</td>
                  <td>移動タンク貯蔵所による輸送すべてに移送の基準が適用される</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 運搬容器の要件 */}
        <section className={shared.section}>
          <h3>運搬容器の収納率・表示事項</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">運搬容器の収納率・表示事項</caption>
              <colgroup>
                <col className={styles.colRule} />
                <col className={styles.colDetail} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>収納率</th>
                  <td>
                    固体：<strong>95％以下</strong>
                    <br />
                    液体：<strong>98％以下</strong>（かつ<strong>55℃</strong>でも漏れない空間容積を確保）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    容器外部への
                    <br />
                    表示事項
                  </th>
                  <td>
                    危険物の品名／危険等級／化学名／（第4類のみ）水溶性のものは「水溶性」／数量／収納する危険物に応じた注意事項
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    機械荷役用
                    <br />
                    容器の追加表示
                  </th>
                  <td>上記に加えて製造年月日・製造者の名称を表示する</td>
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
                <strong>運搬＝容器で運ぶ／移送＝タンクローリーで運ぶ</strong>。この一言だけでも先に固定しておく。
              </li>
              <li>
                <strong>移送は同乗必須</strong>。運搬は原則不要だが、<strong>指定数量以上の積み卸し</strong>に限り取扱者の関与が必要になる。
              </li>
              <li>
                <strong>収納率</strong>：固体<strong>95％以下</strong>、液体<strong>98％以下＋55℃で漏れない空間</strong>。
              </li>
              <li>
                <strong>容器表示</strong>は「品名・等級・化学名・数量・注意事項」の5点セット＋第4類だけ「水溶性」を追加。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「運搬にも危険物取扱者の同乗が必須」</strong>とする記述は誤り。同乗が必須なのは<strong>移送</strong>だけ。
              </li>
              <li>
                <strong>「運搬は指定数量以上にだけ適用」</strong>という書き方も誤り。運搬の基準は<strong>数量にかかわらず</strong>適用される。
              </li>
              <li>
                <strong>収納率の数字の入れ替え</strong>（固体98％・液体95％など）に注意。「固体は少なめ、液体は多め」の順番で覚えておく。
              </li>
              <li>
                <strong>製造年月日・製造者名の表示</strong>は<strong>機械荷役用容器だけ</strong>の追加要件。すべての容器に必須ではない。
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