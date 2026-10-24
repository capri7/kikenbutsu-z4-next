// src/app/basics/physical_chemistry/states_of_matter/StatesOfMatterQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function StatesOfMatterQuiz() {
  return (
    <SingleChoiceQuiz
      question="水を加熱して沸騰させているとき、加えた熱の使われ方として正しいものはどれか。"
      options={[
        { id: 'opt1', label: '温度を上昇させるために使われる' },
        { id: 'opt2', label: '蒸発熱として使われ、温度は一定に保たれる' },
        { id: 'opt3', label: '液体の密度を上げるために使われる' },
        { id: 'opt4', label: '分子間の引力を強めるために使われる' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。沸騰している間、加えた熱は温度の上昇には使われません。',
        opt2: '正解です！ 液体が沸騰している間、加えた熱はすべて蒸発熱として使われ、液体と気体が共存する間は温度が一定に保たれます。',
        opt3: '不正解です。液体が気体に変わる過程では、密度はむしろ小さくなります。',
        opt4: '不正解です。液体から気体に変化する際は、分子間の引力はむしろ弱まります。',
      }}
    />
  )
}
