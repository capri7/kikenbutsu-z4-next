-- stripe_events を、Stripe の通知の受け取りの記録だけでなく、処理の状態の記録にも使う
-- （Stripe の勧め：すぐに 2xx を返し、処理は非同期の列で行う。重複の判定は「処理済み」の通知に限る）
--
-- 段階的に移すための手順（変更の前のコードと後のコードのどちらでも動く順）
--   1. この migration：列を足す。今の stripe-webhook は処理を終えた前提で記録するため、
--      processed_at の既定値を now() にしておく（今のコードが足す行も「処理済み」になる）
--   2. 次の PR：stripe-webhook が、受け取ったときに processed_at を null で記録し、処理を終えたら時刻を入れる
--   3. 2 を本番に出したあとの migration：processed_at の既定値を外す
alter table public.stripe_events
  add column processed_at timestamptz default now(),
  add column attempts integer not null default 0,
  add column last_attempt_at timestamptz,
  add column last_error text;

-- 今ある通知は、受け取ったときに処理していたため、受け取った時刻を処理済みの時刻とする
-- （2026-10-11 に本番で、契約の通知に対応する subscriptions の行がすべてあり、最新の状態が一致することを確認した）
update public.stripe_events set processed_at = received_at;

-- 処理し直しの対象（未処理の通知）を、受け取った順に探すための索引
create index stripe_events_unprocessed_idx
  on public.stripe_events (received_at)
  where processed_at is null;
