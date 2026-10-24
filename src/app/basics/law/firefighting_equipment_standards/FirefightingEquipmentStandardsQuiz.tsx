import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function FirefightingEquipmentStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="危険物倉庫などに設置する消火設備について、「第3種消火設備」に区分されるものは次のうちどれか。"
      options={[
        { id: 'opt1', label: '屋内消火栓設備' },
        { id: 'opt2', label: '屋外消火栓設備' },
        { id: 'opt3', label: '泡消火設備' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。泡消火設備は、水蒸気・水噴霧・不活性ガス・ハロゲン化物・粉末の各消火設備と同じ「第3種消火設備」に区分されます。',
        opt1: '不正解です。屋内消火栓設備は「第1種消火設備」です。消火栓＝第1種、とセットで覚えましょう。',
        opt2: '不正解です。屋外消火栓設備も「第1種消火設備」に区分されます。',
      }}
    />
  )
}
