'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'mg', label: 'マグネシウム', correct: true },
  { value: 'p', label: '黄りん', correct: false },
  { value: 'na', label: 'ナトリウム', correct: false },
  { value: 'k', label: 'カリウム', correct: false },
  { value: 'cac2', label: '炭化カルシウム（カーバイド）', correct: false },
]

const FEEDBACK: Record<string, string> = {
  mg: '正解です。マグネシウムは可燃性固体として第2類に分類され、第3類ではありません。',
  p: '不正解です。黄りんは自然発火性物質として第3類に該当します。',
  na: '不正解です。ナトリウムは禁水性物質として第3類に該当します。',
  k: '不正解です。カリウムは水と激しく反応する禁水性物質で、第3類に該当します。',
  cac2: '不正解です。炭化カルシウムは水と反応して可燃性ガスを発生するため、第3類に該当します。',
}

export default function DefinedSubstancesQuiz() {
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
        次のうち、法別表第1の第3類（自然発火性物質・禁水性物質）に該当しないものはどれか。
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