// src/app/basics/physical_chemistry/mixing_hazards/MixingHazardsQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function MixingHazardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="第3類危険物のうち、自然発火性のみを持ち、禁水性を持たない物質はどれか。"
      options={[
        { id: 'opt1', label: '黄リン' },
        { id: 'opt2', label: 'リチウム' },
        { id: 'opt3', label: 'カリウム' },
        { id: 'opt4', label: 'ナトリウム' },
      ]}
      correct="opt1"
      feedback={{
        opt1: (
          <>
            正解です！ 黄リンは自然発火性のみを持つ物質で、禁水性は持ちません。そのため黄リンは水中に保存されます。第3類危険物はほとんどが自然発火性・禁水性の両方を持ちますが、黄リン（自然発火性のみ）とリチウム（禁水性のみ）は例外です。
          </>
        ),
        opt2: (
          <>
            不正解です。リチウムは禁水性のみを持つ物質であり、自然発火性は持ちません。設問が求めているのは「自然発火性のみ」を持つ物質です。
          </>
        ),
        opt3: (
          <>
            不正解です。カリウムは自然発火性・禁水性の両方を持つ物質です。
          </>
        ),
        opt4: (
          <>
            不正解です。ナトリウムは自然発火性・禁水性の両方を持つ物質です。
          </>
        ),
      }}
    />
  )
}
