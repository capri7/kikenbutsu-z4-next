import { afterEach, describe, expect, it } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import LawIndexPage from './law/page'
import PhysicalChemistryIndexPage from './physical_chemistry/page'
import PropertiesPreventionIndexPage from './properties_prevention/page'

// 章トップ（第1〜3章）は、章の名前を見出しとして1回だけ出す。
// パンくずの下の h1 と同じ文言の h2 が続くと、画面に同じ題名が2回並ぶ。

afterEach(cleanup)

const HUBS = [
  { name: '第1章（法令）', Page: LawIndexPage, title: '第1章：危険物に関する法令' },
  { name: '第2章（物理・化学）', Page: PhysicalChemistryIndexPage, title: '第2章：基礎的な物理・化学' },
  { name: '第3章（性質・予防）', Page: PropertiesPreventionIndexPage, title: '第3章：危険物の性質・火災予防・消火の方法' },
]

describe('章トップの見出し', () => {
  it.each(HUBS)('$name：章の名前の見出しは1つだけで、h1 である', ({ Page, title }) => {
    const { container } = render(<Page />)
    const headings = [...container.querySelectorAll('h1, h2, h3, h4, h5, h6')].filter(
      (h) => h.textContent?.trim() === title
    )
    expect(headings.map((h) => h.tagName)).toEqual(['H1'])
  })
})
