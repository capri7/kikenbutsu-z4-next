// src/app/basics/properties_prevention/main_class4_dangerous_substances/MainClass4DangerousSubstancesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function MainClass4DangerousSubstancesQuiz() {
  return (
    <SingleChoiceQuiz
      question="第1石油類の引火点について、妥当なものはどれか。"
      options={[
        { id: 'opt1', label: '21℃未満' },
        { id: 'opt2', label: '11℃〜25℃' },
        { id: 'opt3', label: '-20℃以下' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です。第1石油類は「引火点が21℃未満」のものです。',
        opt2: '不正解です。「11℃〜25℃」は25℃まで含むため、21℃以上の範囲が混ざります。第1石油類の条件は「21℃未満」です。',
        opt3: '不正解です。「-20℃以下」は特殊引火物の条件です。第1石油類の分類条件は「21℃未満」です。',
      }}
    />
  )
}
