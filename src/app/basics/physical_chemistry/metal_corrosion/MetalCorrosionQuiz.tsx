// src/app/basics/physical_chemistry/metal_corrosion/MetalCorrosionQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function MetalCorrosionQuiz() {
  return (
    <SingleChoiceQuiz
      question="流電陽極法で、鉄よりイオン化傾向の大きい金属（マグネシウム、アルミニウムなど）を鉄に接続する目的はどれか。"
      options={[
        { id: 'opt1', label: '鉄の代わりに先に腐食（イオン化）させるため' },
        { id: 'opt2', label: '鉄の電気抵抗を下げるため' },
        { id: 'opt3', label: '鉄の表面を絶縁するため' },
        { id: 'opt4', label: '鉄の温度上昇を防ぐため' },
      ]}
      correct="opt1"
      feedback={{
        opt1: (
          <>
            正解です。鉄よりイオン化傾向の大きい金属を接続すると、その金属が鉄の代わりに陽イオンとなって溶け出し、鉄の腐食を防ぎます。
          </>
        ),
        opt2: (
          <>
            不正解です。流電陽極法は電気抵抗ではなく、イオン化傾向の大小を利用した防食方法です。
          </>
        ),
        opt3: (
          <>
            不正解です。接続する金属は鉄の表面を絶縁するのではなく、鉄より先にイオン化することで鉄を保護します。
          </>
        ),
        opt4: (
          <>
            不正解です。流電陽極法は温度上昇の防止とは関係がありません。
          </>
        ),
      }}
    />
  )
}
