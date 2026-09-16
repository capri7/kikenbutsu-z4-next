// src/app/basics/physical_chemistry/classification_of_elements/page.tsx
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import ClassificationOfElementsQuiz from './ClassificationOfElementsQuiz'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章 26節：元素の分類',
  description:
    '危険物乙4 第2章26節。典型元素と遷移元素、金属の特性、金属結合、元素の周期表を整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry/classification_of_elements',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章 26節：元素の分類',
    description:
      '危険物乙4 第2章26節。典型元素と遷移元素、金属の特性、金属結合、元素の周期表を整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry/classification_of_elements',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章 26節：元素の分類',
    description:
      '危険物乙4 第2章26節。典型元素と遷移元素、金属の特性、金属結合、元素の周期表を整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ClassificationOfElementsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学', href: '/basics/physical_chemistry' },
          { label: '26節：元素の分類' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>

        <section className={shared.section}>
          <div className={shared.bandCard}>
            <p className={shared.summaryLabel}>👉このページでわかること</p>
            <p>
              ここでは、典型元素と遷移元素の分類、金属の特性、金属結合の仕組み、元素記号の見方と元素の周期表を解説します。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>典型元素と遷移元素</h2>

          <div className={shared.bandCard}>
            <p>
              周期表の1族・2族と13族から18族までの元素を<strong>典型元素</strong>といいます。典型元素は族ごとに化学的性質が似ているという特徴があり、希ガスを除く典型元素では、同じ族であれば価電子の数も同じになります。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              <strong>ハロゲン</strong>は第17族に属する元素の総称で、フッ素F・塩素Cl・臭素Br・ヨウ素Iなどが該当します。いずれも非金属元素で、1価の陰イオンになりやすく、電子を奪いやすい性質から強い酸化作用を持ちます。また水素や金属と反応しやすく、ハロゲンの単体はいずれも有毒です。ある物質にハロゲンを結合させることを<strong>ハロゲン化</strong>といいます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              <strong>希ガス</strong>は第18族に属する元素の総称で、ヘリウムHe・ネオンNe・アルゴンArなどが該当します。希ガスの原子はいずれも安定な電子配置を持ち、化学的に反応しにくいことから<strong>不活性ガス</strong>とも呼ばれます。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              <strong>アルカリ金属</strong>は、水素を除く第1族の元素の総称です。リチウムLi・ナトリウムNa・カリウムKなどが該当し、1価の陽イオンになりやすく、その水溶液は強い塩基性を示します（例：水酸化ナトリウム）。
            </p>
          </div>

          <div className={shared.bandCard}>
            <p>
              周期表の3族から12族までの元素を<strong>遷移元素</strong>といいます。原子の価電子は1個または2個で、隣り合う族どうしでも性質が緩やかにしか変化しません。遷移元素はすべて金属元素です。
            </p>
            <p>
              ※「遷移」とは、うつりかわることをいいます。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <p>
              12族の元素（亜鉛Zn・カドミウムCd・水銀Hgなど）は、遷移元素に含める場合と含めない場合があります。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>金属の特性</h2>

          <div className={shared.bandCard}>
            <p>
              金属は一般に展性・延性に富み、金属光沢を持ちます。また、熱や電気を通しやすい性質があります。粉末にした金属は空気との接触面積が広くなるため、燃焼しやすくなります。
            </p>
            <p>
              ※展性：圧縮する力を加えた際に、破損することなく板状に薄くなる性質
            </p>
            <p>
              ※延性：引っ張る力を加えた際に、破断することなく糸状に伸びる性質
            </p>
          </div>

          <h3>主な金属の熱伝導率の比較</h3>

          <figure className={shared.formulaCard}>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 700 }}>
              銀Ag ＞ 銅Cu ＞ 金Au ＞ アルミニウムAl ＞ マグネシウムMg ＞ 亜鉛Zn ＞ ニッケルNi ＞ 鉄Fe
            </p>
          </figure>

          <h3>軽金属と重金属</h3>

          <div className={shared.bandCard}>
            <p>
              金属は比重によって軽金属と重金属に区分されます。比重が4以下のものを<strong>軽金属</strong>、4より大きいものを<strong>重金属</strong>といいます。
            </p>
          </div>

          <h3>軽金属の代表例</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <thead>
                <tr>
                  <th scope="col">元素名</th>
                  <th scope="col">元素記号</th>
                  <th scope="col">比重</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>リチウム</th>
                  <td>Li</td>
                  <td>0.53</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>ナトリウム</th>
                  <td>Na</td>
                  <td>0.97</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>カリウム</th>
                  <td>K</td>
                  <td>0.86</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>マグネシウム</th>
                  <td>Mg</td>
                  <td>1.7</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>カルシウム</th>
                  <td>Ca</td>
                  <td>1.6</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>アルミニウム</th>
                  <td>Al</td>
                  <td>2.7</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>金属元素と非金属元素</h3>

          <div className={shared.bandCard}>
            <p>
              金属元素は一般に電子を放出して陽イオンになりやすく、原子どうしが結合するとさらに陽イオンになりやすくなります。また、非金属元素とイオン結合による化合物（塩化ナトリウムなど）をつくる傾向が大きいという性質があります。
            </p>
            <p>
              <strong>非金属</strong>は、金属としての性質を持たない元素です。炭素C・ケイ素Si・リンPなどが該当します。非金属元素はすべて典型元素であり、族ごとに性質が類似しています。また、非金属元素は陰イオンになりやすい性質があります。第17族に属する臭素Brは、20℃で液体の唯一の非金属元素です。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>金属結合</h2>

          <div className={shared.bandCard}>
            <p>
              金属は、多数の原子が規則正しく配列して結晶をつくっています。このとき各原子の価電子は、もとの原子に固定されず金属中を自由に動き回ることができます。このような電子を<strong>自由電子</strong>といいます。
            </p>
            <p>
              金属では、この自由電子が原子どうしを結びつける役割をしています。このような自由電子による金属原子間の結合を<strong>金属結合</strong>といいます。
            </p>
          </div>
        </section>

        <section className={shared.section}>
          <h2>元素の周期表</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>周期表</strong>は、元素を原子番号の順に並べ、性質の似た元素が同じ列（族）に並ぶように配置した表です。
            </p>
          </div>

          <h3>元素記号の見方</h3>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/periodic_sample.svg"
              alt="元素記号の見方を示す図。水素のマスを例に、左上の数字1が原子番号（元素を並べる基準となる番号）、右上の1.008が原子量（炭素12を基準とした相対質量）、中央大きく表示されたHが元素記号（アルファベット1〜2文字で表す）、その下の「水素」が元素名（日本語での呼び名）であることを示す。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1500}
              height={700}
            />
            <figcaption className={shared.figureCaption}>
              <strong>元素記号の見方</strong> — 元素記号のマスには、原子番号・元素記号・元素名・原子量がまとめて表示されます。
            </figcaption>
          </figure>

          <figure className={shared.formulaCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/physical_chemistry/periodic_table_p1to6.svg"
              alt="元素の周期表を示す図。第1周期から第6周期まで、1族から18族までを表示し、原子番号・原子量・元素記号・元素名を各マスに記載する。典型金属（1族・2族、およびアルミニウム・ガリウム・ゲルマニウム・インジウム・スズ・アンチモン・タリウム・鉛・ビスマス・ポロニウム）を緑、遷移金属（3族から12族）を青、非金属（水素・ホウ素・炭素・ケイ素・窒素・リン・酸素・硫黄・ハロゲン・希ガス・テルル・アスタチン）を黄、ランタノイド（57〜71、まとめて1マスで表示）を灰色で色分けする。"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={1704}
              height={878}
            />
            <figcaption className={shared.figureCaption}>
              <strong>元素の周期表（第1〜6周期）</strong> — 典型金属・遷移金属・非金属・ランタノイドを色分けして示します。
            </figcaption>
          </figure>
        </section>

        {/* クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <ClassificationOfElementsQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

      </div>
    </>
  )
}