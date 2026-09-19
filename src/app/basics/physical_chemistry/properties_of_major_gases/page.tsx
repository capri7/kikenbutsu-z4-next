// src/app/basics/physical_chemistry/properties_of_major_gases/page.tsx
import type { Metadata } from 'next'

import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import PropertiesOfMajorGasesQuiz from './PropertiesOfMajorGasesQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 31節：主な気体の特性',
  description:
    '危険物乙4 第2章31節。酸素、二酸化炭素、一酸化炭素、水素、アセチレン、窒素、希ガス、空気の主な特性を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/properties_of_major_gases',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 31節：主な気体の特性',
    description:
      '危険物乙4 第2章31節。酸素、二酸化炭素、一酸化炭素、水素、アセチレン、窒素、希ガス、空気の主な特性を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/properties_of_major_gases',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 31節：主な気体の特性',
    description:
      '危険物乙4 第2章31節。酸素、二酸化炭素、一酸化炭素、水素、アセチレン、窒素、希ガス、空気の主な特性を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function PropertiesOfMajorGasesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '31節：主な気体の特性' },
        ]}
      />

      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <div className={shared.bandCard}>
            <p className={shared.summaryLabel}>👉このページでわかること</p>
            <p>
              ここでは、酸素、二酸化炭素、一酸化炭素、水素、アセチレン、窒素、希ガスの主な特性、酸素原子の電子配置、一酸化炭素と二酸化炭素の比較、空気の組成を解説します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>酸素</h2>

                  <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>酸素の主な特性</caption>
              <thead>
                <tr>
                  <th scope="col">分類</th>
                  <th scope="col">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>性状</th>
                  <td>20℃、1気圧で無色無臭の気体。液体酸素は淡青色で、強い磁石に引き寄せられる。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>存在</th>
                  <td>大気中に体積の割合で約21％含まれる。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼性</th>
                  <td>酸素自体は不燃性。燃焼を助ける支燃性がある。酸素濃度が高くなるにつれて、可燃物の燃焼は激しくなる。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>反応性</th>
                  <td>反応性に富み、高温では一部の貴金属、希ガス元素を除き、他のほとんどの元素と化合物（特に酸化物）をつくる。白金・金・銀・不活性ガス・ハロゲン等とは直接化合しない。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>溶解性</th>
                  <td>水にあまり溶けない。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>希ガス元素と不活性ガス</h4>
            <p>
              酸素の特性にある「希ガス元素」と「不活性ガス」は、ここでは同じ元素を指します。希ガスは、他の物質と反応しにくい性質から、不活性ガスとも呼ばれます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              実験室では、触媒を使用して過酸化水素を分解してつくります。
            </p>
          </div>

          <div className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 700 }}>
              2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>
            </p>
          </div>

          <h4>酸素原子の電子配置</h4>
          <figure className={shared.formulaCard} style={{ '--chapter-figure-max': '780px' } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/oxygen_atom.svg"
              alt="酸素原子の電子配置図。原子核は8+で、内側のK殻に電子2個、外側のL殻に電子6個がある。L殻の6個が最外殻電子であり、価電子である。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={940}
              height={480}
            />
            <figcaption className={shared.figureCaption}>
              酸素は8個の電子を持ちます。最も外側の電子殻の電子＝価電子は6個です。
            </figcaption>
          </figure>
        </section>

        <section className={shared.section}>
          <h2>二酸化炭素</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>二酸化炭素の主な特性</caption>
              <thead>
                <tr>
                  <th scope="col">分類</th>
                  <th scope="col">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>生成</th>
                  <td>炭素または炭素化合物の完全燃焼により生成する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>性状</th>
                  <td>空気より重く、無色・無臭の不燃性の気体。消火剤として使用される。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>空気との比較</th>
                  <td>1モル当たりの空気質量は約29g。これに対し、二酸化炭素CO<sub>2</sub>は12+16×2＝44gであるため、空気より重い。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>人体への影響</th>
                  <td>通常は人体に無害だが、空気中の濃度が高くなると有害となる。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>溶解性</th>
                  <td>水に溶け、その水溶液（炭酸水）は弱酸性を示す。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>状態変化</th>
                  <td>1気圧では液体にならず、-79℃で昇華して固体（ドライアイス）となる。ただし、加圧した状態で温度を下げると、容易に液化する。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <h2>一酸化炭素</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>一酸化炭素の主な特性</caption>
              <thead>
                <tr>
                  <th scope="col">分類</th>
                  <th scope="col">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>生成</th>
                  <td>炭素または炭素化合物の不完全燃焼により生成する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>毒性</th>
                  <td>人体に極めて有毒である。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>性状</th>
                  <td>空気より軽く、無色・無臭の可燃性の気体。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼</th>
                  <td>空気中で点火すると、淡青色（青白い）の炎をあげて燃焼し、二酸化炭素になる。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>溶解性</th>
                  <td>水にほとんど溶けない（わずかに溶ける程度）。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>液化</th>
                  <td>沸点が-192℃で、液化しにくい。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>一酸化炭素と二酸化炭素の比較</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>一酸化炭素と二酸化炭素の比較</caption>
              <thead>
                <tr>
                  <th scope="col">性質</th>
                  <th scope="col" style={{ background: '#fdeee2' }}>一酸化炭素CO</th>
                  <th scope="col" style={{ background: '#e6f0fa' }}>二酸化炭素CO<sub>2</sub></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>20℃のとき</th>
                  <td>無色無臭の気体</td>
                  <td>無色無臭の気体</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>空気に対する比重</th>
                  <td>0.97（空気より軽い）</td>
                  <td>1.5（空気より重い）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>空気中での燃焼性</th>
                  <td>燃焼する（淡青色の炎）</td>
                  <td>燃焼しない</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>液化</th>
                  <td>困難</td>
                  <td>容易</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>毒性</th>
                  <td>有毒</td>
                  <td>ほぼ無毒</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>水溶性</th>
                  <td>ほとんど溶けない</td>
                  <td>溶ける</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>還元性・酸化性</th>
                  <td>還元性をもつ</td>
                  <td>酸化性がある</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <h2>水素</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>水素の主な特性</caption>
              <thead>
                <tr>
                  <th scope="col">分類</th>
                  <th scope="col">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>軽さ</th>
                  <td>原子番号1の元素で、物質中最も軽い。このため空気中では拡散しやすい。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>性状</th>
                  <td>無色・無臭の気体。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼性</th>
                  <td>可燃性で、淡い青色の炎をあげて燃焼し、水を生じる。炎は見えにくい。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼範囲</th>
                  <td>4～75％で非常に広い。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>溶解性</th>
                  <td>水には溶けにくい。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.bandCard}>
            <p>
              水素は、酸素と反応して水を生じます。
            </p>
          </div>

          <div className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 700 }}>
              2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>アセチレン</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>アセチレンの主な特性</caption>
              <thead>
                <tr>
                  <th scope="col">分類</th>
                  <th scope="col">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>構造</th>
                  <td>構造式H-C≡C-Hで、三重結合を持つ。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>反応性</th>
                  <td>このため、他の物質と付加反応をおこしやすい。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>臭い</th>
                  <td>純粋なものは無臭だが、市販されているものは通常、硫黄化合物などの不純物を含むため、特有の臭いを持つ。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>燃焼</th>
                  <td>酸素と混合して完全燃焼させたときの炎の温度は3,330℃にも及ぶため、鉄の切断や溶接に広く使われている。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.bandCard}>
            <p>
              実験室では、炭化カルシウム（カーバイド）に水を作用させてつくります。
            </p>
          </div>

          <div className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 700 }}>
              CaC<sub>2</sub> + 2H<sub>2</sub>O → C<sub>2</sub>H<sub>2</sub> + Ca(OH)<sub>2</sub>
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              アセチレンに水を加えると、アセトアルデヒドが生成します。
              アセトアルデヒドの生成には、水銀塩の触媒が必要です。
            </p>
          </div>

          <div className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 700 }}>
              C<sub>2</sub>H<sub>2</sub> + H<sub>2</sub>O → CH<sub>3</sub>CHO
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>窒素</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>窒素の主な特性</caption>
              <thead>
                <tr>
                  <th scope="col">分類</th>
                  <th scope="col">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>性状</th>
                  <td>原子番号7の元素で、無色・無味・無臭の気体。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>液体窒素</th>
                  <td>窒素の気体を冷却した液体窒素は、無色透明で流動性が大きい。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>大気中の存在</th>
                  <td>大気中の体積の割合で約78％を占めている。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>性質</th>
                  <td>不燃性で、水に溶けにくく、20℃では不活性である。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>用途</th>
                  <td>消火剤としても使用される。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>高温・高圧での反応</th>
                  <td>高温・高圧では、多くの元素と直接化合するため、アンモニアや酸化窒素など多くの窒素化合物をつくる。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>呼吸との関係</th>
                  <td>生物は窒素を酸素と共に吸い込んで、二酸化炭素と共に吐き出している。体に吸収されにくいが、高圧下では体内に溶け込み、急に減圧すると気泡となって潜水病（減圧症）の原因になる。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>生体中の窒素</th>
                  <td>アミノ酸およびタンパク質の構成元素であり、アンモニウム塩、硝酸塩などとしても生体中に存在する。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <h2>希ガス</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>希ガスの主な特性</caption>
              <thead>
                <tr>
                  <th scope="col">分類</th>
                  <th scope="col">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>定義</th>
                  <td>周期表の第18族に属する元素のこと。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>元素</th>
                  <td>ヘリウム（He）、ネオン（Ne）、アルゴン（Ar）、クリプトン（Kr）、キセノン（Xe）、ラドン（Rn）。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>安定性</th>
                  <td>希ガスの原子はとても安定しているため、他の原子と結合しにくい。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>反応性</th>
                  <td>そのため、他の物質と反応しにくく、ほとんど化合物をつくらない。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <h2>空気</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className={shared.muted}>空気（大気）の組成</caption>
              <thead>
                <tr>
                  <th scope="col">成分</th>
                  <th scope="col">体積の割合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>窒素</th>
                  <td>約78％</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>酸素</th>
                  <td>約21％</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>アルゴン</th>
                  <td>0.93％</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>二酸化炭素</th>
                  <td>0.04％</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>その他</th>
                  <td>水蒸気、ネオン、ヘリウム等</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.bandCard}>
            <p>
              場所や時間によって変化する水蒸気を除き、この割合はほぼ一定です。
            </p>
          </div>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <PropertiesOfMajorGasesQuiz/>
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}