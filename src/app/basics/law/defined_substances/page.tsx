import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import DefinedSubstancesQuiz from './DefinedSubstancesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 2節：消防法で規定する危険物',
  description:
    '危険物乙4 第1章2節。消防法で規定する危険物を整理。法別表第1に基づく第1類〜第6類の分類と性質、固体・液体・気体の定義、指定可燃物との違い、複数性状物品の分類ルールを確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/defined_substances',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 2節：消防法で規定する危険物',
    description:
      '危険物乙4 第1章2節。消防法で規定する危険物を整理。法別表第1に基づく第1類〜第6類の分類と性質、固体・液体・気体の定義、指定可燃物との違い、複数性状物品の分類ルールを確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/defined_substances',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 2節：消防法で規定する危険物',
    description:
      '危険物乙4 第1章2節。消防法で規定する危険物を整理。法別表第1に基づく第1類〜第6類の分類と性質、固体・液体・気体の定義、指定可燃物との違い、複数性状物品の分類ルールを確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function DefinedSubstancesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '2節：消防法で規定する危険物' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 消防法で規定する危険物 */}
        <section className={shared.section}>
          <h2>消防法で規定する危険物</h2>
          <div className={shared.bandCard}>
            <p>
              消防法で規定する「危険物」とは火災や爆発の危険性がある物質のうち、法別表第1の品名欄に掲げる物質で同表に定める区分に応じその性質欄に掲げる性状を有するものを指す。また、法別表第1では、危険物を第1類から第6類に分類している。
            </p>
            <p>危険物はすべて固体もしくは液体である。気体は含まない。</p>
            <p>
              メタンガス、アセチレン、プロパンガス、液化石油ガス、液体酸素ガス、液体水素ガスなどは常温常圧（20°C、1気圧）では気体であるため、消防法で定める危険物に該当しない。
            </p>
          </div>
        </section>

        {/* 2. 法別表第1：危険物の分類 */}
        <section className={shared.section}>
          <h2>法別表第1：危険物の分類</h2>

          <div className={shared.bandCard}>
            <p>ここで取り上げている品名は、試験でよく問われる代表例である。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">法別表第1：危険物の分類</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colNature} />
                <col className={styles.colName} />
                <col className={styles.colFeature} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>類別</th>
                  <th scope="col">性質</th>
                  <th scope="col">品名</th>
                  <th scope="col">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第1類</th>
                  <td>酸化性固体</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>塩素酸塩類</li>
                      <li>過塩素酸塩類</li>
                      <li>過マンガン酸塩類</li>
                      <li>硝酸塩類</li>
                    </ul>
                  </td>
                  <td>
                    物質そのものは不燃性だが、他の物質を強く酸化させる性質をもつ。可燃物と混合し、衝撃・加熱・摩擦を受けると激しい燃焼を起こすもの。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第2類</th>
                  <td>可燃性固体</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>硫化りん</li>
                      <li>赤りん</li>
                      <li>硫黄</li>
                      <li>金属粉</li>
                      <li>マグネシウム</li>
                      <li>鉄粉</li>
                      <li>引火性固体</li>
                    </ul>
                  </td>
                  <td>火炎で着火しやすいもの、または比較的低温（40°C未満）で引火しやすいもの。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第3類</th>
                  <td>自然発火性物質及び禁水性物質（固体・液体）</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>カリウム</li>
                      <li>ナトリウム</li>
                      <li>アルキルリチウム</li>
                      <li>黄りん</li>
                    </ul>
                  </td>
                  <td>
                    空気にさらされると自然発火するおそれのあるもの、または水と接触すると発火または可燃性ガスを発生するもの。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第4類</th>
                  <td>引火性液体</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>特殊引火物</li>
                      <li>第1〜第4石油類</li>
                      <li>アルコール類</li>
                      <li>動植物油類</li>
                    </ul>
                  </td>
                  <td>引火性があり、蒸気を発生して引火や爆発のおそれのあるもの。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第5類</th>
                  <td>自己反応性物質（固体・液体）</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>有機過酸化物</li>
                      <li>ニトロ化合物</li>
                      <li>硝酸エステル類</li>
                    </ul>
                  </td>
                  <td>
                    比較的低温で加熱分解などの自己反応を起こし、爆発や多量の熱を発生させるもの。または爆発的に反応が進行するもの。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第6類</th>
                  <td>酸化性液体</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>過塩素酸</li>
                      <li>過酸化水素</li>
                      <li>硝酸</li>
                    </ul>
                  </td>
                  <td>
                    物質そのものは不燃性だが、他の物質を強く酸化させる性質を持つ。可燃物と混合すると燃焼を促進させるもの。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>この表で、試験で特に問われやすいポイントを整理する。</p>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう!</h3>
            <p>
              第2類の鉄粉や金属粉などは、規定の目開きの網ふるいを通過しないものの割合や形状（棒状・塊状）、サイズによって、危険物に該当しないものがある。
            </p>
            <p>
              第2類の引火性固体とは、固形アルコールその他1気圧において引火点が40°C未満のものをいう。
            </p>
            <p>法別表第1の性質欄に掲げる性状の2以上を有する物品の品名は、総務省令で定める。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>酸化性の物質は、相手物質に酸素を提供して酸化させる働きがある。</li>
              <li>禁水性物質とは、水と接触して発火し、あるいは可燃性ガスを発生するもの。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「禁水性物質」＝<strong>水で消せない</strong>ではなく、<strong>水と接触して発火／可燃性ガス発生</strong>がキモ。</li>
              <li>第2類の「引火性固体」は<strong>固形アルコール等</strong>。液体（第4類）と混同しやすい。</li>
              <li>鉄粉・金属粉は<strong>条件（目開き・形状・サイズ等）</strong>で"危険物に該当しない"例外が出る。</li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 4. 消防法での固体・気体・液体の定義 */}
        <section className={shared.section}>
          <h2>消防法での固体・気体・液体の定義</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">消防法での固体・気体・液体の定義</caption>
              <colgroup>
                <col className={styles.colState} />
                <col className={styles.colDefinition} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>状態</th>
                  <th scope="col">定義</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>固体</th>
                  <td>液体・気体以外のもの</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>液体</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>20°C・1気圧で液状のもの</li>
                      <li>20°Cを超え40°C以下の間で液状となるもの</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>気体</th>
                  <td>20°C・1気圧で気体状のもの</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. 政令で定める類ごとの試験 */}
        <section className={shared.section}>
          <h2>
            政令で定める類ごとの試験 <span className={shared.muted}>（法別表第1 備考、政令第1条の3〜第1条の8）</span>
          </h2>

          <div className={shared.bandCard}>
            <p>危険物に該当するかどうかは、類ごとに定められた試験で危険性の有無を確認し、その結果で判定する。</p>
            <p><strong>代表例：</strong></p>
            <ul className={shared.compact}>
              <li>第2類 ➡︎ 火災や引火のおそれを確認するための試験</li>
              <li>第4類 ➡︎ 引火の可能性を確認するための試験</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li><strong>「液体＝20°Cで液状」だけで決めない。</strong>「20°Cを超え40°C以下の間で液状となるもの」も液体に入る。</li>
              <li><strong>「固体」は"固体っぽいもの"ではない。</strong>消防法では「液体・気体以外」の総称（粉体などもここに入る）として押さえる。</li>
              <li><strong>「気体」は温度と圧力セット。</strong>「20°C・1気圧で気体状」の条件を外して判断しない。</li>
              <li><strong>類ごとの試験の箇条書きは"代表例"。</strong>「第2類・第4類だけが試験対象」と誤解しない（政令で類ごとに規定がある）。</li>
            </ul>
          </div>
        </section>

        {/* 6. 指定可燃物 */}
        <section className={shared.section}>
          <h2>
            指定可燃物 <span className={shared.muted}>（政令第1条の12、別表第4）</span>
          </h2>

          <div className={shared.bandCard}>
            <p>
              指定可燃物とは、火災時に炎が急速に燃え広がり、消火が非常に難しくなるおそれがある物品のうち、政令（危険物の規制に関する政令）別表第4で「品名」と「数量」が定められているものをいう。ただし、燃えにくいもの・燃えないものは、品名が該当していても指定可燃物にならない。
            </p>
            <p>ここでいう「数量」は、危険物の指定数量とは別物である（混同注意）。</p>
          </div>
        </section>

        {/* 7. 代表的な指定可燃物 */}
        <section className={shared.section}>
          <div className={`${shared.callout} ${shared.calloutList}`}>
            <h3>指定可燃物の例</h3>
            <ul className={shared.compact}>
              <li>綿花類 ➡︎ 200kg</li>
              <li>わら類、ぼろ、紙くず ➡︎ 1,000kg</li>
              <li>合成樹脂類の天然ゴム・合成ゴム類 ➡︎ 3,000kg</li>
              <li>合成樹脂類の発泡スチロール・断熱材等 ➡︎ 20m³</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「指定可燃物」は危険物（第1類〜第6類）とは<strong>別枠</strong>。</li>
              <li>別表第4は「<strong>品名＋数量</strong>」のセットで覚える。</li>
              <li>単位が混在（kgとm³）。単位まで込みで暗記。</li>
            </ul>
          </div>
        </section>

        {/* 8. 複数性状物品の属する品名 */}
        <section className={shared.section}>
          <h2>複数の性状をもつ物品の分類</h2>
          <div className={shared.bandCard}>
            <p>
              法別表第1では、2つ以上の性質（性状）をもつ物品（複数性状物品）について、どの品名（項・号）に分類するかが定められている。
            </p>
            <p>下の表は、性状の組合せごとに適用される品名（項・号）をまとめたものである。</p>
          </div>

          <h3>分類に適用される品名（項・号）</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">複数性状物品の分類（性状の組合せと適用される品名）</caption>
              <colgroup>
                <col className={styles.colCombo} />
                <col className={styles.colApplied} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>性状の組合せ</th>
                  <th scope="col">適用される品名（項・号）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第1類（酸化性固体）／第2類（可燃性固体）</th>
                  <td>第2類 項第8号</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第1類（酸化性固体）／第5類（自己反応性物質）</th>
                  <td>第5類 項第11号</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第2類（可燃性固体）／第3類（自然発火性・禁水性）</th>
                  <td>第3類 項第12号</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第3類（自然発火性・禁水性）／第4類（引火性液体）</th>
                  <td>第3類 項第12号</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第4類（引火性液体）／第5類（自己反応性物質）</th>
                  <td>第5類 項第11号</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={shared.section}>
          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>複数性状物品は「どれに分類するか（品名）」が決まっている。</strong>両方の類で別々に扱う話ではない。</li>
              <li>表の読み方は<strong>「組合せ→適用される品名（項・号）」</strong>の一本。</li>
              <li>このページの頻出は<strong>第3類 項第12号</strong>と<strong>第5類 項第11号</strong>（同じ結論が複数パターンで出る）。</li>
            </ul>
          </div>
        </section>

        <section className={shared.section}>
          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「性状が2つある＝2つの類に同時に属する」は×。<strong>適用される品名（項・号）に"整理"される</strong>。</li>
              <li><strong>第3類（自然発火性・禁水性）＋第4類（引火性液体）→第3類 項第12号</strong>が引っかけ。第4類に行くと誤認しやすい。</li>
              <li>表は「代表例」。<strong>他の組合せも政令・省令側で規定</strong>されるため、ここだけで全てと誤解しない。</li>
            </ul>
          </div>
        </section>

        {/* 9. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <DefinedSubstancesQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}