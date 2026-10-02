-- PR 5b（contract）：p_user_id を受け取る古い関数を削除する
-- アプリは PR 5a（#60）で、auth.uid() で本人を決める新しい関数に切り替え済み（2026-10-02 に本番で確認）
drop function public.get_study_days(uuid);
drop function public.pick_next_question(uuid, boolean, uuid, uuid);
