import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function AlarmSystemsQuiz() {
  return (
    <SingleChoiceQuiz
      question="警報設備として法令上の区分に含まれないものは次のうちどれか。"
      options={[
        { id: 'opt3', label: '構内放送設備' },
        { id: 'opt1', label: '拡声装置' },
        { id: 'opt2', label: '警鐘' },
      ]}
      correct="opt3"
      feedback={{
        opt3:
          '正解です。拡声装置と警鐘は警報設備の代表例に含まれるが、「構内放送設備」という区分は法令上の代表例にはない。',
        opt1: '不正解です。「拡声装置」は非常放送などに用いられる警報設備の区分に含まれる。',
        opt2: '不正解です。「警鐘」は手動で鳴らす警報設備の区分に含まれる。',
      }}
    />
  )
}
