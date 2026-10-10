# トレーサビリティ（要件 → 実現 → 確認）

[← README に戻る](../README.md)

[要件定義](requirements.md)の受け入れ基準（FR）と非機能要件（NFR）の1つずつについて、どこで実現し、何で確かめているかを示す。

- 状態：✅ 自動テストで確かめている／△ 一部だけ自動テストで確かめている／未 自動テストがない
- 自動テストの種類：E2E（Playwright、`e2e/`）・pgTAP（`supabase/tests/database/`）・Deno.test（`supabase/functions/`）・Vitest（`src/lib/`）
- 自動テストがない部分は、空欄にせず、確かめ方を書く。手動の確認は、その画面・処理を変えた PR で、マージの前に行う
- 機能・テスト・設定を変える PR では、この表の該当の行を同じ PR で更新する
- 「自動テストを足す予定」の行は、壊れたときの影響が大きい（お金・個人のデータ・権限）か、計算の境目があり壊れやすいもの。それ以外は、変更の少なさと自動化の費用から、手動の確認とする

## 機能要件

| ID | 状態 | 実現している場所 | 自動テスト | 自動テストがない部分・確かめ方 |
|---|---|---|---|---|
| FR-01-1 | 未 | `src/app/basics/`（認証なし） | ― | 手動：ログインせずに開き、本文と図が表示されることを確かめる（Lighthouse CI が未ログインで3ページを開いているが、表示の中身は確かめていない） |
| FR-01-2 | 未 | 各節の `*Quiz.tsx` | ― | 手動：選択肢を選び、正誤と理由が表示されることを確かめる |
| FR-02-1 | ✅ | `src/app/contents/free/FreeQuizClient.tsx`、`public/data/free/free-32.json` | E2E：free-quiz-answer.spec.ts（8件。ログインせずに実行） | ― |
| FR-02-2 | △ | `FreeQuizClient.tsx`（localStorage） | E2E：free-quiz-answer.spec.ts「次の問題に進んでから再読み込みしても…」（再読み込み後も位置が残る） | 手動：保存の中身は、ブラウザの開発者ツールで確かめる |
| FR-02-3 | ✅ | `FreeQuizClient.tsx`（`clearUnsolved`） | E2E：free-quiz-answer.spec.ts「正解していない問題は、再読み込みすると…」「…戻る・次へで表示し直すと…」 | ― |
| FR-02-4 | ✅ | `FreeQuizClient.tsx`（`reset=1`） | E2E：free-quiz-answer.spec.ts「reset=1 で開くと…」 | ― |
| FR-03-1 | ✅ | `src/app/signup/SignupForm.tsx`、Supabase Auth（メール確認なし） | E2E：core-flow.spec.ts「新規登録すると、認証確認なしでマイページに到達できる」 | ― |
| FR-03-2 | ✅ | `src/app/mypage/page.tsx`（`redirect('/login')`） | E2E：mypage-auth-guard.spec.ts「一度もログインしていなければ…」「ログアウトしたあとに…」 | ― |
| FR-03-3 | ✅ | `src/lib/safeRedirect.ts` | Vitest：safeRedirect.test.ts（10件） | ― |
| FR-03-4 | 未 | `SignupForm.tsx`・`LoginClient.tsx`（依頼）、`src/app/reset-password/` | ― | 手動：ローカルの Supabase の受信箱（Mailpit）に届いたメールのリンクから、新しいパスワードを設定できることを確かめる |
| FR-03-5 | ✅ | `src/app/login/LoginClient.tsx`（ページ全体を読み込み直して移る）、`src/lib/safeRedirect.ts` | E2E：login.spec.ts「ログインすると、マイページに移る」「移動先（?next=）を指定してログインすると…」 | ― |
| FR-04-1 | ✅ | RLS：`questions_read_free`・`read_paid_questions_with_subscription` | pgTAP：free_cannot_read_paid。E2E：paid-member.spec.ts・paid-conversion.spec.ts（契約の前は 404） | ― |
| FR-04-2 | ✅ | RLS：`read_paid_questions_with_subscription`、`has_active_subscription()` | pgTAP：paid_can_read_paid。E2E：paid-member.spec.ts・paid-conversion.spec.ts | ― |
| FR-04-3 | △ | `pick_next_question()`、`src/lib/dataLoader.ts` | pgTAP：next_question_own_progress（本人がまだ解いていない問題を返す） | 手動：分野を選んで解き、その分野の問題が出ることを確かめる |
| FR-04-4 | ✅ | `record_progress()` | pgTAP：mistakes_progress_normal_flow（解答の記録に日時が入る） | ― |
| FR-04-5 | ✅ | `record_progress()`・`record_mistake()`・`add_review_item()` | pgTAP：progress_free_cannot_record_paid・mistake_free_cannot_record_paid・review_items_free_cannot_add_paid | ― |
| FR-05-1 | ✅ | `record_mistake()` | pgTAP：mistakes_progress_normal_flow（誤答の数は送り直しを数えずに2になる） | ― |
| FR-05-2 | ✅ | `clear_mistake()` | pgTAP：mistakes_progress_normal_flow（自分の誤答が消え、他人の誤答は消えない） | ― |
| FR-05-3 | ✅ | RLS：`mk_sel`（`user_id = auth.uid()`） | pgTAP：mistakes_select_own_only（絞らずに読んでも本人の誤答だけが返り、他人の user_id を指定しても読めない）・mk_sel_authenticated（対象が authenticated だけ） | ― |
| FR-06-1 | ✅ | `add_review_item()` | pgTAP：review_items_add（追加できる、2回追加しても行は1つ） | ― |
| FR-06-2 | △ | `mark_review_item_mastered()`、`src/lib/review.ts`（`status = 'active'` だけ表示） | pgTAP：review_items_master_own（状態が mastered になる） | 手動：一覧で「復習済みにする」を押し、一覧から外れることを確かめる |
| FR-06-3 | ✅ | `mark_review_item_mastered()`（`user_id = auth.uid()`） | pgTAP：review_items_cannot_master_others | ― |
| FR-07-1 | △ | `get_study_days()`（日本時間の日付）、`StudyCalendar.tsx` | pgTAP：study_days_own_only（本人の学習日だけを返す） | 手動：回答した日にカレンダーの印が付くことを確かめる |
| FR-08-1 | ✅ | `src/lib/examCountdown.ts`（`daysLeftJST`・`formatDisplay`）、`ExamCountdown.tsx`、`set_exam_date()` | Vitest：examCountdown.test.ts（残り日数・当日・経過の表示の文、日本時間の日付の境目）。pgTAP：exam_date_save（保存） | ― |
| FR-08-2 | ✅ | `set_exam_date(null)`、`src/lib/examCountdown.ts`（`formatDisplay`） | pgTAP：exam_date_clear（受験日が消える）。Vitest：examCountdown.test.ts「試験日が未設定なら…」（消したあとの表示） | ― |
| FR-09-1 | △ | `src/lib/categoryProgress.ts`（`buildCategoryData`・`progressPercent`）、`dataLoader.ts`（`fetchUserProgress`）、`CategoryProgress.tsx` | Vitest：categoryProgress.test.ts（最新の回答が正解の問題だけを数える、同じ問題は1問と数える、大分野は小分野の合計、割合の四捨五入） | 手動：回答の記録を新しい順に並べるのは DB の問い合わせのため、マイページで、正解していた問題に不正解で答え直し、その分野の正答率が下がることを確かめる |
| FR-09-2 | △ | `src/lib/categoryProgress.ts`（`pickPreferNotCorrect`・`allCorrect`）、`dataLoader.ts`（`pickOnePreferNotCorrect`・`areAllCorrect`）、`CategoryProgress.tsx` | Vitest：categoryProgress.test.ts（まだ正解していない問題から選ぶ、すべて正解済みなら全体から選ぶ、「すべて完了」の判定） | 手動：マイページでグラフの大分野を押し、その分野の問題が開くこと、すべて正解済みの分野では再挑戦するかを確かめる表示が出ることを確かめる |
| FR-10-1 | △ | `create-checkout-session`（JWT から本人を決め、`metadata.user_id` に載せる） | Deno.test：create-checkout-session/decision.test.ts「ログイン中なら、トークンから確定したユーザーの ID…」 | 手動：決済のセッション作成は Stripe の API を呼ぶため、Stripe のテストモードで、ログインして購入し、契約がそのアカウントに付くことを確かめる |
| FR-10-2 | 未 | `src/app/checkout/CheckoutClient.tsx` | ― | 手動：ログインせずに購入画面を開き、案内の表示と、ログイン後に購入画面へ戻ることを確かめる（直近の確認：2026-09-29、本番、PR #43・#44） |
| FR-10-3 | △ | `check-guest-subscription` | Deno.test：check-guest-subscription/decision.test.ts（有効な契約を選ぶ判定） | 手動：Stripe の顧客の検索は Stripe の API を呼ぶため、Stripe のテストモードで、ログインせずに購入してから同じメールアドレスで登録し、契約が付くことを確かめる |
| FR-10-4 | ✅ | `create-checkout-session`（`PRICE_IDS`） | Deno.test：create-checkout-session/decision.test.ts「許可リストに無いpriceIdは PRICE_NOT_ALLOWED…」 | ― |
| FR-10-5 | ✅ | `create-checkout-session`（`PRICE_IDS` が空なら `PRICE_IDS_NOT_CONFIGURED`、500） | Deno.test：create-checkout-session/decision.test.ts「許可リストが空（PRICE_IDS の設定漏れ）なら…」・「PRICE_IDS をカンマで分け…」 | 本番の `PRICE_IDS` が設定されていることは、ダッシュボードで確かめる（直近の確認：2026-10-08） |
| FR-11-1 | ✅ | `stripe-webhook`（署名の確認） | E2E：paid-conversion.spec.ts「署名が正しくない通知は拒否し…」 | ― |
| FR-11-2 | ✅ | `stripe-webhook`（`stripe_events`） | E2E：paid-conversion.spec.ts「同じ通知が2回届いても…」。Deno.test：stripe-webhook/decision.test.ts（重複のとき 200 `ok (duplicate)`） | ― |
| FR-11-3 | ✅ | `stripe-webhook`（`syncFromSubscription`）、`_shared/periodEnd.ts` | E2E：paid-conversion.spec.ts「契約の通知を受けると有料会員になり…」（作成）・「解約の予約の通知を受けると反映され…」（更新）・「契約終了の通知を受けると無料会員に戻り…」（終了）。Deno.test：periodEnd.test.ts（契約終了日の選び方） | ― |
| FR-11-4 | ✅ | `_shared/stripeSync.ts`（`upsertUserProfiles`）、`_shared/userProfilePayload.ts` | E2E：paid-conversion.spec.ts「Stripe からメールアドレスを取れなくても…」。Deno.test：userProfilePayload.test.ts（値がないときは列を含めない） | ― |
| FR-12-1 | △ | `billing-portal`、`src/lib/billing.ts`（`getBillingPortalUrl`、戻り先 `/mypage`）、`src/lib/useBillingPortal.ts` | Vitest：billing.test.ts（戻り先 `/mypage` を付けて billing-portal を呼び、ポータルの URL を返す） | 呼び出しの共通の関数は Vitest：edge-functions.test.ts で確かめている。手動：ポータルの作成は Stripe の API を呼ぶため、Stripe のテストモードで、有料会員として請求情報を開き、ポータルに移って戻るとマイページに移ることを確かめる |
| FR-13-1 | ✅ | `request-account-deletion`、外部キーの `ON DELETE CASCADE` | E2E：account-deletion.spec.ts「無料会員が退会すると…」（アカウントと `user_profiles` の行が消える）。Deno.test：request-account-deletion/decision.test.ts（契約がなければ即時削除の判定） | ― |
| FR-13-2 | ✅ | `request-account-deletion`、`stripe-webhook`（契約終了の通知で削除）、`subscriptions` の外部キーの `ON DELETE SET NULL` | E2E：account-deletion.spec.ts「解約の手続きを済ませた有料会員は…」「退会を予約した有料会員は、契約終了の通知で…」（予約ではアカウントが残り、通知で削除され、契約の行は残る）・paid-member.spec.ts（未解約の有料会員には解約の案内を表示）。Deno.test：request-account-deletion/decision.test.ts（解約済みなら予約、未解約なら拒否）・stripe-webhook/decision.test.ts（予約があれば削除） | ― |
| FR-13-3 | ✅ | `cancel-account-deletion` | E2E：account-deletion.spec.ts「…退会を予約でき、取り消せる」。Deno.test：cancel-account-deletion/decision.test.ts | ― |
| FR-14-1 | 未 | `src/app/(legal)/` | ― | 手動：ログインせずに3つのページを開き、表示されることを確かめる |

