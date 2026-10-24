import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ChiefSafetyOfficersQuiz() {
  return (
    <SingleChoiceQuiz
      question="製造所等の所有者等が危険物保安統括管理者を選任または解任したときの届出先として、正しいものはどれか。"
      options={[
        { id: 'opt1', label: '都道府県知事に届け出なければならない。' },
        { id: 'opt2', label: '市町村長等に届け出なければならない。' },
        { id: 'opt3', label: '消防長または消防署長に届け出なければならない。' },
      ]}
      correct="opt2"
      feedback={{
        opt2: '正解です。条文上の届出先は「市町村長等（所轄消防長・消防署長等）」です。危険物保安統括管理者を選任・解任したときは、遅滞なく届け出なければなりません。',
        opt1: '不正解です。届出先は都道府県知事ではなく「市町村長等（所轄消防長・消防署長等）」です。権限のレベルを一段階上げすぎている点が誤りになります。',
        opt3: '不正解です。「消防長または消防署長」だけでは法律上の表現として不十分です。条文では「市町村長等（所轄消防長・消防署長等）」と一括して規定しています。',
      }}
    />
  )
}
