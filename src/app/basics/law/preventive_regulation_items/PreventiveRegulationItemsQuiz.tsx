'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '化学消防機械の設置その他自衛の消防組織に関すること。', correct: true },
  { value: 'opt2', label: '危険物施設の運転・操作に関すること。', correct: false },
  { value: 'opt3', label: '化学消防自動車の設置その他自衛の消防組織に関すること。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。予防規程に定める自衛消防体制では、正しい用語は「化学消防自動車」です。選択肢1は「化学消防機械」となっており、法令上用いられる用語とずれている点がひっかけです。用語の細かい違いをねらう問題として、よく問われるパターンです。',
  opt2: '不正解です。「危険物施設の運転・操作」は予防規程に必ず定めるべき事項の一つです。標準手順、許可・承認、異常時の停止手順までセットで覚えておきましょう。',
  opt3: '不正解です。「化学消防自動車の設置その他自衛の消防組織に関すること」は、自衛消防体制に関する典型的な記載事項であり、正しい内容です。「化学消防自動車」という用語そのものも、頻出ワードとして覚えておきましょう。',
}

export default function PreventiveRegulationItemsQuiz() {
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
      <p id="q1-label">予防規程に定める主な事項に関する次の記述のうち、誤っているものはどれか。</p>

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