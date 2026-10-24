// src/app/basics/physical_chemistry/flammability_range/FlammabilityRangeQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function FlammabilityRangeQuiz() {
  return (
    <SingleChoiceQuiz
      question="ガソリンの引火点で正しいものはどれか。"
      options={[
        { id: 'opt1', label: '-40℃以下' },
        { id: 'opt2', label: '-40℃以上' },
        { id: 'opt3', label: '40℃' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です！ ガソリンの引火点はおよそ「-40℃以下」です。非常に低い温度でも可燃性蒸気が発生して引火しうることがポイントです。',
        opt2: '不正解です。「-40℃以上」ではなく「-40℃以下」です。低温でも引火する危険な液体であることを意識しておきましょう。',
        opt3: '不正解です。40℃付近は灯油の引火点の目安です。ガソリンはそれよりずっと低い温度で引火します。',
      }}
    />
  )
}
