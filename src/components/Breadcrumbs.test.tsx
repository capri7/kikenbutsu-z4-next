import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { renderToStaticMarkup } from 'react-dom/server'
import Breadcrumbs from './Breadcrumbs'

function jsonLdScript(container: HTMLElement) {
  const script = container.querySelector('script[type="application/ld+json"]')
  if (!script) throw new Error('JSON-LD の script がない')
  return script
}

describe('Breadcrumbs の構造化データ（JSON-LD）', () => {
  it('パンくずの順番・名前・URL を BreadcrumbList として出す。最後の項目には URL を付けない', () => {
    const { container } = render(
      <Breadcrumbs items={[{ label: 'ホーム', href: '/' }, { label: '法令', href: '/basics/law' }, { label: '標識と掲示板' }]} />
    )
    expect(JSON.parse(jsonLdScript(container).textContent ?? '')).toEqual({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://kikenbutsu-z4.com/' },
        { '@type': 'ListItem', position: 2, name: '法令', item: 'https://kikenbutsu-z4.com/basics/law' },
        { '@type': 'ListItem', position: 3, name: '標識と掲示板' },
      ],
    })
  })

  it('名前に </script> が含まれても、サーバーが出す HTML で script が閉じられない（< を \\u003c に置き換える）', () => {
    const label = '</script><script>alert(1)</script>'
    const html = renderToStaticMarkup(<Breadcrumbs items={[{ label: 'ホーム', href: '/' }, { label }]} />)
    // 置き換えないと、名前の中の </script> で JSON-LD の script が閉じ、後ろの <script> が実行される HTML になる
    expect(html.match(/<script/g)).toHaveLength(1)
    const { container } = render(<Breadcrumbs items={[{ label: 'ホーム', href: '/' }, { label }]} />)
    expect(JSON.parse(jsonLdScript(container).textContent ?? '').itemListElement[1].name).toBe(label)
  })
})
