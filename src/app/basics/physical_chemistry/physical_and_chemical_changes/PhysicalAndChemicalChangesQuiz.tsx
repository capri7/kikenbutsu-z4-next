// src/app/basics/physical_chemistry/physical_and_chemical_changes/PhysicalAndChemicalChangesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '氷が溶けて水になる', correct: false },
  { value: 'opt2', label: '原油を分留してガソリンと灯油に分ける', correct: false },
  { value: 'opt3', label: '鉄が錆びてボロボロになる', correct: true },
  { value: 'opt4', label: '食塩水を煮詰めて食塩の結晶を析出させる', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。氷が水になるのは状態変化（三態変化）で、物質そのものは変化していないため物理変化です。',
  opt2: '不正解です。分留は蒸留によって混合物を分けるだけの操作で、新しい物質はできていないため物理変化です。',
  opt3: '正解です！ 鉄が錆びるのは、鉄が酸素と結びついて酸化鉄という別の物質に変化する「酸化」であり、化学変化です。',
  opt4: '不正解です。食塩水から食塩の結晶が出てくるのは、水が蒸発して食塩が析出するだけで、食塩自体は変化していないため物理変化です。',
}

export default function PhysicalAndChemicalChangesQuiz() {
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
        次のうち、化学変化に該当するものはどれか。
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