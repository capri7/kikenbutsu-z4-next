import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Class4SubstancesQuiz from './Class4SubstancesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 3節：第4類危険物',
  description:
    '危険物乙4 第1章3節。第4類危険物の分類を整理。発火点と引火点の定義・違い、法別表第1に基づく品名ごとの引火点の範囲、特殊引火物から動植物油類までの代表的な物品名と水溶性・非水溶性の区分を確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/class4_substances',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 3節：第4類危険物',
    description:
      '危険物乙4 第1章3節。第4類危険物の分類を整理。発火点と引火点の定義・違い、法別表第1に基づく品名ごとの引火点の範囲、特殊引火物から動植物油類までの代表的な物品名と水溶性・非水溶性の区分を確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/class4_substances',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 3節：第4類危険物',
    description:
      '危険物乙4 第1章3節。第4類危険物の分類を整理。発火点と引火点の定義・違い、法別表第1に基づく品名ごとの引火点の範囲、特殊引火物から動植物油類までの代表的な物品名と水溶性・非水溶性の区分を確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function Class4SubstancesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '3節：第4類危険物' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 発火点と引火点 */}
        <section className={shared.section}>
          <h2>発火点と引火点</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>発火点</strong>とは、外部から炎や火花などの火源を加えなくても、物質内部で進む発熱反応によって温度が上昇し、自然に発火を始める最も低い温度をいう。
            </p>
            <p>
              <strong>引火点</strong>とは、液面付近に火炎や火花などの着火源を近づけた際に、空気中に燃焼を維持するのに十分な濃度の蒸気が液面から立ちのぼる、最も低い温度をいう。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>発火点</strong>：火源なしでも自然に発火を始める温度</li>
              <li><strong>引火点</strong>：火花などの着火源で燃え広がる蒸気が出る温度</li>
              <li><strong>第4類</strong>は「引火点」が特に頻出（温度の数字で問われやすい）</li>
            </ul>
          </div>

          <div className={shared.bandCard}>
            <p>
              <strong>自動車用ガソリン</strong>は発火点がおよそ300°C、引火点が−40°Cとされているため、周囲温度が20°C前後では自然発火の心配はない。しかし、電気火花など何らかの着火源があると容易に引火する危険性が高まる。
            </p>
            <p>
              <strong>軽油</strong>は発火点がおよそ220°C、引火点は45°C以上とされており、自動車用ガソリンに比べて低い温度で自己発火しやすい性質がある。そのため、周囲温度が約20°C程度では引火しにくいものの、密閉された空間などで温度が上昇すると引火の危険性が高まる。
            </p>
            <p>
              引火点が100°C以上の第4類危険物は「<strong>高引火点危険物</strong>」と呼ばれ、その取扱いを行う製造所などには、基準に関して特別な措置が認められている。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>ガソリン：<strong>引火点 −40°C</strong>（火花があると引火しやすい）</li>
              <li>軽油：<strong>引火点 45°C以上</strong>（常温では引火しにくい）</li>
              <li><strong>高引火点危険物</strong>：引火点が<strong>100°C以上</strong></li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「発火点が低い＝引火しやすい」とは限らない（<strong>引火点</strong>と混同しやすい）。</li>
              <li>ガソリンは常温で自然発火しにくくても、<strong>着火源があると引火</strong>する。</li>
              <li>「高引火点」は<strong>発火点</strong>ではなく、<strong>引火点（100°C以上）</strong>の話。</li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 2. 法別表第1：危険物の分類 */}
        <section className={shared.section}>
          <h2>法別表第1：危険物の分類</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">法別表第1：危険物の分類</caption>
              <colgroup>
                <col className={styles.colKind} />
                <col className={styles.colClassification} />
                <col className={styles.colProductName} />
                <col className={styles.colDefinition} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>品名</th>
                  <th scope="col">区分</th>
                  <th scope="col">代表的な危険物の物品名</th>
                  <th scope="col">定義</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>特殊引火物</th>
                  <td></td>
                  <td>
                    <ul className={shared.compact}>
                      <li>ジエチルエーテル</li>
                      <li>二硫化炭素</li>
                      <li>アセトアルデヒド</li>
                      <li>酸化プロピレン</li>
                    </ul>
                  </td>
                  <td>
                    1気圧において発火点が<strong>100℃以下</strong>のもの、または引火点が<strong>−20℃以下</strong>で、沸点が<strong>40℃以下</strong>のもの
                  </td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className={shared.stickyCol}>第1石油類</th>
                  <td>非水溶性</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>ガソリン</li>
                      <li>ベンゼン</li>
                      <li>トルエン</li>
                      <li>酢酸エチル</li>
                      <li>メチルエチルケトン</li>
                    </ul>
                  </td>
                  <td>1気圧において引火点が<strong>21℃未満</strong>のもの</td>
                </tr>
                <tr>
                  <td>水溶性</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>アセトン</li>
                      <li>ピリジン</li>
                    </ul>
                  </td>
                  <td>1気圧において引火点が<strong>21℃未満</strong>のもの</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>アルコール類</th>
                  <td></td>
                  <td>
                    <ul className={shared.compact}>
                      <li>メチルアルコール（メタノール）</li>
                      <li>エチルアルコール（エタノール）</li>
                      <li>プロピルアルコール</li>
                      <li>イソプロピルアルコール</li>
                    </ul>
                  </td>
                  <td>
                    1分子を構成する炭素の原子の数が<strong>1個から3個</strong>までの<strong>飽和1価アルコール</strong>（変性アルコールを含む）（組成等を勘案して総務省令で定めるものを除く）
                  </td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className={shared.stickyCol}>第2石油類</th>
                  <td>非水溶性</td>
                  <td>
                    <ul className={shared.compact}>
                      <li><strong>灯油</strong></li>
                      <li><strong>軽油</strong></li>
                      <li>キシレン</li>
                      <li>スチレン</li>
                      <li>クロロベンゼン</li>
                    </ul>
                  </td>
                  <td>1気圧において引火点が<strong>21℃以上70℃未満</strong>のもの</td>
                </tr>
                <tr>
                  <td>水溶性</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>酢酸</li>
                      <li>プロピオン酸</li>
                      <li>アクリル酸</li>
                    </ul>
                  </td>
                  <td>1気圧において引火点が<strong>21℃以上70℃未満</strong>のもの</td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className={shared.stickyCol}>第3石油類</th>
                  <td>非水溶性</td>
                  <td>
                    <ul className={shared.compact}>
                      <li><strong>重油</strong></li>
                      <li><strong>クレオソート油</strong></li>
                      <li><strong>アニリン</strong></li>
                      <li>ニトロベンゼン</li>
                    </ul>
                  </td>
                  <td>1気圧において引火点が<strong>70℃以上200℃未満</strong>のもの</td>
                </tr>
                <tr>
                  <td>水溶性</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>グリセリン</li>
                      <li>エチレングリコール</li>
                    </ul>
                  </td>
                  <td>1気圧において引火点が<strong>70℃以上200℃未満</strong>のもの</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第4石油類</th>
                  <td></td>
                  <td>
                    <ul className={shared.compact}>
                      <li><strong>ギヤー油</strong></li>
                      <li>シリンダー油</li>
                      <li>タービン油</li>
                      <li>モーター油</li>
                      <li>マシン油</li>
                      <li>可塑剤</li>
                    </ul>
                  </td>
                  <td>
                    潤滑油・可塑剤などで、1気圧において20℃で液状であり、引火点が<strong>200℃以上250℃未満</strong>のもの
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>動植物油類</th>
                  <td></td>
                  <td>
                    <ul className={shared.compact}>
                      <li>ナタネ油</li>
                      <li>ヤシ油</li>
                      <li>オリーブ油</li>
                      <li>ニシン油</li>
                      <li>アマニ油</li>
                    </ul>
                  </td>
                  <td>
                    動物の脂肉または植物の種子などから抽出した油で、1気圧において引火点が<strong>250℃未満</strong>のもの
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <small className={shared.muted}>※ 定義は法別表第1の備考11〜17から抜粋している。</small>
          </p>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>補足コラム</h3>
            <ul className={shared.compact}>
              <li>
                ※「水溶性液体」は、1気圧・20℃で同容量の純水と緩やかにかき混ぜ、流動がおさまった後も混合液が均一な外観を維持するものを指す（法令上の定義）。
              </li>
              <li>※「非水溶性液体」は、水溶性液体以外のもの。</li>
              <li>
                ※<strong>可塑剤</strong>とは、材料に柔軟性を付与し、加工性を高めるために添加される物質を指す。主にフタル酸系が用いられるが、その他にも多様な種類があり、一般には20〜30種ほどが広く利用されている。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <Class4SubstancesQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}