'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '30,000L以下', correct: true },
  { value: 'opt2', label: '4,000L以下', correct: false },
  { value: 'opt3', label: '10,000L以下', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。移動タンク貯蔵所のタンク総容量は「30,000L以下」です。あわせて、タンク内部を完全な間仕切で区画した1区画あたりの上限は「4,000L以下」とセットで覚えておきましょう。',
  opt2: '不正解です。4,000L以下は「タンク内部を完全な間仕切で区画した1区画あたりの上限容量」です。タンク全体の総容量ではありません。',
  opt3: '不正解です。「10,000L以下」というタンク総容量の基準はありません。移動タンク貯蔵所の総容量は「30,000L以下」です。',
}

export default function MobileTankStorageStandardsQuiz() {
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
      <p id="q1-label">移動タンク貯蔵所のタンク総容量について正しいのは次のうちどれか。</p>

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