// src/app/basics/physical_chemistry/electrochemical_series/ElectroChemicalSeriesQuiz.tsx
'use client'

import { useState, type ReactNode } from 'react'

import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '白金Pt', correct: true },
  { value: 'opt2', label: '亜鉛Zn', correct: false },
  { value: 'opt3', label: '鉄Fe', correct: false },
  { value: 'opt4', label: 'マグネシウムMg', correct: false },
]

const FEEDBACK: Record<string, ReactNode> = {
  opt1: (
    <>
      正解です。白金Ptは金Auとともにイオン化傾向が非常に小さく、常温の乾燥空気中で酸化されません。
    </>
  ),
  opt2: (
    <>
      不正解です。亜鉛Znは常温の乾燥空気中で表面に酸化被膜をつくります。
    </>
  ),
  opt3: (
    <>
      不正解です。鉄Feは常温の乾燥空気中で表面に酸化被膜をつくります。
    </>
  ),
  opt4: (
    <>
      不正解です。マグネシウムMgは常温の乾燥空気中で表面に酸化被膜をつくります。また、加熱すると燃焼します。
    </>
  ),
}

export default function ElectroChemicalSeriesQuiz() {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (value: string) => {
    if (selected) return
    setSelected(value)
  }

  const handleRetry = () => {
    setSelected(null)
  }

  return (
    <div className={shared.quizForm} role="group" aria-labelledby="q1-label">
      <p id="q1-label">
        常温の乾燥空気中で酸化されない金属はどれか。
      </p>
      <ul className={shared.quizOptions}>


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