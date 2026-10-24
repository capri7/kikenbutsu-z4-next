import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function RefuelingStationStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="給油取扱所に設けてはいけない建築物その他の工作物は次のうちどれか。"
      options={[
        { id: 'opt1', label: '平面駐車場' },
        { id: 'opt2', label: 'スーパー' },
        { id: 'opt3', label: '宿泊施設' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。給油取扱所には、火災時に多数の人が就寝しているおそれのある旅館・ホテルなどの宿泊施設を併設してはいけません。避難が遅れやすい用途は、法律で禁止されている代表的なパターンです。',
        opt1: '不正解です。平面駐車場は、給油取扱所の敷地内に設けても差し支えない施設です。「設けてはいけない」のは、宿泊施設のように人が長時間滞在し、避難が遅れやすい建物です。',
        opt2: '不正解です。スーパーなどの物販店舗は、防火区画や避難経路などの基準を満たせば併設できます。この問題では、法律で原則として併設が禁止されている施設を選びます。',
      }}
    />
  )
}
