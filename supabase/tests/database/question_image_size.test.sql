-- 問題の図には、本来の大きさ（幅と高さ）があること
-- next/image の width・height に渡し、表示の前に場所を確保する（Next.js の文書「Image Component」の width and height）
begin;
create extension if not exists pgtap with schema extensions;
select plan(8);

-- テストの中だけで使うデータ（最後に rollback で消える）
insert into public.categories (id, name, slug)
values ('55555555-5555-5555-5555-555555555555', 'テスト分野', 'image-size-test-category');
insert into public.subcategories (id, name, slug, category_id)
values ('66666666-6666-6666-6666-666666666666', 'テスト節', 'image-size-test-subcategory', '55555555-5555-5555-5555-555555555555');

select has_column('public', 'questions', 'image_width', 'questions に image_width がある');
select has_column('public', 'questions', 'image_height', 'questions に image_height がある');
select col_type_is('public', 'questions', 'image_width', 'integer', 'image_width は integer');
select col_type_is('public', 'questions', 'image_height', 'integer', 'image_height は integer');

select throws_ok(
  $$insert into public.questions (id, subcategory_id, question, answer, image)
    values ('image_size_test_1', '66666666-6666-6666-6666-666666666666', 'テスト', 1, 'test/no_size.svg')$$,
  '23514', null,
  '図があって大きさがない問題は入れられない'
);

select lives_ok(
  $$insert into public.questions (id, subcategory_id, question, answer, image, image_width, image_height)
    values ('image_size_test_2', '66666666-6666-6666-6666-666666666666', 'テスト', 1, 'test/with_size.svg', 1560, 560)$$,
  '図と大きさがある問題は入れられる'
);

select lives_ok(
  $$insert into public.questions (id, subcategory_id, question, answer)
    values ('image_size_test_3', '66666666-6666-6666-6666-666666666666', 'テスト', 1)$$,
  '図のない問題は、大きさがなくても入れられる'
);

select throws_ok(
  $$insert into public.questions (id, subcategory_id, question, answer, image, image_width, image_height)
    values ('image_size_test_4', '66666666-6666-6666-6666-666666666666', 'テスト', 1, 'test/zero.svg', 0, 560)$$,
  '23514', null,
  '幅が 0 の図は入れられない'
);

select * from finish();
rollback;
