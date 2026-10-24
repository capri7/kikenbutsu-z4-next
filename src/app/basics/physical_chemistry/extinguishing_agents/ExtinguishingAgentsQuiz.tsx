// src/app/basics/physical_chemistry/extinguishing_agents/ExtinguishingAgentsQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ExtinguishingAgentsQuiz() {
  return (
    <SingleChoiceQuiz
      question="B火災に該当するのは、次のうちどれか。"
      options={[
        { id: 'opt1', label: 'ガソリンが燃焼する火災' },
        { id: 'opt2', label: '配電盤（分電盤）が発火した火災' },
        { id: 'opt3', label: '木材が燃焼する火災' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です！B火災（油火災）は、ガソリン・灯油などの可燃性液体や油脂、アルコール類が燃焼する火災です。',
        opt2: '不正解です。変圧器などの通電設備が原因の火災は「電気火災（C火災）」として扱います。',
        opt3: '不正解です。木材・紙・布など固体可燃物の火災は「普通火災（A火災）」です。',
      }}
    />
  )
}
