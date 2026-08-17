'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '製造所等を所有・管理・占有する者は、危険物保安監督者を定めたときは、10日以内にその旨を届け出る。', correct: false },
  { value: 'opt2', label: '製造所等を所有・管理・占有する者は、危険物保安監督者を定めたときは、7日以内にその旨を届け出る。', correct: false },
  { value: 'opt3', label: '製造所等を所有・管理・占有する者は、危険物保安監督者を選任または解任したときは、遅滞なくその旨を届け出る。', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。危険物保安監督者の選任・解任の届出は、「事後（遅滞なく）」行うのが原則です。日数で区切られているのは、品名・数量・指定数量の倍数の変更（事前10日前）だけでしたね。',
  opt1: '不正解です。「10日以内」は危険物の品名・数量・指定数量の倍数を変更する場合の期限です。危険物保安監督者の選任・解任は、この表では「事後（遅滞なく）」のグループに入っていました。',
  opt2: '不正解です。危険物保安監督者の届出について「7日以内」という期限は法令上定められていません。監督者の選任・解任は、日数ではなく「遅滞なく」届け出ることがポイントです。',
}

export default function NotificationOfChangesQuiz() {
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
      <p id="q1-label">危険物保安監督者の選任・解任に関する届出について、正しい記述はどれか。</p>

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