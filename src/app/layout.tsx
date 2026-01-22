import type { Metadata } from "next";
import { Inter, Open_Sans, DM_Mono } from "next/font/google";
import "./../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// TeX Gyre Heros (Inter as a high-quality fallback/mock)
const headingFont = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading"
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const monoFont = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Peak Fitness | Seattle Fitness Studio | Build Strength & Mobility",
  description:
    "Elevate your life at Peak Fitness. Personal training, semi-private sessions, and group classes in Seattle. First class free!",
  keywords: [
    "personal training seattle",
    "fitness studio seattle",
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
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="bg-demco-cream text-demco-purple font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
