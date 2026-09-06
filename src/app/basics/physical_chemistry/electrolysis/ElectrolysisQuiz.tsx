// src/app/basics/physical_chemistry/electrolysis/ElectrolysisQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'Cuが析出する', correct: true },
  { value: 'opt2', label: 'H2が発生する', correct: false },
  { value: 'opt3', label: 'O2が発生する', correct: false },
  { value: 'opt4', label: 'SO4²⁻が還元されて硫黄が生じる', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です！ 陰極では還元されやすさの順（Ag＞Cu＞H2）に従って反応が進みます。CuSO4水溶液にはCu2+が存在するため、水分子より優先的にCu2+が還元され、Cuが析出します。',
  opt2: '不正解です。陰極では還元されやすさの順（Ag＞Cu＞H2）に従って反応が進みます。CuSO4水溶液にはCu2+が存在するため、水分子ではなくCu2+が優先的に還元され、Cuが析出します。',
  opt3: '不正解です。O2が発生するのは陽極（酸化反応が起こる極）の反応です。この設問は陰極についてなので当てはまりません。',
  opt4: '不正解です。SO4²⁻は陰極でも陽極でも反応しない傍観イオンです。電極反応に関与するのは、還元されやすい順に並んだCu2+やH2Oなどです。',
}

export default function ElectrolysisQuiz() {
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
        硫酸銅（Ⅱ）水溶液（CuSO4水溶液）を白金電極で電気分解したとき、陰極で起こる変化として正しいものはどれか。
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