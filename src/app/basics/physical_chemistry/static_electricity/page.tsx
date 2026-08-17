// src/app/basics/physical_chemistry/static_electricity/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FoilElectroscopeDiagram from './FoilElectroscopeDiagram'
import StaticElectricityQuiz from './StaticElectricityQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'

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

          <div className={shared.bandCard}>
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
          <div className={shared.callout}>
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