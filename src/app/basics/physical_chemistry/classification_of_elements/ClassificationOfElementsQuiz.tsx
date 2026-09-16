// src/app/basics/physical_chemistry/classification_of_elements/ClassificationOfElementsQuiz.tsx
'use client'

import { useState, type ReactNode } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '臭素Br', correct: true },
  { value: 'opt2', label: '水銀Hg', correct: false },
  { value: 'opt3', label: 'ケイ素Si', correct: false },
  { value: 'opt4', label: '硫黄S', correct: false },
]

const FEEDBACK: Record<string, ReactNode> = {
  opt1: (
    <>
      正解です！ 臭素Brは第17族（ハロゲン）に属する非金属元素で、20℃で液体として存在する唯一の非金属元素です。常温で液体の元素というと水銀Hgが思い浮かびやすいですが、水銀は非金属ではなく金属元素です。
    </>
  ),
  opt2: (
    <>
      不正解です。水銀Hgは常温で液体ですが、金属元素です。設問が求めているのは非金属元素です。
    </>
  ),
  opt3: (
    <>
      不正解です。ケイ素Siは非金属元素ですが、常温では固体です。
    </>
  ),
  opt4: (
    <>
      不正解です。硫黄Sは非金属元素ですが、常温では固体です。
    </>
  ),
}

export default function ClassificationOfElementsQuiz() {
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
        非金属元素のうち、20℃で液体として存在する唯一の元素はどれか。
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