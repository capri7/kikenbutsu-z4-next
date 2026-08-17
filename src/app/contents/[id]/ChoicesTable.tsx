'use client'

import type { Choice } from '@/lib/feedback'

type ChoicesTableProps = {
  choices: Choice[]
  fields: string[] | null
  headers: string[] | null
  selectedIndex: number | null
  disabled: boolean
  onSelect: (index: number) => void
}

function resolveHeaderLabel(h: unknown): string {
  if (typeof h === 'string') return h
  if (h && typeof h === 'object') {
    const obj = h as Record<string, unknown>
    return (
      (obj.label as string) ||
      (obj.title as string) ||
      (obj.name as string) ||
      '選択肢'
    )
  }
  return '選択肢'
}

export default function ChoicesTable({
  choices,
  fields,
  headers,
  selectedIndex,
  disabled,
  onSelect,
}: ChoicesTableProps) {
  const hasHeader = !!(fields?.length && headers?.length)

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!disabled) onSelect(index)
    }
  }

  return (
  <table className="w-full border-collapse">
  {hasHeader && (
    <thead>
      <tr>
        <th className="border border-border p-[0.75em] w-[3em] text-center font-bold text-text">No.</th>
        {headers!.slice(0, fields!.length).map((h, i) => (
          <th key={i} className="border border-border p-[0.75em] text-left font-bold text-text">
            {resolveHeaderLabel(h)}
          </th>
        ))}
      </tr>
    </thead>
  )}
  <tbody>
    {choices.map((choice, i) => {
      const isSelected = selectedIndex === i

      let content: React.ReactNode
      if (fields?.length) {
        content = fields.map((f, fi) => (
          <td key={fi} className="border border-border p-[0.75em]">
            {String(choice[f] ?? '')}
          </td>
        ))
      } else {
        const key = Object.keys(choice).find((k) => k !== 'name') || 'name'
        content = (
          <td className="border border-border p-[0.75em]">
            {String(choice[key] ?? '')}
          </td>
        )
      }

      const rowClass = [
        'cursor-pointer',
        isSelected ? 'bg-accent-soft font-bold' : 'hover:bg-surface',
        disabled ? 'cursor-not-allowed opacity-70 pointer-events-none' : '',
      ]
        .filter(Boolean)
        .join(' ')

      return (
        <tr
          key={i}
          data-index={i}
          role="button"
          tabIndex={0}
          className={rowClass}
          onClick={() => !disabled && onSelect(i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          aria-disabled={disabled}
        >
          <td className="border border-border p-[0.75em] w-[3em] text-center">{i + 1}</td>
          {content}
        </tr>
      )
    })}
  </tbody>
</table>
)

}