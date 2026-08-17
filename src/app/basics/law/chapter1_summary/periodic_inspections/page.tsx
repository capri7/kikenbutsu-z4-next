import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節-6：定期点検',
  description:
    '危険物乙4 第1章41節-6。定期点検の実施義務を整理。点検頻度は年1回以上、実施者は危険物取扱者・危険物施設保安員・立会いを受ける者の3パターン、記録の保存期間は原則3年間。記録事項4項目と試験頻出のひっかけポイントも確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/periodic_inspections',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節-6：定期点検',
    description:
      '危険物乙4 第1章41節-6。定期点検の実施義務を整理。点検頻度は年1回以上、実施者は危険物取扱者・危険物施設保安員・立会いを受ける者の3パターン、記録の保存期間は原則3年間。記録事項4項目と試験頻出のひっかけポイントも確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/periodic_inspections',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節-6：定期点検',
    description:
      '危険物乙4 第1章41節-6。定期点検の実施義務を整理。点検頻度は年1回以上、実施者は危険物取扱者・危険物施設保安員・立会いを受ける者の3パターン、記録の保存期間は原則3年間。記録事項4項目と試験頻出のひっかけポイントも確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function PeriodicInspectionsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-6：定期点検' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 6. 定期点検 */}
        <section className={shared.section}>
          <h2>6. 定期点検</h2>
          <div className={shared.bandCard}>
            <p>製造所等（製造所・貯蔵所・取扱所）は、年1回以上の定期点検を実施し、結果を記録して3年間保存する義務がある。</p>
            <p>
              点検者は危険物取扱者（甲・乙・丙）または危険物施設保安員、もしくは危険物取扱者の立会いを受ける者である（条例で強化される場合あり）。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">定期点検の有無</caption>
              <colgroup>
                <col className={styles.colItems} />
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
                  <th scope="row" className={shared.stickyCol}>点検時期</th>
                  <td>1年に1回以上</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>点検実施者</th>
                  <td>
                    <ol className={styles.orderedCompact}>
                      <li>危険物取扱者（甲・乙・丙）</li>
                      <li>危険物施設保安員</li>
                      <li>危険物取扱者（甲・乙・丙）の立会いを受けている者</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>記録の保存</th>
                  <td>保存期間：原則3年間</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>記録事項</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>製造所等の名称</li>
                      <li>点検方法とその結果</li>
                      <li>点検年月日</li>
                      <li>
                        点検した危険物取扱者または危険物施設保安員の氏名と、
                        <br />
                        点検に立ち会った危険物取扱者（甲・乙・丙）の氏名
                      </li>
                    </ul>
                  </td>
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
                <strong>どこを点検する？：</strong>
                対象は<strong>「製造所等（製造所・貯蔵所・取扱所）」</strong>。施設の種類で迷ったら、この総称を思い出す。
              </li>
              <li>
                <strong>いつ点検する？：</strong>
                実施頻度は<strong>年1回以上</strong>。「毎月」「2年ごと」など、年1回を外してきたら全部×。
              </li>
              <li>
                <strong>誰が点検する？：</strong>
                実施者はつねにこの<strong>3パターン</strong>だけ。①危険物取扱者（甲・乙・丙） ②危険物施設保安員 ③危険物取扱者（甲・乙・丙）の<strong>立会いを受ける者</strong>
              </li>
              <li>
                <strong>どれくらい保存？：</strong>
                記録の保存は<strong>原則3年間</strong>。「保存義務」であって、ふだんから提出する義務ではない。（検査で見せてと言われることはある。）
              </li>
              <li>
                <strong>何を記録する？：</strong>
                記録事項はきれいに4つだけ。①製造所等の名称 ②点検方法とその結果 ③点検年月日 ④実施者または立会い者（危険物取扱者 等）の氏名
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「月次点検」「隔年点検」は全部×。</strong>
                問題文に「毎月1回」「2年に1回」などと書きかえてきたら、年1回以上のルールから外れているので即アウト。
              </li>
              <li>
                <strong>無資格者だけで点検はNG。</strong>
                「立会いを受ける者」だけだとダメで、かならず<strong>危険物取扱者側の立会い</strong>がセットで必要。
              </li>
              <li>
                <strong>記録期間をいじってくる選択肢。</strong>
                「1年間」「5年間」「永久保存」など、3年以外にしてきたら全部×。
              </li>
              <li>
                <strong>記録事項を盛りすぎている選択肢。</strong>
                住所・連絡先・保安距離など、条文にない項目をくっつけてきたらひっかけと疑う。
              </li>
              <li>
                <strong>定期点検と別の点検を混ぜてくる。</strong>
                改修時の検査や事故後の臨時点検とは<strong>別物</strong>。「事故があったときだけ行う」などと書いてあったら定期点検ではない。
              </li>
              <li>
                <strong>条例強化にビビりすぎない。</strong>
                実務では条例で頻度・保存期間が厳しくなるケースもあるが、乙4本試験では<strong>国の基本セット（年1回・3年保存）</strong>で答える。
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