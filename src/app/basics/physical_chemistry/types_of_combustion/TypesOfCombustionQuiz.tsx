// src/app/basics/physical_chemistry/types_of_combustion/TypesOfCombustionQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '予混合燃焼', correct: false },
  { value: 'opt2', label: '蒸発燃焼', correct: false },
  { value: 'opt3', label: '拡散燃焼', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。予混合燃焼は、燃焼前に可燃性ガスと空気をあらかじめよく混ぜておく燃焼様式です（ガスバーナーの炎など）。',
  opt2: '不正解です。蒸発燃焼は、可燃性液体や固体が加熱で気化し、その蒸気に火がついて燃える燃焼様式です（アルコールランプなど）。',
  opt3: '正解です！ 拡散燃焼では、噴き出した可燃性ガスが周囲の空気に拡散しながら混ざり合い、その境界で炎が保たれます。',
}

export default function TypesOfCombustionQuiz() {
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
        燃焼のとき、可燃性ガスを周囲の空気中に噴き出して拡散させながら混ざり合い、
        その境界で炎を保つ燃焼様式は次のうちどれか。
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
        <div className={shared.quizRetryWrap}>
          <button type="button" className={shared.quizRetry} onClick={handleRetry}>
            もう一度挑戦する
          </button>
        </div>
      )}
    </div>
  )
}