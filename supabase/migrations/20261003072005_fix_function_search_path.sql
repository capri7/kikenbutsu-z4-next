-- 関数の search_path を空にして、関数の中の名前が呼び出し側の search_path で変わらないようにする
-- （Security Advisor の function_search_path_mutable への対応。set_exam_date はほかの書き込みの関数とそろえる）
-- 3つとも、中で使う名前は now()・auth.uid()・public.exam_dates のように search_path に頼らずに決まるため、動きは変わらない
alter function public.ensure_answered_at() set search_path = '';
alter function public.mistakes_protect_immutable() set search_path = '';
alter function public.set_exam_date(date) set search_path = '';
