import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Glowra — Your Perfect Look, Personalized",
  description:
    "AI-powered makeup suggestions tailored to your unique skin tone, undertone, and style. Discover your perfect look with Glowra.",
  keywords: ["makeup", "beauty", "skin tone", "personalized", "AI makeup"],
  openGraph: {
    title: "Glowra — Your Perfect Look, Personalized",
    description: "AI-powered makeup suggestions tailored to you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-ivory">{children}</body>
    </html>
  );
}
