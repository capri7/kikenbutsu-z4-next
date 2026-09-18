// src/app/basics/physical_chemistry/organic_compounds/page.tsx
import type { Metadata } from 'next'

import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import OrganicCompoundsQuiz from './OrganicCompoundsQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 29節：有機化合物',
  description:
    '危険物乙4 第2章29節。有機化合物の特徴、無機化合物との違い、炭化水素の分類、官能基による分類を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/organic_compounds',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 29節：有機化合物',
    description:
      '危険物乙4 第2章29節。有機化合物と無機化合物の特徴の違い、炭化水素の分類、官能基による分類を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/organic_compounds',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 29節：有機化合物',
    description:
      '危険物乙4 第2章29節。有機化合物の特徴、無機化合物との違い、炭化水素の分類、官能基による分類を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function OrganicCompoundsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '29節：有機化合物' },
        ]}
      />

      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <div className={shared.bandCard}>
            <p className={shared.summaryLabel}>👉このページでわかること</p>
            <p>
              ここでは、有機化合物の特徴と無機化合物との違い、炭化水素の分類、官能基による分類（炭化水素類・アルコール類・アルデヒド・ケトン・アミン・カルボン酸・エーテル・ニトロ化合物・エステル）を解説します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>有機化合物の特徴</h2>
          <div className={shared.bandCard}>
            <p>
              有機化合物は、炭素Cを含む化合物の総称です。炭素は4本の「腕」をもっていることから、さまざまな原子と化合物をつくることができます。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>価標</h4>
            <p>
              「腕」は正式には価標のことです。価標を用いて表した化学式を「構造式」といいます。窒素Nは3本、酸素Oは2本の価標を持ちます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              有機化合物に対し、無機化合物は有機化合物以外の総称です。一酸化炭素CO、二酸化炭素CO<sub>2</sub>、炭酸カルシウムCaCO<sub>3</sub>などは炭素を含みますが、無機化合物として取り扱います。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              有機化合物を構成する元素は、炭素C、水素Hのほかに、酸素O、窒素N、硫黄S、塩素Cl、リンP、ハロゲンなどで、その種類は少ないです。しかし、有機化合物の種類は無機化合物に比べて非常に多くなっています。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              有機化合物は、非金属元素の原子が共有結合で結びつき、分子がつくられています。結合の仕方の相違から、組成が同じであっても性質の異なる異性体が存在します。また、一般に無機化合物に比べて融点および沸点の低いものが多く、分子量が大きくなっています。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>有機化合物と無機化合物の違い</caption>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">有機化合物</th>
                  <th scope="col">無機化合物</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>化学結合</th>
                  <td>共有結合による分子</td>
                  <td>イオン結合による塩</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>融点</th>
                  <td>一般に融点は低い。高温では分解しやすい。</td>
                  <td>一般に融点は高い。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>水溶性</th>
                  <td>水に溶けにくいものが多い。有機溶剤（有機溶媒）には溶けやすい。</td>
                  <td>一般に水に溶けやすく、有機溶剤（有機溶媒）に溶けにくい。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>電気特性</th>
                  <td>一般に非電解質</td>
                  <td>一般に電解質</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼</th>
                  <td>可燃性のものが多い。</td>
                  <td>不燃性のものが多い。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>反応性</th>
                  <td>反応は遅く、完全に進行しにくい。</td>
                  <td>反応は速く、完全に反応するものが多い。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.bandCard}>
            <p>
              有機化合物は一般に水には溶けにくいものが多いですが、アルコール、アセトン、ジエチルエーテルなどの有機溶媒には溶けるものが多くあります。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              第4類危険物（引火性液体）は、多くが有機化合物です。炭素と水素からなる有機化合物を完全燃焼させると、二酸化炭素CO<sub>2</sub>と水H<sub>2</sub>Oを生じます。また、燃焼を除くと反応速度は遅く、触媒を必要とする反応が多くみられます。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>熱分解</h4>
            <p>
              熱分解とは、有機化合物などを酸素の存在しない状態で加熱することによって起こる分解反応です。有機化合物は約300℃を超えると、複雑な構造をもつ構成分子の運動が激しくなり、分子間の結合が切れてバラバラになり始めます。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>炭化水素の分類</h2>
          <div className={shared.bandCard}>
            <p>
              炭素と水素でできた化合物を炭化水素といいます。炭化水素は最も基本的な有機化合物であり、鎖式炭化水素と環式炭化水素に大別されます。鎖式炭化水素は分子構造が鎖状になっている炭化水素で、エチレンやプロパンが該当します。環式炭化水素は、原子が分子内で環をつくって結合している炭化水素で、ベンゼンC<sub>6</sub>H<sub>6</sub>が該当します。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              鎖式炭化水素のうち、炭素原子間の結合がすべて単結合（1本の腕）であるものを飽和炭化水素といい、メタンやプロパンなどが該当します。一方、炭素原子間の結合に二重結合や三重結合を含むものを不飽和炭化水素といい、エチレンやアセチレンなどが該当します。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              また、飽和炭化水素をアルカン、二重結合を1個含む不飽和炭化水素をアルケン、三重結合を1個含む不飽和炭化水素をアルキンといいます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              環式炭化水素のうち、飽和炭化水素をシクロアルカン、二重結合を1個含む不飽和炭化水素をシクロアルケンといい、これらをまとめて脂環式炭化水素といいます。また、ベンゼン環と呼ばれる独特な炭素骨格をもつ環式炭化水素を芳香族炭化水素といいます。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>炭化水素の分類</h2>
          <div className={shared.bandCard}>
            <p>
              炭素と水素でできた化合物を炭化水素といいます。炭化水素は最も基本的な有機化合物であり、鎖式炭化水素と環式炭化水素に大別されます。鎖式炭化水素は分子構造が鎖状になっている炭化水素で、エチレンやプロパンが該当します。環式炭化水素は、原子が分子内で環をつくって結合している炭化水素で、ベンゼンC<sub>6</sub>H<sub>6</sub>が該当します。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              鎖式炭化水素のうち、炭素原子間の結合がすべて単結合（1本の腕）であるものを飽和炭化水素といい、メタンやプロパンなどが該当します。一方、炭素原子間の結合に二重結合や三重結合を含むものを不飽和炭化水素といい、エチレンやアセチレンなどが該当します。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              また、飽和炭化水素をアルカン、二重結合を1個含む不飽和炭化水素をアルケン、三重結合を1個含む不飽和炭化水素をアルキンといいます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              環式炭化水素のうち、飽和炭化水素をシクロアルカン、二重結合を1個含む不飽和炭化水素をシクロアルケンといい、これらをまとめて脂環式炭化水素といいます。また、ベンゼン環と呼ばれる独特な炭素骨格をもつ環式炭化水素を芳香族炭化水素といいます。
            </p>
          </div>

          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/hydrocarbon_tree.svg"
              alt="炭化水素の分類図。炭化水素は鎖式炭化水素（脂肪族炭化水素）と環式炭化水素に分かれる。鎖式炭化水素は、単結合のみの飽和炭化水素（アルカン：メタン・エタン・プロパン）と、二重結合を含む不飽和炭化水素のアルケン（エチレン・プロピレン）、三重結合を含むアルキン（アセチレン）に分かれる。環式炭化水素は、脂環式炭化水素と芳香族炭化水素（ベンゼン）に分かれ、脂環式炭化水素はさらに飽和炭化水素のシクロアルカン（シクロヘキサン）と不飽和炭化水素のシクロアルケン（シクロヘキセン）に分かれる。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1340}
              height={558}
            />
            <figcaption className={shared.figureCaption}>
              炭化水素の分類 — 鎖式と環式、飽和と不飽和による分類をまとめています。
            </figcaption>
          </figure>

          <h3>アルカンの構造式</h3>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/alkane_structures.svg"
              alt="メタンCH4、エタンC2H6、プロパンC3H8の構造式。いずれも炭素原子間はすべて単結合で、余った結合手にはすべて水素原子が結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1260}
              height={380}
            />
            <figcaption className={shared.figureCaption}>
              メタン・エタン・プロパンの構造式 — 炭素原子間はすべて単結合で、残りの結合手には水素原子が結びついています。
            </figcaption>
          </figure>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/butane_structure.svg"
              alt="ブタンC4H10の構造式。炭素原子4個が単結合で鎖状につながり、両端の炭素に水素原子が3個ずつ、中間の炭素に水素原子が2個ずつ結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={700}
              height={380}
            />
            <figcaption className={shared.figureCaption}>
              ブタンの構造式 — 炭素数4のアルカンです。
            </figcaption>
          </figure>

          <h3>アルケンの構造式</h3>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/alkene_structures.svg"
              alt="エチレンC2H4、プロピレンC3H6の構造式。いずれも炭素原子間に二重結合を1個持つ。エチレンは両方の炭素に水素原子が2個ずつ結びつき、プロピレンは二重結合をもつ炭素の一方にメチル基（CH3）が結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={900}
              height={380}
            />
            <figcaption className={shared.figureCaption}>
              エチレン・プロピレンの構造式 — 炭素原子間に二重結合を1個持ちます。
            </figcaption>
          </figure>

          <h3>アルキンの構造式</h3>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/alkyne_structure.svg"
              alt="アセチレンC2H2の構造式。炭素原子間に三重結合を1個持ち、両端の炭素にそれぞれ水素原子が1個ずつ結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={480}
              height={300}
            />
            <figcaption className={shared.figureCaption}>
              アセチレンの構造式 — 炭素原子間に三重結合を1個持ちます。
            </figcaption>
          </figure>

          <h3>シクロアルカンの構造式</h3>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/cyclohexane_structure.svg"
              alt="シクロヘキサンC6H12の構造式。6個の炭素原子が単結合のみで環をつくり、各炭素原子に水素原子が2個ずつ結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={620}
              height={620}
            />
            <figcaption className={shared.figureCaption}>
              シクロヘキサンの構造式 — 6個の炭素が単結合のみで環をつくっています。
            </figcaption>
          </figure>

          <h3>シクロアルケンの構造式</h3>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/cyclohexene_structure.svg"
              alt="シクロヘキセンC6H10の構造式。6個の炭素原子が環をつくり、そのうち隣り合う2個の炭素原子間に二重結合を1個持つ。二重結合をもつ2個の炭素原子には水素原子が1個ずつ、残り4個の炭素原子には水素原子が2個ずつ結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={620}
              height={620}
            />
            <figcaption className={shared.figureCaption}>
              シクロヘキセンの構造式 — 環の中に二重結合を1個持ちます。
            </figcaption>
          </figure>

          <h3>芳香族炭化水素の構造式</h3>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/benzene_model.svg"
              alt="ベンゼンC6H6の構造式。6個の炭素原子が環をつくり、単結合と二重結合が交互に並ぶ。各炭素原子に水素原子が1個ずつ結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={620}
              height={620}
            />
            <figcaption className={shared.figureCaption}>
              ベンゼンの構造式 — 単結合と二重結合が交互に並ぶ環構造です。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>官能基による分類</h2>
          <div className={shared.bandCard}>
            <p>
              官能基とは、有機化合物の分子構造の中にあって、同族体に共通に含まれ、かつ同族体に共通な反応性の要因となる原子団または結合形式をいいます。例えば、メタノールCH<sub>3</sub>OHやエタノールC<sub>2</sub>H<sub>5</sub>OHなどのアルコール類にはヒドロキシ基-OHがあり、これが水溶性（親水性）を示す要因となっています。
            </p>
          </div>

          <h3>炭化水素類</h3>
          <div className={shared.bandCard}>
            <p>炭素と水素のみからなる化合物の総称です。</p>
          </div>

          <h3>アルコール類</h3>
          <div className={shared.bandCard}>
            <p>
              アルコール類は、鎖式炭化水素の水素原子Hをヒドロキシ基-OHで置換した形の化合物の総称です。C-OHの炭素原子に結合している炭素原子の数で、第1級、第2級、第3級と区別します。例えば、エタノールC<sub>2</sub>H<sub>5</sub>OHは、C-OHの炭素に結合している炭素の数が1個（CH<sub>3</sub>）であることから第1級アルコールです。第2級アルコールは炭素に結合している炭素数が2個、第3級アルコールは炭素に結合している炭素数が3個のものをいいます。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>メタノールの扱い</h4>
            <p>
              メタノールCH<sub>3</sub>OHは炭素原子どうしの結合をもちませんが、酸化するとホルムアルデヒドHCHOになるため、一般に第1級アルコールに含めます。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>アルコールの級数と酸化生成物</caption>
              <thead>
                <tr>
                  <th scope="col">アルコールの級数</th>
                  <th scope="col">酸化生成物</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第1級アルコール</th>
                  <td>エタノール等を過マンガン酸カリウムなどの酸化剤で酸化するとアルデヒドになり、さらに酸化するとカルボン酸になる。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第2級アルコール</th>
                  <td>酸化するとケトンになる。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第3級アルコール</th>
                  <td>酸化されにくい。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/alcohol_oxidation_r.svg"
              alt="第1級アルコールの酸化反応図。R-CH2-OHを酸化（-2H）するとアルデヒドR-CHOになり、さらに酸化（+O）するとカルボン酸R-COOHになる。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1319}
              height={400}
            />
            <figcaption className={shared.figureCaption}>
              第1級アルコールの酸化 — アルデヒドを経てカルボン酸になります。
            </figcaption>
          </figure>

          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/alcohol_oxidation.svg"
              alt="第1級アルコールの酸化反応図。エタノールC2H5OHを酸化（-2H）するとアセトアルデヒドCH3CHOになり、さらに酸化（+O）すると酢酸CH3COOHになる。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1283}
              height={420}
            />
            <figcaption className={shared.figureCaption}>
              第1級アルコールの酸化 — エタノールはアセトアルデヒドを経て酢酸になります。
            </figcaption>
          </figure>

          <h3>第2級アルコールの酸化</h3>
          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/ketone_oxidation.svg"
              alt="第2級アルコールの酸化反応図。R1-CH(OH)-R2を酸化（-2H）するとケトンR1-CO-R2になる。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={885}
              height={460}
            />
            <figcaption className={shared.figureCaption}>
              第2級アルコールの酸化 — ケトンになります。
            </figcaption>
          </figure>

          <h3>第3級アルコール</h3>
          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/tertiary_alcohol.svg"
              alt="第3級アルコールR1-C(OH)(R2)(R3)の構造図。ヒドロキシ基が結合した炭素原子に3個の炭化水素基R1・R2・R3が結合しており、水素原子が結合していないため酸化されにくい。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={620}
              height={420}
            />
            <figcaption className={shared.figureCaption}>
              第3級アルコール — ヒドロキシ基の結合した炭素に水素原子がないため、酸化されにくくなっています。
            </figcaption>
          </figure>
          
          <div className={shared.bandCard}>
            <p>
              アルコール類は、分子量の小さいものは水によく混ざり刺激性の味をもつ液体ですが、分子量の大きいものは固体で水に溶けにくくなります。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              炭素数の少ないアルコールを低級アルコール、炭素数が多い（6個以上）アルコールを高級アルコールといいます。低級アルコールは無色の液体であり、高級アルコールは蝋状の固体です。融点および沸点は、炭素数の少ないものほど低く、炭素数が多いものほど高くなります。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              アルコールR-OHにナトリウムを加えると、水素ガスを発生します。
            </p>
          </div>

          <div className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
              2R-OH + 2Na → 2R-ONa + H<sub>2</sub>
            </p>
          </div>

          <h3>アルデヒド</h3>
          <div className={shared.bandCard}>
            <p>
              アルデヒド基-CHOをもつ化合物の総称です。一般式R-CHOで表されます。酸化されるとカルボン酸になります。ホルムアルデヒドやアセトアルデヒドなどがあります。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/aldehyde_examples.svg"
              alt="ホルムアルデヒドHCHOとアセトアルデヒドCH3CHOの構造式。どちらも炭素原子に酸素原子が二重結合したアルデヒド基-CHOをもつ。ホルムアルデヒドは炭素に水素原子が2個、アセトアルデヒドは炭素にメチル基CH3と水素原子が1個ずつ結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={630}
              height={400}
            />
            <figcaption className={shared.figureCaption}>
              ホルムアルデヒド・アセトアルデヒドの構造式 — いずれもアルデヒド基-CHOをもちます。
            </figcaption>
          </figure>

                    <h3>ケトン</h3>
          <div className={shared.bandCard}>
            <p>
              ケトン基-CO-に2個の炭化水素基が結合した化合物です。一般式R<sub>1</sub>-CO-R<sub>2</sub>で表されます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/ketone_examples.svg"
              alt="ケトンの一般式R1-CO-R2とアセトンCH3COCH3の構造式。中心の炭素原子に酸素原子が二重結合したケトン基-CO-に、2個の炭化水素基が結合している。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={660}
              height={400}
            />
            <figcaption className={shared.figureCaption}>
              ケトンの一般式とアセトンの構造式 — ケトン基-CO-に2個の炭化水素基が結合しています。
            </figcaption>
          </figure>

          <h3>アミン</h3>
          <div className={shared.bandCard}>
            <p>
              アミン基-NH<sub>2</sub>に炭化水素が結合した化合物です。一般式R-NH<sub>2</sub>で表されます。アニリンC<sub>6</sub>H<sub>5</sub>-NH<sub>2</sub>などがあります。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/amine_examples.svg"
              alt="アミンの一般式R-NH2とアニリンC6H5-NH2の構造式。アニリンはベンゼン環の水素原子1個がアミノ基NH2に置き換わった構造をもつ。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={980}
              height={560}
            />
            <figcaption className={shared.figureCaption}>
              アミンの一般式とアニリンの構造式 — アニリンはベンゼン環にアミノ基が結びついた構造です。
            </figcaption>
          </figure>

          <h3>カルボン酸</h3>
          <div className={shared.bandCard}>
            <p>
              カルボキシ基-COOHをもつ有機酸の総称です。一般式R-COOHで表されます。アルデヒドが酸化するとカルボン酸になります。酢酸などがあります。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/carboxylic_acid_examples.svg"
              alt="カルボン酸の一般式R-COOHと酢酸CH3COOHの構造式。炭素原子に酸素原子が二重結合し、もう一方にヒドロキシ基OHが結びついたカルボキシ基-COOHをもつ。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={650}
              height={400}
            />
            <figcaption className={shared.figureCaption}>
              カルボン酸の一般式と酢酸の構造式 — カルボキシ基-COOHをもちます。
            </figcaption>
          </figure>

          <h3>エーテル</h3>
          <div className={shared.bandCard}>
            <p>
              酸素原子に2個の炭化水素基が結合した形の有機化合物の総称です。一般式R<sub>1</sub>-O-R<sub>2</sub>で表されます。ジエチルエーテルなどがあります。
            </p>

            <p>
              ジエチルエーテルは水に溶けにくいですが、油脂など多くの有機物をよく溶かすため、有機溶媒として広く使われています。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/diethyl_ether.svg"
              alt="ジエチルエーテルC2H5-O-C2H5の構造式。酸素原子の両側にエチル基が結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={670}
              height={340}
            />
            <figcaption className={shared.figureCaption}>
              ジエチルエーテルの構造式 — 酸素原子の両側にエチル基が結びついています。
            </figcaption>
          </figure>

          <div className={shared.bandCard}>
            <p>
              ジエチルエーテルは酸を触媒としてエタノールの脱水縮合で合成されます。
            </p>
          </div>

          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/ether_synthesis.svg"
              alt="ジエチルエーテルの合成反応図。エタノールC2H5OH2分子が酸触媒による脱水縮合で反応し、ジエチルエーテルC2H5-O-C2H5と水H2Oが生成する。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1528}
              height={340}
            />
            <figcaption className={shared.figureCaption}>
              ジエチルエーテルの合成 — エタノール2分子が酸触媒による脱水縮合でジエチルエーテルと水になります。
            </figcaption>
          </figure>

          <h3>ニトロ化合物</h3>
          <div className={shared.bandCard}>
            <p>
              ニトロ基-NO<sub>2</sub>が炭素原子に直接結合している有機化合物の総称です。ニトロベンゼン、トリニトロトルエンC<sub>6</sub>H<sub>2</sub>(NO<sub>2</sub>)<sub>3</sub>CH<sub>3</sub>などがあります。
            </p>
          </div>

          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/nitro_examples.svg"
              alt="ニトロ化合物の一般式R-NO2、ニトロベンゼンC6H5-NO2、トリニトロトルエンC6H2(NO2)3CH3の構造式。ニトロベンゼンはベンゼン環にニトロ基が1個、トリニトロトルエンはベンゼン環にメチル基とニトロ基3個が結びついている。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1220}
              height={480}
            />
            <figcaption className={shared.figureCaption}>
              ニトロ化合物の一般式・ニトロベンゼン・トリニトロトルエンの構造式です。
            </figcaption>
          </figure>

          <h3>エステル</h3>
          <div className={shared.bandCard}>
            <p>
              カルボン酸（ギ酸、酢酸、酪酸、プロピオン酸などが該当）とアルコールとが反応により結合して生成する化合物をエステルといいます。酢酸エチルなどがあります。一般式はR<sub>1</sub>-COO-R<sub>2</sub>で表されます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              エステルを生成する反応をエステル化といい、エステル中の-COO-をエステル結合といいます。
            </p>
          </div>

          <div className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 700 }}>
              R<sub>1</sub>-COOH + R<sub>2</sub>-OH → R<sub>1</sub>-COO-R<sub>2</sub> + H<sub>2</sub>O
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              エステルは親水性の-OHや-COOHが失われているため、水に溶けにくく、有機溶媒に溶けやすくなっています。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>エステルの加水分解</h4>
            <p>
              エステルに水を加えて長時間加熱すると、加水分解されてカルボン酸とアルコールを生じます。この反応をエステルの加水分解といいます。このとき、少量の硫酸や塩酸を加えておくと、H<sup>+</sup>が触媒としてはたらき、反応が速くなります。
            </p>
          </div>

          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/esterification.svg"
              alt="エステル化の反応図。カルボン酸R1-COOHのヒドロキシ基OHと、アルコールR2-OHの水素原子Hが結びついて水H2Oとして脱離し、エステルR1-COO-R2が生成する。アルコール側の酸素原子は脱離せずエステルの結合部分として残る。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1139}
              height={520}
            />
            <figcaption className={shared.figureCaption}>
              エステル化 — カルボン酸のOHとアルコールのHが結びついて水が脱離し、エステルが生成します。
            </figcaption>
          </figure>

          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/ethyl_acetate_synthesis.svg"
              alt="酢酸エチルの生成・加水分解を示す可逆反応図。酢酸CH3COOHとエタノールC2H5OHがエステル化すると酢酸エチルCH3COOC2H5と水H2Oが生成し、酢酸エチルが加水分解すると酢酸とエタノールに戻る。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1229}
              height={380}
            />
            <figcaption className={shared.figureCaption}>
              酢酸エチルの生成と加水分解 — 酢酸とエタノールはエステル化と加水分解で相互に変化します。
            </figcaption>
          </figure>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <OrganicCompoundsQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>


        {/* 続き：炭化水素の分類、官能基による分類を追加予定 */}
      </div>
    </>
  )
}