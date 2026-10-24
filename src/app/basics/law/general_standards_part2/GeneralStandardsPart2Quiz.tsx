import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function GeneralStandardsPart2Quiz() {
  return (
    <SingleChoiceQuiz
      question="同時に貯蔵できる危険物の組み合わせとして、適切なものは次のうちどれか。"
      options={[
        { id: 'opt1', label: '第1類と第2類' },
        { id: 'opt2', label: '第3類と第4類' },
        { id: 'opt3', label: '第1類と第6類' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。第1類と第6類は、法別表第1で例外として同時貯蔵が認められる組合せの一つです。屋内・屋外の貯蔵所とも、類別ごとに取りまとめて相互に1m以上離隔しておくことが条件です。',
        opt1: '不正解です。第1類（酸化性固体）と第2類（可燃性固体など）は、反応や燃焼を助長するおそれがあり、同じ貯蔵所で同時貯蔵する組合せには入りません。',
        opt2: '不正解です。第3類（自然発火性物品等）と第4類（引火性液体）は、原則として同一の貯蔵所で同時貯蔵しません。問題では、例外として認められているペアを選びます。',
      }}
    />
  )
}
