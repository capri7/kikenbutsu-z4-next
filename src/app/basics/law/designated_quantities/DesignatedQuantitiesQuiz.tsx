'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt3', label: '二硫化炭素', correct: true },
  { value: 'opt1', label: 'ガソリン', correct: false },
  { value: 'opt2', label: 'アセトン', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。二硫化炭素は「特殊引火物」に分類され、指定数量は50Lです。同じグループにはジエチルエーテルやアセトアルデヒドなどがあります。',
  opt1: '不正解です。ガソリンは第1石油類（非水溶性）で、指定数量は200Lのグループです（ベンゼン・トルエンなどと同じ）。',
  opt2: '不正解です。アセトンは第1石油類（水溶性）で、指定数量は400Lです。アセトンとピリジンは「水に溶ける第1石油類400L」としてセットで覚えておきましょう。',
}

export default function DesignatedQuantitiesQuiz() {
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
      <p id="q1-label">第4類危険物の分類で指定数量が50Lであるものは、次のうちどれか。</p>

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