import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { bodyFont, codeFont } from "@/lib/fonts";
import { meta } from "@/lib/content";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${codeFont.variable} antialiased`}>
      <body className="min-h-screen bg-bg font-sans text-text">{children}</body>
    </html>
  );
}
