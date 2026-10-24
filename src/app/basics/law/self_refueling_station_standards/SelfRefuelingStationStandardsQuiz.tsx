import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function SelfRefuelingStationStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="危険物の品目の表示でレギュラーガソリンに使用される色は次のうちどれか。"
      options={[
        { id: 'opt1', label: '黄' },
        { id: 'opt2', label: '緑' },
        { id: 'opt3', label: '赤' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。レギュラーガソリンの識別色は「赤」です。ハイオク＝黄、レギュラー＝赤、軽油＝緑、灯油＝青のセットで覚えておきましょう。',
        opt1: '不正解です。「黄」はハイオクガソリンの識別色です。ハイオク＝黄／レギュラー＝赤の取り違えは、実務でも試験でもよくあるひっかけです。',
        opt2: '不正解です。「緑」は軽油の識別色です。レギュラーは赤、軽油は緑、灯油は青と色で区別します。',
      }}
    />
  )
}
