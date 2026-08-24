import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import AlarmSystemsQuiz from './AlarmSystemsQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 38節：警報設備',
  description:
    '危険物乙4 第1章38節。製造所等に設置する警報設備を整理。指定数量10倍以上で設置義務、移動タンク貯蔵所は対象外、自動火災報知設備・消防機関へ通報できる電話・非常ベル・拡声装置・警鐘の5区分、自動式／手動式の作動方式と音響・光・通報の伝達手段、延べ面積500㎡以上の代表例を収録。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/alarm_systems',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 38節：警報設備',
    description:
      '危険物乙4 第1章38節。製造所等に設置する警報設備を整理。指定数量10倍以上で設置義務、移動タンク貯蔵所は対象外、自動火災報知設備・消防機関へ通報できる電話・非常ベル・拡声装置・警鐘の5区分、自動式／手動式の作動方式と音響・光・通報の伝達手段、延べ面積500㎡以上の代表例を収録。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/alarm_systems',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 38節：警報設備',
    description:
      '危険物乙4 第1章38節。製造所等に設置する警報設備を整理。指定数量10倍以上で設置義務、移動タンク貯蔵所は対象外、自動火災報知設備・消防機関へ通報できる電話・非常ベル・拡声装置・警鐘の5区分、自動式／手動式の作動方式と音響・光・通報の伝達手段、延べ面積500㎡以上の代表例を収録。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function AlarmSystemsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '38節：警報設備' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 警報設備 */}
        <section className={shared.section}>
          <h2>警報設備</h2>
          <div className={shared.bandCard}>
            <h3>警報設備の設置</h3>
            <p>
              製造所等（<strong>移動タンク貯蔵所を除く</strong>）で、危険物の数量が<strong>指定数量の10倍以上</strong>
              になる場合は、火災を感知して<strong>自動的に作動</strong>する
              <strong>自動火災報知設備などの警報設備</strong>を設置しなければならない。
            </p>
            <p className={shared.muted}>
              ※「貯蔵し又は取り扱う」のどちらか一方でも10倍に達したら対象である。「10％（=0.1倍）」ではなく
              <strong>10倍</strong>なので、桁の取り違えに注意する。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ覚えよう！</h3>
            <ul className={shared.compact}>
              <li>移動タンク貯蔵所は<strong>対象外</strong>である。</li>
              <li>指定数量の<strong>10倍以上</strong>になったら「警報設備マスト」とセットで覚える。</li>
              <li>「貯蔵」か「取扱い」どちらか片方でも10倍に届いたら対象になる。</li>
            </ul>
          </div>
        </section>

        {/* 2. 警報設備の区分 */}
        <section className={shared.section}>
          <h2>警報設備区分（代表例）</h2>
          <div className={shared.bandCard}>
            <p>
              警報設備は、火災などの異常を<strong>いち早く人や消防機関に知らせる</strong>ための設備である。
              法令上は次のように区分される。
            </p>
            <ol className={shared.compact}>
              <li><strong>自動火災報知設備</strong>（検知器と連動し、感知すると自動で警報）</li>
              <li><strong>消防機関へ通報できる電話</strong>（消防署などへ直接つながる直通・非常電話）</li>
              <li><strong>非常ベル装置</strong>（ベル音で周囲に火災を知らせる装置）</li>
              <li><strong>拡声装置</strong>（非常放送などで避難指示などを伝える装置）</li>
              <li><strong>警鐘（けいしょう）</strong>（手で鳴らす鐘などの警報用器具）</li>
            </ol>
            <p className={shared.muted}>
              役割は<strong>「知らせる」担当</strong>である。消火設備（第1〜第5種）のように火を
              <strong>「消す」設備</strong>とは役割が異なるので、名前が似ていても混同しないようにする。
            </p>
          </div>

          <div className={shared.bandCard}>
            <h3>設置の中心：自動火災報知設備の対象となり得る製造所等</h3>
            <ul className={shared.compact}>
              <li><strong>製造所</strong></li>
              <li><strong>一般取扱所</strong></li>
              <li><strong>屋内貯蔵所</strong></li>
              <li><strong>屋外タンク貯蔵所</strong></li>
              <li><strong>屋内タンク貯蔵所</strong></li>
              <li><strong>給油取扱所</strong></li>
            </ul>
            <p>
              ただし、これらに該当すれば必ず設置が必要になるわけではない。実際に設置が義務になるかどうかは、
              <strong>延べ面積</strong>や<strong>指定数量の倍数</strong>、<strong>構造条件</strong>などの細かな基準で決まる。
            </p>
          </div>

          <div className={shared.bandCard}>
            <h3>警報設備が必要となる製造所等の代表例</h3>
            <ul className={shared.compact}>
              <li>
                <strong>延べ面積500㎡以上</strong>の<strong>製造所・一般取扱所</strong>
              </li>
              <li>
                <strong>給油取扱所</strong>のうち、「<strong>一方開放の屋内給油取扱所</strong>」や
                「<strong>上部に上階を有する屋内給油取扱所</strong>」等
              </li>
            </ul>
            <p className={shared.muted}>
              ※ なお、上記の自動火災報知設備の対象に該当しない製造所等（<strong>移動タンク貯蔵所・移送取扱所を除く</strong>）
              であっても、<strong>指定数量の倍数が10以上</strong>となる場合には、警報設備の
              <strong>②〜⑤のうちいずれか1種類以上</strong>を設ける必要がある。
            </p>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>基準は「指定数量の倍数が10以上」</strong>である。</li>
              <li><strong>警報設備＝知らせる／消火設備＝消す</strong>。役割をごっちゃにしない。</li>
              <li>自動火災報知設備は、検知器とセットで<strong>勝手に鳴るタイプ</strong>の設備。</li>
              <li>
                <strong>延べ面積500㎡以上の製造所・一般取扱所</strong>や、<strong>特定の屋内給油取扱所</strong>は
                「警報設備ほぼ必須ゾーン」として押さえる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「10％以上」「1/10以上」</strong>は全て誤り。正解はあくまで
                <strong>「倍数が10以上」</strong>である。
              </li>
              <li><strong>移動タンク貯蔵所は除外</strong>。義務があると思い込むと落とし穴になる。</li>
              <li>
                「<strong>貯蔵し又は取り扱う</strong>」は、どちらか片方でも基準に届いたら対象。両方そろって初めて対象、ではない。
              </li>
              <li>
                「<strong>消防機関に報知ができる電話</strong>」も<strong>警報設備の一種</strong>である。
              </li>
            </ul>
          </div>
        </section>

        {/* 3. 作動方式と伝達手段 */}
        <section className={shared.section}>
          <h2>作動方式と伝達手段</h2>
          <div className={shared.bandCard}>
            <p>警報設備が<strong>どのように作動し</strong>、その警報を<strong>どのように伝えるか</strong>を整理する。</p>

            <h3>作動方式（2種類）</h3>
            <ul className={shared.compact}>
              <li><strong>自動式：</strong>検知器と連動して自動的に発報する方式（本節の設置義務が想定する中核）。</li>
              <li><strong>手動式：</strong>非常押しボタンなど、人が操作して起動する方式（自動式を補う役割）。</li>
            </ul>
            <p className={shared.muted}>
              用語の取り違え注意：「<strong>自動</strong>」は<strong>人の操作なしで作動する方式</strong>を指す。
            </p>

            <h3>伝達手段（3パターン）</h3>
            <ul className={shared.compact}>
              <li><strong>音響：</strong>非常ベル・サイレンなどで、広く周囲に知らせる。</li>
              <li><strong>光：</strong>フラッシュ灯などで知らせる。高騒音環境では音と併用することが望ましい。</li>
              <li><strong>通報：</strong><strong>消防機関へ通報できる電話</strong>など、遠隔地に知らせる手段。</li>
            </ul>
            <p className={shared.muted}>「音だけ」「光だけ」と断定する選択肢はひっかけになりやすいので注意する。</p>
          </div>
        </section>

        {/* 4. 除外・例外の注意 */}
        <section className={shared.section}>
          <h2>除外・例外の注意</h2>
          <div className={shared.bandCard}>
            <p>以下の除外・例外は、試験でよく狙われるポイントである。</p>
            <ul className={shared.compact}>
              <li><strong>移動タンク貯蔵所は除外</strong>（本節の設置義務の対象外）。</li>
              <li>
                <strong>指定数量の倍数が9以下</strong>では、原則としてこの基準による<strong>設置義務はない</strong>
                （ただし任意で設置することは妨げない）。
              </li>
              <li>
                <strong>自動火災報知設備の対象外</strong>であっても、倍数が<strong>10以上</strong>なら
                <strong>②〜⑤のいずれか</strong>を設置する。
              </li>
              <li>
                <strong>屋外／屋内タンク貯蔵所</strong>は、<strong>構造・容量などの細目</strong>によって設置要否が変わる。
                代表例だけを見て一律に判断しない。
              </li>
              <li>
                表現のひっかけ：「<strong>10％（=0.1倍）</strong>」「<strong>1/10</strong>」は誤りで、正しくは
                <strong>10倍</strong>である。
              </li>
            </ul>
          </div>
        </section>

        {/* インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <AlarmSystemsQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">無料登録して練習問題を解く</a>
        </section>
      </div>
    </>
  )
}