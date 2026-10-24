import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function HandlerCertificationQuiz() {
  return (
    <SingleChoiceQuiz
      question="乙種危険物取扱者が取扱いできる危険物の範囲として、正しいものはどれか。"
      options={[
        { id: 'opt1', label: 'ガソリン、灯油、軽油、第3石油類、第4石油類及び動植物油類' },
        { id: 'opt2', label: '免状に指定された類（第1類〜第6類）の危険物のみ' },
        { id: 'opt3', label: 'すべての危険物' },
      ]}
      correct="opt2"
      feedback={{
        opt2: '正解です。乙種免状では、免状に指定された類（第1類〜第6類）の危険物だけを取り扱うことができます。',
        opt1: '不正解です。これは丙種危険物取扱者が扱える指定危険物の例です。乙種免状は「免状に書かれた類（第1類〜第6類）だけ」を扱えます。',
        opt3: '不正解です。「すべての危険物」を扱えるのは甲種です。乙種免状は「免状に書かれた類（第1類〜第6類）だけ」を扱えます。',
      }}
    />
  )
}
