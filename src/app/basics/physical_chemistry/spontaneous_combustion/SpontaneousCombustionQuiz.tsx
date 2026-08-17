// src/app/basics/physical_chemistry/spontaneous_combustion/SpontaneousCombustionQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '石炭', correct: false },
  { value: 'opt2', label: 'アマニ油', correct: false },
  { value: 'opt3', label: 'ニトロセルロース', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。石炭は「酸化による発熱」の代表例です。発熱の機構と物質の組み合わせを整理しておきましょう。',
  opt2: '不正解です。アマニ油は乾性油で、「酸化熱の蓄積」によって自然発火しやすくなります。分解ではなく酸化グループです。',
  opt3: '正解です！ ニトロセルロース（第5類危険物）は、分解による発熱で自然発火のおそれがある代表例です。',
}

export default function SpontaneousCombustionQuiz() {
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
      <p id="q1-label">次のうち、分解による発熱に該当するものはどれか。</p>

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