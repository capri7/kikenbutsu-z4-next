import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function DesignatedQuantitiesQuiz() {
  return (
    <SingleChoiceQuiz
      question="第4類危険物の分類で指定数量が50Lであるものは、次のうちどれか。"
      options={[
        { id: 'opt3', label: '二硫化炭素' },
        { id: 'opt1', label: 'ガソリン' },
        { id: 'opt2', label: 'アセトン' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。二硫化炭素は「特殊引火物」に分類され、指定数量は50Lです。同じグループにはジエチルエーテルやアセトアルデヒドなどがあります。',
        opt1: '不正解です。ガソリンは第1石油類（非水溶性）で、指定数量は200Lのグループです（ベンゼン・トルエンなどと同じ）。',
        opt2: '不正解です。アセトンは第1石油類（水溶性）で、指定数量は400Lです。アセトンとピリジンは「水に溶ける第1石油類400L」としてセットで覚えておきましょう。',
      }}
    />
  )
}
