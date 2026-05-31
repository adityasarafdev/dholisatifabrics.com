import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.dholisatifabrics.com";
const siteName = "Shree Dholi Sati Fabrics";
const siteTitle =
  "Shree Dholi Sati Fabrics — Industrial Bags, Tarpaulins & Non-Woven Manufacturer in Patna, Bihar";
const siteDescription =
  "Manufacturer of industrial-grade bags, tarpaulins, non-woven rolls, HDPE/LDPE sheets, jute bags, and printed packaging. Bulk manufacturing with fast sampling and custom printing — based in Patna, Bihar with pan-India shipping.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f7f7f5",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Manufacturing",
  keywords: [
    "non-woven bags",
    "tarpaulin manufacturer",
    "HDPE bags",
    "HDPE rolls",
    "HDPE tarpaulin",
    "BOPP bags",
    "PP bags",
    "jute bags",
    "packaging pouches",
    "LDPE sheets",
    "delivery cargo bags",
    "loop handle bags",
    "shade nets",
    "industrial bags Patna",
    "fabric manufacturer Bihar",
    "bulk bag manufacturer India",
    "custom printed bags",
    "polypropylene niwar",
    "bag closer thread",
  ],
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  verification: {
    // google: "<google-search-console-verification-code>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
