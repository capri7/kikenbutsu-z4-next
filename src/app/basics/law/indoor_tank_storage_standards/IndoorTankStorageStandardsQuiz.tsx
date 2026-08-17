'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '指定数量の30倍以下であること。', correct: false },
  { value: 'opt2', label: '指定数量の50倍以下であること。', correct: false },
  { value: 'opt3', label: '指定数量の40倍以下であること。', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。一般の屋内タンク貯蔵所では、タンク1基ごとの容量も、同じタンク専用室内のタンク容量の合計も「指定数量の40倍以下」におさめます。第4石油類（動植物油類を除く）の場合は、1基20,000L以下です。',
  opt1: '不正解です。「30倍以下」は一見安全側の数字ですが、法令で定められている上限は「指定数量の40倍以下」です。',
  opt2: '不正解です。屋内タンク貯蔵所のタンク容量の上限は「指定数量の40倍以下」です。「40倍」と「50倍」を入れ替える典型的なひっかけです。',
}

export default function IndoorTankStorageStandardsQuiz() {
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
      <p id="q1-label">屋内タンク貯蔵所の一般のタンク容量について正しいのはどれか。</p>

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