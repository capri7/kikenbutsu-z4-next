import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function EmergencyMeasuresQuiz() {
  return (
    <SingleChoiceQuiz
      question="火災を発見した者が（消防法第24条に基づき）通報する先として誤っているものはどれか。"
      options={[
        { id: 'opt3', label: '警察署' },
        { id: 'opt1', label: '消防署' },
        { id: 'opt2', label: '市町村長の指定する場所' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。第24条の通報先は「消防署」または「市町村長の指定する場所」です。警察署は含まれません。',
        opt1: '不正解です。「消防署」は通報すべき場所に含まれます。',
        opt2: '不正解です。「市町村長の指定する場所」は通報すべき場所に含まれます。',
      }}
    />
  )
}
