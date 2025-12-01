import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import StructuredData from "@/components/common/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://officialhilo.com'),
  title: {
    default: "HI-LO | Official Website | Music, Events & Merch",
    template: "%s | HI-LO"
  },
  description: "Official website of HI-LO (Oliver Heldens). Discover latest music releases, upcoming events, tour dates, and exclusive HILOMATIK merchandise. Stream on Spotify, Apple Music, and YouTube.",
  keywords: [
    "HI-LO", 
    "Oliver Heldens", 
    "electronic music", 
    "DJ", 
    "EDM", 
    "house music", 
    "music producer",
    "techno",
    "electronic dance music",
    "live sets",
    "music events",
    "HILOMATIK",
    "merchandise"
  ],
  authors: [{ name: "HI-LO" }],
  creator: "HI-LO",
  publisher: "HI-LO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'HI-LO Official',
    title: 'HI-LO | Official Website | Music, Events & Merch',
    description: 'Official website of HI-LO (Oliver Heldens). Discover latest music releases, upcoming events, and exclusive merchandise.',
    images: [
      {
        url: '/images/hi-lo-bg.webp',
        width: 1200,
        height: 630,
        alt: 'HI-LO Official',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HI-LO | Official Website',
    description: 'Official website of HI-LO (Oliver Heldens)',
    images: ['/images/hi-lo-bg.webp'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  verification: {

  },
  category: 'Music',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://open.spotify.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:font-bold"
        >
          Skip to main content
        </a>
        <StructuredData />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}