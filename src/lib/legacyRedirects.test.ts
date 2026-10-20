// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

// next.config.ts の旧URLリダイレクト（LEGACY_URL_REDIRECTS）を文字として読み、
// 旧サイトのURLが404にならないこと、行き先のページが実在することを確かめる。

const ROOT = resolve(__dirname, '../..')
const APP = join(ROOT, 'src/app')
const CONFIG = readFileSync(join(ROOT, 'next.config.ts'), 'utf8')

type Entry = { source: string; destination: string; permanent: boolean }

const ENTRY_RE =
  /\{\s*source:\s*'([^']+)',\s*destination:\s*'([^']+)',\s*permanent:\s*(true|false)\s*\}/g

const entries: Entry[] = [...CONFIG.matchAll(ENTRY_RE)].map((m) => ({
  source: m[1],
  destination: m[2],
  permanent: m[3] === 'true',
}))

function pageExists(route: string): boolean {
  const dir = route === '/' ? APP : join(APP, route)
  return existsSync(join(dir, 'page.tsx'))
}

// 第2章（物理・化学）で、旧サイトに存在していた11のURL
const CHAPTER2_LEGACY: [string, string][] = [
  ['/basics/physical_chemistry.html', '/basics/physical_chemistry'],
  ['/basics/physical_chemistry/combustion_chemistry/Otsux_Phy_Combustion_Chemistry_001.html', '/basics/physical_chemistry/chemistry_of_combustion'],
  ['/basics/physical_chemistry/types_of_combustion/Otsux_Phy_Types_of_Combustion_001.html', '/basics/physical_chemistry/types_of_combustion'],
  ['/basics/physical_chemistry/ease_of_combustion/Otsux_Phy_Ease_of_Combustion_001.html', '/basics/physical_chemistry/ease_of_combustion'],
  ['/basics/physical_chemistry/ignition_and_flash_point/Otsux_Phy_Ignition_and_Flash_Point_001.html', '/basics/physical_chemistry/ignition_and_flash_point'],
  ['/basics/physical_chemistry/flammability_range/Otsux_Phy_Flammability_Range_001.html', '/basics/physical_chemistry/flammability_range'],
  ['/basics/physical_chemistry/spontaneous_combustion/Otsux_Phy_Spontaneous_Combustion_001.html', '/basics/physical_chemistry/spontaneous_combustion'],
  ['/basics/physical_chemistry/dust_explosions/Otsux_Phy_Dust_Explosions_001.html', '/basics/physical_chemistry/dust_explosions'],
  ['/basics/physical_chemistry/extinguishing_agents/Otsux_Phy_Extinguishing_Agents_001.html', '/basics/physical_chemistry/extinguishing_agents'],
  ['/basics/physical_chemistry/electricity_and_batteries/Otsux_Phy_Electricity_Batteries_001.html', '/basics/physical_chemistry/electricity_batteries'],
  ['/basics/physical_chemistry/static_electricity/Otsux_Phy_Static_Electricity_001.html', '/basics/physical_chemistry/static_electricity'],
]

describe('旧URLのリダイレクト（next.config.ts）', () => {
  it('設定を読み取れている（読み取り漏れで空のテストにならない）', () => {
    const sourceCount = (CONFIG.match(/source:\s*'/g) ?? []).length
    expect(entries.length).toBe(sourceCount)
    expect(entries.length).toBeGreaterThan(60)
  })

  it('source に重複がない', () => {
    const sources = entries.map((e) => e.source)
    expect(new Set(sources).size).toBe(sources.length)
  })

  it('すべて permanent: true（308）である', () => {
    expect(entries.filter((e) => !e.permanent)).toEqual([])
  })

  it('行き先のページがすべて実在する', () => {
    const missing = entries.filter((e) => !pageExists(e.destination)).map((e) => e.destination)
    expect(missing).toEqual([])
  })

  it.each(CHAPTER2_LEGACY)('第2章の旧URL %s が %s に移る', (source, destination) => {
    const found = entries.find((e) => e.source === source)
    expect(found).toBeDefined()
    expect(found?.destination).toBe(destination)
    expect(found?.permanent).toBe(true)
  })
})
