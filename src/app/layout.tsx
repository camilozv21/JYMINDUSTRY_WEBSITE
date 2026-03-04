import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
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
  metadataBase: new URL("https://jymindustry.com"),
  title: {
    default: "J&M Industry - Automatización con IA",
    template: "%s | J&M Industry",
  },
  description: "Transformando negocios con inteligencia artificial y automatización avanzada. Soluciones personalizadas para optimizar procesos y aumentar la eficiencia.",
  keywords: ["automatización", "IA", "inteligencia artificial", "negocios", "transformación digital", "eficiencia", "procesos"],
  authors: [{ name: "J&M Industry" }],
  creator: "J&M Industry",
  publisher: "J&M Industry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "J&M Industry - Automatización con IA",
    description: "Transformando negocios con inteligencia artificial y automatización avanzada.",
    url: "https://jymindustry.com",
    siteName: "J&M Industry",
    images: [
      {
        url: "https://df50lbm4qcrt6.cloudfront.net/JYM_INDUSTRY/JyMlogo_no_bvackground-removebg-preview.png",
        width: 800,
        height: 600,
        alt: "J&M Industry Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "J&M Industry - Automatización con IA",
    description: "Transformando negocios con inteligencia artificial y automatización avanzada.",
    images: ["https://df50lbm4qcrt6.cloudfront.net/JYM_INDUSTRY/JyMlogo_no_bvackground-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
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
        <Header />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
