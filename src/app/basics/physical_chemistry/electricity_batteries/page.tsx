// src/app/basics/physical_chemistry/electricity_and_batteries/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ElectricityAndBatteriesQuiz from './ElectricityAndBatteriesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 9節：電気の計算・電池',
  description:
    '危険物乙4 第2章9節。抵抗率・導電率、オームの法則、直列・並列の合成抵抗、電池の仕組みと起電力、一次電池・二次電池の起電力と素材を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/electricity_batteries',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 9節：電気の計算・電池',
    description:
      '危険物乙4 第2章9節。抵抗率・導電率、オームの法則、直列・並列の合成抵抗、電池の仕組みと起電力、一次電池・二次電池の起電力と素材を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/electricity_batteries',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 9節：電気の計算・電池',
    description:
      '危険物乙4 第2章9節。抵抗率・導電率、オームの法則、直列・並列の合成抵抗、電池の仕組みと起電力、一次電池・二次電池の起電力と素材を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ElectricityAndBatteriesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '9節：電気の計算・電池' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 抵抗率 */}
        <section className={shared.section}>
          <h2>抵抗率 ρ（ロー）</h2>

          <div className={shared.bandCard}>
            <p className={shared.muted}>抵抗の基本関係：</p>
            <p>
              導体の抵抗<strong>R</strong>は「<strong>長さ l に比例</strong>」「<strong>断面積 S に反比例</strong>」。
              物質ごとの固有値<strong>ρ（抵抗率）</strong>を用いると、次式で表されます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/resistivity.svg"
              alt="抵抗率の関係式 R = ρ · l / S を示す図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              抵抗率の式：<span>R = ρ·<span className={styles.mathEll}>ℓ</span>/S</span>
            </figcaption>
          </figure>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>覚えよう！</h3>
            <ul className={shared.compact}>
              <li><strong>ρ は物質固有値</strong>（材質で決まる）。</li>
              <li>定義：<strong>断面積 1&nbsp;m²</strong>、<strong>長さ 1&nbsp;m</strong>の導体の両端の抵抗。</li>
              <li>長さ<span className={styles.mathEll}>ℓ</span>と断面積<em>S</em>の影響は<strong>逆方向</strong>（<span className={styles.mathEll}>ℓ</span>↑→R↑、S↑→R↓）。</li>
              <li>単位は<strong>Ω・m（オーム・メートル）</strong>。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>
                <strong>比例・反比例は式で固定：</strong>
                <span className={styles.mathBlock}>R = ρ · ℓ / S</span>
                同じ材質なら<strong>ρ</strong>は一定として扱う。
              </li>
              <li><strong>断面積Sの落とし穴</strong>：<em>直径が2倍</em> → <em>断面積は4倍</em> → <em>Rは1/4</em>。半径・直径の<strong>2乗</strong>を忘れない。</li>
              <li><strong>単位換算で落とす</strong>：mm² → m²（<code>1 mm² = 1×10⁻⁶ m²</code>）。Sの換算ミスは即死。</li>
              <li><strong>ρが小さいほど通しやすい</strong>（導体寄り）、ρが大きいほど通しにくい（絶縁体寄り）。次の「導電率σ」とセットで来る。</li>
              <li><strong>定義の言い換え</strong>：「<em>1mの長さ</em>」「<em>1m²の断面積</em>」の導体の抵抗＝抵抗率ρ。文章問題でそのまま出る。</li>
            </ul>
          </div>
        </section>

        {/* 導電率 */}
        <section className={shared.section}>
          <h2>導電率 σ（シグマ）</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>導電率</strong>（電気伝導率）は、物質の<strong>電気の流れやすさ</strong>を表す量です。値が大きいほど電気を通しやすく、抵抗は小さくなります。
            </p>
            <p>
              導電率は<strong>抵抗率</strong>（流れにくさ）<strong>ρ</strong>の逆数で、<strong>σ = 1 / ρ</strong>。単位は<strong>S/m（ジーメンス毎メートル）</strong>。
            </p>
            <p>
              形状に依存する実際の通しやすさ（コンダクタンス）は<strong>G = σ·A/L</strong>（A：断面積、L：長さ）。抵抗は<strong>R = ρ·L/A</strong>。つまり<em>「材質（σ）×形状」</em>で決まります。
            </p>
            <p>
              液体（電解質）では塩分や酸の濃さの指標として用います。例：食塩水は濃いほどσ↑（※通常は25℃への温度換算で管理）。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/conductivity.svg"
              alt="導電率の関係式 σ = 1 / ρ を示す図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              導電率の式：<code>σ = 1/ρ</code>
            </figcaption>
          </figure>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>覚えよう！</h3>
            <ul className={shared.compact}>
              <li><strong>定義：</strong>導電率は<strong>通しやすさ</strong>、抵抗率は<strong>通しにくさ</strong>。</li>
              <li><strong>関係式：</strong><span className={styles.mathBadge}>σ = 1/ρ</span></li>
              <li><strong>単位：</strong>σ：<strong>S/m</strong>、ρ：<strong>Ω·m</strong></li>
              <li><strong>形状とセット：</strong><span className={styles.mathBadge}>R = ρ·L/A</span>、<span className={styles.mathBadge}>G = σ·A/L</span></li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li><strong>逆数トラップ：</strong>ρ↑ならσ↓。大小関係を<strong>逆</strong>に書かせる。</li>
              <li><strong>単位トラップ：</strong>Gの単位は<strong>S</strong>、σは<strong>S/m</strong>（ここ混ぜて落とす）。</li>
              <li><strong>換算で落とす：</strong><span className={styles.mathBadge}>1 mS/cm = 0.1 S/m</span>（mS/cm ⇄ S/m）。</li>
              <li><strong>温度依存：</strong>金属はT↑でσ↓、電解質溶液はT↑でσ↑（これも逆にしがち）。</li>
              <li><strong>純水の扱い：</strong>純水はσが小さい。塩分が混ざるとσ↑（"純水も通す"は×）。</li>
            </ul>
          </div>
        </section>

        {/* オームの法則 */}
        <section className={shared.section}>
          <h2>オームの法則</h2>

          <div className={shared.bandCard}>
            <p>
              オームの法則は、<strong>抵抗 R</strong>の両端の電圧<em>V</em>と電流<em>I</em>の関係を表します。基本式は<strong><code>V = I・R</code></strong>です。
            </p>
            <p>
              したがって、同じ抵抗では<em>V</em>を上げると<em>I</em>は増え、同じ電圧では<em>R</em>を大きくすると<em>I</em>は小さくなります。ここでの単位は<strong>V：</strong>ボルト [V]、<strong>I：</strong>アンペア [A]、<strong>R：</strong>オーム [Ω] を用います。
            </p>
            <p>
              オームの法則は、直流（DC）や低周波で、<strong>V–I の関係が直線</strong>になる<strong>「オーム性（線形）抵抗」</strong>に適用します（温度変化が大きい場合は注意）。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/voltage.svg"
              alt="電圧の式 V = I・R"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              電圧の式：<code>V = I・R</code>
            </figcaption>
          </figure>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/current.svg"
              alt="電流の式 I = V / R"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              電流の式：<code>I = V/R</code>
            </figcaption>
          </figure>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/resistance.svg"
              alt="抵抗の式 R = V / I"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              抵抗の式：<code>R = V/I</code>
            </figcaption>
          </figure>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/ohms_law_triangle.svg"
              alt="オームの法則の三角図（V, I, R）"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              三角図の使い方：<strong>隠した記号＝残り2つの関係</strong>（例：Vを隠すと<code>V = I・R</code>）。
            </figcaption>
          </figure>
          
          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>覚えよう！</h3>
            <ul className={shared.compact}>
              <li><strong>基本式：</strong><code>V = I・R</code>（3量の関係はこれで固定）。</li>
              <li><strong>変形式：</strong><code>I = V/R</code>、<code>R = V/I</code>（出題はこの形が多い）。</li>
              <li><strong>単位セット：</strong>V [V]、I [A]、R [Ω]（まず単位を揃える）。</li>
              <li><strong>適用：</strong>オーム性（線形）抵抗が前提（電球・半導体・整流器などは注意）。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>接頭語トラップ：</strong>mA＝10⁻³A、kΩ＝10³Ω、MΩ＝10⁶Ω。ここで落ちる。</li>
              <li><strong>直列・並列の順番：</strong>まず合成抵抗（直列：足す／並列：逆数和）→ その後に<code>V = I・R</code>。</li>
              <li><strong>電力の近道：</strong><code>P = V・I = I²R = V²/R</code>（単位はW）。</li>
              <li><strong>温度でズレる：</strong>金属抵抗は温度↑でR↑（一定とみなせる条件か確認）。</li>
              <li><strong>測定のひっかけ：</strong>リード線抵抗・内部抵抗が乗る（小さいRを測るほど効く）。</li>
            </ul>
          </div>
        </section>

        {/* 直列と並列の合成抵抗 */}
        <section className={shared.section}>
          <h2>直列と並列の合成抵抗</h2>
          <div className={shared.bandCard}>
            <p>
              抵抗のつなぎ方には<strong>直列</strong>と<strong>並列</strong>があります。直列は同じ電流が順番に流れます。並列は同じ電圧が各枝にかかります。合成（等価）抵抗は次の式で求めます。
            </p>
          </div>

          <div className={styles.defGrid}>
            <div className={styles.defCard}>
              <h3 className={styles.defTitle}>直列の定義</h3>
              <ul className={styles.defList}>
                <li>
                  <span className={styles.defTerm}>電流</span>
                  <span>どこでも同じ（電流一定）</span>
                </li>
                <li>
                  <span className={styles.defTerm}>電圧</span>
                  <span>抵抗に比例して<strong>分担</strong>（電圧分割）</span>
                </li>
                <li>
                  <span className={styles.defTerm}>合成</span>
                  <span><strong>足し算</strong></span>
                </li>
              </ul>
              <p className={styles.defFormula}>
                <span className={styles.math}>R<sub>eq</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> + …</span>
              </p>
            </div>

            <div className={styles.defCard}>
              <h3 className={styles.defTitle}>並列の定義</h3>
              <ul className={styles.defList}>
                <li>
                  <span className={styles.defTerm}>電圧</span>
                  <span>どこでも同じ（電圧一定）</span>
                </li>
                <li>
                  <span className={styles.defTerm}>電流</span>
                  <span>抵抗に反比例して<strong>分流</strong>（電流分割）</span>
                </li>
                <li>
                  <span className={styles.defTerm}>合成</span>
                  <span><strong>逆数の和</strong></span>
                </li>
              </ul>
              <p className={styles.defFormula}>
                <span className={styles.math}>1/R<sub>eq</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub> + …</span>
              </p>
            </div>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/series_circuit.svg"
              alt="直列回路：R1→R2→R3を一列に接続した図。合成抵抗は足し算。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              直列の合成抵抗：R<sub>eq</sub>=R<sub>1</sub>+R<sub>2</sub>+R<sub>3</sub>
            </figcaption>
          </figure>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/parallel_circuit.svg"
              alt="並列回路：共通の上下母線にR1・R2・R3が縦に接続された図。合成抵抗は逆数和。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              並列の合成抵抗：1/R<sub>eq</sub>=1/R<sub>1</sub>+1/R<sub>2</sub>+1/R<sub>3</sub>
            </figcaption>
          </figure>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>覚えよう！</h3>
            <ul className={shared.compact}>
              <li><strong>直列：</strong>電流はどこでも同じ（電流一定）。合成抵抗は<strong>足し算</strong>。</li>
              <li><strong>並列：</strong>電圧はどこでも同じ（電圧一定）。合成抵抗は<strong>逆数の和</strong>。</li>
              <li><strong>見分け：</strong>直列＝一本道／並列＝同じ始点・終点に枝が並ぶ。</li>
              <li><strong>等しい抵抗：</strong>直列n本＝nR、並列n本＝R/n。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>直列の電圧分割：</strong>V<sub>k</sub> = V · R<sub>k</sub> / R<sub>eq</sub>（合計は元の電圧）</li>
              <li><strong>並列の電流分割（2枝）：</strong>I<sub>k</sub> = I · (R<sub>他</sub> / (R<sub>k</sub> + R<sub>他</sub>))（抵抗が小さい枝ほど電流が多い）</li>
              <li><strong>2抵抗の並列ショートカット：</strong>R<sub>eq</sub> = (R<sub>1</sub>R<sub>2</sub>) / (R<sub>1</sub> + R<sub>2</sub>)</li>
              <li><strong>単位と桁：</strong>kΩ・MΩ、mAなどの接頭語で<strong>換算ミス</strong>が出やすい。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li><strong>直列＋オープン（∞Ω）：</strong>R<sub>eq</sub>→∞ → 電流0（全部止まる）</li>
              <li><strong>並列＋ショート（0Ω）：</strong>R<sub>eq</sub>→0 → ほぼショート扱い</li>
              <li><strong>並列の合成抵抗：</strong>各抵抗より<strong>必ず小さくなる</strong>（ここを落とす人が多い）</li>
              <li><strong>逆数の和：</strong>1/R を作り忘れて足し算してしまうミスに注意</li>
            </ul>
          </div>
        </section>

        {/* 電池の仕組み */}
        <section className={shared.section}>
          <h2>電池の仕組み</h2>

          <div className={shared.bandCard}>
            <p>
              電池は、<strong>酸化還元反応の化学エネルギーを電気エネルギーに変換する装置</strong>です。金属などの電極を電解液に浸し、外部回路を導線でつなぐと電流が流れます。
            </p>
            <p>
              <strong>負極（アノード）</strong>では<strong>酸化</strong>が起こり、電子を放出します（電子は外部回路へ流れ出ます）。<strong>正極（カソード）</strong>では<strong>還元</strong>が起こり、外部回路から来た電子を受け取ります。
            </p>
            <p>
              ※<em>電池（ガルバニ電池）では「負＝アノード」「正＝カソード」</em>です。<em>電気分解</em>では<strong>極性が逆</strong>なので区別して覚えましょう。
            </p>
            <p>
              溶液中では電荷のつり合いを保つために<strong>イオン</strong>が移動します（電解液・塩橋・セパレータの役割）。<strong>電子の流れは負極→正極、電流（約束方向）は正極→負極</strong>です。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>代表例（ダニエル電池の型）</h3>
            <ol className={shared.compact}>
              <li>負極：Zn → Zn<sup>2+</sup> + 2e<sup>−</sup>（酸化）</li>
              <li>正極：Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu（還元）</li>
            </ol>
            <p>
              起電力<strong>E</strong>は両極の電位差で決まり、溶液中のイオン濃度（濃度条件）が変わると電位が変化し、起電力も変わります（測定では温度・濃度条件をそろえます）。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>覚えよう！</h3>
            <ul className={shared.compact}>
              <li><strong>対応：</strong>電池（発電）は「<strong>負＝アノード（酸化）</strong>」「<strong>正＝カソード（還元）</strong>」</li>
              <li><strong>向き：</strong>電子は<strong>負極→正極</strong>／電流（約束方向）は<strong>正極→負極</strong></li>
              <li><strong>語呂：</strong><em>「酸化はマイ（−）、還元はプラ（＋）」</em>で混乱を防ぐ</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>端子電圧：</strong><code>V = E − I r</code>（r：内部抵抗）→ <strong>Iが大きいほど V は下がる</strong></li>
              <li><strong>直列：</strong><strong>電圧が加算</strong>（例：1.5V×2本→3.0V）</li>
              <li><strong>並列：</strong><strong>電圧は同じ</strong>で、<strong>電流供給力が増える</strong>（内部抵抗は並列で小さくなる）</li>
              <li><strong>濃度の影響：</strong>起電力<strong>E</strong>は電位差で決まり、<strong>濃度が変わるとEも変わり得る</strong></li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li><strong>正負の混同：</strong>電池（発電）は「負＝アノード／正＝カソード」。<strong>電気分解は"正負が逆"</strong>になりやすい</li>
              <li><strong>でもここは不変：</strong><strong>アノード＝酸化、カソード＝還元</strong>（ここだけは電池でも電気分解でも共通）</li>
              <li><strong>流れの混同：</strong>電子の向き（負→正）と、電流の向き（正→負）を<strong>逆に書くミス</strong>が多い</li>
              <li><strong>安全：</strong>漏液・ガスは<strong>腐食性／可燃性</strong>のリスク。作業は<strong>換気＋保護具</strong></li>
            </ul>
          </div>
        </section>

        {/* 起電力の大きさ */}
        <section className={shared.section}>
          <h2>起電力の大きさ</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>起電力（E）</strong>は、電池の2電極間に生じる<strong>理想的な電位差</strong>です（外部に電流を流さないときの電圧）。
            </p>
            <p>
              起電力は基本的に、<strong>正極と負極の電極電位差</strong>で決まります（目安：<strong>E ＝ 正極 − 負極</strong>）。つまり、<strong>組合せが違えばEも変わる</strong>、が最重要です。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>覚えよう！</h3>
            <ul className={shared.compact}>
              <li><strong>正極＝還元</strong>、<strong>負極＝酸化</strong>。</li>
              <li><strong>電子</strong>は<strong>負極 → 正極</strong>、<strong>電流（約束）</strong>は<strong>正極 → 負極</strong>。</li>
              <li>実際に電流が流れると、端子電圧は<code>V = E − I r</code>（r：内部抵抗）で<strong>Eより小さくなる</strong>。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>直列・並列：</strong>直列は<strong>Eが加算</strong>（内部抵抗rも加算）。並列は<strong>Eは同じ</strong>で、内部抵抗rが下がり<strong>電流供給力が増える</strong>。</li>
              <li><strong>負極の見分け：</strong>金属の<strong>イオン化傾向が大きい方が負極</strong>（溶けやすい）になりやすい。</li>
              <li><strong>代表値：</strong>ダニエル電池の起電力はおよそ<strong>1.10 V</strong>（用語・基準値レベルで押さえる）。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li><strong>端子電圧＝起電力</strong>と決めつけない。負荷をつないだ瞬間、<code>V = E − I r</code>で<strong>下がる</strong>。</li>
              <li><strong>濃度が高いほど必ずEが大きい</strong>とは限らない。まずは<strong>極の組合せ（電位差）</strong>で考える。迷ったら「<strong>負極＝イオン化傾向が大きい金属</strong>」で整理。</li>
              <li><strong>電子の流れ</strong>と<strong>電流（約束）</strong>を逆に書いて落とす。外部回路は「電子：<strong>負→正</strong>」「電流：<strong>正→負</strong>」。</li>
              <li><strong>直列・並列の取り違え</strong>に注意。直列は<strong>Eもrも足し算</strong>、並列は<strong>Eは同じでrが小さく</strong>なる。</li>
            </ul>
          </div>
        </section>

        {/* 主な電池の起電力と素材 */}
        <section className={shared.section}>
          <h2>主な電池の起電力と素材</h2>

          <h3>一次電池</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">一次電池の起電力と素材</caption>
              <colgroup>
                <col className={styles.t1ColKinds} />
                <col className={styles.t1ColEmf} />
                <col className={styles.t1ColPositive} />
                <col className={styles.t1ColNegative} />
                <col className={styles.t1ColElectrolyte} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>電池の<br />種類</th>
                  <th scope="col">起電力</th>
                  <th scope="col">正極</th>
                  <th scope="col">負極</th>
                  <th scope="col">電解液/電解質</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>マンガン乾電池</th>
                  <td>1.5V</td>
                  <td>二酸化マンガン</td>
                  <td>亜鉛</td>
                  <td>塩化亜鉛/塩化アンモニウム</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>アルカリ<br />マンガン乾電池</th>
                  <td>約1.5V</td>
                  <td>二酸化マンガン</td>
                  <td>亜鉛</td>
                  <td>水酸化カリウム</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>リチウム電池</th>
                  <td>約3.0V</td>
                  <td>二酸化マンガン<br />硫化鉄など</td>
                  <td>リチウム</td>
                  <td>非水系<br />有機電解液</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酸化銀<br />電池</th>
                  <td>約1.55V</td>
                  <td>酸化銀</td>
                  <td>亜鉛</td>
                  <td>水酸化カリウム<br />水酸化ナトリウム</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>空気亜鉛電池</th>
                  <td>約1.3V</td>
                  <td>酸素</td>
                  <td>亜鉛</td>
                  <td>水酸化ナトリウム</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>※一次電池：放電のみの使い切り</p>

          <h3>二次電池</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">二次電池の起電力と素材</caption>
              <colgroup>
                <col className={styles.t2ColKinds} />
                <col className={styles.t2ColEmf} />
                <col className={styles.t2ColPositive} />
                <col className={styles.t2ColNegative} />
                <col className={styles.t2ColElectrolyte} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>電池の<br />種類</th>
                  <th scope="col">起電力</th>
                  <th scope="col">正極</th>
                  <th scope="col">負極</th>
                  <th scope="col">電解液/電解質</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>鉛蓄電池</th>
                  <td>約2.0V</td>
                  <td>二酸化鉛</td>
                  <td>鉛</td>
                  <td>希硫酸</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ニッケル<br />カドミウム電池</th>
                  <td>約1.3V</td>
                  <td>ニッケル酸化物</td>
                  <td>カドミウム</td>
                  <td>水酸化カリウム</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ニッケル<br />水素電池</th>
                  <td>約1.35V</td>
                  <td>ニッケル酸化物</td>
                  <td>水素吸蔵<br />合金</td>
                  <td>水酸化カリウム</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>リチウム<br />イオン電池</th>
                  <td>約4.0V</td>
                  <td>リチウム複合<br />酸化物</td>
                  <td>炭素</td>
                  <td>非水系<br />有機電解液</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ナトリウム<br />硫黄電池</th>
                  <td>約2.1V</td>
                  <td>硫黄</td>
                  <td>ナトリウム</td>
                  <td>β・アルミナ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>※二次電池：外部電池からの充電で繰り返し使用。</p>

          <div className={shared.examNotes}>
            <h4>出る出るポイント!</h4>
            <ul className={shared.compact}>
              <li><strong>一次＝充電不可／二次＝充電して再使用</strong>（まずここを取り切る）。</li>
              <li><strong>電解液（電解質）はセット暗記</strong>：マンガン＝塩化アンモニウム/塩化亜鉛、アルカリ＝水酸化カリウム、鉛＝希硫酸…のように「種類→電解液」で即答。</li>
              <li><strong>起電力の代表値</strong>：1.5V系／約1.55V（酸化銀）／約1.3V（空気亜鉛）／約3.0V（リチウム一次）／約2.0V（鉛蓄）など、よく混ぜて出る。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意!</h4>
            <ul className={shared.compact}>
              <li><strong>アルカリ＝水酸化カリウム、マンガン乾電池＝塩化アンモニウム/塩化亜鉛</strong>。入れ替えひっかけ注意。</li>
              <li><strong>酸化銀電池＝約1.55V、空気亜鉛＝約1.3V</strong>（1.5Vと混同させる出題あり）。</li>
              <li><strong>二次電池：鉛＝希硫酸、Ni系＝KOH、Li-ion＝非水系</strong>。電解液セットで覚える。</li>
            </ul>
          </div>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <ElectricityAndBatteriesQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}
