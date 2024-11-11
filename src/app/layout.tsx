import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Nomy Ui - Akshit",
  description: "Nomy Porfolio tracker built buy Akshit",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
