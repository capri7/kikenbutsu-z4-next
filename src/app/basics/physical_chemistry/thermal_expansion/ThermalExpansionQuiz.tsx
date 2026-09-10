// src/app/basics/physical_chemistry/thermal_expansion/ThermalExpansionQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '0.4cm', correct: false },
  { value: 'opt2', label: '4cm', correct: true },
  { value: 'opt3', label: '40cm', correct: false },
  { value: 'opt4', label: '0.04cm', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。桁が1つ小さくなっています。元の長さ・温度差・線膨張率をすべて掛け合わせているか確認しましょう。',
  opt2: '正解です！ 増加する長さ＝元の長さ×温度差×線膨張率＝50×10×0.008＝4cmです。',
  opt3: '不正解です。桁が1つ大きくなっています。0.008の桁を確認しましょう。',
  opt4: '不正解です。値が小さすぎます。50×10×0.008を順に計算し直してみましょう。',
}

export default function ThermalExpansionQuiz() {
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
        線膨張率が0.008の金属棒（元の長さ50cm）を10℃上昇させると、増加する長さは何cmか。
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