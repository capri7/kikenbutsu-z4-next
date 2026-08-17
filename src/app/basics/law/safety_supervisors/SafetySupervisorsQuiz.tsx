'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  {
    value: 'opt1',
    label: '甲種危険物取扱者であり、製造所等における通算6か月以上の実務経験があれば危険物保安監督者になることができる。',
    correct: false,
  },
  {
    value: 'opt2',
    label: '丙種危険物取扱者であり、製造所等における通算6か月以上の実務経験があれば危険物保安監督者になることができる。',
    correct: true,
  },
  {
    value: 'opt3',
    label: '乙種危険物取扱者であり、製造所等における通算6か月以上の実務経験があれば危険物保安監督者になることができる。',
    correct: false,
  },
]

const FEEDBACK: Record<string, string> = {
  opt2: '正解です。危険物保安監督者になれるのは、甲種または乙種の危険物取扱者で、製造所等における通算6か月以上の実務経験がある場合だけです。丙種だけでは条件を満たしません。',
  opt1: 'この肢は正しい内容です。甲種危険物取扱者が製造所等で通算6か月以上の実務経験を積んでいれば、危険物保安監督者になることができます。誤っているのは「丙種でも監督者になれる」とする選択肢です。',
  opt3: 'この肢は正しい内容です。乙種危険物取扱者も、製造所等で通算6か月以上の実務経験があれば危険物保安監督者になれます（ただし免状で指定された類に限られます）。誤っているのは「丙種でも監督者になれる」とする選択肢です。',
}

export default function SafetySupervisorsQuiz() {
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
      <p id="q1-label">危険物保安監督者になるための条件の一つとして、誤っているものはどれか。</p>

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
          {selected === 'opt2' ? '✅ ' : '❌ 不正解です。'}
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