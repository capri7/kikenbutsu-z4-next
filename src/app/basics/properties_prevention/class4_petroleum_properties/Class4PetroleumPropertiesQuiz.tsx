// src/app/basics/properties_prevention/class4_petroleum_properties/Class4PetroleumPropertiesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'ギヤー油', correct: false },
  { value: 'opt2', label: 'クレオソート油', correct: true },
  { value: 'opt3', label: 'シリンダー油', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。ギヤー油は歯車（ギヤ）用の潤滑油です。荷重が大きい部分で摩耗を防ぐために使われます。',
  opt2: '正解です。潤滑油は「機械の摩擦を減らすための油」で、ギヤー油・シリンダー油は代表的な潤滑油です。一方、クレオソート油は木材防腐などに使われる油で、潤滑を目的とした油ではありません。',
  opt3: '不正解です。シリンダー油はシリンダー内部などで摩擦・摩耗を抑えるための潤滑油です。「機械を滑らかに動かす油」なので潤滑油に分類されます。',
}

export default function Class4PetroleumPropertiesQuiz() {
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
      <p id="q1-label">潤滑油ではないものは次のうちどれか。</p>

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