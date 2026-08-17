// src/app/basics/properties_prevention/animal_vegetable_oil_properties/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import AnimalVegetableOilPropertiesQuiz from './AnimalVegetableOilPropertiesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '動植物油類とは？引火点・危険性・第4石油類との違い【乙4対策】',
  description:
    '危険物乙4。動植物油類の引火点は250℃未満。指定数量10,000L。ヨウ素価による乾性油・半乾性油・不乾性油の分類と、酸化重合による自然発火のリスク。アマニ油・キリ油など乾性油の消火方法。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/animal_vegetable_oil_properties',
  },
  robots: 'index,follow',
  openGraph: {
    title: '動植物油類とは？引火点・危険性・第4石油類との違い【乙4対策】',
    description:
      '危険物乙4。動植物油類の引火点は250℃未満。指定数量10,000L。ヨウ素価による乾性油・半乾性油・不乾性油の分類と、酸化重合による自然発火のリスク。アマニ油・キリ油など乾性油の消火方法。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/animal_vegetable_oil_properties',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '動植物油類とは？引火点・危険性・第4石油類との違い【乙4対策】',
    description:
      '危険物乙4。動植物油類の引火点は250℃未満。指定数量10,000L。ヨウ素価による乾性油・半乾性油・不乾性油の分類と、酸化重合による自然発火のリスク。アマニ油・キリ油など乾性油の消火方法。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function AnimalVegetableOilPropertiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '12節：動植物油類の性状' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 動植物油類 */}
        <section className={shared.section}>
          <h2>動植物油類</h2>

          <div className={shared.bandCard}>
            <p>
              動植物油類とは、動物の脂肪・油脂、または植物の種子・果肉などから得られた油脂で、
              1気圧において20℃で液状であり、<strong>引火点が250℃未満</strong>のものを指します（第4類動植物油類）。
            </p>
            <p>なお、引火点が200℃以上250℃未満の石油類は「<strong>第4石油類</strong>」に分類されます。</p>
            <p>
              一方、動植物由来の油脂でも引火点が250℃以上になると、危険物ではなく
              「<strong>指定可燃物（可燃性液体類）</strong>」として扱われる点に注意しましょう。
            </p>
          </div>

          <h3>動植物油類の特徴</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">動植物油類の特徴</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">代表値／試験対策メモ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>液比重</th>
                  <td><strong>非水溶性</strong>。液比重は概ね<strong>0.9前後</strong>で水より軽いものが多い（例外あり）。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼</th>
                  <td>
                    布・ウエスに<strong>染み込むと酸化が進み発熱</strong>し、条件がそろうと<strong>自然発火</strong>の危険がある（特に乾性油）。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼範囲</th>
                  <td>
                    <strong>霧状</strong>にしたもの・<strong>布に吸着したもの</strong>は空気との接触面積が増え、<strong>引火しやすく</strong>なる。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>引火点</th>
                  <td>
                    常温では<strong>蒸発しにくく相対的に引火しにくい</strong>が、いったん燃えると<strong>油温が非常に高温</strong>となり<strong>消火が困難</strong>。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酸化のしやすさ</th>
                  <td>多くは<strong>不飽和脂肪酸</strong>を含み、酸化・重合を受けやすい（乾性油・半乾性油・不乾性油の性質差）。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>油を含んだボロ布は<strong>自己発熱→自然発火</strong>に注意。</li>
              <li><strong>密閉金属容器で保管</strong>・速やかに処理する。</li>
              <li>消火は<strong>泡・粉末・CO₂</strong>が有効。</li>
              <li><strong>棒状注水は禁物</strong>（飛散・沸騰）。</li>
            </ul>
          </div>

          <div className={shared.callout}>
            <h3>ここは覚えよう！</h3>
            <p>
              動植物から得られる油脂の<strong>分子量や不飽和度</strong>は原料により異なります。
              一般に、油脂の<strong>融点は炭素数が多いほど高く</strong>、同じ炭素数なら<strong>二重結合が多いほど融点は低下</strong>します。
            </p>
            <p>
              マーガリンの主原料は植物油（大豆油・コーン油・紅花油など）。不飽和脂肪酸の多い油に<strong>水素添加</strong>を行い、
              融点を上げた<strong>硬化油</strong>として製造されます。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>おまけのひっかけ注意！</h4>
            <p>
              <strong>指定数量メモ：</strong>動植物油類の指定数量は<strong>10,000L</strong>
              （覚え方：第4石油類6,000Lより多い）。
            </p>
          </div>
        </section>

        {/* 2. 自然発火 */}
        <section className={shared.section}>
          <h2>自然発火</h2>

          <div className={shared.bandCard}>
            <p>
              油脂は空気中でゆっくり<strong>酸化</strong>し、その際に生じる<strong>酸化熱</strong>が逃げずに蓄積すると、
              ついには<strong>発火点</strong>に達して自然発火が起こります。
            </p>
            <p>
              酸化は主に油脂中の<strong>不飽和結合（C＝C）</strong>に酸素が付加して進行します。
              油脂の<strong>ヨウ素価</strong>（油脂100gが吸収するヨウ素のグラム数）が大きいほど不飽和度が高く、
              酸化しやすい＝自然発火リスクが高いです。
            </p>
          </div>

          <h3>乾性油の種類とヨウ素価</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">乾性油の種類とヨウ素価</caption>
              <colgroup>
                <col className={styles.colKinds} />
                <col className={styles.colOilNature} />
                <col className={styles.colItems} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>油種</th>
                  <th scope="col">性質</th>
                  <th scope="col">品目</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>乾性油<br />（ヨウ素価130以上）</th>
                  <td>空気中で<strong>固化（乾燥）</strong>しやすい。</td>
                  <td><strong>アマニ油、キリ油</strong>、紅花油、ひまわり油、くるみ油、けし油 など</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>半乾性油<br />（ヨウ素価100〜130）</th>
                  <td>酸化で<strong>粘ちょう化</strong>し流動性が低下する。</td>
                  <td>なたね油、ごま油、綿実油、コーン油、大豆油 など</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>不乾性油<br />（ヨウ素価100以下）</th>
                  <td>空気中で<strong>固まらない</strong>。</td>
                  <td>やし油、オリーブ油、ひまし油、つばき油 など</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>「ヨウ素価↑ → 不飽和度↑ → 酸化しやすい → 自然発火リスク↑」</li>
              <li>乾性油の含浸ウエスは<strong>最も要注意</strong>。</li>
            </ul>
          </div>

          <div className={shared.callout}>
            <h3>ここは覚えよう！</h3>
            <p>
              <strong>乾性油</strong>は特に酸化・重合で<strong>樹脂状に固化</strong>しやすく、油を含んだ<strong>布・ウエス</strong>を積み重ねて放置すると
              <strong>自己発熱→自然発火</strong>の危険が高い。
            </p>
            <p>
              油を含んだ布・紙などを<strong>通風不良・高温の場所に放置しない</strong>。使用後は<strong>水に浸す</strong>か<strong>密閉できる金属容器</strong>に回収し、
              早期に廃棄・洗浄する。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>おまけのひっかけ注意！（消火の原則）</h4>
            <ul className={shared.compact}>
              <li><strong>泡・粉末・CO₂</strong>が有効。</li>
              <li><strong>棒状注水は飛散・沸騰</strong>を招くため厳禁。</li>
              <li>冷却は必要最小限の<strong>霧状水</strong>で周辺に限る。</li>
            </ul>
          </div>
        </section>

        {/* 3. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <AnimalVegetableOilPropertiesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}