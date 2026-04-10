import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="relative bg-gradient-to-br from-rose-accent to-rose-700 rounded-3xl p-12 sm:p-16 overflow-hidden shadow-card">
          {/* Decorative circle */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4"
          />

          <div className="relative space-y-6">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight">
              Ready to discover <br />
              <em>your glow?</em>
            </h2>
            <p className="font-inter text-white/80 text-lg max-w-md mx-auto">
              Join thousands of women who found their perfect makeup match in
              just 2 minutes.
            </p>
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-white text-rose-700 hover:bg-blush-50 shadow-lg mt-2"
              >
                Start Free Quiz
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
