import SingleChoiceQuiz from '@/app/basics/SingleChoiceQuiz'

export default function FacilityMaintenanceManagementQuiz() {
  return (
    <SingleChoiceQuiz
      question="技術上の基準に適合させるための変更命令を出せるのは、次のうち誰か。"
      options={[
        { id: 'opt1', label: '市町村長等' },
        { id: 'opt2', label: '消防署長' },
        { id: 'opt3', label: '都道府県知事' },
      ]}
      correct="opt1"
      feedback={{
        opt1: '正解です。技術上の基準に適合させるための変更命令を出せるのは「市町村長等」です。市町村長等 → 所有者等 に対して、基準に合わせるための修理・改造・移転（修・改・移）を命じる形になります。',
        opt2: '不正解です。消防署長は立入検査や指導などを行う立場ですが、技術上の基準に適合させるための「変更命令」を出す権限者として条文に挙げられているのは市町村長等です。',
        opt3: '不正解です。都道府県知事が関わる危険物の許可・認可もありますが、危険物施設を技術上の基準に適合させるための変更命令を出すのは「市町村長等」です。',
      }}
    />
  )
}
