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
    label: 'タンクの最大直径またはタンク高さのうち大きい方と同じ距離を保有空地とする。ただし、15m以上とする。',
    correct: true,
  },
  {
    value: 'opt2',
    label: 'タンクの最大直径またはタンク高さのうち小さい方と同じ距離を保有空地とする。ただし、15m以上とする。',
    correct: false,
  },
  {
    value: 'opt3',
    label: 'タンクの最大直径またはタンク高さのうち大きい方と同じ距離を保有空地とする。ただし、10m以上とする。',
    correct: false,
  },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。指定数量の倍数が4,000を超える屋外タンク貯蔵所では、保有空地は「タンク最大直径または高さのうち大きい方」と同じ距離で、少なくとも15m以上確保します。この問題は「大きい方」と「15m以上」のセットで押さえておきましょう。',
  opt2: '不正解です。「小さい方」では足りません。火災時に炎が届きやすいのは外側まで広がる「大きい方」なので、最大直径または高さのうち大きい方と同じ距離を取り、かつ15m以上とします。',
  opt3: '不正解です。距離を「大きい方と同じ」にする点は合っていますが、下限が誤りです。指定数量の倍数が4,000を超える場合は、少なくとも15m以上の保有空地が必要です（10m以上では不足）。',
}

export default function BufferSpaceRequirementsQuiz() {
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
      <p id="q1-label">屋外タンク貯蔵所で指定数量の倍数が4,000を超える場合、適切な保有空地は次のうちどれか。</p>

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