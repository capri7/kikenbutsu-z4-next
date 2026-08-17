'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '危険物の運搬に関する細かなルール（表示・積載など）', correct: true },
  { value: 'opt2', label: '危険物の指定数量', correct: false },
  { value: 'opt3', label: '危険物の分類', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。運搬の表示や積載などの細かなルールは規則（省令）側です。分類と指定数量は政令で決まります。「区分・数字＝政令、手順＝規則」で覚えよう。',
  opt2: '不正解です。指定数量は政令で決まる「しきい値」です。数字が出たら政令。正解は「運搬の細かなルール（表示・積載など）」です。',
  opt3: '不正解です。分類（第1類〜第6類など）は政令で決まります。区分が出たら政令。正解は「運搬の細かなルール（表示・積載など）」です。',
}

export default function LegalFrameworkQuiz() {
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
      <p id="q1-label">政令によって定められていないものは、次のうちどれか。</p>

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