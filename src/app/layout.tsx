import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peak Fitness | Personal Training & Fitness Studio",
  description:
    "Build strength and move better with Peak Fitness. Personal training, semi-private sessions, and group classes. First class free!",
  keywords: [
    "personal training",
    "fitness studio",
    "strength training",
    "semi-private training",
    "group fitness",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

