// src/app/basics/properties_prevention/alcohol_properties/AlcoholPropertiesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '363℃', correct: false },
  { value: 'opt2', label: '412℃', correct: false },
  { value: 'opt3', label: '464℃', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。363℃は「400℃前後なら合ってそう」というひっかけ。発火点はもう少し高く、メタノールは464℃です。',
  opt2: '不正解です。412℃も「それっぽい」数値ですが誤り。メタノールの発火点（自然発火温度）は464℃です。',
  opt3: '正解です。メタノールの発火点（＝自然発火温度）は464℃です。ここは「引火点」と混同しやすいので注意（発火点は火花なしで燃えだす温度）。',
}

export default function AlcoholPropertiesQuiz() {
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
      <p id="q1-label">メタノールの発火点について、妥当なものはどれか。</p>

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