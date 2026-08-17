import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import MobileTankStorageStandardsQuiz from './MobileTankStorageStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 28節：移動タンク貯蔵所（タンクローリー等）の基準',
  description:
    '危険物乙4。移動タンク貯蔵所の構造基準。容量30,000L以下・間仕切ごとに4,000L以下、水圧試験の基準、底弁・閉鎖装置の構造、静電気対策と配管基準。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/mobile_tank_storage_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 28節：移動タンク貯蔵所（タンクローリー等）の基準',
    description:
      '危険物乙4。移動タンク貯蔵所の構造基準。容量30,000L以下・間仕切ごとに4,000L以下、水圧試験の基準、底弁・閉鎖装置の構造、静電気対策と配管基準。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/mobile_tank_storage_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 28節：移動タンク貯蔵所（タンクローリー等）の基準',
    description:
      '危険物乙4。移動タンク貯蔵所の構造基準。容量30,000L以下・間仕切ごとに4,000L以下、水圧試験の基準、底弁・閉鎖装置の構造、静電気対策と配管基準。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function MobileTankStorageStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '28節：移動タンク貯蔵所（タンクローリー等）の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 位置 */}
        <section className={shared.section}>
          <h2>位置</h2>
          <div className={shared.bandCard}>
            <p>
              移動タンク貯蔵所とは、<strong>車両に固定されたタンク</strong>に危険物を貯蔵し、取り扱う貯蔵所をいう。代表例は<strong>タンクローリー</strong>である。
            </p>
          </div>

          <h3>移動タンク貯蔵所の種類</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">移動タンク貯蔵所の種類</caption>
              <colgroup>
                <col className={styles.colFormat} />
                <col className={styles.colOverview} />
                <col className={styles.colTypicalExample} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>形式</th>
                  <th scope="col">概要</th>
                  <th scope="col">代表例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>単一車形式</th>
                  <td>車両そのものにタンクを<strong>固定</strong>している形式である（積載式以外）。</td>
                  <td>
                    タンクローリー
                    <br />
                    （ストレート車）
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>被牽引車形式</th>
                  <td>
                    牽引車が<strong>タンクを積んだ被牽引車</strong>を牽引する形式である。
                    <br />
                    積載式（タンクコンテナ等を積載）と、積載式以外の双方がある。
                  </td>
                  <td>
                    トレーラーローリー、
                    <br />
                    タンクコンテナ牽引 など
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            移動タンク貯蔵所は、<strong>屋外の防火上安全な場所</strong>に常置するか、または<strong>壁・床・はり（梁）・屋根が耐火構造</strong>または<strong>不燃材料</strong>で造られた<strong>建築物の1階に常置</strong>する。
          </p>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>移動タンク貯蔵所＝車両に固定したタンク</strong>（代表例：タンクローリー）。</li>
              <li><strong>形式は「単一車形式」と「被牽引車形式」の2種類</strong>に整理される。</li>
              <li>常置場所は<strong>屋外の防火上安全な場所</strong>か、<strong>耐火・不燃構造の建物1階</strong>のいずれか。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>「常置する」＝一定の場所に継続して置いておくこと</strong>（ざっくり言うと<strong>駐車しておく</strong>イメージ）。</li>
              <li>常置場所を変更する場合は、<strong>原則として変更許可</strong>が必要。</li>
              <li>屋内に常置できるのは、<strong>耐火・不燃条件を満たした建築物の1階のみ</strong>である点をおさえる。</li>
            </ul>
            <p>※ 本節は試験で頻出である。「常置」「耐火構造」「不燃材料」といった用語もセットで暗記する。</p>
          </div>
        </section>

        {/* 2. 構造 */}
        <section className={shared.section}>
          <h2>構造</h2>
          <div className={shared.bandCard}>
            <p>
              危険物を貯蔵し、または取り扱う車両に固定されたタンク（以下、<strong>移動貯蔵タンク</strong>）は、<strong>厚さ3.2mm以上の鋼板</strong>（または同等以上の機械的性質を有する材料）で<strong>気密</strong>に製作する。
            </p>
            <p>
              簡易タンク貯蔵所と同じく、ここでも<strong>「板厚3.2mm以上＋気密」</strong>が基本セットである。まずはこの組み合わせをしっかり押さえておく。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>厚さ3.2mm以上の鋼板</strong>でつくる。</li>
              <li><strong>気密</strong>に製作する（漏れないタンクが大前提）。</li>
              <li>「簡易タンク」と同じく、<strong>板厚3.2mm＋気密</strong>のセットで覚える。</li>
            </ul>
          </div>

          <h3>水圧試験の条件</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">水圧試験の条件</caption>
              <colgroup>
                <col className={styles.colTargetTank} />
                <col className={styles.colTestPressure} />
                <col className={styles.colTime} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象タンク</th>
                  <th scope="col">試験圧力</th>
                  <th scope="col">時間・判定</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>圧力タンク<strong>以外</strong></th>
                  <td><strong>70kPa</strong></td>
                  <td><strong>10分間</strong>実施し、<strong>漏れ・変形がない</strong>こと。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>圧力タンク</th>
                  <td><strong>最大常用圧力の1.5倍</strong></td>
                  <td><strong>10分間</strong>実施し、<strong>漏れ・変形がない</strong>こと。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント（水圧試験セット）</h4>
            <ul className={shared.compact}>
              <li><strong>圧力タンク以外＝70kPa×10分</strong> … 簡易タンクの強度試験と同じ数値。</li>
              <li><strong>圧力タンク＝最大常用圧力の1.5倍×10分</strong> … 「1.5倍」がキーワード。</li>
              <li>どちらも<strong>「10分間＋漏れ・変形なし」</strong>が判定条件。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意（水圧試験）</h4>
            <ul className={shared.compact}>
              <li>
                <strong>圧力タンク以外</strong>と<strong>簡易タンク</strong>の<strong>「70kPa×10分」</strong>は同じセット。問題文で何のタンクかを必ず確認する。
              </li>
              <li><strong>1.5倍</strong>が出てきたら<strong>圧力タンク専用</strong>の条件。その他のタンクに当てはめない。</li>
            </ul>
          </div>

          <p>※ Pa（パスカル）は圧力の単位である。一般的な乗用車タイヤの空気圧はおよそ200〜250kPa程度である。</p>

          <h3>容量・間仕切の基準</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">容量・間仕切の基準</caption>
              <colgroup>
                <col className={styles.colCapacityItem} />
                <col className={styles.colCapacityStandard} />
                <col className={styles.colCapacitySupplement} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">基準</th>
                  <th scope="col">補足</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>総容量</th>
                  <td>
                    <strong>30,000L以下</strong>
                    <br />
                    （アルキルアルミニウム等の一部危険物を除く）
                  </td>
                  <td>比重の例：ガソリン約<strong>0.75</strong> → <strong>30,000L ≒ 22.5t</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>間仕切</th>
                  <td>内部を<strong>4,000L以下ごと</strong>に<strong>完全な間仕切</strong>で区画する。</td>
                  <td>各区画は独立扱い（後述のマンホール・安全装置も区画ごと）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！（容量・区画）</h3>
            <ul className={shared.compact}>
              <li><strong>総容量30,000L以下</strong> … 移動タンク貯蔵所全体の「上限値」。</li>
              <li><strong>4,000L以下ごとに完全間仕切</strong> … 1区画＝1タンク室として独立扱い。</li>
              <li>後続の区画・装備と合わせて<strong>「30,000L・4,000L・2,000L」</strong>の数字セットで覚える。</li>
            </ul>
          </div>

          <h3>区画ごとの装備</h3>
          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>区画ごとに必要な装備</h3>
            <ul className={shared.compact}>
              <li>間仕切で区画した<strong>各タンク室にマンホール</strong>を設ける。</li>
              <li>同じく<strong>各タンク室に安全装置</strong>を設ける。</li>
              <li><strong>容量が2,000L以上のタンク室</strong>には<strong>防波板</strong>を設ける。</li>
            </ul>
            <p>
              ※ 防波板：走行中の遠心力等で液体が片寄るのを防ぐ板である。一般に<strong>間仕切板は輪切り方向</strong>、<strong>防波板は縦方向</strong>に配置する。
            </p>
          </div>

          <h3>保護・防錆</h3>
          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>タンクの保護・防錆</h3>
            <ul className={shared.compact}>
              <li>移動貯蔵タンクには<strong>安全装置</strong>を設ける。</li>
              <li>タンクの保護のため、<strong>防護枠・側面枠</strong>を設ける。</li>
              <li>外面には<strong>さび止め（防錆）塗装</strong>を施す。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意（容量・装備）</h4>
            <ul className={shared.compact}>
              <li><strong>総容量30,000L以下</strong>を「20,000L以下」「25,000L以下」などに変えた選択肢に注意。</li>
              <li><strong>4,000L区画</strong>と<strong>2,000L防波板</strong>を入れ替えた数字ひっかけに要注意。</li>
              <li>
                防波板は<strong>すべてのタンク室</strong>ではなく「<strong>2,000L以上のタンク室</strong>だけ」に必要、という条件を落とさないこと。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 設備 */}
        <section className={shared.section}>
          <h2>設備</h2>
          <div className={shared.bandCard}>
            <p>
              ここからは、移動タンク貯蔵所に備え付けるべき<strong>各種設備</strong>
              （排出口・底弁・閉鎖装置、配管・電気設備、表示・標識、消火器など）の基準を整理する。
            </p>
            <p>
              事故が起きたときに、<strong>どこで危険物を止めるか・守るか・知らせるか・消すか</strong>をイメージしながら読むと、条文の意味がつかみやすく、得点源になりやすい分野である。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！（設備の全体像）</h3>
            <ul className={shared.compact}>
              <li><strong>排出口・底弁・閉鎖装置</strong> … 漏えい時に<strong>すばやく流れを止める</strong>しくみ。</li>
              <li><strong>配管・電気設備・静電気対策</strong> … <strong>漏えい・引火を防ぐ</strong>ための保護装備。</li>
              <li><strong>表示・標識</strong> … タンク内容物や危険性を<strong>周囲に知らせる</strong>ための表示。</li>
              <li><strong>消火器などの消火設備</strong> … 万一の火災に<strong>初期消火で対応する</strong>ための備え。</li>
            </ul>
            <p>
              ※ このあと出てくる表は、上の4グループ（止める／守る／知らせる／消す）に対応している。位置づけを意識しながら、個々の数字や用語を覚えていく。
            </p>
          </div>

          <h3>排出口・底弁・閉鎖装置</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">排出口・底弁・閉鎖装置</caption>
              <colgroup>
                <col className={styles.colOutletItem} />
                <col className={styles.colOutletStandard} />
                <col className={styles.colOutletSupplement} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">基準</th>
                  <th scope="col">補足</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>排出口</th>
                  <td>タンク下部に排出口を設ける場合は、当該<strong>排出口に底弁</strong>を設ける。</td>
                  <td>漏えい時に<strong>元から止める</strong>ための弁である。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>閉鎖装置</th>
                  <td>
                    <strong>非常時に直ちに底弁を閉鎖</strong>できる<strong>手動閉鎖装置</strong>および<strong>自動閉鎖装置</strong>を設ける。
                  </td>
                  <td><strong>手動＋自動の二重系</strong>で確実に遮断する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    手動閉鎖装置
                    <br />
                    の操作
                  </th>
                  <td>
                    手動閉鎖装置には<strong>レバー</strong>を設け、その<strong>直近に操作表示</strong>を掲示する。
                    <br />
                    レバーは<strong>手前に引き倒す</strong>ことで作動し、<strong>長さは15m以上</strong>とする。
                  </td>
                  <td>※ 長いレバーで、危険箇所から<strong>離れて操作</strong>できるイメージ。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント（排出口・底弁）</h4>
            <ul className={shared.compact}>
              <li><strong>排出口には必ず底弁</strong> … 漏えい時は「出口の元から止める」イメージ。</li>
              <li><strong>手動＋自動閉鎖装置</strong> … 非常時に確実に閉じる二重の安全網。</li>
              <li><strong>手前に引き倒すレバーが15m以上</strong> … 「引く・長いレバー」のセットで暗記。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>レバー操作は<strong>「押す」ではなく「手前に引き倒す」</strong>。方向を入れ替えるひっかけに注意。</li>
              <li><strong>15m以上</strong>はレバーの<strong>長さ</strong>の数字。他の設備の「距離」と取り違えないこと。</li>
            </ul>
          </div>

          <h3>配管・電気設備・静電気対策</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">配管・電気設備・静電気対策</caption>
              <colgroup>
                <col className={styles.colPlumbingItem} />
                <col className={styles.colPlumbingStandard} />
                <col className={styles.colPlumbingSupplement} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">基準</th>
                  <th scope="col">補足</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    配管の
                    <br />
                    端部
                  </th>
                  <td>移動貯蔵タンクの<strong>配管先端部に弁</strong>等を設ける。</td>
                  <td>末端での<strong>確実な遮断</strong>が目的である。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>電気設備</th>
                  <td>可燃性蒸気が滞留するおそれのある場所に設ける電気設備は、<strong>可燃性蒸気に引火しない構造</strong>とする。</td>
                  <td><strong>防爆構造</strong>にして火花着火を防ぐ。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    静電気
                    <br />
                    対策
                  </th>
                  <td>ガソリン、ベンゼン等の<strong>静電気災害のおそれがある液体</strong>を扱う場合は、<strong>接地導線</strong>を設ける。</td>
                  <td>荷役時の<strong>接地（アース）</strong>を徹底し、静電気火花を防止する。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意（配管・電気設備）</h4>
            <ul className={shared.compact}>
              <li><strong>配管先端部＝弁／タンク下部＝底弁</strong>。どこに付く弁かを取り違えないこと。</li>
              <li><strong>電気設備は「可燃性蒸気に引火しない構造」</strong>がキーワード。「防爆型にする」という意味で押さえる。</li>
              <li><strong>接地導線が必要なのは静電気災害のおそれがある液体</strong>。他の節の接地条件とごちゃ混ぜにしないこと。</li>
            </ul>
          </div>

          <h3>表示・標識</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">表示・標識</caption>
              <colgroup>
                <col className={styles.colSignItem} />
                <col className={styles.colSignStandard} />
                <col className={styles.colSignSupplement} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">基準</th>
                  <th scope="col">補足</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>表示設備</th>
                  <td>当該タンクが取り扱う<strong>危険物の類・品名・最大数量</strong>を<strong>見やすい箇所</strong>に表示する。</td>
                  <td>常時判別できる<strong>十分な大きさ・色の対比</strong>で掲示する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>標識</th>
                  <td><strong>地黒の板</strong>に<strong>黄色の反射塗料等で「危」</strong>と表示する。</td>
                  <td><strong>車両の前後</strong>の見やすい位置に掲げる。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>消防用設備（消火器）</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">消防用設備（消火器）</caption>
              <colgroup>
                <col className={styles.colFireExtinguishing} />
                <col className={styles.colFireEquipment} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">消火設備</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>設置</th>
                  <td>
                    <strong>自動車用消火器のうち粉末消火器</strong>（<strong>充てん量3.5kg以上</strong>）またはその他の消火器を<strong>2個以上設置</strong>する。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！（表示・標識・消火器）</h4>
            <ul className={shared.compact}>
              <li><strong>表示設備</strong>は<strong>類・品名・最大数量</strong>を<strong>見やすい場所に明示</strong>するセットで覚える。</li>
              <li><strong>標識</strong>は<strong>黒地の板＋黄色反射の「危」＋車両前後</strong>の組み合わせをワンセットで暗記。</li>
              <li><strong>消防用設備</strong>は<strong>粉末消火器3.5kg以上 × 2個以上</strong>の数字を押さえる。</li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 4. 貯蔵の基準 */}
        <section className={shared.section}>
          <h2>貯蔵の基準</h2>
          <div className={shared.bandCard}>
            <p>
              ここでは、移動タンク貯蔵所に危険物を<strong>貯蔵しているときのルール</strong>を整理する。漏えいの防止、底弁の取扱い、積替えの禁止などは、いずれも<strong>事故を「起こさない」「広げない」ための基本</strong>である。条文を丸暗記するよりも、<strong>どんな事故を防ぎたいのか</strong>をイメージしながら確認していく。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>漏えいの防止</strong>：タンク本体・配管・安全装置の<strong>損傷や劣化がないか点検</strong>し、異常があれば<strong>すぐ使用を中止</strong>する。
              </li>
              <li>
                <strong>底弁の管理</strong>：<strong>使用時以外は完全に閉鎖</strong>しておくのが原則。誤操作や事故時の<strong>流出防止</strong>が狙い。
              </li>
              <li>
                <strong>積替えの禁止</strong>：積載式以外の移動タンク貯蔵所では、危険物を<strong>貯蔵したまま積替えしない</strong>ことが基本。漏えい・静電気事故を防ぐためのルール。
              </li>
            </ul>
            <p>
              ※ 「<strong>漏えい防止</strong>」「<strong>底弁閉鎖</strong>」「<strong>積替え禁止</strong>」の3点セットが、貯蔵時の基本ルールである。
            </p>
          </div>

          <h3>貯蔵時の取扱い基準</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">貯蔵時の取扱い基準</caption>
              <colgroup>
                <col className={styles.colHandlingItem} />
                <col className={styles.colHandlingStandard} />
                <col className={styles.colHandlingPurpose} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">基準</th>
                  <th scope="col">補足・目的</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    漏えいの
                    <br />
                    防止
                  </th>
                  <td>
                    移動貯蔵タンクおよび<strong>安全装置・配管</strong>は、<strong>裂け目</strong>、結合不良、極端な変形、<strong>注入ホースの切損</strong>等により漏れが生じないように適切に<strong>維持管理</strong>する。
                  </td>
                  <td>定期的に点検・整備を行い、異常の兆候があれば直ちに使用を中止する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    底弁の
                    <br />
                    管理
                  </th>
                  <td><strong>底弁</strong>は<strong>使用時以外は完全に閉鎖</strong>しておく。</td>
                  <td>誤操作や事故時の大量流出を防止する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    積替えの
                    <br />
                    禁止
                  </th>
                  <td>
                    <strong>積載式以外</strong>の移動タンク貯蔵所では、危険物を<strong>貯蔵した状態のまま積替え</strong>を行ってはならない。
                  </td>
                  <td>移送中の漏えい・静電気事故を防止する。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>移動タンク貯蔵所に備え付ける書類</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">備付書類の一覧</caption>
              <colgroup>
                <col className={styles.colDocumentItem} />
                <col className={styles.colDocumentList} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">備付書類の一覧</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>完成検査証</th>
                  <td>完成時に受検した検査の結果を示す書類である。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>定期点検記録</th>
                  <td>定期点検の実施状況や結果を記録したものである。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    譲渡／引渡の
                    <br />
                    届出書
                  </th>
                  <td>所有者や使用者に変更があった場合に提出する届出書である。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    品名／数量等の
                    <br />
                    変更届
                  </th>
                  <td>危険物の<strong>品名／数量</strong>または<strong>指定数量の倍数</strong>に変更がある場合に提出する届出書である。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                積替えのルールは<strong>「積載式以外では積替え不可」</strong>。選択肢では<strong>「積載式はOK」</strong>との対比で問われやすいので、セットで覚える。
              </li>
              <li><strong>底弁は平常時は閉鎖</strong>（使用時だけ開ける）という運用ルールがよく狙われる。</li>
              <li>
                漏えい要因の語句<strong>「裂け目／結合不良／変形／注入ホースの切損」</strong>は並びそのものがひっかけになる。<strong>言い換え・抜け・入れ替え</strong>に注意。
              </li>
              <li>
                備付書類は<strong>完成検査証／定期点検記録／譲渡・引渡の届出書／品名・数量等の変更届</strong>の<strong>4種類セット</strong>として暗記しておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 5. 取り扱いの基準 */}
        <section className={shared.section}>
          <h2>取り扱いの基準</h2>
          <div className={shared.bandCard}>
            <p>
              ここでは、移動タンク貯蔵所から危険物を<strong>注入・詰め替え・荷卸し</strong>するときのルールをまとめる。静電気対策やエンジン停止、荷卸し時の立会いなどは、いずれも<strong>作業中の火災・爆発を防ぐための運用ルール</strong>である。「なぜその操作が必要なのか」をイメージしながら、条文の流れで確認していく。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>注入作業では、<strong>ホースを注入口側に確実に接続</strong>し、緊締具で<strong>離れないように固定</strong>するのが基本である。</li>
              <li>
                容器の<strong>直接詰め替えは原則禁止</strong>で、認められるのは条件付きの<strong>例外パターン</strong>だけ、という構図を押さえる。
              </li>
              <li>荷卸し中は<strong>エンジン停止＋立会い義務＋静電気対策</strong>の3点セットで「着火源と帯電を断つ」イメージで覚えておく。</li>
            </ul>
          </div>

          <h3>注入時の基本</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">注入時の基本</caption>
              <colgroup>
                <col className={styles.colInjectionItem} />
                <col className={styles.colInjectionList} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">注入時の具体的な作業方法</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    ホースの
                    <br />
                    接続
                  </th>
                  <td>移動貯蔵タンクから他のタンクへ危険物を注入するときは、注入ホースを<strong>注入口に緊結</strong>して行う。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>用語</th>
                  <td>※ 緊結：留め具等を用いて<strong>離れないように確実に結合</strong>することをいう。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>ホースは必ず「注入口に緊結」</strong>。差し込むだけ・手で押さえるだけはNGである。</li>
              <li><strong>緊結＝離れないように固定</strong>すること。用語ごとセットで覚えておく。</li>
            </ul>
          </div>

          <h3>容器への直接詰め替え（原則と例外）</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">容器への直接詰め替え（原則と例外）</caption>
              <colgroup>
                <col className={styles.colPrinciple} />
                <col className={styles.colException} />
                <col className={styles.colScope} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>原則</th>
                  <th scope="col">例外の趣旨</th>
                  <th scope="col">適用範囲</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    原則として
                    <br />
                    直接の詰め替えは
                    <br />
                    行わない。
                  </th>
                  <td>安全確保のため、<strong>一定の条件をすべて満たす場合に限り</strong>容認される。</td>
                  <td>移動貯蔵タンク → <strong>運搬容器</strong> への充填</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>詰め替えの条件</h3>
          <p>以下の<strong>4つすべて</strong>を満たしていることが、直接詰め替えを認める条件である。</p>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <ol className={styles.orderedCompact}>
              <li>安全な注入に支障がない程度の<strong>適切な注入速度</strong>で行う。</li>
              <li>
                注入ホース先端部に<strong>手動開閉装置付き注入ノズル</strong>を用いる。
                <br />
                ※ 手動開閉装置を<strong>開放状態で固定</strong>する装置が付いているものは使用しない。
              </li>
              <li>詰め替える容器は、<strong>運搬容器の技術上の基準</strong>に適合するものを使用する。</li>
              <li>詰め替える危険物は<strong>第4類で引火点40℃以上</strong>とする。</li>
            </ol>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「原則として行わない」</strong>がスタート。<strong>運搬容器への充填＋4条件すべて</strong>を満たしたときだけ例外として許される。
              </li>
              <li>
                条件は<strong>①注入速度 ②手動ノズル ③容器の基準適合 ④第4類・引火点40℃以上</strong>の4点セットで覚える。
              </li>
              <li>引火点<strong>40℃未満</strong>や、<strong>開放状態で固定するノズル</strong>は典型的な誤答パターンである。</li>
            </ul>
          </div>

          <h3>静電気対策・接地・上部注入</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">静電気対策・接地・上部注入</caption>
              <colgroup>
                <col className={styles.colStaticElectricity} />
                <col className={styles.colStaticStandard} />
                <col className={styles.colStaticSupplement} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">基準</th>
                  <th scope="col">補足</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>接地</th>
                  <td>
                    ガソリン・ベンゼン等の<strong>静電気災害のおそれがある液体</strong>の入出時には、移動貯蔵タンクを<strong>確実に接地</strong>する。
                  </td>
                  <td>導線により受入側の<strong>接地電極等と確実に緊結</strong>する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    上部からの
                    <br />
                    注入
                  </th>
                  <td>上部から注入するときは<strong>注入管</strong>を用い、その<strong>先端をタンク底部に接触</strong>させる。</td>
                  <td>流下時の<strong>帯電や霧化</strong>を抑制する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>油種変更時</th>
                  <td>ガソリンと灯油・軽油などに切り替える場合は、<strong>静電気等の災害防止措置</strong>を講じる。</td>
                  <td>残留燃料や蒸気の影響に十分留意する。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>エンジン停止の要件</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">エンジン停止の要件</caption>
              <colgroup>
                <col className={styles.colEngineStopped} />
                <col className={styles.colStoppedCondition} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">エンジン停止の要件</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>対象</th>
                  <td>移動貯蔵タンクから<strong>引火点40℃未満</strong>の危険物を他のタンクに注入するとき</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>措置</th>
                  <td>移動タンク貯蔵所の<strong>エンジンを停止</strong>する。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>荷卸し時の立会いと確認</h3>
          <div className={shared.bandCard}>
            <p>
              荷卸し作業では、<strong>受け入れ側と移動タンク貯蔵所の双方が内容を確認しながら</strong>作業を進める。油種の取り違えや容量オーバーは重大事故に直結するため、<strong>立会いと事前確認</strong>が重要なポイントである。
            </p>
            <ul className={shared.compact}>
              <li>受け入れ側の事業者と移動タンク貯蔵所の<strong>双方の危険物取扱者</strong>が立ち会う。</li>
              <li>受け入れタンクの<strong>油種</strong>を確認する。</li>
              <li><strong>注入口</strong>の位置・表示を確認する。</li>
              <li>残油量（タンク内の<strong>空間容量</strong>）を確認する。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                静電気対策は<strong>接地＋上部注入時の底部接触＋油種変更時の措置</strong>の「<strong>3点セット</strong>」で押さえる。
              </li>
              <li>
                エンジン停止の対象は<strong>引火点40℃未満</strong>の危険物。「40℃以上」と取り違えないようにする。
              </li>
              <li>
                荷卸し時の確認は<strong>双方の危険物取扱者＋油種＋注入口＋残油量</strong>の「<strong>4点確認</strong>」が基本である。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>接地は「軽く触れていればよい」ではなく、<strong>接地電極等と確実に緊結</strong>していることが条件である。</li>
              <li>
                上部注入は<strong>注入管の先端をタンク底部に接触</strong>させるのがポイント。「上からそのまま注ぐ」イメージの選択肢は誤りである。
              </li>
              <li>
                荷卸しの立会いは<strong>受け入れ側だけ／移動タンク側だけ</strong>では×。必ず<strong>双方の危険物取扱者</strong>が登場する選択肢を選ぶ。
              </li>
              <li>
                エンジン停止は<strong>荷卸し作業のたびに常に</strong>ではなく、条件は<strong>「引火点40℃未満を他タンクに注入」</strong>のときである。
              </li>
            </ul>
          </div>
        </section>

        {/* 6. 移送の基準 */}
        <section className={shared.section}>
          <h2>移送の基準</h2>
          <div className={shared.bandCard}>
            <p>
              ここでは、移動タンク貯蔵所で危険物を<strong>道路上などに運ぶときのルール</strong>をまとめる。誰が乗車するか、どんな書類を持つか、どこで停止し、どのように点検・通報するかといった<strong>運転中の安全運用ルール</strong>がポイントである。「移送」と「運搬」の違いは、試験でもよく問われる用語なので、最初に整理してから読み進める。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>移送</strong>＝タンクローリーなどの移動タンク貯蔵所で危険物を運ぶ行為。<strong>運搬</strong>＝ドラム缶などの<strong>容器に入れた危険物</strong>を車両で運ぶ行為である。
              </li>
              <li>この節は<strong>走行中の安全ルール</strong>がテーマ（乗車できる人・携行する書類・停止場所・点検や通報のしかた）を押さえる。</li>
              <li>
                覚えるときは<strong>「誰が責任を持つか」</strong>と<strong>「車両がどんな状態のときに何をしてよい／いけないか」</strong>の2つの切り口で整理する。
              </li>
            </ul>
          </div>

          <h3>用語の整理（移送／運搬）</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">用語の整理（移送／運搬）</caption>
              <colgroup>
                <col className={styles.colWord} />
                <col className={styles.colTransportDefinition} />
                <col className={styles.colExample} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>用語</th>
                  <th scope="col">定義</th>
                  <th scope="col">例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>移送</strong></th>
                  <td><strong>移動タンク貯蔵所（タンクローリー等）</strong>により危険物を運ぶ行為をいう。</td>
                  <td>タンクローリーでの配送</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>運搬</strong></th>
                  <td>ドラム缶等の<strong>容器に収容した危険物</strong>を自動車等で運ぶ行為をいう。</td>
                  <td>ドラム缶での輸送</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>移送＝タンクローリー</strong>などの移動タンク貯蔵所で運ぶ行為。</li>
              <li><strong>運搬＝容器に入れた危険物</strong>（ドラム缶等）を車両で運ぶ行為。</li>
              <li>
                本試験では<strong>「移送」と「運搬」を入れ替えた肢</strong>が定番のひっかけである。
                <br />
                「<strong>移送＝ローリー／運搬＝容器</strong>」のセットで覚えておく。
              </li>
            </ul>
          </div>

          <h3>乗車義務・携帯義務</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">乗車義務・携帯義務</caption>
              <colgroup>
                <col className={styles.colDutyItem} />
                <col className={styles.colDutyStandard} />
                <col className={styles.colDutySupplement} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">基準</th>
                  <th scope="col">補足</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    危険物取扱者
                    <br />
                    の乗車
                  </th>
                  <td>移送の際は、当該危険物を取り扱うことができる<strong>危険物取扱者を乗車</strong>させる。</td>
                  <td><strong>指定数量未満でも</strong>、危険物取扱者の乗車が必要である。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>免状の携帯</th>
                  <td>
                    危険物取扱者は、移送に従事して<strong>乗車している間</strong>、<strong>危険物取扱者免状を携帯</strong>する。
                  </td>
                  <td>条文のフレーズ「<strong>移送に従事して乗車している間</strong>」をそのまま覚えておく。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                乗車義務は<strong>指定数量以上に限られない</strong>。「<strong>指定数量未満でも取扱者が乗る</strong>」が正解である。
              </li>
              <li>
                免状の携帯義務は「<strong>移送に従事して乗車している間</strong>」がキーワード。
                <br />
                「走行中のみ」「移送開始時のみ」などと書き換えられていたら<strong>ひっかけ</strong>と疑う。
              </li>
            </ul>
          </div>

          <h3>出発前の点検</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">出発前の点検</caption>
              <colgroup>
                <col className={styles.colDepartureInspection} />
                <col className={styles.colInspectionNote} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>項目</th>
                  <th scope="col">出発前の点検</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>点検対象</th>
                  <td><strong>底弁等の弁</strong>、マンホールおよび注入口のふた、<strong>消火器</strong>等を点検する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>留意点</th>
                  <td>いずれも<strong>確実に閉止・装備</strong>されていること、損傷や漏えいの兆候がないことを確認する。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                出発前点検のセットは<strong>底弁等の弁／マンホール／注入口のふた／消火器</strong>。どれか1つを<strong>別の設備に入れ替えるひっかけ</strong>に注意する。
              </li>
            </ul>
          </div>

          <h3>長時間にわたるおそれがある移送と要員確保</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">長時間にわたるおそれがある移送と要員確保</caption>
              <colgroup>
                <col className={styles.colTransferJudgment} />
                <col className={styles.colTransferCondition} />
                <col className={styles.colTransferMeasures} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>判定</th>
                  <th scope="col">要件</th>
                  <th scope="col">措置</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    長時間移送に
                    <br />
                    該当
                  </th>
                  <td>
                    ① <strong>連続運転時間が4時間超</strong>
                    <br />
                    または ② <strong>1日あたりの運転時間が9時間超</strong>となる見込みの場合に、
                    <br />
                    「<strong>長時間にわたるおそれがある移送</strong>」に該当する。
                  </td>
                  <td><strong>2名以上の運転要員</strong>を確保する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>用語</th>
                  <td>
                    ※ <strong>連続運転時間</strong>：休止（<strong>1回10分以上</strong>）をはさまず、合計30分以上の休止も取らずに継続して運転する時間を指す。
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>4時間超／9時間超／運転要員2名以上</strong>の<strong>「数字＋人数セット」</strong>で丸暗記しておく。</li>
              <li>
                問題文では「長時間にわたるおそれがある移送」とだけ書いて、<strong>具体的な時間の数値</strong>を選ばせるひっかけが多い。
              </li>
            </ul>
          </div>

          <h3>停止場所・緊急時の措置</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">停止場所・緊急時の措置</caption>
              <colgroup>
                <col className={styles.colEmergencyScene} />
                <col className={styles.colEmergencyStandard} />
                <col className={styles.colEmergencyReport} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>場面</th>
                  <th scope="col">基準</th>
                  <th scope="col">通報等</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    一時停止
                    <br />
                    （休憩・故障等）
                  </th>
                  <td><strong>安全な場所</strong>を選んで停止する。</td>
                  <td>周囲の<strong>火気・交通・地形</strong>を考慮して停止位置を選ぶ。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>著しい漏えい等</th>
                  <td>災害のおそれがある場合は、直ちに<strong>応急措置</strong>を講じる。</td>
                  <td>状況を確認し、速やかに<strong>消防機関等に通報</strong>する。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                休憩・故障などの<strong>一時停止でも「安全な場所」</strong>がキーワード。「路肩ならどこでもよい」などの選択肢は誤りである。
              </li>
              <li>
                <strong>著しい漏えい等＝応急措置＋消防機関への通報</strong>のセット。どちらか片方だけの記述はひっかけにされやすいので注意。
              </li>
            </ul>
          </div>

          <h3>特定危険物の移送（経路届・携帯）</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">特定危険物の移送（経路届・携帯）</caption>
              <colgroup>
                <col className={styles.colTransferSubject} />
                <col className={styles.colTransferProcedure} />
                <col className={styles.colTransferItems} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>対象</th>
                  <th scope="col">手続</th>
                  <th scope="col">遵守事項</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    <strong>
                      アルキル
                      <br />
                      アルミニウム等
                    </strong>
                  </th>
                  <td>
                    <strong>移送の経由等を記載した書面</strong>を<strong>関係消防機関へ送付</strong>し、その<strong>写しを携帯</strong>する。
                  </td>
                  <td>書面に記載された<strong>経由・日時等</strong>の内容どおりに移送する。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>対象はアルキルアルミニウム等</strong>であること。</li>
              <li>
                <strong>経路等を記載した書面を消防機関に送付</strong>し、<strong>その写しを携帯</strong>するまでがワンセット。「送付のみ」「携帯のみ」は誤りである。
              </li>
              <li>実際の移送は、書面に記載された<strong>経由・日時</strong>どおりに行う点もひっかけ選択肢で問われやすい部分である。</li>
            </ul>
          </div>

          <h3>取締り・確認</h3>
          <div className={shared.bandCard}>
            <p>
              消防吏員または警察官は、火災予防上必要があると認めるときは、走行中の<strong>移動タンク貯蔵所を停止</strong>させ、乗車している危険物取扱者に<strong>危険物取扱者免状の提示</strong>を求めることができる。
            </p>
            <p>※ <strong>吏員（りいん）</strong>：消防本部・消防署などに勤務する公共団体の職員（地方公務員）を指す。</p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>停止させる権限を持つのは「消防吏員または警察官」</strong>であること。</li>
              <li>対象は<strong>走行中の移動タンク貯蔵所</strong>である点に注意。駐車中などと取り違えないようにする。</li>
              <li>
                求められるのは<strong>危険物取扱者免状の提示</strong>。乗車中の<strong>携帯義務</strong>とセットで、ひっかけ選択肢になりやすい箇所である。
              </li>
            </ul>
          </div>
        </section>

        {/* 7. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <MobileTankStorageStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}