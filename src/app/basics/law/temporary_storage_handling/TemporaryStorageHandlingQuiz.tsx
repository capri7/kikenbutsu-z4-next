'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '免状を亡失した日から都道府県知事に再交付の申請をするまでの期間', correct: false },
  { value: 'opt2', label: '予防規程を定めた日から市区町村等に対し、認可の申請をするまでの期間', correct: false },
  {
    value: 'opt3',
    label: '所轄の消防長または消防署長の承認を受け、指定数量以上の危険物を製造所等以外の場所で仮に貯蔵し、又は取り扱うことができる期間',
    correct: true,
  },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。所轄の消防長または消防署長の承認を受け、指定数量以上の危険物を製造所等以外の場所で仮に貯蔵し、又は取り扱うことのできる期間です。',
  opt1: '不正解です。「免状を亡失した日から都道府県知事に再交付の申請をするまでの期間」には、法令上「10日以内」という制限はありません。ここは免状の再交付手続であり、仮貯蔵・仮取扱いとは別の話です。',
  opt2: '不正解です。「予防規程を定めた日から、市区町村等に対して認可申請をするまでの期間」も、「10日以内」という制限ではありません。予防規程は事業所の安全ルールをまとめたもので、期間10日以内と決められているのは、あくまで仮貯蔵・仮取扱いの許可期間です。',
}

export default function TemporaryStorageHandlingQuiz() {
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
      <p id="q1-label">法令上、10日以内の制限があるものは次のうちどれか。</p>

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