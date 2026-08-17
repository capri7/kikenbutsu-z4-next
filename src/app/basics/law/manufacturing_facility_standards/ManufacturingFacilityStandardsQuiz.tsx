'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '防御構造とすること。', correct: false },
  { value: 'opt2', label: '防爆構造とすること。', correct: true },
  { value: 'opt3', label: '防火構造とすること。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt2: '正解です。粉じんや可燃性ガスがある場所では、電気設備は必ず「防爆構造」にします。内部で着火しても外部へ火炎や火花が出ない構造にすることで、周囲の爆発を防ぎます。',
  opt1: '不正解です。「防御構造」という用語はこの規定のキーワードではありません。爆発のおそれがある場所では、電気設備は法令上「防爆構造」とすることがポイントです。',
  opt3: '不正解です。「防火構造」は建築物の壁などの区分に使われる用語で、ここで求められているのは電気設備の「防爆構造」です。火を外へ出さないことが重要です。',
}

export default function ManufacturingFacilityStandardsQuiz() {
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
        電気設備が点火源となり爆発するおそれがある場所（粉じん・可燃性ガス・危険物等）に設置する電気設備について、当てはまるものは次のうちどれか。
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