'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '酸化剤との接触・混合を避ける。', correct: false },
  { value: 'opt2', label: '空気との接触を避ける。', correct: false },
  { value: 'opt3', label: '水との接触を避ける（禁水）', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。アルカリ金属の過酸化物は「水との接触を避ける（禁水）」が最優先の基準です。',
  opt1: '不正解です。「酸化剤との接触回避」は第2類「可燃性固体」側の典型です。ここでは禁水＝「水との接触回避」がポイントです。',
  opt2: '不正解です。「空気との接触回避」は第3類「自然発火性物質」の要点です。正解は禁水＝「水との接触を避ける」です。',
}

export default function GeneralStandardsPart1Quiz() {
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
        第1類危険物のうち<strong>「アルカリ金属の過酸化物」</strong>の取扱基準として、<strong>最も適切</strong>なものは次のうちどれか。
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