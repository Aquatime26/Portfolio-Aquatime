import type { Metadata } from "next";
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
  title: "Alexis Avril – Développeur Web",
  description:
    "Développeur web spécialisé en création de sites modernes et performants. Contactez-moi pour vos projets web.",
  keywords: [
    "développeur web",
    "site internet",
    "création site web",
    "portfolio développeur",
    "web moderne",
    "Alexis Avril",
    "développement web",
    "front-end",
  ],
  authors: [{ name: "Alexis Avril" }],
  creator: "Alexis Avril",
  metadataBase: new URL("https://alexisavril.dev"),

  alternates: {
    canonical: "https://alexisavril.dev",
  },

  openGraph: {
    title: "Alexis Avril – Développeur Web",
    description:
      "Création de sites web modernes, performants et élégants. Découvrez mon portfolio.",
    url: "https://alexisavril.dev",
    siteName: "Alexis Avril – Développeur Web",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Alexis Avril – Développeur Web",
    description:
      "Développeur web spécialisé en création de sites modernes et performants.",
    images: ["/og-image.webp"]
  },

  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};