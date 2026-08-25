

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pg_cron" WITH SCHEMA "pg_catalog";






CREATE SCHEMA IF NOT EXISTS "maintenance";


ALTER SCHEMA "maintenance" OWNER TO "postgres";


COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";






CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";






CREATE OR REPLACE FUNCTION "maintenance"."delete_stale_unverified"("days_keep" integer DEFAULT 14) RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public', 'auth', 'extensions', 'pg_temp'
    AS $$
declare
  r record;
begin
  for r in
    select u.id
    from auth.users u
    where u.email_confirmed_at is null
      and u.created_at < now() - make_interval(days => days_keep)
      and not exists (select 1 from public.user_progress p where p.user_id = u.id)
      and not exists (select 1 from public.user_active_subscriptions s where s.user_id = u.id)
  loop
    perform auth.delete_user(r.id);
  end loop;
end;
$$;


ALTER FUNCTION "maintenance"."delete_stale_unverified"("days_keep" integer) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."clear_mistake"("p_question_id" "text") RETURNS "void"
    LANGUAGE "sql" SECURITY DEFINER
    AS $$
  delete from public.mistakes
   where user_id    = auth.uid()
     and question_id = p_question_id;
$$;


ALTER FUNCTION "public"."clear_mistake"("p_question_id" "text") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."ensure_answered_at"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
begin
  if NEW.answered_at is null then
    NEW.answered_at := now();
  end if;
  return NEW;
end;
$$;


ALTER FUNCTION "public"."ensure_answered_at"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_exam_date"() RETURNS TABLE("exam_date" "date", "updated_at" timestamp with time zone)
    LANGUAGE "sql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
  select e.exam_date, e.updated_at
  from public.exam_dates e
  where e.user_id = auth.uid();
$$;


ALTER FUNCTION "public"."get_exam_date"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_free_progress_summary"() RETURNS TABLE("user_id" "uuid", "free_total" integer, "latest_wrong_count" integer, "progress_correct_count" integer)
    LANGUAGE "sql" STABLE
    SET "search_path" TO 'public'
    AS $$
  with free_set as (
    select count(*)::int as free_total
    from public.questions
    where is_paid = false
  ),
  latest as (
    select question_id, is_correct
    from public.user_latest_free_v2
    where user_id = auth.uid()
  )
  select auth.uid() as user_id,
         fs.free_total,
         coalesce(sum(case when l.is_correct = false then 1 else 0 end),0)::int as latest_wrong_count,
         coalesce(sum(case when l.is_correct = true  then 1 else 0 end),0)::int as progress_correct_count
  from free_set fs
  left join latest l on true
  group by fs.free_total;
$$;


ALTER FUNCTION "public"."get_free_progress_summary"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_free_progress_summary"("uid" "uuid") RETURNS TABLE("user_id" "uuid", "free_total" integer, "latest_wrong_count" integer, "progress_correct_count" integer)
    LANGUAGE "sql" STABLE SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
  with free_set as (
    select count(*)::int as free_total
    from public.questions
    where is_paid = false
  ),
  latest as (
    select question_id, is_correct
    from public.user_latest_free_v2
    where user_id = uid
  )
  select uid                                      as user_id,
         fs.free_total                            as free_total,
         coalesce(sum(case when l.is_correct=false then 1 else 0 end),0)::int as latest_wrong_count,
         coalesce(sum(case when l.is_correct=true  then 1 else 0 end),0)::int as progress_correct_count
  from free_set fs
  left join latest l on true
  group by uid, fs.free_total;
$$;


