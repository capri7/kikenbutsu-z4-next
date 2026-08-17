'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '危険物取り扱い作業の従事開始日から3年以内に受講する。', correct: false },
  { value: 'opt2', label: '危険物取り扱い作業の従事開始日から1年以内に受講する。', correct: true },
  { value: 'opt3', label: '危険物取り扱い作業の従事開始日から5年以内に受講する。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt2: '正解です。「新たに危険物の取扱作業に従事する者」は、従事開始日から1年以内に最初の保安講習を受講する必要があります。',
  opt1: '不正解です。「従事開始日から3年以内」は、すでに保安講習を受けたあと継続して従事する人に対するサイクルと混同させるひっかけです。新たに従事する場合は、最初だけ従事開始日から1年以内が期限になります。',
  opt3: '不正解です。保安講習のサイクルは法令上「最初の4月1日から3年以内」が基本です。「5年以内」という選択肢が出てきたら、受講間隔を長くしすぎています。',
}

export default function SafetyLecturesQuiz() {
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
        保安講習の受講期限について、新たに危険物の取扱作業に従事する者の最初の受講期限として妥当なものはどれか。
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