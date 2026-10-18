-- 問題の図（questions.image）の本来の大きさを持たせる。
-- next/image の width・height は、ブラウザが比率を出して表示の前に場所を確保するために使う（Next.js の文書「Image Component」の width and height）。
-- 値は各 SVG の viewBox の幅と高さ（小数は切り捨て）。表示の大きさは CSS で決まる。

alter table public.questions
  add column image_width integer,
  add column image_height integer;

comment on column public.questions.image_width is '問題の図の幅（SVG の viewBox の3つ目の数字。比率に使う）';
comment on column public.questions.image_height is '問題の図の高さ（SVG の viewBox の4つ目の数字。比率に使う）';

-- viewBox 0 0 1560 560
update public.questions
set image_width = 1560, image_height = 560
where image in (
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_004.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_006.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_007.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_008.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_009.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_010.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_011.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_012.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_014.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_018.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_019.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_020.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_021.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_022.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_026.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_029.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_030.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_031.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_032.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_033.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_034.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_040.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_041.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_042.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_043.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_044.svg',
  'basics_of_chemistry/Otsux_Phy_Basics_Of_Chemistry_051.svg',
  'reaction_rate_and_equilibrium/Otsux_Phy_Reaction_Rate_And_Equilibrium_009.svg',
  'reaction_rate_and_equilibrium/Otsux_Phy_Reaction_Rate_And_Equilibrium_010.svg'
);

-- viewBox 0 0 1544.41 860（Static_Electricity_013 は 1544.4）
update public.questions
set image_width = 1544, image_height = 860
where image in (
  'boiling_point_vapor_pressure/Otsux_Phy_BoilingPoint_VaporPressure_004.svg',
  'states_of_matter/Otsux_Phy_States_of_Matter_006.svg',
  'static_electricity/Otsux_Phy_Static_Electricity_013.svg'
);

-- viewBox 0 0 1560 860
update public.questions
set image_width = 1560, image_height = 860
where image in (
  'electricity_and_batteries/Otsux_Phy_Electricity_Batteries_001.svg'
);

-- 図のある問題は、幅と高さの両方を持つ。ここで大きさのない図の行が残っていれば、この migration は失敗する
alter table public.questions
  add constraint questions_image_size_required
    check (coalesce(image, '') = '' or (image_width is not null and image_height is not null)),
  add constraint questions_image_size_positive
    check (image_width > 0 and image_height > 0);
