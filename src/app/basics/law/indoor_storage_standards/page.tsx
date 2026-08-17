import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import IndoorStorageStandardsQuiz from './IndoorStorageStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 23節：屋内貯蔵所の基準',
  description:
    '危険物乙4 第1章23節。屋内貯蔵所の構造・設備の基準を解説。独立専用（平家建・平家建以外）と他用途建築物内の貯蔵倉庫の形態ごとに、位置・構造・取扱範囲の違いを表で整理。試験に出るポイントもまとめている。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/indoor_storage_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 23節：屋内貯蔵所の基準',
    description:
      '危険物乙4 第1章23節。屋内貯蔵所の構造・設備の基準を解説。独立専用（平家建・平家建以外）と他用途建築物内の貯蔵倉庫の形態ごとに、位置・構造・取扱範囲の違いを表で整理。試験に出るポイントもまとめている。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/indoor_storage_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 23節：屋内貯蔵所の基準',
    description:
      '危険物乙4 第1章23節。屋内貯蔵所の構造・設備の基準を解説。独立専用（平家建・平家建以外）と他用途建築物内の貯蔵倉庫の形態ごとに、位置・構造・取扱範囲の違いを表で整理。試験に出るポイントもまとめている。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function IndoorStorageStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '23節：屋内貯蔵所の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 構造・設備 */}
        <section className={shared.section}>
          <h2>構造・設備</h2>
          <div className={shared.bandCard}>
            <p>
              屋内貯蔵所は、使い方や建物の造りによっていくつかのタイプに分かれる。タイプごとに、「どこに設けるか（位置）」「どんな造りにするか（構造）」「どの危険物をどれだけ置けるか（設備・取扱範囲）」がセットで決められている。
            </p>
            <p>
              下の表では、代表的な屋内貯蔵所ごとに、建物側の条件と、取り扱える危険物の種類・量の上限をまとめている。現場の屋内貯蔵所がどのタイプに当てはまるかをイメージしながら確認していく。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>屋内貯蔵所は「建物の中」に危険物をまとめて置く専用スペース。</li>
              <li>ポイントはいつも<strong>「位置・構造・設備（取扱範囲）」の3点セット</strong>で見る。</li>
              <li>
                屋外貯蔵所が「建物との距離・空地の幅」がメインなのに対して、屋内貯蔵所は<strong>「建物の中でどの部屋に、どんな造りで、どれだけ置くか」</strong>がメインテーマ。
              </li>
              <li>表は、<strong>「どのタイプの屋内貯蔵所か」＋「指定数量の何倍か」</strong>で読むのがコツ。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                屋内貯蔵所の問題は、<strong>「指定数量の倍数」で区分される表</strong>からの出題が多い（何倍までOKか、どのタイプに当てはまるかをチェック）。
              </li>
              <li>
                <strong>位置の基準</strong>：避難に支障が出ない場所か、火気使用室や階段室と変なつながり方をしていないか、がよく聞かれる。
              </li>
              <li>
                <strong>構造の基準</strong>：壁・柱・床は原則<strong>耐火構造</strong>、出入口や開口部には<strong>防火設備</strong>という組み合わせが定番パターン。
              </li>
              <li>
                <strong>設備・取扱範囲</strong>：「どの危険物を」「指定数量の何倍まで」置けるかを、表の<strong>行（タイプ）×列（倍数）</strong>で読む問題が出やすい。
              </li>
              <li>
                同じ「貯蔵所の基準」でも、<strong>屋外＝周囲との距離</strong>、<strong>屋内＝建物内での区画・構造・数量</strong>を聞いてくる、と整理しておくと混ざりにくい。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「屋内ならどの階でもOK」</strong>という選択肢は要注意。地階付近や、人が多く出入りする部分と<strong>安易に隣接させる文章</strong>はだいたい×。
              </li>
              <li>
                <strong>「居室や階段室を通らないと出入りできない」</strong>屋内貯蔵所の記述も×パターンの定番。
              </li>
              <li>
                <strong>通路や出入口付近に危険物を置いてよい</strong>、と読める文章はほぼ誤り。避難経路をふさぐような配置はNG。
              </li>
              <li>
                火気使用室やボイラー室と<strong>直接つながっているような書き方</strong>も×。「防火区画で区切る」「専用室にする」などのキーワードがあるかチェック。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 貯蔵倉庫の形態の違い */}
        <section className={shared.section}>
          <h2>貯蔵倉庫の形態の違い</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">屋内貯蔵所の区分ごとの構造・建築物・取り扱い可能範囲</caption>
              <colgroup>
                <col className={styles.colStorage} />
                <col className={styles.colBuilding} />
                <col className={styles.colDangerousGoods} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>屋内貯蔵所の種類</th>
                  <th scope="col">建築物</th>
                  <th scope="col">取り扱いできる危険物の種類と数量、保安距離等</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    独立専用の
                    <br />
                    屋内貯蔵所
                    <br />
                    （平家建）
                  </th>
                  <td>
                    <ul>
                      <li>床面積：1,000㎡以下</li>
                      <li>軒高6m以上のものは高層タイプ</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>すべての危険物（高層のものは第2類または第4類のみ）</li>
                      <li>数量制限なし（一部除く）</li>
                      <li>保安距離・保有空地：<strong>要</strong></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    独立専用の
                    <br />
                    屋内貯蔵所
                    <br />
                    （平家建以外）
                  </th>
                  <td>
                    <ul>
                      <li>各階の床面積の合計：1,000㎡以下</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>第2類または第4類（引火性固体および引火点70℃未満は除く）</li>
                      <li>数量制限なし</li>
                      <li>保安距離：<strong>要</strong>（※）</li>
                      <li>保有空地：<strong>要</strong></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    他用途を有する
                    <br />
                    建築物（ビル等）
                    <br />
                    内の部分に設置
                  </th>
                  <td>
                    <ul>
                      <li>床面積：75㎡以下</li>
                      <li>耐火構造の建築物の1階または2階に設置</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>すべての危険物（例外あり）</li>
                      <li>指定数量の倍数：20以下</li>
                      <li>保安距離・保有空地：<strong>不要</strong></li>
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
                保安距離が不要になるとき
                <br />
                <strong>高引火点危険物</strong>（第4類で引火点100℃以上のもの）だけを、<strong>指定数量の20倍以下</strong>で貯蔵する場合は、保安距離は<strong>不要</strong>となる。
              </li>
              <li>
                特定屋内貯蔵所
                <br />
                上表の区分とは別に、一定の要件を満たす場合には<strong>特定屋内貯蔵所</strong>として特例基準が適用される（名称に「特定」が付く）。
              </li>
              <li>
                用語の確認
                <br />
                <strong>軒高</strong>：柱の上端と連結して屋根を支える部材（敷桁）の上端までの高さ。
                <br />
                <strong>階高</strong>：ある階の床面から、直上の階の床面までの高さ。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>すべての屋内貯蔵所で数量制限なし</strong>」と書いてある選択肢は要注意。独立専用の屋内貯蔵所は原則「数量制限なし」だけど、他用途を有する建築物内の部分では<strong>指定数量の倍数20以下</strong>という制限がある。
              </li>
              <li>
                他用途を有する建築物（ビル等）内の屋内貯蔵所について、「<strong>保安距離・保有空地が必要</strong>」と書いてある問題はひっかけ。表では<strong>保安距離・保有空地：不要</strong>になっている点をチェック。
              </li>
              <li>
                <strong>軒高と階高の説明が入れ替わっている</strong>パターンも定番。軒高＝屋根を支える部材の上端まで、階高＝ある階の床面から直上の階の床面まで、というセットで覚えておく。
              </li>
              <li>
                「<strong>特定屋内貯蔵所はどんな場合でもゆるい基準が適用される</strong>」という書き方も×。一定の要件を満たした場合だけ特例が適用される、と読めるかどうかを確認する。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 3. 独立専用・平家建の屋内貯蔵所（高層タイプを除く） */}
        <section className={shared.section}>
          <h2>独立専用・平家建の屋内貯蔵所（高層タイプを除く）</h2>
          <div className={shared.bandCard}>
            <p>
              ここでは、屋内貯蔵所のうち現場で<strong>最も標準的なタイプ</strong>である「<strong>独立専用・平家建（高層タイプを除く）</strong>」の条件を整理する。
            </p>
            <p>
              階数・軒高、床面積、構造などが<strong>セットで問われやすい出題ポイント</strong>である。「この条件ならこのタイプ」という形で、ひとまとまりで押さえておく。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">独立専用・平家建の屋内貯蔵所の仕様</caption>
              <colgroup>
                <col className={styles.colEquipment} />
                <col className={styles.colRequirements} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>設備</th>
                  <th scope="col">要件</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>階数・軒高</th>
                  <td>
                    <strong>平家建</strong>で、<strong>軒高6m未満</strong>（地盤面から軒まで）とする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>床の位置</th>
                  <td>床の位置は<strong>地盤面以上</strong>に設ける。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>床面積</th>
                  <td>床面積は<strong>1,000㎡以下</strong>とする。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>主要構造</th>
                  <td>壁・柱・床は<strong>耐火構造</strong>とし、はりは<strong>不燃材料</strong>とする。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋根・天井</th>
                  <td>
                    <strong>屋根は不燃材料</strong>とし、軽量不燃材料（例：金属板）で葺く。
                    <br />
                    <strong>天井は設けない。</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>開口部</th>
                  <td>
                    窓・出入口には<strong>防火設備</strong>を設け、ガラスを用いる場合は<strong>網入りガラス</strong>とする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>床（液状危険物）</th>
                  <td>
                    液状危険物を扱う部分の床は<strong>不浸透構造</strong>とし、<strong>適当な傾斜</strong>と<strong>貯留設備</strong>を設ける。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>このタイプは<strong>独立専用・平家建</strong>で、軒高は<strong>6m未満</strong>。</li>
              <li>床は<strong>地盤面以上</strong>に設け、床面積は<strong>1,000㎡以下</strong>。</li>
              <li>
                壁・柱・床は<strong>耐火構造</strong>、はり・屋根は<strong>不燃材料</strong>、そして<strong>天井は設けない</strong>のがセット。
              </li>
              <li>液状危険物の床は<strong>不浸透構造＋傾斜＋貯留設備</strong>の3点セットで覚える。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>架台</strong>を設ける場合は、<strong>不燃材料製</strong>とし、<strong>堅固な基礎に固定</strong>する。
              </li>
              <li>屋内貯蔵所には<strong>採光・照明・換気設備</strong>を設ける。</li>
              <li>
                引火点<strong>70℃未満</strong>の危険物を貯蔵する場合は、<strong>可燃性蒸気を屋根上へ排出する設備</strong>を設ける。
              </li>
              <li>
                粉じん・可燃性ガスなどで<strong>爆発のおそれがある場所</strong>に設置する電気設備は、<strong>防爆構造</strong>とする。
              </li>
              <li>
                指定数量の<strong>倍数が10以上</strong>の屋内貯蔵所には、原則として<strong>避雷設備</strong>を設ける。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>天井を耐火構造で設ける</strong>」とする記述はひっかけ。このタイプは<strong>天井を設けない</strong>のが原則。
              </li>
              <li>
                「床は地盤面より<strong>下</strong>に設けてもよい」という文章も×。床の位置は必ず<strong>地盤面以上</strong>。
              </li>
              <li>
                「壁と柱だけ耐火構造とすればよい」と書いてある場合も×。<strong>壁・柱・床まで耐火構造</strong>がセットになっている点を確認する。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <IndoorStorageStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}