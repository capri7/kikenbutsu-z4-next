'use client';

import { useReportWebVitals } from 'next/web-vitals';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// GA4 に送る指標は、現在の Core Web Vitals（LCP / INP / CLS）だけ。
// FID は INP に置き換えられたため送らない。
// TTFB / FCP や Next.js 独自の計測（Next.js-hydration など）も対象外。
const REPORTED_METRICS = new Set(['LCP', 'INP', 'CLS']);

// コールバックの参照を固定する（Next.js の推奨。再レンダリングで重複送信しないため）
const reportWebVitals: Parameters<typeof useReportWebVitals>[0] = (metric) => {
  if (!REPORTED_METRICS.has(metric.name)) return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', metric.name, {
    // GA4 の value は整数が扱いやすいため、CLS は 1000 倍して丸める
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    metric_id: metric.id,
    metric_rating: metric.rating, // good / needs-improvement / poor
    metric_delta: metric.delta,
    non_interaction: true, // 直帰率に影響させない
  });
};

export default function WebVitals() {
  useReportWebVitals(reportWebVitals);
  return null;
}