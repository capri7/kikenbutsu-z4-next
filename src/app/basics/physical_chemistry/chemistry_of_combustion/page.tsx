// src/app/basics/physical_chemistry/chemistry_of_combustion/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ChemistryOfCombustionQuiz from './ChemistryOfCombustionQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 1節：燃焼の化学',
  description:
    '危険物乙4 第2章1節。燃焼の定義、無炎燃焼、ガスの分解爆発、燃焼の三要素、炎色反応、有機物の燃焼を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/chemistry_of_combustion',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 1節：燃焼の化学',
    description:
      '危険物乙4 第2章1節。燃焼の定義、無炎燃焼、ガスの分解爆発、燃焼の三要素、炎色反応、有機物の燃焼を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/chemistry_of_combustion',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 1節：燃焼の化学',
    description:
      '危険物乙4 第2章1節。燃焼の定義、無炎燃焼、ガスの分解爆発、燃焼の三要素、炎色反応、有機物の燃焼を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ChemistryOfCombustionPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '1節：燃焼の化学' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 燃焼の定義 */}
        <section className={shared.section}>
          <h2>燃焼の定義</h2>

          <div className={shared.bandCard}>
            <p>
              物質が酸素と結びつく反応を<strong>酸化</strong>といい、その結果生じる生成物を
              <strong>酸化物</strong>と呼びます。例えば、炭素が酸素と反応すると二酸化炭素が生じます。
              このとき、炭素は酸化されて、酸化物である二酸化炭素へと変化したことになります。
            </p>
            <p>
              酸化反応の中でも、反応が急激に進み、多量の熱と光（炎）を出すものがあります。
              このような酸化反応を<strong>燃焼</strong>といいます。
            </p>
            <p>
              たとえば鉄（Fe）が酸化するとさびが生じますが、これは燃焼とはいいません。
              著しい発熱や発光を伴わないからです。
              また、酸化反応であっても、周囲から熱をうばう<strong>吸熱反応</strong>として進むものは、燃焼には含めません。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/endothermic_reaction_examples.svg"
              alt="燃焼の定義と吸熱反応の対比例"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              一般に、物質は燃焼によって、より安定した化学的性質をもつ物質へと変化します。
            </figcaption>
          </figure>
        </section>

        {/* 2. 無炎燃焼 */}
        <section className={shared.section}>
          <h2>無炎燃焼</h2>

          <div className={shared.bandCard}>
            <p>
              燃焼には、火炎を伴う<strong>有炎燃焼</strong>と、火炎を伴わない<strong>無炎燃焼</strong>があります。
              無炎燃焼は<strong>燻燃（くんねん）</strong>とも呼ばれ、一般に煙を多量に発生しやすく、
              一酸化炭素（CO）などの有害ガスを生じやすい燃焼です。
            </p>
            <p>
              無炎燃焼は、タバコや線香のような燃焼のほか、くすぶっている木材や布などにもみられます。
              火が出ていないからといって、必ずしも安全とは限らない点に注意が必要です。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>無炎燃焼の特徴</h3>
            <ol className={shared.compact}>
              <li>固体の可燃性物質特有の燃焼形態である（表面でじわじわ燃える表面燃焼）。</li>
              <li>酸素の供給量が増加すると、有炎燃焼に移行することがある。</li>
              <li>
                熱分解による可燃性気体の発生速度が小さい場合や、雰囲気中の酸素濃度が低下した場合などに起こる。
                このとき、火炎は維持できないが、表面燃焼だけは維持できる。
              </li>
            </ol>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/complete_incomplete_combustion_examples.svg"
              alt="炭素・炭化水素の完全燃焼と不完全燃焼の例"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              炭素や炭化水素が酸素と反応すると、酸素が十分なときは二酸化炭素（CO₂）と水（H₂O）まで酸化されます。
              これを<strong>完全燃焼</strong>といいます。一方、酸素が不足すると一酸化炭素（CO）などが生じ、
              無炎燃焼を含む<strong>不完全燃焼</strong>となり、有害ガスや煙が多く発生します。
            </figcaption>
          </figure>
        </section>

        {/* 3. ガスの分解爆発 */}
        <section className={shared.section}>
          <h2>ガスの分解爆発</h2>

          <div className={shared.bandCard}>
            <p>
              アセチレン、エチレン、酸化エチレンなどの気体は、たとえ空気などの支燃性（助燃性）ガスが存在しない場合でも、
              単体のままで火花、加熱、衝撃、摩擦などの刺激を受けると<strong>分解爆発</strong>を起こすことがあります。
            </p>
            <p>
              このような分解爆発では、分子が自ら分解する過程で大量の熱が発生します。
              つまり、酸素がなくても気体そのものが激しく分解してエネルギーを放出する点が、
              ふつうの燃焼爆発との大きな違いです。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/decomposition_explosion_examples.svg"
              alt="アセチレンなどの分解爆発の反応式と発熱量の例"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              図では、アセチレン（C₂H₂）、エチレン（C₂H₄）、酸化エチレン（C₂H₄O）などの分解反応と、
              そのときに発生する熱量の例を示しています。これらの気体は、酸素が存在しなくても分子が自ら分解して
              大きなエネルギーを放出するため、高圧ガス容器や配管中で分解爆発を起こすおそれがあります。
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                アセチレン・エチレン・酸化エチレンなどは、空気（支燃性ガス）がなくても
                <strong>単体のままで分解爆発</strong>を起こすことがある。
              </li>
              <li>きっかけは<strong>火花・加熱・衝撃・摩擦</strong>など、わずかな刺激でよい。</li>
              <li>
                分子が自ら分解して<strong>大量の熱と高圧ガス</strong>を生じ、容器・配管の破裂事故につながる。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. 燃焼の三要素 */}
        <section className={shared.section}>
          <h2>燃焼の三要素</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>燃焼の三要素</strong>とは、燃焼が発生するために必要な3つの条件を指します。
              これらのうち、いずれか1つでも欠けると、燃焼は成立しません。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/combustion_three_elements.svg"
              alt="燃焼の三要素（可燃物・酸素供給源・点火源）"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              ※「④燃焼の継続（酸化の連鎖反応）」で四要素とする場合もある。
            </figcaption>
          </figure>

          <div className={shared.bandCard}>
            <h3>① 可燃物</h3>
            <p>
              <strong>可燃物</strong>とは、点火されるとよく燃焼する性質をもつ物質のことであり、
              代表的なものに<strong>水素</strong>、<strong>一酸化炭素</strong>、<strong>硫黄</strong>、
              <strong>木材</strong>、<strong>石炭</strong>、<strong>ガソリン</strong>、
              <strong>プロパン</strong>などがあります。
            </p>

            <h3>② 酸素供給源</h3>
            <p>
              <strong>酸素供給源</strong>には、空気のほか、第1類危険物（酸化性固体）や第6類危険物（酸化性液体）などが含まれます。
              これらの酸化性物質は、化学反応の相手に<strong>酸素を供給する性質</strong>をもつため、
              可燃物と混合すると非常に危険です。
            </p>
            <p>
              また、第5類危険物（自己反応性物質）の多くは、分子内に酸素を含んでおり、さらに自らが可燃性であるため、
              可燃物と酸素供給源が一体となった状態になっています。このような性質をもつ物質は、特に注意が必要です。
            </p>
            <p>
              酸素濃度が高くなると、同じ物質であっても<strong>着火温度が低下する</strong>ため、火がつきやすくなります。
              さらに、<strong>火炎温度も上昇する</strong>ため、可燃性ガスに着火しやすくなり、
              燃焼速度や火炎の広がる速さも増大します。
            </p>

            <h3>③ 点火源（熱源）</h3>
            <p>
              <strong>点火源</strong>（または熱源）には、代表的なものとして火気のほか、
              火花（金属の衝撃による火花や静電気の放電）、摩擦熱、過電流、高温体などが挙げられます。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！ CO・CO₂・不活性ガス</h4>
            <p>ガス系の問題は細かいけど、ここだけは押さえておきたい！</p>
            <ul className={shared.compact}>
              <li>
                一酸化炭素（CO）：酸素が足りないときに出てくる不完全燃焼ガス。自分も燃えるし、体にも
                <strong>めちゃくちゃ毒</strong>。「見えない・におわない・でも危ない」って覚えておこう。
              </li>
              <li>
                二酸化炭素（CO₂）：もうこれ以上ほぼ酸化しないところまで行ったガス。だから燃えない。
                消火器の中身や、不活性ガスとしてよく使われる。
              </li>
              <li>
                不活性ガス：ほとんど反応しないおとなしいガス。窒素やアルゴン、ヘリウムなんかが代表選手で、
                反応性の高い物質を安全に保管したり、火を消したりするときに使う。どれも燃えないし、
                無色・無臭だと思っておけばOK。
              </li>
            </ul>
          </div>
        </section>

        {/* 5. 炎色反応 */}
        <section className={shared.section}>
          <h2>炎色反応</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>炎色反応</strong>とは、アルカリ金属やアルカリ土類金属、銅などの金属元素を無色の炎の中に入れたときに、
              その元素特有の色が炎に現れる現象です。
            </p>
            <ul className={shared.compact}>
              <li>リチウム（Li）：赤色</li>
              <li>ナトリウム（Na）：黄色</li>
              <li>カリウム（K）：赤紫色</li>
              <li>カルシウム（Ca）：橙赤色</li>
              <li>ストロンチウム（Sr）：紅色</li>
              <li>バリウム（Ba）：黄緑色</li>
              <li>銅（Cu）：青緑色</li>
            </ul>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/flame_color_reaction_elements.svg"
              alt="主な金属元素の炎色反応（色のイメージ）"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption className={shared.figureCaption}>
              ※すべての元素が炎色反応を示すわけではありません。
            </figcaption>
          </figure>
        </section>

        {/* 6. 有機物の燃焼 */}
        <section className={shared.section}>
          <h2>有機物の燃焼</h2>

          <div className={shared.bandCard}>
            <p>
              有機物の燃焼は、その状態（液体か固体か）によって燃え方が異なります。
              ガソリンや灯油などの液体有機物は、いったん蒸発して気体となり、この気体に火がつく
              <strong>蒸発燃焼</strong>を起こします。一方、木材や石炭などの固体有機物は、加熱によって分解して
              可燃性ガスを出し、そのガスが燃える<strong>分解燃焼</strong>をします。
            </p>
            <p>
              このため、有機物では<strong>「液体＝蒸発燃焼」「固体＝分解燃焼」</strong>として覚えておくと整理しやすくなります。
            </p>
            <p>
              すすとは、可燃性ガスの中に含まれる炭素粒子が高温でも燃えきらずに残り、ガスから分かれてしまったものを指します。
              空気（酸素）の供給が部分的に不足しているときに多く発生し、濃い煙である黒煙として見られます。
            </p>
            <p>
              不完全燃焼が起こると、すすの発生量が増えるとともに、可燃性ガス中の炭素が十分に酸化されないため、
              結果として<strong>一酸化炭素（CO）</strong>の生成量も多くなります。
            </p>
          </div>
        </section>

        {/* 7. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <ChemistryOfCombustionQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}