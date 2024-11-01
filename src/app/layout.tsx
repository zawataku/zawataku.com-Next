import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Zen_Maru_Gothic } from 'next/font/google';

const zenMaruGothic = Zen_Maru_Gothic({
  display: 'swap',
  weight: ['400', '700'],
  preload: false,
});

export const metadata: Metadata = {
  title: "ざわたくの部屋",
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
