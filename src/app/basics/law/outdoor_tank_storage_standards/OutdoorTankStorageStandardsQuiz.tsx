'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '貯蔵・取扱う液体危険物の最大数量500kL以上1,500kL未満', correct: false },
  { value: 'opt2', label: '貯蔵・取扱う液体危険物の最大数量500kL以上1,000kL未満', correct: true },
  { value: 'opt3', label: '貯蔵・取扱う液体危険物の最大数量300kL以上1,000kL未満', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt2: '正解です。準特定屋外貯蔵タンクは「500kL以上1,000kL未満」です。1,000kL以上になると特定屋外貯蔵タンクに区分されます。',
  opt1: '不正解です。「1,000kL以上」を含めてしまうと、その部分は特定屋外貯蔵タンクの範囲になってしまいます。準特定は上限が「1,000kL未満」です。',
  opt3: '不正解です。下限を300kLとしてしまうと、500kL未満まで準特定に含めてしまうことになります。準特定は「500kL以上」からスタートです。',
}

export default function OutdoorTankStorageStandardsQuiz() {
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
      <p id="q1-label">準特定屋外貯蔵タンクに該当する「最大数量の範囲」として正しいものは次のうちどれか。</p>

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