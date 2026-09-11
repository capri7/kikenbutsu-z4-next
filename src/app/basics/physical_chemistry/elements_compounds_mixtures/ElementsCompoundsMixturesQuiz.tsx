// src/app/basics/physical_chemistry/elements_compounds_mixtures/ElementsCompoundsMixturesQuiz.tsx
'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: 'NaClは分子式である', correct: false },
  { value: 'opt2', label: 'NaClはイオン結晶であり、分子式ではなく組成式で表される', correct: true },
  { value: 'opt3', label: 'NaClは混合物である', correct: false },
  { value: 'opt4', label: 'NaClは単体である', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '不正解です。NaClはナトリウムイオンと塩化物イオンがイオン結合した結晶で、独立した「分子」を作らないため、分子式ではなく組成式で表されます。',
  opt2: '正解です！ NaClはイオン結晶で、決まった数の原子が集まった「分子」を作りません。そのため、原子の比（1：1）を最も簡単な整数比で表した組成式で表されます。',
  opt3: '不正解です。NaClは化学的に結合した1種類の純物質（化合物）であり、複数の物質が単に混じり合った混合物ではありません。',
  opt4: '不正解です。単体は1種類の元素からなる純物質です。NaClはナトリウムと塩素という2種類の元素からなるため、単体ではなく化合物です。',
}

export default function ElementsCompoundsMixturesQuiz() {
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
        塩化ナトリウム（NaCl）の化学式について、正しい説明はどれか。
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