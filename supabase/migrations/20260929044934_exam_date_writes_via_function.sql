-- 受験日の書き込みを set_exam_date だけにする。
-- あわせて、クリア（null）で受験日を削除できるようにする（exam_date は NULL を許さないため、今までは消えていなかった）。

-- 1. set_exam_date：null ならクリア（本人の行を削除）、日付なら保存する
create or replace function public.set_exam_date(p_exam_date date)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;

  if p_exam_date is null then
    delete from public.exam_dates where user_id = auth.uid();
    return;
  end if;

  insert into public.exam_dates (user_id, exam_date)
  values (auth.uid(), p_exam_date)
  on conflict (user_id)
  do update set exam_date = excluded.exam_date, updated_at = now();
end
$$;

revoke all on function public.set_exam_date(date) from public, anon;
grant execute on function public.set_exam_date(date) to authenticated, service_role;

-- 2. exam_dates：利用者向けの書き込みのポリシーと、書き込みの権限を外す（読むポリシーは残す）
drop policy if exists "exam_dates_upsert_own" on public.exam_dates;
drop policy if exists "exam_dates_update_own" on public.exam_dates;
drop policy if exists "exam_dates_delete_own" on public.exam_dates;
revoke insert, update, delete, truncate on table public.exam_dates from anon, authenticated;

-- 3. get_exam_date：画面はテーブルから直接読むため、削除する
drop function if exists public.get_exam_date();
