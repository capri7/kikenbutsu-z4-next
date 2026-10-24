import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function IndoorTankStorageStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="屋内タンク貯蔵所の一般のタンク容量について正しいのはどれか。"
      options={[
        { id: 'opt1', label: '指定数量の30倍以下であること。' },
        { id: 'opt2', label: '指定数量の50倍以下であること。' },
        { id: 'opt3', label: '指定数量の40倍以下であること。' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。一般の屋内タンク貯蔵所では、タンク1基ごとの容量も、同じタンク専用室内のタンク容量の合計も「指定数量の40倍以下」におさめます。第4石油類（動植物油類を除く）の場合は、1基20,000L以下です。',
        opt1: '不正解です。「30倍以下」は一見安全側の数字ですが、法令で定められている上限は「指定数量の40倍以下」です。',
        opt2: '不正解です。屋内タンク貯蔵所のタンク容量の上限は「指定数量の40倍以下」です。「40倍」と「50倍」を入れ替える典型的なひっかけです。',
      }}
    />
  )
}
