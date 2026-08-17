// src/app/basics/properties_prevention/class1_petroleum_properties/Class1PetroleumPropertiesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '水には少し溶ける。', correct: false },
  { value: 'opt2', label: '水には溶けない。', correct: true },
  { value: 'opt3', label: '水によく溶ける。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。「水に少し溶ける」は"エーテル系"などで出やすい表現。ベンゼンは非水溶性で、水とは基本的に混ざりません。',
  opt2: '正解です。ベンゼンは水に溶けません（非水溶性）。「ベンゼン環＝水と混ざらない」で覚えると速いです。',
  opt3: '不正解です。「水によく溶ける」は水溶性（アルコール類など）のイメージ。ベンゼンは水に溶けません。',
}

export default function Class1PetroleumPropertiesQuiz() {
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
      <p id="q1-label">ベンゼンの性質について、妥当なものはどれか。</p>

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