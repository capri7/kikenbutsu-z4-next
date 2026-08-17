'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '地は赤色、文字は白色にする。', correct: true },
  { value: 'opt2', label: '地は白色、文字は黒色にする。', correct: false },
  { value: 'opt3', label: '地は白色、文字は赤色にする。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。火気掲示の色指定は「火気厳禁」「火気注意」ともに地が赤、文字が白です。禁水＝青地・白字、掲示板本体＝白地・黒字とあわせて、用途ごとの配色をセットで押さえておきましょう。',
  opt2: '不正解です。白地・黒字は、危険物の類別や最大数量などを示す「掲示板本体」の配色で、火気厳禁の掲示には使いません。火気関係は赤地・白字と整理して覚えましょう。',
  opt3: '不正解です。白地・赤字のような配色指定は、法令上の火気掲示には使いません。「赤＝地の色、白＝文字の色」と逆にしないように注意しましょう。',
}

export default function SignsAndNoticesQuiz() {
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
      <p id="q1-label">火気厳禁の掲示板（火気表示）に用いる配色として、正しいものはどれか。</p>

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