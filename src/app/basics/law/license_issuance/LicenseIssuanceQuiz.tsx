'use client'

import { useState } from 'react'
import shared from '@/app/basics/BasicsShared.module.css'

type Option = {
  value: string
  label: string
  correct: boolean
}

const OPTIONS: Option[] = [
  { value: 'opt1', label: '取得した免状の種類', correct: false },
  { value: 'opt2', label: '現住所', correct: true },
  { value: 'opt3', label: '過去10年以内に撮影した写真', correct: false },
]

const FEEDBACK: Record<string, string> = {
  opt2: '正解です。危険物取扱者の免状には「本籍地の属する都道府県」は記載されますが、「現住所」は記載されません。住所が変わっても本籍地が同じなら書換え不要、というポイントもセットで覚えておきましょう。',
  opt1: '不正解です。「取得した免状の種類」は免状の記載事項の1つです。氏名・生年月日や免状番号などと同じく、免状に必ず書かれる情報なので「含まれないもの」にはなりません。',
  opt3: '不正解です。「過去10年以内に撮影した写真」も免状の記載事項に含まれます。さらに、写真の撮影から10年経過すると書換え事由にもなるので、記載事項と書換え理由の両方でよく問われる重要ポイントです。',
}

export default function LicenseIssuanceQuiz() {
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
      <p id="q1-label">免状の記載事項に含まれないものは次のうちどれか。</p>

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