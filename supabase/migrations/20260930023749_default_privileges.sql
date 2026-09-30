-- public に postgres が新しく作るテーブル・シーケンス・関数に、anon・authenticated の権限が自動で付かないようにする
-- （今ある物の権限は変わらない。読ませたい物・実行させたい物は、migration で grant を明示して付ける）

-- 1. テーブル
alter default privileges for role postgres in schema public
  revoke all on tables from anon, authenticated;

-- 2. シーケンス
alter default privileges for role postgres in schema public
  revoke all on sequences from anon, authenticated;

-- 3. 関数（anon・authenticated に付く分）
alter default privileges for role postgres in schema public
  revoke execute on functions from anon, authenticated;

-- 4. 関数（PUBLIC に付く分）
--    PostgreSQL は関数を作ると PUBLIC に実行の権限を付ける。これはスキーマ単位では外せないため、
--    スキーマを指定せずに外す（postgres が作る関数すべてが対象）
alter default privileges for role postgres
  revoke execute on functions from public;
