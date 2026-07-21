import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://web.kensosystems.jp";
const title = "静岡市清水区のホームページ制作｜やさしいWeb制作";
const description =
  "研装システムズ Web制作事業部の『やさしいWeb制作』。静岡市清水区の中小事業者・個人店向けに、最短1週間、スマホ対応・基本SEO対策込み、44,000円から制作します。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    title,
    description,
    images: [
      {
        url: "/og-kenso-division.png",
        width: 1731,
        height: 909,
        alt: "研装システムズ Web制作事業部・やさしいWeb制作の案内",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-kenso-division.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
