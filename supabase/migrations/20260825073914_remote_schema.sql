drop policy "stripe_events_block_clients" on "public"."stripe_events";

revoke references on table "public"."categories" from "anon";

revoke trigger on table "public"."categories" from "anon";

revoke truncate on table "public"."categories" from "anon";

revoke references on table "public"."mistakes" from "anon";

revoke trigger on table "public"."mistakes" from "anon";

revoke truncate on table "public"."mistakes" from "anon";

revoke references on table "public"."mistakes" from "authenticated";

revoke trigger on table "public"."mistakes" from "authenticated";

revoke truncate on table "public"."mistakes" from "authenticated";

revoke references on table "public"."questions" from "anon";

revoke trigger on table "public"."questions" from "anon";

revoke truncate on table "public"."questions" from "anon";

revoke references on table "public"."stripe_events" from "anon";

revoke trigger on table "public"."stripe_events" from "anon";

revoke truncate on table "public"."stripe_events" from "anon";

revoke references on table "public"."stripe_events" from "authenticated";

revoke trigger on table "public"."stripe_events" from "authenticated";

revoke truncate on table "public"."stripe_events" from "authenticated";

revoke references on table "public"."subcategories" from "anon";

revoke trigger on table "public"."subcategories" from "anon";

revoke truncate on table "public"."subcategories" from "anon";

revoke references on table "public"."user_progress" from "authenticated";

revoke trigger on table "public"."user_progress" from "authenticated";

revoke truncate on table "public"."user_progress" from "authenticated";


  create policy "stripe_events_block_clients"
  on "public"."stripe_events"
  as permissive
  for all
  to anon, authenticated
using (false)
with check (false);


CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


