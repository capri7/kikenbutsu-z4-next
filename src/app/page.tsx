import type { Metadata } from 'next'
import Link from 'next/link'
import HomeCta from './HomeCta'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '危険物乙4 試験対策｜無料100問＋1400問以上の練習問題',
  description:
    '勉強しているのに受かる気がしない——弱点を自動で特定し、そこだけ集中して潰せるから、忙しくても最短で合格できます。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/',
  },
  robots: 'index,follow',
  openGraph: {
    title: '危険物乙4 試験対策｜無料100問＋1400問以上の練習問題',
    description:
      '勉強しているのに受かる気がしない——弱点を自動で特定し、そこだけ集中して潰せるから、忙しくても最短で合格できます。',
    type: 'website',
    url: 'https://kikenbutsu-z4.com/',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '試験対策｜無料100問＋1400問以上の練習問題',
    description:
      '勉強しているのに受かる気がしない——弱点を自動で特定し、そこだけ集中して潰せるから、忙しくても最短で合格できます。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function HomePage() {
  return (
    <div className={styles.mainContainer}>
      <main className={styles.siteMain}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h2 className={styles.heroTitle}>
              乙4は<span style={{ color: 'var(--accent)' }}>苦手だけ</span>潰して合格
            </h2>

            <p className={styles.heroSubtitle}>
              何から手をつければいいかわからない。
              <br />
              時間がない。一回落ちてまた受ける。
              <br />
              そんなあなたのために、間違えた問題だけを繰り返す設計にしました。
            </p>

            <div className={styles.heroBadges}>
              <span className={styles.heroBadge}>📱 スマホ最適化</span>
              <span className={styles.heroBadge}>✅ 本番そっくり5択形式</span>
              <span className={styles.heroBadge}>📊 マイページで弱点管理</span>
            </div>

            <div className={styles.heroCtas}>
              <Link href="/signup" className="btn btn-primary">
                無料登録して100問を解く
              </Link>
            </div>

            <div className={styles.heroMeta}>
              <p style={{ fontSize: '0.85em', color: '#666' }}>
                クレジットカード不要。メールアドレスだけで登録完了。
              </p>
              <p style={{ marginTop: 8, fontSize: '0.85em', textAlign: 'center' }}>
                <Link href="/contents/free?reset=1" style={{ color: '#666' }}>
                  登録なしで32問を試す
                </Link>
              </p>
              <p className={styles.heroLoginNote}>
                すでに登録済みの方は <Link href="/login">こちら</Link>からログイン。
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>この教材を使う3つの理由</h2>
          <div className={styles.howto}>
            <div className="card">
              <div className={styles.reasonNum}>①</div>
              <h3>
                「次に何をすべきか」が
                <br />
                常に明確
              </h3>
              <p>
                分野別の正答率・誤答リスト・復習リストを自動で記録。どこが苦手か、今日何をやればいいかが一目でわかります。闇雲に全問を解く必要はありません。
              </p>
            </div>

            <div className="card">
              <div className={styles.reasonNum}>②</div>
              <h3>
                繰り返すほど
                <br />
                合格に近づく設計
              </h3>
              <p>
                間違えた問題は誤答リストに自動で貯まります。次はそれだけ解き直す。繰り返しの学習で苦手を克服できるので、最短で合格ラインに近づきます。
              </p>
            </div>

            <div className="card">
              <div className={styles.reasonNum}>③</div>
              <h3>
                1問ずつ。
                <br />
                スキマ時間で積み上がる
              </h3>
              <p>
                スマホで1問ずつ解けるので、通勤・休憩・作業の合間でも学習が続きます。解いた記録はすべてマイページに自動保存。紙のメモも自己管理も不要です。
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>勉強の流れ</h2>
          <div className={styles.feature}>
            <div className="card">
              <div className={styles.stepRow}>
                <div className={styles.stepNum}>1</div>
                <div>
                  <div className={styles.stepLabel}>STEP 1</div>
                  <h3 className={styles.stepTitle}>「どこが出るか」から始める</h3>
                  <p>
                    基礎知識ページで試験範囲を確認する。「出る出るポイント」と「ひっかけ注意」を押さえれば、ムダな勉強をせずに最短ルートで合格ラインへ。
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className={styles.stepRow}>
                <div className={styles.stepNum}>2</div>
                <div>
                  <div className={styles.stepLabel}>STEP 2</div>
                  <h3 className={styles.stepTitle}>無料登録で100問＋マイページを使う</h3>
                  <p>
                    忙しくても、スキマ時間に1問ずつ解くだけで苦手が消えていく。メールアドレスだけで登録完了、無料100問＋苦手がわかるマイページがすぐ使えます。
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className={styles.stepRow}>
                <div className={styles.stepNum}>3</div>
                <div>
                  <div className={styles.stepLabel}>STEP 3</div>
                  <h3 className={styles.stepTitle}>間違えた問題だけ繰り返して合格へ</h3>
                  <p>
                    間違えた問題だけが自動で貯まり、次はそれだけ解き直す。全問こなす必要はなく、苦手だけに集中するから、最短で合格ラインを超えられます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.homeSectionHeader}>
          <h2 className={styles.sectionTitle} id="dash-title">
            効率的に学習できるマイページ
          </h2>
        </div>
        <section className={styles.sectionDashboard} aria-labelledby="dash-title">
          <div className={styles.dashHero}>
            <div className={styles.dashCopy}>
              <ul className={styles.dashPoints}>
                <li>大分野・小分野ごとのバーで「どこまで学習したか」がひと目で分かる。</li>
                <li>誤答リスト・復習リストから、次にやる問題だけをすぐ呼び出せる。</li>
                <li>試験日まで学習量をグラフで追えるので、モチベーションが落ちにくい。</li>
              </ul>
            </div>

            <div className={`${styles.dashDevice} ${styles.dashDeviceMain}`}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreenWrap}>
                  <img
                    src="/images/mypage1.svg"
                    alt="全体の学習状況のイメージ"
                    className={styles.phoneScreen}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className={styles.phoneCaption}>全体の学習状況のイメージ</p>
            </div>

            <div className={`${styles.dashDevice} ${styles.dashDeviceLeft}`}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreenWrap}>
                  <img
                    src="/images/mypage2.svg"
                    alt="小分野別の進捗イメージ"
                    className={styles.phoneScreen}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className={styles.phoneCaption}>小分野別の進捗イメージ</p>
            </div>

            <div className={`${styles.dashDevice} ${styles.dashDeviceRight}`}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreenWrap}>
                  <img
                    src="/images/mypage3.svg"
                    alt="復習リストと誤答リストのイメージ"
                    className={styles.phoneScreen}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className={styles.phoneCaption}>復習リストと誤答リストのイメージ</p>
            </div>
          </div>
        </section>

        <section className={styles.sectionCta}>
          <div className={styles.ctaBand}>
            <div className="card">
              <h3>1,573問。合格に、迷いはいらない。</h3>
              <p>
                無料の100問から、有料プランの1,472問まで、乙4に出る範囲を余すことなく網羅。ここにある問題を解き切れば、初受験でも合格ラインに届きます。あとは、始めるだけです。
              </p>
            </div>
          </div>

          <div className={styles.heroButtons}>
            <HomeCta />
            <Link href="/contents/free?reset=1" className="btn btn-secondary" style={{ fontSize: '0.85em', opacity: 0.75 }}>
              登録なしで32問
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}