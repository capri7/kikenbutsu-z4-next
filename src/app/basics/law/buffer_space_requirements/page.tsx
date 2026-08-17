import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BufferSpaceRequirementsQuiz from './BufferSpaceRequirementsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 21節：保有空地',
  description:
    '危険物乙4 第1章21節。保有空地の目的と必要な製造所等を解説。製造所・一般取扱所、屋内貯蔵所、屋外タンク貯蔵所、屋外貯蔵所、簡易タンク貯蔵所ごとの指定数量の倍数と保有空地の幅を表で整理。試験に出るポイントもまとめている。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/buffer_space_requirements',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 21節：保有空地',
    description:
      '危険物乙4 第1章21節。保有空地の目的と必要な製造所等を解説。製造所・一般取扱所、屋内貯蔵所、屋外タンク貯蔵所、屋外貯蔵所、簡易タンク貯蔵所ごとの指定数量の倍数と保有空地の幅を表で整理。試験に出るポイントもまとめている。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/buffer_space_requirements',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 21節：保有空地',
    description:
      '危険物乙4 第1章21節。保有空地の目的と必要な製造所等を解説。製造所・一般取扱所、屋内貯蔵所、屋外タンク貯蔵所、屋外貯蔵所、簡易タンク貯蔵所ごとの指定数量の倍数と保有空地の幅を表で整理。試験に出るポイントもまとめている。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function BufferSpaceRequirementsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '21節：保有空地' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 保有空地の幅と必要な製造所等 */}
        <section className={shared.section}>
          <h2>保有空地の幅と必要な製造所等</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>保有空地</strong>とは、製造所等で火災・爆発などの災害が発生したときに、<strong>消防活動</strong>を行いやすくし、周囲への<strong>延焼防止</strong>を図るために、製造所等の周囲に確保しておく空地のことである。
            </p>
            <p>
              危険物を取り扱う製造所等の周囲には、次の表の区分に応じて、定められた幅の保有空地を<strong>確保しなければならない</strong>。ただし、規則で定めるところにより<strong>防火上有効な隔壁</strong>を設けた場合は、保有空地の幅が緩和される場合がある。
            </p>
            <p>
              保有空地の確保が必要となる製造所等は次のとおりで、必要とされる幅は、危険物施設の種類や、貯蔵・取扱う危険物の<strong>指定数量の倍数</strong>などによって細かく定められている。なお、保有空地には、通行や消防活動の支障となる<strong>物品等を置いてはならない</strong>。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>保有空地＝消防活動スペース＋延焼防止のための「空き地」</strong>である。</li>
              <li><strong>危険物を扱う製造所等のまわり</strong>には、区分ごとに決められた幅の保有空地を<strong>必ず確保</strong>する。</li>
              <li>幅は、施設の種類と<strong>指定数量の倍数</strong>で決まる。</li>
              <li>保有空地には、<strong>物品を置かない</strong>。通路や消防車の活動のじゃまになるものはNG。</li>
              <li><strong>防火上有効な隔壁</strong>を設けた場合は、保有空地の幅が<strong>緩和される場合がある</strong>。</li>
            </ul>
          </div>
        </section>

        {/* 2. 指定数量の倍数と保有空地の幅 */}
        <section className={shared.section}>
          <h2>指定数量の倍数と保有空地の幅</h2>
          <div className={shared.bandCard}>
            <p>
              製造所・一般取扱所について、貯蔵・取扱う危険物の<strong>指定数量の倍数</strong>に応じて、確保すべき保有空地の幅を示す。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">指定数量の倍数と保有空地の幅</caption>
              <colgroup>
                <col className={styles.colClass1} />
                <col className={styles.colMultiple} />
                <col className={styles.colWidth} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>施設区分</th>
                  <th scope="col">指定数量の倍数</th>
                  <th scope="col">保有空地の幅</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>製造所・一般取扱所</th>
                  <td><strong className={styles.nowrap}>10以下</strong></td>
                  <td><strong className={styles.nowrap}>3m以上</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>製造所・一般取扱所</th>
                  <td><strong className={styles.nowrap}>10を超える</strong></td>
                  <td><strong className={styles.nowrap}>5m以上</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>製造所・一般取扱所の保有空地は「10以下→3m」「10超→5m」</strong>の<strong>2パターンだけ</strong>と押さえる。
              </li>
              <li>
                問題では、<strong>倍数と距離の組み合わせ入れ替え</strong>や「4m以上」などの<strong>中途半端な数値</strong>が典型的なひっかけ。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 製造所等の指定数量の倍数と保有空地の幅 */}
        <section className={shared.section}>
          <h2>製造所等の指定数量の倍数と保有空地の幅</h2>
          <div className={shared.bandCard}>
            <p>施設区分ごとに、指定数量の倍数や建築構造に応じて確保すべき保有空地の幅が異なる。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">製造所等の指定数量の倍数と保有空地の幅</caption>
              <colgroup>
                <col className={styles.colClass2} />
                <col className={styles.colPoints} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>施設区分</th>
                  <th scope="col">規定の要点・具体例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    屋内
                    <br />
                    貯蔵所
                  </th>
                  <td>
                    指定数量の倍数および建築構造（耐火構造または不燃材料）に応じて、保有空地の幅が異なる。
                    <ul>
                      <li>指定数量の倍数 5以下 → 0.5m以上</li>
                      <li>指定数量の倍数 5超10以下（耐火構造） → 1m以上</li>
                      <li>指定数量の倍数 5超10以下（不燃材料） → 1.5m以上</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    屋外タンク
                    <br />
                    貯蔵所
                  </th>
                  <td>
                    （指定数量の倍数：4,000以下）
                    <br />
                    指定数量の倍数に応じて、保有空地の幅が異なる。
                    <ul>
                      <li>指定数量の倍数 500以下 → 3m以上</li>
                      <li>指定数量の倍数 500超1,000以下 → 5m以上</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    屋外タンク
                    <br />
                    貯蔵所
                  </th>
                  <td>
                    （指定数量の倍数：4,000超）
                    <br />
                    タンクの最大直径またはタンク高さのうち大きい方と同じ距離を保有空地とする。ただし、15m以上とする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    屋外
                    <br />
                    貯蔵所
                  </th>
                  <td>
                    柵の周囲に、指定数量の倍数に応じた幅の空地を確保する。
                    <ul>
                      <li>指定数量の倍数 10以下 → 柵等の周囲に3m以上</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    屋外に設ける
                    <br />
                    簡易タンク
                    <br />
                    貯蔵所
                  </th>
                  <td>指定数量の倍数に関係なく、タンク周囲に1m以上の空地を確保する。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                本節のテーマは<strong>保有空地</strong>。対象となるのは<strong>製造所・屋内貯蔵所・屋外貯蔵所・屋外タンク貯蔵所・一般取扱所</strong>＋<strong>屋外に設ける簡易タンク貯蔵所</strong>の6パターン。
              </li>
              <li>
                <strong>屋内貯蔵所</strong>は<strong>「倍数5超10以下」</strong>のときが要チェック。<strong>耐火構造 → 1m以上、不燃材料 → 1.5m以上</strong>とセットで覚える。
              </li>
              <li>
                <strong>屋外タンク貯蔵所</strong>は数値の山を押さえる。倍数<strong>500以下 → 3m以上</strong>、<strong>500超1,000以下 → 5m以上</strong>、<strong>4,000超 → タンク径or高さと同じ距離（ただし15m以上）</strong>。
              </li>
              <li>
                <strong>屋外貯蔵所</strong>は<strong>10倍以下で柵の周囲3m以上</strong>、<strong>屋外に設ける簡易タンク貯蔵所</strong>は<strong>倍数に関係なくタンク周囲1m以上</strong>。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>保有空地</strong>と<strong>保安距離</strong>を入れ替えて覚えない。「建築物からの距離」は<strong>保安距離</strong>、「製造所のまわりの空き」は<strong>保有空地</strong>。
              </li>
              <li>
                「<strong>簡易タンク貯蔵所は小さいから保有空地はいらない</strong>」は誤り。<strong>屋外に設ける簡易タンク貯蔵所も、タンク周囲1m以上の保有空地が必要</strong>。
              </li>
              <li>
                屋内貯蔵所の<strong>0.5m／1m／1.5m</strong>を逆にしない。<strong>5以下 → 0.5m以上</strong>、<strong>5超10以下の耐火構造 → 1m以上</strong>、<strong>5超10以下の不燃材料 → 1.5m以上</strong>の順で固める。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <BufferSpaceRequirementsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}