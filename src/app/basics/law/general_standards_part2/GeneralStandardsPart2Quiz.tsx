'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '第1類と第2類', correct: false },
  { value: 'opt2', label: '第3類と第4類', correct: false },
  { value: 'opt3', label: '第1類と第6類', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。第1類と第6類は、法別表第1で例外として同時貯蔵が認められる組合せの一つです。屋内・屋外の貯蔵所とも、類別ごとに取りまとめて相互に1m以上離隔しておくことが条件です。',
  opt1: '不正解です。第1類（酸化性固体）と第2類（可燃性固体など）は、反応や燃焼を助長するおそれがあり、同じ貯蔵所で同時貯蔵する組合せには入りません。',
  opt2: '不正解です。第3類（自然発火性物品等）と第4類（引火性液体）は、原則として同一の貯蔵所で同時貯蔵しません。問題では、例外として認められているペアを選びます。',
}

export default function GeneralStandardsPart2Quiz() {
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
      <p id="q1-label">同時に貯蔵できる危険物の組み合わせとして、適切なものは次のうちどれか。</p>

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