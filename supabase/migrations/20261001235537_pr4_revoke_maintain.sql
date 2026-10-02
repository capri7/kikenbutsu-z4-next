-- PR 4 の追加：anon・authenticated の MAINTAIN を外す
-- MAINTAIN は VACUUM・ANALYZE・REINDEX・LOCK TABLE などの保守の操作の権限で、アプリからは使わない
REVOKE MAINTAIN ON ALL TABLES IN SCHEMA public FROM anon, authenticated;
