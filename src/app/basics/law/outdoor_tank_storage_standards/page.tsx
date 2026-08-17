import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import OutdoorTankStorageStandardsQuiz from './OutdoorTankStorageStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 24節：屋外タンク貯蔵所の基準',
  description:
    '危険物乙4 第1章24節。屋外タンク貯蔵所の位置・構造・設備の基準を解説。敷地内距離、タンクの区分と適用範囲、装置・配管の基準、防油堤の容量・高さ・構造、二硫化炭素タンクの特例を表で整理。試験に出るポイントもまとめている。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/outdoor_tank_storage_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 24節：屋外タンク貯蔵所の基準',
    description:
      '危険物乙4 第1章24節。屋外タンク貯蔵所の位置・構造・設備の基準を解説。敷地内距離、タンクの区分と適用範囲、装置・配管の基準、防油堤の容量・高さ・構造、二硫化炭素タンクの特例を表で整理。試験に出るポイントもまとめている。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/outdoor_tank_storage_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 24節：屋外タンク貯蔵所の基準',
    description:
      '危険物乙4 第1章24節。屋外タンク貯蔵所の位置・構造・設備の基準を解説。敷地内距離、タンクの区分と適用範囲、装置・配管の基準、防油堤の容量・高さ・構造、二硫化炭素タンクの特例を表で整理。試験に出るポイントもまとめている。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function OutdoorTankStorageStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '24節：屋外タンク貯蔵所の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 位置 */}
        <section className={shared.section}>
          <h2>位置</h2>
          <div className={shared.bandCard}>
            <p>
              屋外タンク貯蔵所では、他の施設と異なり<strong>敷地内距離</strong>を必ず確保しなければならない。目的は、火災時にタンクが受けた熱や炎が周囲の敷地や建物へ<strong>延焼するのを防ぐこと</strong>である。
            </p>
            <p>
              敷地内距離とは、タンクの<strong>側板</strong>から<strong>事業所の敷地境界線</strong>まで最低限あけておくべき距離のことである。この距離は、<strong>タンクの区分</strong>と<strong>貯蔵する危険物の引火点区分</strong>によって決まる。どのくらい離せばよいかは、次の表で整理して確認する。
            </p>
          </div>
        </section>

        {/* 2. 構造・設備 */}
        <section className={shared.section}>
          <h2>構造・設備</h2>
          <div className={shared.bandCard}>
            <p>
              屋外貯蔵タンクの<strong>構造・設備の基準</strong>は、タンクの<strong>規模が大きくなるほど厳しく</strong>なる。とくに容量の大きいタンクでは、万一事故が起きたときの影響が大きいため、基礎・地盤の仕様や各種試験について<strong>より厳格な基準</strong>が定められている。
            </p>
            <p>
              どの区分のタンクに、どの程度の基準が適用されるかは、このあとの<strong>「屋外貯蔵タンク（区分と適用範囲）」の表</strong>で確認していく。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>屋外タンク貯蔵所は、<strong>大量の危険物をタンクで貯蔵する専用スペース</strong>。</li>
              <li>
                位置の基準では、<strong>タンク側板から敷地境界線までの距離</strong>を意味する<strong>敷地内距離</strong>がキーワード。
              </li>
              <li>敷地内距離は、<strong>タンクの区分</strong>と<strong>危険物の引火点区分</strong>の組み合わせで決まる。</li>
              <li>
                構造・設備の基準は、<strong>タンク容量が大きいほど厳しく</strong>なる。基礎・地盤、防油堤（防液堤）、試験などがセットで問われやすい。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 屋外貯蔵タンク（区分と適用範囲） */}
        <section className={shared.section}>
          <h2>屋外貯蔵タンク（区分と適用範囲）</h2>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">屋外貯蔵タンクの区分と、より厳格な基準が適用される容量範囲</caption>
              <colgroup>
                <col className={styles.colStorage} />
                <col className={styles.colStandards} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>屋外貯蔵所の種類</th>
                  <th scope="col">適用される基準の対象</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>特定屋外貯蔵タンク</strong></th>
                  <td>
                    貯蔵・取り扱う液体危険物の<strong>最大数量</strong>が
                    <span className={styles.rangeBadge}>1,000kL以上</span>
                    のもの
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>準特定屋外貯蔵タンク</strong></th>
                  <td>
                    貯蔵・取り扱う液体危険物の<strong>最大数量</strong>が
                    <span className={styles.rangeBadge}>500kL以上</span>〜
                    <span className={styles.rangeBadge}>1,000kL未満</span>
                    のもの
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                屋外タンク貯蔵所では、<strong>敷地内距離</strong>と（別の節で学ぶ）<strong>保安距離</strong>の違いを整理しておく。
              </li>
              <li>
                敷地内距離は<strong>「タンクの区分 × 引火点区分」</strong>の表から出題されやすい。どこからどこまでを測るか（側板から敷地境界）とあわせて覚える。
              </li>
              <li>
                構造・設備では、<strong>基礎・地盤の安全性</strong>、<strong>防油堤</strong>、<strong>非常用遮断設備</strong>などが代表的な出題ネタ。
              </li>
              <li>「タンクの容量が大きくなるほど、要求される試験や構造が増える」という方向性を押さえておくと、個々の条文も理解しやすい。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>敷地内距離を設けなくてもよい</strong>」とする記述はほぼ誤り。屋外タンク貯蔵所では、敷地内距離を<strong>必ず確保する</strong>のが原則。
              </li>
              <li>
                敷地内距離を<strong>タンクの中心から</strong>測るような書き方はひっかけ。正しくはタンクの<strong>側板から敷地境界線まで</strong>の距離をとる。
              </li>
              <li>
                「タンクの容量が大きくなるほど基準が緩くなる」という記述も×。容量が大きいほど<strong>構造・試験の基準は厳しく</strong>なるイメージで覚える。
              </li>
              <li>
                防油堤（防液堤）について、「設けなくてもよい」と読める文章も要注意。大容量タンクでは、流出した危険物を囲い込む設備が<strong>重要な安全対策</strong>になる。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. 装置・配管の基準 */}
        <section className={shared.section}>
          <h2>装置・配管の基準</h2>
          <div className={shared.bandCard}>
            <p>
              屋外タンク貯蔵所では、タンク本体だけでなく<strong>装置や配管にも安全のための基準</strong>が決められている。代表的なポイントは次のとおりである。
            </p>
            <ul className={shared.compact}>
              <li>
                <strong>圧力タンク以外</strong>のタンクには、内容物の膨張や温度変化に対応するため<strong>通気管</strong>を設ける。
              </li>
              <li>
                <strong>圧力タンク</strong>には、内圧の異常な上昇に備えて<strong>安全装置</strong>（安全弁など）を設ける。
              </li>
              <li>
                <strong>通気管の先端</strong>は、水平より<strong>下向きに45°以上</strong>折り曲げて、雨水の侵入を防ぐ構造とする。
              </li>
              <li>
                <strong>静電気災害のおそれのある液体</strong>（例：ガソリン、ベンゼンなど）を扱う場合は、<strong>注入口付近</strong>に<strong>接地電極（静電気除去用）</strong>を設置する。
              </li>
              <li>
                <strong>指定数量の倍数が10以上</strong>の屋外タンク貯蔵所では、原則として<strong>避雷設備</strong>を設ける。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 5. 防油堤の基準 */}
        <section className={shared.section}>
          <h2>防油堤の基準</h2>
          <div className={shared.bandCard}>
            <p>
              対象：<strong>液体の危険物（二硫化炭素を除く）</strong>を扱う屋外貯蔵タンクの周囲に設ける、<strong>油の漏えいを囲い込むための堤（防油堤）</strong>に関する基準である。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">防油堤の仕様（容量・寸法・材質・排水・出入り）</caption>
              <colgroup>
                <col className={styles.colLabel} />
                <col className={styles.colBody} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>仕様</th>
                  <th scope="col">防油堤に関する基準</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>容量</th>
                  <td>
                    <ul>
                      <li>
                        単一タンクのみの場合：防油堤の容量はタンク容量の
                        <span className={styles.rangeBadge}>110%以上</span>
                        とする。
                      </li>
                      <li>
                        非引火性危険物のみを扱うときは
                        <span className={styles.rangeBadge}>100%以上</span>
                        でよい。
                      </li>
                      <li>
                        複数タンクがある場合：防油堤の容量は最大タンク容量の
                        <span className={styles.rangeBadge}>110%以上</span>
                        とする。
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>高さ・面積</th>
                  <td>
                    堤の高さは
                    <span className={styles.rangeBadge}>0.5m以上</span>
                    とし、防油堤で囲まれた堤内面積は
                    <span className={styles.rangeBadge}>80,000㎡以下</span>
                    におさえる。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>材質・構造</th>
                  <td>
                    <strong>鉄筋コンクリート又は土</strong>で造り、外側へ油がしみ出さない<strong>漏えい防止構造</strong>とする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>排水</th>
                  <td>
                    清掃や雨水排出用に<strong>水抜口</strong>を設け、その<strong>開閉弁は堤の外部</strong>に設けて操作できるようにする。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>出入り</th>
                  <td>
                    高さ
                    <span className={styles.rangeBadge}>1m</span>
                    をこえる防油堤などでは、おおむね
                    <span className={styles.rangeBadge}>30m</span>
                    ごとに<strong>階段</strong>を設けるか、<strong>盛土</strong>等で安全に出入りできるようにする。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>複数タンクがある防油堤の容量</strong>は、<strong>「最大タンク容量 × 1.1（＝110%）」</strong>で求める。
              </li>
              <li>
                例）タンクA 2,000 L、タンクB 1,500 L の場合、最大はAなので2,000 × 1.1 = <strong>2,200 L</strong> … この<strong>2,200 L以上</strong>が、防油堤に必要な最低容量となる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>防油堤の容量はタンク容量の100%以上でよい</strong>」という選択肢は原則×。<strong>非引火性危険物のみ</strong>を扱う場合だけ100%以上、それ以外は<strong>110%以上</strong>が原則になる。
              </li>
              <li>
                「堤の高さは0.3m以上」「堤内面積の上限は50,000㎡以下」など、<strong>0.5m・80,000㎡</strong>以外の数値が出てきたら要注意。
              </li>
            </ul>
          </div>
        </section>

        {/* 6. 特例：二硫化炭素タンク */}
        <section className={shared.section}>
          <h2>特例：二硫化炭素タンク</h2>
          <div className={shared.bandCard}>
            <p>
              二硫化炭素（CS<sub>2</sub>）を貯蔵するタンクは、防油堤ではなく<strong>水槽で囲う特例構造</strong>が要求される。
            </p>
            <p>二硫化炭素タンクに必要な構造は次のとおりである。</p>
            <ul className={shared.compact}>
              <li>
                <strong>厚さ0.2m以上の壁</strong>をもつ、<strong>水漏れのない鉄筋コンクリート製の水槽</strong>を設ける。
              </li>
              <li>その水槽内にタンクを<strong>入れて水没</strong>させておく。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                防油堤の基準がかかるのは、<strong>液体の危険物（「二硫化炭素」は除く）</strong>の屋外貯蔵タンク。二硫化炭素だけは<strong>別枠の特例</strong>である。
              </li>
              <li>
                二硫化炭素は<strong>比重・蒸気比重が1より大きい</strong>うえ、<strong>水に溶けにくい（非水溶性）</strong>。
              </li>
              <li>
                タンクが破損しても、液体は水より重いため水槽内に<strong>沈み込み</strong>、水面がふたとなって<strong>蒸気の発生・拡散を抑える</strong>狙いがある。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「<strong>二硫化炭素にも防油堤の基準がそのまま適用される</strong>」という選択肢は誤り。</li>
              <li>
                「二硫化炭素タンクは、防油堤で囲む」と書かれていたら×。正しくは<strong>水槽内にタンクを入れて水没させる</strong>構造になる。
              </li>
            </ul>
          </div>
        </section>

        {/* 7. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <OutdoorTankStorageStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}