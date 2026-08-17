import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SimpleTankStorageStandardsQuiz from './SimpleTankStorageStandardsquiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 27節：簡易タンク貯蔵所の基準',
  description:
    '危険物乙4 第1章27節。簡易タンク貯蔵所の基準を整理。600L・3基・同一品質1基の数値セット、板厚3.2mm・70kPa、屋外と専用室内の空地・間隔、通気管の仕様を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/simple_tank_storage_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 27節：簡易タンク貯蔵所の基準',
    description:
      '危険物乙4 第1章27節。簡易タンク貯蔵所の基準を整理。600L・3基・同一品質1基の数値セット、板厚3.2mm・70kPa、屋外と専用室内の空地・間隔、通気管の仕様を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/simple_tank_storage_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 27節：簡易タンク貯蔵所の基準',
    description:
      '危険物乙4 第1章27節。簡易タンク貯蔵所の基準を整理。600L・3基・同一品質1基の数値セット、板厚3.2mm・70kPa、屋外と専用室内の空地・間隔、通気管の仕様を教科書的に確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SimpleTankStorageStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '27節：簡易タンク貯蔵所の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 構造・設備 */}
        <section className={shared.section}>
          <h2>構造・設備</h2>
          <div className={shared.bandCard}>
            <p>
              簡易タンク貯蔵所は、<strong>少量（1基600L以下）</strong>の第4類危険物をタンクで貯蔵するための設備である。
            </p>
            <p>基準は大きく分けると、次の3つの視点で整理できる。</p>
            <ol className={styles.orderedCompact}>
              <li>タンクそのものの仕様（容量・材質・強度など）</li>
              <li>設置基数・配置（空地・間隔など）</li>
              <li>通気管・防錆などの付帯設備</li>
            </ol>
            <p>
              下の表では、試験で頻出の<strong>数値・用語</strong>だけをまとめている。細かい文章を丸暗記するのではなく、まずは<strong>「600L・3基・同一の危険物1基まで」</strong>というセットを軸に押さえる。
            </p>
          </div>
        </section>

        {/* 2. 簡易タンク貯蔵所：構造・設備の要点 */}
        <section className={shared.section}>
          <h2>簡易タンク貯蔵所：構造・設備の要点</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">簡易タンク貯蔵所：構造・設備の要点</caption>
              <colgroup>
                <col className={styles.colItem} />
                <col className={styles.colStandard} />
                <col className={styles.colMemo} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">基準</th>
                  <th scope="col">出題メモ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>タンク容量（1基）</th>
                  <td><strong>600L以下</strong></td>
                  <td>数字要暗記</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>設置基数</th>
                  <td>1つの簡易タンク貯蔵所に<strong>3基まで</strong></td>
                  <td>頻出</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>同一品質の危険物</th>
                  <td><strong>2基以上設置しない</strong></td>
                  <td>「同一品質は1基まで」</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>固定</th>
                  <td>地盤面・架台等に<strong>容易に移動しないよう固定</strong></td>
                  <td>用語</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>材質・板厚</th>
                  <td><strong>厚さ3.2mm以上の鋼板</strong>で気密に造る</td>
                  <td>3.2mm</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>強度試験</th>
                  <td><strong>70kPa・10分（静水圧）</strong>で漏れ・変形なし</td>
                  <td>「70kPa×10分」セット</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>防錆</th>
                  <td>外面に<strong>さび止め塗布</strong></td>
                  <td>語句</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>通気管</th>
                  <td><strong>設けること</strong>（※仕様は下表）</td>
                  <td>後述</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント（数値セット）</h4>
            <ul className={shared.compact}>
              <li>
                <strong>1基600L以下 × 最大3基</strong> … 簡易タンク貯蔵所の<strong>規模（合計最大1,800L）</strong>を決める基本セット。
              </li>
              <li>
                <strong>同一品質は1基まで</strong> … 「同じ品質のタンクは1基だけ」という<strong>安全思想</strong>を押さえる。
              </li>
              <li>
                <strong>板厚3.2mm以上</strong> ＋ <strong>70kPa・10分</strong> … タンクの<strong>強度・圧力試験</strong>に関するコンビ数字。
              </li>
              <li>
                <strong>外面さび止め・確実な固定・通気管設置</strong> … 本体構造だけでなく、<strong>付帯設備もセット</strong>で覚える。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「同一品質」だけ1基まで</strong>であり、別の品質のタンクを含めた<strong>全体のタンク基数は3基まで</strong>という点に注意。
              </li>
              <li>
                <strong>70kPa・10分</strong>は<strong>簡易貯蔵タンクの強度試験</strong>の数字。他のタンクの圧力・時間の組合せと<strong>取り違えない</strong>こと。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 設置場所ごとの空地・間隔 */}
        <section className={shared.section}>
          <h2>設置場所ごとの空地・間隔</h2>
          <div className={shared.bandCard}>
            <p>
              簡易タンク貯蔵所は、<strong>屋外に置く場合</strong>と<strong>専用室内に置く場合</strong>で求められる空地・間隔が変わる。
            </p>
            <p>
              数字そのものはシンプルだが、他の節で出てくる<strong>「0.5m」「1m」</strong>と混同しやすい部分である。ここでは、簡易タンク特有の距離条件を整理して押さえておく。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">設置場所ごとの空地・間隔</caption>
              <colgroup>
                <col className={styles.colInstallationForm} />
                <col className={styles.colRequirements} />
                <col className={styles.colRemember} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>設置形態</th>
                  <th scope="col">要件</th>
                  <th scope="col">覚え方</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外設置</th>
                  <td>タンク周囲に<strong>1m以上の保有空地</strong></td>
                  <td>屋外=1m</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>専用室内</th>
                  <td>タンクと壁の間を<strong>0.5m以上</strong>確保</td>
                  <td>室内=0.5m</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント（距離セット）</h4>
            <ul className={shared.compact}>
              <li><strong>屋外＝1m以上の保有空地</strong> … タンクのまわりをぐるっと空けておく。</li>
              <li><strong>専用室内＝0.5m以上の離隔</strong> … タンクと壁のあいだに空間を確保。</li>
              <li><strong>「屋外1m・室内0.5m」のペア</strong>でワンセット暗記（外が広く、室内は半分）。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意（距離）</h4>
            <ul className={shared.compact}>
              <li><strong>屋外＝1m／室内＝0.5m</strong>の組み合わせで覚える（「外が広く、室内は半分」）。</li>
              <li>地下タンク・屋内タンクなど、他の節の<strong>0.5m・1m</strong>とごちゃ混ぜにしないこと。</li>
            </ul>
          </div>
        </section>

        {/* 4. 通気管の仕様（第4類・簡易貯蔵タンク） */}
        <section className={shared.section}>
          <h2>通気管の仕様（第4類・簡易貯蔵タンク）</h2>
          <div className={shared.bandCard}>
            <p>第4類の簡易貯蔵タンクでは、タンクが<strong>圧力タンクかどうか</strong>で通気管の種類が変わる。</p>
            <p>
              試験で狙われやすいのは、<strong>圧力タンク以外のタンクに無弁通気管を設ける</strong>基本セットである。まずは<strong>「圧力タンク以外 → 無弁通気管」</strong>の組み合わせをしっかり押さえておく。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">通気管の仕様（第4類・簡易貯蔵タンク）</caption>
              <colgroup>
                <col className={styles.colTargetTank} />
                <col className={styles.colVentilationPipe} />
                <col className={styles.colPoint} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象タンク</th>
                  <th scope="col">通気管の種類</th>
                  <th scope="col">要点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>圧力タンク<strong>以外</strong></th>
                  <td><strong>無弁通気管</strong></td>
                  <td>「以外→無弁」で記憶</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>圧力タンク</th>
                  <td>（ここでは規定外／別系統）</td>
                  <td>混同注意</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント（通気管の組み合わせ）</h4>
            <ul className={shared.compact}>
              <li>
                <strong>圧力タンク以外 → 無弁通気管</strong> … 第4類簡易貯蔵タンクの基本セット。ここが本命。
              </li>
              <li>
                <strong>圧力タンク</strong>は本表では<strong>別系統の規定</strong>扱い … 「以外だけが出題の主役」と意識しておく。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意（通気管）</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「以外 → 無弁」</strong>のペアで覚える。他の<strong>有弁通気管</strong>や<strong>安全弁</strong>と入れ替えてくる問題に注意。
              </li>
              <li>
                地下タンク・屋内タンクなど、別の節で出てくる通気管の決まりと<strong>ごちゃ混ぜにしない</strong>こと。問題文にある「第4類・簡易貯蔵タンク」という条件を必ず確認してから解く。
              </li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>見落とし注意！</h3>
            <p>
              ※ 法令の細目は地域運用で運用基準が加わる場合がある。試験対策では本表の<strong>数値・語句</strong>を優先して暗記する。
            </p>
          </div>
        </section>

        {/* 5. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <SimpleTankStorageStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}