import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function UndergroundTankStorageStandardsQuiz() {
  return (
    <SingleChoiceQuiz
      question="地下貯蔵タンクの頂部の埋設深さについて正しいのはどれか。"
      options={[
        { id: 'opt1', label: '地盤面から1m以上下にあること。' },
        { id: 'opt2', label: '地盤面から0.2m以上下にあること。' },
        { id: 'opt3', label: '地盤面から0.6m以上下にあること。' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。地下貯蔵タンクの頂部は、地盤面から0.6m以上の深さに埋設する必要があります。土圧や車両荷重などからタンクを保護するための深さです。',
        opt1: '不正解です。「1m以上」ではなく「0.6m以上」です。1mという数値は、他の離隔や間隔の数字と混同しないように注意しましょう。',
        opt2: '不正解です。0.2mは、屋内タンク貯蔵所の「敷居の高さ」で出てくる数字です。地下タンクの頂部の深さは「0.6m以上」が正解です。',
      }}
    />
  )
}
