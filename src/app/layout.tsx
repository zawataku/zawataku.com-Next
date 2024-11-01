import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Zen_Maru_Gothic } from 'next/font/google';

const zenMaruGothic = Zen_Maru_Gothic({
  display: 'swap',
  weight: ['500', '700'],
  preload: false,
});

export const metadata: Metadata = {
  title: "ざわたく.com",
  description: "ざわたくのポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={zenMaruGothic.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.GA_ID ?? ""} />
    </html>
  );
}
