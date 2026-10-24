// src/app/basics/properties_prevention/special_flammable_properties/SpecialFlammablePropertiesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function SpecialFlammablePropertiesQuiz() {
  return (
    <SingleChoiceQuiz
      question="ジエチルエーテルの性質について、妥当なものはどれか。"
      options={[
        { id: 'opt1', label: '水には溶けにくく、アルコールには溶けない。' },
        { id: 'opt2', label: '水には少し溶け、アルコールにはよく溶ける。' },
        { id: 'opt3', label: '水によく溶け、アルコールにもよく溶ける。' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。ジエチルエーテルは水には溶けにくい（少し溶ける）ですが、アルコールにはよく溶けます。',
        opt2: '正解です。ジエチルエーテルは水には「少し」溶けますが、水ほど極性が高くないため「よく」までは溶けません。一方、アルコール（エタノールなど）とはよく混ざります。',
        opt3: '不正解です。「水によく溶ける」は言い過ぎです。ジエチルエーテルは水には少しだけ溶け、アルコールにはよく溶けます。',
      }}
    />
  )
}
