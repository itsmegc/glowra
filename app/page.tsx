import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import CallToAction from "@/components/landing/CallToAction";
import { Toaster } from "@/components/ui/toaster";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
