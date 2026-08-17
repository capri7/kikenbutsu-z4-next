'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'ガソリン、灯油、軽油、第3石油類、第4石油類及び動植物油類', correct: false },
  { value: 'opt2', label: '免状に指定された類（第1類〜第6類）の危険物のみ', correct: true },
  { value: 'opt3', label: 'すべての危険物', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt2: '正解です。乙種免状では、免状に指定された類（第1類〜第6類）の危険物だけを取り扱うことができます。',
  opt1: '不正解です。これは丙種危険物取扱者が扱える指定危険物の例です。乙種免状は「免状に書かれた類（第1類〜第6類）だけ」を扱えます。',
  opt3: '不正解です。「すべての危険物」を扱えるのは甲種です。乙種免状は「免状に書かれた類（第1類〜第6類）だけ」を扱えます。',
}

export default function HandlerCertificationQuiz() {
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
      <p id="q1-label">乙種危険物取扱者が取扱いできる危険物の範囲として、正しいものはどれか。</p>

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