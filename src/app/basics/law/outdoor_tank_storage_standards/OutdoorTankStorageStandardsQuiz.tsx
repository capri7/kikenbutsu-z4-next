import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function OutdoorTankStorageStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="準特定屋外貯蔵タンクに該当する「最大数量の範囲」として正しいものは次のうちどれか。"
      options={[
        { id: 'opt1', label: '貯蔵・取扱う液体危険物の最大数量500kL以上1,500kL未満' },
        { id: 'opt2', label: '貯蔵・取扱う液体危険物の最大数量500kL以上1,000kL未満' },
        { id: 'opt3', label: '貯蔵・取扱う液体危険物の最大数量300kL以上1,000kL未満' },
      ]}
      correct="opt2"
      feedback={{
        opt2: '正解です。準特定屋外貯蔵タンクは「500kL以上1,000kL未満」です。1,000kL以上になると特定屋外貯蔵タンクに区分されます。',
        opt1: '不正解です。「1,000kL以上」を含めてしまうと、その部分は特定屋外貯蔵タンクの範囲になってしまいます。準特定は上限が「1,000kL未満」です。',
        opt3: '不正解です。下限を300kLとしてしまうと、500kL未満まで準特定に含めてしまうことになります。準特定は「500kL以上」からスタートです。',
      }}
    />
  )
}
