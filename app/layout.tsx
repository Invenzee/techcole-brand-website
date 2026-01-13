import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const customFont = localFont({
  src: [
    {
      path: "../public/fonts/Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-custom",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techcole.com"),
  title: "Techcole | We Deliver What We Promise - Digital Agency",
  description: "Techcole is a premier full-stack digital product agency. We specialize in design, strategy, and development, delivering high-quality web and mobile applications that drive business success.",
  keywords: [
    "Digital Product Agency",
    "Web Design",
    "Web Development",
    "Mobile App Development",
    "Software Development",
    "UI/UX Design",
    "Digital Strategy",
    "Techcole",
    "App Development Agency"
  ],
  authors: [{ name: "Techcole", url: "https://techcole.com" }],
  creator: "Techcole",
  publisher: "Techcole",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://techcole.com",
  },
  openGraph: {
    title: "Techcole | Full-Stack Digital Product Agency",
    description: "Expert design and development for web and mobile applications. We deliver what we promise.",
    url: "https://techcole.com",
    siteName: "Techcole",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Techcole Digital Product Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techcole | Full-Stack Digital Product Agency",
    description: "Expert design and development for web and mobile applications. We deliver what we promise.",
    images: ["/og-image.png"],
    creator: "@techcole",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${customFont.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
