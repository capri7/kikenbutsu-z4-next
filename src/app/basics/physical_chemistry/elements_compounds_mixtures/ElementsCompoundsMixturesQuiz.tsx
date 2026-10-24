// src/app/basics/physical_chemistry/elements_compounds_mixtures/ElementsCompoundsMixturesQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ElementsCompoundsMixturesQuiz() {
  return (
    <SingleChoiceQuiz
      question="塩化ナトリウム（NaCl）の化学式について、正しい説明はどれか。"
      options={[
        { id: 'opt1', label: 'NaClは分子式である' },
        { id: 'opt2', label: 'NaClはイオン結晶であり、分子式ではなく組成式で表される' },
        { id: 'opt3', label: 'NaClは混合物である' },
        { id: 'opt4', label: 'NaClは単体である' },
      ]}
      correct="opt2"
      feedback={{
        opt1: '不正解です。NaClはナトリウムイオンと塩化物イオンがイオン結合した結晶で、独立した「分子」を作らないため、分子式ではなく組成式で表されます。',
        opt2: '正解です！ NaClはイオン結晶で、決まった数の原子が集まった「分子」を作りません。そのため、原子の比（1：1）を最も簡単な整数比で表した組成式で表されます。',
        opt3: '不正解です。NaClは化学的に結合した1種類の純物質（化合物）であり、複数の物質が単に混じり合った混合物ではありません。',
        opt4: '不正解です。単体は1種類の元素からなる純物質です。NaClはナトリウムと塩素という2種類の元素からなるため、単体ではなく化合物です。',
      }}
    />
  )
}
