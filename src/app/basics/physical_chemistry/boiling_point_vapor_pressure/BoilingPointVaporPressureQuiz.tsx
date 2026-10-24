// src/app/basics/physical_chemistry/boiling_point_vapor_pressure/BoilingPointVaporPressureQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function BoilingPointVaporPressureQuiz() {
  return (
    <SingleChoiceQuiz
      question="沸点の説明として、最も適切なものはどれか。"
      options={[
        { id: 'opt1', label: '液体の飽和蒸気圧が大気圧と等しくなる温度' },
        { id: 'opt2', label: '液体の飽和蒸気圧が0になる温度' },
        { id: 'opt3', label: '液体の密度が最大になる温度' },
        { id: 'opt4', label: '大気圧に関係なく物質ごとに常に一定の温度' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です！ 沸点は、液体の飽和蒸気圧が大気圧（外圧）と等しくなる温度です。高地など気圧の低い場所では、この温度が下がるため沸点も低くなります。',
        opt2: '不正解です。飽和蒸気圧が0になることはありません。沸点は飽和蒸気圧が大気圧と等しくなる温度です。',
        opt3: '不正解です。沸点は密度ではなく、飽和蒸気圧と大気圧の関係で決まります。',
        opt4: '不正解です。沸点は大気圧によって変化します。平地よりも高地の方が沸点は低くなります。',
      }}
    />
  )
}
