import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function FacilityCategoriesQuiz() {
  return (
    <SingleChoiceQuiz
      question="次のうち、簡易タンク貯蔵所の簡易タンクの容積で正しいものはどれか。"
      options={[
        { id: 'opt3', label: '600L以下' },
        { id: 'opt1', label: '400L以下' },
        { id: 'opt2', label: '500L以下' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。簡易タンク貯蔵所の簡易タンクは「容量600L以下」がキーワードです。600Lを1Lでも超えると別区分になります。',
        opt1: '不正解です。400L以下ではありません。簡易タンク貯蔵所は「600L以下」のタンクまでOKという基準を覚えましょう。',
        opt2: '不正解です。500L以下ではありません。簡易タンク貯蔵所の基準は「600L以下」です。数字を少しだけ変えてくるひっかけに注意しましょう。',
      }}
    />
  )
}
