// src/app/basics/physical_chemistry/static_electricity/StaticElectricityQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '箔が帯電体と反対符号に帯電し、引き合うため', correct: false },
  { value: 'opt2', label: '箔が帯電体と同じ符号に帯電し、反発するため', correct: true },
  { value: 'opt3', label: '箔の電気量がすべて放電され、軽くなるため', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。静電誘導では、集電板の近い側に反対符号、遠い側の箔には帯電体と同じ符号の電荷が現れます。箔どうしは「同符号」なので引き合うのではなく反発します。',
  opt2: '正解です！ 帯電体を近づけると静電誘導が起こり、箔には帯電体と同じ符号の電荷が集まります。同符号どうしは反発（斥力）するため、箔が開きます。',
  opt3: '不正解です。箔検電器は近づけただけでは放電しません。箔が開くのは、電気量が減るからではなく、同符号の電荷どうしが反発するためです。',
}

export default function StaticElectricityQuiz() {
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
        帯電体を箔検電器の集電板に近づけたとき、2枚の金属箔が開く直接の原因はどれか。
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
        <div className={shared.quizRetryWrap}>
          <button type="button" className={shared.quizRetry} onClick={handleRetry}>
            もう一度挑戦する
          </button>
        </div>
      )}
    </div>
  )
}