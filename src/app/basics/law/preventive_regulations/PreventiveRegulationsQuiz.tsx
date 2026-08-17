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
      '予防規程を定めなければならない製造所等で、市町村長等の認可を受けずに危険物を貯蔵し、または取り扱った場合は、6か月以下の懲役または50万円以下の罰金に処せられる。',
    correct: true,
  },
  {
    value: 'opt2',
    label:
      '許可とは、ある人の法律上の行為が、公の機関（行政庁）の同意を得なければ有効に成立しない場合に、その同意を与えて行為の効果を完成させる行政行為であり、予防規程の認可もこれに当たる。',
    correct: false,
  },
  {
    value: 'opt3',
    label:
      '認可とは、一般に禁止されている行為について、特定の人または特定の事件について禁止を解除する行政行為であり、給油取扱所の設置許可などがこれに当たる。',
    correct: false,
  },
]

const FEEDBACK: Record<string, string> = {
  opt1: '正解です。予防規程を定めなければならない製造所等で、市町村長等の認可を受けずに危険物を貯蔵・取扱いすると、消防法42条1項8号により「6か月以下の懲役または50万円以下の罰金」の対象になります。予防規程は〈作る・変える〉ときの認可だけでなく、その後の運用まで含めて管理される点も押さえておきましょう。',
  opt2: '不正解です。選択肢2の説明は「許可」ではなく〈認可〉の定義です。認可は、当事者の行為だけでは効力が生じないときに、行政庁が同意してその効力を完成させる行為で、予防規程の認可が典型例です。いっぽう許可は、原則として禁止されている行為について、特定人・特定の事件に限り禁止を解く行為（例：給油取扱所の設置許可）です。',
  opt3: '不正解です。選択肢3の説明は「認可」ではなく〈許可〉の内容です。給油取扱所の設置許可などは、原則禁止の行為を個別に認める許可の代表例です。認可は「行為の効力を完成させる同意」、許可は「禁止の解除」と対比して覚えておきましょう。',
}

export default function PreventiveRegulationsQuiz() {
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
      <p id="q1-label">認可・許可および予防規程に関する記述として、正しいものはどれか。</p>

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