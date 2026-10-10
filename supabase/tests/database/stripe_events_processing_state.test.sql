-- stripe_events に、処理の状態を記録する列と、未処理の通知を探す索引があること
begin;
create extension if not exists pgtap with schema extensions;
select plan(9);

select col_type_is('public', 'stripe_events', 'processed_at', 'timestamp with time zone', '処理済みの時刻の列がある');
select col_is_null('public', 'stripe_events', 'processed_at', '処理済みの時刻は空（未処理）を許す');
select col_type_is('public', 'stripe_events', 'attempts', 'integer', '処理を試みた回数の列がある');
select col_not_null('public', 'stripe_events', 'attempts', '処理を試みた回数は空にならない');
select col_default_is('public', 'stripe_events', 'attempts', '0', '処理を試みた回数は 0 から始まる');
select col_type_is('public', 'stripe_events', 'last_attempt_at', 'timestamp with time zone', '最後に処理を試みた時刻の列がある');
select col_type_is('public', 'stripe_events', 'last_error', 'text', '最後の失敗の内容の列がある');

select is(
  (select pg_get_indexdef(i.indexrelid)
     from pg_index i
     join pg_class c on c.oid = i.indexrelid
    where c.relname = 'stripe_events_unprocessed_idx'),
  'CREATE INDEX stripe_events_unprocessed_idx ON public.stripe_events USING btree (received_at) WHERE (processed_at IS NULL)',
  '未処理の通知を、受け取った順に探す索引がある'
);

-- 未処理の通知を足すと、索引の対象の条件（processed_at is null）で見つかる
insert into public.stripe_events (id, type, processed_at) values ('evt_pgtap_unprocessed', 'customer.subscription.created', null);
select is(
  (select count(*)::int from public.stripe_events where processed_at is null and id = 'evt_pgtap_unprocessed'),
  1,
  '処理済みの時刻を空で記録した通知は、未処理として見つかる'
);

select * from finish();
rollback;
