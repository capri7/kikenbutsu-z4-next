// src/app/basics/physical_chemistry/metal_corrosion/MetalCorrosionQuiz.tsx
'use client'

import { useState, type ReactNode } from 'react'

import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '鉄の代わりに先に腐食（イオン化）させるため', correct: true },
  { value: 'opt2', label: '鉄の電気抵抗を下げるため', correct: false },
  { value: 'opt3', label: '鉄の表面を絶縁するため', correct: false },
  { value: 'opt4', label: '鉄の温度上昇を防ぐため', correct: false },
]

const FEEDBACK: Record<string, ReactNode> = {
  opt1: (
    <>
      正解です。鉄よりイオン化傾向の大きい金属を接続すると、その金属が鉄の代わりに陽イオンとなって溶け出し、鉄の腐食を防ぎます。
    </>
  ),
  opt2: (
    <>
      不正解です。流電陽極法は電気抵抗ではなく、イオン化傾向の大小を利用した防食方法です。
    </>
  ),
  opt3: (
    <>
      不正解です。接続する金属は鉄の表面を絶縁するのではなく、鉄より先にイオン化することで鉄を保護します。
    </>
  ),
  opt4: (
    <>
      不正解です。流電陽極法は温度上昇の防止とは関係がありません。
    </>
  ),
}

export default function MetalCorrosionQuiz() {
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
        流電陽極法で、鉄よりイオン化傾向の大きい金属（マグネシウム、アルミニウムなど）を鉄に接続する目的はどれか。
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