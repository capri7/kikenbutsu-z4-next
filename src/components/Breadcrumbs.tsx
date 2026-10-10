import { Fragment } from 'react'
import Link from 'next/link'

export type BreadcrumbItem = {
  label: string
  href?: string
}

const SITE_URL = 'https://kikenbutsu-z4.com'

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const currentPage = items[items.length - 1]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        // JSON.stringify は XSS につながる文字列を無害にしないため、Next.js の公式ガイドどおり < を \u003c に置き換える
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <nav className="breadcrumbs" aria-label="パンくずリスト">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <Fragment key={i}>
              {item.href && !isLast ? (
                <Link href={item.href} prefetch={false}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
              {!isLast && ' > '}
            </Fragment>
          )
        })}
      </nav>
      {currentPage && <h1 className="page-title">{currentPage.label}</h1>}
    </>
  )
}