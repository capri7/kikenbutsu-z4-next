-- PR 5a（expand）：p_user_id を受け取らず、auth.uid() で本人を決める関数を追加する
-- 古い関数（p_user_id を受け取る版）は、アプリの切り替えを本番で確かめてから PR 5b で削除する

create function public.get_study_days()
returns table(study_date date)
language sql
stable
set search_path = ''
as $$
  select distinct
    (coalesce(up.answered_at, up.updated_at) at time zone 'Asia/Tokyo')::date as study_date
  from public.user_progress up
  where up.user_id = auth.uid()
$$;

create function public.pick_next_question(
  p_include_paid boolean,
  p_subcategory_id uuid default null,
  p_category_id uuid default null
)
returns table(id text)
language sql
stable
set search_path = ''
as $$
  select q.id
  from public.questions q
  left join public.subcategories s on s.id = q.subcategory_id
  where (p_include_paid or q.is_paid = false)
    and (p_subcategory_id is null or q.subcategory_id = p_subcategory_id)
    and (p_category_id is null or s.category_id = p_category_id)
    and not exists (
      select 1
      from public.user_progress up
      where up.user_id = auth.uid()
        and up.question_id = q.id
    )
  order by random()
  limit 1
$$;

revoke execute on function public.get_study_days() from public, anon;
revoke execute on function public.pick_next_question(boolean, uuid, uuid) from public, anon;
grant execute on function public.get_study_days() to authenticated;
grant execute on function public.pick_next_question(boolean, uuid, uuid) to authenticated;
