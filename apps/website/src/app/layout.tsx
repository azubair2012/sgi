import type { Metadata } from "next";
import { Noto_Sans_Bengali, Noto_Serif } from "next/font/google";
import "./globals.css";

const englishFont = Noto_Serif({
  variable: "--font-english",
  subsets: ["latin"],
});

const banglaFont = Noto_Sans_Bengali({
  variable: "--font-bangla",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: "Shariah Graduation Institute",
  description:
    "Official bilingual public website for Shariah Graduation Institute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${englishFont.variable} ${banglaFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
