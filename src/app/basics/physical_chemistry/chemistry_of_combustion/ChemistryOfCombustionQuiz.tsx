// src/app/basics/physical_chemistry/chemistry_of_combustion/ChemistryOfCombustionQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '可燃物', correct: false },
  { value: 'opt2', label: '点火源', correct: false },
  { value: 'opt3', label: '不活性ガス', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。「可燃物」は燃える材料そのもので、燃焼の三要素の1つです。可燃物・酸素供給源・点火源の3つがそろうと燃え続ける、というルールを思い出そう。',
  opt2: '不正解です。「点火源」はマッチの炎や火花など、燃焼のきっかけとなる熱エネルギーの供給源で、これも燃焼の三要素の1つです。三要素を声に出して言えるようにしておくと、本番でも迷いにくくなります。',
  opt3: '正解です！ 不活性ガス（窒素や二酸化炭素など）は、酸素を薄めて燃焼を抑える働きがあります。燃焼の三要素は「可燃物」「酸素供給源」「点火源」の3つです。',
}

export default function ChemistryOfCombustionQuiz() {
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
      <p id="q1-label">次のうち、燃焼の三要素に該当しないものはどれか？</p>

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