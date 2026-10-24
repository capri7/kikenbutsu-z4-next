// src/app/basics/physical_chemistry/types_of_combustion/TypesOfCombustionQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function TypesOfCombustionQuiz() {
  return (
    <SingleChoiceQuiz
      question="燃焼のとき、可燃性ガスを周囲の空気中に噴き出して拡散させながら混ざり合い、 その境界で炎を保つ燃焼様式は次のうちどれか。"
      options={[
        { id: 'opt1', label: '予混合燃焼' },
        { id: 'opt2', label: '蒸発燃焼' },
        { id: 'opt3', label: '拡散燃焼' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。予混合燃焼は、燃焼前に可燃性ガスと空気をあらかじめよく混ぜておく燃焼様式です（ガスバーナーの炎など）。',
        opt2: '不正解です。蒸発燃焼は、可燃性液体や固体が加熱で気化し、その蒸気に火がついて燃える燃焼様式です（アルコールランプなど）。',
        opt3: '正解です！ 拡散燃焼では、噴き出した可燃性ガスが周囲の空気に拡散しながら混ざり合い、その境界で炎が保たれます。',
      }}
    />
  )
}
