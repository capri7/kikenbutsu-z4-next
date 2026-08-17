import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節-2：免状の交付等',
  description:
    '危険物乙4 第1章41節-2。危険物取扱者免状の交付・書換え・再交付の手続と、免状の不交付（欠格事由）を一覧で整理。申請事由・申請先・添付書類、写真の撮影日から10年経過、6か月以内の写真、亡失発見10日以内、返納命令1年・罰金以上2年の欠格期間まで、試験で狙われる数字と都道府県知事の区分を確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/license_issuance',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節-2：免状の交付等',
    description:
      '危険物乙4 第1章41節-2。危険物取扱者免状の交付・書換え・再交付の手続と、免状の不交付（欠格事由）を一覧で整理。申請事由・申請先・添付書類、写真の撮影日から10年経過、6か月以内の写真、亡失発見10日以内、返納命令1年・罰金以上2年の欠格期間まで、試験で狙われる数字と都道府県知事の区分を確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/license_issuance',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節-2：免状の交付等',
    description:
      '危険物乙4 第1章41節-2。危険物取扱者免状の交付・書換え・再交付の手続と、免状の不交付（欠格事由）を一覧で整理。申請事由・申請先・添付書類、写真の撮影日から10年経過、6か月以内の写真、亡失発見10日以内、返納命令1年・罰金以上2年の欠格期間まで、試験で狙われる数字と都道府県知事の区分を確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function LicenseIssuancePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-2：免状の交付等' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 2. 免状の交付等 */}
        <section className={shared.section}>
          <h2>2. 免状の交付等</h2>
          <div className={shared.bandCard}>
            <p>※「申請先」は原則として免状を所管する都道府県知事である。実務の詳細は各都道府県の案内に従う。</p>
          </div>

          <h3>免状の交付・書換え・再交付の手続</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">免状の交付・書換え・再交付の手続</caption>
              <colgroup>
                <col className={styles.colProcedure} />
                <col className={styles.colReason} />
                <col className={styles.colApply} />
                <col className={styles.colDocument} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>手続</th>
                  <th scope="col">申請事由</th>
                  <th scope="col">申請先</th>
                  <th scope="col">添付するもの</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>交付</th>
                  <td>試験に合格したとき</td>
                  <td>試験を行った都道府県知事</td>
                  <td>合格を証明する書類（合格通知等）</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>書換え</th>
                  <td>
                    氏名又は本籍の変更／
                    <br />
                    免状の写真の<strong>撮影日から10年経過</strong>
                  </td>
                  <td>免状を交付した都道府県知事</td>
                  <td>
                    氏名・本籍変更の確認書類（戸籍抄本等）／
                    <br />
                    6か月以内に撮影した写真
                  </td>
                </tr>
                <tr>
                  <th scope="rowgroup" rowSpan={2} className={shared.stickyCol}>再交付</th>
                  <td>亡失・滅失等／汚損・破損</td>
                  <td>免状の交付又は書換えをした都道府県知事</td>
                  <td>汚損・破損の場合は当該免状を添付</td>
                </tr>
                <tr>
                  <td>亡失した免状を発見したとき（再交付後）</td>
                  <td>再交付をした都道府県知事</td>
                  <td>
                    発見した免状を<strong>10日以内</strong>に提出する
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 免状の不交付（欠格事由） */}
        <section className={shared.section}>
          <h3>免状の不交付（欠格事由）</h3>
          <div className={shared.bandCard}>
            <p>次のいずれかに該当する者には、免状は交付されない。</p>
            <p>※ 欠格期間経過後は申請可。ただし他の要件（本人確認・写真等）を満たす必要がある。</p>
          </div>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">免状の不交付（欠格事由）</caption>
              <colgroup>
                <col className={styles.colDisqualification} />
                <col className={styles.colPeriod} />
                <col className={styles.colPoints} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>欠格事由</th>
                  <th scope="col">欠格期間</th>
                  <th scope="col">補足</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    都道府県知事から
                    <br />
                    免状の返納を
                    <br />
                    命じられた者
                  </th>
                  <td>
                    <strong>返納命令の日から1年</strong>
                  </td>
                  <td>返納の理由により一定期間は再交付・新規交付を受けられない。</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    罰金以上の刑に
                    <br />
                    処せられた者
                  </th>
                  <td>
                    <strong>刑の執行が終わり</strong>又は<strong>執行を受けなくなった日から2年</strong>
                  </td>
                  <td>執行猶予が満了（又は取り消し）となり「受けなくなった」時点から起算。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <p>
              <strong>数字セットで丸暗記：</strong>
              「返納＝1年」「罰金以上＝2年」「写真10年」「写真は6か月以内」「発見届は10日以内」。まずはこの数字だけ頭に入れておく。
            </p>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意</h4>
            <ul className={shared.compact}>
              <li>
                <strong>交付の申請先</strong>＝<strong>「試験を行った」都道府県知事</strong>。今住んでいる県の知事じゃない。
              </li>
              <li>
                <strong>書換えの事由</strong>＝<strong>氏名・本籍変更</strong>か<strong>写真の撮影日から10年経過</strong>。どちらか一方でも書換え。
              </li>
              <li>
                <strong>書換えの申請先</strong>＝<strong>免状を交付した都道府県知事</strong>。引っ越し先の知事に出さない。
              </li>
              <li>
                <strong>添付書類の数字</strong>＝戸籍抄本など＋<strong>6か月以内に撮った写真</strong>。「10年」は写真の経過年数、「6か月」は提出写真の新しさ。
              </li>
              <li>
                <strong>再交付の申請先</strong>＝<strong>交付または書換えをした都道府県知事</strong>。汚損・破損のときはその免状も一緒に出す。
              </li>
              <li>
                <strong>亡失後に発見</strong>＝<strong>再交付をした知事へ10日以内</strong>に提出。ここは数字のひっかけポイント。
              </li>
              <li>
                <strong>不交付の欠格期間</strong>＝返納命令で<strong>1年</strong>／罰金以上の刑で<strong>2年</strong>。スタートは「返納命令の日」「執行が終わり・受けなくなった日」から。
              </li>
              <li>
                <strong>用語の落とし穴</strong>＝<strong>住所変更だけでは書換えにならない</strong>／免状そのものに有効期限はなく、更新のスイッチは<strong>写真が10年経過</strong>したとき。
              </li>
            </ul>
          </div>
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">無料登録して練習問題を解く</a>
        </section>
      </div>
    </>
  )
}