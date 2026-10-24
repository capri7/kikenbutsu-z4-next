// src/app/basics/physical_chemistry/electrolysis/ElectrolysisQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ElectrolysisQuiz() {
  return (
    <SingleChoiceQuiz
      question="硫酸銅（Ⅱ）水溶液（CuSO4水溶液）を白金電極で電気分解したとき、陰極で起こる変化として正しいものはどれか。"
      options={[
        { id: 'opt1', label: 'Cuが析出する' },
        { id: 'opt2', label: 'H2が発生する' },
        { id: 'opt3', label: 'O2が発生する' },
        { id: 'opt4', label: 'SO4²⁻が還元されて硫黄が生じる' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です！ 陰極では還元されやすさの順（Ag＞Cu＞H2）に従って反応が進みます。CuSO4水溶液にはCu2+が存在するため、水分子より優先的にCu2+が還元され、Cuが析出します。',
        opt2: '不正解です。陰極では還元されやすさの順（Ag＞Cu＞H2）に従って反応が進みます。CuSO4水溶液にはCu2+が存在するため、水分子ではなくCu2+が優先的に還元され、Cuが析出します。',
        opt3: '不正解です。O2が発生するのは陽極（酸化反応が起こる極）の反応です。この設問は陰極についてなので当てはまりません。',
        opt4: '不正解です。SO4²⁻は陰極でも陽極でも反応しない傍観イオンです。電極反応に関与するのは、還元されやすい順に並んだCu2+やH2Oなどです。',
      }}
    />
  )
}
