// src/app/basics/physical_chemistry/ease_of_combustion/EaseOfCombustionQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function EaseOfCombustionQuiz() {
  return (
    <SingleChoiceQuiz
      question={
        <>
          次のうち、「数値が小さいほど危険な因子」には<strong>該当しない</strong>ものはどれか。
        </>
      }
      options={[
        { id: 'opt1', label: '蒸気圧' },
        { id: 'opt2', label: '比熱' },
        { id: 'opt3', label: '発火点' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です！ 蒸気圧は「数値が大きいほど危険な因子」です。数値が小さいほど危険になるグループには含まれません。',
        opt2: '不正解です。比熱は、値が小さいほど少ない熱で温度が上がり、燃えやすくなる「数値が小さいほど危険な因子」です。',
        opt3: '不正解です。発火点は、温度が低いほど自然に発火しやすくなるため、やはり「数値が小さいほど危険な因子」です。',
      }}
    />
  )
}
