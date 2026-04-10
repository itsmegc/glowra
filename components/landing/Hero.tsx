import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-ivory via-blush-50 to-nude-100">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blush-200/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-nude-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blush-200 rounded-full px-4 py-1.5 shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-rose-accent" />
            <span className="text-xs font-inter font-semibold text-rose-700 tracking-wide uppercase">
              AI-Powered Beauty
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Your perfect look,{" "}
              <em className="text-rose-accent not-italic">personalized.</em>
            </h1>
            <p className="text-lg sm:text-xl font-inter text-muted-foreground leading-relaxed max-w-lg">
              Answer a quick skin quiz and get curated makeup looks matched to
              your unique tone, undertone, and style — instantly.
            </p>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["#F7D6D0", "#E8C4A0", "#C4566A", "#d86556", "#b87040"].map(
                (color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
            <div className="flex items-center gap-1.5 ml-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-3.5 h-3.5 text-nude-500 fill-nude-400"
                />
              ))}
              <span className="text-sm font-inter text-muted-foreground ml-1">
                <strong className="text-foreground">4.9</strong> · Loved by 2,400+ women
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quiz">
              <Button size="lg" className="w-full sm:w-auto group">
                Start Your Quiz
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/#how-it-works">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Right — visual card stack */}
        <div className="relative hidden lg:flex justify-center items-center">
          {/* Background card */}
          <div className="absolute w-72 h-96 bg-white/60 rounded-3xl border border-blush-200 shadow-card rotate-6 translate-x-6" />
          {/* Middle card */}
          <div className="absolute w-72 h-96 bg-blush-100/70 rounded-3xl border border-blush-200 shadow-card -rotate-3 -translate-x-4" />

          {/* Main card */}
          <div className="relative w-72 bg-white rounded-3xl border border-blush-200 shadow-card p-6 space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-inter text-muted-foreground uppercase tracking-widest">
                Your Look
              </p>
              <h3 className="font-playfair text-xl font-semibold text-foreground">
                Rose Gold Glow
              </h3>
              <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-700 text-xs font-inter font-semibold px-2.5 py-0.5 rounded-full">
                ✨ Party
              </span>
            </div>

            {/* Product swatches */}
            <div className="space-y-3">
              {[
                { label: "Foundation", color: "#E8C4A0", shade: "W30 Ivory Nude" },
                { label: "Blush", color: "#F7D6D0", shade: "Peach Dream" },
                { label: "Lipstick", color: "#C4566A", shade: "Deep Rose" },
                { label: "Eyeshadow", color: "#d4a574", shade: "Golden Hour" },
                { label: "Highlighter", color: "#f5e6d3", shade: "Champagne Pop" },
              ].map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full border-2 border-white shadow-sm ring-1 ring-blush-200 flex-shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  <div>
                    <p className="text-xs font-inter font-medium text-foreground">
                      {p.label}
                    </p>
                    <p className="text-xs font-inter text-muted-foreground">
                      {p.shade}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="w-full text-center text-xs font-inter font-semibold text-rose-accent bg-blush-50 rounded-xl py-2.5 hover:bg-blush-100 transition-colors">
                Shop This Look →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
