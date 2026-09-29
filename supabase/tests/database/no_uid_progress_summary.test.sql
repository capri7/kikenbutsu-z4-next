-- 任意のユーザー ID の進捗を返す関数がないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(1);

select hasnt_function(
  'public',
  'get_free_progress_summary',
  array['uuid']::name[],
  '引数を取る get_free_progress_summary(uuid) はない'
);

select * from finish();
rollback;
