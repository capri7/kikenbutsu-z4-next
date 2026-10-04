import { describe, it, expect } from 'vitest'
import { questionImageUrl } from './questionImage'

const BASE = 'https://example.supabase.co'

describe('questionImageUrl', () => {
  it('phy の中の場所から、公開 URL を組み立てる', () => {
    expect(questionImageUrl('basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_004.svg', BASE)).toBe(
      'https://example.supabase.co/storage/v1/object/public/phy/basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_004.svg',
    )
  })

  it('Supabase の URL の末尾に / があっても、// にならない', () => {
    expect(questionImageUrl('a/b.svg', `${BASE}/`)).toBe(
      'https://example.supabase.co/storage/v1/object/public/phy/a/b.svg',
    )
  })

  it('図がない問題（null・空文字）は null を返す', () => {
    expect(questionImageUrl(null, BASE)).toBeNull()
    expect(questionImageUrl('', BASE)).toBeNull()
  })

  it('Supabase の URL がないときは null を返す（壊れた URL を作らない）', () => {
    expect(questionImageUrl('a/b.svg', undefined)).toBeNull()
  })
})
