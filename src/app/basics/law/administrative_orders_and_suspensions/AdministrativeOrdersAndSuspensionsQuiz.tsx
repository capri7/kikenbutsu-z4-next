import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function AdministrativeOrdersAndSuspensionsQuiz() {
  return (
    <SingleChoiceQuiz
      question="措置命令の種類に該当しないのは、次のうちどれか。"
      options={[
        { id: 'opt3', label: '防災規定変更命令' },
        { id: 'opt1', label: '危険物施設の応急措置命令' },
        { id: 'opt2', label: '危険物の貯蔵・取扱基準遵守命令' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。「防災規定変更命令」という用語は出てきません。条文では「予防規定変更命令」で、措置命令グループとは別物です。',
        opt1: '不正解です。「危険物施設の応急措置命令」はきちんと措置命令の一つです。事故のおそれがあるときに、応急の対応をさせる命令のことです。',
        opt2: '不正解です。「危険物の貯蔵・取扱基準遵守命令」も措置命令の一つです。「基準を守れ」という命令は、措置命令です。',
      }}
    />
  )
}
