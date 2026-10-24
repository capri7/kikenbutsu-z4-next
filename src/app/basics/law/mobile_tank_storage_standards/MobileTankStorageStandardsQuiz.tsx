import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function MobileTankStorageStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="移動タンク貯蔵所のタンク総容量について正しいのは次のうちどれか。"
      options={[
        { id: 'opt1', label: '30,000L以下' },
        { id: 'opt2', label: '4,000L以下' },
        { id: 'opt3', label: '10,000L以下' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です。移動タンク貯蔵所のタンク総容量は「30,000L以下」です。あわせて、タンク内部を完全な間仕切で区画した1区画あたりの上限は「4,000L以下」とセットで覚えておきましょう。',
        opt2: '不正解です。4,000L以下は「タンク内部を完全な間仕切で区画した1区画あたりの上限容量」です。タンク全体の総容量ではありません。',
        opt3: '不正解です。「10,000L以下」というタンク総容量の基準はありません。移動タンク貯蔵所の総容量は「30,000L以下」です。',
      }}
    />
  )
}
