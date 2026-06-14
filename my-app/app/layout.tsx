import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A2E63",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ubuntu Fibre Telecommunications | High-Speed Fibre Internet South Africa",
  description:
    "Ubuntu Fibre Telecommunications delivers ultra-fast, reliable fibre internet, business connectivity, VoIP solutions, and enterprise networking across South Africa. Get connected today.",
  keywords: [
    "fibre internet South Africa",
    "Ubuntu Fibre",
    "business connectivity",
    "VoIP solutions",
    "ISP South Africa",
    "high speed internet",
    "enterprise networking",
    "Johannesburg fibre",
  ],
  authors: [{ name: "Ubuntu Fibre Telecommunications" }],
  creator: "Ubuntu Fibre Telecommunications",
  metadataBase: new URL("https://www.ubuntufibre.co.za"),
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Ubuntu Fibre Telecommunications | Connecting South Africa",
    description:
      "Ultra-fast, reliable fibre internet and enterprise networking solutions for homes and businesses across South Africa.",
    type: "website",
    locale: "en_ZA",
    siteName: "Ubuntu Fibre Telecommunications",
    images: [{ url: "/icon.png", width: 400, height: 400, alt: "Ubuntu Fibre Telecommunications" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubuntu Fibre Telecommunications",
    description:
      "Ultra-fast fibre internet and enterprise networking for South Africa.",
    images: ["/icon.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen antialiased font-inter" suppressHydrationWarning>{children}</body>
    </html>
  );
}
