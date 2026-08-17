// src/app/basics/physical_chemistry/flammability_range/FlammabilityRangeQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '-40℃以下', correct: true },
  { value: 'opt2', label: '-40℃以上', correct: false },
  { value: 'opt3', label: '40℃', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です！ ガソリンの引火点はおよそ「-40℃以下」です。非常に低い温度でも可燃性蒸気が発生して引火しうることがポイントです。',
  opt2: '不正解です。「-40℃以上」ではなく「-40℃以下」です。低温でも引火する危険な液体であることを意識しておきましょう。',
  opt3: '不正解です。40℃付近は灯油の引火点の目安です。ガソリンはそれよりずっと低い温度で引火します。',
}

export default function FlammabilityRangeQuiz() {
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
      <p id="q1-label">ガソリンの引火点で正しいものはどれか。</p>

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
