'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '（A）15 と（B）40', correct: true },
  { value: 'opt2', label: '（A）15 と（B）30', correct: false },
  { value: 'opt3', label: '（A）10 と（B）40', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。第二種販売取扱所は、指定数量の倍数が「15を超え40以下」のものです。第一種は「15以下」のものなので、セットで覚えておきましょう。',
  opt2: '不正解です。「15を超え30以下」とすると、第二種の上限を小さくしすぎています。正しくは「15を超え40以下」が第二種です。',
  opt3: '不正解です。「10を超え40以下」とすると、第一種との境目が10になってしまいます。境目は「15」で、15以下が第一種、15を超え40以下が第二種です。',
}

export default function SalesStationStandardsQuiz() {
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
        （A）と（B）に当てはまる数字として適切な組み合わせは次のうちどれか。
        <br />
        「販売取扱所は指定数量の倍数が（A）を超え（B）以下のものを第二種とする。」
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
        <div className={shared.quizRetryWrap}>
          <button type="button" className={shared.quizRetry} onClick={handleRetry}>
            もう一度挑戦する
          </button>
        </div>
      )}
    </div>
  )
}