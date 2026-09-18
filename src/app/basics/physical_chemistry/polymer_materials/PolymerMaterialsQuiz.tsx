// src/app/basics/physical_chemistry/polymer_materials/PolymerMaterialsQuiz.tsx
'use client'

import { useState, type ReactNode } from 'react'

import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '電気絶縁性に優れる', correct: false },
  { value: 'opt2', label: '熱伝導率が高い', correct: true },
  { value: 'opt3', label: '酸や塩基に侵されにくい', correct: false },
  { value: 'opt4', label: '燃焼すると有毒ガスを発生するものがある', correct: false },
]

const FEEDBACK: Record<string, ReactNode> = {
  opt1: (
    <>
      不正解です。電気絶縁性に優れることは、プラスチックの一般的な特徴として正しい記述です。
    </>
  ),
  opt2: (
    <>
      正解です。プラスチックは一般に伝熱性（熱伝導率）が低く、熱を伝えにくい材料です。
    </>
  ),
  opt3: (
    <>
      不正解です。酸や塩基に侵されにくいことは、プラスチックの一般的な特徴として正しい記述です。
    </>
  ),
  opt4: (
    <>
      不正解です。ポリ塩化ビニルなど、燃焼時に塩化水素などの有毒ガスを発生するものがあり、正しい記述です。
    </>
  ),
}

export default function PolymerMaterialsQuiz() {
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
        石油から作られるプラスチックの一般的な特徴について、次のうち誤っているのはどれか。
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