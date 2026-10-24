import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function AcidsAndBasesQuiz() {
  return (
    <SingleChoiceQuiz
      question={
        <>
          炭酸水素ナトリウムNaHCO<sub>3</sub>は、塩の分類上「酸性塩」に分類されるが、その水溶液は何性を示すか。
        </>
      }
      options={[
        { id: 'opt1', label: '酸性' },
        { id: 'opt2', label: '中性' },
        { id: 'opt3', label: '塩基性' },
        { id: 'opt4', label: '水に溶けない' },
      ]}
      correct="opt3"
      feedback={{
        opt1: (
          <>
            不正解です。「酸性塩」という分類名から連想しやすいですが、実際の水溶液は酸性ではありません。
          </>
        ),
        opt2: (
          <>
            不正解です。NaHCO<sub>3</sub>水溶液は中性ではなく、弱い塩基性を示します。
          </>
        ),
        opt3: (
          <>
            正解です！ NaHCO<sub>3</sub>は組成上「酸のHが残っている」ため酸性塩に分類されますが、実際に水に溶かすと加水分解によって弱い塩基性を示します。塩の分類名（正塩・酸性塩・塩基性塩）は組成による分類であり、水溶液の実際の性質とは必ずしも一致しません。
          </>
        ),
        opt4: (
          <>
            不正解です。NaHCO<sub>3</sub>は水に溶ける塩です。
          </>
        ),
      }}
    />
  )
}
