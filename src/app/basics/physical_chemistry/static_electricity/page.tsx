// src/app/basics/physical_chemistry/static_electricity/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FoilElectroscopeDiagram from './FoilElectroscopeDiagram'
import StaticElectricityQuiz from './StaticElectricityQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 10節：静電気',
  description:
    '危険物乙4 第2章10節。静電気の発生と電気量保存の法則、帯電の仕組み、電気素量、箔検電器の原理、帯電列を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/static_electricity',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 10節：静電気',
    description:
      '危険物乙4 第2章10節。静電気の発生と電気量保存の法則、帯電の仕組み、電気素量、箔検電器の原理、帯電列を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/static_electricity',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 10節：静電気',
    description:
      '危険物乙4 第2章10節。静電気の発生と電気量保存の法則、帯電の仕組み、電気素量、箔検電器の原理、帯電列を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function StaticElectricityPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '10節：静電気' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 静電気の発生 */}
        <section className={shared.section}>
          <h2>静電気の発生</h2>

          <div className={shared.bandCard} >
            <p>
              静電気とは、電荷が流れずに物体の表面や内部にとどまっている状態の電気をいいます。
              物体の電気的な極性が正または負に片寄った状態を<strong>帯電</strong>と呼びます。
            </p>
            <p>
              2つの物質が<strong>接触・摩擦・剥離</strong>すると、その境界で電荷（主に電子）のやり取りが起こります。
              <strong>電子を受け取った側は負に帯電</strong>し、<strong>電子を失った側は正に帯電</strong>します。
              この電荷の偏りが静電気の正体です。なお、状況によっては<strong>帯電粒子（イオンや微粒子）の移動</strong>でも帯電が生じます。
            </p>
            <p>
              物体どうしで電荷が移動しても、相互作用の前後で系全体の<strong>電気量（電荷の総和）は変化しません</strong>。
              これを<strong>電気量（電荷）保存の法則</strong>といいます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/total_charge.svg"
              alt="2つの領域AとBで正電荷と負電荷の個数がそれぞれ8で釣り合い、A+B全体の電気量が0になることを示す図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              <strong>電気量の保存</strong> — AとBを合わせた系では、正の電荷8と負の電荷8が等しく、
              合計は<strong>0</strong>のままです（電子が片方へ移っても全体は変わりません）。
            </figcaption>
          </figure>

          <div className={shared.callout}>
            <strong>図の見方：</strong> AとBの境界で電子が移動しても、A+B全体で数えると
            <strong>正＝負</strong>が維持されます。<em>「部分で増えても、全体は不変」</em>がポイント。
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/electrification.svg"
              alt="二つの領域AとBが接触・剥離して電子がA側へ移動し、Aは負に、Bは正に帯電する様子。Aは＋4より－6が多く、Bは＋4が－2より多い。中央のギャップでは電位差により放電が起こりうる。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              <strong>帯電</strong> — 接触・剥離で電子が<strong>Aへ移動</strong>すると、
              Aは<strong>負に帯電（＋4 ＜ −6）</strong>、Bは<strong>正に帯電（＋4 ＞ −2）</strong>となります。
              全体の電気量は保存され、境界の電位差が大きいと<strong>火花放電</strong>の原因になります。
            </figcaption>
          </figure>

          <div className={shared.callout}>
            <strong>図の見方：</strong> 帯電は「正と負の<strong>差</strong>」で判定します。
            Aは負が多い＝負に帯電、Bは正が多い＝正に帯電。
          </div>

          <div className={shared.examNotes}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>
                「正に帯電」＝<strong>電子を失った</strong>状態。プラスの電気を「もらう」わけではありません。
              </li>
              <li>
                帯電は<strong>相手との組合せで変わる相対概念</strong>です（帯電列の順を固定の「絶対順位」と誤解しないよう注意）。
              </li>
            </ul>
          </div>

          <div className={shared.callout}>
            <h3>確認ポイント</h3>
            <ul className={shared.compact}>
              <li><strong>電荷</strong>には正と負があり、電子は<strong>負電荷</strong>、陽子は<strong>正電荷</strong>をもつ。</li>
              <li><strong>同極は反発、異極は引力</strong>で作用する。これを<strong>静電力（クーロン力）</strong>という。</li>
              <li>物体や原子などがもつ電気的性質を<strong>電荷</strong>、その量を<strong>電気量</strong>という。</li>
              <li>電気量の単位は<strong>クーロン（C）</strong>。参考：素電荷 <code>e ≈ 1.60×10⁻¹⁹ C</code>。</li>
              <li>静電気は<strong>絶縁性が高く乾燥した環境</strong>ほど逃げ道が少なく、<strong>蓄積しやすい</strong>。</li>
              <li><strong>固体・液体・気体</strong>のいずれも帯電する（液体・気体は漏えいしやすく<strong>残りにくい</strong>）。</li>
              <li>代表的な測定：<strong>箔検電器</strong>、<strong>表面電位計（電界計）</strong>、<strong>ファラデーケージ（筒）＋クーロンメータ</strong>、エレクトロメータ等。</li>
            </ul>
          </div>

          <h3>電気素量</h3>
          <div className={shared.callout}>
            <p>
              <strong>電気素量</strong>（elementary charge）とは、電荷の<strong>最小単位</strong>です。
              電子がもつ電荷は<strong>−e</strong>、陽子は<strong>＋e</strong>で、その大きさは等しく
              <strong>e ≈ 1.602×10⁻¹⁹ C</strong>です。
            </p>
            <p>
              すべての電気量<em>Q</em>は、この最小単位の<strong>整数倍</strong>で表されます：
              <code>Q = n·e</code>（<em>n</em>は整数）。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li><strong>10⁻¹⁹</strong>を<strong>10¹⁹</strong>と書き間違えない（桁が大違い）。</li>
              <li>電子は<strong>−e</strong>、陽子は<strong>＋e</strong>。大きさは同じで<strong>符号だけが逆</strong>。</li>
            </ul>
          </div>

          <h3>箔検（はくけん）電器</h3>
          <div className={shared.callout} >
            <p>
              帯電の有無を調べる代表的な器具です。金属の<strong>集電板</strong>と導体棒の先に、軽い
              <strong>金属箔（2枚）</strong>が吊られています（容器はガラスなどの絶縁体）。
            </p>
            <ul className={shared.compact}>
              <li><strong>① 静電誘導：</strong> 帯電体を集電板に<strong>近づける</strong>と、導体内で電荷が移動し、箔には<strong>同符号</strong>の電荷が集まります。</li>
              <li><strong>② 反発で開く：</strong> 同符号どうしが<strong>斥力</strong>で反発し、2枚の箔が左右に開きます。</li>
              <li><strong>③ 接触でより大きく：</strong> 帯電体を<strong>直接触れる</strong>と電荷が移り、開きがさらに大きくなります。</li>
            </ul>
            <p>開きの<strong>有無や大きさ</strong>で帯電の有無・強さを確認します（極性の判定は基準電荷と比較して行います）。</p>
          </div>

          <figure className={shared.formulaCard}>
            <FoilElectroscopeDiagram />
          </figure>

          <div className={shared.examNotes}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>箔が開く原因は<strong>同符号どうしの反発</strong>（斥力）。「異符号で引き合う」が混ざりやすい。</li>
              <li>「近づける（誘導）」でも開きます。<strong>接触だけで開く</strong>と覚えないよう注意。</li>
              <li>容器は<strong>絶縁体</strong>で支持（漏えいすると開きが小さくなる）。</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            乾燥環境ではよく開き、湿潤環境では開きにくくなります。測定時は<strong>手で接地（アース）しない</strong>よう注意。
          </div>

          <h3>帯電列（たいでんれつ）</h3>
          <div className={shared.callout}>
            <p>
              帯電列とは、2種類の材質を摩擦したり接触分離したとき、プラス側に帯電しやすい材質を上位に、
              マイナス側に帯電しやすいものを下位に並べた序列の表です。
              摩擦する材質が帯電列上でより離れていれば、より多くの電荷が移動します。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/triboelectric_series.svg"
              alt="摩擦する材質が帯電列上でより離れている場合、より多くの電荷が移動する。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>帯電列</figcaption>
          </figure>

          <div className={shared.callout}>
            <h3>確認ポイント</h3>
            <ul className={shared.compact}>
              <li>ガラス棒とナイロンを摩擦→ガラス棒は（＋）、ナイロンは（−）に帯電。</li>
              <li>アクリル棒とナイロンを摩擦→ナイロンは（＋）、アクリル棒は（−）に帯電。</li>
              <li>毛皮と塩化ビニル管を摩擦→毛皮（＋）、塩化ビニル管は（−）に帯電。</li>
              <li>
                「ガラス棒×ナイロン」と「ガラス棒×木綿」を摩擦した時を比較すると、
                序列により開きのある「ガラス棒と木綿」の方が静電気はより多く発生する。
              </li>
            </ul>
          </div>

          <h3>帯電の発生機構</h3>
          <div className={shared.bandCard}>
            <p>
              静電気は、2つの物質が<strong>接触・摩擦・剥離</strong>したり、液体や粉体が
              <strong>流動・噴出・混合</strong>したりする際に電荷が移動することで発生します。
              どのような動作によって帯電するかにより、次のように分類されます。
            </p>

            <dl className={shared.summaryGrid}>
              <div className={shared.summaryGridRow}>
                <dt><strong>摩擦帯電</strong></dt>
                <dd>2つの物質を擦り合わせてから引き離すときに発生する帯電。</dd>
              </div>
              <div className={shared.summaryGridRow}>
                <dt><strong>接触帯電</strong></dt>
                <dd>2つの物質を接触させてから引き離すときに発生する帯電。</dd>
              </div>
              <div className={shared.summaryGridRow}>
                <dt><strong>剥離帯電</strong></dt>
                <dd>密着している2つの物質を引き剥がすときに発生する帯電。</dd>
              </div>
              <div className={shared.summaryGridRow}>
                <dt><strong>流動帯電</strong></dt>
                <dd>配管や容器の中を液体が流動するときに発生する帯電。</dd>
              </div>
              <div className={shared.summaryGridRow}>
                <dt><strong>噴出帯電</strong></dt>
                <dd>液体がノズルなどから高速で噴出するときに発生する帯電。</dd>
              </div>
              <div className={shared.summaryGridRow}>
                <dt><strong>破砕帯電</strong></dt>
                <dd>固体を破砕（粉砕）するときに発生する帯電。</dd>
              </div>
              <div className={shared.summaryGridRow}>
                <dt><strong>混合・かくはん帯電</strong></dt>
                <dd>液体または粉体を混合・かくはんするときに発生する帯電。</dd>
              </div>
              <div className={shared.summaryGridRow}>
                <dt><strong>その他の帯電</strong></dt>
                <dd>滴下帯電、衝突帯電、飛沫帯電など、上記以外の動作でも帯電が生じる。</dd>
              </div>
            </dl>
          </div>

          <h3>流動帯電の仕組み</h3>
          <div className={shared.bandCard}>
            <p>
              液体が配管の中を流れるとき、液体と管壁が接触する境界面では<strong>電荷の移動（電荷分離）</strong>が起こり、
              液体側に<strong>正イオン</strong>、管壁側に<strong>負イオン</strong>が発生します。
            </p>
            <ul className={shared.compact}>
              <li><strong>① 電荷分離：</strong> 液体と管壁の境界で電荷が移動し、正イオンと負イオンが生じます。</li>
              <li><strong>② 二重層の形成：</strong> 負イオンは管壁に吸着されやすいため、管壁付近に集まります。これにより、管壁側に負の層、その内側に正の層が向かい合う構造ができます。これを<strong>イオン電気二重層</strong>といいます。</li>
              <li><strong>③ 正イオンが流れに運ばれる：</strong> 配管の中心付近まで拡散した正イオンは、液体の流れとともにそのまま運ばれていきます。</li>
            </ul>
            <p>
              この結果、<strong>管壁側は負に帯電</strong>し、<strong>流れ出ていく液体側は正に帯電</strong>します。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/flow_electrification_mechanism.svg"
              alt="配管内で負イオンが管壁に吸着してイオン電気二重層が形成され、液体の流れによって正イオンが下流へ運ばれることで、管壁がマイナス、流出する液体がプラスに帯電する仕組みを示す図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1560}
              height={760}
            />
            <figcaption className={shared.figureCaption}>
              <strong>流動帯電の仕組み</strong> — ①管壁への吸着でイオン電気二重層が形成され、②流動にともなって正イオンが運ばれることで、管壁と液体の電荷が分離します。
            </figcaption>
          </figure>
          <div className={shared.callout}>
            <p>
              石油系の液体は一般に<strong>導電率が非常に小さい</strong>ため、流動帯電が特に発生しやすい性質があります。
            </p>
            <p>
              液体をフィルターでろ過するときに生じる帯電も、流動帯電の一種です。特に<strong>孔径の小さいフィルター</strong>を通過させる場合、
              液体とろ材が接触する<strong>面積</strong>と通過する際の<strong>速度</strong>がともに大きくなるため、帯電量が増大します。
            </p>
          </div>

          <h3>静電気力（クーロンの法則）</h3>
          <div className={shared.bandCard}>
            <p>
              2つの帯電体が及ぼしあう静電気力の大きさは、帯電体の<strong>電気量の大きさ</strong>と、
              帯電体間の<strong>距離</strong>によって変化します。
            </p>
            <p>
              帯電体の間の距離に比べて帯電体の大きさが無視できるほど小さいとき、このような帯電体を
              <strong>点電荷</strong>といいます。静電気力 <em>F</em> は、2つの点電荷の電気量
              <em>q₁</em>・<em>q₂</em> の<strong>積に比例</strong>し、距離 <em>r</em> の
              <strong>2乗に反比例</strong>します。これを<strong>クーロンの法則</strong>といいます。
            </p>
            <p>
              <code>F = k・q₁q₂ / r²</code>（<em>k</em>：比例定数）
            </p>
          </div>

          <div className={shared.callout}>
            <h3>確認ポイント</h3>
            <ul className={shared.compact}>
              <li>電気量の符号が<strong>同じ</strong>（＋と＋、－と－）なら<strong>斥力</strong>（反発）。</li>
              <li>電気量の符号が<strong>異なる</strong>（＋と－）なら<strong>引力</strong>。</li>
              <li>力は2つの帯電体を結ぶ直線上にはたらく。</li>
            </ul>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/coulombs_law.svg"
              alt="クーロンの法則を示す図。同符号の点電荷どうしは反発する斥力がはたらき、異符号の点電荷どうしは引き合う引力がはたらく。力Fは電気量q1・q2の積に比例し、距離rの2乗に反比例する（F＝k・q1q2／r²）。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1560}
              height={760}
            />
            <figcaption className={shared.figureCaption}>
              <strong>クーロンの法則</strong> — 同符号どうしは斥力、異符号どうしは引力。力の大きさは電気量の積に比例し、距離の2乗に反比例します。
            </figcaption>
          </figure>

          <h3>静電誘導</h3>
          <div className={shared.bandCard}>
            <p>
              帯電体の近くに帯電していない導体を近づけると、帯電体に近い方の端に帯電体の電荷と
              <strong>異種の電荷</strong>が、反対側の端に<strong>同種の電荷</strong>が現れます。この現象を
              <strong>静電誘導</strong>といいます。
            </p>
            <p>
              静電誘導は、導体中の<strong>自由電子</strong>が帯電体の（＋）電荷に引き寄せられて近い側の端に集まり、
              その端が（－）に帯電することで起こります。同時に、反対側の端は電子が不足するため（＋）に帯電します。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/electrostatic_induction.svg"
              alt="正に帯電した帯電体を、帯電していない金属の導体に近づけると、導体中の自由電子が帯電体側に引き寄せられ、帯電体に近い端が負に、遠い端が正に帯電する静電誘導のしくみを示す図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1560}
              height={740}
            />
            <figcaption className={shared.figureCaption}>
              <strong>静電誘導</strong> — 自由電子が帯電体（＋）側に引き寄せられ、近い端は負（異種の電荷）、遠い端は正（同種の電荷）になります。
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>距離に<strong>反比例</strong>ではなく、距離の<strong>2乗に反比例</strong>。距離が2倍になると力は<strong>4分の1</strong>になる。</li>
              <li>電気量は<strong>和</strong>ではなく<strong>積</strong>に比例する。</li>
            </ul>
          </div>

          <h3>誘電分極</h3>
          <div className={shared.bandCard}>
            <p>
              帯電体の近くに絶縁体を近づけても、絶縁体はほとんど<strong>自由電子</strong>（原子に束縛されず自由に動き回れる電子）を
              持たないため、電界が作用しても物質内部の電子はほとんど移動しません。
            </p>
            <p>
              しかし、静電気力によって、物質を構成する分子や原子の内部で<strong>分極</strong>が起こり、（－）と（＋）が対になって
              整列します。その結果、絶縁体内部では（＋）と（－）の働きが互いに打ち消し合いますが、
              <strong>両端だけには電荷が現れます</strong>。
            </p>
            <p>
              このような現象を<strong>誘電分極</strong>といい、誘電分極を起こす絶縁体のことを<strong>誘電体</strong>と呼びます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/dielectric_polarization.svg"
              alt="正に帯電した帯電体を絶縁体（誘電体）に近づけると、絶縁体内部の分子が対になって整列し、隣り合う分子の＋とーは打ち消し合うが、両端の表面だけに電荷（帯電体に近い側はー、遠い側は＋）が現れる誘電分極のしくみを示す図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1560}
              height={760}
            />
            <figcaption className={shared.figureCaption}>
              <strong>誘電分極</strong> — 絶縁体内部では分子が対になって整列し、隣り合う＋とーは打ち消し合いますが、両端の表面だけに電荷が現れます。
            </figcaption>
          </figure>

          <h3>静電気のエネルギー</h3>
          <div className={shared.bandCard}>
            <p>
              静電気のエネルギーは、帯電している<strong>電気量が大きくなるほど</strong>、また<strong>電圧が高くなるほど</strong>大きくなります。
            </p>
            <p>
              静電気の帯電量（<em>Q</em>）と電圧（<em>V</em>）、静電容量（<em>C</em>）の間には、次の関係があります。
            </p>
            <p>
              <code>Q ＝ C・V</code>
            </p>
            <p>
              帯電量が一定の場合、静電容量が<strong>小さくなるほど</strong>、静電気に生じる電圧は<strong>高くなります</strong>。
              このため、容易に<strong>数万ボルト</strong>の放電電圧が発生します。
            </p>
            <p>
              帯電体が放電するときのエネルギー（<em>E</em>）は、次の式から求めることができます。
            </p>
            <p>
              <code>E ＝ 1/2・Q・V</code>
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/qcv_relationship.svg"
              alt="同じ帯電量Qのとき、静電容量Cが小さいほど電圧Vが高くなり数万ボルトの放電が起こりやすく、静電容量Cが大きいほど電圧Vは低く放電の危険が小さいことを示す図。Q＝C・Vの関係を表す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1560}
              height={800}
            />
            <figcaption className={shared.figureCaption}>
              <strong>Q＝C・V</strong> — 帯電量Qが同じでも、静電容量Cが小さいほど電圧Vは高くなり、危険な放電が起こりやすくなります。
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>
                エネルギーの公式は<strong>E＝1/2・Q・V</strong>。<strong>1/2を忘れてE＝QVとする</strong>誤りに注意。
              </li>
              <li>
                「静電容量が<strong>大きい</strong>ほど危険」ではなく、静電容量が<strong>小さい</strong>ほど電圧が高くなり危険。大小関係を逆に覚えないよう注意。
              </li>
              <li>
                帯電量Qが同じでも、物体の形状・大きさ（＝静電容量C）によって<strong>発生する電圧は変わる</strong>。
              </li>
            </ul>
          </div>

          <h3>静電気の特性</h3>
          <div className={shared.bandCard}>
            <p>
              静電気が発生し、それが放電されずに帯電量が増え続けると、静電気のエネルギーは増加します。
              この状態で何らかの原因により、静電気が空気中に火花を伴って放電すると、それが
              <strong>火災や爆発の点火源</strong>となります。
            </p>
            <p>
              静電気によるこうした災害を防ぐには、<strong>静電気の発生を抑える</strong>ことと、
              <strong>帯電した静電気を意図的に放電させる</strong>ことの、2つの対策が必要です。
              これらを静電気の特性からまとめると、次のとおりです。
            </p>
          </div>

          <h4>静電気の発生を抑える</h4>
          <div className={shared.callout}>
            <ul className={styles.numberedList}>
              <li><strong>① 絶縁物の摩擦・接触を減らす：</strong> 絶縁物どうしの摩擦や接触の機会を少なくします。</li>
              <li><strong>② 流速をゆるやかにする：</strong> 絶縁性液体が流動したり、ノズルから噴出したりする際の速度を遅くします。流速を変える場合も、急激にではなく徐々に変化させます。</li>
              <li><strong>③ 接触面積・圧力・回数を減らす：</strong> 接触面積や接触圧力を小さくし、接触回数も減らします。</li>
              <li><strong>④ 分離速度を小さくする：</strong> 接触状態のものを分離するときは、分離速度を小さくします（急激に剥がさない、など）。</li>
              <li><strong>⑤ 静電気の発生しにくい材料を使う：</strong> 帯電しにくい材質を選びます。</li>
              <li><strong>⑥ 不純物・異物の混入を避ける。</strong></li>
              <li><strong>⑦ イオン化空気で中和する：</strong> 静電気除去装置で生成したイオン化空気により、静電気を電気的に中和させます。</li>
              <li><strong>⑧ 除電剤を使用する：</strong> 導電性塗料の塗布や、添加剤の使用などがあります。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>
                接触分離による静電気の発生は、境界面が<strong>固体と固体、固体と液体、液体と液体、液体と気体</strong>
                のいずれであっても起こります（固体・粉体の摩擦・剥離・衝突、液体の流動・かくはんなど）。
                「固体どうしでしか起きない」と誤解しないよう注意。
              </li>
            </ul>
          </div>

          <h4>静電気を意図的に放電させる</h4>
          <div className={shared.callout}>
            <ul className={styles.numberedList}>
              <li><strong>① あらかじめ接地しておく：</strong> 静電気が蓄積されやすいものは、あらかじめアース（接地）します。給油ホースには内側に導線を巻き込んだものを使用し、導電性の靴や服を使用します。</li>
              <li><strong>② 蓄積後に接地して放電させる：</strong> 静電気が蓄積されている可能性があるものは、あらかじめアース（接地）して放電させます。</li>
              <li><strong>③ 湿度を高める：</strong> 床面に水を撒くなどして湿度を高めます。帯電した静電気は水蒸気を通して放電します。</li>
              <li><strong>④ 空気をイオン化する：</strong> 高圧・放射線・静電誘導などの方法で空気をイオン化し、静電気を除去します。</li>
              <li><strong>⑤ 電気抵抗率の違いに注意する：</strong> 非水溶性のガソリンなどは、水溶性のアルコール類より電気抵抗率が高いため、取り扱いに注意します。</li>
              <li><strong>⑥ 作業後は静置時間をおく：</strong> タンクへの油の注入・循環・かくはんなどの作業後は、静置時間をおいてから除電します。作業直後のサンプリング作業や検尺作業は避けます。</li>
            </ul>
          </div>

          <div className={shared.callout}>
            <h3>確認ポイント</h3>
            <ul className={shared.compact}>
              <li>
                <strong>検尺作業</strong>とは、検尺棒（1/100以上の精度の目盛りが刻まれた棒）をタンク上部の検尺口などから
                底板に当たるまで静かに挿入し、速やかに引き上げて油の付着位置を読み取り、在庫量を測定する作業です。
                危険物の漏れの確認にも使われます。
              </li>
            </ul>
          </div>

        </section>

        {/* 2. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <StaticElectricityQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}