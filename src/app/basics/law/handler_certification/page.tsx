import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import HandlerCertificationQuiz from './HandlerCertificationQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 9節：危険物取扱者の制度',
  description:
    '危険物乙4 第1章9節。危険物取扱者の制度を整理。取扱作業における危険物取扱者の責務、無資格者が作業できる条件（甲種・乙種の立会い）、免状の区分（甲種・乙種・丙種）と取扱い・立会いの範囲、指定数量未満の危険物の取扱いルールを教科書的に確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/handler_certification',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 9節：危険物取扱者の制度',
    description:
      '危険物乙4 第1章9節。危険物取扱者の制度を整理。取扱作業における危険物取扱者の責務、無資格者が作業できる条件（甲種・乙種の立会い）、免状の区分（甲種・乙種・丙種）と取扱い・立会いの範囲、指定数量未満の危険物の取扱いルールを教科書的に確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/handler_certification',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 9節：危険物取扱者の制度',
    description:
      '危険物乙4 第1章9節。危険物取扱者の制度を整理。取扱作業における危険物取扱者の責務、無資格者が作業できる条件（甲種・乙種の立会い）、免状の区分（甲種・乙種・丙種）と取扱い・立会いの範囲、指定数量未満の危険物の取扱いルールを確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function HandlerCertificationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '9節：危険物取扱者の制度' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 危険物取扱者の責務 */}
        <section className={shared.section}>
          <h2>危険物取扱者の責務</h2>
          <div className={shared.bandCard}>
            <p>
              製造所・貯蔵所・取扱所などで危険物を取り扱う作業は、必ず<strong>危険物取扱者</strong>が行う必要がある。作業に従事する際には、法令で定められた<strong>貯蔵・取扱いの技術基準</strong>を守るとともに、危険物の<strong>保安確保</strong>（事故を起こさないように安全を保つこと）に細心の注意を払わなければならない。
            </p>
            <p>
              危険物取扱者の資格を持たない人は、<strong>甲種</strong>または<strong>乙種</strong>危険物取扱者が立ち会っていないかぎり、危険物の取扱作業をしてはならない。
            </p>
            <p>
              甲種または乙種の危険物取扱者が立ち会うときは、作業者が法令で定める貯蔵・取扱いの技術基準を遵守しているか<strong>監督</strong>し、必要に応じて適切な<strong>指示</strong>を行う責任がある。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>危険物の取扱作業は<strong>危険物取扱者が実施</strong>する。</li>
              <li>無資格者が作業できるのは、<strong>甲種または乙種の危険物取扱者が立ち会うときだけ</strong>。</li>
              <li>立ち会う危険物取扱者は、作業者を<strong>監督</strong>し、必要に応じて<strong>指示</strong>を行う義務がある。</li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>「誰が危険物の取扱作業を行うか」→ <strong>危険物取扱者が行う</strong>。</li>
              <li>「無資格者が危険物の取扱作業をできる条件」→ <strong>甲種または乙種が立ち会っていること</strong>。</li>
              <li>「立ち会う危険物取扱者の役割」→ <strong>監督</strong>＋<strong>指示</strong>のセットで覚える。</li>
            </ul>
          </div>
        </section>

        {/* 2. 免状の区分 */}
        <section className={shared.section}>
          <h2>免状の区分</h2>
          <div className={shared.bandCard}>
            <p>
              <strong>危険物取扱者</strong>とは、危険物取扱者試験に合格し、都道府県知事などから<strong>免状の交付を受けた者</strong>を指す。免状は、取り扱える危険物の範囲によって<strong>甲種・乙種・丙種</strong>の3種類に分かれる。
            </p>
            <p>
              <strong>乙種免状</strong>は、取扱可能な危険物の種類に応じて第1類から第6類までに細かく分かれており、<strong>免状に指定された類の危険物だけ</strong>を取り扱うことができる。たとえば、乙種第4類免状を持っている人は、第4類の危険物に限って取扱い・立合いが可能である。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutOk}`}>
            <h3>まずここだけ押さえよう！</h3>
            <ul className={shared.compact}>
              <li>危険物取扱者は<strong>免状を交付された人</strong>のこと。</li>
              <li>免状の区分は<strong>甲種・乙種・丙種の3つ</strong>。</li>
              <li>乙種は<strong>第1類〜第6類のうち、免状に書かれた類だけ</strong>取り扱える。</li>
            </ul>
          </div>

          <h3>危険物取扱者の免状の区分</h3>
          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">危険物取扱者の免状の区分</caption>
              <colgroup>
                <col className={styles.colClassification} />
                <col className={styles.colDangerousGoods} />
                <col className={styles.colAttendance} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">取扱いできる危険物</th>
                  <th scope="col">立合い</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>甲種</strong></th>
                  <td>すべての危険物</td>
                  <td>すべての危険物の取扱い作業に立ち会える</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>乙種</strong></th>
                  <td>指定された類（第1類〜第6類）の危険物のみ</td>
                  <td><strong>指定された類</strong>の危険物の取扱作業に立ち会える</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}><strong>丙種</strong></th>
                  <td>指定された危険物のみ（※）</td>
                  <td><strong>立合いはできない</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            ※丙種危険物取扱者が扱える指定危険物には、ガソリン・灯油・軽油、第3石油類（重油・潤滑油および130℃以上のものに限る）、第4石油類、動植物油類がある。
          </p>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>甲種</strong>：すべての危険物を「取扱い・立合い」ともにOK。</li>
              <li><strong>乙種</strong>：<strong>免状に書かれた類だけ</strong>取扱い・立合いOK（例：乙4 → 第4類だけ）。</li>
              <li><strong>丙種</strong>：指定された危険物（ガソリン・灯油・軽油など）だけ取扱いOK。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>丙種は<strong>取扱いはできるが立合い不可</strong>。ここを逆にする選択肢が定番。</li>
              <li>乙種は「<strong>危険物の類</strong>」に対する免状であって、「第◯石油類」だけの免状ではない点に注意。</li>
              <li>甲種は「すべての危険物OK」だが、当然<strong>法令・技術基準の遵守義務</strong>は他と同じくある。</li>
            </ul>
          </div>
        </section>

        {/* 3. 指定数量未満の危険物の取扱い */}
        <section className={shared.section}>
          <h3>指定数量未満の危険物の取扱い</h3>
          <div className={shared.bandCard}>
            <p>
              危険物は、一定量以上を扱うときには<strong>指定数量</strong>を超えるため、許可や危険物取扱者が必要になる。これに対して、<strong>指定数量未満</strong>の範囲であれば、場所によっては危険物取扱者がいなくても取扱いが認められる。
            </p>
            <p>
              ただし、<strong>製造所・貯蔵所・取扱所など（＝製造所等）</strong>では、指定数量未満であっても<strong>危険物取扱者の関与が必要</strong>である。自宅のストーブ用の灯油補充のように、<strong>製造所以外</strong>で少量を扱う場合とはルールが異なる点に注意する。
            </p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">指定数量未満の危険物の取扱い</caption>
              <colgroup>
                <col className={styles.colItems} />
                <col className={styles.colContents} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>区分</th>
                  <th scope="col">取扱いできる者</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    製造所等での取扱作業
                  </th>
                  <td>
                    <ol className={shared.compact}>
                      <li>甲種・乙種（取得した免状の類に限る）・丙種の危険物取扱者</li>
                      <li>甲種・乙種（取得した免状の類に限る）の危険物取扱者の立合いを受けた者</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    製造所等以外での取扱作業
                  </th>
                  <td>危険物取扱者である必要はなし。（例：自宅のストーブに灯油を補充するなど）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li><strong>製造所等</strong>では、指定数量未満でも<strong>危険物取扱者の関与が必須</strong>。</li>
              <li>甲種・乙種・丙種のいずれかを持つ人は、指定数量未満であれば<strong>製造所等で自ら取扱いOK</strong>。</li>
              <li>免状を持たない人でも、<strong>甲種または乙種の立合い</strong>があれば、製造所等で指定数量未満の危険物を取り扱える。</li>
              <li><strong>製造所等以外</strong>では、指定数量未満の範囲なら危険物取扱者でなくても取り扱い可能。</li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                「指定数量未満なら<strong>どこでも誰でもOK</strong>」は誤り。→ 製造所等では<strong>取扱者 or 立合い</strong>が必要。
              </li>
              <li>
                立合いができるのは<strong>甲種・乙種</strong>だけ。丙種は<strong>自分で取扱うことはできるが、立合いはできない</strong>点でよくひっかけになる。
              </li>
              <li>
                自宅でストーブに灯油を入れるケースなどは「<strong>製造所以外＋指定数量未満</strong>」の典型例としてセットで押さえる。
              </li>
            </ul>
          </div>
        </section>

        {/* 4. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <HandlerCertificationQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}