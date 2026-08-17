// src/app/basics/properties_prevention/class4_properties/Class4PropertiesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'クロロベンゼン', correct: false },
  { value: 'opt2', label: '酢酸', correct: false },
  { value: 'opt3', label: '二硫化炭素', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。クロロベンゼンは第2石油類（非水溶性）で、比重も1より大きいので条件に当てはまります。',
  opt2: '不正解です。酢酸は第2石油類（水溶性）で、比重も1より大きいので条件に当てはまります。',
  opt3: '正解です。二硫化炭素は比重が1より大きいですが、第2石油類ではなく「特殊引火物」です。よって「第2石油類で比重が1より大」の条件に当てはまりません。',
}

export default function Class4PropertiesQuiz() {
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
      <p id="q1-label">次のうち、第2石油類で比重が1より大きいものに該当しないのはどれか。</p>

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
        <div className={shared.quizRetryWrap}>
          <button type="button" className={shared.quizRetry} onClick={handleRetry}>
            もう一度挑戦する
          </button>
        </div>
      )}
    </div>
  )
}