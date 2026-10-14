-- 外部キーの列に索引を足す（Supabase の公式の文書「Database Advisor: Lint 0001_unindexed_foreign_keys」）。
-- 5 つとも questions・subcategories を参照し、on delete cascade が付いている。索引がないと、問題や分野を削除したときに、
-- 参照している行を探すために表を全部読む。
-- concurrently は使わない（migration はトランザクションの中で動き、concurrently はその中では使えない。PostgreSQL の公式の文書「CREATE INDEX」）。
-- 表はどれも 1 MB 未満（2026-10-14 時点）で、作っている間に書き込みを待たせる時間は短い。
create index if not exists mistake_attempts_question_id_idx on public.mistake_attempts (question_id);
create index if not exists mistakes_question_id_idx on public.mistakes (question_id);
create index if not exists mistakes_subcategory_id_idx on public.mistakes (subcategory_id);
create index if not exists user_review_items_question_id_idx on public.user_review_items (question_id);
create index if not exists user_review_items_subcategory_id_idx on public.user_review_items (subcategory_id);
