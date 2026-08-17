// src/app/basics/physical_chemistry/electricity_and_batteries/ElectricityAndBatteriesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'V=IS', correct: true },
  { value: 'opt2', label: 'R=V/I', correct: false },
  { value: 'opt3', label: 'V=IR', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です！オームの法則は「V=IR」（I=V/R、R=V/Iも同じ）です。「V=IS」はこの形に変形できず、I×Sの単位も[V]にならないため該当しません。',
  opt2: '不正解です。「R=V/I」は「V=IR」をRについて解いた式です。（V=IR → 両辺をIで割る → R=V/I）',
  opt3: '不正解です。「V=IR」はオームの法則そのものです。この式からI=V/R、R=V/Iに変形して使います。',
}

export default function ElectricityAndBatteriesQuiz() {
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
      <p id="q1-label">オームの法則に<strong>該当しない</strong>のは次のうちどれか。</p>

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
                <code>{opt.label}</code>
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