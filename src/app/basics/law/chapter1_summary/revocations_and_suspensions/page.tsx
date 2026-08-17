import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節-11：許可の取消し・使用停止命令',
  description:
    '危険物乙4 第1章41節-11。許可の取消し事由（無許可変更・完成検査前の使用・措置命令違反・保安検査未実施・定期点検未実施）と、使用停止命令の該当類型（貯蔵取扱基準遵守命令違反・未選任等・解任命令違反）を一覧で整理。行政処分の重さの違いも確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/revocations_and_suspensions',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節-11：許可の取消し・使用停止命令',
    description:
      '危険物乙4 第1章41節-11。許可の取消し事由（無許可変更・完成検査前の使用・措置命令違反・保安検査未実施・定期点検未実施）と、使用停止命令の該当類型（貯蔵取扱基準遵守命令違反・未選任等・解任命令違反）を一覧で整理。行政処分の重さの違いも確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary/revocations_and_suspensions',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節-11：許可の取消し・使用停止命令',
    description:
      '危険物乙4 第1章41節-11。許可の取消し事由（無許可変更・完成検査前の使用・措置命令違反・保安検査未実施・定期点検未実施）と、使用停止命令の該当類型（貯蔵取扱基準遵守命令違反・未選任等・解任命令違反）を一覧で整理。行政処分の重さの違いも確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function RevocationsAndSuspensionsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '第1章のまとめ', href: '/basics/law/chapter1_summary' },
          { label: '41節-11：許可の取消し・使用停止命令' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 11. 許可の取消し・使用停止命令 */}
        <section className={shared.section}>
          <h2>11. 許可の取消し・使用停止命令</h2>
          <div className={shared.bandCard}>
            <p>
              市町村長等は、所有者等が一定の違反をしたときに、<strong>許可の取消し</strong>または<strong>使用停止命令</strong>を発することができる。行政処分としての重さは<strong>「使用停止命令 ＜ 許可の取消し」</strong>である。
            </p>
          </div>

          <h3>許可の取消し事由</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">許可の取消し事由</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colMatter} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>類型</th>
                  <th scope="col">該当事項</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>無許可変更</th>
                  <td>製造所等の位置・構造・設備を許可を受けずに変更した場合</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>完成検査前の使用</th>
                  <td>完成検査済証の交付前に使用した場合、または仮使用の承認を受けずに使用した場合</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>措置命令違反</th>
                  <td>位置・構造・設備に係る措置命令（修理・改造・移転の命令等）に違反した場合</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>保安検査未実施</th>
                  <td>政令で定める屋外タンク貯蔵所または移送取扱所について、保安の検査を受けていない場合</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>定期点検未実施</th>
                  <td>定期点検の未実施、または点検記録の作成・保存がない場合</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 使用停止命令の該当類型 */}
        <section className={shared.section}>
          <h3>使用停止命令の該当類型</h3>

          <div className={shared.tableContainer}>
            <table className={shared.styledTable}>
              <caption className="sr-only">使用停止命令の該当類型</caption>
              <colgroup>
                <col className={styles.colClass} />
                <col className={styles.colMatter} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col" className={shared.stickyCol}>類型</th>
                  <th scope="col">該当事項</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={shared.stickyCol}>
                    貯蔵／取扱基準
                    <br />
                    遵守命令違反
                  </th>
                  <td>
                    危険物の貯蔵・取扱い基準に関する遵守命令に違反した場合
                    <br />
                    <small>（移動タンク貯蔵所は、当該市町村長の管轄区域内での違反が対象）</small>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>未選任等</th>
                  <td>危険物保安統括管理者を選任していない場合、または選任していても統括管理させていない場合</td>
                </tr>
                <tr>
                  <th scope="row" className={shared.stickyCol}>解任命令違反</th>
                  <td>危険物保安統括管理者または危険物保安監督者に対する解任命令に従わなかった場合</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* まとめ：出る出るポイント・ひっかけ注意 */}
        <section className={shared.section}>
          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>重さの順番</strong>：<strong>許可の取消し ＞ 使用停止命令</strong>。取消しはほぼ復活できない最終カード。
              </li>
              <li>
                <strong>無許可変更</strong>は「モノ（位置・構造・設備）を変えた」話。取扱基準違反（使用停止側）とは別物。
              </li>
              <li>
                <strong>保安検査の対象は限定</strong>：屋外タンク貯蔵所・移送取扱所の一部だけ。すべての施設が対象ではない。
              </li>
              <li>
                <strong>移動タンク貯蔵所の遵守命令違反</strong>は「当該市町村長の管轄区域内」の違反に限られる。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>「取消し／使用停止」と「罰金／拘留」は混ぜない</strong>。前者は行政処分、後者は刑事罰。
              </li>
              <li>
                <strong>未選任等は「選んでいない」だけじゃない</strong>。選んでいても統括管理させていなければ該当する。
              </li>
              <li>
                <strong>解任命令違反は統括管理者と保安監督者の両方が対象</strong>。片方だけに限定した記述は誤り。
              </li>
              <li>
                語尾が<strong>「〜できる」</strong>なら裁量、<strong>「〜しなければならない」</strong>なら義務。ここを逆にした選択肢に注意。
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