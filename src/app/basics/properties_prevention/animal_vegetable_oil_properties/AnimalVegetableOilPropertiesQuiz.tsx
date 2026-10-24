// src/app/basics/properties_prevention/animal_vegetable_oil_properties/AnimalVegetableOilPropertiesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function AnimalVegetableOilPropertiesQuiz() {
  return (
    <SingleChoiceQuiz
      question="動植物油類の指定数量は次のうちどれか。"
      options={[
        { id: 'opt1', label: '4,000L' },
        { id: 'opt2', label: '10,000L' },
        { id: 'opt3', label: '6,000L' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。4,000Lは第3石油類（水溶性）で見かけやすい数字です。動植物油類はそれより大きく、指定数量は10,000Lです（動植物＝1万）。',
        opt2: '正解です。動植物油類（例：なたね油・大豆油など）の指定数量は10,000Lです。第4類の中でも指定数量が大きいグループで、「動植物＝1万（10,000）」で覚えておきましょう。',
        opt3: '不正解です。6,000Lは第4石油類の指定数量でよく出る数字です。動植物油類はさらに大きく、指定数量は10,000Lです（動植物＝1万）。',
      }}
    />
  )
}
