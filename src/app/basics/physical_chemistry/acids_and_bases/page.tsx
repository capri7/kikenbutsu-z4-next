// src/app/basics/physical_chemistry/acids_and_bases/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import AcidsAndBasesQuiz from './AcidsAndBasesQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 23節：酸と塩基（アルカリ）',
  description:
    '危険物乙4 第2章23節。酸の定義と電離、塩酸・硫酸の電離式を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/acids_and_bases',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 23節：酸と塩基（アルカリ）',
    description:
      '危険物乙4 第2章23節。酸の定義と電離、塩酸・硫酸の電離式を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/acids_and_bases',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 23節：酸と塩基（アルカリ）',
    description:
      '危険物乙4 第2章23節。酸の定義と電離、塩酸・硫酸の電離式を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function AcidsAndBasesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '23節：酸と塩基（アルカリ）' },
        ]}
      />

      <div className={`site-main ${theme.theme}`}>
      <section className={shared.section}>
        <div className={shared.bandCard}>
          <p className={shared.summaryLabel}>👉このページでわかること</p>
          <p>
            ここでは、酸と塩基（アルカリ）の基本的な性質、中和反応の仕組み、水素イオン濃度とpHの関係、酸性酸化物・塩基性酸化物・両性酸化物の違い、塩の分類（正塩・酸性塩・塩基性塩）、そして塩の加水分解によって水溶液の性質が決まる仕組みを解説します。
          </p>
        </div>
      </section>

      <section className={shared.section}>
          <h2>酸</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>酸</strong>は、水に溶解すると電離して水素イオン（H<sup>+</sup>）を生じる物質、または他の物質に水素イオン（H<sup>+</sup>）を与えることのできる物質をいいます。
            </p>
            <p>
              酸は次のように電離します。<strong>電離</strong>は電気解離の略で、イオンに分かれることをいいます。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/acid_ionization_diagram.svg"
              alt="酸の電離を示す図。塩酸（1価の酸）はHCl⇄H+ + Cl-と電離し、H+が1個生じる。硫酸（2価の酸）はH2SO4⇄2H+ + SO4の2-乗と電離し、H+が2個生じる。上向きの矢印が正反応、下向きの矢印が逆反応（可逆反応）を表す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={700}
            />
            <figcaption className={shared.figureCaption}>
              <strong>酸の電離</strong> — 1分子から生じるH<sup>+</sup>の数を「価数」といいます。塩酸は1価、硫酸は2価の酸です。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
        <h2>塩基（アルカリ）</h2>

        <div className={shared.bandCard}>
          <p>
            <strong>塩基（アルカリ）</strong>は、水に溶解すると電離して水酸化物イオン（OH<sup>-</sup>）を生じる物質、または他の物質から水素イオン（H<sup>+</sup>）を受け取ることができる物質をいいます。
          </p>
          <p>
            塩基は、次のように電離します。
          </p>
          <p>
            ①水酸化ナトリウムNaOH⇄Na<sup>+</sup>＋OH<sup>-</sup>
          </p>
          <p>
            ②水酸化カリウムKOH⇄K<sup>+</sup>＋OH<sup>-</sup>
          </p>
          <p>
            酸性・中性・アルカリ性は、リトマス紙を使って見分けることができます。
          </p>
        </div>

        <figure className={shared.formulaCard}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/basics/physical_chemistry/base_ionization_diagram.svg"
          alt="塩基（アルカリ）の電離を示す図。①水酸化ナトリウムNaOH⇄Na+ + OH-、②水酸化カリウムKOH⇄K+ + OH-と電離し、どちらも水酸化物イオン（OH-）を生じることを示す。上向きの矢印が正反応、下向きの矢印が逆反応（可逆反応）を表す。"
          className={shared.circuitSvg}
          loading="lazy"
          decoding="async"
          width={1500}
          height={700}
        />
        <figcaption className={shared.figureCaption}>
          <strong>塩基（アルカリ）の電離</strong> — 水酸化ナトリウム・水酸化カリウムは、どちらも電離すると水酸化物イオン（OH<sup>-</sup>）を生じます。
        </figcaption>
      </figure>

        <h3>リトマス試験紙の反応</h3>
        <div className={shared.tableContainer}>
        <table className={shared.styledTable}>
          <thead>
            <tr>
              <th scope="col">酸または塩基</th>
              <th scope="col">リトマス紙</th>
              <th scope="col">酸性</th>
              <th scope="col">中性</th>
              <th scope="col">アルカリ性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className={shared.stickyCol}>酸<br />（水素イオンH<sup>+</sup>）</th>
              <td>青色リトマス紙</td>
              <td>赤くなる</td>
              <td>変化なし</td>
              <td>変化なし</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol}>塩基<br />（水酸化物イオンOH<sup>-</sup>）</th>
              <td>赤色リトマス紙</td>
              <td>変化なし</td>
              <td>変化なし</td>
              <td>青くなる</td>
            </tr>
          </tbody>
        </table>
      </div>
      </section>

      <section className={shared.section}>
        <h2>中和</h2>

        <div className={shared.bandCard}>
          <p>
            <strong>中和反応</strong>とは、酸と塩基（アルカリ）の溶液を当量ずつ混ぜたとき、酸と塩基は互いの性質を打ち消しあい、中性となって塩と水のできる反応をいいます。
          </p>
          <p>
            <strong>塩</strong>は、酸の水素原子を他の陽イオンに置き換えた化合物、または塩基の水酸基（OH）を他の陰イオンに置き換えた化合物をいいます。
          </p>
          <p>
            HCl＋NaOH→NaCl＋H<sub>2</sub>O
          </p>
          <p>
            この場合、酸（HCl）と塩基（NaOH）が中和して、塩（NaCl）と水（H<sub>2</sub>O）ができています。
          </p>
        </div>
      </section>

      <section className={shared.section}>
        <h2>水素イオン濃度 H<sup>+</sup></h2>

        <div className={shared.bandCard}>
          <p>
            <strong>水素イオン濃度</strong>とは、水溶液の水素イオンのモル濃度をいい、［H<sup>+</sup>］で表します。また、水酸化物イオンのモル濃度を<strong>水酸化物濃度</strong>といい、［OH<sup>-</sup>］で表します。
          </p>
          <p>
            純水では、水素イオン濃度と水酸化物イオン濃度は等しくなっていて、25℃では、次の濃度です。
          </p>
          <p>
            ［H<sup>+</sup>］＝［OH<sup>-</sup>］＝1.0×10<sup>-7</sup> mol/L
          </p>
          <p>
            ［H<sup>+</sup>］＝［OH<sup>-</sup>］が成立している水溶液を<strong>中性</strong>といいます。純水に酸を加えると［H<sup>+</sup>］が増えて［OH<sup>-</sup>］が減り、酸性になります。純水に塩基を加えると［OH<sup>-</sup>］が増えて［H<sup>+</sup>］が減り、塩基性になります。このように［H<sup>+</sup>］と［OH<sup>-</sup>］の関係は、一方が増えればもう一方が減る関係にあります。
          </p>
        </div>

        <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/basics/physical_chemistry/h_concentration_diagram.svg"
            alt="水素イオン濃度と酸性・塩基性の関係を示す図。左（赤）に行くほど酸性が強くHClを加えることで進み、右（青）に行くほど塩基性が強くNaOHを加えることで進む。酸性では[H+]が[OH-]より大きく[H+]は1.0×10のマイナス7乗mol/Lより大きい。中性では[H+]と[OH-]がともに1.0×10のマイナス7乗mol/L（25℃）で等しい。塩基性では[H+]が[OH-]より小さく[H+]は1.0×10のマイナス7乗mol/Lより小さい。[H+]と[OH-]は一方が増えればもう一方が減る関係にあることを示す。"
            className={shared.circuitSvg}
            loading="lazy"
            decoding="async"
            width={1500}
            height={800}
          />
          <figcaption className={shared.figureCaption}>
            <strong>水素イオン濃度と酸性・塩基性</strong> — ［H<sup>+</sup>］と［OH<sup>-</sup>］の大小関係で、酸性・中性・塩基性が決まります。
          </figcaption>
        </figure>
      </section>

      <section className={shared.section}>
        <h2>水素イオン指数 pH</h2>

        <div className={shared.bandCard}>
          <p>
            <strong>pH（ペーハー）</strong>は、水素イオン濃度を表す数値です。pH＝7で中性を示します。7より大きく14に近づくほど強いアルカリ性を示します。また、7より小さく0に近づくほど強い酸性を示します。
          </p>
        </div>

        <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/basics/physical_chemistry/ph_scale_diagram.svg"
            alt="pH（水素イオン指数）の図。pH0からpH14まで、赤（酸性）から青（塩基性）へのグラデーションで示す。pH7が中性。各pHの値に対応して、[H+]はpH0で10の0乗、pH14で10のマイナス14乗へと減少し、[OH-]はpH0で10のマイナス14乗、pH14で10の0乗へと増加することを示す。pHが1増えるごとに[H+]は1/10に減り、[OH-]は10倍に増える、反対方向の変化であることを示す。"
            className={shared.circuitSvg}
            loading="lazy"
            decoding="async"
            width={1560}
            height={850}
          />
          <figcaption className={shared.figureCaption}>
            <strong>pH（水素イオン指数）</strong> — pHが1増えるごとに、［H<sup>+</sup>］は1/10に減り、［OH<sup>-</sup>］は10倍に増えます。
          </figcaption>
        </figure>
      </section>

      <section className={shared.section}>
      <h2>酸化物の酸と塩基</h2>

      <div className={shared.bandCard}>
        <p>
          <strong>酸性酸化物</strong>は、水と反応して酸を生じるか、塩基と反応して塩を生じます。非金属元素の酸化物に多く見られ、①二酸化炭素（CO<sub>2</sub>）、②二酸化硫黄（SO<sub>2</sub>）、③二酸化窒素（NO<sub>2</sub>）、④二酸化ケイ素（SiO<sub>2</sub>）などが該当します。
        </p>
        <p>
          例：CO<sub>2</sub>＋H<sub>2</sub>O⇄H<sub>2</sub>CO<sub>3</sub>（炭酸）
        </p>
        <p>
          <strong>塩基性酸化物</strong>は、水と反応して塩基を生じるか、酸と反応して塩を生じます。金属元素の酸化物に多く見られ、①酸化カルシウム（CaO）、②酸化ナトリウム（Na<sub>2</sub>O）、③酸化銅（CuO）などが該当します。
        </p>
        <p>
          例：CuO＋2HCl→CuCl<sub>2</sub>＋H<sub>2</sub>O
        </p>
      </div>

      <div className={shared.examNotes}>
        <h4>出る出るポイント</h4>
        <p>
          酸化銅（Ⅱ）CuOは<strong>非水溶性</strong>です。
        </p>
      </div>

      <div className={shared.bandCard}>
        <p>
          <strong>両性酸化物</strong>は、塩基に対しては酸性、酸に対しては塩基性を示す酸化物です。①酸化アルミニウム（Al<sub>2</sub>O<sub>3</sub>）、②酸化亜鉛（ZnO）などが該当します。
        </p>
      </div>
    </section>

    <section className={shared.section}>
      <h2>塩</h2>

      <div className={shared.bandCard}>
      <p>
        <strong>塩</strong>は、中和反応によって水と一緒にできる物質です。塩基からきた陽イオンと、酸からきた陰イオンが結びついてできています。
      </p>
      <p>
        例えば、塩化ナトリウムNaClは、水酸化ナトリウムNaOH（塩基）からできたNa<sup>+</sup>と、塩酸HCl（酸）からできたCl<sup>-</sup>が結びついたものです。
      </p>
      <p>
        塩は、組成（成分）の違いによって、正塩・酸性塩・塩基性塩の3つに分類されます。ここで注意したいのは、<strong>この名前は「水溶液が実際に酸性かどうか」とは関係がない</strong>という点です。例えば、炭酸水素ナトリウムNaHCO<sub>3</sub>は「酸性塩」に分類されますが、実際に水に溶かすと弱い塩基性を示します。
      </p>
    </div>

      <div className={shared.tableContainer}>
        <table className={shared.styledTable}>
          <thead>
           <tr>
              <th scope="col">分類</th>
              <th scope="col">説明</th>
              <th scope="col">例</th>
           </tr>
          </thead>
          <tbody>
             <tr>
              <th scope="row" className={shared.stickyCol}>正塩</th>
              <td>酸のHも塩基のOHも残っていない塩</td>
              <td>NaCl、Na<sub>2</sub>CO<sub>3</sub>、Na<sub>2</sub>SO<sub>4</sub>、CH<sub>3</sub>COONa、NH<sub>4</sub>Cl</td>
             </tr>
             <tr>
              <th scope="row" className={shared.stickyCol}>酸性塩</th>
              <td>酸のHが残っている塩</td>
              <td>NaHSO<sub>4</sub>、NaHCO<sub>3</sub></td>
             </tr>
             <tr>
               <th scope="row" className={shared.stickyCol}>塩基性塩</th>
               <td>塩基のOHが残っている塩</td>
               <td>MgCl（OH）、CuCl（OH）</td>
             </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section className={shared.section}>
      <h2>塩の加水分解</h2>

      <div className={shared.bandCard}>
      <p>
        <strong>塩の加水分解</strong>とは、塩が水に溶け、水の分子と反応して酸性または塩基性を示す反応をいいます。
      </p>
      <p>
        塩の加水分解の一般的な傾向として、「弱酸と強塩基」からなる塩（酢酸ナトリウムなど）は、加水分解して塩基性を示します。酢酸ナトリウムCH<sub>3</sub>COONaを水に溶かすと、以下のように電離します。
      </p>
      </div>

      <figure className={shared.formulaCard}>
        <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
          CH<sub>3</sub>COONa → CH<sub>3</sub>COO<sup>-</sup> ＋ Na<sup>+</sup>
        </p>
      </figure>

      <div className={shared.bandCard}>
        <p>
          このとき、酢酸は弱酸で電離度が小さいので、電離したCH<sub>3</sub>COO<sup>-</sup>の一部は、水と反応してCH<sub>3</sub>COOHになります。
        </p>
      </div>

      <figure className={shared.formulaCard}>
        <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
          CH<sub>3</sub>COO<sup>-</sup> ＋ H<sub>2</sub>O ⇄ CH<sub>3</sub>COOH ＋ OH<sup>-</sup>
        </p>
      </figure>

      <div className={shared.bandCard}>
        <p>
          この結果、OH<sup>-</sup>の濃度が大きくなり、水溶液は弱塩基性となります。
        </p>
        <p>
          「強酸と弱塩基」からなる塩（塩化アンモニウムなど）は、加水分解して酸性を示します。塩化アンモニウムNH<sub>4</sub>Clを水に溶かすと、以下のように電離します。
        </p>
      </div>

      <figure className={shared.formulaCard}>
        <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
          NH<sub>4</sub>Cl → NH<sub>4</sub><sup>+</sup> ＋ Cl<sup>-</sup>
        </p>
      </figure>

      <div className={shared.bandCard}>
        <p>
          電離したNH<sub>4</sub><sup>+</sup>の一部は、次のように水と反応します。
        </p>
      </div>

      <figure className={shared.formulaCard}>
        <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
          NH<sub>4</sub><sup>+</sup> ＋ H<sub>2</sub>O ⇄ NH<sub>3</sub> ＋ H<sub>3</sub>O<sup>+</sup>
        </p>
      </figure>

      <div className={shared.bandCard}>
        <p>
          この結果、H<sub>3</sub>O<sup>+</sup>の濃度が大きくなり、水溶液は弱酸性となります。
        </p>
        <p>
          「弱酸と弱塩基」からなる塩は、加水分解して多くの場合、中性を示します。ただし、塩の中でも「強酸と強塩基」からなる塩化ナトリウムNaClなどは、加水分解せずに電離するだけで中性を示します。
        </p>
      </div>

      <figure className={shared.formulaCard}>
        <p style={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 700 }}>
          NaCl → Na<sup>+</sup> ＋ Cl<sup>-</sup>
        </p>
      </figure>

      <h3>塩の加水分解とその水溶液の液性</h3>
      <div className={shared.tableContainer}>
      <table className={shared.styledTable}>
        <thead>
          <tr>
            <th scope="col">組み合わせ</th>
            <th scope="col">加水分解</th>
            <th scope="col">液性</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className={shared.stickyCol}>強酸＋弱塩基</th>
            <td>する</td>
            <td>酸性</td>
          </tr>
          <tr>
            <th scope="row" className={shared.stickyCol}>弱酸＋強塩基</th>
            <td>する</td>
            <td>塩基性</td>
          </tr>
          <tr>
            <th scope="row" className={shared.stickyCol}>強酸＋強塩基</th>
            <td>しない</td>
            <td>中性</td>
          </tr>
          <tr>
            <th scope="row" className={shared.stickyCol}>弱酸＋弱塩基</th>
            <td>する</td>
            <td>多くは中性</td>
          </tr>
        </tbody>
      </table>
    </div>
    </section>

    {/* クイズ */}
    <section className={`${shared.section} ${shared.quizSection}`}>
      <h2 id="quiz-label">クイズ</h2>
      <AcidsAndBasesQuiz />
    </section>

    {/* 次に進む */}
    <section className={shared.signupCta}>
      <a href="/signup">この範囲の問題を解く（登録無料）</a>
    </section>

      </div>
    </>
  )
}