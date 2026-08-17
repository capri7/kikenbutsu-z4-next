import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '第1章 危険物に関する法令｜乙種4類危険物取扱者試験の基礎知識',
  description:
    '乙種4類危険物取扱者試験の基礎知識。第1章「危険物に関する法令」の各節を一覧で確認できます。指定数量、保安距離、製造所等の基準、予防規程など頻出論点を網羅しています。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/law',
  },
  robots: 'index,follow',
  openGraph: {
    title: '第1章 危険物に関する法令｜乙種4類危険物取扱者試験の基礎知識',
    description:
      '乙種4類危険物取扱者試験の基礎知識。第1章「危険物に関する法令」の各節を一覧で確認できます。指定数量、保安距離、製造所等の基準、予防規程など頻出論点を網羅しています。',
    type: 'website',
    url: 'https://kikenbutsu-z4.com/basics/law',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary',
    title: '第1章 危険物に関する法令｜乙種4類危険物取扱者試験の基礎知識',
    description:
      '乙種4類危険物取扱者試験の基礎知識。第1章「危険物に関する法令」の各節を一覧で確認できます。指定数量、保安距離、予防規程など頻出論点を網羅しています。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

type Section = {
  slug: string
  title: string
  href?: string
}

const sections: Section[] = [
  { slug: 'legal_framework', title: '1. 消防法の法体系', href: '/basics/law/legal_framework' },
  { slug: 'defined_substances', title: '2. 消防法で規定する危険物', href: '/basics/law/defined_substances' },
  { slug: 'class4_substances', title: '3. 第4類危険物', href: '/basics/law/class4_substances' },
  { slug: 'designated_quantities', title: '4. 危険物の指定数量', href: '/basics/law/designated_quantities' },
  { slug: 'facility_categories', title: '5. 製造所・貯蔵所・取扱所の区分', href: '/basics/law/facility_categories' },
  { slug: 'facility_permissions', title: '6. 製造所等の設置と変更の許可', href: '/basics/law/facility_permissions'},
  { slug: 'notification_of_changes', title: '7. 変更の届出', href: '/basics/law/notification_of_changes'},
  { slug: 'temporary_storage_handling', title: '8. 仮貯蔵と仮取扱い', href: '/basics/law/temporary_storage_handling'},
  { slug: 'handler_certification', title: '9. 危険物取扱者の制度', href: '/basics/law/handler_certification'},
  { slug: 'license_issuance', title: '10. 免状の交付・書換え・再交付', href: '/basics/law/license_issuance'},
  { slug: 'safety_lectures', title: '11. 保安講習', href: '/basics/law/safety_lectures'},
  { slug: 'safety_supervisors', title: '12. 危険物保安監督者', href: '/basics/law/safety_supervisors'},
  { slug: 'chief_safety_officers', title: '13. 危険物保安統括管理者', href: '/basics/law/chief_safety_officers'},
  { slug: 'facility_safety_staff', title: '14. 危険物施設保安員', href: '/basics/law/facility_safety_staff'},
  { slug: 'preventive_regulations', title: '15. 予防規程', href: '/basics/law/preventive_regulations'},
  { slug: 'preventive_regulation_items', title: '16. 予防規程に定めるべき事項', href: '/basics/law/preventive_regulation_items'},
  { slug: 'facility_maintenance_management', title: '17. 危険物施設の維持・管理', href: '/basics/law/facility_maintenance_management'},
  { slug: 'regular_inspections', title: '18. 定期点検', href: '/basics/law/regular_inspections'},
  { slug: 'safety_inspections', title: '19. 保安検査', href: '/basics/law/safety_inspections'},
  { slug: 'safety_distance', title: '20. 保安距離', href: '/basics/law/safety_distance'},
  { slug: 'buffer_space_requirements', title: '21. 保有空地', href: '/basics/law/buffer_space_requirements'},
  { slug: 'manufacturing_facility_standards', title: '22. 製造所の基準', href: '/basics/law/manufacturing_facility_standards'},
  { slug: 'indoor_storage_standards', title: '23. 屋内貯蔵所の基準', href: '/basics/law/indoor_storage_standards'},
  { slug: 'outdoor_tank_storage_standards', title: '24. 屋外タンク貯蔵所の基準', href: '/basics/law/outdoor_tank_storage_standards'},
  { slug: 'indoor_tank_storage_standards', title: '25. 屋内タンク貯蔵所の基準', href: '/basics/law/indoor_tank_storage_standards'},
  { slug: 'underground_tank_storage_standards', title: '26. 地下タンク貯蔵所の基準', href: '/basics/law/underground_tank_storage_standards'},
  { slug: 'simple_tank_storage_standards', title: '27. 簡易タンク貯蔵所の基準', href: '/basics/law/simple_tank_storage_standards'},
  { slug: 'mobile_tank_storage_standards', title: '28. 移動タンク貯蔵所（タンクローリー等）の基準', href: '/basics/law/mobile_tank_storage_standards'},
  { slug: 'outdoor_storage_standards', title: '29. 屋外貯蔵所の基準', href: '/basics/law/outdoor_storage_standards'},
  { slug: 'refueling_station_standards', title: '30. 給油取扱所の基準', href: '/basics/law/refueling_station_standards'},
  { slug: 'self_refueling_station_standards', title: '31. セルフ型の給油取扱所の基準', href: '/basics/law/self_refueling_station_standards'},
  { slug: 'sales_station_standards', title: '32. 販売取扱所の基準', href: '/basics/law/sales_station_standards'},
  { slug: 'signs_and_notices', title: '33. 標識・掲示板', href: '/basics/law/signs_and_notices'},
  { slug: 'general_standards_part1', title: '34. 共通の基準【1】', href: '/basics/law/general_standards_part1'},
  { slug: 'general_standards_part2', title: '35. 共通の基準【2】', href: '/basics/law/general_standards_part2'},
  { slug: 'transportation_standards', title: '36. 運搬の基準', href: '/basics/law/transportation_standards'},
  { slug: 'firefighting_equipment_standards', title: '37. 消火設備と設置基準', href: '/basics/law/firefighting_equipment_standards'},
  { slug: 'alarm_systems', title: '38. 警報設備', href: '/basics/law/alarm_systems'},
  { slug: 'administrative_orders_and_suspensions', title: '39. 措置命令・許可の取消・使用停止命令', href: '/basics/law/administrative_orders_and_suspensions'},
  { slug: 'emergency_measures', title: '40. 事故発生時の応急措置', href: '/basics/law/emergency_measures'},
  { slug: 'chapter1_summary', title: '41. 第1章のまとめ', href: '/basics/law/chapter1_summary'},
]

export default function LawIndexPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第1章：危険物に関する法令' },
        ]}
      />
      <div className="site-main">
        <div className={styles.container}>
          <section className={styles.intro}>
            <h2 className={styles.sectionHeading}>第1章：危険物に関する法令</h2>
            <p className={styles.introText}>
              この章では、乙種第4類で最も出題数が多く、合格の鍵を握る「法令」について学びます。
              <br />
              消防法の基本的な構成から、製造所・貯蔵所に関する規定、免状制度まで幅広くカバーします。
            </p>

            <nav className={styles.chapterIndex} aria-label="第1章の節一覧">
              <ul>
                {sections.map((s) =>
                  s.href ? (
                    <li key={s.slug}>
                      <Link href={s.href}>{s.title}</Link>
                    </li>
                  ) : (
                    <li key={s.slug} className={styles.pendingItem}>
                      <span className={styles.pendingTitle}>{s.title}</span>
                      <span className={styles.pendingLabel}>準備中</span>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </>
  )
}