## 非機能要件

| ID | 状態 | 実現している場所 | 自動テスト・監視 | 自動テストがない部分・確かめ方 |
|---|---|---|---|---|
| NFR-AV-01 | ― | Vercel・Supabase・Stripe | 監視：Better Stack（3分ごと） | 稼働率は Better Stack の記録で確かめる |
| NFR-AV-02 | ― | Vercel の Instant Rollback | ― | 手順の訓練はしていない |
| NFR-AV-03 | ― | `.github/workflows/deploy-functions.yml` | ― | 2026-10-08 に手動の実行で成功（31秒） |
| NFR-AV-04 | ― | Supabase の毎日のバックアップ | ― | 復元は計測していない |
| NFR-AV-05 | ― | Supabase の毎日のバックアップ（7日分） | ― | 2026-10-05 にダッシュボードで確認 |
| NFR-AV-06 | ― | ― | ― | 今後の課題（Storage のファイルの保管） |
| NFR-AV-07 | ― | ― | ― | 対象外（依存先の復旧に従う） |
| NFR-PE-01 | ✅ | ― | Lighthouse CI（PR ごと。LCP 4,000ms を超えたら失敗） | ― |
| NFR-PE-02 | ✅ | ― | Lighthouse CI（CLS 0.1 を超えたら失敗） | ― |
| NFR-PE-03 | ✅ | ― | Lighthouse CI（下回ったら警告） | ― |
| NFR-OM-01 | ― | 運用の決まり | ― | 運用の決まり |
| NFR-OM-02 | ― | 運用の決まり | ― | 運用の決まり |
| NFR-OM-03 | ✅ | Better Stack、`.github/workflows/webhook-health-check.yml` | 監視：Better Stack（3分ごと）・GitHub Actions（補助） | ― |
| NFR-OM-04 | ― | `@sentry/nextjs`（送る前に利用者の情報を除く） | ― | 2026-10-07 に確認用のページで、送られる中身を確認（PR #90） |
| NFR-OM-05 | ― | Better Stack・Vercel Alerts・GitHub・Stripe の通知 | ― | 通知のメールが届くことを確認済み |
| NFR-OM-06 | △ | GitHub のルールセット `main-protection`、CI | CI（PR ごと） | PR と CI の成功は運用の決まり（ルールセットで強制しているのは削除と force push の禁止だけ） |
| NFR-MG-01 | ― | ― | ― | 対象外 |
| NFR-SE-01 | ✅ | RLS・6つの書き込みの関数・権限 | pgTAP（63ファイル・104件） | ― |
| NFR-SE-02 | △ | 各 Edge Functions（JWT から本人を決める） | Deno.test：create-checkout-session/decision.test.ts（トークンから確定した ID を使う） | ほかの4つの関数（退会・予約の取り消し・ゲスト決済・請求情報）は、共通の関数 `getAuthenticatedUser` で JWT から本人を決め、本文のユーザー ID を使っていないことを、コードで確認（2026-10-09） |
| NFR-SE-03 | ― | Edge Functions の環境変数 | ― | [本番の環境変数](operations.md#本番の環境変数)の表で管理 |
| NFR-SE-04 | △ | Supabase Auth（漏えいしたパスワードの拒否） | Vitest：leakedPassword.test.ts（拒否されたときの案内） | 拒否の設定そのものは Supabase のダッシュボードの設定 |
| NFR-EN-01 | ― | Vercel（Pro）・Supabase（Pro）・Stripe | ― | 各サービスのダッシュボードで契約のプランを確認 |
| NFR-EN-02 | ✅ | ― | E2E・Lighthouse CI（Chromium） | ― |
