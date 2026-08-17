import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import RefuelingStationStandardsQuiz from './RefuelingStationStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '固定給油設備・注油設備とは？懸垂式の違いと給油取扱所の基準【乙4対策】',
  description: '固定給油設備・固定注油設備・懸垂式の種類と違い、給油空地の要件、建築物の制限。乙4試験対策の練習問題つき。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/refueling_station_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '固定給油設備・注油設備とは？懸垂式の違いと給油取扱所の基準【乙4対策】',
    description: '固定給油設備・固定注油設備・懸垂式の種類と違い、給油空地の要件、建築物の制限。乙4試験対策の練習問題つき。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/refueling_station_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '固定給油設備・注油設備とは？懸垂式の違いと給油取扱所の基準【乙4対策】',
    description: '固定給油設備・固定注油設備・懸垂式の種類と違い、給油空地の要件、建築物の制限。乙4試験対策の練習問題つき。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function RefuelingStationStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '30節：給油取扱所の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 構造・設備 */}
        <section className={shared.section}>
          <h2>構造・設備</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>固定給油設備</strong>とは、自動車などに直接給油するための固定設備である（ポンプ機器＋ホース機器）。形式は<strong>固定式</strong>（地上設置）と<strong>懸垂式</strong>（天井つり）の2種類がある。
            </p>
            <p>
              <strong>固定注油設備</strong>とは、灯油・軽油を容器に詰め替えたり、車両の固定タンク（おおむね<strong>4,000L以下</strong>）へ注入したりするための固定設備である。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>固定給油設備</strong>：自動車などに<strong>直接給油</strong>する設備。ポンプ＋ホースで、<strong>固定式</strong>と<strong>懸垂式</strong>の2タイプがある。
              </li>
              <li>
                <strong>固定注油設備</strong>：灯油・軽油を<strong>容器に詰める／タンクに注ぐ</strong>設備。車両タンク（おおむね4,000L以下）への注油もここに含まれる。
              </li>
              <li>イメージは<strong>「給油＝車に入れる」「注油＝容器やタンクに詰める」</strong>と整理しておく。</li>
            </ul>
          </div>
        </section>

        {/* 2. 給油空地・注油空地の要件 */}
        <section className={shared.section}>
          <h2>給油空地・注油空地の要件</h2>
          <div className={shared.bandCard}>
            <p>
              給油取扱所では、ホース機器の<strong>周囲</strong>（懸垂式の場合は<strong>下方</strong>）に、車両の出入りと給油を行うための空地を<strong>設ける</strong>。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">給油空地・注油空地の要件</caption>
              <colgroup>
                <col className={styles.colSpaceClass} />
                <col className={styles.colSpaceScale} />
                <col className={styles.colSpaceRequirements} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">規模</th>
                  <th scope="col">主な要件</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>給油空地</th>
                  <td>
                    間口 <span className={styles.badge}>10m以上</span> × 奥行 <span className={styles.badge}>6m以上</span>
                  </td>
                  <td>
                    <ul className={shared.compact}>
                      <li>道路に面しており、車両が安全かつ円滑に出入りできること。</li>
                      <li>車両が空地からはみ出さずに、通行・給油ができること。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>注油空地</th>
                  <td>（規模は用途に応じて設定する。）</td>
                  <td>
                    <ul className={shared.compact}>
                      <li>灯油・軽油の容器詰替えや固定タンクへの注入を安全に行えること。</li>
                      <li>ホース機器の周囲（懸垂式は下方）に設けること。</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. 舗装・排水・油分離 */}
        <section className={shared.section}>
          <h2>舗装・排水・油分離</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>舗装</strong>は、漏れた危険物が<strong>浸透・劣化・変形</strong>を生じないような材料で行う。また、車両荷重で<strong>損傷せず</strong>、十分な<strong>耐火性</strong>を有するものを使用する。
            </p>
            <p>
              <strong>排水</strong>は、空地に危険物や可燃性蒸気が<strong>滞留しない</strong>よう勾配を付け、<strong>排水溝</strong>と<strong>油水分離装置</strong>等によって場外への流出を防止する。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>舗装</strong>は「<strong>浸透させない・劣化させない・変形させない</strong>」＋「<strong>車両荷重で壊れない</strong>」＋「<strong>耐火性がある</strong>」の三点セットと押さえておく。
              </li>
              <li>
                <strong>排水</strong>は「危険物や可燃性蒸気を<strong>滞留させない勾配</strong>」＋「<strong>排水溝＋油水分離装置</strong>で場外に流さない」がポイント。
              </li>
              <li>
                イメージは<strong>「こぼれても下にしみ込ませない／外に流さない」</strong>の二本立て。このセットで覚えておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. 専用タンク・廃油タンク等 */}
        <section className={shared.section}>
          <h2>専用タンク・廃油タンク等</h2>
          <div className={shared.bandCard}>
            <p>
              固定給油設備・注油設備に接続する<strong>専用タンク</strong>や、<strong>容量10,000L以下の廃油タンク</strong>は、<strong>地盤面下に埋設して設置できる</strong>。
            </p>
            <p>
              地盤面下に埋設される<strong>接続専用タンク</strong>は、<strong>容量の制限はない</strong>（その他の法令要件に従う）。
            </p>
            <p>
              防火地域・準防火地域<strong>以外</strong>では、地上に<strong>容量600L以下の簡易タンク</strong>を、<strong>同一の品質ごとに1個、最大3個まで</strong>設置できる。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>地中に埋めてよいのは、<strong>専用タンク</strong>と<strong>10,000L以下の廃油タンク</strong>。</li>
              <li>
                地盤面下に埋設される<strong>接続専用タンク</strong>は<strong>容量制限なし</strong>と押さえておく。
              </li>
              <li>
                地上に置ける<strong>簡易タンク</strong>は、<strong>防火地域・準防火地域以外</strong>で、<strong>容量600L以下</strong>を<strong>同一の品質ごとに1個・最大3個まで</strong>。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「容量10,000L以上の廃油タンクも埋設してよい」</strong>と書かれていたら×。埋設してよいのは<strong>10,000L以下</strong>だけ。
              </li>
              <li>
                <strong>容量制限なし</strong>なのは「すべてのタンク」ではなく、<strong>接続専用タンクだけ</strong>に限られる点に注意。
              </li>
              <li>
                簡易タンクは「600L<strong>以上</strong>」や「防火地域・準防火地域<strong>でも</strong>設置可」といった書き換えが定番のひっかけ。
              </li>
              <li>
                「同一品質ごと<strong>3個まで</strong>」ではなく、<strong>1個×最大3個</strong>。個数と表現のズレに注意しておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 5. ホース・静電気対策 */}
        <section className={shared.section}>
          <h2>ホース・静電気対策</h2>
          <div className={shared.bandCard}>
            <p>
              給油／注油ホースは<strong>先端に弁</strong>を設け、<strong>全長は5m以下</strong>とする。
            </p>
            <p>
              ホース先端に蓄積する静電気を逃がすため、<strong>静電気除去装置</strong>を設けて<strong>確実に接地</strong>する。
            </p>
          </div>
        </section>

        {/* 6. 建築物（事務所含む）の構造 */}
        <section className={shared.section}>
          <h2>建築物（事務所含む）の構造</h2>
          <div className={shared.bandCard}>
            <p>
              給油取扱所に付属する建築物（事務所を含む）の<strong>壁・柱・床・はり・屋根</strong>は、<strong>耐火構造</strong>または<strong>不燃材料</strong>で造る。
            </p>
            <p>
              <strong>開口部（窓・出入口）</strong>には、延焼を防ぐための<strong>防火設備</strong>を設ける。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>ホースは<strong>「先端に弁」＋「全長5m以下」</strong>のセットで覚えておく。</li>
              <li>
                静電気対策は、<strong>静電気除去装置</strong>を付けて<strong>接地する</strong>ところまでが条件である。
              </li>
              <li>
                建物は、事務所も含めて<strong>壁・柱・床・はり・屋根</strong>が<strong>耐火構造または不燃材料</strong>になる。
              </li>
              <li>
                <strong>窓や出入口などの開口部には防火設備</strong>を付ける。「開口部＝防火設備」とセットで押さえておく。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「ホース全長<strong>5m以上</strong>」や「弁を<strong>中間部</strong>に設ける」と書かれていたら×。</li>
              <li>「静電気除去装置は<strong>任意</strong>」や「接地は不要」とする選択肢も誤りである。</li>
              <li>建物の構造で<strong>床だけ除外</strong>したり、「事務所は対象外」としている記述は典型的なひっかけ。</li>
              <li>「開口部に防火設備は<strong>不要</strong>」や、屋根だけ別の構造にしている選択肢にも注意しておく。</li>
            </ul>
          </div>
        </section>

        {/* 7. 道路境界等からの間隔（離隔） */}
        <section className={shared.section}>
          <h2>道路境界等からの間隔（離隔）</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">道路境界等からの間隔（離隔）</caption>
              <colgroup>
                <col className={styles.colDistanceFormat} />
                <col className={styles.colDistanceStandard} />
                <col className={styles.colDistanceSupplement} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>設備形式</th>
                  <th scope="col">基準</th>
                  <th scope="col">補足</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    懸垂式固定
                    <br />
                    給油設備
                  </th>
                  <td><span className={styles.badge}>4m以上</span></td>
                  <td>道路境界線等からの最小離隔</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    固定給油設備
                    <br />
                    （上記以外）
                  </th>
                  <td><span className={styles.badge}>4〜6m以上</span></td>
                  <td>ホースの長さに応じて設定</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. 周囲の塀・壁（延焼防止） */}
        <section className={shared.section}>
          <h2>周囲の塀・壁（延焼防止）</h2>
          <div className={shared.bandCard}>
            <p>
              自動車の出入口側を除き、<strong>高さ2m以上</strong>で、<strong>耐火構造または不燃材料</strong>の塀・壁を設ける。<strong>開口部は設けない。</strong>
            </p>
          </div>
        </section>

        {/* 9. ポンプ室等を設ける場合 */}
        <section className={shared.section}>
          <h2>ポンプ室等を設ける場合</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>床</strong>は危険物が<strong>浸透しない構造</strong>とし、<strong>適切な勾配</strong>を付ける。
            </p>
            <p>漏えい液を一時的にためる<strong>貯留設備</strong>を設け、液体の滞留・流出を防止する。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>給油空地の規模</strong>は<strong>10m × 6m以上</strong>。数字はセットで覚えておく。
              </li>
              <li>
                <strong>ホースの長さ</strong>は、給油・注油ともに<strong>5m以下＋先端弁</strong>がワンセット。
              </li>
              <li>
                <strong>離隔距離</strong>は懸垂式固定給油設備＝<strong>4m以上</strong>、その他の固定給油設備＝<strong>4〜6m以上</strong>。設備形式ごとに数字が変わる点を押さえておく。
              </li>
              <li>
                <strong>簡易タンク</strong>は<strong>地上600L以下</strong>・<strong>同一品質ごとに1個×最大3個</strong>・<strong>防火地域・準防火地域以外</strong>のみ設置可。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>浸透防止の要件は<strong>舗装</strong>である。「塗装でよい」とする選択肢は誤り。</li>
              <li>給油空地の規模を<strong>6m × 10m</strong>などと並び替えてくるパターンに注意。</li>
              <li>
                ホース長を「約5m」や「5m<strong>以上</strong>」と表現している場合は×。正しくは<strong>5m以下</strong>が上限である。
              </li>
              <li>
                離隔を「一律4m以上」とまとめている選択肢は要注意。懸垂式とその他で<strong>4m／4〜6m</strong>に分かれることを思い出す。
              </li>
            </ul>
          </div>
        </section>

        {/* 10. 給油取扱所に設置できる建築物の用途 */}
        <section className={shared.section}>
          <h2>給油取扱所に設置できる建築物の用途</h2>
          <div className={shared.bandCard}>
            <p>
              給油取扱所に設けられる建築物・工作物は、<strong>給油その他の業務のため</strong>のものに限られる。また、<strong>「避難又は防火上支障がない」</strong>と総務省令で定められた用途に限られる。さらに、<strong>係員以外が出入りする部分の床面積の合計は300㎡以下</strong>とする。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>建築物・工作物の用途は<strong>給油その他の業務のため</strong>に限定される点を押さえておく。</li>
              <li>
                使ってよい用途は、総務省令で定められた<strong>「避難又は防火上支障がない用途」</strong>だけ。
              </li>
              <li>
                <strong>係員以外が出入りする部分の床面積は合計300㎡以下</strong>。300㎡を超えるとアウトなので、数字はセットで覚える。
              </li>
              <li>具体的な用途の種類は、このあと出てくる<strong>用途区分の表</strong>で整理する。</li>
            </ul>
          </div>
        </section>

        {/* 11. 設置できる建築物等の用途 */}
        <section className={shared.section}>
          <h2>設置できる建築物等の用途</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">設置できる建築物等の用途</caption>
              <colgroup>
                <col className={styles.colUsageClass} />
                <col className={styles.colUsagePurpose} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">用途・概要</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ① 作業場
                    <br />
                    （給油・注油）
                  </th>
                  <td>給油、灯油・軽油の詰替え、車両固定タンク（≦4,000L）への注入を行う作業場。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>② 事務所</th>
                  <td>給油取扱所の業務を行うための事務所。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ③ 点検／
                    <br />
                    整備作業場
                  </th>
                  <td>
                    自動車等の<strong>点検・整備</strong>を行う作業場。<strong>ただし、吹付塗装は不可（下表参照）。</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>④ 洗浄作業場</th>
                  <td>自動車等の洗浄を行う作業場。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ⑤ 住居／
                    <br />
                    関連事務所
                  </th>
                  <td>
                    給油取扱所の<strong>所有者等が居住する住居</strong>、または当該者に係る<strong>他の給油取扱所の業務を行う事務所。</strong>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ⑥ その他
                    <br />
                    <small>（防火対象物の一部）</small>
                  </th>
                  <td>
                    政令別表第1に定める用途のうち<strong>防火上支障がないもの</strong>
                    （例：飲食店、スーパー、図書館、工場、平面駐車場、倉庫、事務所、コインランドリー、簡易郵便局、美容室など）。
                    <br />
                    また、屋外の<strong>物品販売場等</strong>
                    （建築物周囲の空地で、火災予防上の支障がない場合に限る）として、<strong>実車展示・販売や宅配ボックス配置など。</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                建築物・工作物の用途は<strong>「給油その他の業務のため」</strong>に限られる。テナントを入れて何でも商売してよいわけではない点を押さえておく。
              </li>
              <li>
                使ってよい用途は、総務省令で定められた<strong>「避難又は防火上支障がない用途」</strong>だけ。表の①〜⑥はその代表例として覚える。
              </li>
              <li>
                <strong>係員以外が出入りする部分の床面積合計は300㎡以下</strong>。「係員以外」「合計」「300㎡」のセットで記憶すること。
              </li>
              <li>
                ⑤<strong>住居／関連事務所</strong>は、給油取扱所の<strong>所有者等が居住する住居＋関連する事務所</strong>というセットで出やすい。
              </li>
              <li>
                ⑥<strong>その他</strong>は、政令別表第1のうち<strong>防火上支障がない用途</strong>と<strong>屋外の物品販売場等</strong>がポイント。例示の業種は「代表例」としてざっくり押さえておく。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>床面積制限を<strong>「300㎡以上」</strong>と逆に書いてくる選択肢は即アウト。</li>
              <li>
                ⑤の住居を<strong>「従業員の寮」</strong>などに言い換えている場合は要注意。所有者等の住居であることを押さえる。
              </li>
              <li>
                ⑥その他で「<strong>防火上の支障がある用途も含む</strong>」としているものは×。あくまで<strong>支障がない用途</strong>だけである。
              </li>
            </ul>
          </div>
        </section>

        {/* 12. 設置できない建築物・設備の例 */}
        <section className={shared.section}>
          <h2>設置できない建築物・設備の例</h2>
          <div className={shared.bandCard}>
            <p className={shared.muted}>
              ※ 以下は代表例である。条例等により、ここに挙げたもの以外にも制限が設けられる場合がある。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">設置できない建築物・設備</caption>
              <colgroup>
                <col className={styles.colForbiddenClass} />
                <col className={styles.colForbiddenContents} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ① ガソリン詰替え
                    <br />
                    作業場
                  </th>
                  <td>
                    <strong>ガソリンの容器詰替え</strong>を行う作業場。（ガソリンは注油の対象にはならない）。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>② 吹付塗装設備</th>
                  <td>
                    自動車の<strong>吹付塗装</strong>を行う設備。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ③ 一般来場者
                    <br />
                    向けの施設
                  </th>
                  <td>
                    病院・診療所、保育所、養護老人ホーム、幼稚園、特別支援学校、<strong>宿泊施設</strong>、<strong>立体駐車場</strong>、ラック式ドラム缶置場、大規模広告物、風俗営業（キャバレー、パチンコ店、<strong>ゲームセンター</strong>等）など、一般の来場者が多数出入り・滞在する施設。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>300㎡が上限：</strong>
                係員以外が出入りする部分の床面積の<strong>合計</strong>が300㎡以下であることが条件。事務所＋売店＋待合室などを合算して超えていないか確認する。
              </li>
              <li>
                <strong>ガソリンは「注油（容器詰替え）」不可：</strong>
                ガソリンは容器への注油（詰替え）はできない。灯油・軽油のみ注油可で、ガソリンは<strong>車両への給油のみ</strong>と押さえておく。
              </li>
              <li>
                <strong>整備OK／吹付塗装NG：</strong>
                自動車の<strong>点検・整備作業場は設置可</strong>。同じようなイメージでも<strong>吹付塗装設備は設置不可</strong>。「整備まで・塗装はアウト」の線引きがよく問われる。
              </li>
              <li>
                <strong>平面駐車場は可／立体駐車場は不可：</strong>
                駐車場は<strong>平面駐車場なら設置可</strong>。<strong>立体駐車場は設置不可</strong>。語感で「どちらも駐車場だからOK」と選ばないよう注意（ひっかけポイント）。
              </li>
              <li>
                <strong>住居は「所有者等」に限る：</strong>
                給油取扱所に設置できる住居は<strong>所有者等が居住する住居のみ</strong>。一般の賃貸住宅まで認める選択肢は<strong>×</strong>と判断する。
              </li>
            </ul>
          </div>
        </section>

        {/* 13. 給油取扱所の付随設備 */}
        <section className={shared.section}>
          <h2>給油取扱所の付随設備</h2>
          <div className={shared.bandCard}>
            <p>給油取扱所の業務を行ううえで設けることができる<strong>付随設備</strong>は、次のとおりである。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                付随設備として認められるのは、洗浄設備・点検整備設備・混合燃料油調合器・尿素水溶液供給機・急速充電設備など、<strong>給油取扱所の業務を支える設備</strong>に限られる。
              </li>
              <li>
                <strong>吹付塗装設備は付随設備ではなく「設置できない設備」側</strong>に入る点が重要。点検・整備とセットで線引きを押さえておく。
              </li>
              <li>
                洗浄設備や混合燃料油調合器では<strong>排水・漏えい対策</strong>、尿素水溶液供給機や急速充電設備では<strong>腐食・電気設備の保安・動線分離</strong>など、安全対策と組み合わせて問われやすい。
              </li>
            </ul>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">給油取扱所の付随設備</caption>
              <colgroup>
                <col className={styles.colEquipmentName} />
                <col className={styles.colEquipmentOverview} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>設備</th>
                  <th scope="col">概要・注意</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>洗浄設備</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        <strong>蒸気洗浄機</strong>・<strong>洗車機</strong>など。
                      </li>
                      <li>排水は油水分離等で場外流出を防止。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>点検・整備設備</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        自動車等の<strong>点検・整備</strong>を行う設備。
                      </li>
                      <li>
                        <strong>吹付塗装設備は不可</strong>（設置できない設備に該当）。
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>混合燃料油調合器</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>2ストローク等の混合用。可燃物の取扱い手順・漏えい対策に留意。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>尿素水溶液供給機</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>いわゆるAdBlue®供給機。腐食対策・こぼれ対策を講じる。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>急速充電設備</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>EV用。電気設備の保安・表示・動線分離に留意。</li>
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
                <strong>洗浄設備：</strong>
                蒸気洗浄機・洗車機などは付随設備として設置可。排水は<strong>油水分離＋場外流出防止</strong>が前提条件。
              </li>
              <li>
                <strong>点検・整備設備：</strong>
                自動車の<strong>点検・整備</strong>を行う設備は付随設備として設置可。
              </li>
              <li>
                <strong>混合燃料油調合器：</strong>
                2ストローク等の混合用機器。可燃物の取扱い手順と漏えい対策をセットで覚える。
              </li>
              <li>
                <strong>尿素水溶液供給機：</strong>
                いわゆるAdBlue®供給機。腐食対策・こぼれ対策がポイント。
              </li>
              <li>
                <strong>急速充電設備：</strong>
                EV用急速充電設備は付随設備として認められる。電気設備の保安と表示が重要ポイント。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>整備OK／吹付塗装NG：</strong>
                点検・整備設備は設置可だが、<strong>吹付塗装設備は「設置できない設備」</strong>に分類される。「どちらも整備だから可」とまとめている選択肢は誤り。
              </li>
              <li>
                <strong>ガソリンの容器詰替え設備：</strong>
                ガソリンは<strong>容器への注油不可・車両への給油のみ</strong>。灯油・軽油だけが容器注油可という線引きを押さえる。
              </li>
              <li>
                <strong>尿素水（AdBlue）の扱い：</strong>
                名称から危険物と誤解しやすいが、<strong>第四類危険物ではない</strong>。危険物タンクやガソリン設備と混同させる選択肢に注意。
              </li>
            </ul>
          </div>
        </section>

        {/* 14. 取扱いの基準 */}
        <section className={shared.section}>
          <h2>取扱いの基準</h2>
          <div className={shared.bandCard}>
            <p>取り扱いには基本の3原則がある。</p>
            <ul className={shared.compact}>
              <li>
                <strong>固定給油設備</strong>を使用して<strong>直接給油</strong>する。
              </li>
              <li>給油時は<strong>原動機（エンジン）を停止</strong>する。</li>
              <li>給油・注油は<strong>所定の空地（給油空地／注油空地）内</strong>で完結させる（はみ出し禁止）。</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>直接給油が原則：</strong>給油は必ず固定給油設備による<strong>直接給油</strong>とする。
              </li>
              <li>
                <strong>エンジン停止が前提：</strong>給油中は原動機（エンジン）を<strong>停止した状態</strong>で行う。
              </li>
              <li>
                <strong>空地内で完結：</strong>給油・注油は<strong>給油空地／注油空地の内部で完結</strong>させ、空地からの<strong>はみ出しは一切不可</strong>。
              </li>
            </ul>
          </div>
        </section>

        {/* 15. 空地からの「はみ出し」禁止（適用範囲） */}
        <section className={shared.section}>
          <h2>空地からの「はみ出し」禁止（適用範囲）</h2>
          <p>空地からのはみ出し禁止事項は、次の3つである。</p>

          <h3>1. 自動車等への給油（固定給油設備）</h3>
          <div className={shared.bandCard}>
            <p>
              車両の一部も含め、<strong>必ず給油空地内</strong>で実施する。空地の外への<strong>はみ出しは禁止</strong>。
            </p>
          </div>

          <h3>2. ガソリンを容器に詰替え／軽油を車両固定タンクへ注入（固定給油設備）</h3>
          <div className={shared.bandCard}>
            <p>
              いずれの行為も<strong>給油空地内</strong>で実施する。容器・車両が空地の外へ<strong>はみ出すことは不可</strong>。
            </p>
          </div>

          <h3>3. 灯油・軽油を容器に詰替え／車両固定タンクへ注入（固定注油設備）</h3>
          <div className={shared.bandCard}>
            <p>
              いずれの行為も<strong>注油空地内</strong>で実施する。容器・車両が空地の外へ<strong>はみ出すことは不可</strong>。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>共通ルール：</strong>
                3つの行為はいずれも<strong>指定された空地内で完結</strong>。容器・車両の一部でも空地の外へ出ることは認められない。
              </li>
              <li>
                <strong>給油空地の対象：</strong>
                自動車等への給油と、ガソリン容器詰替え／軽油を車両固定タンクへ注入の2パターン。
              </li>
              <li>
                <strong>注油空地の対象：</strong>
                灯油・軽油を容器に詰替える場合と、車両固定タンクへ注入する場合。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>給油空地／注油空地の入れ替え：</strong>
                灯油・軽油の容器詰替えを「給油空地」とするなど、空地の名称を逆にした選択肢。
              </li>
              <li>
                <strong>「空地の外もOK」表現：</strong>
                「車両の一部が空地の外にはみ出しても差し支えない」といった記述。
              </li>
              <li>
                <strong>空地の種類をまとめる書き方：</strong>
                給油空地と注油空地を区別せず、単に「空地内」とだけ書いている選択肢。
              </li>
            </ul>
          </div>
        </section>

        {/* 16. 移動タンク貯蔵所 → 専用タンク等への注入 */}
        <section className={shared.section}>
          <h2>移動タンク貯蔵所 → 専用タンク等への注入</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>移動タンク貯蔵所</strong>は、専用タンク等の<strong>注入口付近に停車</strong>させる。
            </p>
            <p>
              給油取扱所に<strong>専用タンク等（専用タンク／簡易タンク）</strong>がある場合に、当該タンクへ危険物を注入するときは、次を守る。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>走行中ではなく停止して注入：</strong>移動タンク貯蔵所は<strong>注入口の近くに確実に停車</strong>させてから注入を行う。
              </li>
              <li>
                <strong>対象は専用タンク等に限定：</strong>注入先は<strong>専用タンク・簡易タンクなどの受けタンク</strong>に限られる。
              </li>
              <li>
                <strong>給油取扱所内で完結：</strong>ホースを長く引き回して敷地外のタンクに注ぐような形はとらず、作業は<strong>給油取扱所の管理範囲内</strong>で完結させる。
              </li>
            </ul>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">移動タンク貯蔵所 → 専用タンク等への注入</caption>
              <colgroup>
                <col className={styles.colInjectionPrinciple} />
                <col className={styles.colInjectionContent} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>原則／例外</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>原則</th>
                  <td>
                    当該専用タンク等に接続する<strong>固定給油設備／固定注油設備の使用を中止</strong>する。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>例外（※）</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        固定<strong>給油</strong>設備のノズル：燃料タンクが<strong>満量で自動停止</strong>する構造。
                      </li>
                      <li>
                        固定<strong>注油</strong>設備のノズル：容器が<strong>満量で自動停止</strong>する構造。
                      </li>
                      <li>
                        専用タンク／移動タンク貯蔵所：<strong>誤注入防止構造</strong>（種類取り違えを有効に防止）。
                        <br />
                        ※ 取扱う危険物が<strong>一種類で同一</strong>など、保安上支障がない場合は除外可。
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>立入規制</th>
                  <td>
                    （2）注入作業時は<strong>自動車等を注入口に近づけない</strong>。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            （※）<small>（専用タンク注入時の措置を講じた場合）</small>
          </p>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>原則：固定給油／固定注油設備の使用中止：</strong>専用タンク注入中は、既設の固定設備からは注がない。
              </li>
              <li>
                <strong>例外は3パターン：</strong>給油ノズル・注油ノズルの<strong>満量で自動停止構造</strong>と、専用タンク側の<strong>誤注入防止構造</strong>。キーワードは「満量で自動停止」「種類取り違え防止」。
              </li>
              <li>
                <strong>一種類で同一なら除外可：</strong>取り扱う危険物が<strong>一種類で同一</strong>など、保安上支障がない場合は例外として認められる。
              </li>
              <li>
                <strong>立入規制(2)：注入口に近づけない：</strong>注入作業時は<strong>自動車等を注入口に近づけない</strong>。条文番号「(2)」とセットで押さえておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 17. 駐停車・作業の制限 */}
        <section className={shared.section}>
          <h2>駐停車・作業の制限</h2>
          <div className={shared.bandCard}>
            <p>
              固定給油／固定注油設備の<strong>注入口・通気管周囲</strong>（法定の範囲）では、<strong>他車の駐車を禁止</strong>し、点検・整備・洗浄も行わない。
            </p>
            <p>
              屋内給油取扱所の<strong>通風・避難用空地</strong>では、駐車・停車を禁止し、避難に支障となる物件は置かない。
            </p>
          </div>

          <h3>その他の取り扱い</h3>
          <div className={shared.bandCard}>
            <p>洗浄時は<strong>引火性のある液体洗剤を使用しない</strong>。</p>
            <p>物品販売等は<strong>原則 建築物の1階のみ</strong>で実施する。</p>
          </div>
        </section>

        {/* 18. 給油の業務が行われていないときの措置 */}
        <section className={shared.section}>
          <h2>給油の業務が行われていないときの措置</h2>
          <div className={shared.bandCard}>
            <p>
              危険物取扱箇所（固定給油／固定注油設備、簡易タンク、<strong>通気管・専用タンク注入口</strong>等）の周囲では、<strong>係員以外を近寄らせない措置</strong>を講じる。
            </p>
            <p>
              固定給油設備・固定注油設備・簡易タンク・ポンプ・制御卓などは、<strong>みだりに操作できない措置</strong>を講じる。
            </p>
            <p>
              <strong>係員以外の利用を禁止する箇所</strong>は、近寄り防止措置を講じる。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>注入口・通気管周囲：</strong>
                他車の駐停車は禁止。<strong>点検・整備・洗浄</strong>も行わない。
              </li>
              <li>
                <strong>通風・避難用空地：</strong>
                駐車・停車は禁止。<strong>物を置かない「避難スペース」</strong>として確保しておく。
              </li>
              <li>
                <strong>洗浄用洗剤：</strong>
                <strong>引火性のある液体洗剤は使用しない</strong>。非引火性のものを使う。
              </li>
              <li>
                <strong>物品販売：</strong>
                原則は<strong>建築物の1階のみ</strong>。階上や別棟での販売を認める選択肢は要注意。
              </li>
              <li>
                <strong>業務停止中の措置：</strong>
                危険物取扱箇所の周囲は<strong>係員のみ立入可＋みだり操作防止</strong>が基本セット。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「注入口・通気管周囲なら<strong>点検・整備は行ってもよい</strong>」とする選択肢は<strong>誤り</strong>。
              </li>
              <li>
                「<strong>通風・避難用空地に一時的な駐車は許される</strong>」という表現も<strong>誤り</strong>。短時間でも駐停車不可。
              </li>
              <li>
                「洗浄時に<strong>油性・引火性洗剤</strong>を用いる」「<strong>2階部分の物品販売</strong>を認める」といった記述はすべて<strong>×</strong>。
              </li>
              <li>
                給油業務停止中に<strong>一般客が自由に近づける</strong>、<strong>ポンプや制御卓が無施錠で放置</strong>されている設定も<strong>×</strong>。
              </li>
            </ul>
          </div>
        </section>

        {/* 19. 顧客による給油・詰替えの禁止（非セルフの場合） */}
        <section className={shared.section}>
          <h2>顧客による給油・詰替えの禁止（非セルフの場合）</h2>
          <div className={shared.bandCard}>
            <p>
              顧客に自ら給油させたり、ガソリン・灯油・軽油の<strong>容器詰替えや注入</strong>をさせてはならない（セルフ方式は別規定）。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>非セルフ給油所では顧客給油は一律禁止</strong>。ノズルを顧客が持つ選択肢はすべて×。
              </li>
              <li>
                <strong>禁止対象はガソリンだけでなく灯油・軽油の容器詰替え・注入まで含む</strong>。ガソリンのみ禁止とする記述に注意。
              </li>
              <li>
                <strong>セルフスタンドは別規定</strong>。非セルフの条件と混同させる出題パターンが定番。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 20. ガソリンの容器詰替え販売時における本人確認等 */}
        <section className={shared.section}>
          <h2>ガソリンの容器詰替え販売時における本人確認等</h2>
          <div className={shared.bandCard}>
            <p>ガソリンを容器に詰替えて販売する場合は、次の<strong>3つを必ず実施</strong>する。</p>
            <ol className={styles.orderedCompact}>
              <li>顧客の<strong>本人確認</strong></li>
              <li>
                <strong>使用目的の確認</strong>
              </li>
              <li>
                <strong>販売記録の作成・保存</strong>
              </li>
            </ol>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>対象は<strong>ガソリンを容器に詰替えて販売する場合</strong>。</li>
              <li>
                <strong>本人確認・使用目的の確認・販売記録</strong>の<strong>3点セットはすべて必須</strong>。
              </li>
              <li>
                3つのうち<strong>1つでも欠ける選択肢は×</strong>と判断する。
              </li>
            </ul>
          </div>
        </section>

        {/* 21. 1 顧客の本人確認 */}
        <section className={shared.section}>
          <h2>1 顧客の本人確認</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">本人確認の方法</caption>
              <colgroup>
                <col className={styles.colIdItem} />
                <col className={styles.colIdContent} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>原則</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        運転免許証、マイナンバーカード等の<strong>公的機関が発行する写真付き身分証</strong>で確認する。
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    例外
                    <br />
                    （省略可）
                  </th>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        既に<strong>身分証等で確認済み</strong>の顧客。
                      </li>
                      <li>
                        <strong>継続取引</strong>があり、当該事業所で氏名・住所等を把握している場合。
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 22. 2 使用目的の確認 */}
        <section className={shared.section}>
          <h2>2 使用目的の確認</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">使用目的の確認</caption>
              <colgroup>
                <col className={styles.colPurposeCheck} />
                <col className={styles.colPurposeExample} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>確認事項</th>
                  <th scope="col">具体例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>使用目的</th>
                  <td>
                    「<strong>農業機械用燃料</strong>」「<strong>発電機用燃料</strong>」など、<strong>具体的に聞き取る</strong>。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 23. 3 販売記録の作成・保存 */}
        <section className={shared.section}>
          <h2>3 販売記録の作成・保存</h2>
          <div className={shared.bandCard}>
            <p>販売記録の項目は次のとおりである。</p>
            <ol className={styles.orderedCompact}>
              <li>販売日</li>
              <li>顧客氏名</li>
              <li>住所</li>
              <li>本人確認方法</li>
              <li>使用目的</li>
              <li>販売数量</li>
            </ol>
            <p>なお、保存の目安は原則1年間である。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>販売記録は、<strong>容器詰替え販売を行ったときごと</strong>に作成する。</li>
              <li>記録するのは<strong>6項目セット</strong>（販売日・顧客氏名・住所・本人確認方法・使用目的・販売数量）。</li>
              <li>保存期間は<strong>原則1年間</strong>という数字を押さえておく。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>保存期間を<strong>「3年」「5年」</strong>などに変えた選択肢は×。</li>
              <li>
                記録項目に<strong>「電話番号」「車両ナンバー」「支払方法」</strong>などが混ざっていたら誤り。
              </li>
              <li>
                6項目のうち<strong>1つだけ抜けた5項目セット</strong>を「記録事項」として出す問題にも注意。
              </li>
            </ul>
          </div>
        </section>

        {/* 24. 実務上の注意（詰替え作業の方法） */}
        <section className={shared.section}>
          <h2>実務上の注意（詰替え作業の方法）</h2>
          <div className={shared.bandCard}>
            <p>
              自動車の燃料タンク<strong>以外の容器（携行缶等）</strong>にガソリン又は軽油を詰替える作業は、<strong>必ず従業員が行う</strong>。
            </p>
            <p>
              固定給油設備の<strong>給油ノズル</strong>は<strong>満量停止装置</strong>が確実に機能すること。
            </p>
            <p>
              詰替え作業は<strong>危険物取扱者</strong>である従業員が実施し、<strong>予防規定の文書</strong>に明記しておく。
            </p>
            <p>
              <strong>指定数量以上</strong>のガソリンを容器へ詰替える場合は、<strong>満量自動停止＋誤注入防止</strong>等の措置を講じた場合に限り可。
            </p>
            <p>
              ガソリンの詰替えは、<strong>容器を接地</strong>して実施する。
            </p>
          </div>
        </section>

        {/* 25. 運搬容器（プラスチック製容器）の要件 */}
        <section className={shared.section}>
          <h2>運搬容器（プラスチック製容器）の要件</h2>
          <div className={shared.bandCard}>
            <p>運搬容器には規格、容量、使用期限を表示する必要がある。</p>
            <p>
              <strong>UN表示</strong>と容器記号3H1が容器に表示されていなければならない。
            </p>
            <p>最大容積は10L以内であり、製造日から5年以内のものを使用する。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                自動車の燃料タンク<strong>以外の容器（携行缶など）</strong>にガソリン・軽油を詰める作業は、<strong>セルフではなく従業員（危険物取扱者）</strong>が行う。
              </li>
              <li>
                固定給油設備の<strong>給油ノズル</strong>には、<strong>満量停止装置</strong>を備え、確実に機能することが条件。
              </li>
              <li>詰替え作業の手順や方法は、<strong>予防規定の文書に明記</strong>しておく。</li>
              <li>
                <strong>指定数量以上</strong>を容器に詰める場合は、<strong>満量自動停止＋誤注入防止などの措置</strong>が取られているときだけ認められる。
              </li>
              <li>
                ガソリンの詰替え時は、<strong>容器を確実に接地</strong>して静電気対策を行う。
              </li>
              <li>
                運搬容器（プラスチック製容器）は<strong>規格・容量・使用期限</strong>の表示に加え、<strong>UN表示＋容器記号3H1／最大10L以内／製造後5年以内</strong>がセットで条件。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>3本柱（本人確認・目的・記録）</strong>の取りこぼしがないか。
              </li>
              <li>
                <strong>本人確認＝写真付き公的身分証</strong>。ポイントカード等は不可。
              </li>
              <li>
                <strong>目的は具体的に</strong>（「機械用」「発電機用」など）。「私用」等の抽象回答は×。
              </li>
              <li>
                <strong>販売記録は1年保存</strong>。日付・氏名・住所・確認方法・目的・数量を網羅。
              </li>
              <li>
                <strong>携行缶詰替えは従業員が実施</strong>。セルフでの容器詰替えはNG。
              </li>
              <li>
                <strong>UN 3H1／10L／5年</strong>の数字ひっかけに注意。
              </li>
              <li>
                <strong>指定数量以上OKの例外</strong>は「満量自動停止＋誤注入防止＋取扱者実施＋予防規定明記」が前提。
              </li>
            </ul>
          </div>
        </section>

        {/* 26. 屋内給油取扱所 */}
        <section className={shared.section}>
          <h2>屋内給油取扱所</h2>
          <div className={shared.bandCard}>
            <p>給油取扱所は、<strong>構造</strong>によって次のように区分される。</p>
            <ul className={shared.compact}>
              <li>
                <strong>屋外型</strong> … 建築物の内部に含まれない位置に設けられ、屋外で給油を行う一般的な形態。
              </li>
              <li>
                <strong>屋内型</strong> … 建築物内に給油設備がある形態で、<strong>一方開放型</strong>／<strong>二方開放型</strong>に分かれ、さらに<strong>上階に他用途がある／ない</strong>で細分される。
              </li>
            </ul>
          </div>

          <h3>構造による区分（全体像）</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">構造による区分（全体像）</caption>
              <colgroup>
                <col className={styles.colStructureClass} />
                <col className={styles.colStructureOverview} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">概要</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋外型</th>
                  <td>建築物の内部に含まれない配置で給油を行う一般的な形態。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>屋内型</th>
                  <td>
                    建築物内に給油設備がある形態。開放方向の数（<strong>一方／二方</strong>）と、<strong>上階に他用途があるか</strong>で分類。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>屋内型の細分類</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">屋内型の細分類</caption>
              <colgroup>
                <col className={styles.colIndoorType} />
                <col className={styles.colIndoorNoUse} />
                <col className={styles.colIndoorUse} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>タイプ</th>
                  <th scope="col">上階に他用途なし</th>
                  <th scope="col">上階に他用途あり</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>一方開放型</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        外部に<strong>一方向の開口</strong>を有する。
                      </li>
                      <li>建物上部は同一用途のみ（上階に他用途なし）。</li>
                    </ul>
                  </td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        外部に<strong>一方向の開口</strong>を有する。
                      </li>
                      <li>
                        <strong>上階に他用途</strong>（店舗・駐車場等）が存在。
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>二方開放型</th>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        外部に<strong>二方向の開口</strong>を有する。
                      </li>
                      <li>上階に他用途なし。</li>
                    </ul>
                  </td>
                  <td>
                    <ul className={shared.compact}>
                      <li>
                        外部に<strong>二方向の開口</strong>を有する。
                      </li>
                      <li>
                        <strong>上階に他用途あり</strong>。
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
                <strong>屋内型は「一方 or 二方」＋「上階他用途の有無」</strong>で<strong>4タイプ</strong>に分かれる（パターン丸暗記）。
              </li>
              <li>
                <strong>開放方向＝外部に開いた面の数</strong>。出入口の数ではなく、「外部への開口面」の数で判定する言い回しに注意。
              </li>
              <li>
                <strong>屋外／屋内の取り違え</strong>：建築物の内側か外側かで判断し、屋根の有無だけで決めない。
              </li>
              <li>
                <strong>「上階他用途あり」かどうか</strong>を聞く設問が定番。文中の「上階に（他用途が）ある／ない」を見落とさない。
              </li>
              <li>
                屋内型の詳細な設備条件・避難条件は<strong>別の条文で規定</strong>。この節ではまず<strong>名称と組み合わせ</strong>を確実に押さえる。
              </li>
            </ul>
          </div>
        </section>

        {/* 27. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <RefuelingStationStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}