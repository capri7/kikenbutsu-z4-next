-- 復習リストの関数は、search_path が空に固定されていること
begin;
create extension if not exists pgtap with schema extensions;
select plan(2);

select is(
  (select array_to_string(proconfig, ',') from pg_proc
    where proname = 'add_review_item' and pronamespace = 'public'::regnamespace),
  'search_path=""',
  'add_review_item の search_path が固定されている'
);

select is(
  (select array_to_string(proconfig, ',') from pg_proc
    where proname = 'mark_review_item_mastered' and pronamespace = 'public'::regnamespace),
  'search_path=""',
  'mark_review_item_mastered の search_path が固定されている'
);

select * from finish();
rollback;
