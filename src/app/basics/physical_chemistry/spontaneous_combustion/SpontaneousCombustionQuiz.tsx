// src/app/basics/physical_chemistry/spontaneous_combustion/SpontaneousCombustionQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function SpontaneousCombustionQuiz() {
  return (
    <SingleChoiceQuiz
      question="次のうち、分解による発熱に該当するものはどれか。"
      options={[
        { id: 'opt1', label: '石炭' },
        { id: 'opt2', label: 'アマニ油' },
        { id: 'opt3', label: 'ニトロセルロース' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。石炭は「酸化による発熱」の代表例です。発熱の機構と物質の組み合わせを整理しておきましょう。',
        opt2: '不正解です。アマニ油は乾性油で、「酸化熱の蓄積」によって自然発火しやすくなります。分解ではなく酸化グループです。',
        opt3: '正解です！ ニトロセルロース（第5類危険物）は、分解による発熱で自然発火のおそれがある代表例です。',
      }}
    />
  )
}
