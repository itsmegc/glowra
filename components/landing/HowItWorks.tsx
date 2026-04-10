import { ClipboardList, Wand2, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell us about your skin",
    description:
      "Answer 5 quick questions about your skin tone, undertone, type, and preferred occasion. Takes less than 2 minutes.",
    color: "bg-blush-100",
    iconColor: "text-rose-accent",
  },
  {
    icon: Wand2,
    step: "02",
    title: "Our AI curates your looks",
    description:
      "Our smart matching engine analyzes your profile and selects looks with perfectly matched shades from top brands.",
    color: "bg-nude-100",
    iconColor: "text-nude-600",
  },
  {
    icon: ShoppingBag,
    step: "03",
    title: "Shop your perfect palette",
    description:
      "Save your favourite looks to your profile and shop each product directly with curated affiliate links.",
    color: "bg-rose-50",
    iconColor: "text-rose-700",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs font-inter font-semibold text-rose-accent uppercase tracking-widest">
            The Process
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground">
            Glow in 3 simple steps
          </h2>
          <p className="text-muted-foreground font-inter text-lg max-w-xl mx-auto">
            No guesswork, no overwhelm — just perfectly matched looks for your
            unique beauty.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group text-center space-y-5"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-blush-200 to-transparent" />
              )}

              {/* Icon */}
              <div
                className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center mx-auto shadow-soft group-hover:scale-105 transition-transform duration-300`}
              >
                <step.icon className={`w-9 h-9 ${step.iconColor}`} />
              </div>

              {/* Step number */}
              <span className="text-xs font-inter font-bold text-rose-accent/60 uppercase tracking-widest">
                Step {step.step}
              </span>

              {/* Content */}
              <h3 className="font-playfair text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-inter text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
