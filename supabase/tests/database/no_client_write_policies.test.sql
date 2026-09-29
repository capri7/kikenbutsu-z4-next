-- user_profiles・questions に、利用者向けの書き込みのポリシーが残っていないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select is_empty(
  $$ select tablename, policyname, cmd
       from pg_policies
      where schemaname = 'public'
        and tablename in ('user_profiles', 'questions')
        and cmd <> 'SELECT'
        and not (roles = array['service_role']::name[]) $$,
  'user_profiles・questions に、利用者向けの書き込みのポリシーが残っていない'
);

select * from finish();
rollback;
