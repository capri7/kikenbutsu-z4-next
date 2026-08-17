import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FacilityMaintenanceManagementQuiz from './FacilityMaintenanceManagementQuiz'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 17節：危険物施設の維持・管理',
  description:
    '危険物乙4 第1章17節。所有者等による危険物施設の維持・管理義務と、市町村長等による変更命令（修理・改造・移転）を解説。所有者等の定義や技術上の基準の意味、試験で狙われるひっかけパターンも整理している。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/facility_maintenance_management',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 17節：危険物施設の維持・管理',
    description:
      '危険物乙4 第1章17節。所有者等による危険物施設の維持・管理義務と、市町村長等による変更命令（修理・改造・移転）を解説。所有者等の定義や技術上の基準の意味、試験で狙われるひっかけパターンも整理している。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/facility_maintenance_management',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 17節：危険物施設の維持・管理',
    description:
      '危険物乙4 第1章17節。所有者等による危険物施設の維持・管理義務と、市町村長等による変更命令（修理・改造・移転）を解説。所有者等の定義や技術上の基準の意味、試験で狙われるひっかけパターンも整理している。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

export default function FacilityMaintenanceManagementPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '17節：危険物施設の維持・管理' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        {/* 1. 所有者等の義務 */}
        <section className={shared.section}>
          <h2>所有者等の義務（維持・管理）</h2>
          <div className={shared.bandCard}>
            <p>
              すべての製造所等の<strong>所有者等</strong>は、当該施設の<strong>位置・構造・設備</strong>が<strong>技術上の基準</strong>に<strong>常に適合</strong>するよう<strong>維持・管理</strong>しなければならない。
            </p>
            <p>
              <strong>市町村長等</strong>は、製造所等の位置・構造・設備が技術上の基準に<strong>適合していないと認めるとき</strong>、その<strong>所有者等</strong>に対し、基準に適合させるための<strong>修理</strong>・<strong>改造</strong>・<strong>移転</strong>を<strong>命ずる（変更命令）</strong>ことができる。
            </p>
          </div>

          <div className={`${shared.callout} ${shared.calloutWarn}`}>
            <h3>用語の確認</h3>
            <ul className={shared.compact}>
              <li>
                <strong>所有者等</strong>＝所有者・管理者・占有者で権限を有する者の総称（試験では「所有者等に限る？」などの言い換えに注意）。
              </li>
              <li>
                <strong>技術上の基準</strong>＝危険物施設の安全を確保するための<strong>構造・設備・運用上の標準</strong>。新設時だけでなく稼働中も継続して充足していることが必要。
              </li>
              <li>
                <strong>変更命令</strong>＝市町村長等が基準不適合を是正させるために出す<strong>命令</strong>。内容は<strong>修理・改造・移転</strong>（覚え方：<strong>修・改・移</strong>）。
              </li>
            </ul>
          </div>

          <div className={shared.examNotes}>
            <h4>出る出るポイント！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>所有者等の義務：</strong> 危険物施設の<strong>位置・構造・設備</strong>を、<strong>技術上の基準に常に適合</strong>させておく（新設時だけでなく稼働中もずっと）。
              </li>
              <li>
                <strong>変更命令の3要素：</strong> <strong>市町村長等 → 所有者等</strong> に対し、基準にあわせるための<strong>修理・改造・移転（修・改・移）</strong>を命ずる。
              </li>
              <li>
                <strong>技術上の基準の役割：</strong> 「作るときのチェック」ではなく、点検・更新のたびに<strong>現状を照らし合わせる物差し</strong>になる基準。
              </li>
            </ul>
          </div>

          <div className={shared.examPoints}>
            <h4>ひっかけ注意！</h4>
            <ul className={shared.compact}>
              <li>
                <strong>義務者を絞り込む言い換え：</strong> 「所有者のみ」「管理者のみ」などは×。正しくは<strong>所有者等</strong>（所有者・管理者・占有者など権限を持つ者の総称）。
              </li>
              <li>
                <strong>変更命令の内容を水増し：</strong> 廃止・除却・増設などを混ぜてくるパターンは×。正しいセットは<strong>修理・改造・移転（修・改・移）</strong>だけ。
              </li>
              <li>
                <strong>命令を出す人の入れ替え：</strong> 「所有者等が変更命令を出す」「保安監督者が命ずる」などは誤り。命令するのはあくまで<strong>市町村長等</strong>。
              </li>
              <li>
                <strong>「新設時だけ基準適合でよい」説：</strong> ×。施設は<strong>常に</strong>技術上の基準に適合するよう維持・管理する義務がある。
              </li>
            </ul>
          </div>
        </section>

        {/* 2. インタラクティブクイズ */}
        <section className={`${shared.section} ${shared.quizSection}`}>
          <h2>クイズ</h2>
          <FacilityMaintenanceManagementQuiz />
        </section>

        <section className={shared.signupCta}>
          <a href="/signup">この範囲の問題を解く（登録無料）</a>
        </section>
      </div>
    </>
  )
}
