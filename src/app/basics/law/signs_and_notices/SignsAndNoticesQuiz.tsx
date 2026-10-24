import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function SignsAndNoticesQuiz() {
  return (
    <SingleChoiceQuiz
      question="火気厳禁の掲示板（火気表示）に用いる配色として、正しいものはどれか。"
      options={[
        { id: 'opt1', label: '地は赤色、文字は白色にする。' },
        { id: 'opt2', label: '地は白色、文字は黒色にする。' },
        { id: 'opt3', label: '地は白色、文字は赤色にする。' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です。火気掲示の色指定は「火気厳禁」「火気注意」ともに地が赤、文字が白です。禁水＝青地・白字、掲示板本体＝白地・黒字とあわせて、用途ごとの配色をセットで押さえておきましょう。',
        opt2: '不正解です。白地・黒字は、危険物の類別や最大数量などを示す「掲示板本体」の配色で、火気厳禁の掲示には使いません。火気関係は赤地・白字と整理して覚えましょう。',
        opt3: '不正解です。白地・赤字のような配色指定は、法令上の火気掲示には使いません。「赤＝地の色、白＝文字の色」と逆にしないように注意しましょう。',
      }}
    />
  )
}
