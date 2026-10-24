'use client'

import { useId, useState, type ReactNode } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Choice<Id extends string> = {
  id: Id
  label: string
}

type Props<Id extends string> = {
  question: ReactNode
  // 2つ以上の選択肢（Id は、ここに書いた id から決まる）
  options: readonly [Choice<Id>, Choice<Id>, ...Choice<Id>[]]
  // 正解の id は1つだけ。選択肢に無い id は渡せない（型テストで確認）
  correct: Id
  // すべての選択肢に解説が必要。選択肢に無い id は渡せない
  feedback: Record<Id, ReactNode>
}

// 節のページの、4択（3〜5択）の小テスト
export default function SingleChoiceQuiz<Id extends string>({ question, options, correct, feedback }: Props<Id>) {
  const [selected, setSelected] = useState<Id | null>(null)
  const uid = useId()
  const questionId = `${uid}-question`

  const handleSelect = (id: Id) => {
    if (selected !== null) return
    setSelected(id)
  }

  const handleRetry = () => {
    setSelected(null)
  }

  return (
    <div className={shared.quizForm} role="group" aria-labelledby={questionId}>
      <p id={questionId}>{question}</p>

      <ul className={shared.quizOptions}>
        {options.map((opt) => {
          const isSelected = selected === opt.id
          const showResult = selected !== null
          let optionClass = shared.quizOption
          if (showResult && isSelected) {
            optionClass += ' ' + (opt.id === correct ? shared.quizOptionCorrect : shared.quizOptionWrong)
          }
          if (showResult) {
            optionClass += ' ' + shared.quizOptionLocked
          }

          return (
            <li key={opt.id}>
              <label className={optionClass}>
                <input
                  type="radio"
                  name={uid}
                  value={opt.id}
                  checked={isSelected}
                  disabled={selected !== null}
                  onChange={() => handleSelect(opt.id)}
                />
                {opt.label}
              </label>
            </li>
          )
        })}
      </ul>

      {selected !== null && (
        <div className={shared.quizFeedback} aria-live="polite">
          {feedback[selected]}
        </div>
      )}

      {selected !== null && (
        <div className={shared.quizRetryWrap}>
          <button type="button" className={shared.quizRetry} onClick={handleRetry}>
            もう一度挑戦する
          </button>
        </div>
      )}
    </div>
  )
}
