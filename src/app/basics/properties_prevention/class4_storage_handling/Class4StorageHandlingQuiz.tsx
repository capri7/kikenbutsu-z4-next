// src/app/basics/properties_prevention/class4_storage_handling/Class4StorageHandlingQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function Class4StorageHandlingQuiz() {
  return (
    <SingleChoiceQuiz
      question="可燃性蒸気が滞留する恐れのある場所で使用する電気設備の構造について適切なものはどれか。"
      options={[
        { id: 'opt1', label: '防熱構造' },
        { id: 'opt2', label: '防爆構造' },
        { id: 'opt3', label: '防電構造' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。「防熱構造」は高温対策で、防爆の代わりにはなりません。可燃性蒸気の場所は防爆構造です。',
        opt2: '正解です。可燃性蒸気が滞留するおそれがある場所では、スイッチの火花などが点火源になり得るため、点火源を外部に出さない「防爆構造」の電気設備を使用します。',
        opt3: '不正解です。「防電構造」という区分はここでは使いません。可燃性蒸気の場所は防爆構造です。',
      }}
    />
  )
}
