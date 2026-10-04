// 問題の図（questions.image）は、Supabase Storage の公開バケット phy の中の場所
// （例：basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_004.svg）で持っている。
// <img> にはそのまま渡せないため、公開 URL に組み立てる。
const BUCKET = 'phy'

export function questionImageUrl(
  path: string | null | undefined,
  supabaseUrl: string | undefined,
): string | null {
  if (!path || !supabaseUrl) return null
  const base = supabaseUrl.replace(/\/+$/, '')
  const key = path.split('/').map(encodeURIComponent).join('/')
  return `${base}/storage/v1/object/public/${BUCKET}/${key}`
}
