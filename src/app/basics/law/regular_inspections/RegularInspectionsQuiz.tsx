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
    label:
      '設置の完成検査済証（または変更の許可）の交付日、または前回の漏れの点検を行った日から、1年を経過する日の属する月の末日までの間に1回以上行う。',
    correct: true,
  },
  {
    value: 'opt2',
    label: '設置の完成検査の申請日から、1年を経過する日の属する月の末日までの間に1回以上行う。',
    correct: false,
  },
  {
    value: 'opt3',
    label: '設置の完成検査済証の交付日から、5年を経過する日の属する月の末日までの間に1回以上行う。',
    correct: false,
  },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。地下貯蔵タンク／地下埋設配管の漏れの点検は、完成検査済証（または変更の許可）の交付日、または前回の漏れの点検日を起点として、1年を経過する日の属する月の末日までの間に1回以上行います。「起点の日付」と「1年ごと」というセットで覚えておきましょう。',
  opt2: '不正解です。起点を「完成検査の申請日」としている点が誤りです。正しくは完成検査済証（または変更の許可）の交付日か前回の漏れの点検日が起点になります。周期は1年で合っていますが、起点を問うひっかけです。',
  opt3: '不正解です。5年ごとという周期は、移動貯蔵タンクの漏れの点検に関する規定です。地下貯蔵タンク／地下埋設配管は、1年ごとに漏れの点検を行う必要があります。',
}

export default function RegularInspectionsQuiz() {
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
      <p id="q1-label">地下貯蔵タンクの漏れの点検に関する記述として、正しいものはどれか。</p>

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