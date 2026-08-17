import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import EmergencyMeasuresQuiz from './EmergencyMeasuresQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 40節：事故発生時の応急措置',
  description:
    '危険物乙4 第1章40節。事故発生時の応急措置を整理。所有者等の措置義務、発見者の通報義務、第24条・第25条の違い、通報先と命令権者を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/emergency_measures',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 40節：事故発生時の応急措置',
    description:
      '危険物乙4 第1章40節。事故発生時の応急措置を整理。所有者等の措置義務、発見者の通報義務、第24条・第25条の違い、通報先と命令権者を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/emergency_measures',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 40節：事故発生時の応急措置',
    description:
      '危険物乙4 第1章40節。事故発生時の応急措置を整理。所有者等の措置義務、発見者の通報義務、第24条・第25条の違いを確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function EmergencyMeasuresPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '40節：事故発生時の応急措置' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 事故発生時の応急措置 */}
        <section className={shared.section}>
          <h2>事故発生時の応急措置</h2>
          <div className={shared.bandCard}>
            <p>
              この節では、危険物の流出などの事故が起きたときに行う<strong>応急措置</strong>と、その実施を支える<strong>法律上のルール</strong>をまとめる。
            </p>
            <ul className={shared.compact}>
              <li>
                ねらいは<strong>被害を広げない</strong>こと。流出・拡散を止めて、危険物を安全な状態に近づける。
              </li>
              <li>
                <strong>その場で動く人</strong>（所有者等・発見者）と、あとから<strong>命令を出す人</strong>（市町村長等）の役割分担が決まっている。
              </li>
              <li>
                試験では、「<strong>誰の義務か</strong>」「<strong>通報先はどこか</strong>」「<strong>命令権者は誰か</strong>」の3点セットで問われやすい。
              </li>
            </ul>
          </div>

          <h3>事故発生時の応急措置と措置命令</h3>
          <div className={shared.bandCard}>
            <p>
              製造所、貯蔵所または取扱所（以下、<strong>製造所等</strong>という）の所有者等は、危険物の流出などの<strong>事故が発生したとき</strong>は、直ちに、引き続く流出・拡散の防止、流出した危険物の除去、その他の災害防止のための<strong>応急措置</strong>を講じなければならない。
            </p>
            <p>
              また、事故を<strong>発見した者</strong>は、直ちに、その旨を<strong>消防署</strong>、<strong>市町村長の指定場所</strong>、<strong>警察署</strong>、または<strong>海上保安関係機関</strong>へ<strong>通報</strong>しなければならない。
            </p>
            <p>
              市町村長等は、必要があると認めるときは、所有者等に対して上記の<strong>応急措置を講ずべきことを命ずる（応急措置命令）</strong>ことができる。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>誰が何をするか</strong>：所有者等＝応急措置の実施義務／発見者＝通報義務。
              </li>
              <li>
                <strong>通報先の並び</strong>：消防署・市町村指定場所・警察署・海上保安関係機関。
              </li>
              <li>
                <strong>命令権者</strong>：市町村長等が<strong>応急措置命令</strong>を発出できる。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. 火災を発見した場合 / 消防法（第24条） */}
        <section className={shared.section}>
          <h3>火災を発見した場合 / 消防法（第24条）</h3>
          <div className={shared.bandCard}>
            <p>
              ここでは<strong>「火事を見つけた人がまずやること」</strong>をおさえる。
              <br />
              ポイントは<strong>発見者に通報義務がある</strong>ことと、<strong>まわりの人にも協力義務がある</strong>こと。
              <br />
              「誰が・いつ・どこへ・周りはどう動くか」をセットで覚えておく。
            </p>
          </div>

          <details className={styles.note}>
            <summary>
              補足：<strong>通報義務と協力義務（第24条）</strong>
            </summary>
            <p>
              火災を<strong>発見した者</strong>は、<strong>遅滞なく</strong>（ためらわずすぐに）、これを<strong>消防署</strong>または<strong>市町村長の指定した場所</strong>に通報しなければならない。
            </p>
            <p>
              また、すべての人は、その<strong>通報が最も迅速に到達するよう協力</strong>しなければならない。（電話を代わったり、道案内したり、とにかく一番早く届くルートを手伝うイメージ。）
            </p>
          </details>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>誰が</strong>：火災を<strong>発見した者</strong>が通報義務者である。
              </li>
              <li>
                <strong>いつ</strong>：<strong>遅滞なく</strong>（ためらわず直ちに）。
              </li>
              <li>
                <strong>どこへ</strong>：<strong>消防署</strong>または<strong>市町村指定場所</strong>。
              </li>
              <li>
                <strong>周囲の義務</strong>：<strong>最も迅速に到達するよう協力</strong>する。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                現場イメージは<strong>「見つけたらすぐ119番」</strong>。構内なら<strong>非常通報設備・火災報知設備のボタン</strong>を押す動きとセットで覚える。
              </li>
              <li>
                通報して終わりじゃない。<strong>安全の確保と初期対応</strong>（避難誘導・遮断・冷却など）も<strong>同時にスタート</strong>する流れでイメトレしておく。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 火災を発見した場合 / 消防法（第25条） */}
        <section className={shared.section}>
          <h3>火災を発見した場合 / 消防法（第25条）</h3>
          <div className={shared.bandCard}>
            <p>
              第25条は、火災が発生したときに<strong>消防隊が到着するまで</strong>と、<strong>到着したあと</strong>に現場の人たちがどう動くかを定めた条文である。
              <br />
              製造所などの<strong>関係者</strong>や<strong>総務省令で定める者</strong>は、消防隊が現場に着くまでのあいだ、可能な範囲で<strong>初期消火</strong>・<strong>延焼防止</strong>・<strong>人命救助</strong>を行う。
              <br />
              さらに、消防隊が到着したあとは、建物の構造や要救助者の有無・位置など、<strong>消火や人命救助に必要な情報を提供する役割</strong>も負っている。
            </p>
          </div>

          <details className={styles.note}>
            <summary>
              補足：<strong>到着までの初期対応と協力・情報提供（第25条）</strong>
            </summary>
            <p>
              火災が発生したときは、<strong>当該消防対象物の関係者</strong>（所有者・管理者・占有者等）および<strong>総務省令で定める者</strong>は、消防隊が現場に到着するまで、可能な範囲で<strong>初期消火</strong>、<strong>延焼防止</strong>、<strong>人命救助</strong>を行わなければならない。
            </p>
            <p>
              上記の場面では、<strong>現場付近にいる者</strong>も、これらの活動に協力しなければならない。（安全を最優先し、危険な行為は避ける）
            </p>
            <p>
              火災現場において、<strong>消防吏員・消防団員</strong>は、関係者や総務省令で定める者に対し、建物の構造、要救助者の有無・位置、その他<strong>消火・延焼防止・人命救助に必要な事項</strong>の<strong>情報提供</strong>を求めることができる。
            </p>
          </details>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                <strong>誰が</strong>：<strong>関係者＋総務省令で定める者</strong>が主役。
              </li>
              <li>
                <strong>到着まで</strong>：可能な範囲で<strong>初期消火・延焼防止・人命救助</strong>を行う。
              </li>
              <li>
                <strong>到着後</strong>：<strong>消防吏員・消防団員</strong>に構造や要救助者の情報を提供する。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>総務省令で定める者</strong>（施行規則第46条）は、<u>火災を発生させた者</u>・<u>火災の発生に直接関係がある者</u>・<u>当該消防対象物の居住者または勤務者</u>のことである。
              </li>
              <li>
                第24条は<strong>通報義務メイン</strong>、第25条は<strong>初期対応＋協力＋情報提供</strong>がテーマと押さえておく。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>到着までの義務</strong>は「関係者＋省令で定める者」。<u>近隣の一般人だけの義務</u>ではない。
              </li>
              <li>
                <strong>協力義務</strong>は「現場付近に在る者」。第24条の<strong>通報協力</strong>とごっちゃにしない。
              </li>
              <li>
                <strong>安全最優先</strong>：危険が大きい場合は無理な初期消火はしない（避難・遮断を優先）。
              </li>
              <li>
                <strong>情報提供</strong>の相手は<strong>消防吏員・消防団員</strong>。警察官あてではない。
              </li>
              <li>
                <strong>情報の中身</strong>は「構造／要救助者の存否・位置／消火等に必要事項」。所有権や賠償の話ではない。
              </li>
              <li>
                <strong>到着後も協力</strong>：到着したら終わりではない。誘導・立入管理など要請に従う。
              </li>
              <li>
                <strong>省令の条番号</strong>は施行規則<strong>第46条</strong>。条文番号の取り違えに注意。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. ページのまとめ（第24条・第25条の要点比較） */}
        <section className={shared.section}>
          <details className={styles.note}>
            <summary>このページのまとめ</summary>
            <p>
              この節では<strong>第24条（通報）</strong>と<strong>第25条（到着までの対応＋情報提供）</strong>をセットで押さえる。
              <br />
              一言で言うと、<strong>「まず知らせる（24条）→着くまで・着いたあとに動く（25条）」</strong>という流れである。
            </p>

            <h4>第24条（通報）</h4>
            <ul className={shared.compact}>
              <li>
                <strong>テーマ</strong>：火災を<strong>誰が・どこへ・いつ</strong>知らせるか。
              </li>
              <li>
                <strong>誰が</strong>：火災を<strong>発見した者</strong>。
              </li>
              <li>
                <strong>いつ</strong>：<strong>遅滞なく</strong>（ためらわず直ちに）。
              </li>
              <li>
                <strong>どこへ</strong>：<strong>消防署</strong> または <strong>市町村指定場所</strong>。
              </li>
              <li>
                <strong>周囲の役割</strong>：<strong>最も迅速に到達するよう協力</strong>する。
              </li>
            </ul>

            <h4>第25条（到着までの対応＋情報提供）</h4>
            <ul className={shared.compact}>
              <li>
                <strong>テーマ</strong>：消防が<strong>到着するまでの初期対応</strong>と、<strong>到着後の情報提供</strong>。
              </li>
              <li>
                <strong>誰が</strong>：<strong>関係者＋総務省令で定める者</strong>（近隣の者は協力）。
              </li>
              <li>
                <strong>到着まで</strong>：可能な範囲で<strong>初期消火・延焼防止・人命救助</strong>を行う。
              </li>
              <li>
                <strong>到着後</strong>：<strong>消防吏員・消防団員</strong>に構造・要救助者の有無などを<strong>情報提供</strong>する。
              </li>
              <li>
                <strong>原則</strong>：<strong>安全最優先</strong>（無理な消火はしない／避難・遮断を優先）。
              </li>
            </ul>

            <p>
              試験では、<strong>第24条＝通報義務</strong>、<strong>第25条＝初期対応＋協力＋情報提供</strong>という役割の違いを意識しておくと整理しやすくなる。
            </p>
          </details>
        </section>

        {/* 5. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <EmergencyMeasuresQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">無料登録して練習問題を解く</a>
        </section>
      </div>
    </>
  )
}