import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function SafetyDistanceQuiz() {
  return (
    <SingleChoiceQuiz
      question="高圧ガス・液化石油ガスの施設の保安距離として、正しいものは次のうちどれか。"
      options={[
        { id: 'opt1', label: '20m以上' },
        { id: 'opt2', label: '30m以上' },
        { id: 'opt3', label: '50m以上' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です。高圧ガス・液化石油ガスの施設の保安距離は20m以上です。なお、30m以上は学校・病院・劇場・公会堂などの多人数収容施設、50m以上は重要文化財・重要有形民俗文化財などの建造物の保安距離です。',
        opt2: '不正解です。「30m以上」は学校・病院・劇場・公会堂など多人数収容施設の保安距離です。高圧ガス・液化石油ガスの施設は20m以上と覚えましょう。',
        opt3: '不正解です。「50m以上」は重要文化財・重要有形民俗文化財などの建造物の保安距離です。高圧ガス・液化石油ガスの施設は20m以上です。',
      }}
    />
  )
}
