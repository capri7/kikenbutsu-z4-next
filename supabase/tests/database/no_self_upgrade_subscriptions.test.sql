-- 利用者が、subscriptions を使って自分を有料会員にできないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

-- テストの中だけで使う利用者と、解約済みの契約（最後に rollback で消える）
insert into auth.users (id, email)
values ('a5555555-5555-5555-5555-555555555555', 'self-upgrade-sub@example.test');

insert into public.subscriptions (user_id, stripe_subscription_id, status)
values ('a5555555-5555-5555-5555-555555555555', 'sub_test_self_upgrade_old', 'canceled');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"a5555555-5555-5555-5555-555555555555","role":"authenticated"}', true);

select throws_ok(
  $$ insert into public.subscriptions (user_id, stripe_subscription_id, status)
     values (auth.uid(), 'sub_test_self_upgrade_new', 'active') $$,
  '42501',
  null,
  '自分の active の契約の行を作れない'
);

select throws_ok(
  $$ update public.subscriptions set status = 'active'
      where user_id = auth.uid() $$,
  '42501',
  null,
  '自分の解約済みの契約を active に書き換えられない'
);

reset role;
select * from finish();
rollback;
