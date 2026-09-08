// src/app/basics/physical_chemistry/specific_gravity_vapor_density/SpecificGravityVaporDensityQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '約0.4', correct: false },
  { value: 'opt2', label: '約1.0', correct: false },
  { value: 'opt3', label: '約2.7', correct: true },
  { value: 'opt4', label: '約4.5', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。これは29÷78のように、分子量と空気の平均分子量を逆に割った値です。',
  opt2: '不正解です。約1.0になるのは分子量29に近い物質（一酸化炭素など）の場合です。ベンゼンの分子量78とは異なります。',
  opt3: '正解です！ ベンゼン（C6H6）の分子量は12×6＋1×6＝78です。蒸気比重は78÷29≒2.7となり、空気より大幅に重いことが分かります。',
  opt4: '不正解です。約4.5は灯油や軽油の蒸気比重に近い値で、ベンゼンの分子量78から計算した値とは異なります。',
}

export default function SpecificGravityVaporDensityQuiz() {
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
        ベンゼン（C6H6、分子量78）の蒸気比重に最も近い値はどれか。空気の平均分子量を29とする。
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