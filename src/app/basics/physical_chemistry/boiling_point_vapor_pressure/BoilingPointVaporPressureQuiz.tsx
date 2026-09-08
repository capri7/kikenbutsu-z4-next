// src/app/basics/physical_chemistry/boiling_point_vapor_pressure/BoilingPointVaporPressureQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '液体の飽和蒸気圧が大気圧と等しくなる温度', correct: true },
  { value: 'opt2', label: '液体の飽和蒸気圧が0になる温度', correct: false },
  { value: 'opt3', label: '液体の密度が最大になる温度', correct: false },
  { value: 'opt4', label: '大気圧に関係なく物質ごとに常に一定の温度', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です！ 沸点は、液体の飽和蒸気圧が大気圧（外圧）と等しくなる温度です。高地など気圧の低い場所では、この温度が下がるため沸点も低くなります。',
  opt2: '不正解です。飽和蒸気圧が0になることはありません。沸点は飽和蒸気圧が大気圧と等しくなる温度です。',
  opt3: '不正解です。沸点は密度ではなく、飽和蒸気圧と大気圧の関係で決まります。',
  opt4: '不正解です。沸点は大気圧によって変化します。平地よりも高地の方が沸点は低くなります。',
}

export default function BoilingPointVaporPressureQuiz() {
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
        沸点の説明として、最も適切なものはどれか。
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