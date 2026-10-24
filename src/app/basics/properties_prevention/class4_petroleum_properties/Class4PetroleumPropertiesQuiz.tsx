// src/app/basics/properties_prevention/class4_petroleum_properties/Class4PetroleumPropertiesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function Class4PetroleumPropertiesQuiz() {
  return (
    <SingleChoiceQuiz
      question="潤滑油ではないものは次のうちどれか。"
      options={[
        { id: 'opt1', label: 'ギヤー油' },
        { id: 'opt2', label: 'クレオソート油' },
        { id: 'opt3', label: 'シリンダー油' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。ギヤー油は歯車（ギヤ）用の潤滑油です。荷重が大きい部分で摩耗を防ぐために使われます。',
        opt2: '正解です。潤滑油は「機械の摩擦を減らすための油」で、ギヤー油・シリンダー油は代表的な潤滑油です。一方、クレオソート油は木材防腐などに使われる油で、潤滑を目的とした油ではありません。',
        opt3: '不正解です。シリンダー油はシリンダー内部などで摩擦・摩耗を抑えるための潤滑油です。「機械を滑らかに動かす油」なので潤滑油に分類されます。',
      }}
    />
  )
}
