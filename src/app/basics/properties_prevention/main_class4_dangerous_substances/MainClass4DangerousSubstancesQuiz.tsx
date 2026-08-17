// src/app/basics/properties_prevention/main_class4_dangerous_substances/MainClass4DangerousSubstancesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '21℃未満', correct: true },
  { value: 'opt2', label: '11℃〜25℃', correct: false },
  { value: 'opt3', label: '-20℃以下', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。第1石油類は「引火点が21℃未満」のものです。',
  opt2: '不正解です。「11℃〜25℃」は25℃まで含むため、21℃以上の範囲が混ざります。第1石油類の条件は「21℃未満」です。',
  opt3: '不正解です。「-20℃以下」は特殊引火物の条件です。第1石油類の分類条件は「21℃未満」です。',
}

export default function MainClass4DangerousSubstancesQuiz() {
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
      <p id="q1-label">第1石油類の引火点について、妥当なものはどれか。</p>

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