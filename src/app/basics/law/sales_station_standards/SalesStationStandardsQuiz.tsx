import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function SalesStationStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question={
        <>
          （A）と（B）に当てはまる数字として適切な組み合わせは次のうちどれか。
          <br />
          「販売取扱所は指定数量の倍数が（A）を超え（B）以下のものを第二種とする。」
        </>
      }
      options={[
        { id: 'opt1', label: '（A）15 と（B）40' },
        { id: 'opt2', label: '（A）15 と（B）30' },
        { id: 'opt3', label: '（A）10 と（B）40' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です。第二種販売取扱所は、指定数量の倍数が「15を超え40以下」のものです。第一種は「15以下」のものなので、セットで覚えておきましょう。',
        opt2: '不正解です。「15を超え30以下」とすると、第二種の上限を小さくしすぎています。正しくは「15を超え40以下」が第二種です。',
        opt3: '不正解です。「10を超え40以下」とすると、第一種との境目が10になってしまいます。境目は「15」で、15以下が第一種、15を超え40以下が第二種です。',
      }}
    />
  )
}
