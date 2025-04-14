import type { Metadata } from "next";
import { Syncopate, Montserrat } from "next/font/google";
import "./globals.css";
import FadeIn from "@/components/shared/FadeIn";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";

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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' }
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
      },
    ]
  }
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
        <ScrollToTop />
        {<Footer />}
      </body>
    </html>
  );
}
