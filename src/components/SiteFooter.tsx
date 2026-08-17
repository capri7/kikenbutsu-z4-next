'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type LegalKey = 'privacy' | 'terms' | 'tokusho'

const ALL: Record<LegalKey, { href: string; label: string }> = {
  privacy: { href: '/privacy', label: 'プライバシーポリシー' },
  terms: { href: '/terms', label: '利用規約' },
  tokusho: { href: '/legal-tokusho', label: '特定商取引法に基づく表記' },
}

const PAGE_MAP: Record<string, LegalKey[]> = {
  '/terms': ['privacy', 'tokusho'],
  '/privacy': ['terms', 'tokusho'],
  '/legal-tokusho': ['privacy', 'terms'],
}

export default function SiteFooter() {
  const pathname = usePathname()
  const path = pathname.replace(/\/+$/, '') || '/'

  const keys = PAGE_MAP[path] || (['privacy', 'terms', 'tokusho'] as LegalKey[])

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="copyright">© 2025〜2026 乙種4類危険物取扱者試験対策</p>
        <div className="legal-links">
          {keys.map((key, index) => (
            <span key={key}>
              <Link href={ALL[key].href} className="footer-link">
                {ALL[key].label}
              </Link>
              {index < keys.length - 1 && <span>／</span>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}

