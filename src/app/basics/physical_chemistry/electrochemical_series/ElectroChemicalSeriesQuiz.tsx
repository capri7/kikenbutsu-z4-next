// src/app/basics/physical_chemistry/electrochemical_series/ElectroChemicalSeriesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ElectroChemicalSeriesQuiz() {
  return (
    <SingleChoiceQuiz
      question="常温の乾燥空気中で酸化されない金属はどれか。"
      options={[
        { id: 'opt1', label: '白金Pt' },
        { id: 'opt2', label: '亜鉛Zn' },
        { id: 'opt3', label: '鉄Fe' },
        { id: 'opt4', label: 'マグネシウムMg' },
      ]}
      correct="opt1"
      feedback={{
        opt1: (
          <>
            正解です。白金Ptは金Auとともにイオン化傾向が非常に小さく、常温の乾燥空気中で酸化されません。
          </>
        ),
        opt2: (
          <>
            不正解です。亜鉛Znは常温の乾燥空気中で表面に酸化被膜をつくります。
          </>
        ),
        opt3: (
          <>
            不正解です。鉄Feは常温の乾燥空気中で表面に酸化被膜をつくります。
          </>
        ),
        opt4: (
          <>
            不正解です。マグネシウムMgは常温の乾燥空気中で表面に酸化被膜をつくります。また、加熱すると燃焼します。
          </>
        ),
      }}
    />
  )
}
