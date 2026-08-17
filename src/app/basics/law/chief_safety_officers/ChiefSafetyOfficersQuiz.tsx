'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '都道府県知事に届け出なければならない。', correct: false },
  { value: 'opt2', label: '市町村長等に届け出なければならない。', correct: true },
  { value: 'opt3', label: '消防長または消防署長に届け出なければならない。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt2: '正解です。条文上の届出先は「市町村長等（所轄消防長・消防署長等）」です。危険物保安統括管理者を選任・解任したときは、遅滞なく届け出なければなりません。',
  opt1: '不正解です。届出先は都道府県知事ではなく「市町村長等（所轄消防長・消防署長等）」です。権限のレベルを一段階上げすぎている点が誤りになります。',
  opt3: '不正解です。「消防長または消防署長」だけでは法律上の表現として不十分です。条文では「市町村長等（所轄消防長・消防署長等）」と一括して規定しています。',
}

export default function ChiefSafetyOfficersQuiz() {
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
        製造所等の所有者等が危険物保安統括管理者を選任または解任したときの届出先として、正しいものはどれか。
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