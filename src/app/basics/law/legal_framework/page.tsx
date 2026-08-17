import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LegalFrameworkQuiz from './LegalFrameworkQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 1節：消防法の法体系',
  description:
    '危険物乙4 第1章1節。消防法の法体系を整理。法律・政令・省令の違い、優先順位、用語の読み替え、条文の関係を教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/legal_framework',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 1節：消防法の法体系',
    description:
      '危険物乙4 第1章1節。消防法の法体系を整理。法律・政令・省令の違い、優先順位、用語の読み替え、条文の関係を教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/legal_framework',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 1節：消防法の法体系',
    description:
      '危険物乙4 第1章1節。消防法の法体系を整理。法律・政令・省令の違い、優先順位、用語の読み替え、条文の関係を教科書的に確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function LegalFrameworkPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '1節：消防法の法体系' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 消防法の法体系のポイント */}
        <section className={shared.section}>
          <h2>消防法の法体系</h2>

          <div className={shared.bandCard}>
            <p>
              <strong>結論：</strong>
              消防法のルールは「法律 → 政令 → 省令」の3層でできています（上ほど強く、下ほど細かい）。
            </p>

            <ul className={shared.compact}>
              <li><strong>法律（消防法）</strong>：国会が制定。危険物を含む「大枠のルール」を定めます。</li>
              <li><strong>政令</strong>：内閣が制定。法律を実施するために「具体的な基準」を決めます。</li>
              <li><strong>省令</strong>：各省の大臣が制定。現場で運用できるよう「手順・様式レベル」まで細かく定めます。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p><strong>下位（政令・省令）は上位（法律）に反してはいけない</strong>。迷ったら上位から確認。</p>
          </div>
        </section>

        {/* 2. 図解（ピラミッド） */}
        <section className={shared.section}>
          <h2 id="legal-framework-title-1">法律・政令・省令のピラミッド</h2>

          <figure
            className={shared.formulaCard}
            aria-labelledby="legal-framework-title-1"
            aria-describedby="legal-framework-cap-1"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/basics/law/legal-framework.svg"
              alt="法律・政令・省令の関係（上ほど優先、下ほど具体的）を示す図"
              className={shared.circuitSvg}
              loading="lazy"
              decoding="async"
              width={800}
              height={280}
            />

            <figcaption id="legal-framework-cap-1" className={shared.figureCaption}>
              <strong>図の見方：</strong>
              上に行くほど「優先されるルール」、下に行くほど「運用のための細かい決まり」になります。
              <ul className={shared.compact}>
                <li>法律：原則（大枠）</li>
                <li>政令：基準の具体化</li>
                <li>省令：運用・手続きの詳細</li>
              </ul>
              <p className={shared.muted}>覚え方：国会 → 内閣 → 各省（国→内→省）</p>
            </figcaption>
          </figure>
        </section>

        {/* 3. 用語解説 */}
        <section className={shared.section}>
          <h2>用語と仕組み</h2>

          <div className={shared.bandCard}>
            <p className={shared.muted}>まずはこの3つ。ここが分かると、後の条文が一気に読みやすくなります。</p>

            <ul className={shared.compact}>
              <li><strong>法律（消防法）</strong><br />国会で制定。危険物を含む「大枠」を決めます。</li>
              <li><strong>政令（危険物の規制に関する政令）</strong><br />内閣が制定。「基準」を具体化します。</li>
              <li><strong>省令（危険物の規制に関する規則）</strong><br />各省大臣が制定。「運用ルール」を細かく定めます。</li>
            </ul>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう!</h3>
            <ul className={shared.compact}>
              <li><strong>強さ（優先順位）</strong>：法律 → 政令 → 省令（上ほど強い）</li>
              <li><strong>作る人</strong>：国会 → 内閣 → 各省（国→内→省）</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>「法令」とだけ書かれている場合は、「消防法」「危険物の規制に関する政令」「危険物の規制に関する規則」の3つ全体をまとめて指す。</li>
              <li>「法」「政令」「規則」と書かれている場合は、それぞれ「消防法」「危険物の規制に関する政令」「危険物の規制に関する規則」を略して言っていると考える。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>危険物の分野では「省令」という言い方でも、名称が<strong>「規則」</strong>になっている（＝省令なのに“規則”）。ここで混乱させにくる。</li>
              <li>問題文で「法」「政令」「規則」と短く書かれていたら、まず<strong>正式名称に戻して読み替える</strong>。</li>
            </ul>
          </div>
        </section>

        {/* 4. 具体例テーブル */}
        <section className={shared.section}>
          <h2>法・政令・規則の例</h2>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">法・政令・規則の例</caption>
              <colgroup>
                <col style={{ width: '6rem' }} />
                <col style={{ width: '12rem' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>種別</th>
                  <th scope="col">条文</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    法第13条の2第3項<br /><small>（免状の交付）</small>
                  </th>
                  <td>危険物取扱者免状は、危険物取扱者試験に合格した者に対し、都道府県知事が交付する。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    政令第32条<br /><small>（免状の交付の申請）</small>
                  </th>
                  <td>
                    法第13条の2第3項の危険物取扱者免状の交付を受けようとする者は、申請書に総務省令で定める書類を添えて、
                    当該免状に係る危険物取扱者試験を行った都道府県知事に提出しなければならない。
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    規則第50条第2項<br /><small>（免状交付申請書の添付書類）</small>
                  </th>
                  <td>
                    政令第32条の総務省令で定める書類は、次のとおりとする。
                    <ol className={shared.compact}>
                      <li>危険物取扱者試験に合格したことを証明する書類</li>
                      <li>現に交付を受けている免状（既得免状）という。</li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. まずここだけ押さえよう! */}
        <section className={shared.section}>
          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずはここだけ押さえよう!</h3>
            <ul className={shared.compact}>
              <li>法律：<strong>国会が決める「大枠ルール」</strong></li>
              <li>政令：<strong>内閣が動かす「実施ルール」</strong></li>
              <li>省令：<strong>各省が詰める「細かいルール」</strong></li>
            </ul>
          </div>
        </section>

        {/* 6. 出る出るポイント（読み替えルール） */}
        <section className={shared.section}>
          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>「法令」とあれば、<strong>消防法・危険物政令・危険物規則</strong>をまとめて指す。</li>
              <li>「法」「政令」「規則」と分けて書かれたら、<strong>それぞれの略称</strong>だと考える。</li>
            </ul>
          </div>
        </section>

        {/* 7. ひっかけ注意（迷いどころ） */}
        <section className={shared.section}>
          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>「省令」＝ <strong>危険物の規制に関する規則</strong>（“規則”だけ見て別物と勘違いしやすい）。</li>
              <li>迷ったら上位から：<strong>法律 ＞ 政令 ＞ 省令</strong>（下位は上位に反できない）。</li>
            </ul>
          </div>
        </section>

        {/* 8. クイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2 id="quiz-label">クイズ</h2>
          <LegalFrameworkQuiz />
        </section>

        {/* 次に進む */}
        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}