ALTER FUNCTION "public"."get_free_progress_summary"("uid" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_mypage_progress"("uid" "uuid") RETURNS TABLE("slug" "text", "name" "text", "total_questions" integer, "attempted" integer, "solved" integer)
    LANGUAGE "sql" STABLE
    AS $$
  SELECT
    s.slug,
    s.name,
    t.total_questions,
    COALESCE(p.attempted, 0) AS attempted,
    COALESCE(p.solved, 0)    AS solved
  FROM v_subcategory_totals t
  JOIN subcategories s ON s.id = t.id
  LEFT JOIN v_user_subcategory_progress p
    ON p.user_id = uid
   AND p.subcategory_id = s.id
  ORDER BY s."order";
$$;


ALTER FUNCTION "public"."get_mypage_progress"("uid" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."get_study_days"("p_user_id" "uuid") RETURNS TABLE("study_date" "date")
    LANGUAGE "sql" STABLE
    AS $$
  select distinct
    (coalesce(answered_at, updated_at) at time zone 'Asia/Tokyo')::date as study_date
  from user_progress
  where user_id = p_user_id
$$;


ALTER FUNCTION "public"."get_study_days"("p_user_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'pg_catalog', 'public'
    AS $$
begin
  insert into public.user_profiles (user_id, email)
  values (new.id, new.email);
  return new;
end;
$$;


ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."has_active_subscription"("uid" "uuid") RETURNS boolean
    LANGUAGE "sql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
  select exists (
    select 1
    from user_profiles up
    where up.user_id = uid
      and (
        -- 期限が未来なら OK（少しだけ猶予をつける）
        (up.current_period_end is not null
         and up.current_period_end > now() - interval '60 seconds')
        or
        -- 念のためステータスでも判定
        lower(coalesce(up.subscription_status, '')) in ('active','trialing','past_due')
      )
  );
$$;


ALTER FUNCTION "public"."has_active_subscription"("uid" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."mistakes_protect_immutable"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    AS $$
begin
  if new.user_id      is distinct from old.user_id      then
    raise exception 'user_id is immutable';
  end if;
  if new.question_id  is distinct from old.question_id  then
    raise exception 'question_id is immutable';
  end if;
  if new.client_nonce is distinct from old.client_nonce then
    raise exception 'client_nonce is immutable';
  end if;
  return new;
end
$$;


ALTER FUNCTION "public"."mistakes_protect_immutable"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean) RETURNS TABLE("id" "text")
    LANGUAGE "sql" STABLE
    SET "search_path" TO 'public'
    AS $$
  select q.id
  from public.questions q
  where (p_include_paid or q.is_paid = false)
    and not exists (
      select 1
      from public.user_progress up
      where up.user_id = p_user_id
        and up.question_id = q.id
    )
  order by random()
  limit 1
$$;


ALTER FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean) OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean, "p_subcategory_id" "uuid" DEFAULT NULL::"uuid", "p_category_id" "uuid" DEFAULT NULL::"uuid") RETURNS TABLE("id" "text")
    LANGUAGE "sql" STABLE
    SET "search_path" TO 'public'
    AS $$
  select q.id
  from public.questions q
  left join public.subcategories s on s.id = q.subcategory_id
  where (p_include_paid or q.is_paid = false)
    and (p_subcategory_id is null or q.subcategory_id = p_subcategory_id)
    and (p_category_id is null or s.category_id = p_category_id)
    and not exists (
      select 1
      from public.user_progress up
      where up.user_id = p_user_id
        and up.question_id = q.id
    )
  order by random()
  limit 1
$$;


ALTER FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean, "p_subcategory_id" "uuid", "p_category_id" "uuid") OWNER TO "postgres";

SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."mistakes" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "question_id" "text" NOT NULL,
    "incorrect_count" integer DEFAULT 1 NOT NULL,
    "last_seen_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "client_nonce" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "subcategory_id" "uuid"
);


ALTER TABLE "public"."mistakes" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."record_mistake"("p_question_id" "text", "p_client_nonce" "uuid" DEFAULT NULL::"uuid", "p_subcategory_id" "uuid" DEFAULT NULL::"uuid") RETURNS "public"."mistakes"
    LANGUAGE "plpgsql"
    SET "search_path" TO 'public'
    AS $$
declare
  v_user   uuid := auth.uid();
  v_nonce  uuid := coalesce(p_client_nonce, gen_random_uuid());
  inserted boolean := false;
  result   public.mistakes%rowtype;
begin
  if v_user is null then
    raise exception 'auth.uid() is null';
  end if;

  insert into public.mistake_attempts(user_id, question_id, client_nonce)
  values (v_user, p_question_id, v_nonce)
  on conflict do nothing
  returning true into inserted;

  if inserted then
    insert into public.mistakes as m (
      id, user_id, question_id, incorrect_count, last_seen_at, client_nonce, subcategory_id
    )
    values (gen_random_uuid(), v_user, p_question_id, 1, now(), v_nonce, p_subcategory_id)
    on conflict (user_id, question_id)
    do update set incorrect_count = m.incorrect_count + 1,
                 last_seen_at    = now(),
                 subcategory_id  = coalesce(m.subcategory_id, p_subcategory_id)
    returning * into result;
  else
    perform 1
      from public.mistake_attempts
     where user_id = v_user
       and question_id = p_question_id
       and client_nonce = v_nonce
     for share;

    select * into result
      from public.mistakes
     where user_id = v_user
       and question_id = p_question_id
     limit 1;

    if result is null then
      insert into public.mistakes as m (
        id, user_id, question_id, incorrect_count, last_seen_at, client_nonce, subcategory_id
      )
      values (gen_random_uuid(), v_user, p_question_id, 1, now(), v_nonce, p_subcategory_id)
      on conflict (user_id, question_id)
      do update set incorrect_count = m.incorrect_count + 1,
                   last_seen_at    = now(),
                   subcategory_id  = coalesce(m.subcategory_id, p_subcategory_id)
      returning * into result;
    end if;
  end if;

  return result;
end $$;


