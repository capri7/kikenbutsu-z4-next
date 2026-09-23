-- ローカル開発・E2E テスト専用の架空データ。
-- 本番の教材や会員のデータは含めない（公開リポジトリのため）。
-- 形式は本番の問題（fields = ["description"]、headers = [""]、選択肢5つ）に合わせている。
-- supabase start の初回と、supabase db reset のたびに、migrations の後で実行される。

insert into public.categories (id, name, slug, "order") values
  ('00000000-0000-4000-8000-000000000001', 'E2Eテスト用の大分野', 'e2e-category', 1)
on conflict (id) do nothing;

insert into public.subcategories (id, name, slug, "order", category_id) values
  ('00000000-0000-4000-8000-000000000101', 'E2Eテスト用の小分野', 'e2e-subcategory', 1,
   '00000000-0000-4000-8000-000000000001')
on conflict (id) do nothing;

insert into public.questions
  (id, subcategory_id, title, question, choices, answer, "order", is_paid,
   explanation, feedback_mode, fields, headers)
values
  ('E2E_Test_001', '00000000-0000-4000-8000-000000000101', 'E2Eテスト用の問題1',
   'E2Eテスト用の問題1です。正しいものを選んでください。',
   '[{"name": "1", "description": "選択肢1の本文"},
     {"name": "2", "description": "選択肢2の本文"},
     {"name": "3", "description": "選択肢3の本文"},
     {"name": "4", "description": "選択肢4の本文"},
     {"name": "5", "description": "選択肢5の本文"}]',
   2, 1, false,
   '["選択肢1の解説", "選択肢2の解説", "選択肢3の解説", "選択肢4の解説", "選択肢5の解説"]',
   'normal', '["description"]', '[""]'),
  ('E2E_Test_002', '00000000-0000-4000-8000-000000000101', 'E2Eテスト用の問題2',
   'E2Eテスト用の問題2です。正しいものを選んでください。',
   '[{"name": "1", "description": "選択肢1の本文"},
     {"name": "2", "description": "選択肢2の本文"},
     {"name": "3", "description": "選択肢3の本文"},
     {"name": "4", "description": "選択肢4の本文"},
     {"name": "5", "description": "選択肢5の本文"}]',
   1, 2, false,
   '["選択肢1の解説", "選択肢2の解説", "選択肢3の解説", "選択肢4の解説", "選択肢5の解説"]',
   'normal', '["description"]', '[""]'),
  ('E2E_Test_003', '00000000-0000-4000-8000-000000000101', 'E2Eテスト用の問題3',
   'E2Eテスト用の問題3です。誤っているものを選んでください。',
   '[{"name": "1", "description": "選択肢1の本文"},
     {"name": "2", "description": "選択肢2の本文"},
     {"name": "3", "description": "選択肢3の本文"},
     {"name": "4", "description": "選択肢4の本文"},
     {"name": "5", "description": "選択肢5の本文"}]',
   3, 3, false,
   '["選択肢1の解説", "選択肢2の解説", "選択肢3の解説", "選択肢4の解説", "選択肢5の解説"]',
   'negation', '["description"]', '[""]')
on conflict (id) do nothing;