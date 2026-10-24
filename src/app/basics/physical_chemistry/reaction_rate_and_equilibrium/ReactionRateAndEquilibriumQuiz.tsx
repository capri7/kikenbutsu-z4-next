// src/app/basics/physical_chemistry/reaction_rate_and_equilibrium/ReactionRateAndEquilibriumQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ReactionRateAndEquilibriumQuiz() {
  return (
    <SingleChoiceQuiz
      question="N2＋3H2⇄2NH3＋92.2kJが平衡状態にあるとき、圧力を上げると、平衡はどちらの方向に移動するか。"
      options={[
        { id: 'opt1', label: '平衡は左辺（N2・H2が増える）方向に移動する' },
        { id: 'opt2', label: '平衡は右辺（NH3が増える）方向に移動する' },
        { id: 'opt3', label: '平衡はまったく移動しない' },
        { id: 'opt4', label: 'N2・H2・NH3がすべて同時に増え続ける' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。圧力を上げると、気体の総mol数が減る方向に平衡は移動します。左辺は移動先ではありません。',
        opt2: '正解です！ N2＋3H2⇄2NH3＋92.2kJでは、気体の総mol数が左辺4mol・右辺2molです。圧力を上げると、ルシャトリエの法則により、変化（圧力上昇）を打ち消す方向、すなわち気体分子数が減る右辺方向に平衡が移動します。',
        opt3: '不正解です。触媒を加えた場合は平衡は移動しませんが、圧力の変化では平衡が移動します。',
        opt4: '不正解です。可逆反応の平衡は一方向に移動するのであって、すべての物質が同時に増え続けることはありません。',
      }}
    />
  )
}