ALTER FUNCTION "public"."record_mistake"("p_question_id" "text", "p_client_nonce" "uuid", "p_subcategory_id" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."record_progress"("p_question_id" "text", "p_is_correct" boolean, "p_answered_at" timestamp with time zone DEFAULT "now"(), "p_client_nonce" "uuid" DEFAULT NULL::"uuid") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
declare
  v_user  uuid := auth.uid();
  v_nonce uuid := coalesce(p_client_nonce, gen_random_uuid());
begin
  if v_user is null then
    raise exception 'auth.uid() is null';
  end if;

  -- 進捗のみ（mistakes には触れない）
  insert into public.user_progress as up
    (user_id, question_id, client_nonce, answered_at, is_correct)
  values
    (v_user,  p_question_id, v_nonce,     p_answered_at, p_is_correct)
  on conflict (user_id, question_id, client_nonce)
  do update set
    answered_at = excluded.answered_at,
    is_correct  = excluded.is_correct;
end $$;


ALTER FUNCTION "public"."record_progress"("p_question_id" "text", "p_is_correct" boolean, "p_answered_at" timestamp with time zone, "p_client_nonce" "uuid") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."set_exam_date"("p_exam_date" "date") RETURNS "void"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;

  insert into public.exam_dates(user_id, exam_date)
  values (auth.uid(), p_exam_date)
  on conflict (user_id)
  do update set exam_date = excluded.exam_date, updated_at = now();
end $$;


ALTER FUNCTION "public"."set_exam_date"("p_exam_date" "date") OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."set_updated_at"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    SET "search_path" TO 'pg_catalog', 'public'
    AS $$
begin
  new.updated_at = now();
  return new;
end;
$$;


ALTER FUNCTION "public"."set_updated_at"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."touch_updated_at"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    SET "search_path" TO 'pg_catalog', 'public'
    AS $$
begin
  new.updated_at := timezone('utc', now()); -- もしくは now()
  return new;
end;
$$;


ALTER FUNCTION "public"."touch_updated_at"() OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."update_streak_on_progress"() RETURNS "trigger"
    LANGUAGE "plpgsql"
    SET "search_path" TO 'pg_catalog', 'public'
    AS $$
declare
  today date := (now() at time zone 'Asia/Tokyo')::date;
begin
  update public.user_profiles up
  set streak_days = case
      when up.last_active_date is null then 1
      when up.last_active_date = today then up.streak_days            -- 同日は据え置き
      when (today - up.last_active_date) = 1 then up.streak_days + 1  -- 連続
      else 1                                                          -- 途切れ
    end,
    last_active_date = today
  where up.user_id = NEW.user_id;
  return NEW;
end;
$$;


ALTER FUNCTION "public"."update_streak_on_progress"() OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."categories" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "name" "text",
    "slug" "text",
    "order" integer DEFAULT 0,
    "created_at" timestamp with time zone DEFAULT ("now"() AT TIME ZONE 'utc'::"text"),
    "updated_at" timestamp with time zone DEFAULT ("now"() AT TIME ZONE 'utc'::"text")
);


ALTER TABLE "public"."categories" OWNER TO "postgres";


COMMENT ON TABLE "public"."categories" IS 'カテゴリー（分野）を記録するテーブル';



CREATE TABLE IF NOT EXISTS "public"."exam_dates" (
    "user_id" "uuid" NOT NULL,
    "exam_date" "date" NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."exam_dates" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."mistake_attempts" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" NOT NULL,
    "question_id" "text" NOT NULL,
    "client_nonce" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."mistake_attempts" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."questions" (
    "id" "text" NOT NULL,
    "subcategory_id" "uuid" NOT NULL,
    "question" "text",
    "choices" "jsonb",
    "answer" integer NOT NULL,
    "order" integer,
    "is_paid" boolean,
    "user_id" "uuid" DEFAULT "auth"."uid"(),
    "created_at" timestamp with time zone DEFAULT ("now"() AT TIME ZONE 'utc'::"text"),
    "updated_at" timestamp with time zone DEFAULT ("now"() AT TIME ZONE 'utc'::"text"),
    "hint" "text",
    "difficulty" "text",
    "tags" "jsonb",
    "version" "date",
    "explanation" "jsonb",
    "title" "text",
    "fields" "jsonb",
    "headers" "jsonb",
    "feedback_mode" "text" DEFAULT 'normal'::"text" NOT NULL,
    "image" "text",
    "statement_explanations" "jsonb",
    CONSTRAINT "chk_questions_explanation_plaintext" CHECK ((("explanation" IS NULL) OR (("jsonb_typeof"("explanation") = 'array'::"text") AND (NOT "jsonb_path_exists"("explanation", '$[*]?(@ like_regex "<\\s*/?[A-Za-z][^>]*>" flag "i")'::"jsonpath"))))),
    CONSTRAINT "chk_questions_hint_plaintext" CHECK ((("hint" IS NULL) OR ("hint" !~* '<\\s*/?[A-Za-z][^>]*>'::"text"))),
    CONSTRAINT "chk_questions_question_plaintext" CHECK (("question" !~* '<\\s*/?[A-Za-z][^>]*>'::"text")),
    CONSTRAINT "questions_image_check" CHECK (("length"("image") <= 255))
);


ALTER TABLE "public"."questions" OWNER TO "postgres";


COMMENT ON TABLE "public"."questions" IS '練習問題';



COMMENT ON COLUMN "public"."questions"."id" IS '練習問題のid';



COMMENT ON COLUMN "public"."questions"."answer" IS '答え';



CREATE TABLE IF NOT EXISTS "public"."stripe_events" (
    "id" "text" NOT NULL,
    "type" "text" NOT NULL,
    "received_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "livemode" boolean DEFAULT false NOT NULL,
    "payload" "jsonb" DEFAULT '{}'::"jsonb" NOT NULL
);

ALTER TABLE ONLY "public"."stripe_events" FORCE ROW LEVEL SECURITY;


ALTER TABLE "public"."stripe_events" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."subcategories" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "name" "text" NOT NULL,
    "slug" "text" NOT NULL,
    "order" integer DEFAULT 0 NOT NULL,
    "category_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL
);


