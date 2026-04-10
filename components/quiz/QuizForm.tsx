"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import StepIndicator from "./StepIndicator";
import SkinToneStep from "./steps/SkinToneStep";
import UndertoneStep from "./steps/UndertoneStep";
import SkinTypeStep from "./steps/SkinTypeStep";
import EyeColorStep from "./steps/EyeColorStep";
import OccasionStep from "./steps/OccasionStep";
import { SkinProfile, SkinTone, Undertone, SkinType, EyeColor, Occasion } from "@/types";
import { cn } from "@/utils/cn";

const STEP_LABELS = ["Skin Tone", "Undertone", "Skin Type", "Eye Colour", "Occasion"];
const TOTAL_STEPS = 5;

const emptyProfile: Partial<SkinProfile> = {};

export default function QuizForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<Partial<SkinProfile>>(emptyProfile);
  const [saving, setSaving] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return !!profile.skin_tone;
      case 2: return !!profile.undertone;
      case 3: return !!profile.skin_type;
      case 4: return !!profile.eye_color;
      case 5: return !!profile.occasion;
      default: return false;
    }
  };

  const goNext = () => {
    if (!canProceed()) return;
    setDirection("forward");
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  };

  const goBack = () => {
    setDirection("back");
    setStep((s) => Math.max(1, s - 1));
  };

  const handleSubmit = async () => {
    if (!profile.skin_tone || !profile.undertone || !profile.skin_type || !profile.eye_color || !profile.occasion) return;
    setSaving(true);
    // Persist to sessionStorage for looks page (no login required for MVP)
    sessionStorage.setItem("glowra_profile", JSON.stringify(profile));
    // Small delay for UX
    await new Promise((r) => setTimeout(r, 600));
    router.push("/looks");
  };

  const update = <K extends keyof SkinProfile>(key: K, val: SkinProfile[K]) => {
    setProfile((p) => ({ ...p, [key]: val }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory to-blush-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-xs font-inter font-semibold text-rose-accent uppercase tracking-widest">
            Skin Profile Quiz
          </p>
          <h1 className="font-playfair text-3xl font-bold text-foreground">
            Discover your perfect look
          </h1>
        </div>

        {/* Card */}
        <div className="glowra-card space-y-8">
          {/* Step indicator */}
          <StepIndicator
            totalSteps={TOTAL_STEPS}
            currentStep={step}
            labels={STEP_LABELS}
          />

          {/* Step content */}
          <div className="min-h-[340px] flex flex-col justify-center">
            {step === 1 && (
              <SkinToneStep
                value={profile.skin_tone ?? ""}
                onChange={(v) => update("skin_tone", v)}
              />
            )}
            {step === 2 && (
              <UndertoneStep
                value={profile.undertone ?? ""}
                onChange={(v) => update("undertone", v)}
              />
            )}
            {step === 3 && (
              <SkinTypeStep
                value={profile.skin_type ?? ""}
                onChange={(v) => update("skin_type", v)}
              />
            )}
            {step === 4 && (
              <EyeColorStep
                value={profile.eye_color ?? ""}
                onChange={(v) => update("eye_color", v)}
              />
            )}
            {step === 5 && (
              <OccasionStep
                value={profile.occasion ?? ""}
                onChange={(v) => update("occasion", v)}
              />
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-2 border-t border-blush-100">
            <Button
              variant="ghost"
              onClick={goBack}
              disabled={step === 1 || saving}
              className="gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>

            <span className="text-xs font-inter text-muted-foreground">
              {step} of {TOTAL_STEPS}
            </span>

            <Button
              onClick={goNext}
              disabled={!canProceed() || saving}
              className={cn("gap-1", !canProceed() && "opacity-50 cursor-not-allowed")}
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Finding your looks…
                </>
              ) : step === TOTAL_STEPS ? (
                "See My Looks ✨"
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Skip auth note */}
        <p className="text-center text-xs font-inter text-muted-foreground mt-4">
          No account needed · Save your looks by signing in later
        </p>
      </div>
    </div>
  );
}
