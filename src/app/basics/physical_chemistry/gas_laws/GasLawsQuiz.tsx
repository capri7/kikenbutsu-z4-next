// src/app/basics/physical_chemistry/gas_laws/GasLawsQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'ボイルの法則は体積が圧力に比例し、シャルルの法則は体積が絶対温度に反比例する', correct: false },
  { value: 'opt2', label: 'ボイルの法則は体積が圧力に反比例し、シャルルの法則は体積が絶対温度に比例する', correct: true },
  { value: 'opt3', label: '両方とも、体積は圧力に比例する', correct: false },
  { value: 'opt4', label: '両方とも、体積は絶対温度に反比例する', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。ボイルの法則とシャルルの法則の比例・反比例の関係が逆になっています。',
  opt2: '正解です！ ボイルの法則（温度一定）は体積が圧力に反比例（P×V＝一定）、シャルルの法則（圧力一定）は体積が絶対温度に比例します。',
  opt3: '不正解です。ボイルの法則では、体積は圧力に反比例します。',
  opt4: '不正解です。シャルルの法則では、体積は絶対温度に比例します。',
}

export default function GasLawsQuiz() {
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
        ボイルの法則とシャルルの法則の組み合わせとして、正しいものはどれか。
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