ALTER TABLE "public"."subcategories" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."subscriptions" (
    "user_id" "uuid" DEFAULT "auth"."uid"(),
    "created_at" timestamp with time zone DEFAULT "now"(),
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "stripe_customer_id" "text",
    "stripe_subscription_id" "text",
    "status" "text",
    "current_period_end" timestamp with time zone,
    "livemode" boolean,
    "deletion_requested" boolean DEFAULT false NOT NULL
);


ALTER TABLE "public"."subscriptions" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."user_progress" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "user_id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "question_id" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "answered_at" timestamp with time zone DEFAULT "now"(),
    "is_correct" boolean,
    "client_nonce" "uuid"
);

ALTER TABLE ONLY "public"."user_progress" FORCE ROW LEVEL SECURITY;


ALTER TABLE "public"."user_progress" OWNER TO "postgres";


COMMENT ON TABLE "public"."user_progress" IS '学習進捗';



CREATE OR REPLACE VIEW "public"."user_latest_free_v2" WITH ("security_invoker"='true') AS
 WITH "latest" AS (
         SELECT DISTINCT ON ("up"."user_id", "up"."question_id") "up"."user_id",
            "up"."question_id",
            "up"."is_correct",
            "up"."answered_at"
           FROM ("public"."user_progress" "up"
             JOIN "public"."questions" "q" ON (("q"."id" = "up"."question_id")))
          WHERE ("q"."is_paid" = false)
          ORDER BY "up"."user_id", "up"."question_id", "up"."answered_at" DESC
        )
 SELECT "user_id",
    "question_id",
    "is_correct",
    "answered_at"
   FROM "latest";


ALTER VIEW "public"."user_latest_free_v2" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."user_profiles" (
    "user_id" "uuid" NOT NULL,
    "email" "text",
    "stripe_customer_id" "text",
    "subscription_status" "text" DEFAULT 'none'::"text",
    "current_period_end" timestamp with time zone,
    "streak_days" integer DEFAULT 0 NOT NULL,
    "last_active_date" "date",
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "now"() NOT NULL,
    CONSTRAINT "user_profiles_subscription_status_check" CHECK (("subscription_status" = ANY (ARRAY['active'::"text", 'trialing'::"text", 'past_due'::"text", 'canceled'::"text", 'incomplete'::"text", 'incomplete_expired'::"text", 'unpaid'::"text", 'none'::"text"])))
);


ALTER TABLE "public"."user_profiles" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."user_review_items" (
    "id" "uuid" DEFAULT "gen_random_uuid"() NOT NULL,
    "user_id" "uuid" DEFAULT "auth"."uid"(),
    "question_id" "text",
    "title" "text",
    "content_path" "text",
    "status" "text" DEFAULT '''active'''::"text",
    "created_at" timestamp with time zone DEFAULT ("now"() AT TIME ZONE 'utc'::"text") NOT NULL,
    "last_reviewed_at" timestamp with time zone,
    "subcategory_id" "uuid",
    CONSTRAINT "user_review_items_status_chk" CHECK (("status" = ANY (ARRAY['active'::"text", 'mastered'::"text"])))
);


ALTER TABLE "public"."user_review_items" OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."user_wrong_latest_all" WITH ("security_invoker"='true') AS
 SELECT DISTINCT ON ("user_id", "question_id") "user_id",
    "question_id",
    "answered_at"
   FROM "public"."user_progress"
  WHERE ("is_correct" = false)
  ORDER BY "user_id", "question_id", "answered_at" DESC;


ALTER VIEW "public"."user_wrong_latest_all" OWNER TO "postgres";


CREATE OR REPLACE VIEW "public"."user_wrong_latest_free_v2" WITH ("security_invoker"='true') AS
 SELECT "user_id",
    "question_id",
    "is_correct",
    "answered_at"
   FROM "public"."user_latest_free_v2"
  WHERE ("is_correct" = false);


ALTER VIEW "public"."user_wrong_latest_free_v2" OWNER TO "postgres";


ALTER TABLE ONLY "public"."categories"
    ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."exam_dates"
    ADD CONSTRAINT "exam_dates_pkey" PRIMARY KEY ("user_id");



ALTER TABLE ONLY "public"."mistake_attempts"
    ADD CONSTRAINT "mistake_attempts_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."mistake_attempts"
    ADD CONSTRAINT "mistake_attempts_user_id_question_id_client_nonce_key" UNIQUE ("user_id", "question_id", "client_nonce");



ALTER TABLE ONLY "public"."mistakes"
    ADD CONSTRAINT "mistakes_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."questions"
    ADD CONSTRAINT "questions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."stripe_events"
    ADD CONSTRAINT "stripe_events_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."subcategories"
    ADD CONSTRAINT "subcategories_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."subcategories"
    ADD CONSTRAINT "subcategories_slug_key" UNIQUE ("slug");



