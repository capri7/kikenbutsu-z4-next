import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '乙4基礎知識｜法令・物理と化学・性質と火災予防の総合案内',
  description:
    '乙種4類危険物取扱者試験の基礎知識を章ごとに学べる総合案内ページです。法令、物理と化学、性質と火災予防・消火の方法の3章を一覧から確認できます。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/',
  },
  robots: 'index,follow',
  openGraph: {
    title: '乙4基礎知識｜法令・物理と化学・性質と火災予防の総合案内',
    description:
      '乙種4類危険物取扱者試験の基礎知識を章ごとに学べる総合案内ページです。法令、物理と化学、性質と火災予防・消火の方法の3章を一覧から確認できます。',
    type: 'website',
    url: 'https://kikenbutsu-z4.com/basics/',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '乙4基礎知識｜法令・物理と化学・性質と火災予防の総合案内',
    description:
      '乙種4類危険物取扱者試験の基礎知識を章ごとに学べる総合案内ページです。法令、物理と化学、性質と火災予防・消火の方法の3章を一覧から確認できます。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function BasicsPage() {
  return (
    <>

      <Breadcrumbs items={[{ label: 'トップ', href: '/' }, { label: '基礎知識' }]} />
      <div className="site-main">
        <div className={styles.container}>

          <section className={styles.intro}>
            <h2 className={styles.sectionHeading}>基礎知識</h2>
            <p className={styles.introText}>
              乙4の基礎知識は、法令・物理と化学・性質と火災予防の3章で学べます。
              <br />
              下のカードから進みたい章を選んでください。
            </p>
          </section>

        <section className={styles.chapterLinks} aria-labelledby="chapters-title">
          <h3 id="chapters-title" className={styles.sectionHeading}>
            学習分野を選ぶ
          </h3>

          <nav className={styles.chapterGrid} aria-label="章の一覧">
            <Link className={styles.chapterCard} href="/basics/law">
              <span className={styles.chapterIcon} aria-hidden="true">
                📘
              </span>
              <span className={styles.chapterBody}>
                <span className={styles.chapterKicker}>第1章</span>
                <span className={styles.chapterTitle}>危険物に関する法令</span>
                <span className={styles.chapterMeta}>頻出：★★★／合格の鍵</span>
              </span>
              <span className={styles.chapterCta} aria-hidden="true">
                →
              </span>
            </Link>

            <Link className={styles.chapterCard} href="/basics/physical_chemistry">
              <span className={styles.chapterIcon} aria-hidden="true">
                🧪
              </span>
              <span className={styles.chapterBody}>
                <span className={styles.chapterKicker}>第2章</span>
                <span className={styles.chapterTitle}>物理と化学</span>
                <span className={styles.chapterMeta}>基礎固め：★★</span>
              </span>
              <span className={styles.chapterCta} aria-hidden="true">
                →
              </span>
            </Link>

            <Link className={styles.chapterCard} href="/basics/properties_prevention">
              <span className={styles.chapterIcon} aria-hidden="true">
                🔥
              </span>
              <span className={styles.chapterBody}>
                <span className={styles.chapterKicker}>第3章</span>
                <span className={styles.chapterTitle}>性質と火災予防</span>
                <span className={styles.chapterMeta}>実戦：★★★</span>
              </span>
              <span className={styles.chapterCta} aria-hidden="true">
                →
              </span>
            </Link>
          </nav>

          <div className={styles.dashboardNote}>
            <ul>
              <li>
                <strong>第1章：</strong>指定数量、保安距離、施設基準、免状制度など頻出法令を学ぶ
              </li>
              <li>
                <strong>第2章：</strong>燃焼、引火点、蒸気圧、比重、消火原理などを整理する
              </li>
              <li>
                <strong>第3章：</strong>各危険物の性質、火災予防、適切な消火方法を学ぶ
              </li>
            </ul>
            <p>
              練習問題は<Link href="/mypage">マイページ</Link>がおすすめです。
            </p>
          </div>
        </section>

        <section className={styles.intro}>
          <h3 className={styles.sectionHeading}>教材の特徴</h3>
          <div className={styles.dashboardNote}>
            <p>
              この教材は、<strong>「基礎知識で理解する → 練習問題で確認する」</strong>
              流れで学べるように作っています。
              乙4でよく出る内容を、章ごと・テーマごとに整理しているので、独学でも順番に進めやすいのが特徴です。
            </p>
            <p>
              各分野では、<strong>基礎知識と対応する練習問題をセット</strong>で用意しています。
              まず要点をつかみ、そのあとで問題を解くことで、知識の抜けや理解不足に気づきやすくなります。
            </p>
            <p>
              はじめて受験する方は第1章から順番に、苦手分野がある方は気になる章から進めても大丈夫です。
              <strong>「何を覚えればいいか」「どこが弱いか」</strong>をつかみやすいように設計しています。
            </p>
          </div>
        </section>

        <section className={styles.intro}>
          <h3 className={styles.sectionHeading}>マイページで進捗を確認する</h3>
          <div className={styles.dashboardNote}>
            <p>
              乙4の勉強は、<strong>どこまで進んだか</strong>と<strong>どこが苦手か</strong>
              が見えないと、途中で手が止まりやすくなります。
              マイページでは、学習状況が自動で記録されるので、今の到達度をひと目で確認できます。
            </p>
            <p>
              どの章をどこまで進めたか、まだ手をつけていない分野はどこかが見えるので、
              <strong>「次に何をやるか」で迷いにくい</strong>のが特徴です。
              特にボリュームの多い法令分野は、進み具合を見ながら計画的に進めるのがおすすめです。
            </p>
            <p>
              まちがえた問題や復習したい問題は、繰り返し確認できるように整理されます。
              <strong>解きっぱなしにせず、苦手を残さない復習</strong>に使ってください。
            </p>
            <p>
              学習を続けるコツは、完璧を目指すことよりも、今の位置を確認しながら少しずつ進めることです。
              マイページを見ながら、取りこぼしのない学習につなげていきましょう。
            </p>
            <Link href="/mypage" className={styles.dashboardButton}>
              マイページを見る
            </Link>
          </div>
        </section>

        <section className={styles.intro}>
          <h3 className={styles.sectionHeading}>試験の基本情報</h3>
          <div className={styles.dashboardNote}>
            <p>
              危険物取扱者試験（乙種第4類）は、各都道府県の消防試験センターで
              年に複数回実施されています。試験はマークシート方式の全35問で、
              <strong>35問中60％以上（21問以上）正解すると合格</strong>となります。
            </p>
            <p>
              試験日・会場・申込期間などは、お住まいの地域の
              <a href="https://www.shoubo-shiken.or.jp/" target="_blank" rel="noopener noreferrer">
                一般財団法人 消防試験研究センター
              </a>
              の公式サイトでご確認ください。
            </p>
          </div>
        </section>
      </div>
    </div>
  </>
  )
}

