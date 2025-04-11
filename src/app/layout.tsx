import type { Metadata } from "next";
import { Syncopate, Montserrat } from "next/font/google";
import "./globals.css";
import FadeIn from "@/components/shared/FadeIn";
import Footer from "@/components/shared/Footer";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Villa Intendencia",
  description: "A Turnkey Multi-Property Gem in the Heart of Downtown Pensacola’s Historic Seville District",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${syncopate.variable} antialiased overflow-x-hidden`}
      >
        <FadeIn />
        {children}
        {<Footer />}
      </body>
    </html>
  );
}