ALTER TABLE ONLY "public"."subscriptions"
    ADD CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."subscriptions"
    ADD CONSTRAINT "subscriptions_stripe_subscription_id_key" UNIQUE ("stripe_subscription_id");



ALTER TABLE ONLY "public"."mistakes"
    ADD CONSTRAINT "uq_mistakes_user_question" UNIQUE ("user_id", "question_id");



ALTER TABLE ONLY "public"."user_profiles"
    ADD CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("user_id");



ALTER TABLE ONLY "public"."user_progress"
    ADD CONSTRAINT "user_progress_pkey" PRIMARY KEY ("id");



ALTER TABLE ONLY "public"."user_review_items"
    ADD CONSTRAINT "user_review_items_pkey" PRIMARY KEY ("id");



CREATE INDEX "idx_progress_user_recent" ON "public"."user_progress" USING "btree" ("user_id", "answered_at" DESC NULLS LAST, "updated_at" DESC NULLS LAST, "id" DESC);



CREATE INDEX "idx_questions_by_sub" ON "public"."questions" USING "btree" ("subcategory_id", "id");



CREATE INDEX "idx_questions_free_by_sub" ON "public"."questions" USING "btree" ("subcategory_id", "id") WHERE ("is_paid" = false);



CREATE INDEX "idx_questions_is_paid_id" ON "public"."questions" USING "btree" ("is_paid", "id");



CREATE INDEX "idx_questions_sub_paid" ON "public"."questions" USING "btree" ("subcategory_id", "is_paid", "id");



CREATE INDEX "idx_questions_subcategory_order_id" ON "public"."questions" USING "btree" ("subcategory_id", "order", "id");



CREATE INDEX "idx_subcategories_category_order" ON "public"."subcategories" USING "btree" ("category_id", "order");



CREATE INDEX "idx_up_user_q_time" ON "public"."user_progress" USING "btree" ("user_id", "question_id", "answered_at" DESC, "updated_at" DESC);



CREATE INDEX "idx_user_profiles_sub_status" ON "public"."user_profiles" USING "btree" ("subscription_status");



CREATE INDEX "idx_user_progress_q" ON "public"."user_progress" USING "btree" ("question_id");



CREATE INDEX "idx_user_progress_user" ON "public"."user_progress" USING "btree" ("user_id");



CREATE INDEX "idx_user_review_user_status" ON "public"."user_review_items" USING "btree" ("user_id", "status", "last_reviewed_at", "created_at");



CREATE INDEX "ix_subscriptions_customer_id" ON "public"."subscriptions" USING "btree" ("stripe_customer_id");



CREATE INDEX "ix_subscriptions_livemode" ON "public"."subscriptions" USING "btree" ("livemode");



CREATE INDEX "ix_subscriptions_user_id" ON "public"."subscriptions" USING "btree" ("user_id");



CREATE INDEX "mistakes_user_last_seen_idx" ON "public"."mistakes" USING "btree" ("user_id", "last_seen_at" DESC);



CREATE INDEX "stripe_events_received_at_idx" ON "public"."stripe_events" USING "btree" ("received_at" DESC);



CREATE UNIQUE INDEX "uidx_progress_user_qid_nonce" ON "public"."user_progress" USING "btree" ("user_id", "question_id", "client_nonce");



CREATE UNIQUE INDEX "uq_progress_user_nonce" ON "public"."user_progress" USING "btree" ("user_id", "client_nonce") WHERE ("client_nonce" IS NOT NULL);



CREATE UNIQUE INDEX "uq_user_review_active" ON "public"."user_review_items" USING "btree" ("user_id", "question_id") WHERE ("status" = 'active'::"text");



CREATE UNIQUE INDEX "user_profiles_stripe_customer_uidx" ON "public"."user_profiles" USING "btree" ("stripe_customer_id") WHERE ("stripe_customer_id" IS NOT NULL);



CREATE UNIQUE INDEX "ux_user_profiles_email_exact" ON "public"."user_profiles" USING "btree" ("email") WHERE ("email" IS NOT NULL);



CREATE OR REPLACE TRIGGER "tg_user_profiles_updated_at" BEFORE UPDATE ON "public"."user_profiles" FOR EACH ROW EXECUTE FUNCTION "public"."set_updated_at"();



CREATE OR REPLACE TRIGGER "tr_update_streak" AFTER INSERT OR UPDATE ON "public"."user_progress" FOR EACH ROW EXECUTE FUNCTION "public"."update_streak_on_progress"();



CREATE OR REPLACE TRIGGER "trg_ensure_answered_at" BEFORE INSERT OR UPDATE ON "public"."user_progress" FOR EACH ROW EXECUTE FUNCTION "public"."ensure_answered_at"();



CREATE OR REPLACE TRIGGER "trg_mistakes_protect_immutable" BEFORE UPDATE ON "public"."mistakes" FOR EACH ROW WHEN ((("new"."user_id" IS DISTINCT FROM "old"."user_id") OR ("new"."question_id" IS DISTINCT FROM "old"."question_id") OR ("new"."client_nonce" IS DISTINCT FROM "old"."client_nonce"))) EXECUTE FUNCTION "public"."mistakes_protect_immutable"();



