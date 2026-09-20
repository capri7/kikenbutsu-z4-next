import type { Metadata } from "next";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";
import WebVitals from "@/components/WebVitals";

export const metadata: Metadata = {
  title: "乙種4類危険物取扱者試験対策",
  description: "乙種4類危険物取扱者試験の対策教材サイトです。",
  icons: {
    icon: [
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

// GA4 と Web Vitals の送信は、Vercel の本番環境だけで行う。
// プレビュー環境・ローカル開発・CI（Lighthouse CI）のアクセスは計測に含めない。
const isProduction = process.env.VERCEL_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        {isProduction && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-9D6XGBJWTC"
              strategy="lazyOnload"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-9D6XGBJWTC');
              `}
            </Script>
            <WebVitals />
          </>
        )}
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
