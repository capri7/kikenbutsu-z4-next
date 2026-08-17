import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import GeneralStandardsPart1Quiz from './GeneralStandardsPart1Quiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 34節：共通の基準【1】',
  description:
    '危険物乙4 第1章34節。製造所等に共通する技術上の基準を整理。火気・立入制限・整理清掃・計器監視・着火源対策など15項目を3グループで解説。第1〜6類ごとの禁水・接触回避・空気遮断などの貯蔵・取扱基準を一覧表で収録。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/general_standards_part1',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 34節：共通の基準【1】',
    description:
      '危険物乙4 第1章34節。製造所等に共通する技術上の基準を整理。火気・立入制限・整理清掃・計器監視・着火源対策など15項目を3グループで解説。第1〜6類ごとの禁水・接触回避・空気遮断などの貯蔵・取扱基準を一覧表で収録。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/general_standards_part1',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 34節：共通の基準【1】',
    description:
      '危険物乙4 第1章34節。製造所等に共通する技術上の基準を整理。火気・立入制限・整理清掃・計器監視・着火源対策など15項目を3グループで解説。第1〜6類ごとの禁水・接触回避・空気遮断などの貯蔵・取扱基準を一覧表で収録。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function GeneralStandardsPart1Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '34節：共通の基準【1】' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 共通の基準【1】 */}
        <section className={shared.section}>
          <h2>共通の基準【1】</h2>
          <div className={shared.bandCard}>
            <h3>概要</h3>
            <p>
              危険物の数量の多少にかかわらず、消防法や危険物の規制に関する政令（危政令）で定める技術上の基準に従わなければならない。
            </p>
            <p>
              技術上の基準は次の2つに区分される。<strong>共通の基準【1】</strong>は位置・構造等に関する基準、<strong>共通の基準【2】</strong>は貯蔵・取扱い方法に関する基準である。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>危険物の量が少なくても、多くても、<strong>技術上の基準は必ず守る</strong>。</li>
              <li>
                技術上の基準は「<strong>位置・構造などの基準（共通の基準【1】）</strong>」と「<strong>貯蔵・取扱い方法の基準（共通の基準【2】）</strong>」のセット。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. すべてに共通する基準 */}
        <section className={shared.section}>
          <h2>すべてに共通する基準</h2>
          <div className={shared.bandCard}>
            <p>
              次の<strong>15項目</strong>は、製造所等に共通して求められる「<strong>どこでも必ず守る約束ごと</strong>」である。覚えやすいように、ここでは<strong>3つのグループ</strong>に分けて整理する。
            </p>

            <h3>① どんな危険物を・誰が扱うか</h3>
            <ol className={styles.orderedCompact}>
              <li>
                <strong>許可・届出の品名以外を扱わない。</strong>
                製造所等で、許可または届出に係る<strong>品名以外</strong>の危険物を貯蔵・取扱いしないこと。
              </li>
              <li>
                <strong>指定数量超過をしない。</strong>
                許可または届出に係る<strong>数量（指定数量）を超える</strong>危険物を貯蔵・取扱いしないこと。
              </li>
              <li>
                <strong>みだりに火気を使用しない。</strong>
                <br />
                <small>※「みだりに」＝正当な理由なく、の意。</small>
              </li>
              <li>
                <strong>係員以外の立入を制限する。</strong>
                製造所等には<strong>係員以外をみだりに出入りさせない</strong>こと。
              </li>
            </ol>

            <h3>② 現場の整理と日常管理</h3>
            <ol className={styles.orderedCompact} start={5}>
              <li>
                <strong>常時の整理・清掃。</strong>
                常に<strong>整理および清掃</strong>を行い、空箱など<strong>不必要物を置かない</strong>こと。
              </li>
              <li>
                <strong>貯留設備・油分離装置の危険物を随時くみ上げる。</strong>
                たまった危険物は<strong>あふれないよう随時くみ上げる</strong>こと。
              </li>
              <li>
                <strong>くず・かす等の処理。</strong>
                危険物の<strong>くず・かす等は1日1回以上</strong>、性状に応じて安全な場所で<strong>廃棄</strong>等の適切処理を行うこと。
              </li>
              <li>
                <strong>遮光・換気の確保。</strong>
                建築物・設備は危険物の性状に応じて<strong>遮光または換気</strong>を行うこと。
              </li>
              <li>
                <strong>計器監視と条件維持。</strong>
                温度計・湿度計・圧力計等を<strong>監視</strong>し、性状に応じた<strong>適正な温度・湿度・圧力</strong>を保つこと。
              </li>
            </ol>

            <h3>③ 危険を増やさない（修理・容器・着火源）</h3>
            <ol className={styles.orderedCompact} start={10}>
              <li>
                <strong>変質・異物混入の防止。</strong>
                貯蔵・取扱いに際し、<strong>変質又は異物混入</strong>で危険性が増大しないよう必要措置を講ずること。
              </li>
              <li>
                <strong>残存危険物の除去後に修理。</strong>
                危険物が<strong>残存</strong>し又は<strong>残存のおそれ</strong>がある設備等を修理する場合は、安全な場所で<strong>完全に除去</strong>してから行うこと。
              </li>
              <li>
                <strong>適合容器の使用。</strong>
                容器は当該危険物の<strong>性質に適合</strong>し、かつ<strong>破損・腐食・裂け目</strong>のないものを用いること。
              </li>
              <li>
                <strong>粗暴な取扱いの禁止。</strong>
                収納容器は、みだりに<strong>転倒・落下・衝撃・引きずり</strong>等の粗暴な取扱いをしないこと。
              </li>
              <li>
                <strong>着火源対策（漏えい・滞留おそれ箇所）。</strong>
                可燃性液体・蒸気・ガスの<strong>漏えい又は滞留のおそれ</strong>がある場所では、電線と電気器具を<strong>確実に接続</strong>し、<strong>火花を発する機械器具・工具・履物</strong>等を<strong>使用しない</strong>こと。
              </li>
              <li>
                <strong>保護液中での保存。</strong>
                危険物を<strong>保護液中</strong>に保存する場合は、危険物が<strong>保護液から露出しない</strong>ようにすること。
              </li>
            </ol>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「みだりに」</strong>＝正当な理由なし、の意。単なる「原則禁止」ではない点に注意。
              </li>
              <li>
                <strong>修理前の除去</strong>は<strong>完全除去</strong>＋<strong>安全な場所</strong>が必須。どちらか欠けると×。
              </li>
              <li>15項目は「①扱う危険物・人」「②整理と日常管理」「③危険を増やさない」の3グループで覚えると楽。</li>
            </ul>
          </div>
        </section>

        {/* 3. 類ごとの共通基準 */}
        <section className={shared.section}>
          <h2>類ごとの共通基準</h2>
          <div className={shared.bandCard}>
            <p>
              各類ごとに、危険物が<strong>「何と混ざると危ないか」「何を避けるべきか」</strong>をまとめた表である。まずは<strong>キーワードだけ</strong>押さえて、細かい条文はあとから確認する。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">類ごとの共通基準</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colBoard} />
                <col className={styles.colStandard} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>類</th>
                  <th scope="col">物質区分</th>
                  <th scope="col">技術上の基準（要点）</th>
                </tr>
              </thead>
              <tbody>
                {/* 第1類 */}
                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory1}`}>第1類</span>
                  </th>
                  <td>共通</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>可燃物との<strong>接触・混合を回避</strong></li>
                      <li>分解を促進する物質との<strong>接触回避</strong></li>
                      <li>
                        <strong>過熱・衝撃・摩擦</strong>を避ける
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>アルカリ金属の過酸化物</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        <strong>水との接触を避ける</strong>（禁水）
                      </li>
                    </ul>
                  </td>
                </tr>

                {/* 第2類 */}
                <tr>
                  <th scope="rowgroup" rowSpan={3} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory2}`}>第2類</span>
                  </th>
                  <td>共通</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>酸化剤との<strong>接触・混合を回避</strong></li>
                      <li>
                        <strong>炎・火花・高温体</strong>との接近回避
                      </li>
                      <li>
                        <strong>過熱</strong>を避ける
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>鉄粉・金属粉・マグネシウム</strong></td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        <strong>水</strong>または<strong>酸との接触を回避</strong>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>引火性固体</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        <strong>みだりに蒸気を発生させない</strong>
                      </li>
                      <li>着火源の管理・換気</li>
                    </ul>
                  </td>
                </tr>

                {/* 第3類 */}
                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory3}`}>第3類</span>
                  </th>
                  <td><strong>自然発火性物質</strong></td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        <strong>炎・火花・高温体</strong>との接近回避
                      </li>
                      <li>
                        <strong>過熱</strong>を避ける
                      </li>
                      <li>
                        <strong>空気との接触を極力回避</strong>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>禁水性物質</strong></td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        <strong>水との接触</strong>を避ける（禁水）
                      </li>
                    </ul>
                  </td>
                </tr>

                {/* 第4類 */}
                <tr>
                  <th scope="rowgroup" rowSpan={1} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory4}`}>第4類</span>
                  </th>
                  <td>共通</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        <strong>炎・火花・高温体</strong>との接近回避
                      </li>
                      <li>
                        <strong>過熱</strong>を避ける／温度管理
                      </li>
                      <li>
                        <strong>蒸気の不必要な発生を抑制</strong>（換気・密閉）
                      </li>
                    </ul>
                  </td>
                </tr>

                {/* 第5類 */}
                <tr>
                  <th scope="rowgroup" rowSpan={1} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory5}`}>第5類</span>
                  </th>
                  <td>共通</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        <strong>過熱・衝撃・摩擦</strong>を避ける
                      </li>
                      <li>汚染（前処理薬品・金属粉等）を避ける</li>
                    </ul>
                  </td>
                </tr>

                {/* 第6類 */}
                <tr>
                  <th scope="rowgroup" rowSpan={1} className={shared.stickyCol}>
                    <span className={`${styles.tag} ${styles.tagCategory6}`}>第6類</span>
                  </th>
                  <td>共通</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        <strong>可燃物・還元性物質</strong>との接触・混合を回避
                      </li>
                      <li>
                        分解を促す触媒物質との<strong>接触回避</strong>
                      </li>
                      <li>
                        <strong>過熱</strong>を避ける
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>禁水の混同</strong>：第1類の「アルカリ金属の過酸化物」も禁水。第3類＜禁水性物質＞と分類が違う点に注意。
              </li>
              <li>
                <strong>第2類の例外群</strong>：「鉄粉・金属粉・Mg」は<strong>水／酸と接触回避</strong>。一方「引火性固体」は蒸気の<strong>みだりな発生を抑える</strong>が本筋。
              </li>
              <li>
                <strong>第3類の対象</strong>：自然発火性＝<strong>空気との接触回避</strong>／禁水性＝<strong>水との接触回避</strong>。空気と水を取り違えない。
              </li>
              <li>
                <strong>第4類のキモ</strong>：温度管理＋<strong>蒸気管理（換気・密閉）</strong>。遮光は一般論で出るが、第4類の専用対策と混同しやすい。
              </li>
              <li>
                <strong>第5類の三点セット</strong>：<strong>過熱・衝撃・摩擦</strong>を避ける＋汚染（触媒・金属粉等）回避。酸化剤回避は第2類／第6類側。
              </li>
              <li>
                <strong>第6類の誤解</strong>：酸化性液体＝禁水ではない。落とし穴は<strong>可燃物・還元剤との混合禁止</strong>の方。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <GeneralStandardsPart1Quiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}