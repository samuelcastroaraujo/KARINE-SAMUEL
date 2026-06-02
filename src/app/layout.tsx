import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Karine & Samuel",
  description: "Karine & Samuel — 29 de agosto de 2026",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} h-full`}>
      <head>
        {/* Adobe Typekit: freight-big-pro (serif) + bickham-script-pro-3 (script) */}
        <link rel="stylesheet" href="https://use.typekit.net/gja5cdy.css" />
      </head>
      <body className="min-h-full bg-white antialiased">{children}</body>
    </html>
  );
}
