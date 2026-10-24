// src/app/basics/physical_chemistry/dust_explosions/DustExplosionsQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function DustExplosionsQuiz() {
  return (
    <SingleChoiceQuiz
      question="粉じん爆発が起こるための条件として、誤っているものはどれか。"
      options={[
        { id: 'opt1', label: '粉じんの粒子が微粉の状態で、空気中に一定の濃度で浮遊していること' },
        { id: 'opt2', label: '空気中に酸素が存在すること' },
        { id: 'opt3', label: '粉じんの粒子径が大きく、空気中に浮遊しにくい状態であること' },
      ]}
      correct="opt3"
      feedback={{
        opt1: '不正解です。「粉じんの粒子が微粉の状態で、空気中に一定の濃度で浮遊していること」は、粉じん爆発が起こるための基本条件の1つです。',
        opt2: '不正解です。「空気中に酸素が存在すること」も、粉じん爆発の成立に必要な条件です。',
        opt3: '正解です！ 粉じん爆発が起こりやすいのは、粒子が「細かく」空気中に浮遊しやすい状態のときです。粒子径が大きく浮遊しにくい状態は、むしろ爆発が起こりにくい条件です。',
      }}
    />
  )
}
