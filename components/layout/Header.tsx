"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-md border-b border-blush-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-rose-accent rounded-full flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-playfair font-bold text-xl text-rose-700 tracking-tight">
            Glowra
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#how-it-works"
            className="text-sm font-inter text-foreground/70 hover:text-rose-accent transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/quiz"
            className="text-sm font-inter text-foreground/70 hover:text-rose-accent transition-colors"
          >
            Take Quiz
          </Link>
          <Link href="/auth">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </Link>
          <Link href="/quiz">
            <Button size="sm">Get My Looks</Button>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-rose-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-ivory/95 backdrop-blur-md border-b border-blush-100",
          mobileOpen ? "max-h-64 py-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-4 px-6 pb-2">
          <Link
            href="/#how-it-works"
            className="text-sm font-inter text-foreground/70 hover:text-rose-accent"
            onClick={() => setMobileOpen(false)}
          >
            How it works
          </Link>
          <Link
            href="/quiz"
            className="text-sm font-inter text-foreground/70 hover:text-rose-accent"
            onClick={() => setMobileOpen(false)}
          >
            Take Quiz
          </Link>
          <Link href="/auth" onClick={() => setMobileOpen(false)}>
            <Button variant="outline" size="sm" className="w-full">
              Sign in
            </Button>
          </Link>
          <Link href="/quiz" onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="w-full">
              Get My Looks
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
