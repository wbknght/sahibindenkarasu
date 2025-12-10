import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sahibindenkarasu.com: Satılık, Kiralık, 2.El, Emlak, Oto, Araba",
  description: "sahibindenkarasu.com clone application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-[#f5f5f5] text-foreground`}>
        <Header />
        <main className="flex-1 w-[1150px] mx-auto my-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
