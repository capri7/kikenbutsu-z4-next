// src/app/basics/physical_chemistry/ease_of_combustion/EaseOfCombustionQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '蒸気圧', correct: true },
  { value: 'opt2', label: '比熱', correct: false },
  { value: 'opt3', label: '発火点', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です！ 蒸気圧は「数値が大きいほど危険な因子」です。数値が小さいほど危険になるグループには含まれません。',
  opt2: '不正解です。比熱は、値が小さいほど少ない熱で温度が上がり、燃えやすくなる「数値が小さいほど危険な因子」です。',
  opt3: '不正解です。発火点は、温度が低いほど自然に発火しやすくなるため、やはり「数値が小さいほど危険な因子」です。',
}

export default function EaseOfCombustionQuiz() {
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
        次のうち、「数値が小さいほど危険な因子」には<strong>該当しない</strong>ものはどれか。
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
        <div className={shared.quizRetryWrap}>
          <button type="button" className={shared.quizRetry} onClick={handleRetry}>
            もう一度挑戦する
          </button>
        </div>
      )}
    </div>
  )
}