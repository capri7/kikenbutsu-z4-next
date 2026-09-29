-- user_profiles・questions に、利用者（anon・authenticated）の書き込みの権限が残っていないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select is_empty(
  $$ select table_name, grantee, privilege_type
       from information_schema.role_table_grants
      where table_schema = 'public'
        and table_name in ('user_profiles', 'questions')
        and grantee in ('anon', 'authenticated')
        and privilege_type in ('INSERT', 'UPDATE', 'DELETE', 'TRUNCATE') $$,
  'user_profiles・questions に、利用者の書き込みの権限が残っていない'
);

select * from finish();
rollback;
