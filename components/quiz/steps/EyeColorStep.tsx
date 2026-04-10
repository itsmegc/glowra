import { cn } from "@/utils/cn";
import { EyeColor } from "@/types";

const eyeColors: { value: EyeColor; label: string; color: string }[] = [
  { value: "brown", label: "Brown", color: "#6B3F2A" },
  { value: "black", label: "Black", color: "#1C1C1C" },
  { value: "blue", label: "Blue", color: "#5B8DB8" },
  { value: "green", label: "Green", color: "#4A7C59" },
  { value: "hazel", label: "Hazel", color: "#8B7355" },
  { value: "gray", label: "Gray", color: "#8E9BAD" },
];

interface Props {
  value: EyeColor | "";
  onChange: (v: EyeColor) => void;
}

export default function EyeColorStep({ value, onChange }: Props) {
  return (
    <div className="space-y-5">
      <div className="text-center space-y-2">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-foreground">
          What&apos;s your eye colour?
        </h2>
        <p className="text-sm font-inter text-muted-foreground">
          We&apos;ll suggest eyeshadow shades that make your eyes pop.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {eyeColors.map((ec) => (
          <button
            key={ec.value}
            type="button"
            onClick={() => onChange(ec.value)}
            className={cn(
              "group flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all duration-200 focus:outline-none",
              value === ec.value
                ? "border-rose-accent bg-blush-50 shadow-soft"
                : "border-blush-100 bg-white hover:border-rose-300 hover:shadow-soft"
            )}
          >
            {/* Eye-like swatch */}
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="w-14 h-8 bg-white border-2 border-blush-200 rounded-full overflow-hidden flex items-center justify-center shadow-sm">
                <div
                  className="w-8 h-8 rounded-full border-2 border-white/50 shadow-inner transition-transform group-hover:scale-105"
                  style={{ backgroundColor: ec.color }}
                />
              </div>
            </div>
            <span
              className={cn(
                "text-sm font-inter font-semibold",
                value === ec.value ? "text-rose-accent" : "text-foreground"
              )}
            >
              {ec.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
