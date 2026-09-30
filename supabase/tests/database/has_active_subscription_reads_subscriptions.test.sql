-- 有料の判定は subscriptions の status だけで決まること
begin;
create extension if not exists pgtap with schema extensions;
select plan(4);

-- テストの中だけで使う利用者（最後に rollback で消える）
insert into auth.users (id, email) values
  ('a1111111-1111-1111-1111-111111111111', 'sub-active@example.test'),
  ('a2222222-2222-2222-2222-222222222222', 'profile-only@example.test'),
  ('a3333333-3333-3333-3333-333333333333', 'sub-canceled@example.test'),
  ('a4444444-4444-4444-4444-444444444444', 'sub-resubscribed@example.test');

-- A：subscriptions に active の行がある（user_profiles は空のまま）
insert into public.subscriptions (user_id, stripe_subscription_id, status)
values ('a1111111-1111-1111-1111-111111111111', 'sub_test_a_active', 'active');

-- B：user_profiles だけが active（subscriptions に行がない）
update public.user_profiles set subscription_status = 'active'
where user_id = 'a2222222-2222-2222-2222-222222222222';

-- C：canceled だが current_period_end は未来
insert into public.subscriptions (user_id, stripe_subscription_id, status, current_period_end)
values ('a3333333-3333-3333-3333-333333333333', 'sub_test_c_canceled', 'canceled', now() + interval '10 days');

-- D：古い契約は canceled、再契約した新しい契約は active
insert into public.subscriptions (user_id, stripe_subscription_id, status) values
  ('a4444444-4444-4444-4444-444444444444', 'sub_test_d_old', 'canceled'),
  ('a4444444-4444-4444-4444-444444444444', 'sub_test_d_new', 'active');

set local role authenticated;

select set_config('request.jwt.claims', '{"sub":"a1111111-1111-1111-1111-111111111111","role":"authenticated"}', true);
select is(public.has_active_subscription(), true, 'A：subscriptions が active なら有料');

select set_config('request.jwt.claims', '{"sub":"a2222222-2222-2222-2222-222222222222","role":"authenticated"}', true);
select is(public.has_active_subscription(), false, 'B：user_profiles だけが active なら無料');

select set_config('request.jwt.claims', '{"sub":"a3333333-3333-3333-3333-333333333333","role":"authenticated"}', true);
select is(public.has_active_subscription(), false, 'C：canceled なら期間が残っていても無料');

select set_config('request.jwt.claims', '{"sub":"a4444444-4444-4444-4444-444444444444","role":"authenticated"}', true);
select is(public.has_active_subscription(), true, 'D：canceled の行があっても active の行があれば有料');

reset role;
select * from finish();
rollback;
