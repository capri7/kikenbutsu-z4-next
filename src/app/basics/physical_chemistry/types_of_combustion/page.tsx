// src/app/basics/physical_chemistry/types_of_combustion/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import TypesOfCombustionQuiz from './TypesOfCombustionQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 2節：燃焼の区分',
  description:
    '危険物乙4 第2章2節。気体・液体・固体それぞれの燃焼形態（予混合燃焼・拡散燃焼・蒸発燃焼・表面燃焼・分解燃焼・自己燃焼）を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/types_of_combustion',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 2節：燃焼の区分',
    description:
      '危険物乙4 第2章2節。気体・液体・固体それぞれの燃焼形態（予混合燃焼・拡散燃焼・蒸発燃焼・表面燃焼・分解燃焼・自己燃焼）を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/types_of_combustion',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 2節：燃焼の区分',
    description:
      '危険物乙4 第2章2節。気体・液体・固体それぞれの燃焼形態（予混合燃焼・拡散燃焼・蒸発燃焼・表面燃焼・分解燃焼・自己燃焼）を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function TypesOfCombustionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '2節：燃焼の区分' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 気体の燃焼 */}
        <section className={shared.section}>
          <h2>気体の燃焼</h2>

          <div className={shared.bandCard}>
            <p>
              可燃物は、その物理的な状態（気体・液体・固体）によって燃え方が異なります。
              ここでは<strong>可燃性ガス</strong>の燃焼を整理します。
              可燃性ガスは、空気中で<strong>ある一定の濃度範囲内</strong>に混合されていなければ燃焼を起こしません。
              この濃度の範囲を<strong>燃焼範囲</strong>（可燃限界）といいます。
            </p>
            <p>
              燃焼範囲内のガス混合気をつくる方法には、燃焼の前に可燃性ガスと空気をあらかじめよく混合しておく方法と、
              燃焼の最中に可燃性ガスを噴き出させ、周囲の空気と境界面で混ざりながら燃やす方法の2つがあります。
              前者を<strong>予混合燃焼</strong>、後者を<strong>拡散燃焼</strong>といいます。
            </p>
            <p>
              予混合燃焼では、ガスと空気が最初からよく混ざっているため、炎が一気に広がって短時間で燃焼が完了します。
              そのため、密閉空間では急激な温度・圧力上昇を起こし、爆発につながる危険が大きくなります。
            </p>
            <p>
              これに対して拡散燃焼は、可燃性ガスが連続して供給される限り、ガスと空気が混ざる部分でゆっくりと燃焼が進み、
              炎を持続的に保ちます。ガスバーナーの炎のように、一定の火炎を保ちながら燃える燃焼形態です。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>可燃性ガスは、<strong>燃焼範囲（下限〜上限の濃度）</strong>のときだけ燃える。</li>
              <li><strong>予混合燃焼</strong>：燃焼<strong>前</strong>にガスと空気をよく混合／炎が一気に広がり、爆発の危険が大きい。</li>
              <li><strong>拡散燃焼</strong>：燃焼<strong>中</strong>にガスが空気と混ざりながら燃える／ガスが続く限り、炎が持続する。</li>
              <li>ガスバーナーの炎は、<strong>拡散燃焼</strong>の代表例。</li>
            </ul>
          </div>
        </section>

        {/* 2. 液体の燃焼 */}
        <section className={shared.section}>
          <h2>液体の燃焼</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>アルコール</strong>や<strong>ガソリン</strong>などの可燃性液体は、液体そのものが直接燃えているのではなく、
              液面から<strong>蒸発</strong>してできた可燃性ガス（蒸気）に火がついて燃焼します。
              このような燃焼様式を<strong>蒸発燃焼</strong>といいます。
            </p>
            <p>
              このため、可燃性液体を扱うときは、液体だけでなく<strong>蒸気の管理</strong>がとても重要になります。
              蒸気の漏えいや滞留を防ぎ、換気を十分に行うなどして、可燃性蒸気が危険な濃度にならないよう注意しなければなりません。
            </p>
          </div>
        </section>

        {/* 3. 固体の燃焼 */}
        <section className={shared.section}>
          <h2>固体の燃焼</h2>

          <div className={shared.bandCard}>
            <p>
              固体状の可燃物の燃焼は、<strong>表面燃焼・分解燃焼・蒸発燃焼</strong>の3種類に分類されます。
              ここでは、まず<strong>表面燃焼</strong>について確認します。
            </p>
            <p>
              <strong>表面燃焼</strong>とは、可燃性固体が熱分解や蒸発をほとんど伴わず、そのままの形で空気と接している
              <strong>表面部分だけが直接燃える</strong>燃焼形態です。代表例として<strong>木炭、コークス、金属粉</strong>などの燃焼が挙げられます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/anthracite_photo.jpg"
              alt="表面燃焼の代表例であるアントラサイト（高光沢の硬質炭）のイラスト"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              ※ アントラサイト：含炭量が約90％以上の高ランク硬質炭で、光沢のある黒色をしています。
              密度が高く無煙燃焼しやすいため、着火後は安定した火力を保ちます。（表面燃焼の代表例）
            </figcaption>
          </figure>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/coke_photo.svg"
              alt="表面燃焼に用いられるコークス（灰黒色・多孔質固体）の写真"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              ※ コークス：石炭を約1,000～1,100℃で乾留し、揮発分を除去した灰黒色・金属光沢のある多孔質固体。
              炭素含有量は約85～90％。着火温度は高いものの、一度着火すると無炎燃焼に移行し、
              持続的に高温を保って強い火力を発揮します。（表面燃焼の代表例）
            </figcaption>
          </figure>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <p>
              コークスやアントラサイトみたいな固体燃料は、赤熱して<strong>表面だけが燃える「表面燃焼」</strong>の代表だ。
            </p>
            <p>
              炎がほとんど立たず、<strong>無炎燃焼・無煙燃焼</strong>になりやすいから、
              問題では「ガス燃焼」「分解燃焼」と取り違えさせるひっかけがよく出る。
              <strong>コークス＝表面燃焼、アントラサイト＝表面燃焼</strong>まで
              ワンセットで頭に入れておこう。
            </p>
          </div>

          <h3>蒸発燃焼</h3>
          <div className={shared.bandCard}>
            <p>
              <strong>蒸発燃焼</strong>は、可燃性固体を加熱してもすぐには熱分解させず、いったん<strong>気化（昇華）</strong>させて
              発生した蒸気が燃焼する燃焼形態です。
              <strong>硫黄</strong>、ナフタリン（ナフタレン）、固形アルコールなどがこの例に該当します。
            </p>
            <p>
              しくみとしては液体の蒸発燃焼と同じで、
              「<strong>固体 → 蒸気 → 蒸気が燃える</strong>」という流れになる点がポイントです。
            </p>
          </div>

          <h3>分解燃焼</h3>
          <div className={shared.bandCard}>
            <p>
              <strong>分解燃焼</strong>は、可燃性固体が加熱によって<strong>熱分解</strong>し、
              そこで発生した<strong>可燃性ガスが燃焼する</strong>現象です。
              ふだん目にする炎を上げて燃える燃焼の多くが、この分解燃焼に当たります。
            </p>
            <p>
              代表例として、<strong>木材、石炭、紙、プラスチック類</strong>などが挙げられます。
            </p>
          </div>

          <h3>自己燃焼</h3>
          <div className={shared.bandCard}>
            <p>
              <strong>自己燃焼</strong>は、<strong>分解燃焼</strong>の一種で、可燃性固体が<strong>分子内部に含んでいる酸素</strong>を利用して
              自発的に燃焼が進行する現象です。外部から酸素が供給されなくても燃え進むため、危険性の高い燃焼形態です。
            </p>
            <p>
              加熱や衝撃、摩擦などの小さな刺激が引き金となって<strong>爆発的に燃焼</strong>することがあり、<strong>内部燃焼</strong>とも呼ばれます。
              代表例として、<strong>ニトロセルロース</strong>や<strong>セルロイド</strong>など、多くの第5類危険物が該当します。
            </p>
          </div>

          <h3>ニトロセルロース</h3>
          <div className={shared.bandCard}>
            <p>
              <strong>ニトロセルロース</strong>は、セルロース（構成単位の組成式：(C₆H₁₀O₅)ₙ）の水酸基に、
              硝酸エステル基（-NO₂）が導入された化合物です。分子内に<strong>酸素を多く含む</strong>ため、
              外部から酸素が供給されなくても激しく燃焼しやすい性質をもっています。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/nitrocellulose_3d_model.svg"
              alt="ニトロセルロース分子の3Dモデル画像"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              ※ 硝化度が高いものは<strong>火薬</strong>として用いられ、硝化度が低いものはフィルムなどの材料に利用されます。
              危険物では<strong>第5類危険物</strong>に分類され、この節で学んだ<strong>自己燃焼（内部燃焼）の代表例</strong>として
              よく試験に登場します。
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li><strong>ニトロセルロース＝第5類危険物・自己燃焼の代表例</strong>としてセットで覚える。</li>
              <li>「分子内の酸素を利用して燃えるかどうか」が、ふつうの分解燃焼との区別ポイント。</li>
              <li>本試験では「自己燃焼に分類されるもの」「第5類危険物の例」として選択肢に出やすい。</li>
            </ul>
          </div>
        </section>

        {/* 4. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <TypesOfCombustionQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}