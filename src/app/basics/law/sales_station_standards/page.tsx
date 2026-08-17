import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SalesStationStandardsQuiz from './SalesStationStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 32節：販売取扱所の基準',
  description:
    '危険物乙4 第1章32節。販売取扱所の基準を整理。第一種・第二種の数量区分（倍数15以下／15超え40以下）、店舗構造の耐火要件、配合室の面積（6㎡以上10㎡以下）・床の3要件・敷居高さ、容器入り販売の原則を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/sales_station_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 32節：販売取扱所の基準',
    description:
      '危険物乙4 第1章32節。販売取扱所の基準を整理。第一種・第二種の数量区分（倍数15以下／15超え40以下）、店舗構造の耐火要件、配合室の面積（6㎡以上10㎡以下）・床の3要件・敷居高さ、容器入り販売の原則を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/sales_station_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 32節：販売取扱所の基準',
    description:
      '危険物乙4 第1章32節。販売取扱所の基準を整理。第一種・第二種の数量区分（倍数15以下／15超え40以下）、店舗構造の耐火要件、配合室の面積（6㎡以上10㎡以下）・床の3要件・敷居高さ、容器入り販売の原則を教科書的に確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SalesStationStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '32節：販売取扱所の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 構造・設備の概要 */}
        <section className={shared.section}>
          <h2>構造・設備の概要</h2>
          <div className={shared.bandCard}>
            <p>
              販売取扱所は、指定数量の倍数が<strong>15以下</strong>のものを<strong>第一種</strong>とし、指定数量の倍数が<strong>15を超え40以下</strong>のものを<strong>第二種</strong>と区分する。
            </p>
            <p>※ 構造及び設備の基準は次のとおりである。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>数量区分</strong>：指定数量の倍数が<strong>15以下＝第一種</strong>、<strong>15を超え40以下＝第二種</strong>の販売取扱所。
              </li>
              <li>
                <strong>共通基準の意味</strong>：条文に「共通」とあれば、第一種・第二種の<strong>どちらにも適用</strong>される基準。
              </li>
              <li>
                <strong>第二種の方が厳しい</strong>：屋根までの<strong>耐火構造</strong>が原則で、窓も<strong>延焼のおそれのない部分に限定</strong>されるなど、第二種の方が構造・設備要件が重い。
              </li>
            </ul>
          </div>

          <h3>販売取扱所の構造および設備</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">販売取扱所の構造および設備</caption>
              <colgroup>
                <col className={styles.colHandlingOffice} />
                <col className={styles.colOverview} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>取扱所</th>
                  <th scope="col">概要</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>共通</th>
                  <td>
                    <ol className={styles.orderedCompact}>
                      <li>
                        第一種および第二種販売取扱所（店舗）は、<strong>建築物の1階</strong>に設置すること。
                      </li>
                      <li>
                        窓または出入口にガラスを用いる場合は、<strong>網入りガラス</strong>とすること。
                      </li>
                      <li>
                        店舗部分の電気設備で、可燃性ガス等が滞留するおそれのある場所に設置する機器は、<strong>防爆構造</strong>としなければならない。
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第一種</th>
                  <td>
                    <ol className={styles.orderedCompact}>
                      <li>
                        店舗部分や配合室の壁は<strong>準耐火構造</strong>とし、また、店舗部分（配合室を含む）とその他の部分との<strong>隔壁は耐火構造</strong>とすること。
                      </li>
                      <li>
                        店舗部分の<strong>はりは不燃材料</strong>で造り、天井を設ける場合は、<strong>天井も不燃材料</strong>で造ること。
                      </li>
                      <li>
                        店舗部分に上階がある場合は上階の床を<strong>耐火構造</strong>とし、上階がない場合は<strong>屋根を耐火構造または不燃材料</strong>で造ること。
                      </li>
                      <li>
                        店舗部分の<strong>窓および出入口には防火設備</strong>を設けること。
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>第二種</th>
                  <td>
                    <ol className={styles.orderedCompact}>
                      <li>
                        壁・柱・床およびはりを<strong>耐火構造</strong>とし、天井を設ける場合はこれを<strong>不燃材料</strong>で造ること。
                      </li>
                      <li>
                        店舗部分に上階がある場合は上階の床を<strong>耐火構造</strong>とし、上階がない場合は<strong>屋根を耐火構造</strong>で造ること。
                      </li>
                      <li>
                        店舗部分の<strong>延焼のおそれのない部分に限り窓を設けることができ</strong>、その窓には<strong>防火設備</strong>を設けること。
                      </li>
                      <li>
                        店舗部分の出入口には<strong>防火設備</strong>を設けること。ただし、店舗部分のうち延焼のおそれのある壁またはその部分に設けられる出入口には、随時開放することができる<strong>自動閉鎖式の特定防火設備</strong>を設けなければならない。
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>窓の設置範囲（第二種）</strong>：<strong>延焼のおそれのない部分に限り</strong>設置可。延焼のおそれがある部分には設けない。
              </li>
              <li>
                <strong>特定防火設備の対象</strong>：延焼のおそれのある壁等に設ける<strong>出入口</strong>には、自動閉鎖式の<strong>特定防火設備</strong>を設ける。
              </li>
              <li>
                <strong>屋根・天井の材質（第二種）</strong>：屋根まで<strong>耐火構造</strong>が原則。天井を設ける場合は<strong>不燃材料</strong>とする。
              </li>
              <li>
                <strong>1階設置の原則（共通）</strong>：販売取扱所（店舗）は<strong>建築物の1階</strong>に設置。2階以上は原則不可。
              </li>
              <li>
                <strong>開口部のガラス（共通）</strong>：窓・出入口にガラスを用いるときは<strong>網入りガラス</strong>とする。
              </li>
              <li>
                <strong>電気設備の防爆（共通）</strong>：可燃性ガス等が滞留するおそれのある場所に設置する機器は<strong>防爆構造</strong>とする。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                第二種の<strong>窓の設置範囲</strong>は「延焼のおそれのない部分<strong>だけ</strong>」。延焼のおそれのある部分にも窓を設けられるという肢は×。
              </li>
              <li>
                <strong>特定防火設備</strong>の対象は<strong>窓ではなく出入口</strong>。窓に特定防火設備を設けるという言い回しは誤り。
              </li>
              <li>
                <strong>第一種 vs 第二種</strong>：第二種の方が<strong>構造が厳しい</strong>（壁・柱・床・はりまで耐火構造）。「第一種の方が厳しい」と入れ替えた肢に注意。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 配合室の構造・設備 */}
        <section className={shared.section}>
          <h2>配合室の構造・設備</h2>
          <div className={shared.bandCard}>
            <p>
              配合室の床面積は、<strong>6㎡以上10㎡以下</strong>とする（いずれも<strong>範囲に含む</strong>）。
            </p>
            <p>
              床は<strong>不浸透構造</strong>とし、<strong>適切な傾斜</strong>を付け、<strong>貯留設備</strong>を設ける（<strong>3要件セット</strong>）。
            </p>
            <p>
              出入口には、<strong>随時開けることができる自動閉鎖式の特定防火設備</strong>を設ける。
              <br />
              <small>※特定防火設備は、防火設備よりも高い防火性能を備える防火戸である。</small>
            </p>
            <p>
              出入口の敷居の高さは、床面から<strong>0.1m以上（10cm以上）</strong>とする。
            </p>
            <p>
              内部に滞留した<strong>可燃性の蒸気</strong>または<strong>微粉</strong>は、<strong>屋根上に排出</strong>する設備を設ける。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>面積の範囲</strong>：6㎡以上かつ10㎡以下。両端も含むから、5.9㎡や10.1㎡はアウトである。
              </li>
              <li>
                <strong>床の3要件</strong>：不浸透＋傾斜＋貯留の<strong>3点セット</strong>。1つでも抜けたらNGだと思っておく。
              </li>
              <li>
                <strong>防火設備の種別</strong>：出入口は<strong>特定防火設備</strong>。ただの「防火設備」や「自動閉鎖のない特定防火設備」は別モノだから注意。
              </li>
              <li>
                <strong>排気の行き先</strong>：正解は屋根上に排出。外壁・ひさしの下・室内循環は全部×。中身は「可燃性の<strong>蒸気</strong>または<strong>微粉</strong>」だってところもセットで覚えておく。
              </li>
              <li>
                <strong>敷居高さの単位変換</strong>：0.1m＝10cm。しかも基準は<strong>床面から</strong>。地盤面や外部仕上げから書いてあったらひっかけである。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>面積の書き方</strong>：「6㎡を超え10㎡以下」「6㎡以上10㎡未満」みたいに、どちらかの端だけ外してくる書き方は<strong>全部×</strong>だと思ってよい。
              </li>
              <li>
                <strong>床の条件抜け</strong>：「不浸透構造のみ」「不浸透＋傾斜のみ」など、3つのうち1つでも抜けていたら<strong>確実に誤り</strong>。
              </li>
              <li>
                <strong>防火設備の表現</strong>：「防火設備」「自動閉鎖式の防火設備」とだけ書いてあったら、<strong>特定防火設備じゃない＝×</strong>と読めるかチェック。
              </li>
              <li>
                <strong>排気の位置</strong>：「外壁に排出」「屋根裏に放出」など、<strong>屋根上</strong>と書いていないものはすべてひっかけ。場所を一語だけ変えてくるパターンである。
              </li>
              <li>
                <strong>敷居の基準</strong>：「地盤面から0.1m」「外部仕上げ面から10cm」など、基準が<strong>床面以外</strong>になっていたら迷わず×にする。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 3. 取扱いの基準 */}
        <section className={shared.section}>
          <h2>取扱いの基準</h2>
          <div className={shared.bandCard}>
            <p>
              危険物は、<strong>運搬容器の基準に適合する容器</strong>に収納し、<strong>容器入りのままで販売</strong>する（量り売り・詰め替え販売は行わない）。
            </p>
            <p>
              第一種および第二種の販売取扱所では、原則として危険物の<strong>配合や詰め替えを行わない</strong>。
              <br />
              ただし、<strong>配合室</strong>において、<strong>塗料類</strong>、<strong>第一類危険物のうち塩素酸塩類</strong>または<strong>塩素酸塩類のみを含有するもの</strong>、および<strong>硫黄（第2類危険物）</strong>等を配合する場合は、この限りではない。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「運搬容器の基準＋容器入りのまま」</strong>がセットのキーワード。場内での量り売り・その場詰め替えはどちらもNG。
              </li>
              <li>
                <strong>基準として見るのは運搬容器だけ</strong>。貯蔵容器や一般容器の基準とごちゃ混ぜにしない。
              </li>
              <li>
                <strong>例外で配合OK</strong>なのは、塗料類／第一類の塩素酸塩類／塩素酸塩類のみを含有するもの／硫黄（第2類）等の決まったメンバーだけ。
              </li>
              <li>
                <strong>配合の場所</strong>は配合室の中だけ。売場・倉庫・屋外での配合は一発アウト。
              </li>
              <li>
                <strong>第一種・第二種でルールは同じ</strong>。種類が変わっても「配合OK／NG」の考え方は変わらない。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>容器の基準の言い回し</strong>：「貯蔵容器の基準」「一般容器の基準」なんて書かれていたら全部バツ。正解ワードはいつも<strong>運搬容器の基準</strong>。
              </li>
              <li>
                <strong>例外の対象ぶち込みすぎ問題</strong>：ガソリンなど<strong>第4類</strong>まで「配合OK」に混ぜてくる選択肢はひっかけ。
              </li>
              <li>
                <strong>配合と詰め替えを分けてくるパターン</strong>：「配合だけ禁止」「詰め替えだけ禁止」みたいな書き方は全部NG。原則は<strong>配合も詰め替えも禁止</strong>だと思っておく。
              </li>
              <li>
                <strong>「塩素酸塩類のみを含有するもの」</strong>の読み違い：文言どおり<strong>「塩素酸塩類だけ」</strong>が入っているものが対象。ほかの成分まで混ざった製品全部がOKという意味ではない。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <SalesStationStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}