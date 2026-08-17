'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  {
    value: 'opt1',
    label: '製造所等の構造・設備が技術上の基準に適合するよう点検し、結果や措置を記録・保存するなどの保安業務を行う。',
    correct: true,
  },
  { value: 'opt2', label: '危険物の取扱作業を統括し、作業者への指示を行うのが主な役割である。', correct: false },
  { value: 'opt3', label: '選任・解任したときは、市町村長等への届出が必要である。', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。危険物施設保安員は、構造・設備が技術上の基準に適合しているか点検し、その結果や講じた措置を記録・保存するなど、「構造・設備の保安」が中心の役割です。',
  opt2: '不正解です。「作業者への指示」や取扱作業の統括は危険物保安監督者の役割です。危険物施設保安員は構造・設備側の保安を担当します。',
  opt3: '不正解です。危険物施設保安員を選任・解任したときに、市町村長等への届出義務はありません（統括管理者とはルールが異なります）。',
}

export default function FacilitySafetyStaffQuiz() {
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
      <p id="q1-label">危険物施設保安員の役割に関する説明として、正しいものはどれか。</p>

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