// src/app/basics/physical_chemistry/chemistry_of_combustion/ChemistryOfCombustionQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ChemistryOfCombustionQuiz() {
  return (
    <SingleChoiceQuiz
      question="次のうち、燃焼の三要素に該当しないものはどれか？"
      options={[
        { id: 'opt1', label: '可燃物' },
        { id: 'opt2', label: '点火源' },
        { id: 'opt3', label: '不活性ガス' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。「可燃物」は燃える材料そのもので、燃焼の三要素の1つです。可燃物・酸素供給源・点火源の3つがそろうと燃え続ける、というルールを思い出そう。',
        opt2: '不正解です。「点火源」はマッチの炎や火花など、燃焼のきっかけとなる熱エネルギーの供給源で、これも燃焼の三要素の1つです。三要素を声に出して言えるようにしておくと、本番でも迷いにくくなります。',
        opt3: '正解です！ 不活性ガス（窒素や二酸化炭素など）は、酸素を薄めて燃焼を抑える働きがあります。燃焼の三要素は「可燃物」「酸素供給源」「点火源」の3つです。',
      }}
    />
  )
}
