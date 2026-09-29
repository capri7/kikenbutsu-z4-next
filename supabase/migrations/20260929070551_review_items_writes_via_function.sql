-- 復習リスト（user_review_items）の書き込みを関数だけにする

-- 1. status の既定値の誤り（引用符ごと 'active' が入る）を直す
alter table public.user_review_items alter column status set default 'active';

-- 2. 書き込みのポリシーを削除する（読み取りの select.own は残す）
drop policy "user_review_items.insert.own" on public.user_review_items;
drop policy "user_review_items.update.own" on public.user_review_items;
drop policy "user_review_items.delete.own" on public.user_review_items;

-- 3. 利用者から書き込みの権限を外す
revoke insert, update, delete, truncate, references, trigger
  on public.user_review_items from anon, authenticated;

-- 4. 追加：読める問題だけを受け付け、題名・小分類・リンク先は問題から決める
create function public.add_review_item(p_question_id text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid uuid := auth.uid();
  v_q record;
begin
  if v_uid is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;

  select q.id, q.title, q.subcategory_id, q.is_paid
    into v_q
    from public.questions q
   where q.id = p_question_id;

  -- 存在しない問題と、有料会員でない人の有料の問題は受け付けない
  if not found or (coalesce(v_q.is_paid, true) and not public.has_active_subscription()) then
    raise exception 'question not available' using errcode = '42501';
  end if;

  insert into public.user_review_items
    (user_id, question_id, title, subcategory_id, content_path, status)
  values
    (v_uid, v_q.id, v_q.title, v_q.subcategory_id, '/contents/' || v_q.id, 'active')
  on conflict (user_id, question_id) where status = 'active'
  do update set
    title = excluded.title,
    subcategory_id = excluded.subcategory_id,
    content_path = excluded.content_path;
end;
$$;

-- 5. 「覚えた」：本人の行だけを mastered にする
create function public.mark_review_item_mastered(p_id uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null then
    raise exception 'not authenticated' using errcode = '42501';
  end if;

  update public.user_review_items
     set status = 'mastered',
         last_reviewed_at = now()
   where id = p_id
     and user_id = auth.uid();
end;
$$;

-- 6. 実行の権限：ログインした利用者だけ
revoke execute on function public.add_review_item(text) from public, anon;
revoke execute on function public.mark_review_item_mastered(uuid) from public, anon;
grant execute on function public.add_review_item(text) to authenticated;
grant execute on function public.mark_review_item_mastered(uuid) to authenticated;
