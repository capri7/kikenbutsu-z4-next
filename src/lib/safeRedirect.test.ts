import { describe, expect, it } from 'vitest'
import { getSafeNextPath } from './safeRedirect'

describe('getSafeNextPath', () => {
  it('サイト内のパスはそのまま返す', () => {
    expect(getSafeNextPath('/checkout')).toBe('/checkout')
  })

  it('クエリ付きのパスも、クエリを残して返す', () => {
    expect(getSafeNextPath('/checkout?canceled=1')).toBe('/checkout?canceled=1')
  })

  it('値がないときは /mypage を返す', () => {
    expect(getSafeNextPath(undefined)).toBe('/mypage')
  })

  it('同じ名前が複数あり配列になったときは /mypage を返す', () => {
    expect(getSafeNextPath(['/checkout', '/mypage'])).toBe('/mypage')
  })

  it('空文字のときは /mypage を返す', () => {
    expect(getSafeNextPath('')).toBe('/mypage')
  })

  it('外部の URL は /mypage を返す', () => {
    expect(getSafeNextPath('https://evil.example')).toBe('/mypage')
  })

  it('// で始まる値（プロトコル相対 URL）は /mypage を返す', () => {
    expect(getSafeNextPath('//evil.example')).toBe('/mypage')
  })

  it('/ とバックスラッシュで始まる値は /mypage を返す', () => {
    expect(getSafeNextPath('/\\evil.example')).toBe('/mypage')
  })

  it('/ とタブで始まる値は /mypage を返す（ブラウザはタブを取り除き // として扱う）', () => {
    expect(getSafeNextPath('/\t/evil.example')).toBe('/mypage')
  })

  it('javascript: で始まる値は /mypage を返す', () => {
    expect(getSafeNextPath('javascript:alert(1)')).toBe('/mypage')
  })
})
