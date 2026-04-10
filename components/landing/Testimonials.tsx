import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Glowra found me the perfect nude lip for my warm undertone. I've been searching for years!",
    name: "Priya S.",
    skin: "Medium / Warm",
    avatar: "#E8C4A0",
  },
  {
    quote:
      "The party look suggestion was spot-on. Foundation shade matched me perfectly on the first try.",
    name: "Emma L.",
    skin: "Fair / Cool",
    avatar: "#F7D6D0",
  },
  {
    quote:
      "Finally an app that actually considers my deep skin tone. The recommendations are stunning.",
    name: "Adeola K.",
    skin: "Deep / Neutral",
    avatar: "#8B5E3C",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-ivory to-blush-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-14">
          <p className="text-xs font-inter font-semibold text-rose-accent uppercase tracking-widest">
            Love Letters
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground">
            Women are glowing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glowra-card space-y-4 hover:shadow-card transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-nude-400 fill-nude-300"
                  />
                ))}
              </div>

              <p className="font-inter text-foreground/80 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2">
                <div
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: t.avatar }}
                />
                <div>
                  <p className="text-sm font-inter font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs font-inter text-muted-foreground">
                    {t.skin}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
