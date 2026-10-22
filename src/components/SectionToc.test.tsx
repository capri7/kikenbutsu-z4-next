import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import SectionToc from './SectionToc'

afterEach(cleanup)

const ITEMS = [
  { id: 'first', label: '最初の節' },
  { id: 'second', label: '2つ目の節' },
]

describe('SectionToc', () => {
  it('「このページの内容」という名前の目次（navigation）として出る', () => {
    render(<SectionToc items={ITEMS} />)
    expect(screen.getByRole('navigation', { name: 'このページの内容' })).toBeTruthy()
  })

  it('渡した順番で、各節の id へのリンクを出す', () => {
    render(<SectionToc items={ITEMS} />)
    const links = within(screen.getByRole('navigation', { name: 'このページの内容' })).getAllByRole('link')
    expect(links.map((a) => [a.textContent, a.getAttribute('href')])).toEqual([
      ['最初の節', '#first'],
      ['2つ目の節', '#second'],
    ])
  })
})
