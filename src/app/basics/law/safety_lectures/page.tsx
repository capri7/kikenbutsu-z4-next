import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import SafetyLecturesQuiz from './SafetyLecturesQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 11節：保安講習',
  description:
    '危険物乙4 第1章11節。保安講習を整理。受講義務の対象者（製造所等で取扱作業に従事する危険物取扱者）、義務なしの例外、受講期限（継続従事・新たに従事・2年以内交付の3パターン）、全国どこでも受講可能な点、未受講による免状返納命令を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/safety_lectures',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 11節：保安講習',
    description:
      '危険物乙4 第1章11節。保安講習を整理。受講義務の対象者（製造所等で取扱作業に従事する危険物取扱者）、義務なしの例外、受講期限（継続従事・新たに従事・2年以内交付の3パターン）、全国どこでも受講可能な点、未受講による免状返納命令を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/safety_lectures',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 11節：保安講習',
    description:
      '危険物乙4 第1章11節。保安講習を整理。受講義務の対象者（製造所等で取扱作業に従事する危険物取扱者）、義務なしの例外、受講期限（継続従事・新たに従事・2年以内交付の3パターン）、全国どこでも受講可能な点、未受講による免状返納命令を確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function SafetyLecturesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '11節：保安講習' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 講習の受講義務 */}
        <section className={shared.section}>
          <h2>講習の受講義務</h2>
          <div className={shared.bandCard}>
            <p>
              製造所等で危険物の取扱作業に従事する<strong>危険物取扱者</strong>（甲種・乙種・丙種のいずれかの免状を有している者）は、都道府県知事が行う保安に関する講習（保安講習）を<strong>定期的に受講</strong>しなければならない。
            </p>
            <p>
              期間内に保安講習を受講しない場合、消防法の規定により都道府県知事から<strong>免状の返納を命じられる</strong>ことがある。
            </p>
            <p>
              ただし、免状の交付は受けていても危険物の取扱作業に従事していない危険物取扱者および、指定数量未満の危険物を貯蔵し、または取り扱う施設の危険物取扱者は、保安講習の<strong>受講義務はない</strong>。
            </p>
            <p><strong>保安講習</strong>は、<strong>全国</strong>どこの都道府県であっても<strong>受講できる</strong>。</p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>製造所等で<strong>実際に取扱作業に従事している危険物取扱者</strong>には、保安講習の受講義務がある。</li>
              <li>期間内に受講しないと、<strong>免状の返納命令</strong>につながることがある。</li>
              <li>保安講習は<strong>どの都道府県でも受講可能</strong>で、取得した免状の都道府県に限られない。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>「従事している危険物取扱者」</strong>だけが受講義務あり、という主語の範囲に注目。</li>
              <li>「指定数量未満の危険物を取り扱う施設」の危険物取扱者は<strong>受講義務なし</strong>。</li>
              <li>保安講習は<strong>全国どこでも受講できる</strong>ため、免状の都道府県と異なる場所でもOK。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>免状を持っている者はすべて保安講習を受けなければならない</strong>」という文は誤り。<strong>取扱作業に従事していない人</strong>には義務なし。
              </li>
              <li>「指定数量未満の危険物を取り扱う施設の危険物取扱者も受講義務がある」と書かれていたら<strong>×</strong>。</li>
              <li>
                「保安講習は免状を交付した都道府県でしか受講できない」という表現も<strong>誤り</strong>。全国どこでも受講できる。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>

        {/* 2. 講習の受講期限 */}
        <section className={shared.section}>
          <h2>講習の受講期限</h2>
          <div className={shared.bandCard}>
            <p>
              危険物取扱者の免状を受けていて、現に製造所等において危険物の取扱作業に従事している者は、当該免状の<strong>交付日</strong>または講習の<strong>受講日</strong>のうち<strong>遅い日</strong>以降に到来する<strong>最初の4月1日から3年以内</strong>に、保安講習を受講しなければならない。
            </p>
          </div>

          <h3>【1】継続して従事する場合</h3>
          <figure
            className={shared.formulaCard}
            aria-labelledby="safety-lectures-title-1"
            aria-describedby="safety-lectures-cap-1"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/law/safety_lectures_1.svg"
              alt="保安講習を受講した日以後、最初の4月1日から3年以内ごとに1回受講する者の受講期限"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption id="safety-lectures-cap-1" className={shared.figureCaption}>
              <span id="safety-lectures-title-1" className={shared.muted}>
                保安講習を受講した日以後、最初の4月1日から3年以内ごとに1回受講する者の受講期限
              </span>
            </figcaption>
          </figure>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>
                「継続して従事する場合」は、<strong>受講日</strong>を基準に、その後の<strong>最初の4月1日から3年以内</strong>に1回受講する。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                図の<strong>「受講日 → 最初の4月1日 → 3年以内 → 3月31日」</strong>の並びを1セットで覚えておくと、計算問題にも対応しやすい。
              </li>
            </ul>
          </div>

          <h3>【2】新たに危険物の取扱作業に従事する者</h3>
          <figure
            className={shared.formulaCard}
            aria-labelledby="safety-lectures-title-2"
            aria-describedby="safety-lectures-cap-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/law/safety_lectures_2.svg"
              alt="危険物取扱作業の従事開始日から1年以内に受講し、その後は最初の4月1日から3年以内ごとに受講する者の受講期限"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption id="safety-lectures-cap-2" className={shared.figureCaption}>
              <span id="safety-lectures-title-2" className={shared.muted}>
                危険物取扱作業の従事開始日から1年以内に受講し、その後は最初の4月1日から3年以内ごとに受講する者の受講期限
              </span>
            </figcaption>
          </figure>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h4>まずここだけ押さえよう！</h4>
            <ul className={shared.compact}>
              <li>最初の保安講習は<strong>従事開始日から1年以内</strong>に1回受講する。</li>
              <li>
                1回目を受講したあとは、【1】と同じく<strong>「その後の最初の4月1日から3年以内ごとに1回」</strong>のルールに切り替わる。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                「<strong>従事開始から1年以内</strong> → 以後は<strong>最初の4月1日から3年以内ごとに1回</strong>」という<strong>2段階の流れ</strong>で覚える。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                最初の期限の起算日は<strong>免状交付日ではなく従事開始日</strong>。選択肢で「免状の交付日から1年以内」と書いてあれば<strong>誤り</strong>。
              </li>
            </ul>
          </div>

          <h3>【3】新たに危険物の取扱作業に従事する者で、かつ、2年以内に免状の交付または講習を受けている者</h3>

          <figure
            className={shared.formulaCard}
            aria-labelledby="safety-lectures-title-3"
            aria-describedby="safety-lectures-cap-3"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/law/safety_lectures_3.svg"
              alt="免状交付日または受講日から最初の4月1日を起点として3年以内に受講する者の受講期限"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />
            <figcaption id="safety-lectures-cap-3" className={shared.figureCaption}>
              <span id="safety-lectures-title-3" className={shared.muted}>
                免状交付日または受講日から最初の4月1日を起点として3年以内に受講する者の受講期限
              </span>
            </figcaption>
          </figure>

          <div className={shared.bandCard}>
            <p>
              新たに危険物の取扱作業に従事する者で、従事開始日の時点で<strong>過去2年以内に免状の交付または保安講習を受けている</strong>場合は、「【1】継続して従事する場合」と同じグループとして扱われる。すでに受けた講習（または免状交付）を基準に、<strong>最初の4月1日から3年以内</strong>に保安講習を受講する。
            </p>
          </div>


          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                【3】に入るのは、<strong>「従事開始日の前2年以内に免状交付 or 保安講習を受けている人」</strong>だけ。2年を<strong>こえている場合は【2】のパターン</strong>になる。
              </li>
              <li>
                受講期限の起算日は<strong>従事開始日ではなく「受講日／免状交付日」</strong>。図の<strong>「受講日／免状交付日 → 最初の4月1日 → 3年以内 → 3月31日」</strong>の順番でイメージしておく。
              </li>
            </ul>
          </div>

          <h3>【4】免状の交付を受けているが、製造所等で取扱作業に従事していない者</h3>
          <div className={shared.bandCard}>
            <p>
              製造所等で危険物の取扱作業に従事していない危険物取扱者、または指定数量未満の危険物を貯蔵・取り扱う施設で取扱作業を行う危険物取扱者は、<strong>保安講習の受講義務はない。</strong>
            </p>
          </div>
        </section>

        {/* 3. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <SafetyLecturesQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}