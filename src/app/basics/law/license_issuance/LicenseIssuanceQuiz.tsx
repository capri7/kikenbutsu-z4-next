import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function LicenseIssuanceQuiz() {
  return (
    <SingleChoiceQuiz
      question="免状の記載事項に含まれないものは次のうちどれか。"
      options={[
        { id: 'opt1', label: '取得した免状の種類' },
        { id: 'opt2', label: '現住所' },
        { id: 'opt3', label: '過去10年以内に撮影した写真' },
      ]}
      correct="opt2"
      feedback={{
        opt2: '正解です。危険物取扱者の免状には「本籍地の属する都道府県」は記載されますが、「現住所」は記載されません。住所が変わっても本籍地が同じなら書換え不要、というポイントもセットで覚えておきましょう。',
        opt1: '不正解です。「取得した免状の種類」は免状の記載事項の1つです。氏名・生年月日や免状番号などと同じく、免状に必ず書かれる情報なので「含まれないもの」にはなりません。',
        opt3: '不正解です。「過去10年以内に撮影した写真」も免状の記載事項に含まれます。さらに、写真の撮影から10年経過すると書換え事由にもなるので、記載事項と書換え理由の両方でよく問われる重要ポイントです。',
      }}
    />
  )
}
