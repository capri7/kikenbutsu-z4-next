-- 外部キーの列に索引があること（Supabase の公式の文書「Lint 0001_unindexed_foreign_keys」）
-- questions・subcategories を削除したとき（on delete cascade）に、参照している行を表を全部読まずに探せるようにする
begin;
create extension if not exists pgtap with schema extensions;
select plan(5);

select has_index('public', 'mistake_attempts', 'mistake_attempts_question_id_idx', array['question_id'],
  'mistake_attempts.question_id に索引がある');
select has_index('public', 'mistakes', 'mistakes_question_id_idx', array['question_id'],
  'mistakes.question_id に索引がある');
select has_index('public', 'mistakes', 'mistakes_subcategory_id_idx', array['subcategory_id'],
  'mistakes.subcategory_id に索引がある');
select has_index('public', 'user_review_items', 'user_review_items_question_id_idx', array['question_id'],
  'user_review_items.question_id に索引がある');
select has_index('public', 'user_review_items', 'user_review_items_subcategory_id_idx', array['subcategory_id'],
  'user_review_items.subcategory_id に索引がある');

select * from finish();
rollback;
