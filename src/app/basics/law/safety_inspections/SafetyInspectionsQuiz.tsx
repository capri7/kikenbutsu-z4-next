import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function SafetyInspectionsQuiz() {
  return (
    <SingleChoiceQuiz
      question="定期保安検査の屋外タンク貯蔵所の検査時期として正しいものはどれか。"
      options={[
        { id: 'opt1', label: '原則として8年に1回' },
        { id: 'opt2', label: '原則として3年に1回' },
        { id: 'opt3', label: '原則として1年に1回' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です。特定屋外タンク貯蔵所の定期保安検査は、原則として「8年に1回」です。保安措置を講じている場合だけ、10年または13年の周期に延長できる特例がありますが、まずは基本の「8年に1回」をしっかり押さえておきましょう。',
        opt2: '不正解です。3年という数字は、他の「記録保存期間」などと混同させるひっかけです。特定屋外タンク貯蔵所の定期保安検査は、原則として8年に1回行います。',
        opt3: '不正解です。「1年に1回」は特定移送取扱所の定期保安検査の周期です。屋外タンク貯蔵所の定期保安検査は、原則8年に1回なので、施設の種類と周期をセットで覚えておきましょう。',
      }}
    />
  )
}
