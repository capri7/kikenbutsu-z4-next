import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function IndoorStorageStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="独立専用屋内貯蔵所のうち、平家建以外の建築物について、各階の床面積の合計の基準として正しいものはどれか。"
      options={[
        { id: 'opt1', label: '床面積の合計は1,200㎡以下' },
        { id: 'opt2', label: '各階の床面積の合計は1,000㎡以下' },
        { id: 'opt3', label: '床面積の合計に規定はない' },
      ]}
      correct="opt2"
      feedback={{
        opt2: '正解です。平家建以外の独立専用屋内貯蔵所では、各階の床面積の合計は1,000㎡以下です。なお、平家建では床面積1,000㎡以下です。',
        opt1: '不正解です。1,200㎡という数値は基準には出てきません。平家建以外では「各階の床面積の合計が1,000㎡以下」が正しい基準です。',
        opt3: '不正解です。「規定なし」ではありません。平家建以外の独立専用屋内貯蔵所には、各階合計1,000㎡以下という明確な上限があります。',
      }}
    />
  )
}
