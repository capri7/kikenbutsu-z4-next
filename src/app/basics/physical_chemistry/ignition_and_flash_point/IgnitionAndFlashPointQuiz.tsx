// src/app/basics/physical_chemistry/ignition_and_flash_point/IgnitionAndFlashPointQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function IgnitionAndFlashPointQuiz() {
  return (
    <SingleChoiceQuiz
      question="次のうち、燃焼点の定義として誤っているものはどれか。"
      options={[
        { id: 'opt1', label: '燃焼点は引火点より数°C低い温度である。' },
        { id: 'opt2', label: '燃焼点とは、燃焼を継続させるのに必要な可燃性蒸気が供給される温度のことである。' },
        { id: 'opt3', label: '燃焼点では、一度点火すれば点火源を取り除いても燃焼を継続させることができる。' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です！ 燃焼点は引火点より数°C「高い」温度になります。引火点は「一瞬つく」、燃焼点は「燃え続ける」温度だと押さえよう。',
        opt2: '不正解です。この選択肢は燃焼点の正しい説明です。「燃焼を継続できるだけの可燃性蒸気が供給される温度」がキーワードです。',
        opt3: '不正解です。燃焼点に達すると、一度点火すれば点火源を離しても燃焼は継続します。この説明も正しい内容です。',
      }}
    />
  )
}
