// マイページの試験日カウントダウンの日付の計算（日本時間で数える）
// 画面（src/app/mypage/ExamCountdown.tsx）から切り出したもの。中身は切り出す前と同じ

export function jstTodayYMD(): string {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now).reduce((o: Record<string, string>, p) => {
    o[p.type] = p.value
    return o
  }, {})
  return `${parts.year}-${parts.month}-${parts.day}`
}

export function daysLeftJST(ymd: string | null): number | null {
  if (!ymd) return null
  const [y, m, d] = ymd.split('-').map(Number)
  const examUTC = Date.UTC(y, m - 1, d)
  const [ty, tm, td] = jstTodayYMD().split('-').map(Number)
  const todayUTC = Date.UTC(ty, tm - 1, td)
  return Math.round((examUTC - todayUTC) / 86400000)
}

export function msUntilNextJSTMidnight(): number {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(now).reduce((o: Record<string, string>, p) => {
    o[p.type] = p.value
    return o
  }, {})
  const cur = new Date(
    `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}+09:00`
  )
  const next = new Date(`${parts.year}-${parts.month}-${parts.day}T00:00:00+09:00`)
  next.setDate(next.getDate() + 1)
  return next.getTime() - cur.getTime()
}

export function formatDisplay(ymd: string | null): string {
  const left = daysLeftJST(ymd)
  if (left === null) return '受験日を設定してください'
  if (left > 0) return `本番まで残り ${left}日`
  if (left === 0) return '今日が試験日！'
  return `試験日から ${Math.abs(left)}日経過`
}
