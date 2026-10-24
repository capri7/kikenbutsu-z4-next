// src/app/basics/physical_chemistry/heat_transfer/HeatTransferQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function HeatTransferQuiz() {
  return (
    <SingleChoiceQuiz
      question="危険物施設の「保安距離」は、主にどの伝熱形態による延焼を防ぐために定められているか。"
      options={[
        { id: 'opt1', label: '伝導' },
        { id: 'opt2', label: '対流' },
        { id: 'opt3', label: '放射（ふく射）' },
        { id: 'opt4', label: '蒸発' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。伝導は物体中を熱が伝わる現象で、離れたタンクへの延焼の主因ではありません。',
        opt2: '不正解です。対流は液体・気体を介した熱の移動で、離れたタンク間の延焼を直接説明するものではありません。',
        opt3: '正解です！ 放射熱は空気などの物質を介さず直進して伝わるため、離れたタンクであっても火災の熱を受けます。保安距離は、この放射熱による延焼を防ぐために定められています。',
        opt4: '不正解です。蒸発は状態変化であり、伝熱形態（伝導・対流・放射）のひとつではありません。',
      }}
    />
  )
}
