import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in — Glowra",
  description: "Sign in to Glowra to save your favourite makeup looks.",
};

export default function AuthPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory to-blush-50 flex flex-col items-center justify-center px-4 py-16">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-10 group">
        <div className="w-9 h-9 bg-rose-accent rounded-full flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-playfair font-bold text-2xl text-rose-700">
          Glowra
        </span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-md glowra-card space-y-6">
        <div className="text-center space-y-2">
          <h1 className="font-playfair text-2xl font-bold text-foreground">
            Welcome back
          </h1>
          <p className="text-sm font-inter text-muted-foreground">
            Sign in with your email — no password needed.
          </p>
        </div>

        {/* NextAuth passes ?error=... on failure */}
        {searchParams.error && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-inter text-red-700">
            {searchParams.error === "Verification"
              ? "Sign-in link expired or was already used. Please request a new one."
              : "Something went wrong. Please try again."}
          </div>
        )}

        <AuthForm />
      </div>

      <p className="mt-6 text-xs font-inter text-muted-foreground text-center max-w-xs">
        By signing in, you agree to our{" "}
        <Link href="/terms" className="text-rose-accent hover:underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-rose-accent hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