CREATE OR REPLACE TRIGGER "trg_user_progress_updated_at" BEFORE UPDATE ON "public"."user_progress" FOR EACH ROW EXECUTE FUNCTION "public"."touch_updated_at"();



ALTER TABLE ONLY "public"."exam_dates"
    ADD CONSTRAINT "exam_dates_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."subcategories"
    ADD CONSTRAINT "fk_subcategories_category" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id");



ALTER TABLE ONLY "public"."mistake_attempts"
    ADD CONSTRAINT "mistake_attempts_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."mistake_attempts"
    ADD CONSTRAINT "mistake_attempts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."mistakes"
    ADD CONSTRAINT "mistakes_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."mistakes"
    ADD CONSTRAINT "mistakes_subcategory_id_fkey" FOREIGN KEY ("subcategory_id") REFERENCES "public"."subcategories"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."mistakes"
    ADD CONSTRAINT "mistakes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."questions"
    ADD CONSTRAINT "questions_subcategory_id_fkey" FOREIGN KEY ("subcategory_id") REFERENCES "public"."subcategories"("id");



ALTER TABLE ONLY "public"."subscriptions"
    ADD CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE SET NULL;



ALTER TABLE ONLY "public"."user_profiles"
    ADD CONSTRAINT "user_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_progress"
    ADD CONSTRAINT "user_progress_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id");



ALTER TABLE ONLY "public"."user_progress"
    ADD CONSTRAINT "user_progress_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_review_items"
    ADD CONSTRAINT "user_review_items_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_review_items"
    ADD CONSTRAINT "user_review_items_subcategory_id_fkey" FOREIGN KEY ("subcategory_id") REFERENCES "public"."subcategories"("id") ON DELETE CASCADE;



ALTER TABLE ONLY "public"."user_review_items"
    ADD CONSTRAINT "user_review_items_user_id_auth_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;



CREATE POLICY " user_progress_service_full" ON "public"."user_progress" TO "service_role" USING (true) WITH CHECK (true);



CREATE POLICY "Allow user to read own subscription" ON "public"."subscriptions" FOR SELECT TO "authenticated" USING (("auth"."uid"() = "user_id"));



CREATE POLICY "Authenticated users can update their own categories" ON "public"."categories" FOR UPDATE TO "service_role" USING (true) WITH CHECK (true);



CREATE POLICY "Enable delete for users based on user_id" ON "public"."categories" FOR DELETE TO "service_role" USING (true);



CREATE POLICY "Enable insert for authenticated users only" ON "public"."categories" FOR INSERT TO "service_role" WITH CHECK (true);



CREATE POLICY "Enable read access to categories" ON "public"."categories" FOR SELECT USING (true);



CREATE POLICY "POLICY subcategories_service_write" ON "public"."subcategories" TO "service_role" USING (true) WITH CHECK (true);



ALTER TABLE "public"."categories" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."exam_dates" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "exam_dates_delete_own" ON "public"."exam_dates" FOR DELETE USING (("user_id" = "auth"."uid"()));



CREATE POLICY "exam_dates_select_own" ON "public"."exam_dates" FOR SELECT USING (("user_id" = "auth"."uid"()));



CREATE POLICY "exam_dates_update_own" ON "public"."exam_dates" FOR UPDATE USING (("user_id" = "auth"."uid"())) WITH CHECK (("user_id" = "auth"."uid"()));



CREATE POLICY "exam_dates_upsert_own" ON "public"."exam_dates" FOR INSERT WITH CHECK (("user_id" = "auth"."uid"()));



CREATE POLICY "ma_ins" ON "public"."mistake_attempts" FOR INSERT TO "authenticated" WITH CHECK (("auth"."uid"() = "user_id"));



CREATE POLICY "ma_sel" ON "public"."mistake_attempts" FOR SELECT TO "authenticated" USING (("auth"."uid"() = "user_id"));



ALTER TABLE "public"."mistake_attempts" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."mistakes" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "mistakes_service_full" ON "public"."mistakes" TO "service_role" USING (true) WITH CHECK (true);



CREATE POLICY "mk_ins" ON "public"."mistakes" FOR INSERT TO "authenticated" WITH CHECK (("user_id" = "auth"."uid"()));



CREATE POLICY "mk_sel" ON "public"."mistakes" FOR SELECT USING (("user_id" = "auth"."uid"()));



CREATE POLICY "mk_upd" ON "public"."mistakes" FOR UPDATE USING (("user_id" = "auth"."uid"())) WITH CHECK (("user_id" = "auth"."uid"()));



CREATE POLICY "own profile insert" ON "public"."user_profiles" FOR INSERT TO "authenticated" WITH CHECK (("user_id" = "auth"."uid"()));



ALTER TABLE "public"."questions" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "questions_delete_own" ON "public"."questions" FOR DELETE TO "authenticated" USING (("user_id" = "auth"."uid"()));



