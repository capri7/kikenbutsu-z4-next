// src/app/basics/physical_chemistry/gas_laws/GasLawsQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function GasLawsQuiz() {
  return (
    <SingleChoiceQuiz
      question="ボイルの法則とシャルルの法則の組み合わせとして、正しいものはどれか。"
      options={[
        { id: 'opt1', label: 'ボイルの法則は体積が圧力に比例し、シャルルの法則は体積が絶対温度に反比例する' },
        { id: 'opt2', label: 'ボイルの法則は体積が圧力に反比例し、シャルルの法則は体積が絶対温度に比例する' },
        { id: 'opt3', label: '両方とも、体積は圧力に比例する' },
        { id: 'opt4', label: '両方とも、体積は絶対温度に反比例する' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。ボイルの法則とシャルルの法則の比例・反比例の関係が逆になっています。',
        opt2: '正解です！ ボイルの法則（温度一定）は体積が圧力に反比例（P×V＝一定）、シャルルの法則（圧力一定）は体積が絶対温度に比例します。',
        opt3: '不正解です。ボイルの法則では、体積は圧力に反比例します。',
        opt4: '不正解です。シャルルの法則では、体積は絶対温度に比例します。',
      }}
    />
  )
}
