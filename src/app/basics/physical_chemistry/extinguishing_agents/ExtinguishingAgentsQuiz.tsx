// src/app/basics/physical_chemistry/extinguishing_agents/ExtinguishingAgentsQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'ガソリンが燃焼する火災', correct: true },
  { value: 'opt2', label: '配電盤（分電盤）が発火した火災', correct: false },
  { value: 'opt3', label: '木材が燃焼する火災', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です！B火災（油火災）は、ガソリン・灯油などの可燃性液体や油脂、アルコール類が燃焼する火災です。',
  opt2: '不正解です。変圧器などの通電設備が原因の火災は「電気火災（C火災）」として扱います。',
  opt3: '不正解です。木材・紙・布など固体可燃物の火災は「普通火災（A火災）」です。',
}

export default function ExtinguishingAgentsQuiz() {
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
      <p id="q1-label">B火災に該当するのは、次のうちどれか。</p>

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