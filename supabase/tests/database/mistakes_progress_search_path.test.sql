-- 誤答と解答の記録の関数は、search_path が空に固定されていること
begin;
create extension if not exists pgtap with schema extensions;
select plan(3);

select is(
  (select array_to_string(proconfig, ',') from pg_proc
    where proname = 'record_progress' and pronamespace = 'public'::regnamespace),
  'search_path=""',
  'record_progress の search_path が固定されている'
);

select is(
  (select array_to_string(proconfig, ',') from pg_proc
    where proname = 'record_mistake' and pronamespace = 'public'::regnamespace),
  'search_path=""',
  'record_mistake の search_path が固定されている'
);

select is(
  (select array_to_string(proconfig, ',') from pg_proc
    where proname = 'clear_mistake' and pronamespace = 'public'::regnamespace),
  'search_path=""',
  'clear_mistake の search_path が固定されている'
);

select * from finish();
rollback;
