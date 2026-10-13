// supabase/functions/_shared/secretKey.ts
//
// Edge Functions が Supabase を管理者として呼ぶときの、新しい形式の秘密の鍵（sb_secret_）を決める。
// 本番では、関数の secret の EDGE_SECRET_KEY に置く（本番の関数では SUPABASE_SECRET_KEYS から鍵を読めなかったため。2026-10-13）。
// secret がない手元と CI では、Supabase CLI が入れる SUPABASE_SECRET_KEYS の default を使う
// （Supabase の公式の文書「Migrating to publishable and secret API keys」の Step 4 Option 1）。
export function resolveSecretKey(get: (name: string) => string | undefined): string {
  const own = get("EDGE_SECRET_KEY");
  if (own) return own;
  const raw = get("SUPABASE_SECRET_KEYS");
  if (raw) {
    try {
      const key = (JSON.parse(raw) as Record<string, unknown>)["default"];
      if (typeof key === "string" && key) return key;
    } catch {
      // JSON でなければ、下で止める
    }
  }
  throw new Error("秘密の鍵がない：EDGE_SECRET_KEY か、SUPABASE_SECRET_KEYS の default を置く");
}
