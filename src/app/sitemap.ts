// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'

const BASE_URL = 'https://kikenbutsu-z4.com'

function collectPages(dir: string, appRoot: string): string[] {
  const results: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.isDirectory()) {
      results.push(...collectPages(path.join(dir, entry.name), appRoot))
    } else if (entry.name === 'page.tsx') {
      const routePath = path.relative(appRoot, dir).split(path.sep).join('/')
      results.push(routePath)
    }
  }
  return results
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appRoot = path.join(process.cwd(), 'src/app')
  const basicsPaths = collectPages(path.join(appRoot, 'basics'), appRoot)

  const staticPaths = ['', 'contents/free']

  return [...staticPaths, ...basicsPaths].map((p) => ({
    url: p ? `${BASE_URL}/${p}` : BASE_URL,
  }))
}


