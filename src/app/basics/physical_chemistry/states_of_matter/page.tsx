// src/app/basics/physical_chemistry/states_of_matter/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import StatesOfMatterQuiz from './StatesOfMatterQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 12節：物質の三態',
  description:
    '危険物乙4 第2章12節。物質の三態（固体・液体・気体）と状態変化（融解・蒸発・凝縮・凝固・昇華・凝華）、融点・沸点・凝固点の定義を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/states_of_matter',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 12節：物質の三態',
    description:
      '危険物乙4 第2章12節。物質の三態（固体・液体・気体）と状態変化（融解・蒸発・凝縮・凝固・昇華・凝華）、融点・沸点・凝固点の定義を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/states_of_matter',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 12節：物質の三態',
    description:
      '危険物乙4 第2章12節。物質の三態（固体・液体・気体）と状態変化（融解・蒸発・凝縮・凝固・昇華・凝華）、融点・沸点・凝固点の定義を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function StatesOfMatterPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '12節：物質の三態' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>物質の状態変化</h2>

          <div className={shared.bandCard}>
            <p>
              物質には<strong>固体・液体・気体</strong>の3つの状態があり、同じ物質でも温度や圧力の条件によって変化します。これを<strong>物質の三態</strong>といいます。
            </p>
            <p>
              物質は温度や圧力によって三態に変化することから、標準的な状態を定義しておく必要があります。一般に温度<strong>20℃</strong>を<strong>常温</strong>、<strong>1気圧</strong>を<strong>常圧</strong>としており、これを<strong>常温常圧</strong>といいます。
            </p>
            <p>
              三態の変化は次のようにまとめることができます。<strong>昇華</strong>（固体が気体になる変化）の例として、ドライアイスやナフタレンが挙げられます。<strong>凝華</strong>（気体が固体になる変化）の例として、霜や樹霜が挙げられます。また、昇華して固体から気体になるときに周囲から熱を奪うことを<strong>昇華熱</strong>といいます。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>用語の整理</h3>
            <p>
              固体から気体、気体から固体への状態変化をいずれも「昇華」と呼んでいましたが、気体から固体への変化は「<strong>凝華</strong>」と呼び、区別しています。
            </p>
          </div>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/states_of_matter_diagram.svg"
              alt="物質の三態の状態変化図。固体・液体・気体の3つの状態が並び、固体から液体への変化を融解、液体から気体への変化を蒸発（気化）、気体から液体への変化を凝縮（液化）、液体から固体への変化を凝固と呼ぶ。固体から気体への変化を昇華、気体から固体への変化を凝華と呼び、いずれも熱の吸収または放出を伴う。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1560}
              height={900}
            />
            <figcaption className={shared.figureCaption}>
              <strong>物質の三態と状態変化</strong> — 固体・液体・気体の間の変化には、それぞれ熱の吸収または放出が伴います。
            </figcaption>
          </figure>

          <div className={shared.bandCard}>
            <p>
              たとえば、固体の氷は周囲から熱を吸収すると液体の水になり、水はさらに加熱されて熱を吸収すると水蒸気になります。反対に、水蒸気は温度が下がって熱を放出すると水滴となり、水は冷凍庫などで熱を奪われると氷になります。
            </p>
            <p>
              固体が液体に変化する温度を<strong>融点</strong>、液体が気体に変化する温度を<strong>沸点</strong>、液体が固体に変化する温度を<strong>凝固点</strong>といいます。一般に、融点より沸点の方が高くなります。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              固体・液体・気体における質量・体積・密度・粒子間の引力の違いは、次のようにまとめられます。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">項目</th>
                  <th scope="col">固体</th>
                  <th scope="col">液体</th>
                  <th scope="col">気体</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>質量</th>
                  <td>変化しない</td>
                  <td>変化しない</td>
                  <td>変化しない</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>体積</th>
                  <td>小</td>
                  <td>中</td>
                  <td>大</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>密度</th>
                  <td>大</td>
                  <td>中</td>
                  <td>小</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>粒子間の引力</th>
                  <td>働く</td>
                  <td>働く（固体より弱い）</td>
                  <td>働かない</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>体積・密度・粒子間の引力の変化の向き</h3>
            <ol className={shared.compact}>
              <li>体積：<strong>固体から気体に向かって大きくなります</strong>。</li>
              <li>密度：<strong>気体から固体に向かって大きくなります</strong>。</li>
              <li>粒子間の引力：<strong>気体から固体に向かって働きが強くなります</strong>。</li>
            </ol>
          </div>

          <div className={shared.bandCard}>
            <p>
              <strong>質量：</strong>物質を構成する粒子は、温度や気圧が変化しても増減しません。
            </p>
            <p>
              <strong>体積：</strong>温度が高くなると、粒子の熱運動が大きくなり、体積は増加します。ただし水は<strong>水素結合</strong>の影響を受け、固体（氷）の体積が液体（水）の体積より<strong>大きくなる例外</strong>があります。
            </p>
            <p>
              <strong>密度：</strong>温度が高くなると体積が大きくなるため、物質の密度は小さくなります。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ひっかけ注意</h3>
            <p>
              気体の場合、粒子間の引力はほとんど働かないものとして扱います。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>物質の状態図</h2>

          <div className={shared.bandCard}>
            <p>
              物質が温度と圧力の条件に応じてどのような状態にあるかを示した図を<strong>状態図</strong>といいます。状態図は物質の種類によって決まった形になります。
            </p>
            <p>
              状態図において、3本の曲線で分けられた部分では、物質は固体・液体・気体のいずれかの状態で存在します。また、これらの曲線上では両側の状態が共存します。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>境界を表す3本の曲線</h3>
            <ol className={shared.compact}>
              <li>
                <strong>蒸気圧曲線：</strong>液体と気体を区切る曲線です。この曲線上では液体と気体が共存します。
              </li>
              <li>
                <strong>融解曲線：</strong>固体と液体を区切る曲線です。この曲線上では固体と液体が共存します。
              </li>
              <li>
                <strong>昇華（圧）曲線：</strong>固体と気体を区切る曲線です。この曲線上では固体と気体が共存します。
              </li>
            </ol>
          </div>

          <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
               src="/images/basics/physical_chemistry/water_phase_diagram.svg"
               alt="水の状態図。横軸は温度T（℃）で0.01、100、374を、縦軸は圧力P（Pa）で対数目盛により6.078×10の2乗、1.013×10の5乗、2.208×10の7乗を示す。固体・液体・気体の3つの領域を、固体と液体を区切る融解曲線、液体と気体を区切る蒸気圧曲線、固体と気体を区切る昇華（圧）曲線が分けており、3曲線の交点が三重点、蒸気圧曲線の終点が臨界点である。融点（1atm）と沸点（1atm）の位置も示す。"
               className={shared.circuitSvg}
               loading="lazy"
               decoding="async"
               width={1600}
               height={1050}
            />
            <figcaption className={shared.figureCaption}>
              <strong>水の状態図</strong> — 融解曲線・蒸気圧曲線・昇華（圧）曲線の交点が三重点、蒸気圧曲線の終点が臨界点です。
            </figcaption>
          </figure>

          <div className={shared.bandCard}>
            <p>
              3本の曲線の交点は<strong>三重点</strong>と呼ばれ、固体・液体・気体の3つの状態が共存しています。水であっても、圧力の低い状態では昇華が起こります。
            </p>
            <p>
              物質の温度と圧力を高めていくと、気体と液体の区別がつかなくなり、いくら圧力を高めても凝縮が起こらなくなります。この点を<strong>臨界点</strong>といいます。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>融点と凝固点</h3>
            <p>
              1気圧のとき、水が氷になる温度（凝固点）と、氷が水になる温度（融点）は、ともに0℃です。また、<strong>純物質では融点と凝固点が等しくなります</strong>。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>水の状態変化と温度変化</h2>

          <div className={shared.bandCard}>
            <p>
              氷を加熱していくと、固体から液体、さらに気体へと変化します。このとき融解や蒸発が始まると、温度が変化しなくなる瞬間があります。これは、加えた熱量がすべて<strong>融解熱</strong>や<strong>蒸発熱</strong>として利用され、温度変化には利用されないためです。
            </p>
          </div>
          <figure className={shared.formulaCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/heating_curve_diagram.svg"
              alt="水の状態変化と温度変化のグラフ。横軸は時間、縦軸は温度で、融点と沸点の位置に破線を示す。固体を加熱すると温度が上昇して融点に達し、固体＋液体が共存する間は温度が一定に保たれ、この間に加えた熱は融解熱として使われる。融解が終わると液体として温度が上昇し、沸点に達すると液体＋気体が共存する間は再び温度が一定になり、この間に加えた熱は蒸発熱として使われる。沸騰が終わると気体として温度が上昇する、階段状のグラフである。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1600}
              height={1000}
            />
            <figcaption className={shared.figureCaption}>
              <strong>水の状態変化と温度変化</strong> — 融点・沸点では温度が一定に保たれ、加えた熱はそれぞれ融解熱・蒸発熱として使われます。
            </figcaption>
            </figure>
        </section>
        <section className={shared.section}>
        <h2>固体と気体の溶解度</h2>

        <div className={shared.bandCard}>
          <p>
            <strong>溶解</strong>とは、物質が液体中に溶けて均一な液体となる現象をいいます。元の液体を<strong>溶媒</strong>、溶けて均一になった液体を<strong>溶液</strong>、溶解した物質を<strong>溶質</strong>といいます。
          </p>
        </div>

        <div className={`${shared.callout} ${shared.calloutList}`}>
          <h3>溶解度</h3>
            <p>
              <strong>溶解度</strong>とは、溶媒100g中に溶解し得る溶質の最大量をグラム数で表したものです。たとえば溶解度50は、溶媒100g中に溶解し得る溶質が50gであることを表します。
            </p>
        </div>

        <div className={shared.bandCard}>
          <p>
            固体の溶解度は、一般に温度が高くなるほど大きくなります。ところが気体の溶解度は、温度が高くなるほど小さくなり、また、圧力が高くなるほど大きくなります。たとえば炭酸水は、温度が低くなるほど、また、圧力が高くなるほど、より多くの炭酸を水に溶かすことができます。
          </p>
        </div>
    </section>

    <section className={shared.section}>
        <h2>凝固点降下と沸点上昇</h2>

        <div className={shared.bandCard}>
          <p>
            純粋な物質（液体）であれば、凝固点と沸点は物質ごとに定まっています。しかし、不揮発性の物質を液体に溶解させると、その希薄溶液は<strong>凝固点降下</strong>または<strong>沸点上昇</strong>を起こします。
          </p>
        </div>

        <div className={`${shared.callout} ${shared.calloutList}`}>
          <h3>身近な例</h3>
          <ol className={shared.compact}>
            <li>
              融雪剤・凍結防止剤の<strong>塩化カルシウム（CaCl<sub>2</sub>）</strong>を路面にまくと、水に塩化カルシウムが溶けることで凝固点降下が起き、雪や氷を溶かすことができます。
            </li>
            <li>
              沸騰した味噌汁が非常に熱いのは、溶けている成分により<strong>沸点上昇</strong>が起こり、沸点が100℃を超えているためです。
            </li>
          </ol>
        </div>

        <div className={shared.bandCard}>
          <p>
            凝固点降下または沸点上昇において、溶媒と溶液の凝固点または沸点の差を、それぞれ「<strong>凝固点降下度</strong>」「<strong>沸点上昇度</strong>」といいます。
          </p>
          <p>
            希薄溶液の凝固点降下度または沸点上昇度は、溶質の種類に関係なく、溶液中の溶質の<strong>質量モル濃度</strong>に比例します。質量モル濃度は、溶媒1kg中に溶けている溶質の物質量（モル）で表した濃度で、単位は<strong>mol/kg</strong>です。
          </p>
        </div>
      </section>

      {/* クイズ */}
      <section className={`${shared.section} ${shared.quizSection}`}>
  <h2 id="quiz-label">クイズ</h2>
  <StatesOfMatterQuiz />
      </section>

      {/* 次に進む */}
      <section className={shared.signupCta}>
        <a href="/signup">この範囲の問題を解く（登録無料）</a>
      </section>
    </div>
    </>
  )
}


