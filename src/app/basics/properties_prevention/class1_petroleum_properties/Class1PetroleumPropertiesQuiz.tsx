// src/app/basics/properties_prevention/class1_petroleum_properties/Class1PetroleumPropertiesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function Class1PetroleumPropertiesQuiz() {
  return (
    <SingleChoiceQuiz
      question="ベンゼンの性質について、妥当なものはどれか。"
      options={[
        { id: 'opt1', label: '水には少し溶ける。' },
        { id: 'opt2', label: '水には溶けない。' },
        { id: 'opt3', label: '水によく溶ける。' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。「水に少し溶ける」は"エーテル系"などで出やすい表現。ベンゼンは非水溶性で、水とは基本的に混ざりません。',
        opt2: '正解です。ベンゼンは水に溶けません（非水溶性）。「ベンゼン環＝水と混ざらない」で覚えると速いです。',
        opt3: '不正解です。「水によく溶ける」は水溶性（アルコール類など）のイメージ。ベンゼンは水に溶けません。',
      }}
    />
  )
}
