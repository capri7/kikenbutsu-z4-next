'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '黄', correct: false },
  { value: 'opt2', label: '緑', correct: false },
  { value: 'opt3', label: '赤', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。レギュラーガソリンの識別色は「赤」です。ハイオク＝黄、レギュラー＝赤、軽油＝緑、灯油＝青のセットで覚えておきましょう。',
  opt1: '不正解です。「黄」はハイオクガソリンの識別色です。ハイオク＝黄／レギュラー＝赤の取り違えは、実務でも試験でもよくあるひっかけです。',
  opt2: '不正解です。「緑」は軽油の識別色です。レギュラーは赤、軽油は緑、灯油は青と色で区別します。',
}

export default function SelfRefuelingStationStandardsQuiz() {
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
      <p id="q1-label">危険物の品目の表示でレギュラーガソリンに使用される色は次のうちどれか。</p>

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