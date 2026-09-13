// src/app/basics/physical_chemistry/reaction_rate_and_equilibrium/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import ReactionRateAndEquilibriumQuiz from './ReactionRateAndEquilibriumQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 22節：反応速度と化学平衡',
  description:
    '危険物乙4 第2章22節。反応速度を左右する要因、触媒の働きを整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/reaction_rate_and_equilibrium',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 22節：反応速度と化学平衡',
    description:
      '危険物乙4 第2章22節。反応速度を左右する要因、触媒の働きを整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/reaction_rate_and_equilibrium',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 22節：反応速度と化学平衡',
    description:
      '危険物乙4 第2章22節。反応速度を左右する要因、触媒の働きを整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ReactionRateAndEquilibriumPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '22節：反応速度と化学平衡' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>反応速度</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>反応速度</strong>は、化学反応が進む速度です。速度は反応物質または生成物質について、濃度の時間的変化率により表すことが多いです。
            </p>
            <p>
              化学反応が起きるためには、反応する物質の粒子が互いに衝突することが必要です。したがって、粒子の衝突頻度が高くなるほど、反応速度は速くなります。
            </p>
            <p>
              反応速度を左右する要因として、次のものが挙げられます。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>反応速度を左右する要因</h3>
            <ol className={shared.compact}>
              <li>濃度が高いほど、衝突頻度が高くなるため反応は速くなる。</li>
              <li>圧力が高いほど、一定体積中の粒子数が増えるため反応は速くなる。</li>
              <li>温度が高いほど、粒子の運動が活発となり反応は速くなる。</li>
              <li>触媒を使用すると、化学変化の際に必要となるエネルギーが減少して、より反応しやすくなる。この結果、反応は速くなる。</li>
            </ol>
          </div>

          <div className={shared.bandCard}>
            <p>
              <strong>触媒</strong>は、反応の前後でそれ自身は変化せず、反応速度を速める物質をいいます。単に触媒といった場合、反応速度を速める<strong>正触媒</strong>を指しますが、反応速度を抑える<strong>負触媒</strong>もあります。
            </p>
            <p>
              触媒を用いると、触媒と反応物が結びつき、活性化エネルギーの小さな別の反応経路で反応が進むため、反応速度が大きく速くなります。
            </p>
            <p>
              触媒は化学反応式に記入されることはありません。また、触媒の有無で熱化学方程式における反応熱が変化することもありません。触媒によって、平衡の移動は起こりません。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <p>
              ハロゲン化物消火剤は、燃焼の化学反応を抑制する<strong>負触媒（抑制）効果</strong>をもつ消火剤です。窒息効果とあわせて、油火災（B火災）・電気火災（C火災）に適応できます。
            </p>
          </div>
        </section>

        <section className={shared.section}>
        <h2>触媒の種類</h2>

        <div className={shared.bandCard}>
          <p>
            触媒は、反応物に対する作用の仕方の違いによって分類されます。
          </p>
          <p>
            過酸化水素H<sub>2</sub>O<sub>2</sub>の分解反応の際に加える鉄（Ⅲ）イオンFe<sup>3+</sup>のように、反応物と均一に混じり合って働く触媒を<strong>「均一触媒（均一系触媒）」</strong>といいます。生物の体内ではたらく酵素などは、代表的な均一触媒です。
          </p>
          <p>
            過酸化水素H<sub>2</sub>O<sub>2</sub>の分解反応の際に加える酸化マンガン（Ⅳ）MnO<sub>2</sub>のように、反応物とは混じり合わずにはたらく触媒を<strong>「不均一触媒（不均一系触媒）」</strong>といいます。白金Ptや鉄Feなどの固体触媒は、代表的な不均一触媒です。
         </p>
        </div>
      </section>
      <section className={shared.section}>
        <h2>化学平衡</h2>

        <div className={shared.bandCard}>
          <p>
            化学反応において、左辺から右辺に進む反応を<strong>正反応</strong>、逆に右辺から左辺に進む反応を<strong>逆反応</strong>といいます。
          </p>
          <p>
            正反応と逆反応が同時に進行する反応を<strong>可逆反応</strong>といい、左辺と右辺を⇄記号で結びます。また、正反応のみが起こり逆反応が起こらない、一方のみ進行する反応を<strong>不可逆反応</strong>といいます。
          </p>
          <p>
            <strong>化学平衡</strong>とは、可逆反応において正反応と逆反応の速さが等しく、見かけ上の変化がない状態をいいます。ただし、内部では正反応と逆反応が同時に進行しています。
          </p>
        </div>
      <figure className={shared.formulaCard}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/basics/physical_chemistry/chemical_equilibrium_graph.svg"
          alt="化学平衡に達するまでの反応速度の変化を示すグラフ。横軸は時間、縦軸は反応速度。正反応の速さは時間とともに減少し、逆反応の速さは時間とともに増加して、やがて2つの速さが一致する。この一致した状態が平衡状態であり、その後も正反応・逆反応は同じ速さで進み続けることを示す。"
          className={shared.circuitSvg}
          loading="lazy"
          decoding="async"
          width={1500}
          height={900}
        />
        <figcaption className={shared.figureCaption}>
          <strong>化学平衡に達するまでの反応速度</strong> — 正反応と逆反応の速さが時間とともに近づき、一致した状態が平衡状態です。
        </figcaption>
      </figure>

      </section>

      <section className={shared.section}>
        <h2>ルシャトリエの法則</h2>

        <div className={shared.bandCard}>
          <p>
            <strong>ルシャトリエの法則</strong>とは、可逆反応が平衡にあるときに濃度・温度・圧力等が変化すると、その変化を打ち消す（和らげる）方向に平衡が移動するという法則です。<strong>平衡移動の法則</strong>ともいいます。
          </p>
          <p>
            窒素と水素からアンモニアが生成する反応（N<sub>2</sub>＋3H<sub>2</sub>⇄2NH<sub>3</sub>＋熱量）を例に、3つのパターンで平衡の移動を見てみましょう。
          </p>
          <p>
            <strong>濃度を変化させた場合：</strong>N<sub>2</sub>やH<sub>2</sub>の濃度を上げると、増えた物質を減らす方向、つまり右辺（NH<sub>3</sub>が増える方向）に平衡が移動します。逆にNH<sub>3</sub>の濃度を上げると、左辺方向に移動します。
          </p>
          <p>
            <strong>圧力を変化させた場合：</strong>この反応は、気体の総molが左辺4mol（1＋3）、右辺2molと、左辺の方が多くなっています。圧力を上げると、気体の総mol数が減る方向、つまり右辺方向に平衡が移動します。逆に圧力を下げると、左辺方向に移動します。
          </p>
          <p>
            <strong>温度を変化させた場合：</strong>この反応は発熱反応（右辺に熱量がつく反応）です。温度を上げると、熱を吸収する方向、つまり左辺方向に平衡が移動します。逆に温度を下げると、右辺方向に移動します。
          </p>
        </div>

        <div className={shared.tableContainer}>
          <table className={shared.styledTable}>
          <thead>
            <tr>
              <th scope="col">条件</th>
              <th scope="col">平衡が移動する方向</th>
              <th scope="col">例（N<sub>2</sub>＋3H<sub>2</sub>＝2NH<sub>3</sub>＋92.2kJ）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className={shared.stickyCol} style={{ backgroundColor: '#fdeeec' }}>濃度<br />（反応物の濃度が高まる）</th>
               <td>正反応（右辺）の方向に移動</td>
               <td>N<sub>2</sub>やH<sub>2</sub>を加える→右辺方向に移動</td>
              </tr>
            <tr>
              <th scope="row" className={shared.stickyCol} style={{ backgroundColor: '#fdeeec' }}>濃度<br />（生成物の濃度が高まる）</th>
               <td>逆反応（左辺）の方向に移動</td>
               <td>NH<sub>3</sub>を加える→左辺方向に移動</td>
              </tr>
            <tr>
              <th scope="row" className={shared.stickyCol} style={{ backgroundColor: '#f2e9e0' }}>圧力（気体）<br />（加圧する）</th>
               <td>分子数の減少する方向に移動</td>
               <td>加圧する→右辺方向に移動</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol} style={{ backgroundColor: '#f2e9e0' }}>圧力（気体）<br />（減圧する）</th>
               <td>分子数の増加する方向に移動</td>
               <td>減圧する→左辺方向に移動</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol} style={{ backgroundColor: '#eaf1fa' }}>温度<br />（温度が上昇する）</th>
                <td>吸熱反応の方向に移動</td>
                <td>温度が上昇する→左辺方向に移動</td>
            </tr>
            <tr>
              <th scope="row" className={shared.stickyCol} style={{ backgroundColor: '#eaf1fa' }}>温度<br />（温度が低下する）</th>
                <td>発熱反応の方向に移動</td>
                <td>温度が低下する→右辺方向に移動</td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>

      {/* クイズ */}
      <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <ReactionRateAndEquilibriumQuiz />
      </section>
 
        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}