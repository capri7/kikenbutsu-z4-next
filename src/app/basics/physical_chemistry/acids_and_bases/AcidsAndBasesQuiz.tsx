// src/app/basics/physical_chemistry/acids_and_bases/AcidsAndBasesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '酸性', correct: false },
  { value: 'opt2', label: '中性', correct: false },
  { value: 'opt3', label: '塩基性', correct: true },
  { value: 'opt4', label: '水に溶けない', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。「酸性塩」という分類名から連想しやすいですが、実際の水溶液は酸性ではありません。',
  opt2: '不正解です。NaHCO3水溶液は中性ではなく、弱い塩基性を示します。',
  opt3: '正解です！ NaHCO3は組成上「酸のHが残っている」ため酸性塩に分類されますが、実際に水に溶かすと加水分解によって弱い塩基性を示します。塩の分類名（正塩・酸性塩・塩基性塩）は組成による分類であり、水溶液の実際の性質とは必ずしも一致しません。',
  opt4: '不正解です。NaHCO3は水に溶ける塩です。',
}

export default function AcidsAndBasesQuiz() {
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
        炭酸水素ナトリウムNaHCO3は、塩の分類上「酸性塩」に分類されるが、その水溶液は何性を示すか。
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
        <button type="button" className={shared.quizRetry} onClick={handleRetry}>
          もう一度解く
        </button>
      )}
    </div>
  )
}