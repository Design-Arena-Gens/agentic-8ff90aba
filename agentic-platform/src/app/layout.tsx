import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentic Profit Engine | Algerian Dinar Growth Platform",
  description:
    "Launch and optimise high-margin Algerian ventures with live exchange tracking, playbooks, and automation pipelines focused on compounding daily dinar profits.",
  openGraph: {
    title: "Agentic Profit Engine",
    description:
      "Deploy validated Algerian revenue playbooks with automations, profit tracking, and execution roadmaps.",
    url: "https://agentic-8ff90aba.vercel.app",
    siteName: "Agentic Profit Engine",
    locale: "en_DZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Profit Engine",
    description:
      "Profitable Algerian ventures launched fast with automations, playbooks, and profit calculators.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
