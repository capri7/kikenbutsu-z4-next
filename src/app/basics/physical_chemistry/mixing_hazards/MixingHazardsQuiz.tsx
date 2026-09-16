// src/app/basics/physical_chemistry/mixing_hazards/MixingHazardsQuiz.tsx
'use client'

import { useState, type ReactNode } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '黄リン', correct: true },
  { value: 'opt2', label: 'リチウム', correct: false },
  { value: 'opt3', label: 'カリウム', correct: false },
  { value: 'opt4', label: 'ナトリウム', correct: false },
]

const FEEDBACK: Record<string, ReactNode> = {
  opt1: (
    <>
      正解です！ 黄リンは自然発火性のみを持つ物質で、禁水性は持ちません。そのため黄リンは水中に保存されます。第3類危険物はほとんどが自然発火性・禁水性の両方を持ちますが、黄リン（自然発火性のみ）とリチウム（禁水性のみ）は例外です。
    </>
  ),
  opt2: (
    <>
      不正解です。リチウムは禁水性のみを持つ物質であり、自然発火性は持ちません。設問が求めているのは「自然発火性のみ」を持つ物質です。
    </>
  ),
  opt3: (
    <>
      不正解です。カリウムは自然発火性・禁水性の両方を持つ物質です。
    </>
  ),
  opt4: (
    <>
      不正解です。ナトリウムは自然発火性・禁水性の両方を持つ物質です。
    </>
  ),
}

export default function MixingHazardsQuiz() {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    if (selected) return
    setSelected(value)
  }

  const handleRetry = () => {
    setSelected(null)
  }

  return (
    <div className={shared.quizForm}>
      <p id="q1-label">
        第3類危険物のうち、自然発火性のみを持ち、禁水性を持たない物質はどれか。
      </p>

      <ul className={shared.quizOptions} role="radiogroup" aria-labelledby="q1-label">
        {OPTIONS.map((opt) => {
          const isSelected = selected === opt.value
          const showResult = selected !== null
          let optionClass = shared.quizOption
          if (showResult && isSelected) {
            optionClass += ' ' + (opt.correct ? shared.quizOptionCorrect : shared.quizOptionWrong)
          }
          if (showResult) {
            optionClass += ' ' + shared.quizOptionLocked
          }

          return (
            <li key={opt.value}>
              <label className={optionClass}>
                <input
                  type="radio"
                  name="q1"
                  value={opt.value}
                  checked={isSelected}
                  disabled={selected !== null}
                  onChange={() => handleSelect(opt.value)}
                />
                {opt.label}
              </label>
            </li>
          )
        })}
      </ul>

      {selected && (
        <div className={shared.quizFeedback} aria-live="polite">
          {FEEDBACK[selected]}
        </div>
      )}

      {selected && (
        <button type="button" className={shared.quizRetry} onClick={handleRetry}>
          もう一度解く
        </button>
      )}
    </div>
  )
}