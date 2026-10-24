// src/app/basics/physical_chemistry/thermal_expansion/ThermalExpansionQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ThermalExpansionQuiz() {
  return (
    <SingleChoiceQuiz
      question="線膨張率が0.008の金属棒（元の長さ50cm）を10℃上昇させると、増加する長さは何cmか。"
      options={[
        { id: 'opt1', label: '0.4cm' },
        { id: 'opt2', label: '4cm' },
        { id: 'opt3', label: '40cm' },
        { id: 'opt4', label: '0.04cm' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。桁が1つ小さくなっています。元の長さ・温度差・線膨張率をすべて掛け合わせているか確認しましょう。',
        opt2: '正解です！ 増加する長さ＝元の長さ×温度差×線膨張率＝50×10×0.008＝4cmです。',
        opt3: '不正解です。桁が1つ大きくなっています。0.008の桁を確認しましょう。',
        opt4: '不正解です。値が小さすぎます。50×10×0.008を順に計算し直してみましょう。',
      }}
    />
  )
}
