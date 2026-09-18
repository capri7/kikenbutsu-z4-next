// src/app/basics/physical_chemistry/organic_compounds/OrganicCompoundsQuiz.tsx
'use client'

import { useState, type ReactNode } from 'react'

import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'メタン', correct: false },
  { value: 'opt2', label: 'エタン', correct: false },
  { value: 'opt3', label: 'プロパン', correct: false },
  { value: 'opt4', label: 'ブタン', correct: true },
]

const FEEDBACK: Record<string, ReactNode> = {
  opt1: (
    <>
      不正解です。メタンCH<sub>4</sub>は炭素数1のアルカンです。
    </>
  ),
  opt2: (
    <>
      不正解です。エタンC<sub>2</sub>H<sub>6</sub>は炭素数2のアルカンです。
    </>
  ),
  opt3: (
    <>
      不正解です。プロパンC<sub>3</sub>H<sub>8</sub>は炭素数3のアルカンです。
    </>
  ),
  opt4: (
    <>
      正解です。ブタンC<sub>4</sub>H<sub>10</sub>は炭素数4のアルカンです。
    </>
  ),
}

export default function OrganicCompoundsQuiz() {
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
        炭素数が4のアルカンはどれか。
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