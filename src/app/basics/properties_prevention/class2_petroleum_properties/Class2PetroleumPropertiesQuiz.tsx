// src/app/basics/properties_prevention/class2_petroleum_properties/Class2PetroleumPropertiesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function Class2PetroleumPropertiesQuiz() {
  return (
    <SingleChoiceQuiz
      question="オルトキシレン（o-キシレン）の引火点について、妥当なものはどれか。"
      options={[
        { id: 'opt1', label: '約45℃' },
        { id: 'opt2', label: '約28℃' },
        { id: 'opt3', label: '約32℃' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。45℃は高すぎます。オルトキシレンの引火点は約32℃です。',
        opt2: '不正解です。28℃はメタ・パラキシレン（約27℃）に近い数値ですが、オルトキシレンとは異なります。オルトキシレンの引火点は約32℃です。',
        opt3: '正解です。3種の異性体のうち、オルトキシレンの引火点が最も高く、約32℃です。',
      }}
    />
  )
}
