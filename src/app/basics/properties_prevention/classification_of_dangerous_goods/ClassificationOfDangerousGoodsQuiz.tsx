// src/app/basics/properties_prevention/classification_of_dangerous_goods/ClassificationOfDangerousGoodsQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ClassificationOfDangerousGoodsQuiz() {
  return (
    <SingleChoiceQuiz
      question="次のうち、第2類の性質として適切なものはどれか。"
      options={[
        { id: 'opt1', label: '酸化性固体' },
        { id: 'opt2', label: '引火性液体' },
        { id: 'opt3', label: '可燃性固体' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。「酸化性固体」は第1類の性質です。第2類は自分が燃える固体（硫黄や金属粉など）です。',
        opt2: '不正解です。「引火性液体」は第4類の性質です。第2類は液体ではなく、可燃性の固体です。',
        opt3: '正解です。可燃性固体は第2類の性質です。粉や固体が燃え広がりやすいので、火花や熱源を近づけないのが基本です。',
      }}
    />
  )
}
