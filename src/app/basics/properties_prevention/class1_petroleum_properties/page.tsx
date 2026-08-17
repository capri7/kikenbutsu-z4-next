// src/app/basics/properties_prevention/class1_petroleum_properties/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Class1PetroleumPropertiesQuiz from './Class1PetroleumPropertiesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '第1石油類の性状とは？ガソリン・ベンゼン・トルエンの引火点【乙4対策】',
  description:
    '危険物乙4。第1石油類の引火点は21℃未満。ガソリン・ベンゼン・トルエン・酢酸エチル・アセトン・ピリジンの性状と水溶性区分。非水溶性200L・水溶性400Lの指定数量。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/class1_petroleum_properties',
  },
  robots: 'index,follow',
  openGraph: {
    title: '第1石油類の性状とは？ガソリン・ベンゼン・トルエンの引火点【乙4対策】',
    description:
      '危険物乙4。第1石油類の引火点は21℃未満。ガソリン・ベンゼン・トルエン・酢酸エチル・アセトン・ピリジンの性状と水溶性区分。非水溶性200L・水溶性400Lの指定数量。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/class1_petroleum_properties',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '第1石油類の性状とは？ガソリン・ベンゼン・トルエンの引火点【乙4対策】',
    description:
      '危険物乙4。第1石油類の引火点は21℃未満。ガソリン・ベンゼン・トルエン・酢酸エチル・アセトン・ピリジンの性状と水溶性区分。非水溶性200L・水溶性400Lの指定数量。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function Class1PetroleumPropertiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '7節：第1石油類の性状' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 第1石油類 */}
        <section className={shared.section}>
          <h2>第1石油類</h2>
          <div className={shared.bandCard}>
            <p>第1石油類は、1気圧において<strong>引火点が21℃未満</strong>の危険物（※特殊引火物は除く）を指します。</p>
            <p>代表例：非水溶性のガソリン・ベンゼン・トルエン／水溶性のアセトン・ピリジン。</p>
            <p>多くは<strong>蒸気比重が1より大きく</strong>、空気より重いため、地表を伝って流れ、離れた低所に滞留しやすい特徴があります。</p>
          </div>
        </section>

        {/* 2. ガソリン */}
        <section className={shared.section}>
          <h2>ガソリン (CmHn)</h2>

          <div className={shared.bandCard}>
            <p>ここでは、第1石油類の代表例であるガソリンについて、その物理的性質と危険性を整理します。</p>
            <p><strong>刺激的な独特の臭気</strong>があります。（ガスのように付臭剤で人工的に臭いをつけているわけではありません。）</p>
            <p><small>※付臭剤：本来無臭の物質に、検知しやすくするため人工的に臭いを加える薬剤。</small></p>
            <p>代表的な第1石油類の一つで、非常に揮発性が高く、蒸気は<strong>空気より重い（蒸気比重1以上）</strong>ため、地表を伝って低い場所にたまりやすい性質を持ちます。</p>
          </div>

          <h3>ガソリンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">ガソリンの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">代表値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-40℃以下</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>38 ~ 220℃（混合物のため幅がある）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約300℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>比重</th><td>0.65 ~ 0.75（水より軽い）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>1.4 ～ 7.6 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>3~4（空気より重い）</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ガソリンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>皮膚に触れると<strong>皮膚炎</strong>を起こすことがあり、<strong>蒸気を吸入</strong>すると<strong>頭痛・めまい</strong>などが生じます。</li>
              <li><strong>電気を通さない性質</strong>があり、流動によって<strong>静電気</strong>が発生しやすいです。</li>
              <li>
                炭素数<strong>4～10程度の炭化水素の混合物</strong>で、主成分は特定しにくいです。
                完全燃焼すると<strong>二酸化炭素と水</strong>になります。
              </li>
              <li>
                灯油や軽油と識別するため、<strong>自動車用ガソリンはオレンジ色に着色</strong>されています
                （工業用ガソリンは<strong>無色透明</strong>）。
              </li>
              <li>
                日本産業規格（JIS）により、自動車用・航空用・工業用の<strong>3種類</strong>に区分。
                不純物として微量の<strong>有機硫黄化合物</strong>を含み、用途に応じて添加物が加えられます。
              </li>
              <li>
                <strong>オクタン価</strong>はガソリンの<strong>耐ノック性</strong>を示す数値で、高いほどノッキングが起こりにくい。
                向上剤として<strong>エーテル類</strong>が加えられることがあります。
              </li>
              <li>
                メタノールなどのアルコールを10～20%混ぜた<strong>アルコール混合ガソリン（ガソホール）</strong>は、
                資源節約・排ガス低減・オクタン価向上を目的に製造されています。
              </li>
              <li>
                <strong>酸化性物質（第1類・第6類危険物）</strong>と混合すると、発熱・発火・爆発や<strong>爆発性過酸化物</strong>の生成の危険があります。
              </li>
              <li>
                ガソリンは合成ゴム・樹脂・プラスチックと<strong>親和性が高く、膨潤</strong>させます。
                膨潤とは油や溶剤が分子間に入り込み、体積増加や外観・物性の劣化を起こす現象です。
              </li>
            </ol>
          </div>
        </section>

        {/* 3. ベンゼン */}
        <section className={shared.section}>
          <h2>ベンゼン（C₆H₆）</h2>

          <div className={shared.bandCard}>
            <p>
              ベンゼンは代表的な芳香族炭化水素で、強い毒性と高い揮発性をもち、
              蒸気が空気より重いことから第1石油類の中でも注意が必要な物質です。
            </p>
          </div>

          <h3>ベンゼンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">ベンゼンの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">代表値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.9（実測値：0.879）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>80℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>凝固点（融点）</th><td>5.5℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-11℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約 498℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>1.2 ～ 7.8 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>2.8</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ベンゼンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>水にほとんど溶けない</strong>が、アルコールやエーテルなど多くの<strong>有機溶剤にはよく溶ける</strong>。樹脂や油脂もよく溶かします。</li>
              <li>揮発性が高く、蒸気は<strong>強い毒性</strong>をもちます。<strong>長期的には発がん性</strong>（白血病など）も知られています。</li>
              <li><strong>電気を通さない</strong>ため、流動時に<strong>静電気</strong>が発生しやすいです。</li>
              <li>凝固点が 5.5℃のため、冬季は<strong>固化</strong>することがあります。</li>
              <li><strong>引火点 -11℃</strong>で、蒸気は空気より重く低所に滞留しやすいため、<strong>引火・爆発の危険</strong>があります。</li>
              <li>ベンゼンは<strong>有機化学工業の基礎原料</strong>として、染料・合成樹脂・医薬品など幅広い製品に利用されています。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>水には<strong>ほとんど溶けない</strong>が、アルコールやエーテルなどの<strong>有機溶剤にはよく溶ける</strong>。</li>
              <li>凝固点（融点）は<strong>5.5℃</strong>で、冬季には固化することがある。</li>
              <li>蒸気は<strong>空気より重く（蒸気比重約2.8）</strong>、低所に滞留しやすい。</li>
              <li>揮発性が高く、蒸気は<strong>強い毒性（発がん性など）</strong>をもつ。</li>
            </ul>
          </div>
        </section>

        {/* 4. トルエン */}
        <section className={shared.section}>
          <h2>トルエン（C₆H₅CH₃）</h2>

          <div className={shared.bandCard}>
            <p>
              トルエンはベンゼン環にメチル基が1つ結合した芳香族炭化水素で、ベンゼンとの違いがひっかけとして狙われやすい代表物質です。
            </p>
          </div>

          <h3>トルエンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">トルエンの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">代表値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.87～0.9</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約 111℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>4℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約 480℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>1.1～7.1 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約 3.1</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>トルエンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>水には溶けない</strong>が、アルコールやエーテルなど多くの<strong>有機溶剤に溶ける</strong>。樹脂や油脂もよく溶かします。</li>
              <li>蒸気の<strong>毒性はベンゼンより弱い</strong>が、長期吸入は<strong>中枢神経障害</strong>（頭痛・記憶障害など）の原因となります。</li>
              <li><strong>濃硝酸＋濃硫酸（混酸）</strong>で<strong>ニトロ化</strong>され、第5類危険物の<strong>TNT（トリニトロトルエン）</strong>を生成します。</li>
              <li><strong>金属への腐食性はない</strong>ため、鉄製容器に貯蔵できます。</li>
              <li><strong>引火点は4℃</strong>と低いため、常温でも火災の危険が高い。蒸気は<strong>空気より重く</strong>、低所に滞留して引火・爆発の危険があります。</li>
              <li>主な用途は<strong>塗料・接着剤・合成樹脂の溶剤</strong>であり、工業的に広く利用されています。</li>
              <li><strong>酸化性物質（第1類・第6類危険物）</strong>と混合すると、発熱・発火・爆発の危険があります。</li>
            </ol>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>
              トルエンは「ベンゼンにメチル基がついたもの」で、ベンゼンとの比較問題としてねらわれやすい。
              ベンゼンより毒性はやや弱いが、第1石油類として引火性や蒸気の重さは同様に注意が必要。
            </p>
          </div>
        </section>

        {/* 5. 酢酸エチル */}
        <section className={shared.section}>
          <h2>酢酸エチル （CH₃COOC₂H₅）</h2>

          <div className={shared.bandCard}>
            <p>酢酸エチルは無色で<strong>果実のような甘い臭気</strong>をもつ第1石油類の液体です。</p>
            <p>
              <strong>「水にはわずかにしか溶けないが、有機溶剤にはよく溶ける」</strong>ことと、
              <strong>引火点が低く燃焼範囲が広い</strong>ことが試験で狙われやすいポイントです。
            </p>
          </div>

          <h3>酢酸エチルの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">酢酸エチルの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">代表値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.89（約0.9）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>77℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-4℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約426℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>2.0 ～ 11.5 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>3.0</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>酢酸エチルの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>
                <strong>水にはわずかに溶ける（約3%）</strong>が、アルコール・ベンゼン・ヘキサンなど<strong>多くの有機溶剤に良く溶ける</strong>。
                塗料・接着剤・インキなどの<strong>溶剤</strong>として広く利用されています。
              </li>
              <li>揮発性が高く、蒸気は<strong>空気より重いため低所に滞留</strong>しやすく、引火・爆発の危険があります。</li>
              <li>蒸気を<strong>吸入すると頭痛・めまい・吐き気</strong>などを起こし、長期的には<strong>肝臓や神経に障害</strong>を与えることがあります。</li>
              <li><strong>引火点は-4℃</strong>と低く、常温でも容易に引火する危険があります。</li>
              <li>流動や揺動によって<strong>静電気が発生しやすい</strong>ため、取り扱いに注意が必要です。</li>
              <li><strong>酸化性物質（第1類・第6類危険物）</strong>と混合すると、発熱・発火などの危険があります。</li>
            </ol>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！酢酸エチルの落とし穴</h4>
            <p>選択肢では、<strong>水への溶けやすさ</strong>と<strong>蒸気の重さ</strong>の言い換えに注意しましょう。</p>
            <ul className={shared.compact}>
              <li><strong>水には「わずかに溶ける」だけ</strong>なのに、「よく溶ける」「水溶性が高い」と書き換えてくる。</li>
              <li>一方で、<strong>アルコール・ベンゼンなど多くの有機溶剤にはよく溶ける</strong>点は正しい。ここを逆にしてくる問題に注意。</li>
              <li>蒸気比重は<strong>3.0で空気より重い</strong>。選択肢で「空気より軽い」「上方に滞留しやすい」とあったら×。</li>
              <li><strong>引火点 −4℃</strong>と低く、常温でも引火の危険があることもセットで覚えておく。</li>
            </ul>
          </div>
        </section>

        {/* 6. エチルメチルケトン */}
        <section className={shared.section}>
          <h2>エチルメチルケトン（メチルエチルケトン, MEK）（CH₃COC₂H₅）</h2>

          <div className={shared.bandCard}>
            <p>
              エチルメチルケトン（MEK）は、無色で特異な臭気をもつ第1石油類のケトン系溶剤です。
              「水にはやや溶けるが、有機溶剤にはよく溶ける」ことと、引火点が−9℃と極めて低く燃焼範囲が1.8〜11.5 vol%と広い点が、試験で狙われやすいポイントです。
            </p>
          </div>

          <h3>エチルメチルケトンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">エチルメチルケトンの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">代表値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.8（実測値 0.805）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>80℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-9℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約404℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>1.8～11.5 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>2.5</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>エチルメチルケトンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>
                <strong>水にやや溶け</strong>、アルコール・エーテルなどの<strong>有機溶剤に良く溶ける</strong>。
                塗料・接着剤・インキなどの<strong>溶剤</strong>として広く使用されます。
              </li>
              <li>
                引火点は<strong>-9℃と極めて低く</strong>、常温でも火災の危険があります。
                蒸気は<strong>空気より重く</strong>、低所に滞留して<strong>爆発の危険</strong>があります。
              </li>
              <li>
                蒸気を<strong>吸入すると頭痛・めまい・吐き気</strong>を生じ、長期暴露は<strong>肝臓・神経障害</strong>を引き起こすことがあります。
              </li>
              <li>
                消火は<strong>水溶性液体用泡消火剤</strong>を用い、水を霧状に噴霧して冷却・希釈効果を得ます。粉末消火剤や二酸化炭素も有効です。
              </li>
              <li>酸化性物質（第1類・第6類危険物）と混合すると、発熱・発火・爆発の危険があります。</li>
              <li>貯蔵は<strong>直射日光を避け、冷暗所で密栓し換気の良い場所</strong>で行います。</li>
            </ol>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！エチルメチルケトンの落とし穴</h4>
            <p>選択肢では、水への溶けやすさ・蒸気の重さ・引火点の低さの言い換えに注意しましょう。</p>
            <ul className={shared.compact}>
              <li>水には「やや溶ける」だけで、水溶性が高いわけではありません。一方で、アルコール・エーテルなど多くの有機溶剤にはよく溶ける点は正しいです。</li>
              <li>蒸気比重は約2.5で空気より重いので、「空気より軽い」「上方に滞留しやすい」といった表現があれば誤りです。</li>
              <li>引火点は−9℃と非常に低く、常温でも火災・爆発の危険があります。「引火点が高く安全性が高い」という書き方は×。</li>
              <li>主な用途は塗料・接着剤・インキなどの溶剤であり、「難燃性の油」などと書かれていたら誤りです。</li>
            </ul>
          </div>
        </section>

        {/* 7. アセトン */}
        <section className={shared.section}>
          <h2>アセトン（CH₃COCH₃）</h2>

          <div className={shared.bandCard}>
            <p>
              アセトンは無色で刺激のある特有の臭気をもち、水にも有機溶媒にもよく溶ける第1石油類のケトン類で、
              燃焼範囲が2.5〜12.8 vol％と非常に広いのが出題ポイントです。
            </p>
          </div>

          <h3>アセトンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">アセトンの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">代表値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.79～0.80</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>56℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>-20℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約465℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>2.5 ~ 12.8vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>2.0</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>アセトンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>
                <strong>水にもよく溶け</strong>、アルコール・エーテル・クロロホルムなど多くの有機溶媒にも溶ける。
                <strong>両親媒性</strong>（水にも油にも溶ける性質）をもつ。
              </li>
              <li><strong>揮発性が非常に高く</strong>、燃焼範囲も<strong>2.5～12.8 vol%と広い</strong>ため、火災・爆発の危険が大きい。</li>
              <li>
                蒸気を<strong>吸入すると頭痛・吐き気</strong>を起こし、長期的には<strong>肝臓・腎臓・神経に障害</strong>を与える。
                皮膚に触れると<strong>脱脂作用で炎症</strong>を起こすことがある。
              </li>
              <li><strong>酸化性物質（過酸化水素・硝酸など）</strong>と混合すると、酸化反応により<strong>発火や爆発</strong>の危険がある。</li>
              <li>主な用途は<strong>マニキュア除光液、接着剤、塗料溶剤、医薬・化学工業</strong>など。</li>
              <li>消火は<strong>水溶性液体用泡消火剤</strong>が適し、霧状水で冷却・希釈も可能。粉末消火剤や二酸化炭素も有効。</li>
              <li>貯蔵は<strong>冷暗所・換気良好な場所で密栓</strong>し、直射日光や火気を避ける。</li>
            </ol>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！アセトンの落とし穴</h4>
            <p>選択肢では、水への溶けやすさと蒸気の重さ、燃焼範囲の広さの言い換えに注意しましょう。</p>
            <ul className={shared.compact}>
              <li>アセトンは水にもよく溶ける。「水にはほとんど溶けない」「水溶性が低い」などと書いてあったら×。</li>
              <li>アルコール・エーテル・クロロホルムなど多くの有機溶媒にもよく溶ける。「有機溶媒には溶けにくい」としてくる選択肢も×。</li>
              <li>蒸気比重は2.0で空気より重い。「空気より軽く、上方に滞留しやすい」と書かれていたら誤り。</li>
              <li>引火点は−20℃と低く、燃焼範囲は2.5〜12.8 vol％と非常に広い。「燃焼範囲が狭い」「高温でないと燃えにくい」などの表現は疑ってかかる。</li>
            </ul>
          </div>
        </section>

        {/* 8. ピリジン */}
        <section className={shared.section}>
          <h2>ピリジン（C₅H₅N）</h2>

          <div className={shared.bandCard}>
            <p>無色で、刺激のある特有の悪臭をもつ含窒素芳香族化合物で、水によく溶ける第1石油類の液体です。</p>
          </div>

          <h3>ピリジンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">ピリジンの物理的性質</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質</th>
                  <th scope="col">代表値</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.98</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>115.5℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>20℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約482℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>1.8 ~ 12.4vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>2.7</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ピリジンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>水によく溶ける</strong>（窒素原子が水と水素結合しやすいため）。アルコール・エーテルなどの有機溶媒にも溶ける。</li>
              <li>
                <strong>刺激的な悪臭</strong>をもち、蒸気を<strong>吸入すると頭痛・めまい・吐き気</strong>を生じる。長期暴露では<strong>肝臓・腎臓に障害</strong>を与える。皮膚からも吸収されやすい。
              </li>
              <li>引火点は<strong>20℃</strong>で、常温でも火災の危険がある。蒸気は<strong>空気より重く</strong>、低所に滞留して<strong>爆発の危険</strong>がある。</li>
              <li>酸化性物質（硝酸・過酸化物など）と混合すると、発熱・発火・爆発の危険がある。</li>
              <li>主な用途は<strong>医薬品・農薬・染料の合成原料</strong>であり、溶剤としても利用される。</li>
              <li>貯蔵は<strong>冷暗所・換気良好な場所で密栓</strong>し、直射日光や火気を避ける。</li>
            </ol>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！ピリジンの落とし穴</h4>
            <p>ベンゼン・トルエンと「同じような第1石油類」と思っていると、選択肢でひっかけられます。</p>
            <ul className={shared.compact}>
              <li>水に「<strong>よく溶ける</strong>」のがポイント。ベンゼン類のイメージで「水に溶けにくい」「ほとんど溶けない」と書いてあれば×。</li>
              <li>蒸気比重は2.7で空気より重い。選択肢で「空気より軽く、上方にたまりやすい」とあったら×。</li>
              <li>引火点は20℃で、常温でも火災の危険がある。「常温では引火しにくい」という表現は疑ってかかる。</li>
              <li>刺激の強い悪臭に加え、<strong>肝臓・腎臓への毒性</strong>があることもセットで覚えておく。</li>
            </ul>
          </div>
        </section>

        {/* 9. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <Class1PetroleumPropertiesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}