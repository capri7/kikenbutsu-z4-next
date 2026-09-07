// src/app/basics/physical_chemistry/states_of_matter/StatesOfMatterQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '温度を上昇させるために使われる', correct: false },
  { value: 'opt2', label: '蒸発熱として使われ、温度は一定に保たれる', correct: true },
  { value: 'opt3', label: '液体の密度を上げるために使われる', correct: false },
  { value: 'opt4', label: '分子間の引力を強めるために使われる', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。沸騰している間、加えた熱は温度の上昇には使われません。',
  opt2: '正解です！ 液体が沸騰している間、加えた熱はすべて蒸発熱として使われ、液体と気体が共存する間は温度が一定に保たれます。',
  opt3: '不正解です。液体が気体に変わる過程では、密度はむしろ小さくなります。',
  opt4: '不正解です。液体から気体に変化する際は、分子間の引力はむしろ弱まります。',
}

export default function StatesOfMatterQuiz() {
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
        水を加熱して沸騰させているとき、加えた熱の使われ方として正しいものはどれか。
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