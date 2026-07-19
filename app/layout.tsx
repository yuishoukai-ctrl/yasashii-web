import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "○○ウェブ制作室｜初心者のためのホームページ制作";
  const description =
    "パソコンが苦手な方にも、むずかしい言葉を使わず丁寧に。中小事業者・個人店のホームページ制作を、文章づくりから公開後までお手伝いします。";

  return {
    metadataBase,
    title,
    description,
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      title,
      description,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "○○ウェブ制作室のホームページ制作案内",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

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
