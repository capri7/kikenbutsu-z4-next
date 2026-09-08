// src/app/basics/physical_chemistry/specific_gravity_vapor_density/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import SpecificGravityVaporDensityQuiz from './SpecificgravityvapordensityQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 14節：比重と蒸気比重',
  description:
    '危険物乙4 第2章14節。比重（液体・固体）と蒸気比重（気体）の定義、空気の平均分子量29の求め方、第4類危険物の比重・蒸気比重の傾向と例外を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/specific_gravity_vapor_density',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 14節：比重と蒸気比重',
    description:
      '危険物乙4 第2章14節。比重（液体・固体）と蒸気比重（気体）の定義、空気の平均分子量29の求め方、第4類危険物の比重・蒸気比重の傾向と例外を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/specific_gravity_vapor_density',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 14節：比重と蒸気比重',
    description:
      '危険物乙4 第2章14節。比重（液体・固体）と蒸気比重（気体）の定義、空気の平均分子量29の求め方、第4類危険物の比重・蒸気比重の傾向と例外を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SpecificGravityVaporDensityPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '14節：比重と蒸気比重' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>比重</h2>

          <div className={shared.bandCard}>
            <p>
              固体または液体の<strong>比重</strong>は、水を基準としたとき、その物質の密度と水の密度との比をいいます。水の密度はおよそ1g/cm<sup>3</sup>ですが、気圧と温度によって多少変化します。
            </p>
            <p>
              そこで、比重の算出にあたっては、<strong>1気圧・4℃の水</strong>を標準としています。また、このときの水の密度が最大となります。
            </p>
            <p>
              比重が1より大きい物質は水に入れると沈み、1よりも小さい物質は水に入れると浮きます。比重1.3の二硫化炭素（CS<sub>2</sub>）は水に沈み、比重約0.7のガソリンは水に浮きます。また、比重が同じであれば、同一の体積をもつ物質の質量は等しくなります。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ひっかけ注意：第4類危険物の比重の例外</h3>
            <p>
              第4類危険物の多くは比重1未満で水に浮きますが、<strong>二硫化炭素・クロロベンゼン・酢酸・アクリル酸・クレオソート油・アニリン・ニトロベンゼン・グリセリン・エチレングリコール・リン酸トリクレジル</strong>は例外的に比重が1を超え、水より重い物質です。特に二硫化炭素は可燃性蒸気の発生を防ぐため、水中に沈めて貯蔵します。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>密度と比重の違い</h3>
            <p>
              <strong>密度</strong>は、物質1cm<sup>3</sup>あたりの質量をg/cm<sup>3</sup>などの単位で表した実測値です。一方、<strong>比重</strong>は物質の密度と水の密度（1気圧・4℃で1g/cm<sup>3</sup>）との比であり、<strong>単位をもたない数値（無次元数）</strong>です。数値そのものは近い値になりますが、単位の有無という点で両者は異なります。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>計算問題のショートカット：質量＝体積×比重</h3>
            <p>
              水の密度は1気圧・4℃で1g/cm<sup>3</sup>（1kg/L）であるため、液体の<strong>質量（kg）は、体積（L）に比重を掛けることで求められます</strong>。たとえば、比重0.75のガソリン20Lの質量は、20×0.75＝<strong>15kg</strong>です。この関係を使うと、比重を使った質量・体積の計算問題を素早く処理できます。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>蒸気比重</h2>

          <div className={shared.bandCard}>
            <p>
              比重が水を基準としているのに対し、<strong>蒸気比重</strong>は空気を基準としたとき、その物質の気体の密度または蒸気の密度との比をいいます。この際、空気は<strong>1気圧・0℃</strong>を標準としています。
            </p>
            <p>
              蒸気比重が1よりも大きい蒸気（気体）は、空気中に放出すると低所に移動し、1よりも小さい蒸気（気体）は高所に移動します。蒸気比重3〜4のガソリン蒸気や蒸気比重4.5の灯油蒸気は、低所に滞留するため相応の配慮が必要となります。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>空気の平均分子量が29になる理由</h3>
            <p>
              蒸気比重は、蒸気または気体の分子量から算出することができます。空気は気体の混合物で、実際の組成は<strong>窒素（N<sub>2</sub>）約78％、酸素（O<sub>2</sub>）約21％</strong>です。計算を簡単にするため、これを<strong>窒素約8割・酸素約2割</strong>とみなします。
            </p>
            <p>
              窒素（N<sub>2</sub>：分子量14×2＝28）約8割、酸素（O<sub>2</sub>：分子量16×2＝32）約2割の構成とみなすと、空気の分子量は次のように求められます。
            </p>
            <p>
              28×0.8＋32×0.2≒<strong>29</strong>
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              たとえば、一酸化炭素（CO）は分子量12＋16＝28で、蒸気比重は28/29≒<strong>1</strong>となることから、火災が発生している建物内では満遍なく充満します。
            </p>
            <p>
              また、天然ガス燃料の主成分であるメタン（CH<sub>4</sub>）は分子量が12＋4＝16となり、蒸気比重は16/29≒<strong>0.55</strong>となります。1より大幅に小さいため、大気中に放出されてもすぐに上方に拡散し、危険性は低くなります。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>ひっかけ注意：第4類危険物の蒸気比重</h3>
            <p>
              第4類危険物から発生する蒸気の比重は、<strong>すべて1より大きく</strong>、空気より重い性質をもちます。そのため蒸気は低所に滞留したり、地表付近を伝って遠方まで流れやすく、離れた場所の火源による引火にも注意が必要です。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              代表的な第4類危険物の比重・蒸気比重は、次のとおりです。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">物質</th>
                  <th scope="col">比重（液比重）</th>
                  <th scope="col">蒸気比重</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ガソリン</th>
                  <td>0.65〜0.75</td>
                  <td>3〜4</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>灯油</th>
                  <td>0.78〜0.85</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>軽油</th>
                  <td>0.83〜0.88</td>
                  <td>4.5</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>重油</th>
                  <td>0.90〜0.99</td>
                  <td>5以上</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>エタノール</th>
                  <td>約0.8</td>
                  <td>約1.6</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>メタノール</th>
                  <td>約0.8</td>
                  <td>約1.1</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>二硫化炭素</th>
                  <td>約1.3</td>
                  <td>約2.6</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>表から読み取れるポイント</h3>
            <ol className={shared.compact}>
              <li>比重が1を超えるのは、この中では<strong>二硫化炭素のみ</strong>。</li>
              <li>蒸気比重は、この中では<strong>重油が最も大きく</strong>、<strong>メタノールが最も小さい</strong>ものの、いずれも1を超える。</li>
              <li>灯油と軽油は、比重・蒸気比重ともに近い値をとる。</li>
            </ol>
          </div>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <SpecificGravityVaporDensityQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}

