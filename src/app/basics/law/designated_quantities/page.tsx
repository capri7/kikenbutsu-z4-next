import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import DesignatedQuantitiesQuiz from './DesignatedQuantitiesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 4節：危険物の指定数量',
  description:
    '危険物乙4 第1章4節。危険物の指定数量を整理。第4類の指定数量一覧、品名ごとの数量差、規制のかかる基準量、試験で狙われやすい比較ポイントを教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/designated_quantities',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 4節：危険物の指定数量',
    description:
      '危険物乙4 第1章4節。危険物の指定数量を整理。第4類の指定数量一覧、品名ごとの数量差、規制のかかる基準量、試験で狙われやすい比較ポイントを教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/designated_quantities',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 4節：危険物の指定数量',
    description:
      '危険物乙4 第1章4節。危険物の指定数量を整理。第4類の指定数量一覧、品名ごとの数量差、規制のかかる基準量、試験で狙われやすい比較ポイントを教科書的に確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function DesignatedQuantitiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '4節：危険物の指定数量' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 指定数量とは */}
        <section className={shared.section}>
          <h2>指定数量とは</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>指定数量</strong>とは、それぞれの危険物の危険性を踏まえて政令で定められた「基準となる量」のことで、法令上の各種規制を適用するときの算定根拠になる。指定数量は全国共通である。
            </p>
            <p>
              一般に、危険性が高い物質ほど指定数量は少なく、危険性が低い物質ほど多く定められている。例えば、特殊引火物に分類されるジエチルエーテルは50L、一方で危険性の低い動植物油類は10,000Lに設定されている。
            </p>
            <p>
              指定数量を超える量の危険物を貯蔵・取扱いする場合は、<strong>消防法</strong>が規定する危険物施設（製造所・貯蔵所・取扱所）としての許可や設備基準が必要であり、これら以外の場所での貯蔵・取扱いは認められない。
            </p>
            <p>
              指定数量未満の危険物であっても、各市町村の<strong>火災予防条例</strong>において、「位置・構造及び設備の技術基準」や「貯蔵・取扱いの基準」が定められており、これらに従って管理する必要がある。
            </p>
          </div>
        </section>

        {/* 2. 補足 */}
        <section className={shared.section}>
          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>補足コラム</h3>
            <p>
              ざっくり言うと、<strong>「その危険物をどれくらい持ったら消防法の世界に入ってくるかを決めるライン」</strong>が指定数量である。このイメージを持っておくと、条文の内容が整理しやすくなる。
            </p>
          </div>
        </section>

        {/* 3. 政令別表第3：第4類 危険物の指定数量 */}
        <section className={shared.section}>
          <h2>政令別表第3：第4類　危険物の指定数量</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">政令別表第3：第4類　危険物の指定数量</caption>
              <colgroup>
                <col className={styles.colKind} />
                <col className={styles.colClassification} />
                <col className={styles.colSpecifiedQuantity} />
                <col className={styles.colProductName} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>品名</th>
                  <th scope="col">区分</th>
                  <th scope="col">指定数量</th>
                  <th scope="col">代表的な危険物の物品名</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagSpecial}`}>特殊引火物</span>
                  </th>
                  <td></td>
                  <td>50L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>ジエチルエーテル</li>
                      <li>二硫化炭素</li>
                      <li>アセトアルデヒド</li>
                      <li>酸化プロピレン</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagPetroleum}`}>第1石油類</span>
                  </th>
                  <td>非水溶性</td>
                  <td>200L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>ガソリン</li>
                      <li>ベンゼン</li>
                      <li>トルエン</li>
                      <li>酢酸エチル</li>
                      <li>メチルエチルケトン</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>水溶性</td>
                  <td>400L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>アセトン</li>
                      <li>ピリジン</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagAlcohol}`}>アルコール類</span>
                  </th>
                  <td></td>
                  <td>400L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>メチルアルコール（メタノール）</li>
                      <li>エチルアルコール（エタノール）</li>
                      <li>プロピルアルコール</li>
                      <li>イソプロピルアルコール</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagPetroleum}`}>第2石油類</span>
                  </th>
                  <td>非水溶性</td>
                  <td>1000L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li><strong>灯油</strong></li>
                      <li><strong>軽油</strong></li>
                      <li>キシレン</li>
                      <li>スチレン</li>
                      <li>クロロベンゼン</li>
                      <li>1-ブタノール</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>水溶性</td>
                  <td>2000L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>酢酸</li>
                      <li>プロピオン酸</li>
                      <li>アクリル酸</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagPetroleum}`}>第3石油類</span>
                  </th>
                  <td>非水溶性</td>
                  <td>2000L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li><strong>重油</strong></li>
                      <li><strong>クレオソート油</strong></li>
                      <li><strong>アニリン</strong></li>
                      <li>ニトロベンゼン</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>水溶性</td>
                  <td>4000L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>グリセリン</li>
                      <li>エチレングリコール</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagPetroleum}`}>第4石油類</span>
                  </th>
                  <td></td>
                  <td>6000L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li><strong>ギヤー油</strong></li>
                      <li>シリンダー油</li>
                      <li>タービン油</li>
                      <li>モーター油</li>
                      <li>マシン油</li>
                      <li>フタル酸ジオクチル</li>
                      <li>リン酸トリクレジル</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagAnimalVegOil}`}>動植物油類</span>
                  </th>
                  <td></td>
                  <td>10000L</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>ナタネ油</li>
                      <li>ヤシ油</li>
                      <li>オリーブ油</li>
                      <li>ニシン油</li>
                      <li>アマニ油</li>
                      <li>イワシ油</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. 補足＋出る出るポイント＋ひっかけ注意 */}
        <section className={shared.section}>
          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>補足コラム</h3>
            <p>
              ※一般的なドラム缶の容量は<strong>200L</strong>である。これを基準にして、指定数量が<strong>1倍・2倍・5倍・10倍・20倍・30倍・50倍</strong>になる量をイメージしておくと整理しやすくなる。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>第4類の指定数量は、すべて<strong>L（リットル）</strong>で示される。</li>
              <li>
                ドラム缶1本＝200Lを基準にすると、<strong>200L・400L・1000L・2000L・4000L・6000L・10000L</strong>といった代表的な指定数量を一気に覚えやすくなる。
              </li>
              <li>
                「第1石油類」「第2石油類」「アルコール類」「動植物油類」などの品名と、代表例の組み合わせは、そのまま選択肢に出やすい頻出パターンである。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「指定数量未満＝どこでも自由に置いてよい」ではない。</strong>各市町村の火災予防条例や「少量危険物」の基準で規制される点に注意する。
              </li>
              <li>
                同じ場所で複数の危険物を貯蔵・取扱う場合は、後の項目で出てくる<strong>「指定数量の倍数」</strong>を合計して判定する問題が頻出である。
              </li>
              <li>
                容器の<strong>容量</strong>と、実際に入っている<strong>危険物の量</strong>が違うケース（半分だけ入っているドラム缶など）の計算ミスがよく狙われる。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 5. 指定数量の倍数 */}
        <section className={shared.section}>
          <h2>指定数量の倍数</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>指定数量の倍数</strong>とは、貯蔵または取扱う危険物の実際の数量を、その物質の指定数量で割った値をいう。
            </p>
          </div>

          <h3 id="designated-quantities-title-1">パターン① 1種類の場合</h3>
          <figure
            className={shared.formulaCard}
            aria-labelledby="designated-quantities-title-1"
            aria-describedby="designated-quantities-cap-1"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/law/designated_quantities_1.svg"
              alt="同一の場所で1種類の危険物を貯蔵し、または取り扱う場合の式"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption id="designated-quantities-cap-1" className={shared.figureCaption}>
              同じ場所で危険物を1種類だけ扱うときの指定数量の倍数（貯蔵量 ÷ 指定数量）
            </figcaption>
          </figure>

          <h3 id="designated-quantities-title-2">パターン② 2種類の場合</h3>
          <figure
            className={shared.formulaCard}
            aria-labelledby="designated-quantities-title-2"
            aria-describedby="designated-quantities-cap-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/law/designated_quantities_2.svg"
              alt="同一の場所で2種類の危険物を貯蔵し、または取り扱う場合の式"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption id="designated-quantities-cap-2" className={shared.figureCaption}>
              同じ場所で危険物A・Bの2種類を扱うときの指定数量の倍数（A貯蔵量 ÷ A指定数量 ＋ B貯蔵量 ÷ B指定数量）
            </figcaption>
          </figure>
        </section>

        {/* 6. 補足 */}
        <section className={shared.section}>
          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>補足コラム</h3>
            <p>
              複数の危険物を同一場所で貯蔵または取扱う際、それぞれが指定数量未満でも、合計量が指定数量の1倍以上に達すると「指定数量以上の危険物を貯蔵または取扱っている」と見なされ、法令の規制対象となる。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>指定数量の<strong>倍数</strong>は「実際の数量 ÷ 指定数量」で求める。</li>
              <li>倍数が<strong>1以上</strong>になると、その危険物は消防法の規制対象である。</li>
              <li>複数の危険物がある場合は、<strong>それぞれの倍数を合計して1以上かどうか</strong>確認する。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「指定数量未満なら、いくつあっても規制対象外」とは限らない。</li>
              <li>問題文に「同じ場所で貯蔵・取扱い」とあれば、<strong>種類が違っても倍数を合算</strong>する。</li>
              <li>ドラム缶などの容器容量（200Lなど）を使った計算問題では、<strong>単位（L）と個数</strong>の見落としに注意する。</li>
            </ul>
          </div>
        </section>

        {/* 7. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <DesignatedQuantitiesQuiz />

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>ちょっとだけ、メモ！</h3>
            <p>
              ※第4類の中でも、指定数量が特に小さい<strong>50L（特殊引火物）</strong>と、第1石油類の<strong>200L／400L</strong>は頻出なので、グループでまとめて覚えておく。
            </p>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}