import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ManufacturingFacilityStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="電気設備が点火源となり爆発するおそれがある場所（粉じん・可燃性ガス・危険物等）に設置する電気設備について、当てはまるものは次のうちどれか。"
      options={[
        { id: 'opt1', label: '防御構造とすること。' },
        { id: 'opt2', label: '防爆構造とすること。' },
        { id: 'opt3', label: '防火構造とすること。' },
      ]}
      correct="opt2"
      feedback={{
        opt2: '正解です。粉じんや可燃性ガスがある場所では、電気設備は必ず「防爆構造」にします。内部で着火しても外部へ火炎や火花が出ない構造にすることで、周囲の爆発を防ぎます。',
        opt1: '不正解です。「防御構造」という用語はこの規定のキーワードではありません。爆発のおそれがある場所では、電気設備は法令上「防爆構造」とすることがポイントです。',
        opt3: '不正解です。「防火構造」は建築物の壁などの区分に使われる用語で、ここで求められているのは電気設備の「防爆構造」です。火を外へ出さないことが重要です。',
      }}
    />
  )
}
