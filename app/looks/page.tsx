import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LooksClient from "@/components/looks/LooksClient";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Your Looks — Glowra",
  description: "Your personalised AI-matched makeup looks based on your skin profile.",
};

export default function LooksPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-ivory">
        <LooksClient />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
