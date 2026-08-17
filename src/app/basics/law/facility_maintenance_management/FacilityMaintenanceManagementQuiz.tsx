'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '市町村長等', correct: true },
  { value: 'opt2', label: '消防署長', correct: false },
  { value: 'opt3', label: '都道府県知事', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。技術上の基準に適合させるための変更命令を出せるのは「市町村長等」です。市町村長等 → 所有者等 に対して、基準に合わせるための修理・改造・移転（修・改・移）を命じる形になります。',
  opt2: '不正解です。消防署長は立入検査や指導などを行う立場ですが、技術上の基準に適合させるための「変更命令」を出す権限者として条文に挙げられているのは市町村長等です。',
  opt3: '不正解です。都道府県知事が関わる危険物の許可・認可もありますが、危険物施設を技術上の基準に適合させるための変更命令を出すのは「市町村長等」です。',
}

export default function FacilityMaintenanceManagementQuiz() {
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
      <p id="q1-label">技術上の基準に適合させるための変更命令を出せるのは、次のうち誰か。</p>

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