import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節-4：選任要件と保安講習',
  description:
    '危険物乙4 第1章41節-4。危険物保安監督者・危険物保安統括管理者・危険物施設保安員の選任要件と保安講習の対象を一覧で整理。保安監督者は甲乙の免状＋実務6か月以上、統括管理者と施設保安員は免状不要。講習は免状＋現場従事者が対象となる点を確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/appointment_and_lectures',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節-4：選任要件と保安講習',
    description:
      '危険物乙4 第1章41節-4。危険物保安監督者・危険物保安統括管理者・危険物施設保安員の選任要件と保安講習の対象を一覧で整理。保安監督者は甲乙の免状＋実務6か月以上、統括管理者と施設保安員は免状不要。講習は免状＋現場従事者が対象となる点を確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/appointment_and_lectures',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節-4：選任要件と保安講習',
    description:
      '危険物乙4 第1章41節-4。危険物保安監督者・危険物保安統括管理者・危険物施設保安員の選任要件と保安講習の対象を一覧で整理。保安監督者は甲乙の免状＋実務6か月以上、統括管理者と施設保安員は免状不要。講習は免状＋現場従事者が対象となる点を確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function AppointmentAndLecturesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-4：選任要件と保安講習' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 4. 選任要件と保安講習 */}
        <section className={shared.section}>
          <h2>4. 選任要件と保安講習</h2>
          <div className={shared.bandCard}>
            <p>それぞれの立場によって選任要件が異なり、保安講習の対象も変わる。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">選任要件と保安講習の有無</caption>
              <colgroup>
                <col className={styles.colPosition} />
                <col className={styles.colRequirements} />
                <col className={styles.colSafetyTraining} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>立場</th>
                  <th scope="col">選任要件</th>
                  <th scope="col">保安講習</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物
                    <br />
                    保安監督者
                  </th>
                  <td>
                    <ul className={shared.compact}>
                      <li>甲種または乙種の免状を有すること</li>
                      <li>
                        製造所等での実務経験 <strong>6か月以上</strong>
                      </li>
                    </ul>
                  </td>
                  <td><strong>あり</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物
                    <br />
                    保安統括管理者
                  </th>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        危険物取扱者で<strong>なくても可</strong>
                      </li>
                      <li>
                        事業場全体の管理権限を持つ者
                        <br />
                        （例：事業所長・工場長 等）
                      </li>
                    </ul>
                  </td>
                  <td>
                    免状を有し、取扱作業に従事する場合は→ <strong>あり</strong>
                    <br />
                    それ以外 → 対象外
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物
                    <br />
                    施設保安員
                  </th>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        危険物取扱者で<strong>なくても可</strong>
                      </li>
                    </ul>
                  </td>
                  <td>上記と同じ基準</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* まとめ：出る出るポイント */}
        <section className={shared.section}>
          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>保安講習のルール：</strong>
                基本は<strong>「免状＋現場で危険物をさわっている人」</strong>だけが対象。肩書きが何かより、このセットかどうかで決まる。
              </li>
              <li>
                <strong>危険物保安監督者：</strong>
                <strong>乙種以上＋実務6か月</strong>がワンセット。資格だけ／経験だけの片方だけじゃダメ。
              </li>
              <li>
                <strong>統括管理者・施設保安員：</strong>
                どちらも<strong>免状は必須じゃない</strong>。ただし免状を持って取扱作業に入るなら、その人はちゃんと<strong>保安講習が必要</strong>になる。
              </li>
              <li>
                <strong>名称トラップ：</strong>
                正式名称は「危険物保安<strong>統</strong>括管理者」。選択肢に「総括」と出てきたら迷わず<strong>×</strong>。
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