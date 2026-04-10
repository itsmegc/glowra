import { cn } from "@/utils/cn";
import { Occasion } from "@/types";
import { Sun, Briefcase, PartyPopper, Heart } from "lucide-react";

const occasions: {
  value: Occasion;
  label: string;
  emoji: React.ElementType;
  description: string;
  vibe: string;
}[] = [
  {
    value: "daily",
    label: "Daily",
    emoji: Sun,
    description: "Effortless everyday looks",
    vibe: "Natural · Fresh · Quick",
  },
  {
    value: "office",
    label: "Office",
    emoji: Briefcase,
    description: "Polished and professional",
    vibe: "Polished · Subtle · Confident",
  },
  {
    value: "party",
    label: "Party",
    emoji: PartyPopper,
    description: "Bold, glam evening looks",
    vibe: "Glam · Bold · Striking",
  },
  {
    value: "bridal",
    label: "Bridal",
    emoji: Heart,
    description: "Timeless bridal beauty",
    vibe: "Ethereal · Romantic · Lasting",
  },
];

interface Props {
  value: Occasion | "";
  onChange: (v: Occasion) => void;
}

export default function OccasionStep({ value, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground">
          What&apos;s your main occasion?
        </h2>
        <p className="text-sm font-inter text-muted-foreground">
          Pick the vibe you&apos;re going for. You can explore all looks afterward.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {occasions.map((occ) => (
          <button
            key={occ.value}
            type="button"
            onClick={() => onChange(occ.value)}
            className={cn(
              "group text-left p-5 rounded-2xl border-2 transition-all duration-200 space-y-3 focus:outline-none",
              value === occ.value
                ? "border-rose-accent bg-blush-50 shadow-soft"
                : "border-blush-100 bg-white hover:border-rose-300 hover:shadow-soft"
            )}
          >
            <div
              className={cn(
                "w-11 h-11 rounded-xl flex items-center justify-center transition-colors",
                value === occ.value ? "bg-rose-100" : "bg-blush-100 group-hover:bg-rose-50"
              )}
            >
              <occ.emoji
                className={cn(
                  "w-5 h-5",
                  value === occ.value ? "text-rose-accent" : "text-muted-foreground"
                )}
              />
            </div>
            <div>
              <h3
                className={cn(
                  "font-playfair font-semibold text-lg",
                  value === occ.value ? "text-rose-accent" : "text-foreground"
                )}
              >
                {occ.label}
              </h3>
              <p className="text-xs font-inter text-muted-foreground mt-0.5">
                {occ.description}
              </p>
              <p className="text-xs font-inter font-medium text-rose-accent/60 mt-1.5">
                {occ.vibe}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
