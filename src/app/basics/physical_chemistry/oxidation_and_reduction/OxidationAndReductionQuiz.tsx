import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function OxidationAndReductionQuiz() {
  return (
    <SingleChoiceQuiz
      question={
        <>
          過酸化水素H<sub>2</sub>O<sub>2</sub>は、過マンガン酸カリウムKMnO<sub>4</sub>のような強い酸化剤に対しては何としてはたらくか。
        </>
      }
      options={[
        { id: 'opt1', label: '酸化剤' },
        { id: 'opt2', label: '還元剤' },
        { id: 'opt3', label: '触媒' },
        { id: 'opt4', label: '中和剤' },
      ]}
      correct="opt2"
      feedback={{
        opt1: (
          <>
            不正解です。過酸化水素H<sub>2</sub>O<sub>2</sub>は一般に酸化剤としてはたらきますが、この設問の相手（過マンガン酸カリウムKMnO<sub>4</sub>）はより強い酸化剤です。
          </>
        ),
        opt2: (
          <>
            正解です！ 過酸化水素H<sub>2</sub>O<sub>2</sub>は一般に酸化剤としてはたらきますが、過マンガン酸カリウムKMnO<sub>4</sub>のようなより強い酸化剤に対しては、自身が電子を渡す側になるため還元剤としてはたらきます。酸化剤・還元剤の役割は物質固有の性質ではなく、相手物質との相対関係で決まります。
          </>
        ),
        opt3: (
          <>
            不正解です。触媒は反応の前後で自身が変化せず反応速度のみを変える物質であり、電子の授受で相手を酸化・還元させる酸化剤・還元剤とは働きが異なります。
          </>
        ),
        opt4: (
          <>
            不正解です。中和剤は酸と塩基の反応に関わる物質であり、電子の授受による酸化・還元とは異なる反応です。
          </>
        ),
      }}
    />
  )
}
