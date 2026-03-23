import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ucapan Selamat Idul Fitri",
  description:
    "Landing page ucapan Selamat Idul Fitri dengan Next.js dan panduan belajar git branch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
