// supabase/functions/_shared/activeSubscription.ts
// 退会の流れで対象にする契約の行を選ぶ。
// 状態が active・trialing・past_due の行のうち、一番新しく更新された1行。なければ null（無料会員）。
// has_active_subscription()（どれか1行が有効なら有料）と同じ考え方にそろえるため。
const ACTIVE_STATUSES = ["active", "trialing", "past_due"];

type Row = { status: string | null; updated_at: string | null };

export function pickActiveSubscription<T extends Row>(rows: T[]): T | null {
  const active = rows.filter((r) =>
    ACTIVE_STATUSES.includes((r.status ?? "").toLowerCase())
  );
  if (active.length === 0) return null;
  return active.reduce((a, b) =>
    Date.parse(b.updated_at ?? "") > Date.parse(a.updated_at ?? "") ? b : a
  );
}
