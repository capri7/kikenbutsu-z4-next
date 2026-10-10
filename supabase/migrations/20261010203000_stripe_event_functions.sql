-- Stripe の通知の受け取りと処理の結果を、stripe_events に記録する関数（stripe-webhook が service_role で呼ぶ）
-- 段階2：受け取ったら未処理として記録して 200 を返し、処理を終えたら処理済みにする。失敗は記録して未処理のまま残す

-- 受け取った通知を未処理として記録する。同じ ID の通知がすでにあれば、そのまま残す
-- 戻り値：その通知がすでに処理済みなら true（重複として飛ばす）、未処理なら false（処理する）
create function public.record_stripe_event(
  p_id text,
  p_type text,
  p_livemode boolean,
  p_payload jsonb
)
returns boolean
language plpgsql
set search_path = ''
as $$
declare
  v_processed_at timestamptz;
begin
  insert into public.stripe_events (id, type, livemode, payload, processed_at)
  values (p_id, p_type, p_livemode, p_payload, null)
  on conflict (id) do nothing;

  select processed_at into v_processed_at
    from public.stripe_events
   where id = p_id;

  return v_processed_at is not null;
end;
$$;

-- 処理を1回試みた結果を記録する。p_error が空なら成功（処理済みにする）、あれば失敗（未処理のまま、内容を残す）
create function public.finish_stripe_event(
  p_id text,
  p_error text
)
returns void
language plpgsql
set search_path = ''
as $$
begin
  update public.stripe_events
     set attempts = attempts + 1,
         last_attempt_at = now(),
         last_error = p_error,
         processed_at = case when p_error is null then now() else processed_at end
   where id = p_id;

  if not found then
    raise exception 'stripe event not found: %', p_id;
  end if;
end;
$$;

-- 利用者は呼べない。stripe-webhook（service_role）だけが呼ぶ
revoke execute on function public.record_stripe_event(text, text, boolean, jsonb) from public, anon, authenticated;
revoke execute on function public.finish_stripe_event(text, text) from public, anon, authenticated;
grant execute on function public.record_stripe_event(text, text, boolean, jsonb) to service_role;
grant execute on function public.finish_stripe_event(text, text) to service_role;
