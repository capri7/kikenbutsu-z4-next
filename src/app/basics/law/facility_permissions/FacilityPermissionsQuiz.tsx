'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '市町村長', correct: false },
  { value: 'opt2', label: '都道府県知事', correct: false },
  { value: 'opt3', label: '総務大臣', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。移送取扱所の設置・変更を2つ以上の都道府県にまたがる区域で行う場合、申請先は総務大臣です。',
  opt1: '不正解です。市町村長は、市町村の区域内にとどまる場合の申請先です。問題では「2つ以上の都道府県にまたがる区域」とあるので、より広い区域を担当する総務大臣が申請先になります。',
  opt2: '不正解です。都道府県知事は、1つの都道府県の区域におさまる場合の申請先です。2つ以上の都道府県にまたがるときは、総務大臣が申請先になります。',
}

export default function FacilityPermissionsQuiz() {
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
        移送取扱所の設置・変更を2つ以上の都道府県にまたがる地域において行う際、申請先として正しいものはどれか。
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