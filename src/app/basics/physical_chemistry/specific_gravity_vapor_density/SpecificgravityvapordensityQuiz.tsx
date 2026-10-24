// src/app/basics/physical_chemistry/specific_gravity_vapor_density/SpecificGravityVaporDensityQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function SpecificGravityVaporDensityQuiz() {
  return (
    <SingleChoiceQuiz
      question="ベンゼン（C6H6、分子量78）の蒸気比重に最も近い値はどれか。空気の平均分子量を29とする。"
      options={[
        { id: 'opt1', label: '約0.4' },
        { id: 'opt2', label: '約1.0' },
        { id: 'opt3', label: '約2.7' },
        { id: 'opt4', label: '約4.5' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。これは29÷78のように、分子量と空気の平均分子量を逆に割った値です。',
        opt2: '不正解です。約1.0になるのは分子量29に近い物質（一酸化炭素など）の場合です。ベンゼンの分子量78とは異なります。',
        opt3: '正解です！ ベンゼン（C6H6）の分子量は12×6＋1×6＝78です。蒸気比重は78÷29≒2.7となり、空気より大幅に重いことが分かります。',
        opt4: '不正解です。約4.5は灯油や軽油の蒸気比重に近い値で、ベンゼンの分子量78から計算した値とは異なります。',
      }}
    />
  )
}
