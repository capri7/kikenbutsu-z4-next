// src/app/basics/physical_chemistry/electricity_and_batteries/ElectricityAndBatteriesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ElectricityAndBatteriesQuiz() {
  return (
    <SingleChoiceQuiz
      question={
        <>
          オームの法則に<strong>該当しない</strong>のは次のうちどれか。
        </>
      }
      options={[
        { id: 'opt1', label: 'V=IS' },
        { id: 'opt2', label: 'R=V/I' },
        { id: 'opt3', label: 'V=IR' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です！オームの法則は「V=IR」（I=V/R、R=V/Iも同じ）です。「V=IS」はこの形に変形できず、I×Sの単位も[V]にならないため該当しません。',
        opt2: '不正解です。「R=V/I」は「V=IR」をRについて解いた式です。（V=IR → 両辺をIで割る → R=V/I）',
        opt3: '不正解です。「V=IR」はオームの法則そのものです。この式からI=V/R、R=V/Iに変形して使います。',
      }}
    />
  )
}
