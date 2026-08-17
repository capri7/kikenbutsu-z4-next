'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '原則として8年に1回', correct: true },
  { value: 'opt2', label: '原則として3年に1回', correct: false },
  { value: 'opt3', label: '原則として1年に1回', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。特定屋外タンク貯蔵所の定期保安検査は、原則として「8年に1回」です。保安措置を講じている場合だけ、10年または13年の周期に延長できる特例がありますが、まずは基本の「8年に1回」をしっかり押さえておきましょう。',
  opt2: '不正解です。3年という数字は、他の「記録保存期間」などと混同させるひっかけです。特定屋外タンク貯蔵所の定期保安検査は、原則として8年に1回行います。',
  opt3: '不正解です。「1年に1回」は特定移送取扱所の定期保安検査の周期です。屋外タンク貯蔵所の定期保安検査は、原則8年に1回なので、施設の種類と周期をセットで覚えておきましょう。',
}

export default function SafetyInspectionsQuiz() {
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
      <p id="q1-label">定期保安検査の屋外タンク貯蔵所の検査時期として正しいものはどれか。</p>

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