// src/app/basics/properties_prevention/classification_of_dangerous_goods/ClassificationOfDangerousGoodsQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '酸化性固体', correct: false },
  { value: 'opt2', label: '引火性液体', correct: false },
  { value: 'opt3', label: '可燃性固体', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。「酸化性固体」は第1類の性質です。第2類は自分が燃える固体（硫黄や金属粉など）です。',
  opt2: '不正解です。「引火性液体」は第4類の性質です。第2類は液体ではなく、可燃性の固体です。',
  opt3: '正解です。可燃性固体は第2類の性質です。粉や固体が燃え広がりやすいので、火花や熱源を近づけないのが基本です。',
}

export default function ClassificationOfDangerousGoodsQuiz() {
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
      <p id="q1-label">次のうち、第2類の性質として適切なものはどれか。</p>

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