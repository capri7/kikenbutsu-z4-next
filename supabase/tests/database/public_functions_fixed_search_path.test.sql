-- public の関数は、すべて search_path を固定していること
-- （Security Advisor の function_search_path_mutable の対象を作らない。拡張機能が入れた関数は除く）
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select is_empty(
  $$
    select p.oid::regprocedure::text
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and not exists (
        select 1 from pg_depend d
        where d.objid = p.oid and d.deptype = 'e'
      )
      and not exists (
        select 1 from unnest(coalesce(p.proconfig, '{}')) as c
        where c like 'search_path=%'
      )
  $$,
  'public の関数は、すべて search_path を固定している'
);

select * from finish();
rollback;
