// src/app/basics/properties_prevention/class3_petroleum_properties/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Class3PetroleumPropertiesQuiz from './Class3PetroleumPropertiesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '第3石油類の性状とは？重油・アニリン・エチレングリコールの引火点【乙4対策】',
  description:
    '危険物乙4。第3石油類の引火点は70℃以上200℃未満。重油・クレオソート油・アニリン・ニトロベンゼン・エチレングリコール・グリセリンの性状と水溶性区分。非水溶性2,000L・水溶性4,000Lの指定数量。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/class3_petroleum_properties',
  },
  robots: 'index,follow',
  openGraph: {
    title: '第3石油類の性状とは？重油・アニリン・エチレングリコールの引火点【乙4対策】',
    description:
      '危険物乙4。第3石油類の引火点は70℃以上200℃未満。重油・クレオソート油・アニリン・ニトロベンゼン・エチレングリコール・グリセリンの性状と水溶性区分。非水溶性2,000L・水溶性4,000Lの指定数量。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/class3_petroleum_properties',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '第3石油類の性状とは？重油・アニリン・エチレングリコールの引火点【乙4対策】',
    description:
      '危険物乙4。第3石油類の引火点は70℃以上200℃未満。重油・クレオソート油・アニリン・ニトロベンゼン・エチレングリコール・グリセリンの性状と水溶性区分。非水溶性2,000L・水溶性4,000Lの指定数量。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function Class3PetroleumPropertiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '10節：第3石油類の性状' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 重油 */}
        <section className={shared.section}>
          <h2>重油</h2>

          <div className={shared.bandCard}>
            <p>重油は、<strong>褐色〜暗褐色</strong>の粘度の高い液体状の石油製品で、特有の臭気を有します。主として各種の炭化水素からなる混合物です。</p>
          </div>

          <h3>重油の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">重油の物理的性質</caption>
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
                <tr>
                  <th scope="row" className={shared.stickyCol}>比重</th>
                  <td>約0.9〜1.0（水と同程度〜やや軽い）<small>※第3石油類でも比重が1未満の例（潤滑油など）がある。重油はその代表例。</small></td>
                </tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>300℃以上</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約250℃〜380℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>A・B重油：60℃以上／C重油：70℃以上（＝いずれも第3石油類）</td></tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼範囲</th>
                  <td>（実用データ一定せず／低蒸気圧のため規定値なし）<small>※ミスト状は着火しやすい</small></td>
                </tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>&gt; 1（低所に滞留しやすい）</td></tr>
              </tbody>
            </table>
          </div>
          <p><small>※ 製品・測定条件で前後します。本表は試験対策上の代表値です。</small></p>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>重油の性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>重油は、日本産業規格により1種（A重油）・2種（B重油）・3種（C重油）に分類。1種→2種→3種の順に粘度↑（高くなる）。</li>
              <li><strong>水に溶けない（非水溶性）</strong>。不純物として含まれる<strong>硫黄 S</strong>は燃焼で<strong>二酸化硫黄 SO₂</strong>を生じ、有害。</li>
              <li><strong>第3石油類（非水溶性）・危険等級 III</strong>。<strong>指定数量 2,000 L</strong>（非水溶性）。</li>
              <li><strong>引火点が高い</strong>（A/B：60℃以上、C：70℃以上）ため常温では引火しにくいが、<strong>加熱・霧化で着火しやすくなる</strong>点に注意。</li>
              <li><strong>低蒸気圧</strong>だが、発生した可燃性蒸気やミストは低所に滞留・床面沿いに流動しやすい。ピット・地下室・溝などの低い所に蒸気がたまりやすい。</li>
              <li><strong>静電気が発生・蓄積しやすい</strong>（不導体）。<strong>移送・ろ過・噴霧時は接地（アース）とボンディング</strong>を確実に。</li>
              <li><strong>加温取扱い</strong>：粘度低下のために予熱するが、<strong>過加熱は蒸気濃度↑→火災リスク↑</strong>。蒸気加熱コイル等は温度管理と漏れ点検を徹底。</li>
              <li>
                <strong>消火方法</strong>：<strong>泡消火剤</strong>（アルコール耐性不要）・<strong>粉末</strong>・<strong>二酸化炭素</strong>が有効。<strong>放水直射は拡散・流出拡大のおそれ</strong>（水霧で冷却・近接防護）。
              </li>
              <li><strong>保管</strong>：<strong>密閉容器・通風良好・火気厳禁</strong>。直射日光・高温を避け、こぼれ止め縁（防油堤）や漏洩検知を設ける。</li>
              <li><strong>流出時</strong>：水より軽く<strong>水面に広がる</strong>。<strong>オイルフェンス</strong>で拡散抑制し、吸着材で回収（側溝や下水へ流さない）。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！重油のおさらい</h4>
            <ul className={shared.compact}>
              <li>重油は<strong>第3石油類（非水溶性）・危険等級Ⅲ</strong>に分類される。</li>
              <li>引火点は<strong>A/B重油≒60℃以上</strong>、C重油≒70℃以上と高く、常温では引火しにくいが、加熱・ミスト化で着火しやすくなる。</li>
              <li>水に溶けず、比重は水と同程度〜やや軽い。流出時は水面に広がり、オイルフェンス・吸着材で拡散抑制する。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>「重油は水に溶けやすい水溶性の第3石油類である」→✕。重油は水に溶けない非水溶性の第3石油類で、流出時は水より軽く水面に広がる。</p>
          </div>
        </section>

        {/* 2. クレオソート油 */}
        <section className={shared.section}>
          <h2>クレオソート油</h2>

          <div className={shared.bandCard}>
            <p><strong>黄色〜濃黄褐色〜暗緑色〜黒色</strong>の<strong>粘稠な油状液体</strong>で、特有の強い刺激臭をもつ混合物です。</p>
          </div>

          <h3>クレオソート油の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">クレオソート油の物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約1.1（<strong>水より重い</strong>／水面ではなく<strong>沈下・層状</strong>になりやすい）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>200℃以上（混合物のため幅あり）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約75℃（第3石油類の範囲）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約330〜400℃（文献により幅。代表値は335℃前後）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>溶解性</th><td><strong>水にほとんど不溶</strong>。エタノール・エーテル・ベンゼン等の有機溶剤に可溶</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>&gt; 1（<strong>蒸気は低所滞留</strong>しやすい／換気と立入管理）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気圧（常温）</th><td>低い（揮発しにくいが、<strong>霧状</strong>になると着火しやすい）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>電気伝導性</th><td>低い（<strong>不導体→静電気帯電</strong>に注意：移送・ろ過時）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>粘度</th><td>高粘度（<strong>低温で急増</strong>：加温取扱い時は過熱に注意）</td></tr>
              </tbody>
            </table>
          </div>
          <p><small>※ 製品や測定条件で前後します。上記は受験対策上の代表値・要点を整理。</small></p>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>クレオソートの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>コールタールを蒸留して得られる。木材の防腐剤・防虫剤などに用いる。</li>
              <li>人体に<strong>有毒</strong>（皮膚からも吸収）。刺激臭があり、皮膚・眼・呼吸器を刺激する。</li>
              <li>水に不溶だが、<strong>アルコール・ベンゼン</strong>など有機溶剤に可溶。</li>
              <li><strong>フェノール類（クレゾール等）・ナフタレン・アントラセン</strong>などを含む混合物。</li>
              <li>一般に<strong>金属腐食性は小さい</strong>（ゴム・樹脂を侵すことがある）。</li>
              <li>区分：<strong>第4類・第3石油類（非水溶性）／危険等級III／指定数量 2,000 L</strong>。</li>
              <li>物性：比重≒1.1（<strong>水より重い→沈下・底部滞留</strong>）。蒸気比重&gt;1（<strong>低所滞留</strong>）。</li>
              <li>引火点は高め（目安75℃）で常温では引火しにくいが、<strong>加熱・霧化で着火しやすくなる</strong>。</li>
              <li>取扱：不導体につき<strong>静電気帯電</strong>に注意（移送・ろ過時はアース/ボンディング）。加温時は過熱・蒸気濃度上昇に注意。</li>
              <li>消火：<strong>泡（普通/耐アルコール不要）・粉末・二酸化炭素</strong>が有効。<strong>放水直射は拡散・流出拡大のおそれ</strong>（水霧で冷却）。</li>
              <li>保管：<strong>密閉・通風良好・火気厳禁</strong>。直射日光・高温を避け、こぼれ止め縁（防油堤）など漏えい対策を講じる。</li>
              <li>流出対応：<strong>水より重い</strong>ため沈降・底部に滞留。吸着材で回収し、側溝・下水へ流入させない（環境毒性に留意）。</li>
              <li>不適合物：<strong>強酸化剤</strong>とは混触回避（発熱・危険）。高温・火花・裸火を避ける。</li>
              <li>PPE：耐油手袋・保護眼鏡/フェイスシールド・防護衣を使用。皮膚汚染は速やかに除去・洗浄。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！クレオソート油のおさらい</h4>
            <ul className={shared.compact}>
              <li>クレオソート油は第4類・第3石油類（非水溶性）／危険等級Ⅲ／指定数量2,000Lに区分されます。</li>
              <li>比重は約1.1で水より重く、沈降・底部に滞留しやすい性質があります。</li>
              <li>引火点は約75℃と高く常温では引火しにくいものの、加熱・霧化すると着火しやすくなる点に注意します。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>
              「クレオソート油は水より軽く、流出時は水面に広がる」→×。クレオソート油の比重は約1.1で水より重く、水中で沈降し底部にたまりやすいため、流出時は底部滞留・下流への移動に注意します。
            </p>
          </div>
        </section>

        {/* 3. アニリン */}
        <section className={shared.section}>
          <h2>アニリン（C₆H₅NH₂）</h2>

          <div className={shared.bandCard}>
            <p>無色〜淡黄色の油状液体で、空気中で酸化されると次第に褐色を帯びます。芳香族アミン特有の刺激臭を有します。</p>
          </div>

          <h3>アニリンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">アニリンの物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約1.01〜1.02（<strong>水よりわずかに重い</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約185℃（純度・測定法で±）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約70℃（<small>閉カップ</small>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約615℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約1.2〜11 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約3.2（<strong>空気より重い</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>溶解性</th><td><strong>水に少量溶解（数％/20℃）</strong>、アルコール・エーテル・ベンゼンに可溶</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>電気伝導性</th><td>低い（<strong>不導体→移送時の静電気</strong>に注意）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>区分メモ</th><td><strong>第4類・第3石油類（<u>水溶性</u>）／危険等級III／指定数量 4,000 L</strong></td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>アニリンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>水にはわずかにしか溶けないが、ジエチルエーテル・エタノール・ベンゼンにはよく溶ける（水には少量のみ溶解）。</li>
              <li>
                区分：<strong>第4類・第3石油類（<u>水溶性</u>）／危険等級III／指定数量 4,000 L</strong>（非水溶性の第3石油類は2,000 Lとの対比が狙われる）。
              </li>
              <li>物性メモ：比重≈1.01〜1.02（<strong>水よりわずかに重い</strong>）／蒸気比重≈3.2（<strong>空気より重い＝低所滞留</strong>）。</li>
              <li>引火点≈70℃（閉カップ）。<strong>常温では引火しにくいが、加熱・霧化で着火リスク上昇</strong>。</li>
              <li><strong>不導体→静電気帯電</strong>に注意（移送・ろ過・噴霧時は接地／ボンディングを確実に）。</li>
              <li>有害性：<strong>毒性あり・皮膚吸収あり</strong>。メトヘモグロビン血症（チアノーゼ）などのおそれ。皮膚・眼・呼吸器を刺激。</li>
              <li>外観の変化：無色〜淡黄色だが、<strong>空気中で褐色化</strong>しやすい（酸化）。</li>
              <li>不適合物：<strong>強酸化剤</strong>との混触回避（発熱・危険）。酸類とは塩を作りやすく取り扱い注意。</li>
              <li>消火：<strong>泡（普通）・粉末・二酸化炭素</strong>が有効。<strong>放水直射は飛散・流出拡大</strong>のおそれ（<strong>水霧</strong>で冷却）。</li>
              <li>保管：<strong>密閉容器・通風良好・火気厳禁</strong>。直射日光・高温を避け、漏えい対策（こぼれ止め縁等）。</li>
              <li>流出時：<strong>水より重い＆少量溶解</strong>のため水域で拡散しやすい。吸着材で回収し、下水・水路への流入防止。</li>
              <li>PPE：耐薬品手袋・保護眼鏡／フェイスシールド・防護衣。皮膚汚染は速やかに除去・洗浄。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！アニリンのおさらい</h4>
            <ul className={shared.compact}>
              <li>アニリンは代表的な芳香族アミンで、<strong>第4類・第3石油類（水溶性）</strong>に分類されます。</li>
              <li><strong>指定数量は4,000 L</strong>（非水溶性の第3石油類は2,000 L→数値の対比がねらわれやすい）。</li>
              <li>水にはわずかにしか溶けませんが、有機溶媒（エタノール・エーテル・ベンゼンなど）にはよく溶けます。</li>
              <li>比重は約1.01〜1.02で<strong>水よりわずかに重く</strong>、蒸気比重は約3.2と<strong>空気より重い</strong>ため、低所滞留に注意します。</li>
              <li><strong>毒性・皮膚吸収があり、メトヘモグロビン血症</strong>（チアノーゼなど）を起こすおそれがあります。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！アニリンの区分</h4>
            <p>「アニリンは水に溶けない第3石油類（非水溶性）であり、指定数量は2,000 Lである」→<strong>×</strong></p>
            <p>アニリンは<strong>水溶性の第3石油類</strong>で、<strong>指定数量は4,000 L</strong>。非水溶性の第3石油類（重油・クレオソート油など）と数字を取り違えないように注意します。</p>
          </div>
        </section>

        {/* 4. ニトロベンゼン */}
        <section className={shared.section}>
          <h2>ニトロベンゼン（C₆H₅NO₂）</h2>

          <div className={shared.bandCard}>
            <p><strong>淡黄色の油状液体</strong>で、特有の芳香を有します。純品はほぼ無色だが、空気や光の作用で徐々に黄色に変化します。</p>
          </div>

          <h3>ニトロベンゼンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">ニトロベンゼンの物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約1.2（<strong>水より重い</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>融点</th><td>約5〜6℃（<strong>低温で固化することがある</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約211℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約88℃（<strong>第3石油類・危険等級III</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約480〜490℃（代表値482℃）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約1.8〜40 vol%（資料差あり／目安で把握）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約4.2（<strong>空気より重い＝低所滞留</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>溶解性</th><td><strong>水に難溶</strong>（微溶）／アルコール・エーテル・ベンゼンに可溶</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>電気伝導性</th><td>低い（<strong>不導体→静電気帯電</strong>に注意）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>区分メモ</th><td><strong>第4類・第3石油類（非水溶性）／指定数量 2,000 L</strong></td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ニトロベンゼンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>ニトロ化合物だが、第5類のような<strong>自己反応性</strong>（自然分解暴走）は原則なく、常温での爆発性もない。</li>
              <li>区分：<strong>第4類・第3石油類（非水溶性）／危険等級III／指定数量 2,000 L</strong>（※水溶性ではない）。</li>
              <li>物性：<strong>融点約5〜6℃</strong>（低温で固化しやすい）／<strong>引火点約88℃</strong>（常温では引火しにくいが、加熱・霧化で危険↑）。</li>
              <li>比重（20℃）≈1.2で<strong>水より重い</strong>。<strong>蒸気比重&gt;1</strong>で低所に滞留しやすい（ピット・溝・地下室に注意）。</li>
              <li>溶解性：<strong>水に難溶</strong>（微溶）。アルコール・エーテル・ベンゼンなどの有機溶媒に可溶。</li>
              <li><strong>不導体→静電気帯電</strong>に注意。移送・ろ過・噴霧時は接地（アース）/ボンディングを確実に。</li>
              <li>有害性：<strong>毒性あり・皮膚吸収あり</strong>。メトヘモグロビン血症（チアノーゼ）等の恐れ。皮膚・眼・粘膜を刺激。</li>
              <li>不適合物：<strong>強酸化剤</strong>との混触は発熱・危険。高温・火花・裸火を避ける。</li>
              <li>保管：<strong>密閉容器・通風良好・火気厳禁</strong>。直射日光/高温を避け、漏えい対策（防油堤・受け皿）。低温固化に伴う加温時は<strong>過熱防止</strong>。</li>
              <li>消火：<strong>泡（普通）・粉末・二酸化炭素</strong>が有効。<strong>放水直射は拡散・流出拡大</strong>の恐れ（<strong>水霧</strong>で冷却・遮へい）。</li>
              <li>流出対応：<strong>水より重い→沈下・底部滞留</strong>。吸着材で回収、側溝/下水への流入防止。水面拡散より<strong>底部汚染</strong>に注意。</li>
              <li>PPE：耐薬品手袋、保護眼鏡/フェイスシールド、防護衣。皮膚汚染は速やかに除去・洗浄、吸入時は新鮮空気へ。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！ニトロベンゼンのおさらい</h4>
            <ul className={shared.compact}>
              <li>ニトロベンゼンはニトロ化合物だが、第4類・第3石油類（非水溶性）に分類され、第5類のような自己反応性はない。</li>
              <li>融点は<strong>約5〜6℃</strong>で、低温では固化しやすい。冬季や寒冷地では<strong>固体</strong>になることがある。</li>
              <li>比重（20℃）は約1.2で<strong>水より重く</strong>、蒸気比重も空気より重い。漏えい時は沈降・底部滞留に注意する。</li>
              <li>水に難溶で、アルコール・エーテル・ベンゼンなどの有機溶媒に可溶。</li>
              <li>毒性が強く、皮膚吸収によりメトヘモグロビン血症（チアノーゼ）を起こすおそれがある。皮膚・眼・呼吸器への曝露を避ける。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>おまけのひっかけ注意！</h4>
            <p>「ニトロベンゼンはニトロ化合物なので、第5類危険物として取り扱う」→✕</p>
            <p>ニトロベンゼンは第4類・第3石油類（非水溶性）に分類される。第5類のような自己反応性（自然分解暴走）は原則もたない。</p>
            <p>「ニトロベンゼンは水より軽く、水面に浮いて拡散する」→✕</p>
            <p>比重は約1.2で水より重く、水中で沈降・底部に滞留しやすい。漏えい時は底部汚染・ピットや溝への滞留に注意。</p>
          </div>
        </section>

        {/* 5. エチレングリコール */}
        <section className={shared.section}>
          <h2>エチレングリコール（C₂H₄(OH)₂）</h2>

          <div className={shared.bandCard}>
            <p><strong>甘味と粘性のある無色の液体</strong>で、水やアルコールと任意割合で混和し、吸湿性の高い多価アルコールです。</p>
          </div>

          <h3>エチレングリコールの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">エチレングリコールの物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約1.11（<strong>水より重い</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>融点</th><td>約−13℃（<small>低温でも凍結しにくい</small>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約197℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約111℃（<small>閉カップ</small>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約413℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約3.2～15 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約2.1（<strong>空気より重い</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>溶解性</th><td><strong>水と任意割合で混和</strong>、アルコール・エーテルに可溶</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>エチレングリコールの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>水・エタノールに混和</strong>するが、<strong>ベンゼンには不溶</strong>（極性の差）。</li>
              <li>自動車エンジンの<strong>不凍液（クーラント）</strong>として用いられる（低凝固点・高沸点・防錆剤と併用）。</li>
              <li><strong>金属ナトリウム</strong>等のアルカリ金属と反応して<strong>水素</strong>を発生（−OH基をもつ多価アルコール）。</li>
              <li>区分：<strong>第4類・第3石油類（<u>水溶性</u>）／危険等級III／指定数量 4,000 L</strong>（※非水溶性の第3石油類は2,000 L）。</li>
              <li>代表物性：比重≈1.11（<strong>水より重い</strong>）／引火点≈111℃（閉カップ）→<strong>常温では引火しにくい</strong>が、<strong>加熱・霧化で着火性↑</strong>。</li>
              <li><strong>吸湿性・粘性</strong>が高い（液温低下で粘度↑）。移送・抜出しは加温し過ぎに注意。</li>
              <li><strong>静電気</strong>：炭化水素ほどではないが帯電管理は必要（接地・ボンディング、低流速）。</li>
              <li><strong>毒性（誤飲注意・甘味あり）</strong>：摂取で腎障害等のおそれ。皮膚・眼・吸入も刺激。PPE（耐薬品手袋・保護眼鏡）を着用。</li>
              <li><strong>不適合物</strong>：強酸化剤（発熱・危険）、強酸・強塩基（腐食・反応）。アルカリ金属・金属水化物とは禁忌。</li>
              <li><strong>保管</strong>：密閉容器・通風良好・火気厳禁。直射日光・高温を避け、<strong>水と混和</strong>するため漏えい時の拡散に備える。</li>
              <li><strong>消火</strong>：<strong>耐アルコール泡</strong>（水溶性液体のため）、粉末、二酸化炭素が有効。水霧で冷却・防護（直射放水は拡散のおそれ）。</li>
              <li><strong>流出対応</strong>：水と混和し<strong>広範囲に拡散</strong>。堤止め（防液堤・排水閉塞）→吸着材回収。下水・水域への流入防止。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！エチレングリコールのおさらい</h4>
            <ul className={shared.compact}>
              <li>第4類・第3石油類<strong>（水溶性）</strong>、危険等級Ⅲ、指定数量は<strong>4,000 L</strong>。</li>
              <li><strong>水・エタノールと任意割合で混和</strong>し、ベンゼンには不溶（極性の差）。</li>
              <li>甘味と粘性のある多価アルコールで、<strong>自動車用不凍液（クーラント）</strong>として用いられる。</li>
              <li>引火点≒<strong>111℃</strong>（閉カップ）で常温では引火しにくいが、<strong>加熱・霧化で着火性が高まる</strong>。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>おまけのひっかけ注意！</h4>
            <p>
              「エチレングリコールは<strong>第2石油類</strong>で、水に溶けにくい」→<strong>×</strong>。
              エチレングリコールは<strong>第4類・第3石油類（水溶性）</strong>で、水やエタノールと任意割合で混和する（指定数量は<strong>4,000 L</strong>）。
            </p>
          </div>
        </section>

        {/* 6. グリセリン */}
        <section className={shared.section}>
          <h2>グリセリン（C₃H₅(OH)₃）</h2>

          <div className={shared.bandCard}>
            <p>無色・無臭で<strong>甘味</strong>のある<strong>粘稠な多価アルコール</strong>。強い<strong>吸湿性</strong>をもつ液体です。</p>
          </div>

          <h3>グリセリンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">グリセリンの物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約1.26〜1.27（<strong>水より重い</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>融点</th><td>約17〜18℃（<small>室温付近で固化することがある</small>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約290〜291℃（<small>加熱で分解しやすい</small>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約160〜190℃（<small>閉カップ</small>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約370℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約3.2（<strong>空気より重い</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>溶解性</th><td><strong>水・エタノールと任意割合で混和</strong>，エーテルに可溶／ベンゼンに難溶</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>グリセリンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>ニトログリセリン（爆薬）の原料となる。発煙硝酸＋濃硫酸で硝化されるが、乙4レベルでは硝化操作は行わない（取扱厳禁）。</li>
              <li>水に<strong>任意割合で混和</strong>し、強い<strong>吸湿性</strong>をもつ。化粧品・水彩絵具などに利用。エタノールに混和、<strong>ジエチルエーテル・二硫化炭素・ガソリン・ベンゼンには難溶</strong>。</li>
              <li>アルコールは−OHの数で分類。グリセリンは−OHを3個有する<strong>三価アルコール</strong>。</li>
              <li>区分：<strong>第4類・第3石油類（<u>水溶性</u>）／危険等級III／指定数量 4,000 L</strong>（非水溶性第3石油類は2,000 L）。</li>
              <li>代表物性：比重≈1.26（<strong>水より重い</strong>）／<strong>融点17〜18℃</strong>（室温で<strong>固化し得る</strong>）／引火点≈160〜190℃（常温では引火しにくい）。</li>
              <li>加温取扱い：固化解消で加温するが、<strong>過熱は禁物</strong>。高温・酸性条件で<strong>アクロレイン</strong>（刺激性・有害）が生成しうる。</li>
              <li>反応性：<strong>アルカリ金属（Na/K）と反応してH₂発生</strong>（アルコール一般の性質）。<strong>強酸化剤</strong>（過マンガン酸塩等）とは混触回避。</li>
              <li>静電気：炭化水素ほどではないが、<strong>移送・ろ過時は接地／ボンディング</strong>で帯電管理。</li>
              <li>消火：<strong>耐アルコール泡</strong>（水溶性液体）、<strong>粉末・二酸化炭素</strong>が有効。<strong>放水直射は飛散・拡散</strong>のおそれ（<strong>水霧</strong>で冷却・遮へい）。</li>
              <li>保管：<strong>密閉容器・通風良好・火気厳禁</strong>。吸湿・混和による漏えい拡散に備え、受け皿やこぼれ止め縁を設ける。</li>
              <li>流出対応：<strong>水と混和→広範囲に拡散</strong>。排水系を一時閉塞し堤止め→吸着材で回収。下水・水域への流入防止。</li>
              <li>健康：低揮発だが多量接触で皮膚・眼刺激。PPE（耐薬品手袋・保護眼鏡）を着用。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！グリセリンのおさらい</h4>
            <ul className={shared.compact}>
              <li>グリセリンは第4類・第3石油類（水溶性）／危険等級Ⅲに分類され、指定数量は<strong>4,000 L</strong>。</li>
              <li>水・エタノールとは任意割合で混和し、強い吸湿性をもつ（保湿剤・不凍液成分など）。</li>
              <li>融点は<strong>約17〜18℃</strong>で、室温付近でも固化し得る→固まったからといって安易な過熱はNG。</li>
              <li>ニトログリセリン（爆薬）の原料になる多価アルコールである点も押さえておく。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>おまけのひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「ニトログリセリン（爆薬）」と混同しがちだが、区分は第5類ではなく「第4類・第3石油類（水溶性）」。</li>
              <li>水と任意割合で混和して広範囲に拡散する点で、重油・クレオソート油のような「沈降型」と対照的。</li>
            </ul>
          </div>
        </section>

        {/* 7. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <Class3PetroleumPropertiesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}