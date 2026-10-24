// src/app/basics/physical_chemistry/properties_of_major_gases/PropertiesOfMajorGasesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function PropertiesOfMajorGasesQuiz() {
  return (
    <SingleChoiceQuiz
      question="一酸化炭素と二酸化炭素の性質について、次のうち誤っているのはどれか。"
      options={[
        { id: 'opt1', label: '二酸化炭素は水に溶け、その水溶液は弱酸性を示す' },
        { id: 'opt2', label: '一酸化炭素も二酸化炭素も、空気中で燃焼する' },
        { id: 'opt3', label: '一酸化炭素は空気より軽く、二酸化炭素は空気より重い' },
        { id: 'opt4', label: '一酸化炭素は人体に極めて有毒である' },
      ]}
      correct="opt2"
      feedback={{
        opt1: (
          <>
            不正解です。二酸化炭素は水に溶け、その水溶液（炭酸水）は弱酸性を示すため、正しい記述です。
          </>
        ),
        opt2: (
          <>
            正解です。一酸化炭素は淡青色の炎をあげて燃焼しますが、二酸化炭素は不燃性で燃焼しません。
          </>
        ),
        opt3: (
          <>
            不正解です。空気に対する比重は、一酸化炭素が0.97で空気より軽く、二酸化炭素が1.5で空気より重いため、正しい記述です。
          </>
        ),
        opt4: (
          <>
            不正解です。一酸化炭素は人体に極めて有毒であり、正しい記述です。
          </>
        ),
      }}
    />
  )
}
