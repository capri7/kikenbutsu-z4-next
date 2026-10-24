import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function OutdoorStorageStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="屋外貯蔵所に貯蔵できる第2類の危険物は次のうちどれか。"
      options={[
        { id: 'opt1', label: '灯油' },
        { id: 'opt2', label: '重油' },
        { id: 'opt3', label: '硫黄' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。第2類は「可燃性固体」で、その代表例が硫黄です。灯油や重油は第4類（第2・第3石油類）なので第2類には入りません。',
        opt1: '不正解です。灯油は第4類の第2石油類です。第2類は硫黄のような「可燃性固体」を指します。',
        opt2: '不正解です。重油は第4類の第3石油類です。第2類は硫黄などの可燃性固体を選びましょう。',
      }}
    />
  )
}
