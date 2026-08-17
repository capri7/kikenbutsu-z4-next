'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '20m以上', correct: true },
  { value: 'opt2', label: '30m以上', correct: false },
  { value: 'opt3', label: '50m以上', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。高圧ガス・液化石油ガスの施設の保安距離は20m以上です。なお、30m以上は学校・病院・劇場・公会堂などの多人数収容施設、50m以上は重要文化財・重要有形民俗文化財などの建造物の保安距離です。',
  opt2: '不正解です。「30m以上」は学校・病院・劇場・公会堂など多人数収容施設の保安距離です。高圧ガス・液化石油ガスの施設は20m以上と覚えましょう。',
  opt3: '不正解です。「50m以上」は重要文化財・重要有形民俗文化財などの建造物の保安距離です。高圧ガス・液化石油ガスの施設は20m以上です。',
}

export default function SafetyDistanceQuiz() {
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
      <p id="q1-label">高圧ガス・液化石油ガスの施設の保安距離として、正しいものは次のうちどれか。</p>

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