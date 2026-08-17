import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FacilityPermissionsQuiz from './FacilityPermissionsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 6節：製造所等の設置と変更の許可',
  description:
    '危険物乙4 第1章6節。製造所等の設置と変更の許可を整理。市町村長・都道府県知事・総務大臣の申請先の区分、完成検査と完成検査済証、仮使用承認、液体危険物タンクの完成検査前検査、申請から使用開始までの流れを教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/facility_permissions',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 6節：製造所等の設置と変更の許可',
    description:
      '危険物乙4 第1章6節。製造所等の設置と変更の許可を整理。市町村長・都道府県知事・総務大臣の申請先の区分、完成検査と完成検査済証、仮使用承認、液体危険物タンクの完成検査前検査、申請から使用開始までの流れを教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/facility_permissions',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 6節：製造所等の設置と変更の許可',
    description:
      '危険物乙4 第1章6節。製造所等の設置と変更の許可を整理。市町村長・都道府県知事・総務大臣の申請先の区分、完成検査と完成検査済証、仮使用承認、液体危険物タンクの完成検査前検査、申請から使用開始までの流れを確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function FacilityPermissionsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '6節：製造所等の設置と変更の許可' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 設置と変更の許可 */}
        <section className={shared.section}>
          <h2>設置と変更の許可</h2>
          <div className={shared.bandCard}>
            <p>
              製造所・貯蔵所・取扱所を新しく設置するときは、施設の種類（区分）に応じて<strong>市区町村などの行政機関</strong>に申請し、<strong>許可（許可書の交付）</strong>を受けなければならない。また、すでにある製造所等でも<strong>位置・構造・設備</strong>を変えるときは、同じく<strong>変更の許可</strong>が必要である。
            </p>
            <p>
              例えば、危険物の取扱量を増やすことで<strong>保有空地の面積を広げる必要が出る場合</strong>なども、変更許可の対象になる。
            </p>
            <p>
              許可を出す<strong>市区町村等</strong>は、申請された施設の<strong>位置・構造・設備が技術上の基準に適合しているか</strong>、そして<strong>貯蔵・取扱いが公共の安全に支障を及ぼさないか</strong>を確認し、基準を満たしていれば<strong>許可を与えなければならない（義務）</strong>。
            </p>
            <p>
              ここでいう<strong>「市町村長等」</strong>とは、<strong>市町村長・都道府県知事・総務大臣</strong>のいずれかを指し、どの機関が許可権者になるかは製造所等の<strong>設置される場所</strong>によって決まる。
            </p>
          </div>
        </section>

        {/* 2. 製造所等の設置と変更の申請先 */}
        <section className={shared.section}>
          <h2>製造所等の設置と変更の申請先</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">製造所等の設置と変更の申請先</caption>
              <colgroup>
                <col className={styles.colFacility} />
                <col className={styles.colConditions} />
                <col className={styles.colApply} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>施設の区分</th>
                  <th scope="col">施設の設置・変更条件</th>
                  <th scope="col">申請先</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" rowSpan={2} className={shared.stickyCol}>製造所等</th>
                  <td>消防本部及び消防署を設置している市町村の区域（移送取扱所を除く）</td>
                  <td>当該<strong>市町村長</strong></td>
                </tr>
                <tr>
                  <td>消防本部及び消防署を設置していない市町村の区域（移送取扱所を除く）</td>
                  <td>
                    当該区域を管轄する<strong>都道府県知事</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={3} className={shared.stickyCol}>移送取扱所</th>
                  <td>消防本部及び消防署を設置している1つの市町村の区域</td>
                  <td>当該<strong>市町村長</strong></td>
                </tr>
                <tr>
                  <td>消防本部及び消防署を設置していない市町村の区域、または2つ以上の市町村にまたがる区域</td>
                  <td>
                    当該区域を管轄する<strong>都道府県知事</strong>
                  </td>
                </tr>
                <tr>
                  <td>2つ以上の都道府県にまたがる区域</td>
                  <td><strong>総務大臣</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>補足コラム</h3>
            <p>
              変更許可を申請するときは、<strong>変更内容を示す図面</strong>や、<strong>規則で定められた書類</strong>などを添えて提出する必要がある。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>製造所等</strong>：消防本部・消防署あり → <strong>市町村長</strong>、なし → <strong>都道府県知事</strong></li>
              <li><strong>移送取扱所</strong>：1つの市町村の区域 → <strong>市町村長</strong>、2市町村以上 or 消防本部・消防署なし → <strong>都道府県知事</strong></li>
              <li>区域が<strong>2つ以上の都道府県</strong>にまたがる移送取扱所 → <strong>総務大臣</strong></li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「消防本部・消防署がない市町村なのに<strong>市町村長</strong>」と書いてあったら✕。</li>
              <li>「2つ以上の市町村にまたがるのに<strong>市町村長</strong>」も✕。ここは<strong>都道府県知事</strong>。</li>
              <li>「2つ以上の<strong>都道府県</strong>にまたがるのに<strong>都道府県知事</strong>」となっていたら、正しくは<strong>総務大臣</strong>。</li>
            </ul>
          </div>
        </section>

        {/* 3. 完成検査と仮使用の承認 */}
        <section className={shared.section}>
          <h2>完成検査と仮使用の承認</h2>
          <div className={shared.bandCard}>
            <p>
              製造所などの<strong>設置または変更の許可を受けた者</strong>は、工事が完了したときに<strong>市町村長等による完成検査</strong>を受けなければならない。この検査で施設が<strong>技術上の基準に適合している</strong>と認められてからでないと、使用を開始することはできない。
            </p>
            <p>
              ただし、位置・構造・設備の<strong>変更工事の対象となっていない部分</strong>については、<strong>市町村長等の承認（仮使用承認）</strong>を受ければ、<strong>完成検査前でも使用を開始することができる。</strong>
            </p>
            <p>
              ※仮使用承認があれば、施設全体の工事が終わっていなくても、<strong>安全が確保された部分だけ営業を続けられる</strong>ようになる。
            </p>
            <p>
              完成検査の結果、製造所等が定められた<strong>技術上の基準を満たしている</strong>と認められた場合、市町村長等は<strong>完成検査済証</strong>を交付する。
            </p>
            <p>なお、<strong>変更許可申請と仮使用承認の申請は同時に行うことも可能</strong>である。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>工事完了 → <strong>完成検査</strong> → 適合なら<strong>完成検査済証</strong>交付、の流れをセットで押さえる。</li>
              <li><strong>仮使用承認</strong>を受ければ、<strong>工事対象外で安全な部分</strong>だけは完成検査前でも使用開始OK。</li>
              <li><strong>変更許可申請と仮使用承認</strong>は<strong>同時申請もできる</strong>（別々にしか出せない、は誤り）。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「完成検査前でも、判断して営業再開してよい」→ ✕　<strong>仮使用承認を受けた部分だけ</strong>使用できる。</li>
              <li>「技術上の基準を満たしていれば、検査前でも使える」→ ✕　実際に<strong>完成検査で適合と認められてから</strong>使用開始。</li>
              <li>「仮使用承認は、変更許可とは別にあとからしか申請できない」→ ✕　<strong>変更許可申請と同時に出せる</strong>のがポイント。</li>
            </ul>
          </div>
        </section>

        {/* 4. 完成検査前検査 */}
        <section className={shared.section}>
          <h2>完成検査前検査</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>液体の危険物</strong>を貯蔵または取り扱う<strong>タンク（以下「液体危険物タンク」）</strong>を設置または変更する場合には、製造所等の<strong>完成検査を受ける前に</strong>、<strong>市町村長等が実施する「完成検査前検査」</strong>を受ける必要がある。
            </p>
            <p>
              完成検査前検査では、<strong>工事の完了後には確認できなくなるタンク内部の構造</strong>などが対象である。特に、塗装や配管などを取り付けてしまうと内部が見えなくなるため、<strong>その前の段階で検査しておくこと</strong>が求められる。
            </p>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 5. 施設と検査の種類 */}
        <section className={shared.section}>
          <h2>施設と検査の種類</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">施設と検査の種類</caption>
              <colgroup>
                <col className={styles.colClassification} />
                <col className={styles.colContent} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>分類</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" rowSpan={3} className={shared.stickyCol}>
                    対象施設
                    <br />
                    <small>（液体危険物タンク）</small>
                  </th>
                  <td>
                    <ul className={shared.compact}>
                      <li>製造所及び一般取扱所</li>
                    </ul>
                    （いずれも<strong>指定数量未満の液体危険物タンクは対象外</strong>）
                  </td>
                </tr>
                <tr>
                  <td>屋内タンク貯蔵所／屋外タンク貯蔵所／簡易タンク貯蔵所</td>
                </tr>
                <tr>
                  <td>地下タンク貯蔵所／移動タンク貯蔵所／給油取扱所</td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2} className={shared.stickyCol}>検査の種類</th>
                  <td>液体危険物タンク ➡️ 水張検査または水圧検査</td>
                </tr>
                <tr>
                  <td>
                    液体危険物タンクのうち<strong>1000kL以上の屋外タンク貯蔵所</strong>
                    <br />
                    ➡️
                    <ol className={shared.compact}>
                      <li>水張検査または水圧検査</li>
                      <li>基礎・地盤検査</li>
                      <li>タンク本体の溶接部の検査</li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>完成検査前検査の対象は<strong>液体危険物タンク</strong>＋<strong>完成検査の前に市町村長等が実施</strong>。</li>
              <li>検査内容は、<strong>工事完了後には見えなくなるタンク内部構造</strong>など。</li>
              <li>対象施設は「製造所・一般取扱所・各種タンク貯蔵所・移動タンク貯蔵所・給油取扱所」などの<strong>液体危険物タンクを持つ施設</strong>。</li>
              <li>
                検査の種類は
                <ul className={shared.compact}>
                  <li>すべての液体危険物タンク：<strong>水張検査または水圧検査</strong></li>
                  <li><strong>1000kL以上の屋外タンク貯蔵所</strong>：＋基礎・地盤検査＋溶接部検査</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li><strong>指定数量未満の液体危険物タンク</strong>は完成検査前検査の対象外（「すべてのタンクが対象」だと誤り）。</li>
              <li>1000<strong>L</strong>ではなく<strong>1000kL以上の屋外タンク貯蔵所</strong>が追加検査の対象。単位と「屋外」もセットで覚える。</li>
              <li>完成検査前検査は<strong>完成検査の前に行う</strong>。順番をひっくり返した文章に注意。</li>
              <li>検査主体は<strong>市町村長等</strong>。選択肢で「消防署長だけ」「事業者が自主検査すればよい」などと書かれていたら誤り。</li>
            </ul>
          </div>
        </section>

        {/* 6. フローチャート */}
        <section className={shared.section}>
          <h3 id="facility-permissions-title-1">申請から使用開始までのフロー</h3>
          <figure
            className={shared.formulaCard}
            aria-labelledby="facility-permissions-title-1"
            aria-describedby="facility-permissions-cap-1"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/law/facility_permission.svg"
              alt="施設手続きフローチャート"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption id="facility-permissions-cap-1" className={shared.figureCaption}>
              ※完成検査前検査で技術基準に適合していると認められた項目は、<strong>完成検査を省略</strong>できる。
            </figcaption>
          </figure>

          <div className={shared.examNotes}>
            <h4>出る出るポイント</h4>
            <ul className={shared.compact}>
              <li>設置・変更の<strong>許可 → 工事 → 完成検査 → 使用開始</strong>が基本の流れ。許可を受けただけでは、まだ使用できない。</li>
              <li>位置・構造・設備の変更工事でも、<strong>安全が確保された部分</strong>は<strong>仮使用承認</strong>を受ければ完成検査前に使用開始・営業継続が可能。</li>
              <li><strong>液体危険物タンク</strong>は<strong>完成検査前検査が必要</strong>。この検査で技術上の基準に適合と認められた項目は<strong>完成検査を省略できる</strong>。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>「許可を受けたらそのまま使用開始できる」と書いてあれば<strong>誤り</strong>。必ず<strong>完成検査</strong>を受けてから。</li>
              <li><strong>仮使用承認</strong>と<strong>完成検査前検査</strong>は別物。「仮使用承認を受ければ完成検査を省略できる」とあれば<strong>NG</strong>。</li>
              <li>完成検査を省略できるのは、<strong>完成検査前検査で適合とされた"項目部分"だけ</strong>。「施設全体の完成検査が不要になる」と書いてあればひっかけ。</li>
            </ul>
          </div>
        </section>

        {/* 7. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <FacilityPermissionsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}