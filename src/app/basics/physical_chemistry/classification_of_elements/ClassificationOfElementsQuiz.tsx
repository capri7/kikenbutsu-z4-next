// src/app/basics/physical_chemistry/classification_of_elements/ClassificationOfElementsQuiz.tsx
import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function ClassificationOfElementsQuiz() {
  return (
    <SingleChoiceQuiz
      question="非金属元素のうち、20℃で液体として存在する唯一の元素はどれか。"
      options={[
        { id: 'opt1', label: '臭素Br' },
        { id: 'opt2', label: '水銀Hg' },
        { id: 'opt3', label: 'ケイ素Si' },
        { id: 'opt4', label: '硫黄S' },
      ]}
      correct="opt1"
      feedback={{
        opt1: (
          <>
            正解です！ 臭素Brは第17族（ハロゲン）に属する非金属元素で、20℃で液体として存在する唯一の非金属元素です。常温で液体の元素というと水銀Hgが思い浮かびやすいですが、水銀は非金属ではなく金属元素です。
          </>
        ),
        opt2: (
          <>
            不正解です。水銀Hgは常温で液体ですが、金属元素です。設問が求めているのは非金属元素です。
          </>
        ),
        opt3: (
          <>
            不正解です。ケイ素Siは非金属元素ですが、常温では固体です。
          </>
        ),
        opt4: (
          <>
            不正解です。硫黄Sは非金属元素ですが、常温では固体です。
          </>
        ),
      }}
    />
  )
}
