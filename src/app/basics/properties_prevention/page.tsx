// src/app/basics/properties_prevention/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import theme from '@/app/basics/properties_prevention/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第3章：危険物の性質・火災予防・消火の方法',
  description:
    '危険物乙4 第3章「危険物の性質・火災予防・消火の方法」の目次。危険物の分類、第4類危険物の性状・消火・貯蔵取扱い、特殊引火物から動植物油類までの品名別性状を節ごとに整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/properties_prevention',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第3章：危険物の性質・火災予防・消火の方法',
    description:
      '危険物乙4 第3章「危険物の性質・火災予防・消火の方法」の目次。危険物の分類、第4類危険物の性状・消火・貯蔵取扱い、特殊引火物から動植物油類までの品名別性状を節ごとに整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/properties_prevention',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第3章：危険物の性質・火災予防・消火の方法',
    description:
      '危険物乙4 第3章「危険物の性質・火災予防・消火の方法」の目次。危険物の分類、第4類危険物の性状・消火・貯蔵取扱い、特殊引火物から動植物油類までの品名別性状を節ごとに整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

type IndexItem = {
  title: string
  description: string
  href?: string
}

const ITEMS: IndexItem[] = [
  {
    title: '1. 危険物の分類',
    description: '第1類〜第6類の性質と、第4類の位置づけ。指定数量・危険等級の基本を整理する。',
    href: '/basics/properties_prevention/classification_of_dangerous_goods',
  },
  {
    title: '2. 第4類危険物の性状',
    description: '引火性液体の共通特性。引火点・発火点・蒸気比重・水溶性・非水溶性の知識。',
    href: '/basics/properties_prevention/class4_properties',
  },
  {
    title: '3. 第4類危険物の消火',
    description: '窒息消火が原則の理由と、棒状注水禁止の根拠。泡・粉末・CO2消火の使い分け。',
    href: '/basics/properties_prevention/class4_extinguishing_methods',
  },
  {
    title: '4. 第4類危険物の貯蔵・取扱い',
    description: '可燃性蒸気の滞留防止・静電気対策・容器基準など実務直結の知識。',
    href: '/basics/properties_prevention/class4_storage_handling',
  },
  {
    title: '5. 事故事例と対策',
    description: '実際の事故事例をもとに、火災・爆発の原因と防止策を解説する。（近日公開）',
    href: '/basics/properties_prevention/accident_case_studies',
  },
  {
    title: '6. 特殊引火物の性状',
    description: 'ジエチルエーテル・二硫化炭素など。引火点-40℃以下または発火点100℃以下の定義。',
    href: '/basics/properties_prevention/special_flammable_properties',
  },
  {
    title: '7. 第1石油類の性状',
    description: 'ガソリン・アセトンなど引火点21℃未満の品名別特性と水溶性区分。',
    href: '/basics/properties_prevention/class1_petroleum_properties',
  },
  {
    title: '8. アルコール類の性状',
    description: 'メタノール・エタノールの毒性・水溶性・消火方法の違い。',
    href: '/basics/properties_prevention/alcohol_properties',
  },
  {
    title: '9. 第2石油類の性状',
    description: '灯油・軽油など引火点21℃以上70℃未満。混同しやすい数値の整理。',
    href: '/basics/properties_prevention/class2_petroleum_properties',
  },
  {
    title: '10. 第3石油類の性状',
    description: '重油・クレオソート油など。引火点70℃以上200℃未満と粘度の関係。',
    href: '/basics/properties_prevention/class3_petroleum_properties',
  },
  {
    title: '11. 第4石油類の性状',
    description: 'ギヤー油・シリンダー油など引火点200℃以上。指定数量6,000L。',
    href: '/basics/properties_prevention/class4_petroleum_properties',
  },
  {
    title: '12. 動植物油類の性状',
    description: 'ヨウ素価による乾性油・半乾性油・不乾性油の分類と自然発火のリスク。',
    href: '/basics/properties_prevention/animal_vegetable_oil_properties',
  },
  {
    title: '13. 乙種第4類の主な危険物',
    description: '品名横断で数値・特性を比較整理。総まとめとして活用する。',
    href: '/basics/properties_prevention/main_class4_dangerous_substances',
  },
]

export default function PropertiesPreventionIndexPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第3章：危険物の性質・火災予防・消火の方法' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <div className={styles.container}>
          <section className={styles.intro}>
            <h2 className={styles.sectionHeading}>第3章：危険物の性質・火災予防・消火の方法</h2>
            <p className={styles.introText}>
              この章では、危険物の分類や性質、火災予防のための取扱い方法、消火の知識について学びます。
              <br />
              第4類危険物を中心に、各物質の特徴や事故防止対策、実際の事故例などを通じて、安全な管理と取り扱いの理解を深めます。
            </p>

            <nav className={styles.chapterIndex} aria-label="第3章の節一覧">
              <ul>
                {ITEMS.map((item) =>
                  item.href ? (
                    <li key={item.title}>
                      <Link href={item.href}>{item.title}</Link>
                      <p className={styles.itemDescription}>{item.description}</p>
                    </li>
                  ) : (
                    <li key={item.title} className={styles.pendingItem}>
                      <div className={styles.itemHeader}>
                        <span className={styles.pendingTitle}>{item.title}</span>
                        <span className={styles.pendingLabel}>準備中</span>
                      </div>
                      <p className={styles.itemDescription}>{item.description}</p>
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