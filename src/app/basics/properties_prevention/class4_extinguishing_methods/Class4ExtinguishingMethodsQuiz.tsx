// src/app/basics/properties_prevention/class4_extinguishing_methods/Class4ExtinguishingMethodsQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function Class4ExtinguishingMethodsQuiz() {
  return (
    <SingleChoiceQuiz
      question="次のうち、水溶性の主な危険物の第2石油類に該当しないのはどれか。"
      options={[
        { id: 'opt1', label: '酢酸' },
        { id: 'opt2', label: '酸化プロピレン' },
        { id: 'opt3', label: 'アクリル酸' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。酢酸は水溶性で、第2石油類（水溶性）に該当します。',
        opt2: '正解です。酸化プロピレンは水溶性でも「第2石油類」ではなく、分類は「特殊引火物」です。第2石油類（水溶性）の代表例は酢酸やアクリル酸です。',
        opt3: '不正解です。アクリル酸は水溶性で、第2石油類（水溶性）に該当します。',
      }}
    />
  )
}
