import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function GeneralStandardsPart1Quiz() {
  return (
    <SingleChoiceQuiz
      question={
        <>
          第1類危険物のうち<strong>「アルカリ金属の過酸化物」</strong>の取扱基準として、<strong>最も適切</strong>なものは次のうちどれか。
        </>
      }
      options={[
        { id: 'opt1', label: '酸化剤との接触・混合を避ける。' },
        { id: 'opt2', label: '空気との接触を避ける。' },
        { id: 'opt3', label: '水との接触を避ける（禁水）' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。アルカリ金属の過酸化物は「水との接触を避ける（禁水）」が最優先の基準です。',
        opt1: '不正解です。「酸化剤との接触回避」は第2類「可燃性固体」側の典型です。ここでは禁水＝「水との接触回避」がポイントです。',
        opt2: '不正解です。「空気との接触回避」は第3類「自然発火性物質」の要点です。正解は禁水＝「水との接触を避ける」です。',
      }}
    />
  )
}
