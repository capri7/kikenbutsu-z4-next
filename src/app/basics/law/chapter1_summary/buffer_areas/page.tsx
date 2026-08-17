import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '保有空地とは？幅の基準一覧表【乙4対策】保安距離との違いも解説',
  description: '保有空地が必要な施設（製造所・一般取扱所・屋内貯蔵所・屋外タンク貯蔵所・屋外貯蔵所・簡易タンク貯蔵所）と幅の基準を整理。保安距離との違いも解説。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/buffer_areas',
  },
  robots: 'index,follow',
  openGraph: {
    title: '保有空地とは？幅の基準一覧表【乙4対策】保安距離との違いも解説',
    description: '保有空地が必要な施設（製造所・一般取扱所・屋内貯蔵所・屋外タンク貯蔵所・屋外貯蔵所・簡易タンク貯蔵所）と幅の基準を整理。保安距離との違いも解説。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/buffer_areas',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '保有空地とは？幅の基準一覧表【乙4対策】保安距離との違いも解説',
    description: '保有空地が必要な施設（製造所・一般取扱所・屋内貯蔵所・屋外タンク貯蔵所・屋外貯蔵所・簡易タンク貯蔵所）と幅の基準を整理。保安距離との違いも解説。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function BufferAreasPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-9：保有空地' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 9. 保有空地 */}
        <section className={shared.section}>
          <h2>9. 保有空地</h2>
          <div className={shared.bandCard}>
            <p>
              保有空地が必要となる主な施設には、<strong>製造所</strong>、<strong>一般取扱所</strong>、<strong>屋内貯蔵所</strong>、<strong>屋外タンク貯蔵所</strong>、<strong>屋外貯蔵所</strong>、<strong>簡易タンク貯蔵所（屋外）</strong>がある。
            </p>
          </div>

          <h3>保有空地の必要性</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">保有空地の必要性</caption>
              <colgroup>
                <col className={styles.colSubject} />
                <col className={styles.colWidth} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象</th>
                  <th scope="col">必要な空地幅</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    製造所
                    <br />
                    <small>（指定数量の倍数10以下）</small>
                  </th>
                  <td>3m以上</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    製造所
                    <br />
                    <small>（指定数量の倍数10超）</small>
                  </th>
                  <td>5m以上</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>一般取扱所</th>
                  <td>製造所と同じ基準を準用</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋内貯蔵所</th>
                  <td>指定数量の倍数と構造（耐火構造かどうか）に応じて個別に規定</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外タンク貯蔵所</th>
                  <td>指定数量の倍数に応じて個別に規定</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外貯蔵所</th>
                  <td>指定数量の倍数に応じて個別に規定</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    簡易タンク貯蔵所
                    <br />
                    <small>（屋外設置）</small>
                  </th>
                  <td>1m以上</td>
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
                <strong>製造所の基本セット</strong>：指定数量の倍数<strong>10以下は3m以上</strong>、<strong>10超は5m以上</strong>。
              </li>
              <li>
                <strong>一般取扱所</strong>：製造所と<strong>同じ基準</strong>を使う。別の数字を覚え直す必要はない。
              </li>
              <li>
                <strong>屋内貯蔵所・屋外タンク貯蔵所・屋外貯蔵所</strong>：いずれも<strong>指定数量の倍数に応じて幅が変わる</strong>個別の規定を持つ（構造条件が絡む場合もある）。
              </li>
              <li>
                <strong>簡易タンク貯蔵所（屋外）</strong>：数量に関係なく<strong>1m以上</strong>で固定。ここは数字が単純なので狙われやすい。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>保有空地 ≠ 保安距離</strong>：保安距離は「周囲の建物・電線など<strong>外部</strong>との距離」、保有空地は「施設<strong>自体の周囲</strong>に確保するスペース」。目的も対象施設の数も異なる。
              </li>
              <li>
                <strong>「10以下・10超」の境目</strong>：製造所の空地幅は「10」がちょうど境目。「10未満・10以上」のように書き換えるひっかけに注意。
              </li>
              <li>
                <strong>屋内タンク貯蔵所は対象外</strong>：保有空地が必要な施設のリストに<strong>屋内タンク貯蔵所は含まれない</strong>点に注意（屋外タンク貯蔵所と混同しない）。
              </li>
              <li>
                <strong>簡易タンク貯蔵所は屋外設置のときだけ</strong>：屋内に設置する簡易タンク貯蔵所には、この1m以上の規定は当てはまらない。
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