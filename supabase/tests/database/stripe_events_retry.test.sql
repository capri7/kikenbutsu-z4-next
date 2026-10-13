-- 未処理のまま残った Stripe の通知を処理し直す仕組み（段階4）：対象の選び方・3時間の件数・呼び出し・権限・ジョブ
begin;
create extension if not exists pgtap with schema extensions;
select plan(22);

-- 試験用の通知（id は evt_pgtap_retry_ で始める。received_at・attempts・last_attempt_at・processed_at を条件ごとに変える）
insert into public.stripe_events (id, type, livemode, payload, received_at, processed_at, attempts, last_attempt_at) values
  ('evt_pgtap_retry_fresh',     'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_fresh"}',     now() - interval '9 minutes',  null,  0, null),
  ('evt_pgtap_retry_never',     'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_never"}',     now() - interval '11 minutes', null,  0, null),
  ('evt_pgtap_retry_a1_wait',   'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_a1_wait"}',   now() - interval '1 hour',     null,  1, now() - interval '9 minutes'),
  ('evt_pgtap_retry_a1_due',    'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_a1_due"}',    now() - interval '1 hour',     null,  1, now() - interval '11 minutes'),
  ('evt_pgtap_retry_a2_wait',   'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_a2_wait"}',   now() - interval '50 minutes',     null,  2, now() - interval '19 minutes'),
  ('evt_pgtap_retry_a2_due',    'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_a2_due"}',    now() - interval '50 minutes',     null,  2, now() - interval '21 minutes'),
  ('evt_pgtap_retry_a4_wait',   'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_a4_wait"}',   now() - interval '181 minutes', null, 4, now() - interval '79 minutes'),
  ('evt_pgtap_retry_a4_due',    'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_a4_due"}',    now() - interval '181 minutes', null, 4, now() - interval '81 minutes'),
  ('evt_pgtap_retry_a5',        'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_a5"}',        now() - interval '5 hours',    null,  5, now() - interval '5 hours'),
  ('evt_pgtap_retry_processed', 'customer.subscription.updated', false, '{"id":"evt_pgtap_retry_processed"}', now() - interval '1 hour',     now(), 1, now() - interval '1 hour');

create temporary table due on commit drop as
  select id from public.stripe_events_due_for_retry(1000) where id like 'evt_pgtap_retry_%';

-- 受け取ってから10分
select ok(not exists (select 1 from due where id = 'evt_pgtap_retry_fresh'), '受け取ってから10分たっていない通知は、処理し直さない（処理の途中かもしれない）');
select ok(exists (select 1 from due where id = 'evt_pgtap_retry_never'), '受け取ってから10分以上たち、一度も結果が記録されていない通知は、処理し直す');

-- 間隔を広げる（10・20・40・80分）
select ok(not exists (select 1 from due where id = 'evt_pgtap_retry_a1_wait'), '1回失敗した通知は、前回から10分たつまで処理し直さない');
select ok(exists (select 1 from due where id = 'evt_pgtap_retry_a1_due'), '1回失敗した通知は、前回から10分たったら処理し直す');
select ok(not exists (select 1 from due where id = 'evt_pgtap_retry_a2_wait'), '2回失敗した通知は、前回から20分たつまで処理し直さない');
select ok(exists (select 1 from due where id = 'evt_pgtap_retry_a2_due'), '2回失敗した通知は、前回から20分たったら処理し直す');
select ok(not exists (select 1 from due where id = 'evt_pgtap_retry_a4_wait'), '4回失敗した通知は、前回から80分たつまで処理し直さない');
select ok(exists (select 1 from due where id = 'evt_pgtap_retry_a4_due'), '4回失敗した通知は、前回から80分たったら処理し直す');

-- 上限と処理済み
select ok(not exists (select 1 from due where id = 'evt_pgtap_retry_a5'), '5回失敗した通知は、処理し直さない（上限）');
select ok(not exists (select 1 from due where id = 'evt_pgtap_retry_processed'), '処理済みの通知は、処理し直さない');

-- 受け取った順に返す
select results_eq(
  $$ select id from public.stripe_events_due_for_retry(1000) where id like 'evt_pgtap_retry_%' $$,
  $$ values ('evt_pgtap_retry_a4_due'::text), ('evt_pgtap_retry_a1_due'), ('evt_pgtap_retry_a2_due'), ('evt_pgtap_retry_never') $$,
  '処理し直す通知は、受け取った順に返す'
);
select is(
  (select count(*)::int from public.stripe_events_due_for_retry(1)),
  1,
  '一度に返す件数は、指定した数までにする'
);

-- 3時間たっても未処理の件数（a4_wait・a4_due は受け取ってから3時間1分、a5 は5時間。processed は数えない）
select is(
  (select count(*)::int from public.stripe_events where id like 'evt_pgtap_retry_%' and processed_at is null and received_at <= now() - interval '3 hours'),
  3,
  '（前提）試験用の通知のうち、受け取ってから3時間以上たった未処理は3件'
);
select ok(
  public.stripe_events_overdue_count() >= 3,
  '受け取ってから3時間以上たった未処理の通知を数える'
);
update public.stripe_events set processed_at = now() where id like 'evt_pgtap_retry_a%';
select is(
  (select count(*)::int from public.stripe_events where processed_at is null and received_at <= now() - interval '3 hours'),
  public.stripe_events_overdue_count(),
  '数えるのは、未処理で、受け取ってから3時間以上たった通知だけ'
);

-- 呼び出し：Vault に鍵がなければ呼ばない
delete from vault.secrets where name in ('project_url', 'stripe_events_retry_secret_key');
select is(public.invoke_stripe_events_retry(), null, 'Vault に URL と鍵がなければ、呼ばない');
select vault.create_secret('http://example.invalid', 'project_url');
select is(public.invoke_stripe_events_retry(), null, 'Vault に鍵がなければ、呼ばない');
select vault.create_secret('sb_secret_pgtap_dummy', 'stripe_events_retry_secret_key');
select isnt(public.invoke_stripe_events_retry(), null, 'Vault に URL と鍵があれば、呼ぶ（呼び出しは試験の終わりに取り消す）');

-- 利用者は呼べない
select is(
  has_function_privilege('anon', 'public.stripe_events_due_for_retry(integer)', 'EXECUTE')
    or has_function_privilege('authenticated', 'public.stripe_events_due_for_retry(integer)', 'EXECUTE'),
  false,
  '利用者（anon・authenticated）は、stripe_events_due_for_retry を呼べない'
);
select is(
  has_function_privilege('anon', 'public.stripe_events_overdue_count()', 'EXECUTE')
    or has_function_privilege('authenticated', 'public.stripe_events_overdue_count()', 'EXECUTE'),
  false,
  '利用者（anon・authenticated）は、stripe_events_overdue_count を呼べない'
);
select is(
  has_function_privilege('anon', 'public.invoke_stripe_events_retry()', 'EXECUTE')
    or has_function_privilege('authenticated', 'public.invoke_stripe_events_retry()', 'EXECUTE')
    or has_function_privilege('service_role', 'public.invoke_stripe_events_retry()', 'EXECUTE'),
  false,
  '利用者と service_role は、invoke_stripe_events_retry を呼べない（呼ぶのはジョブだけ）'
);

-- ジョブ
select results_eq(
  $$ select schedule, command from cron.job where jobname = 'stripe-events-retry' $$,
  $$ values ('*/10 * * * *'::text, ' select public.invoke_stripe_events_retry(); '::text) $$,
  'ジョブが10分ごとに invoke_stripe_events_retry() を呼ぶ'
);

select * from finish();
rollback;
