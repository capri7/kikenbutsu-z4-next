import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function LegalFrameworkQuiz() {
  return (
    <SingleChoiceQuiz
      question="政令によって定められていないものは、次のうちどれか。"
      options={[
        { id: 'opt1', label: '危険物の運搬に関する細かなルール（表示・積載など）' },
        { id: 'opt2', label: '危険物の指定数量' },
        { id: 'opt3', label: '危険物の分類' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です。運搬の表示や積載などの細かなルールは規則（省令）側です。分類と指定数量は政令で決まります。「区分・数字＝政令、手順＝規則」で覚えよう。',
        opt2: '不正解です。指定数量は政令で決まる「しきい値」です。数字が出たら政令。正解は「運搬の細かなルール（表示・積載など）」です。',
        opt3: '不正解です。分類（第1類〜第6類など）は政令で決まります。区分が出たら政令。正解は「運搬の細かなルール（表示・積載など）」です。',
      }}
    />
  )
}
