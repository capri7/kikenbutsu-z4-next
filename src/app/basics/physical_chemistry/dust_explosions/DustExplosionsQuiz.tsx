// src/app/basics/physical_chemistry/dust_explosions/DustExplosionsQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '粉じんの粒子が微粉の状態で、空気中に一定の濃度で浮遊していること', correct: false },
  { value: 'opt2', label: '空気中に酸素が存在すること', correct: false },
  { value: 'opt3', label: '粉じんの粒子径が大きく、空気中に浮遊しにくい状態であること', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。「粉じんの粒子が微粉の状態で、空気中に一定の濃度で浮遊していること」は、粉じん爆発が起こるための基本条件の1つです。',
  opt2: '不正解です。「空気中に酸素が存在すること」も、粉じん爆発の成立に必要な条件です。',
  opt3: '正解です！ 粉じん爆発が起こりやすいのは、粒子が「細かく」空気中に浮遊しやすい状態のときです。粒子径が大きく浮遊しにくい状態は、むしろ爆発が起こりにくい条件です。',
}

export default function DustExplosionsQuiz() {
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
      <p id="q1-label">粉じん爆発が起こるための条件として、誤っているものはどれか。</p>

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