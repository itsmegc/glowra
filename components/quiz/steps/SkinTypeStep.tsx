import { cn } from "@/utils/cn";
import { SkinType } from "@/types";
import { Droplets, Wind, Layers, CheckCircle } from "lucide-react";

const skinTypes: {
  value: SkinType;
  label: string;
  icon: React.ElementType;
  description: string;
  tip: string;
}[] = [
  {
    value: "oily",
    label: "Oily",
    icon: Droplets,
    description: "Shiny T-zone, enlarged pores, prone to breakouts.",
    tip: "Use matte-finish, long-wear formulas",
  },
  {
    value: "dry",
    label: "Dry",
    icon: Wind,
    description: "Tight feeling, flaky patches, dull complexion.",
    tip: "Use hydrating, dewy formulas",
  },
  {
    value: "combo",
    label: "Combination",
    icon: Layers,
    description: "Oily T-zone with dry cheeks — the classic mix.",
    tip: "Use balanced formulas",
  },
  {
    value: "normal",
    label: "Normal",
    icon: CheckCircle,
    description: "Balanced, minimal concerns, smooth texture.",
    tip: "Most formulas work well",
  },
];

interface Props {
  value: SkinType | "";
  onChange: (v: SkinType) => void;
}

export default function SkinTypeStep({ value, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground">
          What's your skin type?
        </h2>
        <p className="text-sm font-inter text-muted-foreground">
          This helps us recommend the right foundation and primer formulas.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {skinTypes.map((st) => (
          <button
            key={st.value}
            type="button"
            onClick={() => onChange(st.value)}
            className={cn(
              "group text-left p-5 rounded-2xl border-2 transition-all duration-200 space-y-3 focus:outline-none",
              value === st.value
                ? "border-rose-accent bg-blush-50 shadow-soft"
                : "border-blush-100 bg-white hover:border-rose-300 hover:shadow-soft"
            )}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                value === st.value ? "bg-rose-100" : "bg-blush-100"
              )}
            >
              <st.icon
                className={cn(
                  "w-5 h-5",
                  value === st.value ? "text-rose-accent" : "text-muted-foreground"
                )}
              />
            </div>
            <div>
              <h3
                className={cn(
                  "font-playfair font-semibold text-base",
                  value === st.value ? "text-rose-accent" : "text-foreground"
                )}
              >
                {st.label}
              </h3>
              <p className="text-xs font-inter text-muted-foreground mt-1 leading-relaxed">
                {st.description}
              </p>
              <p className="text-xs font-inter font-medium text-rose-accent/70 mt-1.5">
                💡 {st.tip}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
