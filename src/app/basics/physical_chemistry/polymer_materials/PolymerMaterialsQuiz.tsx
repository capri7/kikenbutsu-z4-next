// src/app/basics/physical_chemistry/polymer_materials/PolymerMaterialsQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function PolymerMaterialsQuiz() {
  return (
    <SingleChoiceQuiz
      question="石油から作られるプラスチックの一般的な特徴について、次のうち誤っているのはどれか。"
      options={[
        { id: 'opt1', label: '電気絶縁性に優れる' },
        { id: 'opt2', label: '熱伝導率が高い' },
        { id: 'opt3', label: '酸や塩基に侵されにくい' },
        { id: 'opt4', label: '燃焼すると有毒ガスを発生するものがある' },
      ]}
      correct="opt2"
      feedback={{
        opt1: (
          <>
            不正解です。電気絶縁性に優れることは、プラスチックの一般的な特徴として正しい記述です。
          </>
        ),
        opt2: (
          <>
            正解です。プラスチックは一般に伝熱性（熱伝導率）が低く、熱を伝えにくい材料です。
          </>
        ),
        opt3: (
          <>
            不正解です。酸や塩基に侵されにくいことは、プラスチックの一般的な特徴として正しい記述です。
          </>
        ),
        opt4: (
          <>
            不正解です。ポリ塩化ビニルなど、燃焼時に塩化水素などの有毒ガスを発生するものがあり、正しい記述です。
          </>
        ),
      }}
    />
  )
}
