-- 誤答と解答の記録（mistakes・mistake_attempts・user_progress）の書き込みを関数だけにする

-- 1. 書き込みのポリシーを削除する（読み取りの mk_sel・ma_sel・user_progress_select_own は残す）
--    *_service_full は service_role 向けだが、service_role はもともと RLS を通らないため効いていない
drop policy "mk_ins" on public.mistakes;
drop policy "mk_upd" on public.mistakes;
drop policy "mistakes_service_full" on public.mistakes;
drop policy "ma_ins" on public.mistake_attempts;
drop policy "user_progress_insert_own" on public.user_progress;
drop policy "user_progress_update_own" on public.user_progress;
drop policy " user_progress_service_full" on public.user_progress;

-- 2. 利用者から書き込みの権限を外す
revoke insert, update, delete, truncate, references, trigger
  on public.mistakes, public.mistake_attempts, public.user_progress
  from anon, authenticated;

-- 3. 解答の記録：読める問題だけ受け付け、解答日時はサーバーで決める
drop function public.record_progress(text, boolean, timestamp with time zone, uuid);

create function public.record_progress(
  p_question_id text,
  p_is_correct boolean,
  p_client_nonce uuid default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := auth.uid();
  v_nonce uuid := coalesce(p_client_nonce, gen_random_uuid());
  v_is_paid boolean;
begin
  if v_user is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;

  select q.is_paid into v_is_paid
    from public.questions q
   where q.id = p_question_id;

  if not found or (coalesce(v_is_paid, true) and not public.has_active_subscription()) then
    raise exception 'question not available' using errcode = '42501';
  end if;

  -- 同じ nonce の送り直しは、1件として扱う
  insert into public.user_progress (user_id, question_id, client_nonce, answered_at, is_correct)
  values (v_user, p_question_id, v_nonce, now(), p_is_correct)
  on conflict (user_id, question_id, client_nonce) do nothing;
end;
$$;

-- 4. 誤答の記録：読める問題だけ受け付け、小分類は問題から決める
drop function public.record_mistake(text, uuid, uuid);

create function public.record_mistake(
  p_question_id text,
  p_client_nonce uuid default null
)
returns public.mistakes
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := auth.uid();
  v_nonce uuid := coalesce(p_client_nonce, gen_random_uuid());
  v_is_paid boolean;
  v_subcategory_id uuid;
  v_inserted boolean;
  v_result public.mistakes%rowtype;
begin
  if v_user is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;

  select q.is_paid, q.subcategory_id into v_is_paid, v_subcategory_id
    from public.questions q
   where q.id = p_question_id;

  if not found or (coalesce(v_is_paid, true) and not public.has_active_subscription()) then
    raise exception 'question not available' using errcode = '42501';
  end if;

  -- 同じ nonce の送り直しは、数を増やさない
  insert into public.mistake_attempts (user_id, question_id, client_nonce)
  values (v_user, p_question_id, v_nonce)
  on conflict do nothing
  returning true into v_inserted;

  if coalesce(v_inserted, false) then
    insert into public.mistakes as m
      (user_id, question_id, incorrect_count, last_seen_at, client_nonce, subcategory_id)
    values
      (v_user, p_question_id, 1, now(), v_nonce, v_subcategory_id)
    on conflict (user_id, question_id)
    do update set
      incorrect_count = m.incorrect_count + 1,
      last_seen_at = now(),
      subcategory_id = excluded.subcategory_id
    returning * into v_result;
  else
    select * into v_result
      from public.mistakes
     where user_id = v_user
       and question_id = p_question_id;

    -- 送り直しの間に消去されていた場合は、1件目として作り直す（これまでと同じ動き）
    if not found then
      insert into public.mistakes
        (user_id, question_id, incorrect_count, last_seen_at, client_nonce, subcategory_id)
      values
        (v_user, p_question_id, 1, now(), v_nonce, v_subcategory_id)
      returning * into v_result;
    end if;
  end if;

  return v_result;
end;
$$;

-- 5. 誤答の消去：search_path を固定する（本人の行だけ消す動きは変えない）
create or replace function public.clear_mistake(p_question_id text)
returns void
language sql
security definer
set search_path = ''
as $$
  delete from public.mistakes
   where user_id = auth.uid()
     and question_id = p_question_id;
$$;

-- 6. 実行の権限：ログインした利用者だけ
revoke execute on function public.record_progress(text, boolean, uuid) from public, anon;
revoke execute on function public.record_mistake(text, uuid) from public, anon;
revoke execute on function public.clear_mistake(text) from public, anon;
grant execute on function public.record_progress(text, boolean, uuid) to authenticated;
grant execute on function public.record_mistake(text, uuid) to authenticated;
grant execute on function public.clear_mistake(text) to authenticated;
