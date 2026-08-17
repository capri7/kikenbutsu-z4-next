// src/app/basics/properties_prevention/special_flammable_properties/SpecialFlammablePropertiesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '水には溶けにくく、アルコールには溶けない。', correct: false },
  { value: 'opt2', label: '水には少し溶け、アルコールにはよく溶ける。', correct: true },
  { value: 'opt3', label: '水によく溶け、アルコールにもよく溶ける。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。ジエチルエーテルは水には溶けにくい（少し溶ける）ですが、アルコールにはよく溶けます。',
  opt2: '正解です。ジエチルエーテルは水には「少し」溶けますが、水ほど極性が高くないため「よく」までは溶けません。一方、アルコール（エタノールなど）とはよく混ざります。',
  opt3: '不正解です。「水によく溶ける」は言い過ぎです。ジエチルエーテルは水には少しだけ溶け、アルコールにはよく溶けます。',
}

export default function SpecialFlammablePropertiesQuiz() {
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
      <p id="q1-label">ジエチルエーテルの性質について、妥当なものはどれか。</p>

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