CREATE POLICY "questions_insert_auth" ON "public"."questions" FOR INSERT TO "authenticated" WITH CHECK (("user_id" = "auth"."uid"()));



CREATE POLICY "questions_read_free" ON "public"."questions" FOR SELECT TO "authenticated" USING ((COALESCE("is_paid", false) = false));



CREATE POLICY "questions_service_full" ON "public"."questions" TO "service_role" USING (true) WITH CHECK (true);



CREATE POLICY "questions_update_own" ON "public"."questions" FOR UPDATE TO "authenticated" USING (("user_id" = "auth"."uid"())) WITH CHECK (("user_id" = "auth"."uid"()));



CREATE POLICY "read_own_profile" ON "public"."user_profiles" FOR SELECT TO "authenticated" USING (("user_id" = "auth"."uid"()));



CREATE POLICY "read_paid_questions_with_subscription" ON "public"."questions" FOR SELECT TO "authenticated" USING (((COALESCE("is_paid", false) = true) AND "public"."has_active_subscription"("auth"."uid"())));



ALTER TABLE "public"."stripe_events" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "stripe_events_block_clients" ON "public"."stripe_events" TO "authenticated", "anon" USING (false) WITH CHECK (false);



ALTER TABLE "public"."subcategories" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "subcategories_public_select" ON "public"."subcategories" FOR SELECT USING (true);



ALTER TABLE "public"."subscriptions" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "subscriptions_service_full" ON "public"."subscriptions" TO "service_role" USING (true) WITH CHECK (true);



ALTER TABLE "public"."user_profiles" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "user_profiles_update_own" ON "public"."user_profiles" FOR UPDATE TO "authenticated" USING (("user_id" = "auth"."uid"())) WITH CHECK (("user_id" = "auth"."uid"()));



ALTER TABLE "public"."user_progress" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "user_progress_insert_own" ON "public"."user_progress" FOR INSERT TO "authenticated" WITH CHECK (("user_id" = "auth"."uid"()));



CREATE POLICY "user_progress_select_own" ON "public"."user_progress" FOR SELECT TO "authenticated" USING (("user_id" = "auth"."uid"()));



CREATE POLICY "user_progress_update_own" ON "public"."user_progress" FOR UPDATE TO "authenticated" USING (("user_id" = "auth"."uid"())) WITH CHECK (("user_id" = "auth"."uid"()));



ALTER TABLE "public"."user_review_items" ENABLE ROW LEVEL SECURITY;


CREATE POLICY "user_review_items.delete.own" ON "public"."user_review_items" FOR DELETE USING (("auth"."uid"() = "user_id"));



CREATE POLICY "user_review_items.insert.own" ON "public"."user_review_items" FOR INSERT WITH CHECK (("auth"."uid"() = "user_id"));



CREATE POLICY "user_review_items.select.own" ON "public"."user_review_items" FOR SELECT USING (("auth"."uid"() = "user_id"));



CREATE POLICY "user_review_items.update.own" ON "public"."user_review_items" FOR UPDATE USING (("auth"."uid"() = "user_id"));





ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";





GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";











































































































































































