// src/app/basics/properties_prevention/class4_properties/Class4PropertiesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function Class4PropertiesQuiz() {
  return (
    <SingleChoiceQuiz
      question="次のうち、第2石油類で比重が1より大きいものに該当しないのはどれか。"
      options={[
        { id: 'opt1', label: 'クロロベンゼン' },
        { id: 'opt2', label: '酢酸' },
        { id: 'opt3', label: '二硫化炭素' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。クロロベンゼンは第2石油類（非水溶性）で、比重も1より大きいので条件に当てはまります。',
        opt2: '不正解です。酢酸は第2石油類（水溶性）で、比重も1より大きいので条件に当てはまります。',
        opt3: '正解です。二硫化炭素は比重が1より大きいですが、第2石油類ではなく「特殊引火物」です。よって「第2石油類で比重が1より大」の条件に当てはまりません。',
      }}
    />
  )
}
