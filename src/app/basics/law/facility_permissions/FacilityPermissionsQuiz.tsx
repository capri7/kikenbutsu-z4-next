import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function FacilityPermissionsQuiz() {
  return (
    <SingleChoiceQuiz
      question="移送取扱所の設置・変更を2つ以上の都道府県にまたがる地域において行う際、申請先として正しいものはどれか。"
      options={[
        { id: 'opt1', label: '市町村長' },
        { id: 'opt2', label: '都道府県知事' },
        { id: 'opt3', label: '総務大臣' },
      ]}
      correct="opt3"
      feedback={{
        opt3: '正解です。移送取扱所の設置・変更を2つ以上の都道府県にまたがる区域で行う場合、申請先は総務大臣です。',
        opt1: '不正解です。市町村長は、市町村の区域内にとどまる場合の申請先です。問題では「2つ以上の都道府県にまたがる区域」とあるので、より広い区域を担当する総務大臣が申請先になります。',
        opt2: '不正解です。都道府県知事は、1つの都道府県の区域におさまる場合の申請先です。2つ以上の都道府県にまたがるときは、総務大臣が申請先になります。',
      }}
    />
  )
}
