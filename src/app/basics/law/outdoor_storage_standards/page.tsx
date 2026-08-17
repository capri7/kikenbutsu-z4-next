import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import OutdoorStorageStandardsQuiz from './OutdoorStorageStandardsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 29節：屋外貯蔵所の基準',
  description:
    '危険物乙4 第1章29節。屋外貯蔵所の基準を整理。設置場所・区画・架台の構造要件（高さ6m未満・不燃材料・落下防止）、貯蔵できる危険物（第2類・第4類）とガソリン・特殊引火物が不可な理由を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/outdoor_storage_standards',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 29節：屋外貯蔵所の基準',
    description:
      '危険物乙4 第1章29節。屋外貯蔵所の基準を整理。設置場所・区画・架台の構造要件（高さ6m未満・不燃材料・落下防止）、貯蔵できる危険物（第2類・第4類）とガソリン・特殊引火物が不可な理由を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/outdoor_storage_standards',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 29節：屋外貯蔵所の基準',
    description:
      '危険物乙4 第1章29節。屋外貯蔵所の基準を整理。設置場所・区画・架台の構造要件（高さ6m未満・不燃材料・落下防止）、貯蔵できる危険物（第2類・第4類）とガソリン・特殊引火物が不可な理由を教科書的に確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function OutdoorStorageStandardsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '29節：屋外貯蔵所の基準' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 構造・設備 */}
        <section className={shared.section}>
          <h2>構造・設備</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>湿潤でない</strong>、かつ<strong>排水のよい場所</strong>に設置する。
            </p>
            <p>
              危険物を貯蔵し、又は取り扱う区域の周囲には、<strong>柵又は盛土等で明確に区画</strong>する（出入り口は施錠等で管理）。
            </p>
            <p>
              容器を積載する<strong>架台</strong>（ラック等）を設ける場合は、<strong>不燃材料</strong>で造り、<strong>堅固な地盤に確実に固定</strong>する。
            </p>
            <p>
              架台は、当該架台及びその<strong>付属設備の自重</strong>、<strong>容器内危険物の重量</strong>、<strong>風荷重</strong>、<strong>地震</strong>その他による作用に対し<strong>安全</strong>であること。
            </p>
            <p>架台の<strong>高さは6m未満</strong>とする（数値ひっかけ注意）。</p>
            <p>架台には、容器が<strong>容易に落下しない措置（落下防止バー・ストッパ等）</strong>を講じる。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li><strong>設置場所：</strong>「<strong>湿潤でない</strong>」かつ「<strong>排水のよい場所</strong>」。</li>
              <li><strong>区画：</strong>周囲は必ず<strong>柵又は盛土等で区画</strong>し、出入り口は施錠などで管理する。</li>
              <li>
                <strong>架台：</strong>
                <strong>不燃材料</strong>で造り、<strong>堅固な地盤に固定</strong>、<strong>高さ6m未満</strong>、<strong>落下防止措置</strong>までそろって合格条件。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>「排水良好」</strong>と<strong>「湿潤でない」</strong>はセットで覚える。</li>
              <li><strong>区画＝柵又は盛土等</strong>。単なるカラーコーン等は×。</li>
              <li><strong>架台は不燃・固定・耐力</strong>の三点セットで出題されやすい。</li>
              <li><strong>高さ6m未満</strong>が上限。<em>6m以下</em>や<em>5m未満</em>への置換ひっかけに注意。</li>
              <li>「<strong>落下防止措置</strong>」は要件。<em>手すり相当</em>だけでは不十分で、具体的な落下防止が必要。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li><strong>6m未満</strong>を<strong>6m以下</strong>や<strong>5m未満</strong>に変えた選択肢は×。</li>
              <li>区画を「<strong>ロープやカラーコーンだけ</strong>」で済ませている記述は×。</li>
              <li><strong>木製など不燃でない架台</strong>、<strong>落下防止が手すり程度</strong>の記述も×。</li>
            </ul>
          </div>
        </section>

        {/* 2. 貯蔵できる危険物 */}
        <section className={shared.section}>
          <h2>貯蔵できる危険物</h2>
          <div className={shared.bandCard}>
            <p>
              屋外貯蔵所に貯蔵できる危険物は、次のとおりである（※屋外<strong>タンク</strong>貯蔵所とは別基準）。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">屋外貯蔵所に貯蔵できる危険物（要点）</caption>
              <colgroup>
                <col className={styles.colDg} />
                <col className={styles.colTypicalExample} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>危険物の種類</th>
                  <th scope="col">概要・代表例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    第2類
                    <br />
                    （可燃性固体）
                  </th>
                  <td>
                    <ul className={shared.compact}>
                      <li><strong>硫黄</strong>（及び<strong>硫黄のみ</strong>を含有するもの）</li>
                      <li>
                        その他の可燃性固体（例：赤リン等）。
                        <br />
                        ※固体に「引火点○℃」の表現は用いない。
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    第4類
                    <br />
                    （引火性液体）
                  </th>
                  <td>
                    <ul className={shared.compact}>
                      <li><strong>アルコール類</strong>（メタノール・エタノール等）</li>
                      <li>
                        <strong>第2石油類</strong>（灯油・軽油等）<span className={styles.badge}>引火点21〜70℃未満</span>
                      </li>
                      <li>
                        <strong>第3石油類</strong>（重油等）<span className={styles.badge}>引火点70〜200℃未満</span>
                      </li>
                      <li>
                        <strong>第4石油類</strong>（シリンダ油等）<span className={styles.badge}>引火点200℃以上</span>
                      </li>
                      <li><strong>動植物油類</strong></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`${shared.callout} ${shared.calloutNg}`}>
            <h3>おっとNG！</h3>
            <p>
              屋外貯蔵所では、第4類のうち<strong>特殊引火物</strong>および<strong>ガソリン</strong>は<strong>貯蔵できない</strong>。（ガソリンは第1石油類に属する。）
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                屋外<strong>貯蔵所</strong>で扱えるのは、主に<strong>第2類（可燃性固体）</strong>と<strong>第4類（引火性液体）</strong>。
              </li>
              <li>
                第2類は<strong>硫黄</strong>と、その他の<strong>可燃性固体</strong>。固体に「引火点○℃」という考え方はとらない。
              </li>
              <li>
                第4類は<strong>引火点の範囲</strong>で区分される。第2石油類21〜70℃未満／第3石油類70〜200℃未満／第4石油類200℃以上、この3つはセットで覚えておく。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>屋外貯蔵所</strong>と<strong>屋外タンク貯蔵所</strong>は別物。名称だけ入れ替えたひっかけに注意。
              </li>
              <li>
                第2類は<strong>可燃性固体</strong>。「引火性固体」という表現は誤り（固体に「引火点」の概念は当てない）。
              </li>
              <li>
                第4類は<strong>引火点で区分</strong>される。とくに第2石油類<strong>21〜70℃未満</strong>など、境目の数字はワンセットで押さえておく。
              </li>
              <li>
                「<strong>硫黄のみ</strong>を含有するもの」という表現はよく問われる。「硫黄を含むもの」ではなく<strong>のみ</strong>がポイント。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「屋外<strong>タンク</strong>貯蔵所に貯蔵できる危険物は…」とタンク付きで聞いてきたら、この表とは<strong>別基準</strong>。
              </li>
              <li>固体に対して「引火点○℃」と書かれていたら×。固体は<strong>可燃性</strong>で区分する。</li>
              <li>
                第2石油類の引火点を「21〜70℃<strong>以下</strong>」などと「未満／以上」を入れ替える選択肢は典型的なひっかけ。
              </li>
              <li>
                「特殊引火物やガソリンも貯蔵できる」といった記述は、上の「おっとNG！」どおり<strong>誤り</strong>と判断する。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 貯蔵できない危険物 */}
        <section className={shared.section}>
          <h2>貯蔵できない危険物</h2>
          <div className={shared.bandCard}>
            <p>
              屋外貯蔵所に<strong>貯蔵できない</strong>危険物は、次のとおりである（<strong>屋外タンク貯蔵所とは基準が異なる</strong>）。
            </p>
          </div>

          <h3>屋外貯蔵所に貯蔵できない危険物（区分と理由）</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">屋外貯蔵所に貯蔵できない危険物（区分と理由）</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colReasonExample} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">理由・代表例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    第4類
                    <br />
                    <strong>特殊引火物</strong>
                  </th>
                  <td>
                    <ul className={shared.compact}>
                      <li>極めて揮発性が高く、蒸気着火・静電気着火の危険性が大きいためである。</li>
                      <li>代表例：<strong>ジエチルエーテル、二硫化炭素</strong>など。</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    第4類
                    <br />
                    <strong>ガソリン</strong>
                  </th>
                  <td>
                    <ul className={shared.compact}>
                      <li>蒸気が空気より重く滞留しやすく、屋外貯蔵所の構造では防爆・防浸対策が不十分になり得るためである。</li>
                      <li>
                        ガソリンは<span className={styles.badge}>第1石油類（引火点21℃未満）</span>に属するが、<strong>屋外貯蔵所では貯蔵できない</strong>。
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
                屋外<strong>貯蔵所</strong>と屋外<strong>タンク貯蔵所</strong>では基準が異なる。問題文でどちらが問われているか、最初に確認しておく。
              </li>
              <li>
                屋外貯蔵所で<strong>貯蔵できない</strong>のは、第4類のうち<strong>特殊引火物</strong>と<strong>ガソリン</strong>である。「第4類全部が不可」ではない点を押さえる。
              </li>
              <li>
                ガソリンは<span className={styles.badge}>第1石油類（引火点21℃未満）</span>に属するが、第1石油類すべてが屋外貯蔵所で不可というわけではない。「ガソリンだけ特別扱い」だと覚える。
              </li>
              <li>
                特殊引火物は揮発性が非常に高く、蒸気着火・静電気着火の危険が大きい。そのため屋外貯蔵所では貯蔵不可になっていることもセットで覚える。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「屋外貯蔵所」と「屋外<strong>タンク</strong>貯蔵所」を入れ替えた設問は基準が変わる。タンクの有無を見落とさないように注意。
              </li>
              <li>「第4類はすべて屋外貯蔵所に貯蔵できない」といった、第4類全体を一括で不可とする表現は誤り。</li>
              <li>
                「第1石油類は全部、屋外貯蔵所に貯蔵できない」という言い回しも誤り。ガソリンだけを指しているのかどうか、文脈を確認する。
              </li>
              <li>
                容器の種類や密閉性・数量の基準がさらっと書かれている問題では、「基準に合わない容器だから持ち込み不可」というパターンも出る。容器条件の一文を読み飛ばさないように注意する。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <OutdoorStorageStandardsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}