-- 無料会員が、自分を有料会員に書き換えられないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

-- テストの中だけで使う無料会員（最後に rollback で消える）
insert into auth.users (id, email)
values ('22222222-2222-2222-2222-222222222222', 'self-upgrade-test@example.test');

-- 無料会員になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"22222222-2222-2222-2222-222222222222","role":"authenticated"}', true);

select throws_ok(
  $$ update public.user_profiles
        set subscription_status = 'active', current_period_end = now() + interval '30 days'
      where user_id = auth.uid() $$,
  '42501',
  null,
  '無料会員は、自分を有料会員に書き換えられない'
);

reset role;
select * from finish();
rollback;
