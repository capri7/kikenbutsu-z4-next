-- 任意のユーザー ID を受け取って記録を返す関数がないこと
begin;
create extension if not exists pgtap with schema extensions;
select plan(3);

select hasnt_function(
  'public',
  'get_free_progress_summary',
  array['uuid']::name[],
  '引数を取る get_free_progress_summary(uuid) はない'
);

select hasnt_function(
  'public',
  'get_study_days',
  array['uuid']::name[],
  'ユーザー ID を受け取る get_study_days(uuid) はない'
);

select hasnt_function(
  'public',
  'pick_next_question',
  array['uuid', 'boolean', 'uuid', 'uuid']::name[],
  'ユーザー ID を受け取る pick_next_question(uuid, boolean, uuid, uuid) はない'
);

select * from finish();
rollback;
