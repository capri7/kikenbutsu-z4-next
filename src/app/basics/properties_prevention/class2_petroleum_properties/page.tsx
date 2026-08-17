// src/app/basics/properties_prevention/class2_petroleum_properties/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Class2PetroleumPropertiesQuiz from './Class2PetroleumPropertiesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '第2石油類の性状とは？灯油・軽油・キシレンの引火点【乙4対策】',
  description:
    '危険物乙4。第2石油類の引火点は21℃以上70℃未満。灯油・軽油・キシレン・クロロベンゼン・酢酸・アクリル酸の性状と水溶性区分。混同しやすい引火点・比重の数値を整理。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/class2_petroleum_properties',
  },
  robots: 'index,follow',
  openGraph: {
    title: '第2石油類の性状とは？灯油・軽油・キシレンの引火点【乙4対策】',
    description:
      '危険物乙4。第2石油類の引火点は21℃以上70℃未満。灯油・軽油・キシレン・クロロベンゼン・酢酸・アクリル酸の性状と水溶性区分。混同しやすい引火点・比重の数値を整理。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/class2_petroleum_properties',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '第2石油類の性状とは？灯油・軽油・キシレンの引火点【乙4対策】',
    description:
      '危険物乙4。第2石油類の引火点は21℃以上70℃未満。灯油・軽油・キシレン・クロロベンゼン・酢酸・アクリル酸の性状と水溶性区分。混同しやすい引火点・比重の数値を整理。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function Class2PetroleumPropertiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '9節：第2石油類の性状' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 第2石油類 */}
        <section className={shared.section}>
          <h2>第2石油類</h2>

          <div className={shared.bandCard}>
            <p>
              第2石油類とは、常圧（1気圧）において<strong>引火点が21℃以上70℃未満</strong>の液体をいいます。
              家庭で身近な灯油・軽油・キシレンなどの<strong>非水溶性</strong>に加え、濃酢酸のような<strong>水溶性</strong>の液体も含まれます。
            </p>
            <p>第1石油類より引火点は高いが、加熱されると可燃性蒸気を発生して火災・爆発の危険があるため、<strong>温度管理と換気が重要</strong>です。</p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>第2石油類は引火点が「<strong>21℃以上70℃未満</strong>」です。</p>
            <p>21℃ちょうどは第2石油類、70℃ちょうどは第3石油類になるところを整理しておきましょう。</p>
          </div>
        </section>

        {/* 2. 灯油 */}
        <section className={shared.section}>
          <h2>灯油</h2>

          <div className={shared.bandCard}>
            <p><strong>無色～淡黄色</strong>（経年で<strong>黄褐色</strong>になることあり）。特有の臭気を有します。</p>
          </div>

          <h3>灯油の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">灯油の物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重</th><td>約0.8</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>145℃〜270℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>40℃以上</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約220℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>1.1 ～ 6.0 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>4.5（空気より重い）</td></tr>
              </tbody>
            </table>
          </div>
          <p><small>※ 製品・測定条件で前後します。本表は試験対策上の代表値です。</small></p>

          <div className={shared.callout}>
            <h3>試験TIP</h3>
            <p>
              第2石油類（灯油など）は<strong>引火点21～70℃未満</strong>。
              蒸気は<strong>空気より重く低所滞留</strong>、水に<strong>不溶</strong>で<strong>浮く</strong>ため泡・粉末系の消火剤が有効です。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>灯油の性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>灯油に<strong>ガソリンを混合</strong>してはいけません。引火点が大きく低下し、極めて<strong>引火しやすく</strong>なります。</li>
              <li>灯油を<strong>霧状（ミスト）や薄い膜</strong>にすると、空気との接触面積が増え<strong>着火しやすく</strong>なります（噴霧・雑巾への広がりに注意）。</li>
              <li>灯油は<strong>電気不導体</strong>で、移送・小分け時の流動で<strong>静電気</strong>が発生しやすい。容器間の<strong>アース・ボンディング</strong>で放電対策を行うこと。</li>
              <li>灯油は<strong>水に不溶</strong>・<strong>水より軽い</strong>ため<strong>水面に浮く</strong>。<strong>放水消火は拡散の危険</strong>があるので禁物（冷却のための<strong>霧状水</strong>は可）。</li>
              <li>有効な消火剤は<strong>泡（フォーム）</strong>・<strong>粉末</strong>・<strong>二酸化炭素</strong>。表面を覆って<strong>窒息・遮断</strong>することが要点。</li>
              <li>灯油の<strong>蒸気は空気より重い</strong>ため、<strong>低所に滞留</strong>しやすい。<strong>床面近くの換気</strong>・<strong>ドレン・ピット</strong>周りの着火源管理が重要。</li>
              <li>保管は<strong>密栓・冷暗所</strong>・<strong>換気良好</strong>・<strong>火気厳禁</strong>で行う。加熱器具への給油は<strong>完全消火・十分冷却後</strong>に実施する。</li>
              <li><strong>専用・導電性の容器</strong>を用い、<strong>注入口に金属接触</strong>させて静電気を逃がす。<strong>こぼれは直ちに拭き取り</strong>、廃布は密閉容器へ。</li>
              <li><strong>誤給油防止</strong>（ガソリンとの取り違え）に注意。<strong>表示の明確化</strong>・<strong>専用ポリ缶</strong>使用・<strong>小分け時のラベル</strong>徹底。</li>
            </ol>
          </div>
        </section>

        {/* 3. 軽油 */}
        <section className={shared.section}>
          <h2>軽油</h2>

          <div className={shared.bandCard}>
            <p>精製直後は無色であるが、出荷前に精製会社により淡黄〜淡褐色や薄緑色に着色されていることがあります。</p>
            <p>また、石油臭があります。</p>
          </div>

          <h3>軽油の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">軽油の物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約0.85</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>170℃〜370℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>45℃以上</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約220℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>1.0〜6.0vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重</th><td>約4.5（空気より重い）</td></tr>
              </tbody>
            </table>
          </div>
          <p><small>※ 製品や測定条件で前後します。試験対策上の代表値を記載しています。</small></p>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>軽油の性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>軽油に<strong>第1類</strong>（酸化性固体）を接触させたり、<strong>第6類</strong>（酸化性液体）を<strong>混入</strong>してはいけません。強い酸化作用で<strong>発熱・発火</strong>のおそれ。</li>
              <li>軽油は<strong>電気不導体</strong>で、移送・小分け時に<strong>静電気</strong>が発生しやすい。容器間の<strong>アース/ボンディング</strong>で放電対策を行う。</li>
              <li><strong>霧状（ミスト）や薄膜</strong>になると空気との接触面積が増え<strong>着火しやすく</strong>なる（噴霧・ウエス広がりに注意）。</li>
              <li><strong>水に不溶</strong>・<strong>水より軽い</strong>ため<strong>水面に浮く</strong>。放水<strong>直噴は拡散</strong>の危険（冷却は<strong>霧状水</strong>、消火は<strong>泡・粉末・CO₂</strong>が有効）。</li>
              <li>蒸気は<strong>空気より重い</strong>ため<strong>低所滞留</strong>。床面近くの<strong>換気</strong>、<strong>ピット・側溝</strong>周りの着火源管理を徹底。</li>
              <li>保管は<strong>密栓・冷暗所</strong>・<strong>換気良好</strong>・<strong>火気厳禁</strong>。給油は<strong>エンジン停止・完全消火・十分冷却後</strong>に行う。</li>
              <li><strong>専用（導電性）容器</strong>を使用し、注入口で<strong>金属接触</strong>させて静電気を逃がす。こぼれは直ちに拭き取り、汚染物は<strong>密閉容器</strong>で保管・処理。</li>
              <li><strong>誤給油防止</strong>（灯油・ガソリンとの取り違え）を徹底。<strong>明確な表示</strong>・<strong>色分け容器</strong>・小分け時の<strong>ラベリング</strong>を行う。</li>
              <li>漏えい時は<strong>下流・低所</strong>への広がりを防ぐため<strong>防油堤・吸着材</strong>で囲い、<strong>側溝・排水路</strong>への流入を防止（環境汚染対策）。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！灯油と軽油のちがい</h4>
            <p>灯油と軽油はいずれも第2石油類で、水に不溶・蒸気は空気より重い性質をもちます。</p>
            <p>灯油は家庭用燃料（ストーブ・ボイラーなど）として使われるのに対し、軽油はディーゼルエンジン用燃料として使われる点を整理しておきましょう。</p>
          </div>
        </section>

        {/* 4. キシレン */}
        <section className={shared.section}>
          <h2>キシレン（C₆H₄(CH₃)₂）</h2>

          <div className={shared.bandCard}>
            <p>無色の液体で、芳香族炭化水素特有の甘い臭いをもち、オルト（o）・メタ（m）・パラ（p）の3種の異性体があります。</p>
          </div>

          <h3>キシレンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">キシレンの物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約0.86～0.88</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約138～144℃（異性体により差）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約27～32℃（異性体により異なる。下表参照）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約460～465℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約1.0～7.0 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約3.7（空気より重い）</td></tr>
              </tbody>
            </table>
          </div>

          <h3>異性体別の引火点</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">キシレンの異性体別引火点</caption>
              <colgroup>
                <col className={styles.colNature} />
                <col className={styles.colRepresentativeValue} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>異性体</th>
                  <th scope="col">引火点</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row" className={shared.stickyCol}>オルトキシレン（o-キシレン）</th><td>約32℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>メタキシレン（m-キシレン）</th><td>約27℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>パラキシレン（p-キシレン）</th><td>約27℃</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>キシレンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li>3種の異性体（<strong>オルト</strong>・<strong>メタ</strong>・<strong>パラ</strong>）がある。（物性は概ね類似、<strong>沸点にわずかな差</strong>）。</li>
              <li><strong>水に不溶</strong>で水より軽く<strong>水面に浮く</strong>。一方、<strong>有機溶媒（エタノール・エーテル等）に可溶</strong>。</li>
              <li>蒸気には<strong>有害性</strong>（頭痛・めまい等の<strong>中枢神経抑制</strong>）。<strong>換気徹底</strong>、長時間作業では保護具の選定。</li>
              <li>
                <strong>第2石油類</strong>で<strong>引火点27～32℃</strong>（異性体差あり）。蒸気は<strong>空気より重く低所滞留</strong>→床面・ピット・側溝の<strong>着火源管理</strong>と<strong>換気</strong>が重要。
                <strong>静電気</strong>対策（アース/ボンディング）を行う。
              </li>
              <li><strong>放水直噴は拡散</strong>の危険（浮いて流出）。<strong>泡（フォーム）・粉末・CO₂</strong>が有効。容器冷却は<strong>霧状水</strong>で。</li>
              <li><strong>酸化剤との接触厳禁</strong>（濃硝酸・過マンガン酸塩等）。<strong>火気厳禁</strong>、<strong>防爆型機器</strong>・静電気対策を施し、<strong>密栓・冷暗所・換気良好</strong>な場所に保管。</li>
              <li>漏えい時は<strong>吸着材</strong>で囲い込み、<strong>排水路へ流入防止</strong>。付着布は<strong>密閉容器</strong>で一時保管。取扱いは<strong>耐溶剤手袋</strong>・<strong>保護眼鏡</strong>を着用。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！キシレンの引火点</h4>
            <ul className={shared.compact}>
              <li>キシレンは異性体によって引火点が異なる。<strong>オルトキシレンが最も高く約32℃</strong>、メタ・パラキシレンは<strong>約27℃</strong>。</li>
              <li>いずれも第2石油類の範囲（21℃以上70℃未満）に収まる。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>「キシレンは水に溶けやすい第1石油類である」→ ×。キシレンはいずれも第2石油類の非水溶性液体で、水より軽く水面に浮きます。</p>
          </div>
        </section>

        {/* 5. クロロベンゼン */}
        <section className={shared.section}>
          <h2>クロロベンゼン（C₆H₅Cl）</h2>

          <div className={shared.bandCard}>
            <p>無色の液体で、特有の芳香族臭をもつ有機溶剤です。</p>
          </div>

          <h3>クロロベンゼンの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">クロロベンゼンの物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約1.10（<strong>水より重い</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約132℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約28℃（<strong>第2石油類</strong>）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約464℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約1.3 ～ 10 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約3.9（<strong>空気より重い</strong>）</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>クロロベンゼンの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>水に不溶</strong>。アルコール・エーテル等の<strong>有機溶媒に可溶</strong>。液体の<strong>比重は1.1（約）で水より重い</strong>ため、漏えい時は<strong>水中で下層</strong>にたまりやすい。</li>
              <li>蒸気は<strong>空気より重い（蒸気比重≈3.9）</strong>ため<strong>低所滞留</strong>。ピット・側溝・地下室では<strong>換気徹底</strong>と<strong>着火源管理</strong>が必須。</li>
              <li><strong>第2石油類（引火点≈28℃）</strong>で可燃。液体は<strong>電気不導体</strong>のため、移送・小分け時は<strong>静電気対策（アース/ボンディング）</strong>を行う。</li>
              <li><strong>放水直噴は拡散</strong>の危険（下層流動で広がる）。消火は<strong>泡（フォーム）・粉末・CO₂</strong>が有効。容器冷却は<strong>霧状水</strong>で行う。</li>
              <li><strong>酸化剤（第1類・第6類）との接触厳禁</strong>。強い酸化で<strong>発熱・発火</strong>のおそれ。<strong>火気厳禁</strong>・<strong>防爆型機器</strong>の使用。</li>
              <li>漏えい時は<strong>吸着材</strong>や<strong>防油堤</strong>で囲い、<strong>排水路・下水への流入防止</strong>。水より重いため<strong>低部・下流</strong>へ移動しやすい点に留意。</li>
              <li>健康影響：蒸気の<strong>吸入で頭痛・めまい（中枢神経抑制）</strong>、皮膚の<strong>脱脂</strong>。取扱いは<strong>換気</strong>・<strong>耐溶剤手袋</strong>・<strong>保護眼鏡</strong>・必要に応じ<strong>有機ガス用防毒マスク</strong>。</li>
              <li>保管：<strong>密栓・冷暗所・換気良好</strong>・<strong>火気厳禁</strong>。<strong>耐溶剤容器</strong>を用い、<strong>明確な表示（ラベル）</strong>と<strong>誤混入防止</strong>を徹底。</li>
              <li>燃焼時に<strong>有害ガス（HCl等）</strong>を生成しうる。<strong>風上待避</strong>・<strong>呼吸保護</strong>・周囲への<strong>拡散抑制</strong>を意識して対応。</li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！クロロベンゼンのまとめ</h4>
            <ul className={shared.compact}>
              <li>クロロベンゼンは<strong>第2石油類（引火点は約28℃）</strong>に分類される可燃性液体です。</li>
              <li>水には溶けにくく、比重は約1.1で水より重いため、流出すると水中で下層にたまりやすい性質があります。</li>
              <li>蒸気比重は約3.9と空気より重く、低所に滞留しやすいため、ピット・側溝・地下室では換気と着火源の管理が重要です。</li>
            </ul>
          </div>
        </section>

        {/* 6. ブタノール */}
        <section className={shared.section}>
          <h2>ブタノール（CH₃(CH₂)₃OH）</h2>

          <div className={shared.bandCard}>
            <p>無色の液体で、やや刺激性のある発酵臭をもつアルコールです。</p>
          </div>

          <h3>ブタノールの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">ブタノールの物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約0.81</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約117～118℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>凝固点（融点）</th><td>約－89℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約35℃（アルコール類）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約343℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約1.4～11.2 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約2.6（空気より重い）</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ブタノールの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>4種の異性体</strong>（1-／2-ブタノール、イソブタノール、tert-ブタノール）。本節は<strong>1-ブタノール</strong>（n-ブチルアルコール）。</li>
              <li><strong>消防法：第4類 第2石油類</strong>（引火点≈35℃）。<strong>アルコール類ではない</strong>（アルコール類は炭素数1～3）。</li>
              <li><strong>水にやや溶ける</strong>（部分溶解）／多くの<strong>有機溶媒に可溶</strong>。漏えい時は<strong>吸着材</strong>で回収し、排水系への<strong>流入防止</strong>を徹底。</li>
              <li>蒸気は<strong>空気より重く</strong>、<strong>低所滞留</strong>。ピット・側溝・床面近くの<strong>換気</strong>と<strong>着火源管理</strong>を厳格に。</li>
              <li>流動・小分け時に<strong>静電気</strong>が発生しうる。<strong>金属接触（ボンディング）</strong>と容器の<strong>アース</strong>で放電対策。</li>
              <li><strong>消火</strong>：<strong>泡（フォーム）</strong>、<strong>粉末</strong>、<strong>CO₂</strong>が有効。<strong>霧状水</strong>は冷却・希釈目的で使用（<strong>直噴は拡散</strong>の恐れ）。※泡の種類はSDSの推奨に従う。</li>
              <li><strong>酸化剤との接触厳禁</strong>。加熱・燃焼時に<strong>有害性ガス</strong>を生じるおそれ→<strong>風上待避</strong>と適切な<strong>呼吸保護</strong>。</li>
              <li>健康影響：蒸気・ミスト吸入で<strong>中枢神経症状</strong>（頭痛・めまい等）、皮膚の<strong>脱脂・刺激</strong>。<strong>換気徹底</strong>、<strong>耐溶剤手袋</strong>・<strong>保護眼鏡</strong>等を着用。</li>
              <li>保管：<strong>密栓・冷暗所・換気良好・火気厳禁</strong>。<strong>明確な表示</strong>で誤混入・誤使用を防止。</li>
            </ol>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！（ブタノール）</h4>
            <p>「ブタノールは消防法上アルコール類である」→ ×。ブタノールは第4類 第2石油類に分類され、炭素数4のため「アルコール類（炭素数1〜3）」には含まれません。</p>
          </div>
        </section>

        {/* 7. 酢酸 */}
        <section className={shared.section}>
          <h2>酢酸（CH₃COOH）</h2>

          <div className={shared.bandCard}>
            <p>酢酸は、常温で無色の液体で、刺激性のある酢様の臭いをもつ弱酸です。</p>
          </div>

          <h3>酢酸の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">酢酸の物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約1.05</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約118℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>凝固点（融点）</th><td>約16.6～16.7℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約39～40℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約430～485℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約4.0～19.9 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約2.1（空気より重い）</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>酢酸の性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>アセトアルデヒド</strong>の酸化で得られる代表的な有機酸（工業的製法の一例）。</li>
              <li>純度<strong>約99%</strong>のほぼ無水の酢酸は<strong>16.6～16.7℃で固化</strong>し、<strong>氷酢酸</strong>と呼ばれる（17℃付近で結晶化）。</li>
              <li>
                <strong>強い腐食性</strong>を持つ水溶性の酸。コンクリートを腐食し、多くの金属（Zn, Fe, Mg 等）を<strong>腐食して水素</strong>を発生する。
                （アルミニウム（Al）は酸化皮膜で耐食性が比較的高い）。
              </li>
              <li>アルコールと反応して<strong>酢酸エステル（CH₃COOR）</strong>を生成。代表例：<strong>酢酸エチル</strong>（CH₃COOC₂H₅）。</li>
              <li><strong>食酢</strong>は酢酸<strong>約4～6%</strong>の水溶液。（本教材では化学品としての酢酸を扱う。飲用用途と混同しない）。</li>
              <li>
                <strong>第2石油類（水溶性）</strong>で可燃。<strong>引火点≈39～40℃</strong>。蒸気は<strong>空気より重く</strong>低所に滞留しやすい→ピット・側溝の<strong>換気/着火源管理</strong>が重要。
              </li>
              <li><strong>静電気対策</strong>：水系で導電性はあるが、移送・小分け時は<strong>アース/ボンディング</strong>を実施。容器は腐食に強い<strong>ステンレス・ガラス</strong>等を用いる。</li>
              <li><strong>消火</strong>：<strong>耐アルコール泡</strong>（AR系）・<strong>粉末</strong>・<strong>CO₂</strong>が有効。<strong>霧状水</strong>は冷却・希釈に使用（<strong>直噴は拡散</strong>の危険）。</li>
              <li><strong>不適合物</strong>：<strong>強酸化剤</strong>（発熱・暴走の危険）、<strong>強塩基</strong>（発熱反応）。混合禁止・区分保管を徹底。</li>
              <li>
                健康影響：蒸気/ミストの吸入で<strong>刺激・咳嗽</strong>、皮膚・眼に<strong>強い刺激/腐食</strong>。
                取扱いは<strong>換気徹底</strong>、<strong>耐酸手袋</strong>・<strong>保護眼鏡/フェイスシールド</strong>・必要に応じ<strong>有機ガス用防毒マスク</strong>を使用。
              </li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！酢酸のおさらい</h4>
            <ul className={shared.compact}>
              <li>酢酸は代表的な有機酸で、<strong>第2石油類（水溶性）</strong>に分類されます。</li>
              <li>純度が高い酢酸（ほぼ無水酢酸）は<strong>16.6〜16.7℃</strong>で固化し、「氷酢酸」と呼ばれます。</li>
              <li>引火点は約39〜40℃で可燃、蒸気は空気より重く（蒸気比重≒2.1）、低所に滞留しやすい性質があります。</li>
              <li>水に溶けて強い腐食性を示し、多くの金属を腐食させます。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>おまけのひっかけ注意！（酢酸）</h4>
            <p>「酢酸は水より軽いため、漏えいすると水面に浮く」→ ×。酢酸の比重は約1.05で水より重く、水中で下層にたまりやすい点に注意。</p>
          </div>
        </section>

        {/* 8. アクリル酸 */}
        <section className={shared.section}>
          <h2>アクリル酸（CH₂=CHCOOH）</h2>

          <div className={shared.bandCard}>
            <p>無色の液体で、酢酸に類似した刺激性のにおいをもつ不飽和カルボン酸です。</p>
          </div>

          <h3>アクリル酸の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">アクリル酸の物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>約1.05</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約141℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>融点</th><td>約13～14℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約48～55℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約395～438℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約3.9～19.8 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約2.5（空気より重い）</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>アクリル酸の性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>水・アルコール・エーテル</strong>などと<strong>任意割合で混和</strong>する（水溶性）。</li>
              <li>
                <strong>非常に重合しやすい</strong>ため、<strong>重合防止剤（例：MEHQ等）</strong>を添加して貯蔵する。阻害剤は<strong>酸素存在下</strong>で効果が発現する点に留意。
              </li>
              <li>
                重合を促進する条件：<strong>加熱・光</strong>、<strong>酸化性物質・過酸化物・塩基</strong>、<strong>金属塩/鉄さび</strong>等との接触・混触。局所加熱や停滞部の発熱に注意。
              </li>
              <li>
                融点が<strong>約13～14℃</strong>で<strong>凝固しやすい</strong>。融解時の<strong>過加熱は重合暴走・引火</strong>の危険→凝固させない保管と、融解時の<strong>緩やかな昇温・撹拌</strong>を徹底。
              </li>
              <li>
                <strong>強い刺激性/腐食性</strong>。皮膚・眼の<strong>化学熱傷</strong>、蒸気/ミスト吸入で<strong>粘膜刺激</strong>・咳嗽。
                適切な<strong>PPE（耐薬品手袋・保護眼鏡/フェイスシールド・防護衣）</strong>・<strong>換気</strong>を確保。
              </li>
              <li>
                <strong>第2石油類（水溶性）</strong>で可燃。<strong>引火点≈50℃</strong>、蒸気は<strong>空気より重い</strong>ため<strong>低所滞留</strong>→ピット・側溝周りの<strong>換気/着火源管理</strong>が重要。
              </li>
              <li><strong>静電気対策</strong>：移送・小分け時は<strong>アース/ボンディング</strong>を実施。配管・ホースの導電連続性を確保し、急速充填を避ける。</li>
              <li><strong>不適合物</strong>：<strong>強酸化剤・過酸化物・強塩基・アミン類・金属塩/さび</strong>。混合禁止・区分保管。</li>
              <li>
                <strong>容器・設備材質</strong>：<strong>ステンレス鋼（SUS304/316）</strong>、<strong>ガラス/ガラスライニング</strong>、<strong>HDPE等の耐薬品プラスチック</strong>。<strong>銅・銅合金</strong>などは避ける。
              </li>
              <li>
                <strong>消火</strong>：<strong>耐アルコール泡</strong>（AR系）・<strong>粉末</strong>・<strong>CO₂</strong>が有効。<strong>霧状水</strong>は冷却・希釈用（<strong>直噴は拡散</strong>の危険）。容器は周囲から<strong>冷却</strong>。
              </li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！アクリル酸の要点</h4>
            <ul className={shared.compact}>
              <li>アクリル酸は水やアルコールに溶ける水溶性の第2石油類です。</li>
              <li>融点は約13〜14℃で凝固しやすく、重合しやすい性質があります（重合防止剤を添加して貯蔵）。</li>
              <li>引火点は約50℃、蒸気比重は約2.5で空気より重く、低所に滞留しやすい点に注意します。</li>
              <li>蒸気やミストは強い刺激性・腐食性を示し、皮膚・眼・呼吸器への障害に注意します。</li>
              <li>消火には耐アルコール泡・粉末・CO₂が有効で、霧状水は容器冷却用として使用します（直噴は拡散のおそれ）。</li>
            </ul>
          </div>
        </section>

        {/* 9. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <Class2PetroleumPropertiesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}