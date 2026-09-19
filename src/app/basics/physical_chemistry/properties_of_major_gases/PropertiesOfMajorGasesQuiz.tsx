// src/app/basics/physical_chemistry/properties_of_major_gases/PropertiesOfMajorGasesQuiz.tsx
'use client'

import { useState, type ReactNode } from 'react'

import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '二酸化炭素は水に溶け、その水溶液は弱酸性を示す', correct: false },
  { value: 'opt2', label: '一酸化炭素も二酸化炭素も、空気中で燃焼する', correct: true },
  { value: 'opt3', label: '一酸化炭素は空気より軽く、二酸化炭素は空気より重い', correct: false },
  { value: 'opt4', label: '一酸化炭素は人体に極めて有毒である', correct: false },
]

const FEEDBACK: Record<string, ReactNode> = {
  opt1: (
    <>
      不正解です。二酸化炭素は水に溶け、その水溶液（炭酸水）は弱酸性を示すため、正しい記述です。
    </>
  ),
  opt2: (
    <>
      正解です。一酸化炭素は淡青色の炎をあげて燃焼しますが、二酸化炭素は不燃性で燃焼しません。
    </>
  ),
  opt3: (
    <>
      不正解です。空気に対する比重は、一酸化炭素が0.97で空気より軽く、二酸化炭素が1.5で空気より重いため、正しい記述です。
    </>
  ),
  opt4: (
    <>
      不正解です。一酸化炭素は人体に極めて有毒であり、正しい記述です。
    </>
  ),
}

export default function PropertiesOfMajorGasesQuiz() {
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
        一酸化炭素と二酸化炭素の性質について、次のうち誤っているのはどれか。
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