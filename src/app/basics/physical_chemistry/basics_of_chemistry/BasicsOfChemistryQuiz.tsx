// src/app/basics/physical_chemistry/basics_of_chemistry/BasicsOfChemistryQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function BasicsOfChemistryQuiz() {
  return (
    <SingleChoiceQuiz
      question="ガソリンが水に溶けにくい理由として、正しいものはどれか。"
      options={[
        { id: 'opt1', label: 'ガソリンは無極性分子であり、極性のある水とは性質が異なるため' },
        { id: 'opt2', label: 'ガソリンは極性分子であり、無極性の水とは性質が異なるため' },
        { id: 'opt3', label: 'ガソリンは無極性分子だが、分子量が水より大きいため' },
        { id: 'opt4', label: 'ガソリンは沸点が水より低く、蒸発しやすい性質をもつため' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です！ 極性物質どうし、無極性物質どうしは溶けやすい一方、極性物質と無極性物質は溶けにくい性質があります。ガソリン（無極性）と水（極性）は性質が異なるため、溶けにくくなっています。',
        opt2: '不正解です。ガソリンは無極性分子、水は極性分子です。両者の性質が逆になっています。',
        opt3: '不正解です。溶けやすさを決めるのは分子量の大小ではなく、極性の有無です。',
        opt4: '不正解です。沸点や蒸発のしやすさは、水への溶けやすさとは別の性質です。',
      }}
    />
  )
}
