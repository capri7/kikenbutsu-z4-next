'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '地盤面から1m以上下にあること。', correct: false },
  { value: 'opt2', label: '地盤面から0.2m以上下にあること。', correct: false },
  { value: 'opt3', label: '地盤面から0.6m以上下にあること。', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。地下貯蔵タンクの頂部は、地盤面から0.6m以上の深さに埋設する必要があります。土圧や車両荷重などからタンクを保護するための深さです。',
  opt1: '不正解です。「1m以上」ではなく「0.6m以上」です。1mという数値は、他の離隔や間隔の数字と混同しないように注意しましょう。',
  opt2: '不正解です。0.2mは、屋内タンク貯蔵所の「敷居の高さ」で出てくる数字です。地下タンクの頂部の深さは「0.6m以上」が正解です。',
}

export default function UndergroundTankStorageStandardsQuiz() {
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
      <p id="q1-label">地下貯蔵タンクの頂部の埋設深さについて正しいのはどれか。</p>

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