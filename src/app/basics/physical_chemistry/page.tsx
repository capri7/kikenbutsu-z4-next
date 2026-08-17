// src/app/basics/physical_chemistry/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import theme from '@/app/basics/physical_chemistry/theme.module.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '基礎知識 | 第2章：基礎的な物理・化学',
  description:
    '危険物乙4 第2章「基礎的な物理・化学」の目次。燃焼、電気、熱の移動、物質の状態変化や化学反応など、危険物取扱いに必要な物理・化学の基礎知識を節ごとに整理して確認できる。',
  alternates: {
    canonical: 'https://kikenbutsu-z4.com/basics/physical_chemistry',
  },
  robots: 'index,follow',
  openGraph: {
    title: '基礎知識 | 第2章：基礎的な物理・化学',
    description:
      '危険物乙4 第2章「基礎的な物理・化学」の目次。燃焼、電気、熱の移動、物質の状態変化や化学反応など、危険物取扱いに必要な物理・化学の基礎知識を節ごとに整理して確認できる。',
    type: 'article',
    url: 'https://kikenbutsu-z4.com/basics/physical_chemistry',
    siteName: '危険物乙4 危険物取扱者試験対策',
    images: [{ url: 'https://kikenbutsu-z4.com/images/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '基礎知識 | 第2章：基礎的な物理・化学',
    description:
      '危険物乙4 第2章「基礎的な物理・化学」の目次。燃焼、電気、熱の移動、物質の状態変化や化学反応など、危険物取扱いに必要な物理・化学の基礎知識を節ごとに整理して確認できる。',
    images: ['https://kikenbutsu-z4.com/images/logo.png'],
  },
}

type Section = {
  slug: string
  title: string
  href?: string
}

const sections: Section[] = [
  { slug: 'chemistry_of_combustion', title: '1. 燃焼の化学', href: '/basics/physical_chemistry/chemistry_of_combustion' },
  { slug: 'types_of_combustion', title: '2. 燃焼の区分', href: '/basics/physical_chemistry/types_of_combustion' },
  { slug: 'ease_of_combustion', title: '3. 燃焼の難易', href: '/basics/physical_chemistry/ease_of_combustion' },
  { slug: 'ignition_and_flash_point', title: '4. 引火と発火', href: '/basics/physical_chemistry/ignition_and_flash_point' },
  { slug: 'flammability_range', title: '5. 燃焼範囲', href: '/basics/physical_chemistry/flammability_range' },
  { slug: 'spontaneous_combustion', title: '6. 自然発火', href: '/basics/physical_chemistry/spontaneous_combustion' },
  { slug: 'dust_explosions', title: '7. 粉じん爆発', href: '/basics/physical_chemistry/dust_explosions' },
  { slug: 'extinguishing_agents', title: '8. 消火と消火剤', href: '/basics/physical_chemistry/extinguishing_agents' },
  { slug: 'electricity_batteries', title: '9. 電気の計算 / 電池', href: '/basics/physical_chemistry/electricity_batteries' },
  { slug: 'static_electricity', title: '10. 静電気', href: '/basics/physical_chemistry/static_electricity' },
  { slug: 'electrolysis', title: '11. 電気分解', href: '/basics/physical_chemistry/electrolysis' },
  { slug: 'states_of_matter', title: '12. 物質の三態', href: '/basics/physical_chemistry/states_of_matter' },
  { slug: 'boiling_point_vapor_pressure', title: '13. 沸点と飽和蒸気圧', href: '/basics/physical_chemistry/boiling_point_vapor_pressure' },
  { slug: 'specific_gravity_vapor_density', title: '14. 比重と蒸気比重', href: '/basics/physical_chemistry/specific_gravity_vapor_density' },
  { slug: 'gas_laws', title: '15. ボイルの法則/シャルルの法則/ドルトンの法則', href: '/basics/physical_chemistry/gas_laws' },
  { slug: 'heat_and_specific_heat', title: '16. 熱量と比熱', href: '/basics/physical_chemistry/heat_and_specific_heat' },
  { slug: 'heat_transfer', title: '17. 熱の移動', href: '/basics/physical_chemistry/heat_transfer' },
  { slug: 'thermal_expansion', title: '18. 熱膨張', href: '/basics/physical_chemistry/thermal_expansion' },
  { slug: 'physical_and_chemical_changes', title: '19. 物理変化と化学変化', href: '/basics/physical_chemistry/physical_and_chemical_changes' },
  { slug: 'elements_compounds_mixtures', title: '20. 単体・化合物・混合物', href: '/basics/physical_chemistry/elements_compounds_mixtures' },
  { slug: 'basics_of_chemistry', title: '21. 科学の基礎', href: '/basics/physical_chemistry/basics_of_chemistry' },
  { slug: 'reaction_rate_and_equilibrium', title: '22. 反応速度と化学平衡', href: '/basics/physical_chemistry/reaction_rate_and_equilibrium' },
  { slug: 'acids_and_bases', title: '23. 酸と塩基（アルカリ）', href: '/basics/physical_chemistry/acids_and_bases' },
  { slug: 'oxidation_and_reduction', title: '24. 酸化と還元', href: '/basics/physical_chemistry/oxidation_and_reduction' },
  { slug: 'mixing_hazards', title: '25. 混合危険', href: '/basics/physical_chemistry/mixing_hazards' },
  { slug: 'classification_of_elements', title: '26. 元素の分類', href: '/basics/physical_chemistry/classification_of_elements' },
  { slug: 'electrochemical_series', title: '27. イオン化傾向', href: '/basics/physical_chemistry/electrochemical_series' },
  { slug: 'metal_corrosion', title: '28. 金属の腐食', href: '/basics/physical_chemistry/metal_corrosion' },
  { slug: 'organic_compounds', title: '29. 有機化合物', href: '/basics/physical_chemistry/organic_compounds' },
  { slug: 'polymer_materials', title: '30. 高分子材料', href: '/basics/physical_chemistry/polymer_materials' },
  { slug: 'properties_of_major_gases', title: '31. 主な気体の特性', href: '/basics/physical_chemistry/properties_of_major_gases' },
]

export default function PhysicalChemistryIndexPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'トップ', href: '/' },
          { label: '基礎知識', href: '/basics' },
          { label: '第2章：基礎的な物理・化学' },
        ]}
      />
      <div className={`site-main ${theme.theme}`}>
        <div className={styles.container}>
          <section className={styles.intro}>
            <h2 className={styles.sectionHeading}>第2章：基礎的な物理・化学</h2>
            <p className={styles.introText}>
              この章では、燃焼や電気、熱の移動など、危険物の取扱いに必要な物理・化学の基礎知識を学びます。
              <br />
              物質の状態変化や化学反応、エネルギーの関係を理解することで、危険物の性質や事故防止策への理解を深めます。
            </p>

            <nav className={styles.chapterIndex} aria-label="第2章の節一覧">
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