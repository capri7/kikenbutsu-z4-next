// src/app/basics/physical_chemistry/basics_of_chemistry/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import BasicsOfChemistryQuiz from './BasicsOfChemistryQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 21節：化学の基礎',
  description:
    '危険物乙4 第2章21節。原子と原子量、原子番号・質量数の関係を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/basics_of_chemistry',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 21節：化学の基礎',
    description:
      '危険物乙4 第2章21節。原子と原子量、原子番号・質量数の関係を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/basics_of_chemistry',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 21節：化学の基礎',
    description:
      '危険物乙4 第2章21節。原子と原子量、原子番号・質量数の関係を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function BasicsOfChemistryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '21節：化学の基礎' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>原子と原子量</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>原子</strong>は物質を構成する最小の微粒子です。また、その原子の種類を<strong>元素</strong>といいます。
            </p>
            <p>
              すべての原子の中心には正の電荷をもつ原子核があり、その周囲の電子殻では負の電荷を持つ電子が取り巻いています。また、原子核は、正の電荷を持つ陽子と電荷をもたない中性子からなり、すべての原子で「陽子の数＝電子の数」であるため、原子全体では電気的に中性です。
            </p>
            <p>
              原子に含まれる陽子の数は、原子の種類ごとに決まっており、この陽子の数を<strong>原子番号</strong>といいます。また、元素は簡単な記号で表され、これを<strong>元素記号</strong>といいます。
            </p>
            <p>
              原子1個の質量は非常に微少で、取り扱う際に不便です。そこで、炭素原子を基準に取り、その原子の質量を12として他の元素の原子の質量を相対的に表したものが<strong>原子量</strong>です。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/element_notation_diagram.svg"
              alt="元素記号の表し方のイメージ図。ヘリウム（He）を例に、左上の数字（4）が質量数、左下の数字（2）が原子番号であることを示す。質量数＝陽子の数＋中性子の数、原子番号＝陽子の数＝電子の数、中性子の数＝質量数－原子番号という関係も示す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={950}
            />
            <figcaption className={shared.figureCaption}>
              <strong>元素記号の表し方</strong> — 左上に質量数、左下に原子番号を書きます。
            </figcaption>
          </figure>

          <div className={shared.tableContainer}>
          <table className={shared.styledTable}>
            <thead>
              <tr>
                <th scope="col">元素名</th>
                <th scope="col">元素記号</th>
                <th scope="col">原子量</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className={shared.stickyCol}>水素</th>
                <td>H</td>
                <td>1</td>
              </tr>
              <tr>
                <th scope="row" className={shared.stickyCol}>炭素</th>
                <td>C</td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row" className={shared.stickyCol}>窒素</th>
                <td>N</td>
                <td>14</td>
              </tr>
              <tr>
                <th scope="row" className={shared.stickyCol}>酸素</th>
                <td>O</td>
                <td>16</td>
              </tr>
            </tbody>
          </table>
        </div>
        </section>

        <section className={shared.section}>
          <h2>分子と分子量</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>分子</strong>とは、2以上の原子から構成される物質を指します。実際、水素や酸素は大気中にあるとき、原子がそれぞれ2個結合した状態で存在しています。この場合、水素分子および酸素分子と呼びます。
            </p>
            <p>
              <strong>分子量</strong>とは、分子の中に含まれている原子量の総和のことをいいます。<strong>分子式</strong>とは、分子を構成する原子の元素記号と数を用いて、その分子の組成を表すものです。
            </p>
            <p>
              水素分子の分子式はH<sub>2</sub>であり、分子量は1×2＝2です。酸素分子の分子式はO<sub>2</sub>であり、分子量は16×2＝32です。また、水の分子式はH<sub>2</sub>Oであり、分子量は1×2＋16＝18です。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/molecular_weight_diagram.svg"
              alt="分子量の求め方の図。水素の原子量H=1、酸素の原子量O=16という基準値をもとに、水素分子H2の分子量は1×2=2、酸素分子O2の分子量は16×2=32、水H2Oの分子量は1×2+16=18と計算する流れを表で示す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={1000}
            />
            <figcaption className={shared.figureCaption}>
              <strong>分子量の求め方</strong> — 各元素の原子量を確認し、分子に含まれる原子量を足し合わせます。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>「モル（mol）」という単位</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>1モル</strong>とは、ある物質を構成する原子、あるいは分子が6.02×10<sup>23</sup>個だけ集まった量のことをいいます。すなわち、個数の単位の一つです。モルを単位として表した粒子の量を<strong>物質量</strong>といいます。
            </p>
            <p>
              6.02×10<sup>23</sup>という数字を<strong>アボガドロ数</strong>といい、アボガドロ数に単位をつけた6.02×10<sup>23</sup>/molを<strong>アボガドロ定数</strong>といいます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/mole_unit_diagram.svg"
              alt="モルは個数を数える単位であることを示す図。左側は1ダース＝12個（鉛筆12本のまとまり）、右側は1モル＝6.02×10の23乗個（原子・分子など粒子のまとまり）を対比して示す。下部にアボガドロ数（6.02×10の23乗、単位のない数）とアボガドロ定数（6.02×10の23乗/mol、アボガドロ数に単位molをつけたもの）の違いを示す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={950}
            />
            <figcaption className={shared.figureCaption}>
              <strong>モルは「個数を数える単位」</strong> — 1ダースが12個のまとまりであるように、1モルは6.02×10<sup>23</sup>個のまとまりです。
            </figcaption>
          </figure>

          <div className={shared.bandCard}>
            <p>
              原子や分子を1個ずつ数える代わりに、6.02×10<sup>23</sup>個をひとまとめにして「1モル」と呼びます。鉛筆を1本ずつ数える代わりに、12本をひとまとめにして「1ダース」と呼ぶのと、同じ考え方です。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
          <h3>まずはここだけ覚えよう！</h3>
            <p>
              1モル、すなわち6.02×10<sup>23</sup>個あたりの原子や分子の質量を求めるには、単純にその原子量や分子量にgをつけるだけでよいです。例えば、窒素（N<sub>2</sub>）1モルの質量は、14×2＝28より28gであり、二酸化炭素（CO<sub>2</sub>）1モルの質量は、12＋16×2＝44より44gとなります。
            </p>
          </div>
        </section>

        <section className={shared.section}>
        <h2>化学式と化学反応式</h2>

        <div className={shared.bandCard}>
          <p>
            <strong>化学式</strong>は、元素記号を組み合わせて物質の構造を表す式です。いくつかの表示方法があり、代表的なものに<strong>示性式</strong>と<strong>構造式</strong>があります。
          </p>
        </div>

        <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/basics/physical_chemistry/condensed_structural_formula_diagram.svg"
            alt="示性式と構造式の違いを示す図。エタノールを例に、示性式C2H5OHは官能基（-OH）をひとまとまりで表し物質の性質が分かりやすいが結合の詳細は示さないこと、構造式は原子どうしの結合を線で1本1本すべて示し分子内の結合の様子まで分かることを対比して示す。"
            className={shared.circuitSvg}
            loading="lazy"
            decoding="async"
            width={1500}
            height={800}
          />
          <figcaption className={shared.figureCaption}>
            <strong>示性式と構造式のちがい</strong> — 示性式は官能基をひとまとまりで表し、構造式はすべての結合を示します。
          </figcaption>
        </figure>

        <div className={shared.bandCard}>
          <p>
            示性式は、構造式を簡単にして官能基を明示した化学式です。ここで注意しなければならないのが、分子式では構造に2つ以上の可能性が生じてしまう場合がある、という点です。
          </p>
        </div>

        <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/basics/physical_chemistry/formula_ambiguity_diagram.svg"
            alt="示性式が分子式のあいまいさを解消することを示す図。分子式C2H6Oは、エタノール（示性式C2H5OH、-OHをもつ）とジメチルエーテル（示性式CH3OCH3、C-O-C結合をもつ）の2つの可能性があるが、示性式で書けばどちらの構造かが一意に決まることを示す。ジエチルエーテルの示性式C2H5OC2H5も併記する。"
            className={shared.circuitSvg}
            loading="lazy"
            decoding="async"
            width={1500}
            height={850}
          />
           <figcaption className={shared.figureCaption}>
             <strong>示性式が分子式のあいまいさを解消する</strong> — 分子式C<sub>2</sub>H<sub>6</sub>Oだけでは、エタノールとジメチルエーテルのどちらかが分かりません。示性式で書くことで、一意に決まります。
           </figcaption>
        </figure>

        <div className={shared.bandCard}>
          <p>
            例えば、エタノールの分子式はC<sub>2</sub>H<sub>6</sub>Oですが、これを示性式にするとC<sub>2</sub>H<sub>5</sub>OHになります。これにより、ジメチルエーテル（CH<sub>3</sub>OCH<sub>3</sub>）である可能性が排除されます。また、ジエチルエーテルの示性式はC<sub>2</sub>H<sub>5</sub>OC<sub>2</sub>H<sub>5</sub>となります。
          </p>
        </div>

        <div className={shared.bandCard}>
        <p>
          <strong>化学反応式</strong>は、化学式を用いて化学変化の内容を表した式です。反応物質の化学式（反応系）を左辺に、生成物質の化学式（生成系）を右辺に書き、矢印（→）で結びます。
        </p>
        <p>
          化学反応式では、左辺と右辺でそれぞれの原子数が等しくなるように、化学式の前に係数を付けます。ただし、係数は最も簡単な整数比になるようにし、1は省略します。
        </p>
        <p>
          例：水素＋酸素 → 水
        </p>
        </div>

        <figure className={shared.formulaCard}>
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img
             src="/images/basics/physical_chemistry/chemical_equation_diagram.svg"
             alt="化学反応式の読み方を示す図。2H2＋O2→2H2Oを例に、左辺（2H2＋O2）が反応物、右辺（2H2O）が生成物であることを示す。係数は最も簡単な整数比とし1は省略することも示す。左辺・右辺ともにH原子4個、O原子2個で一致していることを確認する。"
             className={shared.circuitSvg}
             loading="lazy"
             decoding="async"
             width={1500}
             height={800}
           />
           <figcaption className={shared.figureCaption}>
             <strong>化学反応式の読み方</strong> — 左辺が反応物、右辺が生成物です。左辺と右辺で原子数が一致するように係数をつけます。
           </figcaption>
        </figure>
    </section>

    <section className={shared.section}>
      <h2>アボガドロの法則</h2>

      <div className={shared.bandCard}>
        <p>
          すべての気体は、同温・同圧において、同じ体積内に同数の分子を含むという法則があります。これを<strong>アボガドロの法則</strong>といいます。
        </p>
        <p>
          この法則に従って、標準状態（0℃、1気圧）における1モルの気体の体積を調べると、<strong>22.4L</strong>となることが判明しています。
        </p>
      </div>

      <figure className={shared.formulaCard}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/basics/physical_chemistry/mol_hub_diagram.svg"
          alt="モルを中心に、質量・体積・個数の3つの計算がつながることを示す図。中心のmolから、質量（g）へはモル質量（g/mol）をかけ、体積（L、標準状態）へは22.4（L/mol）をかけ、個数（個）へはアボガドロ定数（6.02×10の23乗/mol）をかけることを、それぞれ矢印で示す。"
          className={shared.circuitSvg}
          loading="lazy"
          decoding="async"
          width={1500}
          height={950}
        />
        <figcaption className={shared.figureCaption}>
          <strong>モルを中心につながる3つの計算</strong> — molに、モル質量・22.4L・アボガドロ定数をそれぞれかけると、質量・体積・個数が求められます。
        </figcaption>
      </figure>
    </section>

    <section className={shared.section}>
      <h2>熱化学方程式</h2>

      <div className={shared.bandCard}>
        <p>
          化学反応式に反応熱を書き加え、両辺を等号（＝）で結んだものを<strong>熱化学方程式</strong>といいます。
        </p>
        <p>
          <strong>反応熱</strong>とは、1モルの反応物質が化学反応に伴って発生または吸収する熱量をいいます。反応熱には必ず「＋」「－」の符号がつき、「＋」は発熱反応を、「－」は吸熱反応を表します。
        </p>
        <p>
          反応熱は物質の状態によって変化するため、気体は（気）、液体は（液）、固体は（固）と付記します。
        </p>
      </div>

      <div className={shared.tableContainer}>
        <table className={shared.styledTable}>
          <thead>
            <tr>
              <th scope="col">反応熱の種類</th>
              <th scope="col">説明</th>
              <th scope="col">例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className={shared.stickyCol}>燃焼熱</th>
              <td>1モルの物質が完全燃焼するときに発生する反応熱</td>
              <td>C（固）＋O<sub>2</sub>（気）＝CO<sub>2</sub>（気）＋394kJ</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>生成熱</th>
              <td>化合物1モルが単体から生成するときの反応熱</td>
              <td>C（固）＋2H<sub>2</sub>（気）＝CH<sub>4</sub>（気）＋75kJ</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>中和熱</th>
              <td>酸と塩基が中和して1モルの水が生成するときの反応熱</td>
              <td>HCl（液）＋NaOH（液）＝NaCl（液）＋H<sub>2</sub>O（液）＋56kJ</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={shared.bandCard}>
        <p>
          反応熱は、反応物質と生成物質が同じであれば、反応の途中経路によらず一定です。これを<strong>ヘスの法則</strong>といいます。
        </p>
        <p>
          ヘスの法則の説明でよく取り上げられるのが、炭素CがCO<sub>2</sub>に変化する経路です。炭素Cから直接CO<sub>2</sub>に変化する経路と、炭素C→一酸化炭素CO→二酸化炭素CO<sub>2</sub>と変化する経路とでは、いずれの経路も総発熱量は同じになります。
        </p>
      </div>

    <figure className={shared.formulaCard}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/basics/physical_chemistry/hess_law_diagram.svg"
        alt="ヘスの法則を示す図。炭素C(固)と酸素O2(気)から二酸化炭素CO2(気)に至る2つの経路を示す。直接経路は394kJの発熱。間接経路は、①炭素Cが一酸化炭素COになる過程で111kJ、②一酸化炭素COが二酸化炭素CO2になる過程で283kJ発熱し、合計は111+283=394kJとなり、直接経路と一致する。"
        className={shared.circuitSvg}
        loading="lazy"
        decoding="async"
        width={1500}
        height={900}
      />
      <figcaption className={shared.figureCaption}>
        <strong>ヘスの法則</strong> — 炭素が二酸化炭素になる経路は違っても、発生する熱量の合計は394kJで一致します。
      </figcaption>
    </figure>
    </section>

    <section className={shared.section}>
      <h2>3つの濃度</h2>

      <div className={shared.bandCard}>
        <p>
          液体中に含まれる溶質の割合を<strong>濃度</strong>といいます。
        </p>
        <p>
          <strong>質量パーセント濃度</strong>は、溶液に含まれる溶質の質量の割合を百分率（％）で表した濃度です。
        </p>
        <p>
          <strong>モル濃度</strong>は、溶液1L中に含まれる溶質の量を物質量で表した濃度です。
        </p>
        <p>
          <strong>質量モル濃度</strong>は、溶媒1kg中に溶けている溶質の物質量で表した濃度です。
        </p>
      </div>

      <figure className={shared.formulaCard}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/basics/physical_chemistry/three_concentrations_diagram.svg"
          alt="3つの濃度の比べ方を示す図。質量パーセント濃度＝溶質の質量(g)÷溶液の質量(g)×100（単位％）、モル濃度＝溶質の物質量(mol)÷溶液の体積(L)（単位mol/L）、質量モル濃度＝溶質の物質量(mol)÷溶媒の質量(kg)（単位mol/kg）を並べて示す。モル濃度は溶液、質量モル濃度は溶媒を使う点が異なることを注意書きで強調する。"
          className={shared.circuitSvg}
          loading="lazy"
          decoding="async"
          width={1500}
          height={900}
        />
        <figcaption className={shared.figureCaption}>
          <strong>3つの濃度の比べ方</strong> — モル濃度は「溶液」、質量モル濃度は「溶媒」を基準にする点が異なります。
        </figcaption>
      </figure>
    </section>
    <section className={shared.section}>
      <h2>物質の極性と溶解</h2>

      <div className={shared.bandCard}>
        <p>
          塩化水素分子HClでは、共有電子対が電気陰性度の大きい塩素原子Clの方に引きつけられており、塩素原子Clはわずかに負の電荷を、水素原子Hはわずかに正の電荷を帯びます。このように、共有結合している2原子間に見られる電荷の偏りを<strong>「結合の極性」</strong>といいます。
        </p>
        <p>
          水素分子H<sub>2</sub>や塩素分子Cl<sub>2</sub>のように、極性のない分子を<strong>「無極性分子」</strong>といい、塩化水素分子HClのように、極性のある分子を<strong>「極性分子」</strong>といいます。
        </p>
        <p>
          水分子H<sub>2</sub>Oは、分子の形が折れ線形になっているため、2つのO-H結合の極性が打ち消し合わず、分子全体としても極性のある極性分子になります。
        </p>
        <p>
          一般に、<strong>極性物質どうし、無極性物質どうしは溶けやすい</strong>一方で、<strong>極性物質と無極性物質は溶けにくい</strong>傾向があります。
        </p>
        <p>
          図中の<strong>δ＋（デルタ・プラス）</strong>・<strong>δ－（デルタ・マイナス）</strong>は、原子が完全なイオンになるわけではなく、電気陰性度の差によって「わずかに」正または負の電荷を帯びていることを示す記号です。
        </p>
      </div>

      <figure className={shared.formulaCard}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/basics/physical_chemistry/molecular_polarity_diagram.svg"
          alt="極性分子と無極性分子の比較図。水素分子H2は同じ原子どうしのため電荷の偏りがなく無極性分子。塩化水素HClは電気陰性度の差によりHがδ＋、Clがδ－となり極性分子。水H2Oは折れ線形のため2つのO-H結合の極性が打ち消されず極性分子（Oがδ－）。二酸化炭素CO2は直線対称のため両側の極性が打ち消し合い無極性分子。結合に極性があっても分子の形によって全体では打ち消されることがあることを示す。"
          className={shared.circuitSvg}
          loading="lazy"
          decoding="async"
          width={1500}
          height={1000}
        />
        <figcaption className={shared.figureCaption}>
          <strong>極性分子と無極性分子</strong> — 結合に極性があっても、分子の形によって全体では打ち消されることがあります（CO<sub>2</sub>の例）。
        </figcaption>
      </figure>

      <div className={shared.examNotes}>
        <h4>出る出るポイント</h4>
        <p>
          「極性物質どうし、無極性物質どうしは溶けやすい」という原則は、第4類危険物の水溶性・非水溶性を理解するうえでも役立ちます。ガソリンやベンゼンなどの炭化水素は無極性分子のため水（極性分子）に溶けにくく、第4類危険物の大部分は<strong>非水溶性</strong>です。一方、メタノール・エタノールなどのアルコール類や、アセトン、酢酸は、分子内に<strong>-OHなどの極性をもつ部分</strong>があるため、少数派の<strong>水溶性</strong>危険物として扱われます。
        </p>
      </div>
    </section>

    {/* クイズ */}
    <section className={`${shared.section} ${shared.quizSection}`}>
      <h2 id="quiz-label">クイズ</h2>
      <BasicsOfChemistryQuiz />
    </section>

    {/* 次に進む */}
    <section className={shared.signupCta}>
      <a href="/signup">この範囲の問題を解く（登録無料）</a>
    </section>
    </div>
    </>
  )
}