'use client'

import { useState, type ReactNode } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '酸化剤', correct: false },
  { value: 'opt2', label: '還元剤', correct: true },
  { value: 'opt3', label: '触媒', correct: false },
  { value: 'opt4', label: '中和剤', correct: false },
]

const FEEDBACK: Record<string, ReactNode> = {
  opt1: (
    <>
      不正解です。過酸化水素H<sub>2</sub>O<sub>2</sub>は一般に酸化剤としてはたらきますが、この設問の相手（過マンガン酸カリウムKMnO<sub>4</sub>）はより強い酸化剤です。
    </>
  ),
  opt2: (
    <>
      正解です！ 過酸化水素H<sub>2</sub>O<sub>2</sub>は一般に酸化剤としてはたらきますが、過マンガン酸カリウムKMnO<sub>4</sub>のようなより強い酸化剤に対しては、自身が電子を渡す側になるため還元剤としてはたらきます。酸化剤・還元剤の役割は物質固有の性質ではなく、相手物質との相対関係で決まります。
    </>
  ),
  opt3: (
    <>
      不正解です。触媒は反応の前後で自身が変化せず反応速度のみを変える物質であり、電子の授受で相手を酸化・還元させる酸化剤・還元剤とは働きが異なります。
    </>
  ),
  opt4: (
    <>
      不正解です。中和剤は酸と塩基の反応に関わる物質であり、電子の授受による酸化・還元とは異なる反応です。
    </>
  ),
}

export default function OxidationAndReductionQuiz() {
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
        過酸化水素H<sub>2</sub>O<sub>2</sub>は、過マンガン酸カリウムKMnO<sub>4</sub>のような強い酸化剤に対しては何としてはたらくか。
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
        <button type="button" className={shared.quizRetry} onClick={handleRetry}>
          もう一度解く
        </button>
      )}
    </div>
  )
}