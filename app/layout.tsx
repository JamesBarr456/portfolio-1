import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Portfolio Emmanuel",
  description: "Landing Page made by Emmanuel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500">
      <body className={` ${urbanist.variable} antialiased`}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
