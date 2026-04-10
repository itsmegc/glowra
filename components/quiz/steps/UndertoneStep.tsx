import { cn } from "@/utils/cn";
import { Undertone } from "@/types";

const undertones: {
  value: Undertone;
  label: string;
  hint: string;
  swatches: string[];
  vein: string;
}[] = [
  {
    value: "warm",
    label: "Warm",
    hint: "Golden, peachy, yellow hues. Veins look greenish.",
    swatches: ["#E8C4A0", "#D4A574", "#B8860B"],
    vein: "Veins look green",
  },
  {
    value: "cool",
    label: "Cool",
    hint: "Pink, red, or bluish hues. Veins look blue/purple.",
    swatches: ["#F7D6D0", "#E8A0B0", "#C4566A"],
    vein: "Veins look blue/purple",
  },
  {
    value: "neutral",
    label: "Neutral",
    hint: "Mix of warm & cool. Veins look blue-green.",
    swatches: ["#EDD5BE", "#D4A89A", "#A0785A"],
    vein: "Veins look blue-green",
  },
];

interface Props {
  value: Undertone | "";
  onChange: (v: Undertone) => void;
}

export default function UndertoneStep({ value, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground">
          What's your undertone?
        </h2>
        <p className="text-sm font-inter text-muted-foreground">
          Check the inside of your wrist — what colour are your veins?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {undertones.map((u) => (
          <button
            key={u.value}
            type="button"
            onClick={() => onChange(u.value)}
            className={cn(
              "group text-left p-5 rounded-2xl border-2 transition-all duration-200 space-y-4 focus:outline-none",
              value === u.value
                ? "border-rose-accent bg-blush-50 shadow-soft"
                : "border-blush-100 bg-white hover:border-rose-300 hover:shadow-soft"
            )}
          >
            {/* Swatches */}
            <div className="flex gap-2">
              {u.swatches.map((color) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div>
              <h3
                className={cn(
                  "font-playfair font-semibold text-lg",
                  value === u.value ? "text-rose-accent" : "text-foreground"
                )}
              >
                {u.label}
              </h3>
              <p className="text-xs font-inter text-muted-foreground mt-1 leading-relaxed">
                {u.hint}
              </p>
              <p className="text-xs font-inter font-semibold text-rose-accent/70 mt-2">
                {u.vein}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
