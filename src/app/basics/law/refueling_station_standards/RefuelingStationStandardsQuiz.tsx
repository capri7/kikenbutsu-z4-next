'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '平面駐車場', correct: false },
  { value: 'opt2', label: 'スーパー', correct: false },
  { value: 'opt3', label: '宿泊施設', correct: true },
]

const FEEDBACK: Record<string, string> = {
  opt3: '正解です。給油取扱所には、火災時に多数の人が就寝しているおそれのある旅館・ホテルなどの宿泊施設を併設してはいけません。避難が遅れやすい用途は、法律で禁止されている代表的なパターンです。',
  opt1: '不正解です。平面駐車場は、給油取扱所の敷地内に設けても差し支えない施設です。「設けてはいけない」のは、宿泊施設のように人が長時間滞在し、避難が遅れやすい建物です。',
  opt2: '不正解です。スーパーなどの物販店舗は、防火区画や避難経路などの基準を満たせば併設できます。この問題では、法律で原則として併設が禁止されている施設を選びます。',
}

export default function RefuelingStationStandardsQuiz() {
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
      <p id="q1-label">給油取扱所に設けてはいけない建築物その他の工作物は次のうちどれか。</p>

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