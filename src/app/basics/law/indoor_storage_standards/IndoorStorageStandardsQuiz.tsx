'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '床面積の合計は1,200㎡以下', correct: false },
  { value: 'opt2', label: '各階の床面積の合計は1,000㎡以下', correct: true },
  { value: 'opt3', label: '床面積の合計に規定はない', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt2: '正解です。平家建以外の独立専用屋内貯蔵所では、各階の床面積の合計は1,000㎡以下です。なお、平家建では床面積1,000㎡以下です。',
  opt1: '不正解です。1,200㎡という数値は基準には出てきません。平家建以外では「各階の床面積の合計が1,000㎡以下」が正しい基準です。',
  opt3: '不正解です。「規定なし」ではありません。平家建以外の独立専用屋内貯蔵所には、各階合計1,000㎡以下という明確な上限があります。',
}

export default function IndoorStorageStandardsQuiz() {
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
        独立専用屋内貯蔵所のうち、平家建以外の建築物について、各階の床面積の合計の基準として正しいものはどれか。
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