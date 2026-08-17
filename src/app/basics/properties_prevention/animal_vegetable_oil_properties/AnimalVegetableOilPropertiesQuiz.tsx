// src/app/basics/properties_prevention/animal_vegetable_oil_properties/AnimalVegetableOilPropertiesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '4,000L', correct: false },
  { value: 'opt2', label: '10,000L', correct: true },
  { value: 'opt3', label: '6,000L', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。4,000Lは第3石油類（水溶性）で見かけやすい数字です。動植物油類はそれより大きく、指定数量は10,000Lです（動植物＝1万）。',
  opt2: '正解です。動植物油類（例：なたね油・大豆油など）の指定数量は10,000Lです。第4類の中でも指定数量が大きいグループで、「動植物＝1万（10,000）」で覚えておきましょう。',
  opt3: '不正解です。6,000Lは第4石油類の指定数量でよく出る数字です。動植物油類はさらに大きく、指定数量は10,000Lです（動植物＝1万）。',
}

export default function AnimalVegetableOilPropertiesQuiz() {
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
      <p id="q1-label">動植物油類の指定数量は次のうちどれか。</p>

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