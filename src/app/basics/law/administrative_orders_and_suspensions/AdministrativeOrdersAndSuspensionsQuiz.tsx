'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt3', label: '防災規定変更命令', correct: true },
  { value: 'opt1', label: '危険物施設の応急措置命令', correct: false },
  { value: 'opt2', label: '危険物の貯蔵・取扱基準遵守命令', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。「防災規定変更命令」という用語は出てきません。条文では「予防規定変更命令」で、措置命令グループとは別物です。',
  opt1: '不正解です。「危険物施設の応急措置命令」はきちんと措置命令の一つです。事故のおそれがあるときに、応急の対応をさせる命令のことです。',
  opt2: '不正解です。「危険物の貯蔵・取扱基準遵守命令」も措置命令の一つです。「基準を守れ」という命令は、措置命令です。',
}

export default function AdministrativeOrdersAndSuspensionsQuiz() {
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
      <p id="q1-label">措置命令の種類に該当しないのは、次のうちどれか。</p>

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