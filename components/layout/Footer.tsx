import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blush-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-rose-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-playfair font-bold text-lg text-rose-700">
                Glowra
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-inter leading-relaxed max-w-xs">
              Your perfect look, personalized. AI-powered makeup suggestions
              tailored to your unique beauty.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-playfair font-semibold text-foreground">
              Discover
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Take the Quiz", href: "/quiz" },
                { label: "My Looks", href: "/looks" },
                { label: "How it Works", href: "/#how-it-works" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-inter text-muted-foreground hover:text-rose-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-playfair font-semibold text-foreground">
              Company
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Contact", href: "mailto:hello@glowra.app" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-inter text-muted-foreground hover:text-rose-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blush-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-inter text-muted-foreground">
            © 2024 Glowra. All rights reserved.
          </p>
          <p className="text-xs font-inter text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-accent fill-rose-accent" /> for beauty lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
