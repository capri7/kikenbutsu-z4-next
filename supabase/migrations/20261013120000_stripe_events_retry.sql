-- 未処理のまま残った Stripe の通知を、定期的に処理し直す（段階4）
-- pg_cron が10分ごとに、pg_net で Edge Function の stripe-events-retry を呼ぶ（Supabase の公式の文書「Scheduling Edge Functions」）。
-- 呼び出しの URL と鍵は Vault に置き、呼ぶときに読む（同じ文書。鍵を SQL に書かない）。
-- 鍵は新しい形式の秘密の鍵で、apikey ヘッダーで送る（公式の文書「Migrating to publishable and secret API keys」の pg_net の例）。

create extension if not exists pg_net with schema extensions;

-- 処理し直す対象の通知を、受け取った順に返す（stripe-events-retry が service_role で呼ぶ）
-- 条件：未処理で、受け取ってから10分以上たっている（処理は最長でも400秒で打ち切られるため、処理の途中のものは含まない。
-- 公式の文書「Edge Functions の Limits」）。試みた回数が5回未満で、前回の試みから 10・20・40・80 分たっている
-- （間隔を広げながら処理し直す。Stripe の再送と同じ形）。
create function public.stripe_events_due_for_retry(p_limit integer default 20)
returns table (id text, payload jsonb)
language sql
stable
set search_path = ''
as $$
  select e.id, e.payload
    from public.stripe_events e
   where e.processed_at is null
     and e.received_at <= now() - interval '10 minutes'
     and e.attempts < 5
     and (
       e.last_attempt_at is null
       or e.last_attempt_at <= now() - interval '10 minutes' * power(2, greatest(e.attempts - 1, 0))
     )
   order by e.received_at
   limit p_limit;
$$;

-- 受け取ってから3時間以上たっても未処理の通知の件数（1件以上なら、stripe-events-retry が知らせる）
create function public.stripe_events_overdue_count()
returns integer
language sql
stable
set search_path = ''
as $$
  select count(*)::integer
    from public.stripe_events
   where processed_at is null
     and received_at <= now() - interval '3 hours';
$$;

-- stripe-events-retry を呼ぶ。URL と鍵は Vault から読む。どちらかがなければ呼ばない
-- （手元と CI には鍵を置かないため。本番で置き忘れた場合は、Heartbeat が届かなくなり、知らせが出る）
create function public.invoke_stripe_events_retry()
returns bigint
language plpgsql
set search_path = ''
as $$
declare
  v_url text;
  v_key text;
begin
  select decrypted_secret into v_url from vault.decrypted_secrets where name = 'project_url';
  select decrypted_secret into v_key from vault.decrypted_secrets where name = 'stripe_events_retry_secret_key';

  if v_url is null or v_key is null then
    raise warning 'stripe-events-retry を呼ばない：Vault に project_url か stripe_events_retry_secret_key がない';
    return null;
  end if;

  return net.http_post(
    url := v_url || '/functions/v1/stripe-events-retry',
    headers := jsonb_build_object('Content-Type', 'application/json', 'apikey', v_key),
    body := '{}'::jsonb,
    -- Edge Function が応答するまでの上限（公式の文書「Edge Functions の Limits」の Request idle timeout：150秒）
    timeout_milliseconds := 150000
  );
end;
$$;

-- 利用者は呼べない
revoke execute on function public.stripe_events_due_for_retry(integer) from public, anon, authenticated;
revoke execute on function public.stripe_events_overdue_count() from public, anon, authenticated;
-- service_role も外す（Supabase は、public に作った関数の実行を service_role に既定で許す。呼ぶのはジョブ（postgres）だけ）
revoke execute on function public.invoke_stripe_events_retry() from public, anon, authenticated, service_role;
grant execute on function public.stripe_events_due_for_retry(integer) to service_role;
grant execute on function public.stripe_events_overdue_count() to service_role;

-- 10分ごとに呼ぶ
select cron.schedule(
  'stripe-events-retry',
  '*/10 * * * *',
  $$ select public.invoke_stripe_events_retry(); $$
);
