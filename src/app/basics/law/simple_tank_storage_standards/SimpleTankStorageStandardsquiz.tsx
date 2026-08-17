'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '600L以下であること。', correct: true },
  { value: 'opt2', label: '800L以下であること。', correct: false },
  { value: 'opt3', label: '400L以下であること。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。簡易貯蔵タンク1基の容量上限は「600L以下」です。あわせて「最大3基まで」「同一品質は1基まで」のセットで覚えておきましょう。',
  opt2: '不正解です。「800L以下」という基準はありません。簡易貯蔵タンク1基の上限は法令で「600L以下」と定められています。',
  opt3: '不正解です。「400L以下」は安全側に小さく見えますが、試験では基準値として定められた「600L以下」を選ぶ必要があります。',
}

export default function SimpleTankStorageStandardsQuiz() {
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
      <p id="q1-label">簡易貯蔵タンク1基の容量の上限として、正しいのはどれか。</p>

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