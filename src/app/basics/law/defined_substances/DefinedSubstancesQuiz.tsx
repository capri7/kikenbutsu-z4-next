import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function DefinedSubstancesQuiz() {
  return (
    <SingleChoiceQuiz
      question="次のうち、法別表第1の第3類（自然発火性物質・禁水性物質）に該当しないものはどれか。"
      options={[
        { id: 'mg', label: 'マグネシウム' },
        { id: 'p', label: '黄りん' },
        { id: 'na', label: 'ナトリウム' },
        { id: 'k', label: 'カリウム' },
        { id: 'cac2', label: '炭化カルシウム（カーバイド）' },
      ]}
      correct="mg"
      feedback={{
        mg: '正解です。マグネシウムは可燃性固体として第2類に分類され、第3類ではありません。',
        p: '不正解です。黄りんは自然発火性物質として第3類に該当します。',
        na: '不正解です。ナトリウムは禁水性物質として第3類に該当します。',
        k: '不正解です。カリウムは水と激しく反応する禁水性物質で、第3類に該当します。',
        cac2: '不正解です。炭化カルシウムは水と反応して可燃性ガスを発生するため、第3類に該当します。',
      }}
    />
  )
}
