import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '保安距離が必要な施設・距離の一覧表【乙4対策】保有空地との違いも解説',
  description: '保安距離が必要な施設（製造所・屋内貯蔵所・屋外タンク貯蔵所・一般取扱所など）・対象ごとの距離・保有空地との違い。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/safety_distances',
  },
  robots: 'index,follow',
  openGraph: {
    title: '保安距離が必要な施設・距離の一覧表【乙4対策】保有空地との違いも解説',
    description: '保安距離が必要な施設（製造所・屋内貯蔵所・屋外タンク貯蔵所・一般取扱所など）・対象ごとの距離・保有空地との違い。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/safety_distances',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '保安距離が必要な施設・距離の一覧表【乙4対策】保有空地との違いも解説',
    description: '保安距離が必要な施設（製造所・屋内貯蔵所・屋外タンク貯蔵所・一般取扱所など）・対象ごとの距離・保有空地との違い。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SafetyDistancesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-8：保安距離' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 8. 保安距離 */}
        <section className={shared.section}>
          <h2>8. 保安距離</h2>
          <div className={shared.bandCard}>
            <p>
              ※保安距離が必要となる主な施設には、製造所、<strong>屋内貯蔵所</strong>、屋外貯蔵所、屋外タンク貯蔵所、一般取扱所がある。
            </p>
          </div>

          <h3>保安距離の必要性</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">保安距離の必要性</caption>
              <colgroup>
                <col className={styles.colSubject} />
                <col className={styles.colDistance} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象</th>
                  <th scope="col">必要な距離</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    特別高圧架空電線
                    <br />
                    （7,000V超〜35,000V以下）
                  </th>
                  <td>
                    3m以上
                    <br />
                    （<strong>水平距離</strong>）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    特別高圧架空電線
                    <br />
                    （35,000V超）
                  </th>
                  <td>
                    5m以上
                    <br />
                    （<strong>水平距離</strong>）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    製造所等の敷地外にある
                    <br />
                    住居
                  </th>
                  <td>10m以上</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    高圧ガス・液化石油ガスの
                    <br />
                    施設
                  </th>
                  <td>20m以上</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    幼稚園（保育園）〜高校／
                    <br />
                    病院／劇場等
                  </th>
                  <td>30m以上</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>重要文化財等の建造物</th>
                  <td>50m以上</td>
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
                <strong>対象施設</strong>：製造所／屋内貯蔵所／屋外貯蔵所／屋外タンク貯蔵所／一般取扱所に保安距離が必要。
              </li>
              <li>
                <strong>電線</strong>：7,000V超〜35,000V以下は<strong>3m</strong>、35,000V超は<strong>5m</strong>。
              </li>
              <li>
                <strong>住居</strong>：敷地外の住居は<strong>10m</strong>。
              </li>
              <li>
                <strong>高圧ガス・LPG施設</strong>：必要距離は<strong>20m</strong>。
              </li>
              <li>
                <strong>学校・病院・劇場など</strong>：必要距離は<strong>30m</strong>。
              </li>
              <li>
                <strong>重要文化財等</strong>：最長距離の<strong>50m</strong>。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>電線だけ水平距離</strong>：問題文に「水平」が出てきたら電線ネタだと疑う。
              </li>
              <li>
                <strong>住居10m vs 高圧ガス20m</strong>：住居よりガス施設のほうが長い。数字の取り違えに注意。
              </li>
              <li>
                <strong>公共性が高い施設＝距離も長い</strong>：学校・病院・劇場は30m、重要文化財はさらに長い50m。
              </li>
              <li>
                <strong>保安距離 ≠ 保有空地</strong>：保安距離は外部保護、保有空地は延焼防止や作業スペース。用語ひっかけ対策でセットで押さえる。
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