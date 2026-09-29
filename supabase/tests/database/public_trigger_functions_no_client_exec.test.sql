-- public のトリガー用の関数は、anon・authenticated が実行できないこと
-- （トリガーとして動くときは実行の権限を見ないので、外しても動きは変わらない）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select is_empty(
  $$
    select p.proname::text || ' : ' || r
      from pg_proc p
     cross join unnest(array['anon', 'authenticated']) as r
     where p.pronamespace = 'public'::regnamespace
       and p.prorettype = 'trigger'::regtype
       and has_function_privilege(r, p.oid, 'EXECUTE')
  $$,
  'public のトリガー用の関数を、利用者が実行できない'
);

select * from finish();
rollback;
