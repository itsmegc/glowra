"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || loading) return;
    setError("");
    setLoading(true);

    try {
      const res = await signIn("email", {
        email: email.trim(),
        redirect: false,
        callbackUrl: "/looks",
      });

      if (res?.error) {
        setError("Failed to send magic link. Please try again.");
      } else {
        setSent(true);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center space-y-4 py-4">
        <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-7 h-7 text-rose-accent" />
        </div>
        <div className="space-y-1">
          <h2 className="font-playfair text-xl font-semibold text-foreground">
            Check your inbox
          </h2>
          <p className="text-sm font-inter text-muted-foreground">
            We sent a magic link to{" "}
            <strong className="text-foreground">{email}</strong>. Click it to
            sign in — no password required.
          </p>
        </div>
        <button
          onClick={() => { setSent(false); setEmail(""); }}
          className="text-xs font-inter text-rose-accent hover:underline"
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="text-sm font-inter font-medium text-foreground"
        >
          Email address
        </label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full pl-10 pr-4 py-3 border-2 border-blush-200 rounded-xl bg-ivory text-foreground font-inter text-sm
                       placeholder:text-muted-foreground/60 focus:outline-none focus:border-rose-accent transition-colors"
          />
        </div>
      </div>

      {error && (
        <p className="text-sm font-inter text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
          {error}
        </p>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={loading || !email.trim()}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Sending magic link…
          </>
        ) : (
          "Send Magic Link ✨"
        )}
      </Button>

      <p className="text-xs font-inter text-center text-muted-foreground">
        We&apos;ll email you a secure sign-in link. No password needed.
      </p>
    </form>
  );
}
