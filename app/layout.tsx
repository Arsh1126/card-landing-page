import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://alphanityone.com"),
  title: "Arshdeep Singh | Full-Stack Web Developer - Nexora Technology",
  description:
    "Digital business card and technology portal for Arshdeep Singh. Tap to save contact, access resources, and connect directly.",
  keywords: [
    "Arshdeep Singh",
    "Nexora Technology",
    "Web Developer",
    "SEO Optimisation",
    "Cybersecurity",
    "NFC Business Card",
    "Digital Business Card",
  ],
  authors: [{ name: "Arshdeep Singh", url: "https://alphanityone.com" }],
  openGraph: {
    title: "Arshdeep Singh | Full-Stack Web Developer - Nexora Technology",
    description: "Digital business card and technology portal. Tap to save contact.",
    url: "https://alphanityone.com",
    siteName: "Nexora Technology Digital Card",
    images: [
      {
        url: "/profile.jpg",
        width: 600,
        height: 600,
        alt: "Arshdeep Singh - Nexora Technology",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Arshdeep Singh | Nexora Technology",
    description: "Full-Stack Web Developer. Save contact info instantly.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/profile.jpg",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full dark`}>
      <body className="min-h-full flex flex-col antialiased bg-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
