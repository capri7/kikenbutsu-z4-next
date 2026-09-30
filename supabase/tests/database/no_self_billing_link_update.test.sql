-- 利用者が、支払いの紐付けに使う列（stripe_customer_id・email）を自分で書き換えられないこと
-- billing-portal は stripe_customer_id で開く請求ポータルを決め、stripe-webhook は stripe_customer_id と email で利用者を探す
-- 列単位の権限は public_no_client_write_privileges（has_table_privilege）では見つからないため、実際に書き換えを試して確かめる
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

-- テストの中だけで使う利用者（最後に rollback で消える）
insert into auth.users (id, email)
values ('22222222-2222-2222-2222-222222222222', 'billing-link-test@example.test');

-- 利用者になりきる
set local role authenticated;
select set_config('request.jwt.claims', '{"sub":"22222222-2222-2222-2222-222222222222","role":"authenticated"}', true);

select throws_ok(
  $$ update public.user_profiles set stripe_customer_id = 'cus_someone_else' where user_id = auth.uid() $$,
  '42501',
  null,
  '利用者は、自分の stripe_customer_id を書き換えられない'
);

select throws_ok(
  $$ update public.user_profiles set email = 'someone-else@example.test' where user_id = auth.uid() $$,
  '42501',
  null,
  '利用者は、自分の email を書き換えられない'
);

reset role;
select * from finish();
rollback;
