import { cn } from "@/utils/cn";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
  labels: string[];
}

export default function StepIndicator({
  totalSteps,
  currentStep,
  labels,
}: StepIndicatorProps) {
  return (
    <div className="w-full space-y-3">
      {/* Progress bar */}
      <div className="relative w-full h-1.5 bg-blush-100 rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-rose-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentStep) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step dots */}
      <div className="flex items-center justify-between">
        {labels.map((label, i) => {
          const stepNum = i + 1;
          const isDone = stepNum < currentStep;
          const isActive = stepNum === currentStep;
          return (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                  isDone && "bg-rose-accent text-white",
                  isActive && "bg-rose-accent text-white ring-4 ring-blush-200",
                  !isDone && !isActive && "bg-blush-100 text-muted-foreground"
                )}
              >
                {isDone ? <Check className="w-3.5 h-3.5" /> : stepNum}
              </div>
              <span
                className={cn(
                  "text-xs font-inter hidden sm:block transition-colors",
                  isActive ? "text-rose-accent font-semibold" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
