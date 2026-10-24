import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function Class4SubstancesQuiz() {
  return (
    <SingleChoiceQuiz
      question="(...)に当てはまるものは次のうちどれか。第1石油類の定義では「1気圧において引火点が(...)のものとする。」"
      options={[
        { id: 'opt3', label: '21°C未満' },
        { id: 'opt1', label: '20°C未満' },
        { id: 'opt2', label: '40°C以下' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。第1石油類の定義は「1気圧において引火点が21℃未満のもの」です。',
        opt1: '不正解です。境界が1℃違います。第1石油類は「引火点が21℃未満」であり、20℃未満ではありません。',
        opt2: '不正解です。「40℃以下」は第1石油類の条件ではありません。第1石油類は「引火点が21℃未満」です。',
      }}
    />
  )
}
