-- 有料の判定は subscriptions の status だけで決まること
begin;
create extension if not exists pgtap with schema extensions;
select plan(3);

-- テストの中だけで使う利用者（最後に rollback で消える）
insert into auth.users (id, email) values
  ('a1111111-1111-1111-1111-111111111111', 'sub-active@example.test'),
  ('a3333333-3333-3333-3333-333333333333', 'sub-canceled@example.test'),
  ('a4444444-4444-4444-4444-444444444444', 'sub-resubscribed@example.test');

-- A：subscriptions に active の行がある
insert into public.subscriptions (user_id, stripe_subscription_id, status)
values ('a1111111-1111-1111-1111-111111111111', 'sub_test_a_active', 'active');

-- B：canceled だが current_period_end は未来
insert into public.subscriptions (user_id, stripe_subscription_id, status, current_period_end)
values ('a3333333-3333-3333-3333-333333333333', 'sub_test_b_canceled', 'canceled', now() + interval '10 days');

-- C：古い契約は canceled、再契約した新しい契約は active
insert into public.subscriptions (user_id, stripe_subscription_id, status) values
  ('a4444444-4444-4444-4444-444444444444', 'sub_test_c_old', 'canceled'),
  ('a4444444-4444-4444-4444-444444444444', 'sub_test_c_new', 'active');

set local role authenticated;

select set_config('request.jwt.claims', '{"sub":"a1111111-1111-1111-1111-111111111111","role":"authenticated"}', true);
select is(public.has_active_subscription(), true, 'A：subscriptions が active なら有料');

select set_config('request.jwt.claims', '{"sub":"a3333333-3333-3333-3333-333333333333","role":"authenticated"}', true);
select is(public.has_active_subscription(), false, 'B：canceled なら期間が残っていても無料');

select set_config('request.jwt.claims', '{"sub":"a4444444-4444-4444-4444-444444444444","role":"authenticated"}', true);
select is(public.has_active_subscription(), true, 'C：canceled の行があっても active の行があれば有料');

reset role;
select * from finish();
rollback;
