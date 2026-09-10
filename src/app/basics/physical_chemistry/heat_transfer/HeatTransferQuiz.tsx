// src/app/basics/physical_chemistry/heat_transfer/HeatTransferQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '伝導', correct: false },
  { value: 'opt2', label: '対流', correct: false },
  { value: 'opt3', label: '放射（ふく射）', correct: true },
  { value: 'opt4', label: '蒸発', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。伝導は物体中を熱が伝わる現象で、離れたタンクへの延焼の主因ではありません。',
  opt2: '不正解です。対流は液体・気体を介した熱の移動で、離れたタンク間の延焼を直接説明するものではありません。',
  opt3: '正解です！ 放射熱は空気などの物質を介さず直進して伝わるため、離れたタンクであっても火災の熱を受けます。保安距離は、この放射熱による延焼を防ぐために定められています。',
  opt4: '不正解です。蒸発は状態変化であり、伝熱形態（伝導・対流・放射）のひとつではありません。',
}

export default function HeatTransferQuiz() {
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
        危険物施設の「保安距離」は、主にどの伝熱形態による延焼を防ぐために定められているか。
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
        <button type="button" className={shared.quizRetry} onClick={handleRetry}>
          もう一度解く
        </button>
      )}
    </div>
  )
}