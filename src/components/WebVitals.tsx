'use client';

import { useReportWebVitals } from 'next/web-vitals';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * 実ユーザーの Core Web Vitals（LCP / INP / CLS ほか）を GA4 のイベントとして送る。
 * gtag が未定義の間に発生した指標は送らない（LCP / INP / CLS は
 * ページ表示後に確定するため、実質的な取りこぼしは FCP / TTFB 程度）。
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', metric.name, {
      // GA4 の value は整数が扱いやすいため、CLS は 1000 倍して丸める
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_rating: metric.rating, // good / needs-improvement / poor
      metric_delta: metric.delta,
      non_interaction: true, // 直帰率に影響させない
    });
  });

  return null;
}