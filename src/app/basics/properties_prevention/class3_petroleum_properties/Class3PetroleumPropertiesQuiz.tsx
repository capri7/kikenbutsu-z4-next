// src/app/basics/properties_prevention/class3_petroleum_properties/Class3PetroleumPropertiesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function Class3PetroleumPropertiesQuiz() {
  return (
    <SingleChoiceQuiz
      question="クレオソート油について、妥当なものはどれか。"
      options={[
        { id: 'opt1', label: '人体に対して害はない。' },
        { id: 'opt2', label: '水に溶ける。' },
        { id: 'opt3', label: '人体に対して有毒である。' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。クレオソート油は人体に有害（有毒）です。',
        opt2: '不正解です。クレオソート油は油状で、水には溶けません。',
        opt3: '正解です。クレオソート油は人体に有毒で、皮膚刺激などの健康影響に注意が必要です。',
      }}
    />
  )
}
