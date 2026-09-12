// src/app/basics/physical_chemistry/basics_of_chemistry/BasicsOfChemistryQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'ガソリンは無極性分子であり、極性のある水とは性質が異なるため', correct: true },
  { value: 'opt2', label: 'ガソリンは極性分子であり、無極性の水とは性質が異なるため', correct: false },
  { value: 'opt3', label: 'ガソリンは無極性分子だが、分子量が水より大きいため', correct: false },
  { value: 'opt4', label: 'ガソリンは沸点が水より低く、蒸発しやすい性質をもつため', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です！ 極性物質どうし、無極性物質どうしは溶けやすい一方、極性物質と無極性物質は溶けにくい性質があります。ガソリン（無極性）と水（極性）は性質が異なるため、溶けにくくなっています。',
  opt2: '不正解です。ガソリンは無極性分子、水は極性分子です。両者の性質が逆になっています。',
  opt3: '不正解です。溶けやすさを決めるのは分子量の大小ではなく、極性の有無です。',
  opt4: '不正解です。沸点や蒸発のしやすさは、水への溶けやすさとは別の性質です。',
}

export default function BasicsOfChemistryQuiz() {
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
        ガソリンが水に溶けにくい理由として、正しいものはどれか。
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