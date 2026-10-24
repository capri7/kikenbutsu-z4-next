// src/app/basics/physical_chemistry/heat_and_specific_heat/HeatAndSpecificHeatQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function HeatAndSpecificHeatQuiz() {
  return (
    <SingleChoiceQuiz
      question="500gの水を20℃から80℃まで加熱するのに必要な熱量は何Jか。水の比熱を4.2J/(g・K)とする。"
      options={[
        { id: 'opt1', label: '12,600J' },
        { id: 'opt2', label: '126,000J' },
        { id: 'opt3', label: '25,200J' },
        { id: 'opt4', label: '252,000J' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。質量500gの「500」を掛け忘れている可能性があります。Q＝m×c×Δtで計算し直してみましょう。',
        opt2: '正解です！ Q＝m×c×Δt＝500×4.2×(80−20)＝500×4.2×60＝126,000Jです。',
        opt3: '不正解です。温度差Δtは80−20＝60Kです。Δtの計算を確認しましょう。',
        opt4: '不正解です。値が2倍になっています。どこかで質量や温度差を2重に掛けていないか確認しましょう。',
      }}
    />
  )
}
