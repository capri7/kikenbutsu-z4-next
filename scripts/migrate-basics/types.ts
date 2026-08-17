// vanilla/public/basics/ -> Next.js 移行用データスキーマ
// migrate-basics.mjs が生成する JSON はこの型に一致する(ランタイムでは使わず、参照用)

export type QuizChoice = { text: string; correct: boolean; feedback: string };
export type QuizBlock = { question: string; choices: QuizChoice[] };

export type ContentSection = {
  heading: string;
  intro?: string[];
  subsections?: {
    heading?: string;
    body?: string[];
    table?: { caption: string; headers: string[]; rows: string[][] };
    callout?: { type: 'ok' | 'warn' | 'check' | 'ng'; heading: string; items: string[] };
    examNotes?: string[];
    examPoints?: string[];
    figure?: { src: string; alt: string; caption: string };
  }[];
};

export type BasicsPage = {
  slug: string;
  displayTitle: string;
  seoTitle: string;
  description: string;
  chapter: 'law' | 'physical_chemistry' | 'properties_prevention';
  sections: ContentSection[];
  quiz?: QuizBlock;
};
