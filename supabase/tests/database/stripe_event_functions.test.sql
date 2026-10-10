-- Stripe の通知を記録する関数が、未処理・処理済み・失敗を正しく記録すること
begin;
create extension if not exists pgtap with schema extensions;
select plan(14);

-- 初めて届いた通知は、未処理として記録し、処理する（false）
select is(
  public.record_stripe_event('evt_pgtap_1', 'customer.subscription.created', false, '{"id":"evt_pgtap_1"}'::jsonb),
  false,
  '初めて届いた通知は、処理する対象になる'
);
select results_eq(
  $$ select processed_at is null, attempts, last_error from public.stripe_events where id = 'evt_pgtap_1' $$,
  $$ values (true, 0, null::text) $$,
  '初めて届いた通知は、未処理・試みた回数0で記録される'
);

-- 処理が失敗したら、未処理のまま、回数と内容が残る
select lives_ok(
  $$ select public.finish_stripe_event('evt_pgtap_1', 'insert or update on table "user_profiles" violates foreign key constraint') $$,
  '失敗の結果を記録できる'
);
select results_eq(
  $$ select processed_at is null, attempts, last_error is not null, last_attempt_at is not null from public.stripe_events where id = 'evt_pgtap_1' $$,
  $$ values (true, 1, true, true) $$,
  '失敗した通知は、未処理のまま、試みた回数1と失敗の内容が残る'
);

-- 失敗した通知が再送されたら、重複として飛ばさず、もう一度処理する（false）
select is(
  public.record_stripe_event('evt_pgtap_1', 'customer.subscription.created', false, '{"id":"evt_pgtap_1"}'::jsonb),
  false,
  '失敗して未処理の通知が再送されたら、もう一度処理する対象になる'
);
select is(
  (select count(*)::int from public.stripe_events where id = 'evt_pgtap_1'),
  1,
  '再送されても、記録は1行のまま'
);
select is(
  (select attempts from public.stripe_events where id = 'evt_pgtap_1'),
  1,
  '再送を受け取っただけでは、試みた回数は増えない'
);

-- 処理が成功したら、処理済みになり、失敗の内容は消える
select lives_ok(
  $$ select public.finish_stripe_event('evt_pgtap_1', null) $$,
  '成功の結果を記録できる'
);
select results_eq(
  $$ select processed_at is not null, attempts, last_error from public.stripe_events where id = 'evt_pgtap_1' $$,
  $$ values (true, 2, null::text) $$,
  '成功した通知は、処理済みになり、試みた回数2で失敗の内容は消える'
);

-- 処理済みの通知が再送されたら、重複として飛ばす（true）
select is(
  public.record_stripe_event('evt_pgtap_1', 'customer.subscription.created', false, '{"id":"evt_pgtap_1"}'::jsonb),
  true,
  '処理済みの通知が再送されたら、重複として飛ばす'
);

-- 記録のない通知の結果は記録できない（取り違えに気づくため）
select throws_ok(
  $$ select public.finish_stripe_event('evt_pgtap_missing', null) $$,
  'P0001',
  'stripe event not found: evt_pgtap_missing',
  '記録のない通知の結果を記録しようとすると、エラーになる'
);

-- 利用者は呼べない
select is(
  has_function_privilege('anon', 'public.record_stripe_event(text, text, boolean, jsonb)', 'EXECUTE')
    or has_function_privilege('authenticated', 'public.record_stripe_event(text, text, boolean, jsonb)', 'EXECUTE'),
  false,
  '利用者（anon・authenticated）は、record_stripe_event を呼べない'
);
select is(
  has_function_privilege('anon', 'public.finish_stripe_event(text, text)', 'EXECUTE')
    or has_function_privilege('authenticated', 'public.finish_stripe_event(text, text)', 'EXECUTE'),
  false,
  '利用者（anon・authenticated）は、finish_stripe_event を呼べない'
);
select is(
  has_function_privilege('service_role', 'public.record_stripe_event(text, text, boolean, jsonb)', 'EXECUTE')
    and has_function_privilege('service_role', 'public.finish_stripe_event(text, text)', 'EXECUTE'),
  true,
  'stripe-webhook（service_role）は、2つの関数を呼べる'
);

select * from finish();
rollback;
