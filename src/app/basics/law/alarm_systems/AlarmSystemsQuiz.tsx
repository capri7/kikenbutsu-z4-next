'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt3', label: '構内放送設備', correct: true },
  { value: 'opt1', label: '拡声装置', correct: false },
  { value: 'opt2', label: '警鐘', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt3:
    '正解です。拡声装置と警鐘は警報設備の代表例に含まれるが、「構内放送設備」という区分は法令上の代表例にはない。',
  opt1: '不正解です。「拡声装置」は非常放送などに用いられる警報設備の区分に含まれる。',
  opt2: '不正解です。「警鐘」は手動で鳴らす警報設備の区分に含まれる。',
}

export default function AlarmSystemsQuiz() {
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
      <p id="q1-label">警報設備として法令上の区分に含まれないものは次のうちどれか。</p>

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