GRANT ALL ON FUNCTION "public"."clear_mistake"("p_question_id" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."clear_mistake"("p_question_id" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."clear_mistake"("p_question_id" "text") TO "service_role";



GRANT ALL ON FUNCTION "public"."ensure_answered_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."ensure_answered_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."ensure_answered_at"() TO "service_role";



REVOKE ALL ON FUNCTION "public"."get_exam_date"() FROM PUBLIC;
GRANT ALL ON FUNCTION "public"."get_exam_date"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_exam_date"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_exam_date"() TO "service_role";



REVOKE ALL ON FUNCTION "public"."get_free_progress_summary"() FROM PUBLIC;
GRANT ALL ON FUNCTION "public"."get_free_progress_summary"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_free_progress_summary"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_free_progress_summary"() TO "service_role";



REVOKE ALL ON FUNCTION "public"."get_free_progress_summary"("uid" "uuid") FROM PUBLIC;
GRANT ALL ON FUNCTION "public"."get_free_progress_summary"("uid" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_free_progress_summary"("uid" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_free_progress_summary"("uid" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_mypage_progress"("uid" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_mypage_progress"("uid" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_mypage_progress"("uid" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."get_study_days"("p_user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_study_days"("p_user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_study_days"("p_user_id" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";



GRANT ALL ON FUNCTION "public"."has_active_subscription"("uid" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."has_active_subscription"("uid" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."has_active_subscription"("uid" "uuid") TO "service_role";



GRANT ALL ON FUNCTION "public"."mistakes_protect_immutable"() TO "anon";
GRANT ALL ON FUNCTION "public"."mistakes_protect_immutable"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."mistakes_protect_immutable"() TO "service_role";



GRANT ALL ON FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean) TO "anon";
GRANT ALL ON FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean) TO "authenticated";
GRANT ALL ON FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean) TO "service_role";



GRANT ALL ON FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean, "p_subcategory_id" "uuid", "p_category_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean, "p_subcategory_id" "uuid", "p_category_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."pick_next_question"("p_user_id" "uuid", "p_include_paid" boolean, "p_subcategory_id" "uuid", "p_category_id" "uuid") TO "service_role";



GRANT SELECT,INSERT,DELETE,MAINTAIN,UPDATE ON TABLE "public"."mistakes" TO "authenticated";
GRANT SELECT,INSERT,REFERENCES,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "public"."mistakes" TO "service_role";



GRANT ALL ON FUNCTION "public"."record_mistake"("p_question_id" "text", "p_client_nonce" "uuid", "p_subcategory_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."record_mistake"("p_question_id" "text", "p_client_nonce" "uuid", "p_subcategory_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."record_mistake"("p_question_id" "text", "p_client_nonce" "uuid", "p_subcategory_id" "uuid") TO "service_role";



REVOKE ALL ON FUNCTION "public"."record_progress"("p_question_id" "text", "p_is_correct" boolean, "p_answered_at" timestamp with time zone, "p_client_nonce" "uuid") FROM PUBLIC;
GRANT ALL ON FUNCTION "public"."record_progress"("p_question_id" "text", "p_is_correct" boolean, "p_answered_at" timestamp with time zone, "p_client_nonce" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."record_progress"("p_question_id" "text", "p_is_correct" boolean, "p_answered_at" timestamp with time zone, "p_client_nonce" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."record_progress"("p_question_id" "text", "p_is_correct" boolean, "p_answered_at" timestamp with time zone, "p_client_nonce" "uuid") TO "service_role";



REVOKE ALL ON FUNCTION "public"."set_exam_date"("p_exam_date" "date") FROM PUBLIC;
GRANT ALL ON FUNCTION "public"."set_exam_date"("p_exam_date" "date") TO "anon";
GRANT ALL ON FUNCTION "public"."set_exam_date"("p_exam_date" "date") TO "authenticated";
GRANT ALL ON FUNCTION "public"."set_exam_date"("p_exam_date" "date") TO "service_role";



GRANT ALL ON FUNCTION "public"."set_updated_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."set_updated_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."set_updated_at"() TO "service_role";



GRANT ALL ON FUNCTION "public"."touch_updated_at"() TO "anon";
GRANT ALL ON FUNCTION "public"."touch_updated_at"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."touch_updated_at"() TO "service_role";



GRANT ALL ON FUNCTION "public"."update_streak_on_progress"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_streak_on_progress"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_streak_on_progress"() TO "service_role";
























GRANT ALL ON TABLE "public"."categories" TO "authenticated";
GRANT ALL ON TABLE "public"."categories" TO "service_role";



GRANT ALL ON TABLE "public"."exam_dates" TO "anon";
GRANT ALL ON TABLE "public"."exam_dates" TO "authenticated";
GRANT ALL ON TABLE "public"."exam_dates" TO "service_role";



GRANT ALL ON TABLE "public"."mistake_attempts" TO "anon";
GRANT ALL ON TABLE "public"."mistake_attempts" TO "authenticated";
GRANT ALL ON TABLE "public"."mistake_attempts" TO "service_role";



GRANT ALL ON TABLE "public"."questions" TO "authenticated";
GRANT ALL ON TABLE "public"."questions" TO "service_role";



GRANT ALL ON TABLE "public"."stripe_events" TO "service_role";



GRANT ALL ON TABLE "public"."subcategories" TO "authenticated";
GRANT ALL ON TABLE "public"."subcategories" TO "service_role";



GRANT ALL ON TABLE "public"."subscriptions" TO "anon";
GRANT ALL ON TABLE "public"."subscriptions" TO "authenticated";
GRANT ALL ON TABLE "public"."subscriptions" TO "service_role";



GRANT SELECT,INSERT,REFERENCES,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "public"."user_progress" TO "anon";
GRANT SELECT,INSERT,MAINTAIN,UPDATE ON TABLE "public"."user_progress" TO "authenticated";
GRANT SELECT,INSERT,REFERENCES,TRIGGER,TRUNCATE,MAINTAIN,UPDATE ON TABLE "public"."user_progress" TO "service_role";



GRANT ALL ON TABLE "public"."user_latest_free_v2" TO "service_role";
GRANT SELECT ON TABLE "public"."user_latest_free_v2" TO "authenticated";



GRANT ALL ON TABLE "public"."user_profiles" TO "anon";
GRANT ALL ON TABLE "public"."user_profiles" TO "authenticated";
GRANT ALL ON TABLE "public"."user_profiles" TO "service_role";



GRANT ALL ON TABLE "public"."user_review_items" TO "anon";
GRANT ALL ON TABLE "public"."user_review_items" TO "authenticated";
GRANT ALL ON TABLE "public"."user_review_items" TO "service_role";



GRANT ALL ON TABLE "public"."user_wrong_latest_all" TO "anon";
GRANT ALL ON TABLE "public"."user_wrong_latest_all" TO "authenticated";
GRANT ALL ON TABLE "public"."user_wrong_latest_all" TO "service_role";



GRANT ALL ON TABLE "public"."user_wrong_latest_free_v2" TO "service_role";
GRANT SELECT ON TABLE "public"."user_wrong_latest_free_v2" TO "authenticated";









ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";






























