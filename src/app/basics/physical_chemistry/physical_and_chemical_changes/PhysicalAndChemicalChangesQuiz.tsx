// src/app/basics/physical_chemistry/physical_and_chemical_changes/PhysicalAndChemicalChangesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function PhysicalAndChemicalChangesQuiz() {
  return (
    <SingleChoiceQuiz
      question="次のうち、化学変化に該当するものはどれか。"
      options={[
        { id: 'opt1', label: '氷が溶けて水になる' },
        { id: 'opt2', label: '原油を分留してガソリンと灯油に分ける' },
        { id: 'opt3', label: '鉄が錆びてボロボロになる' },
        { id: 'opt4', label: '食塩水を煮詰めて食塩の結晶を析出させる' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。氷が水になるのは状態変化（三態変化）で、物質そのものは変化していないため物理変化です。',
        opt2: '不正解です。分留は蒸留によって混合物を分けるだけの操作で、新しい物質はできていないため物理変化です。',
        opt3: '正解です！ 鉄が錆びるのは、鉄が酸素と結びついて酸化鉄という別の物質に変化する「酸化」であり、化学変化です。',
        opt4: '不正解です。食塩水から食塩の結晶が出てくるのは、水が蒸発して食塩が析出するだけで、食塩自体は変化していないため物理変化です。',
      }}
    />
  )
}
