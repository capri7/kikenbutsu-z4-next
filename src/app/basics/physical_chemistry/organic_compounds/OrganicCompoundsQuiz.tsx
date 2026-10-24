// src/app/basics/physical_chemistry/organic_compounds/OrganicCompoundsQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function OrganicCompoundsQuiz() {
  return (
    <SingleChoiceQuiz
      question="炭素数が4のアルカンはどれか。"
      options={[
        { id: 'opt1', label: 'メタン' },
        { id: 'opt2', label: 'エタン' },
        { id: 'opt3', label: 'プロパン' },
        { id: 'opt4', label: 'ブタン' },
      ]}
      correct="opt4"
      feedback={{
        opt1: (
          <>
            不正解です。メタンCH<sub>4</sub>は炭素数1のアルカンです。
          </>
        ),
        opt2: (
          <>
            不正解です。エタンC<sub>2</sub>H<sub>6</sub>は炭素数2のアルカンです。
          </>
        ),
        opt3: (
          <>
            不正解です。プロパンC<sub>3</sub>H<sub>8</sub>は炭素数3のアルカンです。
          </>
        ),
        opt4: (
          <>
            正解です。ブタンC<sub>4</sub>H<sub>10</sub>は炭素数4のアルカンです。
          </>
        ),
      }}
    />
  )
}
