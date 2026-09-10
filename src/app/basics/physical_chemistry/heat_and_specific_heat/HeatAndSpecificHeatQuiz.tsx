// src/app/basics/physical_chemistry/heat_and_specific_heat/HeatAndSpecificHeatQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '12,600J', correct: false },
  { value: 'opt2', label: '126,000J', correct: true },
  { value: 'opt3', label: '25,200J', correct: false },
  { value: 'opt4', label: '252,000J', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。質量500gの「500」を掛け忘れている可能性があります。Q＝m×c×Δtで計算し直してみましょう。',
  opt2: '正解です！ Q＝m×c×Δt＝500×4.2×(80−20)＝500×4.2×60＝126,000Jです。',
  opt3: '不正解です。温度差Δtは80−20＝60Kです。Δtの計算を確認しましょう。',
  opt4: '不正解です。値が2倍になっています。どこかで質量や温度差を2重に掛けていないか確認しましょう。',
}

export default function HeatAndSpecificHeatQuiz() {
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
        500gの水を20℃から80℃まで加熱するのに必要な熱量は何Jか。水の比熱を4.2J/(g・K)とする。
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