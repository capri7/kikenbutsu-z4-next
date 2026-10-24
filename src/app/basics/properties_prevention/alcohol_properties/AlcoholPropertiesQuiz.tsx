// src/app/basics/properties_prevention/alcohol_properties/AlcoholPropertiesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function AlcoholPropertiesQuiz() {
  return (
    <SingleChoiceQuiz
      question="メタノールの発火点について、妥当なものはどれか。"
      options={[
        { id: 'opt1', label: '363℃' },
        { id: 'opt2', label: '412℃' },
        { id: 'opt3', label: '464℃' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。363℃は「400℃前後なら合ってそう」というひっかけ。発火点はもう少し高く、メタノールは464℃です。',
        opt2: '不正解です。412℃も「それっぽい」数値ですが誤り。メタノールの発火点（自然発火温度）は464℃です。',
        opt3: '正解です。メタノールの発火点（＝自然発火温度）は464℃です。ここは「引火点」と混同しやすいので注意（発火点は火花なしで燃えだす温度）。',
      }}
    />
  )
}
