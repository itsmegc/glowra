import { cn } from "@/utils/cn";
import { SkinTone } from "@/types";

const tones: { value: SkinTone; label: string; color: string; description: string }[] = [
  { value: "fair", label: "Fair", color: "#F9DCC6", description: "Very light, burns easily" },
  { value: "light", label: "Light", color: "#EEC9A3", description: "Light, may tan lightly" },
  { value: "medium", label: "Medium", color: "#D4A574", description: "Warm medium, tans well" },
  { value: "tan", label: "Tan", color: "#B07D4E", description: "Olive to tan, rarely burns" },
  { value: "deep", label: "Deep", color: "#6B3E26", description: "Rich deep, never burns" },
];

interface Props {
  value: SkinTone | "";
  onChange: (v: SkinTone) => void;
}

export default function SkinToneStep({ value, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground">
          What&apos;s your skin tone?
        </h2>
        <p className="text-sm font-inter text-muted-foreground">
          Choose the closest match to your natural skin tone.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-3 mt-6">
        {tones.map((tone) => (
          <button
            key={tone.value}
            type="button"
            onClick={() => onChange(tone.value)}
            className={cn(
              "group flex flex-col items-center gap-2.5 p-3 rounded-2xl border-2 transition-all duration-200 focus:outline-none",
              value === tone.value
                ? "border-rose-accent bg-blush-50 shadow-soft"
                : "border-blush-100 bg-white hover:border-rose-300 hover:shadow-soft"
            )}
          >
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white shadow-md transition-transform group-hover:scale-105"
              style={{ backgroundColor: tone.color }}
            />
            <span
              className={cn(
                "text-xs font-inter font-semibold",
                value === tone.value ? "text-rose-accent" : "text-foreground"
              )}
            >
              {tone.label}
            </span>
            <span className="text-[10px] font-inter text-muted-foreground text-center leading-tight hidden sm:block">
              {tone.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
