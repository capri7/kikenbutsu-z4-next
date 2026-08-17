'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt3', label: '600L以下', correct: true },
  { value: 'opt1', label: '400L以下', correct: false },
  { value: 'opt2', label: '500L以下', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。簡易タンク貯蔵所の簡易タンクは「容量600L以下」がキーワードです。600Lを1Lでも超えると別区分になります。',
  opt1: '不正解です。400L以下ではありません。簡易タンク貯蔵所は「600L以下」のタンクまでOKという基準を覚えましょう。',
  opt2: '不正解です。500L以下ではありません。簡易タンク貯蔵所の基準は「600L以下」です。数字を少しだけ変えてくるひっかけに注意しましょう。',
}

export default function FacilityCategoriesQuiz() {
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
      <p id="q1-label">次のうち、簡易タンク貯蔵所の簡易タンクの容積で正しいものはどれか。</p>

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