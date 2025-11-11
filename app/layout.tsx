import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سوره ناس | تلاوت",
  description: "تلاوت سوره ناس همراه با متن و ترجمه فارسی"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
