import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '乙4練習問題｜法令・物理と化学・性質と火災予防を学べる問題集',
  description:
    '危険物乙4。法令・物理と化学・性質と火災予防の練習問題を掲載。過去傾向を反映した1,500問以上。進捗・誤答はマイページに自動記録。効率よく苦手分野を潰せる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/contents/',
  },
  robots: 'index,follow',
  openGraph: {
    title: '乙4練習問題｜法令・物理と化学・性質と火災予防を学べる問題集',
    description:
      '危険物乙4。法令・物理と化学・性質と火災予防の練習問題を掲載。過去傾向を反映した1,500問以上。進捗・誤答はマイページに自動記録。効率よく苦手分野を潰せる。',
    type: 'website',
    url: 'https://kikenbutsu-z4.com/contents/',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '乙4練習問題｜法令・物理と化学・性質と火災予防を学べる問題集',
    description:
      '危険物乙4。法令・物理と化学・性質と火災予防の練習問題を掲載。過去傾向を反映した1,500問以上。進捗・誤答はマイページに自動記録。効率よく苦手分野を潰せる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function ContentsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'トップ', href: '/' }, { label: '学習ガイド' }]} />
      <main className="site-main">
        <div className={styles.container}>
          <section className={styles.section}>


          <h2 className={styles.sectionHeading}>「何から手をつければいいかわからない」を終わらせる</h2>
          <div className={styles.dashboardNote}>
            <p>
              乙4は年間30万人が受験する試験ですが、
              同じテーマが形を変えて繰り返し出題される「パターンのある試験」でもあります。
            </p>
            <p>
              問題集を1周しただけでは、どこが弱点かわからないまま本番を迎えてしまいがちです。
              このサイトでは、<strong>解いた問題・間違えた問題が自動で記録される</strong>ので、
              「なんとなく復習」ではなく<strong>「苦手だけを狙って潰す」学習</strong>ができます。
            </p>
            <p>
              <Link href="/signup" className="btn btn-primary">
                無料で100問解いてみる
              </Link>
            </p>
            <p className={styles.ctaSub}>無料登録は30秒。今日から苦手だけを潰していけます。</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>使い方ガイド</h2>

          <div className={styles.dashboardNote}>
            <p>
              やることはシンプルです。<strong>解く → 間違えたところが自動で残る → 次はそこだけ解く</strong>。
              この繰り返しだけで、苦手が自然に減っていきます。
            </p>
            <p>
              出題は<strong>乙4の本試験に近い五肢択一形式</strong>で、
              法令／物理・化学／性質と火災予防の3分野をカバーしています。
            </p>
            <p>
              すべての問題に<strong>ヒントと解説</strong>が付いているので、
              正解した問題も「なぜ合っていたのか」まで確認でき、記憶に残りやすくなります。
            </p>
            <p>
              迷ったら、
              <strong>①小分野から練習問題を選択してスタート → ②間違えた問題だけ復習 → ③進捗をグラフで確認</strong>
              の順で進めてください。苦手分野の克服が合格への近道です。
            </p>

            <p className={styles.ctaSub}>無料登録は30秒。効率よく学習して最短で合格へ。</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>マイページの機能紹介</h2>
          <div className={styles.dashboardNote}>
            <p>メール登録だけで、学習の進み具合や苦手分野を自動でまとめて確認できます。</p>
            <ul>
              <li>
                <strong>試験日までの残り日数</strong> —
                今日から何日で本番かが常に見えるので、ペース配分に迷いません。
              </li>
              <li>
                <strong>学習記録カレンダー</strong> —
                解いた日が自動で色付けされます。空白の日を見るだけで、再開のきっかけになります。
              </li>
              <li>
                <strong>解答済み問題数（全1,500問以上）</strong> —
                「あと何問」が数字でわかるので、ゴールまでの距離が具体的になります。
              </li>
              <li>
                <strong>分野別の解答状況</strong>（法令／物理・化学／性質と予防） —
                総合点では見えない「科目ごとの偏り」に早く気づけます。
              </li>
              <li>
                <strong>復習リスト</strong> — 「あとで解きたい」と思った問題をその場でマークするだけ。ノートに書き写す手間はありません。
              </li>
              <li>
                <strong>誤答リスト</strong> — 間違えた問題だけが自動で集まります。復習は「開くだけ」で始められます。
              </li>
            </ul>
            <p>
              バーグラフを見れば、進捗がわかるので、
              <strong>「どこをどれだけ解けば合格ラインに届きそうか」</strong>がすぐに判断できます。
            </p>
            <p>
              「なんとなく解く」のではなく、マイページの記録を見ながら
              <strong>足りないところだけを集中的に復習する</strong>──そのための学習管理ページがマイページです。
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionHeading}>練習問題の始め方</h3>
          <div className={styles.dashboardNote}>
            <p>
              練習問題は、<strong>無料登録して始める方法</strong>と、
              <strong>登録せずにお試しで始める方法</strong>の2通りがあります。
            </p>

            <h4 className={styles.subHeading}>1. 無料登録して始める（おすすめ）</h4>
            <p>
              メールアドレスを登録すると、<strong>100問の練習問題</strong>と
              <strong>マイページの進捗管理・復習機能</strong>がすぐに使えます。
              本気で合格を目指す場合は、この機能をフル活用してください。
            </p>
            <p>
              <Link href="/signup" className="btn btn-primary">
                無料100問
              </Link>
            </p>

            <h4 className={styles.subHeading}>2. 登録せずに32問だけ試す</h4>
            <p>
              まずは雰囲気を確かめたい方向けに、<strong>登録なしで解けるお試し版32問</strong>も用意しています。
              気軽に試してから、必要に応じて無料登録に進めます。
            </p>
            <p>
              <Link href="/contents/free?reset=1" className="btn btn-ghost">
                無料32問
              </Link>
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionHeading}>登録したら、まずここを見てください</h3>
          <div className={styles.dashboardNote}>
            <p>
              登録が終わったら、マイページの<strong>「分野別進捗」</strong>を開いてください。
              法令・物理と化学・性質と火災予防の中に、それぞれ細かい<strong>出題テーマ</strong>が並んでいます。
            </p>
            <p>進め方は2通りです。どちらでも構いません。</p>
            <ul>
              <li>
                <strong>先に基礎知識で仕組みを理解してから解く</strong> —
                「なぜそうなるか」を先に知りたい人向け。該当する
                <Link href="/basics">基礎知識ページ</Link>
                を読んでから、同じテーマの練習問題に進むと理解が定着しやすくなります。
              </li>
              <li>
                <strong>先に練習問題を解きながら覚える</strong> —
                とにかく手を動かしたい人向け。わからなくてもヒントと解説が付いているので、
                解きながら合格ラインの知識が身についていきます。
              </li>
            </ul>
            <p>
              どちらを選んでも、間違えた問題は誤答リストに自動で残ります。
              迷ったときは、まず1テーマだけ解いてみて、自分に合う進め方を確かめてください。
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionHeading}>頻出度マークの見方</h3>
          <div className={styles.dashboardNote}>
            <p>練習問題の⭐️マークは、頻出度の目安です。問題を選ぶときの参考にしてください。</p>
            <ul>
              <li>⭐️⭐️⭐️ … よく出る</li>
              <li>⭐️⭐️ … 時々出る</li>
              <li>⭐️ … たまに出る</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>本試験の構成と合格基準</h2>
          <div className={styles.dashboardNote}>
            <p>
              乙4の本試験は、<strong>3科目・全35問</strong>で実施され、試験時間は<strong>2時間</strong>です。
            </p>
            <ul>
              <li>危険物に関する法令：15問</li>
              <li>基礎的な物理学及び基礎的な化学：10問</li>
              <li>危険物の性質並びにその火災予防及び消火の方法：10問</li>
            </ul>
            <p>
              合格するには、<strong>全体で正答するだけでなく、各科目ごとに60%以上</strong>取る必要があります。
              目安は、法令が<strong>9問以上</strong>、他の2科目がそれぞれ<strong>6問以上</strong>です。
            </p>
            <p>
              たとえば、法令で8問しか取れなかった場合は、他の科目が満点でも合格にはなりません。
              <strong>苦手科目を作らないこと</strong>がこの試験をパスするカギです。
            </p>
            <p>
              マイページの<strong>「分野別進捗」</strong>には「グラフ」と「リスト」の2つの表示があります。
              グラフでは<strong>法令・物理と化学・性質と火災予防の3分野</strong>の正答率がひと目でわかり、
              棒グラフをクリックするとその分野のランダム演習をすぐに始められます。
            </p>
            <p>
              「リスト」に切り替えると、同じ3分野が一覧表示されます。
              分野を1つクリックすると、<strong>「消防法の法体系」「危険物の指定数量」</strong>など、
              その分野に含まれる<strong>節ごとの進捗</strong>が表示されます。
              解答数が少ない節から順に取り組めば、<strong>苦手分野を効率よく潰せます</strong>。
            </p>
            <p>
              誤答リストに溜まった問題は、必ず一発で解けるまで繰り返しチャレンジしてください。
              ＊ヒントをみてから正解できた問題は、復習リストに追加することをお勧めします。
            </p>
            <p>
              実際の試験日程や申込方法は、
              <a href="https://www.shoubo-shiken.or.jp/" target="_blank" rel="noopener noreferrer">
                消防試験研究センター
              </a>
              の公式サイトでご確認ください。
            </p>
          </div>
        </section>
      </div>
    </main>
   </>
  )
}