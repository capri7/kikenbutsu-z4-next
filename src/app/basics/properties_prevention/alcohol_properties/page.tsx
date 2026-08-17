// src/app/basics/properties_prevention/alcohol_properties/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import AlcoholPropertiesQuiz from './AlcoholPropertiesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'アルコール類の性状とは？メタノール・エタノールの違いと引火点【乙4対策】',
  description:
    '危険物乙4。アルコール類の指定数量は400L。メタノール・エタノール・イソプロピルアルコール・1-プロパノール・2-プロパノールの引火点・燃焼範囲・毒性の違い。水溶性と耐アルコール泡消火剤の関係。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/alcohol_properties',
  },
  robots: 'index,follow',
  openGraph: {
    title: 'アルコール類の性状とは？メタノール・エタノールの違いと引火点【乙4対策】',
    description:
      '危険物乙4。アルコール類の指定数量は400L。メタノール・エタノール・イソプロピルアルコール・1-プロパノール・2-プロパノールの引火点・燃焼範囲・毒性の違い。水溶性と耐アルコール泡消火剤の関係。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/alcohol_properties',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'アルコール類の性状とは？メタノール・エタノールの違いと引火点【乙4対策】',
    description:
      '危険物乙4。アルコール類の指定数量は400L。メタノール・エタノール・イソプロピルアルコール・1-プロパノール・2-プロパノールの引火点・燃焼範囲・毒性の違い。水溶性と耐アルコール泡消火剤の関係。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function AlcoholPropertiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '8節：アルコール類の性状' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. メタノール */}
        <section className={shared.section}>
          <h2>メタノール（CH₃OH）</h2>

          <div className={shared.bandCard}>
            <p>
              メタノールは、危険物第4類アルコール類の中で最も分子が小さく、
              水と完全に混ざりやすい一方で<strong>毒性が強い代表的なアルコール</strong>です。
            </p>
          </div>

          <h3>メタノールの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">メタノールの物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃/4℃）</th><td>約 0.79</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約 64.7℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>凝固点</th><td>約 -97.6℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約 11℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約 464℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約 6〜36vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重</th><td>約 1.11</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>水との関係</th><td>完全混和</td></tr>
              </tbody>
            </table>
          </div>
          <p>※メタノールの覚え方：液比重0.79（水より軽い）・蒸気比重1.1（空気より重い）・引火点11℃・沸点64℃・燃焼範囲6〜36vol%・水とは完全混和</p>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>メタノールの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>毒性が強く</strong>、誤飲すると失明や死亡に至るおそれがあります。</li>
              <li>
                メタノールはアルコール類の中で最も単純な分子構造をもち、分子量も<strong>最小</strong>です。
                <br />
                <small>（12 + 1 × 4 + 16 = 32）</small>
              </li>
              <li>歴史的には木酢液の蒸留で得られ、現在は主に天然ガス（メタン）や石炭由来の合成ガスから製造されます。</li>
              <li>メタノールを酸化すると<strong>ホルムアルデヒド</strong>になり、さらに酸化すると<strong>ギ酸</strong>になる。</li>
              <li>水と<strong>完全混和</strong>で拡散しやすい。漏えい時は堰き止め、排水系への流入を防止する。</li>
              <li>燃焼時の火炎は<strong>青白く見えにくい</strong>。消火・接近時は火炎の可視性に注意する。</li>
              <li>可燃蒸気対策：<strong>換気</strong>・<strong>着火源管理</strong>・<strong>静電気対策（接地・ボンディング）</strong>を徹底する。</li>
              <li>保管は<strong>密栓・冷暗所・直射日光回避</strong>。通気口付き容器は使用しない。</li>
              <li>消火は<strong>アルコール耐性泡（AR-AFFF）</strong>・粉末・CO₂・水霧が有効。直噴水は飛散拡大のおそれ。</li>
              <li>不適合物：<strong>強酸化剤</strong>（硝酸・過酸化物など）と混合しない。</li>
              <li>
                応急処置：飲み込んだ場合は<strong>吐かせず</strong>、直ちに医療機関へ。眼・皮膚は速やかに洗浄、吸入は新鮮空気・安静。
              </li>
              <li>
                参考：<strong>燃焼範囲 6〜36 vol%</strong>、<strong>引火点 約+11℃</strong>、<strong>蒸気比重 約1.11</strong>（空気＞1で低所滞留）。
              </li>
            </ol>
          </div>
        </section>

        {/* 2. エタノール */}
        <section className={shared.section}>
          <h2>エタノール (C₂H₅OH)</h2>

          <div className={shared.bandCard}>
            <p>エタノールは飲料用アルコールの主成分であり、消毒液や溶剤としても広く利用される代表的なアルコールです。</p>
          </div>

          <h3>エタノールの物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">エタノールの物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃/4℃）</th><td>約 0.79</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約 78.3 ℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>凝固点</th><td>約 −114 ℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点（CC）</th><td>約 +13 ℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約 363 ℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約 3.3 〜 19 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約 1.59</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>エタノールの性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>毒性は比較的弱いが</strong>、麻酔作用・中枢神経抑制がある。大量摂取で意識障害・呼吸抑制のおそれ。</li>
              <li>エタノールを酸化すると<strong>アセトアルデヒド</strong>、さらに酸化で<strong>酢酸</strong>となる（酸化の段階反応）。</li>
              <li>第4類・第1石油類（<strong>水溶性</strong>）。無色透明・特有の臭気で、<strong>水と完全混和</strong>。</li>
              <li>物性の要点：比重 約0.79、<strong>引火点 約+13℃（CC）</strong>、沸点 約78℃、蒸気比重 約1.59（空気&gt;1）。</li>
              <li>可燃蒸気は<strong>低所に滞留</strong>しやすく、<strong>遠隔着火</strong>の危険がある（換気で濃度管理）。</li>
              <li><strong>燃焼範囲 3.3〜19 vol%</strong>。濃度がこの範囲に入ると着火しやすい。</li>
              <li>炎は<strong>青色で見えにくい場合</strong>がある。初期消火・接近時は可視性に注意。</li>
              <li>保管：<strong>密栓・冷暗所・直射日光回避</strong>。防爆換気を確保し、<strong>通気口付き容器は使用しない</strong>。</li>
              <li>取り扱い：<strong>火気厳禁</strong>・静電気対策（接地/ボンディング）・非火花性工具の使用。</li>
              <li>消火：<strong>アルコール耐性泡（AR-AFFF）</strong>・粉末・CO₂・水霧が有効。水の<strong>直噴は飛散拡大</strong>の恐れ。</li>
              <li>不適合物：<strong>強酸化剤</strong>（硝酸・過塩素酸・過酸化物など）との混合は<strong>発熱・反応暴走</strong>の危険。</li>
              <li>漏えい：火気遮断・換気。<strong>堰き止め</strong>て排水系流入を防止（完全混和で拡散しやすい）。不燃性吸収材で回収。</li>
            </ol>
          </div>

          <h3>エタノールの製法と用途</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">エタノールの製法と用途</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colRawMaterial} />
                <col className={styles.colRawPurpose} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">原料 / 製法</th>
                  <th scope="col">主な用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>合成アルコール（工業用・飲食不可）</th>
                  <td>石油由来のエチレンを原料に<strong>化学合成</strong>（例：エチレンの水和反応）</td>
                  <td>化学用品（化粧品・洗剤・塗料・医薬品原料・溶剤 など）、工業用エタノール</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>発酵アルコール（食品・飲用可）</th>
                  <td>サトウキビ・トウモロコシ等の農作物を<strong>発酵→蒸留・精製</strong></td>
                  <td>食品用（防腐・香料・抽出・試薬 など）、工業用エタノール、<strong>飲用（酒類）</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>変性アルコール（非飲用）</th>
                  <td>エタノールに<strong>変性剤</strong>（メタノール/イソプロパノール/ベンゼン等）を混合</td>
                  <td>溶剤・洗浄・清掃・（規格により）消毒用途 など</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>メタノールとエタノールに共通する性状（試験ポイント）</h3>
            <ol className={shared.compact}>
              <li>無色透明で<strong>特有の芳香</strong>がある。</li>
              <li><strong>水や多くの有機溶媒とよく溶け合う</strong>（水と完全混和）。</li>
              <li><strong>水で希釈すると引火点は高くなる</strong>（濃度が下がるほど可燃性は弱まる）。</li>
              <li><strong>揮発性が強い</strong>（常温で可燃蒸気を生じやすい）。</li>
              <li>1つのヒドロキシ基（<strong>−OH</strong>）をもつ<strong>飽和1価アルコール</strong>。</li>
              <li>
                <strong>酸化性物質と混合・接触禁止</strong>：第1類 三酸化クロム（CrO₃）、
                第6類 硝酸（HNO₃）・過酸化水素（H₂O₂）等と反応し、<strong>発熱・発火/爆発のおそれ</strong>（危険な過酸化物などの生成）。
              </li>
              <li><strong>青白い炎で燃える</strong>ため、明るい場所では炎が見えにくいことがある。</li>
              <li>
                ナトリウム（Na）と反応し、アルコラート生成＋<strong>水素発生</strong>（H₂↑）：2ROH + 2Na → 2RONa + H₂。
              </li>
            </ol>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/properties_prevention/methanol_ethanol_formulas.svg"
              alt="メタノールとエタノールの化学式"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              <small>※メタノールとエタノールの化学式</small>
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！メタノールとエタノールのまとめ</h4>
            <p>メタノールとエタノールは、共通する性状がそのまま試験の頻出ポイントになる。次の特徴はセットで押さえておきたい。</p>
            <ul className={shared.compact}>
              <li>どちらも無色透明で特有の芳香をもつ。</li>
              <li>水や多くの有機溶媒とよく混ざり合う（完全混和）。</li>
              <li>揮発性が強く、燃焼範囲も広いため、常温でも火災・爆発の危険がある。</li>
              <li>青白い炎で燃えるため、明るい場所では炎が見えにくいことがある。</li>
              <li>Naと反応して水素を発生する（アルコラート生成＋H₂↑）。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！メタノールとエタノールの違い</h4>
            <p>選択肢では、メタノールとエタノールの「毒性・沸点・燃焼範囲」などを入れ替えてくるパターンが多い。</p>
            <ul className={shared.compact}>
              <li><strong>毒性</strong>：メタノールの方がはるかに強い。「エタノールより毒性が弱い」→×。</li>
              <li><strong>用途</strong>：エタノールは飲料用・医薬品などにも用いられるが、メタノールは飲用不可の工業用アルコールが中心。</li>
              <li><strong>燃焼範囲</strong>：メタノールは約6〜36 vol%、エタノールは約3.3〜19 vol%。数値を逆にした選択肢に注意。</li>
              <li><strong>蒸気比重</strong>：どちらも空気より重いが、エタノールの方がやや大きい。「空気より軽い」と書かれていたら×。</li>
            </ul>
          </div>
        </section>

        {/* 3. 1-プロパノール */}
        <section className={shared.section}>
          <h2>1-プロパノール（n-プロピルアルコール）（C₃H₇OH）</h2>

          <div className={shared.bandCard}>
            <p>1-プロパノール（n-プロピルアルコール）は、炭素数3の直鎖状アルコールで、溶剤や中間体として利用される可燃性液体です。</p>
          </div>

          <h3>1-プロパノール（n-プロピルアルコール）の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">プロパノール（n-プロピルアルコール）の物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.8（実測値：0.803）</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>97.2℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>15℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>412℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>2.1 ～ 13.7 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>2.1</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>1-プロパノール（n-プロピルアルコール）の性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>無色透明</strong>の<strong>液体</strong>。アルコール臭をもつ。</li>
              <li><strong>水、エタノール、ジエチルエーテル</strong>によく溶ける。</li>
              <li><strong>引火点は約15℃</strong>と低く、常温で<strong>引火の危険性が高い</strong>。</li>
              <li>蒸気比重は約2.1（空気=1）で、<strong>低所に滞留しやすい</strong>。火源に引火・爆発の危険。</li>
              <li><strong>燃焼範囲は約2.1～13.7 vol%</strong>と広く、可燃性蒸気に注意。</li>
              <li>吸入すると<strong>中枢神経系に影響</strong>し、めまい・頭痛を起こすことがある。</li>
              <li>皮膚・粘膜に対して<strong>刺激性</strong>をもつ。保護具の着用が必要。</li>
              <li>貯蔵は<strong>冷暗所・密栓</strong>し、火気・熱源を避ける。</li>
            </ol>
          </div>
        </section>

        {/* 4. 2-プロパノール */}
        <section className={shared.section}>
          <h2>2-プロパノール（イソプロピルアルコール）((CH₃)₂CHOH)</h2>

          <div className={shared.bandCard}>
            <p>2-プロパノール（イソプロピルアルコール）は、炭素数3の分枝状アルコールで、消毒用アルコールなどに広く用いられる可燃性液体です。</p>
          </div>

          <h3>2-プロパノール（イソプロピルアルコール）の物理的性質</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">プロパノール（イソプロピルアルコール）の物理的性質</caption>
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
                <tr><th scope="row" className={shared.stickyCol}>比重（20℃）</th><td>0.785</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>沸点</th><td>約 82℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>凝固点</th><td>-89℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>引火点</th><td>約 12℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>発火点</th><td>約 399℃</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>燃焼範囲</th><td>約 2.0～12.7 vol%</td></tr>
                <tr><th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th><td>約 2.1</td></tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>2-プロパノール（イソプロピルアルコール）の性質と取り扱い上の注意</h3>
            <ol className={shared.compact}>
              <li><strong>無色透明</strong>の液体で、特有の<strong>アルコール臭</strong>をもつ。</li>
              <li><strong>水、エタノール、ジエチルエーテル</strong>によく溶ける。</li>
              <li><strong>引火点は約12℃</strong>と低く、常温でも<strong>火災の危険性が高い</strong>。</li>
              <li>
                蒸気比重は約2.1（空気=1）で、<strong>低所に滞留</strong>しやすい。火源に達すると爆発的に燃焼し、<strong>燃焼時は青白い炎</strong>を出す。
              </li>
              <li><strong>燃焼範囲は約2.0～12.7 vol%</strong>と広く、爆発の危険がある。</li>
              <li>蒸気や高濃度の曝露で<strong>めまい・頭痛・中枢神経抑制</strong>を起こす。</li>
              <li><strong>皮膚・眼に刺激性</strong>を示すため、保護具（手袋・ゴーグル）の着用が必要。</li>
              <li>消毒用アルコールに広く使用されるが、<strong>飲用不可・誤飲注意</strong>（代謝で有害作用）。</li>
              <li>貯蔵は<strong>冷暗所で密栓</strong>し、火気・熱源を避ける。</li>
              <li>2-プロパノールを<strong>酸化</strong>させると<strong>アセトン</strong>になる。</li>
            </ol>
          </div>
        </section>

        {/* 5. n-プロパノールとイソプロパノールの比較 */}
        <section className={shared.section}>
          <h2>n-プロパノールとイソプロパノールの比較</h2>

          <div className={shared.bandCard}>
            <p>n-プロパノールとイソプロパノールの違いは、次の表のように性質や用途を対比して整理しておくと覚えやすくなります。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">n-プロパノールとイソプロパノールの比較</caption>
              <colgroup>
                <col className={styles.colNote} />
                <col className={styles.colNPropanol} />
                <col className={styles.colIsopropanol} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性質・注意点</th>
                  <th scope="col">1-プロパノール（n-プロパノール）</th>
                  <th scope="col">2-プロパノール（イソプロパノール）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>化学式</th>
                  <td>C₃H₇OH（直鎖構造）</td>
                  <td>(CH₃)₂CHOH（分枝構造）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>比重（20℃）</th>
                  <td>約 0.803</td>
                  <td>約 0.785</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>沸点</th>
                  <td>約 97℃</td>
                  <td>約 82℃</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>引火点</th>
                  <td>約 15℃</td>
                  <td>約 12℃</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>発火点</th>
                  <td>約 412℃</td>
                  <td>約 399℃</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼範囲</th>
                  <td>約 2.1～13.7 vol%</td>
                  <td>約 2.0～12.7 vol%</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>蒸気比重（空気=1）</th>
                  <td>約 2.1</td>
                  <td>約 2.1</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>性状</th>
                  <td>無色透明の液体、アルコール臭</td>
                  <td>無色透明の液体、強いアルコール臭</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>特徴</th>
                  <td>水やエタノールによく溶ける。工業溶剤に用いられる。</td>
                  <td>「消毒用アルコール」の主成分。飲用不可・誤飲注意。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>危険性</th>
                  <td>蒸気は低所に滞留し爆発危険。中枢神経抑制作用。</td>
                  <td>蒸気は低所に滞留し爆発危険。刺激性が強く、中枢神経抑制作用。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>貯蔵/取扱い</th>
                  <td>冷暗所で密栓。火気厳禁。</td>
                  <td>冷暗所で密栓。火気厳禁。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！プロパノール類のまとめ</h4>
            <ul className={shared.compact}>
              <li>
                1-プロパノール（n-プロピルアルコール）と2-プロパノール（イソプロピルアルコール）は、
                ともに第４類第１石油類（水溶性）・引火点が低い可燃性液体。常温でも引火の危険が高い。
              </li>
              <li>どちらも無色透明でアルコール臭をもち、水やエタノール・エーテルなど多くの有機溶媒とよく混ざる（水と完全混和）。</li>
              <li>蒸気比重はどちらも約2.1（空気＝1）で「空気より重い」。低所に滞留しやすく、床付近での引火・爆発に注意。</li>
              <li>1-プロパノール：直鎖構造（一次アルコール）。沸点は約97℃、引火点は約15℃。工業用溶剤として利用される。</li>
              <li>
                2-プロパノール：分枝構造（二次アルコール）。沸点は約82℃と1-プロパノールより低く、引火点も約12℃と低い。
                消毒用アルコールの主成分として広く用いられるが、飲用不可・誤飲注意。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！ここを間違えやすい</h4>
            <ul className={shared.compact}>
              <li>「蒸気は空気より軽い」「高所にたまりやすい」→×。プロパノール蒸気は空気より重く（約2.1）低所にたまりやすい。</li>
              <li>「2-プロパノールの沸点は1-プロパノールより高い」→×。実際は1-プロパノール≒97℃＞2-プロパノール≒82℃。</li>
              <li>「消毒用として使われるから飲用もできる」→×。2-プロパノールは飲用不可・誤飲注意。エタノールと混同しない。</li>
              <li>「いずれも水に溶けにくい有機溶剤である」→×。プロパノール類は水と完全混和。ガソリンなどの水に不溶な第１石油類と混同しない。</li>
              <li>
                引火点の大小関係を問う問題で、「常温での危険性が高い＝引火点が高い」と誤解しがち。
                引火点は低いほど危険（1-プロパノール約15℃、2-プロパノール約12℃）という感覚を押さえておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 6. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <AlcoholPropertiesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}
