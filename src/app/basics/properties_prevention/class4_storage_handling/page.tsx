// src/app/basics/properties_prevention/class4_storage_handling/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Class4StorageHandlingQuiz from './Class4StorageHandlingQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/properties_prevention/theme.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第3章 4節：第4類危険物の貯蔵・取扱い',
  description:
    '危険物乙4。第4類危険物の貯蔵・取扱いの基本原則。密栓保管・通風換気・燃焼下限界の管理、ガソリン容器の選定基準、静電気対策（ボンディング・接地）、漏えい時の対処。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention/class4_storage_handling',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第3章 4節：第4類危険物の貯蔵・取扱い',
    description:
      '危険物乙4。第4類危険物の貯蔵・取扱いの基本原則。密栓保管・通風換気・燃焼下限界の管理、ガソリン容器の選定基準、静電気対策（ボンディング・接地）、漏えい時の対処。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention/class4_storage_handling',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '基礎知識 | 第3章 4節：第4類危険物の貯蔵・取扱い',
    description:
      '危険物乙4。第4類危険物の貯蔵・取扱いの基本原則。密栓保管・通風換気・燃焼下限界の管理、ガソリン容器の選定基準、静電気対策（ボンディング・接地）、漏えい時の対処。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function Class4StorageHandlingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法', href: '/basics/properties_prevention' },
          { label: '4節：第4類危険物の貯蔵・取扱い' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 貯蔵・取扱いの方法 */}
        <section className={shared.section}>
          <h2>貯蔵・取扱いの方法</h2>

          <div className={shared.bandCard}>
            <p>第4類危険物を取り扱う際は、<strong>火災・高温体・火花</strong>との接近や接触を避けることが基本です。</p>
            <p>さらに、万が一の火災に備え、<strong>粉末消火器</strong>など、該当する危険物に適合した消火器を設置しておく必要があります。</p>
            <p>換気を十分に行い、発生する<strong>蒸気</strong>の濃度が<strong>燃焼下限界の1/4以下</strong>となるよう管理します。</p>
            <p>
              危険物は<strong>密栓した容器</strong>に入れ、<strong>風通しのよい冷暗所</strong>で保管します。
              また、気温の上昇などにより液体が膨張すると、容器が破損したり、栓から液体が漏れ出すおそれがあるため、
              <strong>容器の上部</strong>には<strong>膨張を考慮した余裕空間</strong>を確保しておくことが重要です。
            </p>
            <p>屋内で危険物の取扱作業を行う場合は、必ず<strong>通風や換気が十分に確保された場所</strong>で作業を行います。</p>
            <p>
              また、使用済みの<strong>空容器</strong>には、<strong>可燃性蒸気が残留</strong>している可能性があるため、
              <strong>ふたをしっかりと閉めたうえで</strong>、通風・換気の良い屋内の<strong>床面</strong>に保管します。
            </p>
            <p>
              万一、事故などにより危険物が<strong>流出</strong>した場合には、<strong>土のうなどで周囲を囲み、河川などへ流出しないように</strong>対処します。
              さらに、作業者は<strong>帯電防止機能のある作業服や靴</strong>を着用することが望ましく、<strong>絶縁性の高い素材のものは使用しない</strong>よう注意が必要です。
            </p>
            <p>作業時には<strong>綿素材の衣類</strong>を着用することが推奨されます。これは、綿が<strong>静電気を帯びにくい</strong>素材であるためです。</p>
            <p>一方で、<strong>合成繊維</strong>は種類によって<strong>プラスまたはマイナスに帯電しやすい</strong>性質を持つため、火災の原因となるおそれがあります。</p>
            <p>危険物が<strong>少量漏えい</strong>した場合は、<strong>布などで拭き取る</strong>などの簡易な方法で処理します。</p>
            <p>
              ただし、<strong>大量に漏えい</strong>した場合には、漏えいした量や場所（<strong>海上・陸上</strong>）の状況を踏まえ、
              <strong>油回収装置・油吸着剤</strong>などの<strong>回収手段</strong>と、<strong>油ゲル化剤・油処理剤</strong>などの<strong>処理剤</strong>を適切に使い分けて対応する必要があります。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ガソリンの貯蔵及び取扱い</h3>
            <p>ガソリンの貯蔵及び取扱いは、以下を注意しましょう。</p>
            <ol className={shared.compact}>
              <li>ガソリンは<strong>消防法に適合した金属製の容器</strong>で取り扱い、必ず<strong>密栓</strong>して保管します。</li>
              <li><strong>火気や高温部から離れた場所</strong>で、<strong>直射日光の当たらない通気性のよい地面</strong>に保管します。</li>
              <li>
                ガソリンは漏れやあふれによって<strong>火災が発生しやすい</strong>ため、取り扱い時には細心の注意を払います。
                <strong>開口前には必ずエア抜き</strong>（<strong>エア調整ねじ</strong>や<strong>圧力調整弁</strong>の操作）を行った上で開栓します。
              </li>
              <li>夏季は温度の上昇により<strong>蒸気圧が高くなりやすい</strong>ため、吹きこぼしが起こらないよう慎重に取り扱います。</li>
              <li>ガソリンを<strong>容器いっぱいまで入れない</strong>こと。必ず<strong>内部に空間（余裕）</strong>を残して保管します。</li>
            </ol>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>ガソリンを「ポリタンクやペールかん」で保管 → <strong>×</strong>。法令上は、<strong>消防法に適合した金属製容器で密栓して保管</strong>する。</li>
              <li>容器には「できるだけいっぱい入れる」 → <strong>×</strong>。<strong>蒸気圧の上昇を考えて必ず空間（余裕）を残す</strong>のがポイント。</li>
              <li>保管場所は「屋内の棚の上」や「車内」 → <strong>×</strong>。<strong>火気・高温から離れた、直射日光の当たらない通気のよい地面</strong>が正解。</li>
            </ul>
          </div>
        </section>

        {/* 2. 火災予防 */}
        <section className={shared.section}>
          <h2>火災予防</h2>

          <div className={shared.bandCard}>
            <p>
              危険物を取り扱う際は、<strong>むやみに蒸気を発生させない</strong>ことが重要です。
              <strong>可燃性蒸気</strong>は空気と混ざることで<strong>爆発的に燃焼</strong>する危険性があります。
            </p>
            <p>
              特に、<strong>酸化性物質</strong>と一緒に<strong>同じ室内に保管してはいけません</strong>。
              発火や爆発のリスクが高まるため、保管場所を明確に分ける必要があります。
            </p>
            <p>
              また、<strong>詰め替え作業などで蒸気が発生する場合</strong>には、必ず<strong>十分な通風と換気</strong>を確保してください。
              蒸気の<strong>比重は空気よりも重いため</strong>、発生した蒸気は<strong>床面や低所に滞留</strong>しやすくなります。
              このような滞留蒸気は、<strong>換気装置</strong>を使って<strong>屋外の高い位置</strong>へ排出するようにします。
            </p>
            <p>
              たとえば、<strong>電源スイッチをON/OFFする際</strong>には<strong>電気火花</strong>が発生することがあります。
              この火花が<strong>可燃性蒸気に引火</strong>する危険があるため、<strong>可燃性蒸気が滞留するおそれのある場所</strong>で使用する<strong>電気設備</strong>は、
              必ず<strong>防爆構造</strong>としなければなりません。
            </p>
            <p>
              <strong>防爆構造</strong>とは、電気火花や高温部分によって<strong>可燃性蒸気などが爆発するのを防ぐ構造</strong>のことです。
              各種の防爆構造は、<strong>関連規格</strong>に基づいて定められており、使用環境に応じて適切に選定する必要があります。
            </p>
            <p>詳しくは、「第2章:4節 引火と発火」を参照してください。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>可燃性蒸気をむやみに発生させない（不要な加熱・開放を避ける）。</li>
              <li>酸化性物質とは同じ室内で保管しない（発火・爆発リスクが高い）。</li>
              <li>詰め替え作業では必ず十分な換気を行う。蒸気は空気より重く、床面や低所に滞留しやすい。</li>
              <li>換気装置を使い、蒸気は屋外の高い位置へ安全に排気する。</li>
              <li>電気スイッチなどの電気火花が可燃性蒸気に引火するおそれがあるため、電気設備は防爆構造とする。</li>
            </ul>
          </div>
        </section>

        {/* 3. 静電気による火災の予防 */}
        <section className={shared.section}>
          <h2>静電気による火災の予防</h2>

          <div className={shared.bandCard}>
            <p>
              危険物の注入や移送を行う際には、<strong>接地導線付きのホース</strong>を使用します。
              また、<strong>タンク、容器、配管、ノズル</strong>などは、可能な限り<strong>導電性の高い材料</strong>で構成されたものを使用し、
              これらの<strong>導体部分は必ず接地</strong>しておきます。
            </p>
            <p>
              危険物を<strong>流動させたり、揺動させたり</strong>すると、<strong>静電気が蓄積</strong>しやすくなります。
              そのため、ホースなどを使って液体を移し替える際には、<strong>流速を遅く</strong>して静電気の発生を抑えるようにします。
            </p>
            <p>
              また、ホース・配管・タンク・タンクローリーなどは<strong>確実に接地</strong>し、静電気を逃して<strong>帯電を防止</strong>します。
              流動や揺動のあとには、<strong>一定の静置時間</strong>を設けてから次の作業を行います。
            </p>
            <p>
              静電気が発生するおそれのある作業を行う際には、<strong>床面に散水</strong>して周囲の湿度を高め、静電気の蓄積を防ぎます。
              さらに、<strong>タンク内の可燃性蒸気を不活性ガスに置換</strong>するなどの安全対策も有効です。
            </p>
            <p>作業者は<strong>帯電防止処理が施された作業服や履物</strong>を着用するようにします。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>危険物の移送ホースは、接地導線付きホース＋導電性の高い材料が原則。</li>
              <li>液を移すときは、流速を遅く・揺すらないようにして静電気の発生を抑える。</li>
              <li>タンク・ホース・タンクローリーなどは確実に接地して帯電を防止してから作業を始める。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>作業服は綿素材＋帯電防止処理が◎。</li>
              <li>試験では「合成繊維の作業服」「絶縁性の高い素材」を選ばせようとする肢が多いが、どちらも静電気がたまりやすくNGになる。</li>
            </ul>
          </div>
        </section>

        {/* 4. 貯蔵タンクの清掃 */}
        <section className={shared.section}>
          <h2>貯蔵タンクの清掃</h2>

          <div className={shared.bandCard}>
            <p><strong>貯蔵タンクの清掃</strong>を行う際には、いくつかの重要な安全対策を講じる必要があります。</p>
            <p>
              まず、洗浄用の<strong>水蒸気は低速で噴出</strong>させ、<strong>静電気の発生を抑制</strong>します。
              さらに、タンク本体は<strong>確実に接地（ボンディングを含む）</strong>し、静電気の蓄積を防止します。
            </p>
            <p>
              また、タンク内に残留する<strong>可燃性蒸気</strong>は、<strong>窒素などの不活性ガス</strong>で置換しておくことが必要です。
              作業にあたる者は、<strong>帯電防止処理が施された作業服や靴</strong>を着用し、安全に作業を進めるようにします。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>洗浄用の水蒸気は低速で噴出させ、静電気の発生を抑える。</li>
              <li>タンク本体はボンディングを含めて確実に接地し、静電気の蓄積を防ぐ。</li>
              <li>タンク内の残留可燃性蒸気は窒素などの不活性ガスで置換してから作業する。</li>
              <li>作業者は帯電防止処理された作業服・靴を着用して清掃を行う。</li>
            </ul>
          </div>
        </section>

        {/* 5. ボンディングと接地（アース） */}
        <section className={shared.section}>
          <h2>ボンディングと接地（アース）</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>ボンディング</strong>とは、複数の機器や構成物がそれぞれに帯電するのを防ぐため、
              <strong>それらを金属線など電気抵抗の小さい導体で直接接続</strong>し、電位差をなくす方法です。
              これにより、放電や火花の発生を防止します。
            </p>
            <p>
              一方、<strong>接地（アース）</strong>とは、<strong>貯蔵タンク、注入ノズル、ホースなどの設備を地面（大地）に電気的に接続</strong>し、
              発生した<strong>静電気を地中へ逃す</strong>ための措置です。こちらも、金属線などの<strong>電気抵抗の小さい導体</strong>を用いて確実に接続します。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/properties_prevention/bonding_diagram.svg"
              alt="タンクの縁と配管、タンクの側面とポンプ本体を導線で直接接続するボンディングの模式図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={720}
              height={335}
            />
            <figcaption className={shared.figureCaption}>
              ボンディング：タンクとポンプを導線で直接接続し、電位差をなくします。
            </figcaption>
          </figure>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/properties_prevention/grounding_diagram.svg"
              alt="タンクとポンプをそれぞれ独立した導線で大地に接続する接地（アース）の模式図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={720}
              height={335}
            />
            <figcaption className={shared.figureCaption}>
              接地（アース）：タンクとポンプが、それぞれ独立して大地に接続されます。ボンディングと異なり、機器どうしは直接つながっていません。
            </figcaption>
          </figure>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/properties_prevention/bonding_and_grounding_diagram.svg"
              alt="タンクとポンプを導線で接続し、ボンディングと接地を同時に行っている模式図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={720}
              height={335}
            />
            <figcaption className={shared.figureCaption}>
              実際の現場では、ボンディングと接地の両方を組み合わせて実施します。
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>ボンディング：複数の容器・配管などを金属線などの小さい電気抵抗の導体で直接接続し、電位差をなくす方法。</li>
              <li>接地（アース）：タンク・ノズル・ホースなどを大地に電気的に接続し、静電気を地中へ逃がす方法。</li>
              <li>どちらも、<strong>電気抵抗の小さい導体（銅線など）</strong>を使うのがポイント。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「ボンディング＝大地に接続」「接地＝機器どうしを接続」など、ボンディングと接地を入れ替えた肢が頻出。</li>
              <li>ボンディング：機器どうしをつなぐ。</li>
              <li>接地：機器から大地へつなぐ。</li>
              <li>——このセットで覚えておけば、逆さまの肢は一撃で切れる。</li>
            </ul>
          </div>
        </section>

        {/* 6. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <Class4StorageHandlingQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}