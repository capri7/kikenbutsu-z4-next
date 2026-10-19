// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join, dirname, resolve, relative } from 'node:path'

// ページが読む画像（public の /images/... と、static import した画像）を集め、
// 写真を SVG に埋め込んでいないこと・大きすぎないことを確かめる。

const ROOT = resolve(__dirname, '../..')
const SRC = join(ROOT, 'src')
const PUBLIC = join(ROOT, 'public')
const MAX_BYTES = 300 * 1024

// 出どころを確かめるまで差し替えを保留している画像
const PENDING = {
  embeddedRaster: ['public/images/basics/physical_chemistry/nitrocellulose_3d_model.svg'],
  oversized: [
    'public/images/basics/physical_chemistry/nitrocellulose_3d_model.svg',
    'public/images/basics/physical_chemistry/anthracite_photo.jpg',
  ],
}

function sourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return sourceFiles(path)
    if (!/\.(tsx?|mdx?)$/.test(entry.name) || /\.test\.tsx?$/.test(entry.name)) return []
    return [path]
  })
}

function referencedImages(): string[] {
  const found = new Set<string>()
  for (const file of sourceFiles(SRC)) {
    const text = readFileSync(file, 'utf8')
    for (const m of text.matchAll(/["'`](\/images\/[^"'`?#]+\.(?:svg|png|jpe?g|gif|webp|avif))["'`]/g)) {
      found.add(join(PUBLIC, m[1]))
    }
    for (const m of text.matchAll(/from\s+["']([^"']+\.(?:svg|png|jpe?g|gif|webp|avif))["']/g)) {
      const spec = m[1]
      found.add(spec.startsWith('@/') ? join(SRC, spec.slice(2)) : resolve(dirname(file), spec))
    }
  }
  return [...found].map((p) => relative(ROOT, p)).sort()
}

const images = referencedImages()

describe('ページが読む画像', () => {
  it('参照している画像のファイルがある', () => {
    const missing = images.filter((p) => !existsSync(join(ROOT, p)))
    expect(missing).toEqual([])
  })

  it('SVG に写真（data:image/）を埋め込んでいない', () => {
    const embedded = images
      .filter((p) => p.endsWith('.svg') && existsSync(join(ROOT, p)))
      .filter((p) => readFileSync(join(ROOT, p), 'utf8').includes('data:image/'))
      .filter((p) => !PENDING.embeddedRaster.includes(p))
    expect(embedded).toEqual([])
  })

  it(`ファイルの大きさが ${MAX_BYTES / 1024}KB 以下`, () => {
    const oversized = images
      .filter((p) => existsSync(join(ROOT, p)) && statSync(join(ROOT, p)).size > MAX_BYTES)
      .filter((p) => !PENDING.oversized.includes(p))
    expect(oversized).toEqual([])
  })

  it('保留の一覧は、今も参照されていて条件に当たる画像だけ', () => {
    for (const p of PENDING.embeddedRaster) {
      expect(images).toContain(p)
      expect(readFileSync(join(ROOT, p), 'utf8')).toContain('data:image/')
    }
    for (const p of PENDING.oversized) {
      expect(images).toContain(p)
      expect(statSync(join(ROOT, p)).size).toBeGreaterThan(MAX_BYTES)
    }
  })
})
