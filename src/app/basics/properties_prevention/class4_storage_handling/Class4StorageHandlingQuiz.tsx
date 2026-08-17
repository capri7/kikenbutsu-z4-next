// src/app/basics/properties_prevention/class4_storage_handling/Class4StorageHandlingQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '防熱構造', correct: false },
  { value: 'opt2', label: '防爆構造', correct: true },
  { value: 'opt3', label: '防電構造', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。「防熱構造」は高温対策で、防爆の代わりにはなりません。可燃性蒸気の場所は防爆構造です。',
  opt2: '正解です。可燃性蒸気が滞留するおそれがある場所では、スイッチの火花などが点火源になり得るため、点火源を外部に出さない「防爆構造」の電気設備を使用します。',
  opt3: '不正解です。「防電構造」という区分はここでは使いません。可燃性蒸気の場所は防爆構造です。',
}

export default function Class4StorageHandlingQuiz() {
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
      <p id="q1-label">可燃性蒸気が滞留する恐れのある場所で使用する電気設備の構造について適切なものはどれか。</p>

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