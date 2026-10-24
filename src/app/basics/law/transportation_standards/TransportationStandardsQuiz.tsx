import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function TransportationStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="運搬する時に第4類の危険物と混載してはならない危険物は次のうちどれか。"
      options={[
        { id: 'opt1', label: '第2類' },
        { id: 'opt2', label: '第5類' },
        { id: 'opt3', label: '第1類' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。第4類は「第1類・第6類」とだけ混載禁止です。選択肢の中では第1類がNGペアです。',
        opt1: '不正解です。第4類と第2類は混載可能です。',
        opt2: '不正解です。第4類と第5類は混載可能です。',
      }}
    />
  )
}
