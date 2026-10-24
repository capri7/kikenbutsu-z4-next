import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function SimpleTankStorageStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="簡易貯蔵タンク1基の容量の上限として、正しいのはどれか。"
      options={[
        { id: 'opt1', label: '600L以下であること。' },
        { id: 'opt2', label: '800L以下であること。' },
        { id: 'opt3', label: '400L以下であること。' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です。簡易貯蔵タンク1基の容量上限は「600L以下」です。あわせて「最大3基まで」「同一品質は1基まで」のセットで覚えておきましょう。',
        opt2: '不正解です。「800L以下」という基準はありません。簡易貯蔵タンク1基の上限は法令で「600L以下」と定められています。',
        opt3: '不正解です。「400L以下」は安全側に小さく見えますが、試験では基準値として定められた「600L以下」を選ぶ必要があります。',
      }}
    />
  )
}
