import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import type { ComponentType } from 'react'

// 節のページ（第1〜3章の各節と、第1章のまとめ）の見出しを、全ページ通して確かめる。
// 見出しの付け方は docs/heading-guidelines.md を参照。

// next/image は、画像の大きさが無いと例外を出す。このテストは見出しだけを見るので、画像は何も出さない部品に置き換える。
vi.mock('next/image', () => ({ default: () => null }))

afterEach(cleanup)

const PAGES = import.meta.glob([
  './*/*/page.tsx',
  './*/*/*/page.tsx',
]) as Record<string, () => Promise<{ default: ComponentType }>>

// h1（パンくずの最後の項目）と同じ言葉の h2 が残っているページ。
// 直したら、このページを一覧から外す（外さないと、下の最後のテストが失敗する）。
const NOT_FIXED_YET = [
  './law/administrative_orders_and_suspensions/page.tsx',
  './law/alarm_systems/page.tsx',
  './law/chapter1_summary/page.tsx',
  './law/defined_substances/page.tsx',
  './law/emergency_measures/page.tsx',
  './law/firefighting_equipment_standards/page.tsx',
  './law/general_standards_part1/page.tsx',
  './law/general_standards_part2/page.tsx',
  './law/transportation_standards/page.tsx',
  './physical_chemistry/electrolysis/page.tsx',
  './physical_chemistry/metal_corrosion/page.tsx',
  './physical_chemistry/mixing_hazards/page.tsx',
  './properties_prevention/main_class4_dangerous_substances/page.tsx',
]

type Link = { href: string; label: string }
type Found = {
  path: string
  h1: string
  h2: string[]
  // 各 h2 に付いた id から作った、目次に並ぶはずのリンク
  expectedToc: Link[]
  // ページの目次（SectionToc）のリンク。目次の無いページは null
  toc: Link[] | null
}
let found: Found[] = []

beforeAll(async () => {
  found = []
  for (const [path, load] of Object.entries(PAGES)) {
    const { default: Page } = await load()
    const { container, unmount } = render(<Page />)
    const h2s = [...container.querySelectorAll('h2')]
    const toc = container.querySelector('nav[aria-labelledby="toc-title"]')
    found.push({
      path,
      h1: container.querySelector('h1')?.textContent?.trim() ?? '',
      h2: h2s.map((h) => h.textContent?.trim() ?? ''),
      expectedToc: h2s.map((h) => ({ href: `#${h.id}`, label: h.textContent?.trim() ?? '' })),
      toc: toc
        ? [...toc.querySelectorAll('a')].map((a) => ({
            href: a.getAttribute('href') ?? '',
            label: a.textContent?.trim() ?? '',
          }))
        : null,
    })
    unmount()
  }
}, 120_000)

// 「11節：電気分解」の「11節：」を除いた題名
const bareTitle = (h1: string) => h1.replace(/^\d+節[：:]\s*/, '')

describe('節のページの見出し', () => {
  it('ページを90以上読み込めていて、どのページにも h1 と h2 がある', () => {
    expect(found.length).toBeGreaterThanOrEqual(90)
    expect(found.filter((p) => p.h1 === '' || p.h2.length === 0).map((p) => p.path)).toEqual([])
  })

  it('同じページの中で、同じ言葉の h2 を2回出さない', () => {
    const duplicated = found.filter((p) => new Set(p.h2).size !== p.h2.length).map((p) => p.path)
    expect(duplicated).toEqual([])
  })

  it('h1 と同じ言葉の h2 が残っているのは、直していないページの一覧にあるページだけ', () => {
    const same = found
      .filter((p) => p.h2.some((h) => h === p.h1 || h === bareTitle(p.h1)))
      .map((p) => p.path)
      .sort()
    expect(same).toEqual([...NOT_FIXED_YET].sort())
  })

  it('目次のあるページは、目次が h2 をすべて、同じ順番・同じ文言で、h2 の id へのリンクとして並べている', () => {
    const withToc = found.filter((p) => p.toc !== null)
    expect(withToc.length).toBeGreaterThan(0)
    for (const p of withToc) {
      expect({ path: p.path, toc: p.toc }).toEqual({ path: p.path, toc: p.expectedToc })
    }
  })
})
