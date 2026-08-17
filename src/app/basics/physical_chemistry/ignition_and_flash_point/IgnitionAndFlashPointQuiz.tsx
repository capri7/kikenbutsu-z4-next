// src/app/basics/physical_chemistry/ignition_and_flash_point/IgnitionAndFlashPointQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '燃焼点は引火点より数°C低い温度である。', correct: true },
  { value: 'opt2', label: '燃焼点とは、燃焼を継続させるのに必要な可燃性蒸気が供給される温度のことである。', correct: false },
  { value: 'opt3', label: '燃焼点では、一度点火すれば点火源を取り除いても燃焼を継続させることができる。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です！ 燃焼点は引火点より数°C「高い」温度になります。引火点は「一瞬つく」、燃焼点は「燃え続ける」温度だと押さえよう。',
  opt2: '不正解です。この選択肢は燃焼点の正しい説明です。「燃焼を継続できるだけの可燃性蒸気が供給される温度」がキーワードです。',
  opt3: '不正解です。燃焼点に達すると、一度点火すれば点火源を離しても燃焼は継続します。この説明も正しい内容です。',
}

export default function IgnitionAndFlashPointQuiz() {
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
      <p id="q1-label">次のうち、燃焼点の定義として誤っているものはどれか。</p>

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