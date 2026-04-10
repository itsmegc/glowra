"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowLeft, RefreshCw } from "lucide-react";
import { SkinProfile } from "@/types";
import { Look } from "@/types";
import { getMatchedLooks } from "@/utils/looks-matcher";
import LookCard from "./LookCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TONE_LABELS: Record<string, string> = {
  fair: "Fair", light: "Light", medium: "Medium", tan: "Tan", deep: "Deep",
};
const UNDERTONE_LABELS: Record<string, string> = {
  warm: "Warm", cool: "Cool", neutral: "Neutral",
};

export default function LooksClient() {
  const router = useRouter();
  const [profile, setProfile] = useState<SkinProfile | null>(null);
  const [looks, setLooks] = useState<Look[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = sessionStorage.getItem("glowra_profile");
    if (!raw) {
      router.replace("/quiz");
      return;
    }
    try {
      const p = JSON.parse(raw) as SkinProfile;
      setProfile(p);
      const matched = getMatchedLooks(p);
      setLooks(matched);
    } catch {
      router.replace("/quiz");
    } finally {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-8 h-8 text-rose-accent animate-spin" />
        <p className="font-inter text-muted-foreground text-sm">
          Finding your perfect looks…
        </p>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Back link */}
      <Link
        href="/quiz"
        className="inline-flex items-center gap-1.5 text-sm font-inter text-muted-foreground hover:text-rose-accent transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Retake Quiz
      </Link>

      {/* Heading */}
      <div className="space-y-3 mb-10">
        <p className="text-xs font-inter font-semibold text-rose-accent uppercase tracking-widest">
          Your personalised results
        </p>
        <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground leading-tight">
          Your Perfect Looks
        </h1>

        {/* Profile summary chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {[
            { label: TONE_LABELS[profile.skin_tone], prefix: "Skin" },
            { label: UNDERTONE_LABELS[profile.undertone], prefix: "Undertone" },
            { label: profile.skin_type.charAt(0).toUpperCase() + profile.skin_type.slice(1), prefix: "Type" },
            { label: profile.eye_color.charAt(0).toUpperCase() + profile.eye_color.slice(1), prefix: "Eyes" },
            { label: profile.occasion.charAt(0).toUpperCase() + profile.occasion.slice(1), prefix: "Vibe" },
          ].map((chip) => (
            <span
              key={chip.prefix}
              className="inline-flex items-center gap-1 text-xs font-inter bg-white border border-blush-200 rounded-full px-3 py-1 shadow-soft"
            >
              <span className="text-muted-foreground">{chip.prefix}:</span>
              <span className="font-semibold text-rose-700">{chip.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm font-inter text-muted-foreground mb-6">
        Found <strong className="text-foreground">{looks.length} curated looks</strong> matching your profile
      </p>

      {/* Looks grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {looks.map((look, i) => (
          <LookCard key={look.id} look={look} rank={i + 1} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center space-y-4">
        <p className="text-sm font-inter text-muted-foreground">
          Want to explore different occasions or occasions?
        </p>
        <Button variant="secondary" onClick={() => router.push("/quiz")} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Retake Quiz
        </Button>
      </div>
    </div>
  );
}
