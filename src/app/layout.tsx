'use client';

import type { Metadata } from "next";
import { Inter, Open_Sans, Courier_Prime, Outfit } from "next/font/google";
import "./../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const headingFont = Inter({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-heading"
});

const bodyFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const testimonialFont = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-testimonial"
});

const navFont = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-nav"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${testimonialFont.variable} ${navFont.variable} scroll-smooth`}>
      <body className="bg-demco-cream text-demco-purple font-body antialiased selection:bg-demco-purple selection:text-white">
        <div className="main-content-wrapper">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
