import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import shared from '@/app/basics/BasicsShared.module.css'
import theme from '@/app/basics/law/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第1章 41節：第1章のまとめ',
  description:
    '危険物乙4 第1章41節。第1章のまとめとして11項目のチェックリストで総復習。各種手続きと申請先、免状の交付、危険物取扱者の区分、選任要件と保安講習、各種届出、定期点検、選任・予防規定、保安距離、保有空地、運搬と移送、許可の取消し・使用停止命令を一覧で確認。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第1章 41節：第1章のまとめ',
    description:
      '危険物乙4 第1章41節。第1章のまとめとして11項目のチェックリストで総復習。各種手続きと申請先、免状の交付、危険物取扱者の区分、選任要件と保安講習、各種届出、定期点検、選任・予防規定、保安距離、保有空地、運搬と移送、許可の取消し・使用停止命令を一覧で確認。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/law/chapter1_summary',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第1章 41節：第1章のまとめ',
    description:
      '危険物乙4 第1章41節。第1章のまとめとして11項目のチェックリストで総復習。各種手続きと申請先、免状の交付、危険物取扱者の区分、選任要件と保安講習、各種届出、定期点検、選任・予防規定、保安距離、保有空地、運搬と移送、許可の取消し・使用停止命令を一覧で確認。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

type ChapterLink = {
  icon: string
  kicker: string
  title: string
  meta: string
  href: string
  isNumCircle?: boolean
}

const CHAPTER_LINKS: ChapterLink[] = [
  {
    icon: '①',
    kicker: '41-1',
    title: '各種手続きと申請先',
    meta: '手続の種類と目的等',
    href: '/basics/law/chapter1_summary/proc_and_offices',
  },
  {
    icon: '②',
    kicker: '41-2',
    title: '免状の交付等',
    meta: '手続きの流れ',
    href: '/basics/law/chapter1_summary/license_issuance',
  },
  {
    icon: '③',
    kicker: '41-3',
    title: '危険物取扱者の区分等',
    meta: '種類と役割',
    href: '/basics/law/chapter1_summary/operator_categories',
  },
  {
    icon: '④',
    kicker: '41-4',
    title: '選任要件と保安講習',
    meta: '要件と受講周期',
    href: '/basics/law/chapter1_summary/appointment_and_lectures',
  },
  {
    icon: '⑤',
    kicker: '41-5',
    title: '各種届出と届出先',
    meta: '提出内容と提出先',
    href: '/basics/law/chapter1_summary/notifications_and_destinations',
  },
  {
    icon: '⑥',
    kicker: '41-6',
    title: '定期点検',
    meta: '点検項目・頻度・記録',
    href: '/basics/law/chapter1_summary/periodic_inspections',
  },
  {
    icon: '⑦',
    kicker: '41-7',
    title: '製造所等における選任・予防規定・定期点検',
    meta: '選任・規定・点検の要点',
    href: '/basics/law/chapter1_summary/plants_appointment_rules_inspections',
  },
  {
    icon: '⑧',
    kicker: '41-8',
    title: '保安距離',
    meta: '距離基準と適用範囲',
    href: '/basics/law/chapter1_summary/safety_distances',
  },
  {
    icon: '⑨',
    kicker: '41-9',
    title: '保有空地',
    meta: '空地幅の基準と計算',
    href: '/basics/law/chapter1_summary/buffer_areas',
  },
  {
    icon: '⑩',
    kicker: '41-10',
    title: '運搬と移送',
    meta: '容器要件・表示・積載量',
    href: '/basics/law/chapter1_summary/transport_and_transfer',
  },
  {
    icon: '11',
    kicker: '41-11',
    title: '許可の取消し・使用停止命令',
    meta: '違反時の行政処分',
    href: '/basics/law/chapter1_summary/revocations_and_suspensions',
    isNumCircle: true,
  },
]

export default function Chapter1SummaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令', href: '/basics/law' },
          { label: '41節：第1章のまとめ' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <section className={shared.section}>
          <h2>第1章のまとめ</h2>
          <div className={shared.bandCard}>
            <p>
              41節は、第1章:危険物に関する法令をまとめです。各節のポイントをテーブルで確認できます。
              <br />
              頻出問題や間違いやすい問題の確認にご活用ください。
            </p>
          </div>

          <nav className={styles.chapterLinks} aria-label="第1章 41節の一覧">
            <div className={styles.chapterGrid}>
              {CHAPTER_LINKS.map((item) => (
                <Link key={item.href} className={styles.chapterCard} href={item.href}>
                  <span className={`${styles.chapterIcon} ${item.isNumCircle ? styles.numCircle : ''}`} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className={styles.chapterBody}>
                    <span className={styles.chapterKicker}>{item.kicker}</span>
                    <span className={styles.chapterTitle}>{item.title}</span>
                    <span className={styles.chapterMeta}>{item.meta}</span>
                  </span>
                  <span className={styles.chapterCta} aria-hidden="true">
                    ›
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </section>
      </div>
    </>
  )
}