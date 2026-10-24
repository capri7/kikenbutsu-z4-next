// src/app/basics/physical_chemistry/static_electricity/StaticElectricityQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function StaticElectricityQuiz() {
  return (
    <SingleChoiceQuiz
      question="帯電体を箔検電器の集電板に近づけたとき、2枚の金属箔が開く直接の原因はどれか。"
      options={[
        { id: 'opt1', label: '箔が帯電体と反対符号に帯電し、引き合うため' },
        { id: 'opt2', label: '箔が帯電体と同じ符号に帯電し、反発するため' },
        { id: 'opt3', label: '箔の電気量がすべて放電され、軽くなるため' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。静電誘導では、集電板の近い側に反対符号、遠い側の箔には帯電体と同じ符号の電荷が現れます。箔どうしは「同符号」なので引き合うのではなく反発します。',
        opt2: '正解です！ 帯電体を近づけると静電誘導が起こり、箔には帯電体と同じ符号の電荷が集まります。同符号どうしは反発（斥力）するため、箔が開きます。',
        opt3: '不正解です。箔検電器は近づけただけでは放電しません。箔が開くのは、電気量が減るからではなく、同符号の電荷どうしが反発するためです。',
      }}
    />
  )
}
