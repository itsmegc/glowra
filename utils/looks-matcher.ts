import { Look, SkinProfile, SkinTone, Undertone, Occasion } from "@/types";

// ─── Look Database ─────────────────────────────────────────────────────────────
export const ALL_LOOKS: Look[] = [
  // ── DAILY LOOKS ──
  {
    id: "bare-glow",
    name: "Bare Glow",
    occasion: "daily",
    description:
      "A barely-there, skin-first look that lets your natural beauty shine through.",
    skin_tone_match: ["fair", "light"],
    undertone_match: ["cool", "neutral"],
    tags: ["no-makeup makeup", "dewy", "minimal"],
    products: {
      foundation: { name: "Fenty Beauty Pro Filt'r", shade: "110W Soft Matte", color: "#EEC9A3", brand: "Fenty Beauty" },
      blush: { name: "NARS Blush", shade: "Orgasm (mini)", color: "#F7C8B8", brand: "NARS" },
      lipstick: { name: "Charlotte Tilbury Pillow Talk", shade: "Pillow Talk Original", color: "#E8A898", brand: "Charlotte Tilbury" },
      eyeshadow: { name: "Urban Decay Naked", shade: "Naked (champagne)", color: "#F5E6D3", brand: "Urban Decay" },
      highlighter: { name: "Becca Shimmering Skin", shade: "Pearl", color: "#F9EFE0", brand: "Becca" },
    },
  },
  {
    id: "warm-everyday",
    name: "Warm Everyday",
    occasion: "daily",
    description:
      "Sun-kissed, natural warmth for effortless daily wear.",
    skin_tone_match: ["medium", "tan"],
    undertone_match: ["warm", "neutral"],
    tags: ["warm", "natural", "bronzed"],
    products: {
      foundation: { name: "MAC Studio Fix Fluid", shade: "NC35 Golden Beige", color: "#D4A574", brand: "MAC" },
      blush: { name: "Milani Baked Blush", shade: "Luminoso", color: "#E8A878", brand: "Milani" },
      lipstick: { name: "NYX Butter Gloss", shade: "Praline", color: "#C08060", brand: "NYX" },
      eyeshadow: { name: "Too Faced Natural Love", shade: "Peach Sorbet", color: "#DBA070", brand: "Too Faced" },
      highlighter: { name: "Anastasia Beverly Hills Amrezy", shade: "Gold", color: "#EDD080", brand: "ABH" },
    },
  },
  {
    id: "rich-skin-daily",
    name: "Deep Radiance",
    occasion: "daily",
    description:
      "Rich, luminous base with earthy warmth — celebrating deep skin beautifully.",
    skin_tone_match: ["deep"],
    undertone_match: ["warm", "cool", "neutral"],
    tags: ["rich", "luminous", "everyday"],
    products: {
      foundation: { name: "Fenty Beauty Pro Filt'r", shade: "480N Rich Ebony", color: "#5C3319", brand: "Fenty Beauty" },
      blush: { name: "Juvia's Place The Saharan", shade: "Zaire", color: "#8B3A28", brand: "Juvia's Place" },
      lipstick: { name: "NYX Matte Lipstick", shade: "Sable", color: "#6B3020", brand: "NYX" },
      eyeshadow: { name: "Anastasia Beverly Hills Sultry", shade: "Sienna", color: "#7B4A2A", brand: "ABH" },
      highlighter: { name: "Pat McGrath Labs Gold 001", shade: "Gold Lustre", color: "#C8962A", brand: "Pat McGrath" },
    },
  },

  // ── OFFICE LOOKS ──
  {
    id: "cool-office",
    name: "Cool Boardroom",
    occasion: "office",
    description:
      "Clean, polished and professional with a cool-toned edge.",
    skin_tone_match: ["fair", "light", "medium"],
    undertone_match: ["cool"],
    tags: ["polished", "cool-toned", "matte"],
    products: {
      foundation: { name: "Estée Lauder Double Wear", shade: "1N1 Ivory Nude", color: "#F2D5BE", brand: "Estée Lauder" },
      blush: { name: "NARS Blush", shade: "Sin (berry-rose)", color: "#C06080", brand: "NARS" },
      lipstick: { name: "MAC Matte Lipstick", shade: "Velvet Teddy", color: "#B87060", brand: "MAC" },
      eyeshadow: { name: "Urban Decay Naked3", shade: "Darkside", color: "#A08898", brand: "Urban Decay" },
      highlighter: { name: "Becca Pressed Highlighter", shade: "Rose Quartz", color: "#F0C8C0", brand: "Becca" },
      eyeliner: { name: "Stila Stay All Day", shade: "Espresso", color: "#3C2018", brand: "Stila" },
    },
  },
  {
    id: "warm-office",
    name: "Golden Hour Pro",
    occasion: "office",
    description:
      "Warm, glowing skin with a defined brow and just a hint of bronze.",
    skin_tone_match: ["medium", "tan", "deep"],
    undertone_match: ["warm"],
    tags: ["warm", "professional", "bronzed"],
    products: {
      foundation: { name: "Fenty Beauty Pro Filt'r", shade: "340N Warm Caramel", color: "#B8845A", brand: "Fenty Beauty" },
      blush: { name: "Milani Rose Powder Blush", shade: "Tea Rose", color: "#D09070", brand: "Milani" },
      lipstick: { name: "Charlotte Tilbury Matte", shade: "Pillow Talk Medium", color: "#C07858", brand: "Charlotte Tilbury" },
      eyeshadow: { name: "Too Faced Natural Love", shade: "Toasty", color: "#B07848", brand: "Too Faced" },
      highlighter: { name: "Anastasia Beverly Hills Amrezy", shade: "Bronze", color: "#C8922A", brand: "ABH" },
    },
  },

  // ── PARTY LOOKS ──
  {
    id: "rose-gold-glam",
    name: "Rose Gold Glow",
    occasion: "party",
    description:
      "Shimmery rose gold lids, flushed cheeks, and a bold lip — effortlessly glam.",
    skin_tone_match: ["fair", "light", "medium"],
    undertone_match: ["warm", "neutral"],
    tags: ["glam", "shimmer", "rose gold"],
    products: {
      foundation: { name: "Make Up For Ever Ultra HD", shade: "Y215 Ivory", color: "#EDD5BE", brand: "MUFE" },
      blush: { name: "Benefit Dandelion", shade: "Rosy Pink", color: "#F0A8A0", brand: "Benefit" },
      lipstick: { name: "Charlotte Tilbury Pillow Talk", shade: "Pillow Talk Intense", color: "#C05878", brand: "Charlotte Tilbury" },
      eyeshadow: { name: "Pat McGrath Mothership V", shade: "Rose Gold (warm)", color: "#C89060", brand: "Pat McGrath" },
      highlighter: { name: "Fenty Beauty Killawatt", shade: "Trophy Wife", color: "#E8B840", brand: "Fenty Beauty" },
      eyeliner: { name: "Urban Decay 24/7", shade: "Goldmine", color: "#C8982A", brand: "Urban Decay" },
    },
  },
  {
    id: "sultry-berry",
    name: "Sultry Berry",
    occasion: "party",
    description:
      "Deep berry lips and smoky plum eyes for a striking cool-toned night look.",
    skin_tone_match: ["light", "medium", "tan"],
    undertone_match: ["cool", "neutral"],
    tags: ["bold", "berry", "smoky"],
    products: {
      foundation: { name: "Estée Lauder Double Wear", shade: "3N1 Ivory Beige", color: "#D4A07A", brand: "Estée Lauder" },
      blush: { name: "NARS Blush", shade: "Exhibit A (plum-pink)", color: "#A05068", brand: "NARS" },
      lipstick: { name: "MAC Matte Lipstick", shade: "Diva (dark burgundy)", color: "#7A2840", brand: "MAC" },
      eyeshadow: { name: "Urban Decay Naked Smoky", shade: "Armor (purple-grey)", color: "#6A5878", brand: "Urban Decay" },
      highlighter: { name: "Becca Pressed Highlighter", shade: "Moonstone", color: "#E8E0F0", brand: "Becca" },
      eyeliner: { name: "L'Oreal Infallible", shade: "Blueberry", color: "#3A2858", brand: "L'Oreal" },
    },
  },
  {
    id: "midnight-gold",
    name: "Midnight Gold",
    occasion: "party",
    description:
      "Rich golden hues on deep skin — pure opulence for a night out.",
    skin_tone_match: ["tan", "deep"],
    undertone_match: ["warm", "neutral"],
    tags: ["gold", "deep", "opulent"],
    products: {
      foundation: { name: "Fenty Beauty Pro Filt'r", shade: "440N Deep", color: "#7A4A28", brand: "Fenty Beauty" },
      blush: { name: "Juvia's Place Marrakesh", shade: "Dar El Bacha", color: "#A05830", brand: "Juvia's Place" },
      lipstick: { name: "MAC Matte Lipstick", shade: "Antique Velvet", color: "#8B3A20", brand: "MAC" },
      eyeshadow: { name: "Juvia's Place The Nubian", shade: "African Queen", color: "#B8822A", brand: "Juvia's Place" },
      highlighter: { name: "Pat McGrath Gold 001", shade: "Brass", color: "#D4A030", brand: "Pat McGrath" },
      eyeliner: { name: "Stila Stay All Day", shade: "Onyx", color: "#1A1A1A", brand: "Stila" },
    },
  },

  // ── BRIDAL LOOKS ──
  {
    id: "ethereal-bride",
    name: "Ethereal Bride",
    occasion: "bridal",
    description:
      "Soft, romantic, and effortlessly luminous — a dreamy bridal look that photographs beautifully.",
    skin_tone_match: ["fair", "light"],
    undertone_match: ["cool", "neutral"],
    tags: ["romantic", "luminous", "bridal"],
    products: {
      foundation: { name: "Giorgio Armani Luminous Silk", shade: "2 Porcelain Pink", color: "#F5E0D0", brand: "Armani Beauty" },
      blush: { name: "Charlotte Tilbury Cheek to Chic", shade: "Lovegasm (baby pink)", color: "#F0C0B8", brand: "Charlotte Tilbury" },
      lipstick: { name: "Charlotte Tilbury Pillow Talk", shade: "Pillow Talk Original", color: "#E8A898", brand: "Charlotte Tilbury" },
      eyeshadow: { name: "Pat McGrath Mothership III", shade: "Ivory (sheer glow)", color: "#F8EDE0", brand: "Pat McGrath" },
      highlighter: { name: "Westman Atelier Lit Up Highlight", shade: "Pêche", color: "#F8D8C0", brand: "Westman Atelier" },
      eyeliner: { name: "Urban Decay 24/7", shade: "White (inner corner)", color: "#F8F8F8", brand: "Urban Decay" },
    },
  },
  {
    id: "golden-bride",
    name: "Golden Goddess Bride",
    occasion: "bridal",
    description:
      "Warm, sun-kissed bridal beauty with long-lasting, photography-perfect coverage.",
    skin_tone_match: ["medium", "tan"],
    undertone_match: ["warm"],
    tags: ["warm bridal", "golden", "flawless"],
    products: {
      foundation: { name: "Fenty Beauty Pro Filt'r", shade: "310W Warm Almond", color: "#C49060", brand: "Fenty Beauty" },
      blush: { name: "NARS Blush", shade: "Deep Throat (peach-pink)", color: "#E0A888", brand: "NARS" },
      lipstick: { name: "MAC Amplified Lipstick", shade: "Brick-o-la (warm nude)", color: "#C08060", brand: "MAC" },
      eyeshadow: { name: "Charlotte Tilbury Luxury Palette", shade: "Golden Goddess", color: "#D4A060", brand: "Charlotte Tilbury" },
      highlighter: { name: "Anastasia Beverly Hills Glow Kit", shade: "Starburst", color: "#E8C870", brand: "ABH" },
      eyeliner: { name: "Stila Stay All Day", shade: "Espresso", color: "#3C2018", brand: "Stila" },
    },
  },
  {
    id: "regal-bride",
    name: "Regal Bride",
    occasion: "bridal",
    description:
      "Bold, striking bridal beauty celebrating deep skin with rich colour and lasting radiance.",
    skin_tone_match: ["deep"],
    undertone_match: ["warm", "cool", "neutral"],
    tags: ["deep skin bridal", "regal", "bold"],
    products: {
      foundation: { name: "Fenty Beauty Pro Filt'r", shade: "498N Rich Ebony", color: "#4A2818", brand: "Fenty Beauty" },
      blush: { name: "Juvia's Place Saharan", shade: "Nairobi (warm berry)", color: "#7A3030", brand: "Juvia's Place" },
      lipstick: { name: "MAC Matte Lipstick", shade: "Antique Velvet (brick red)", color: "#7A3020", brand: "MAC" },
      eyeshadow: { name: "Pat McGrath Mothership IX", shade: "Bronze Seduction", color: "#9A6830", brand: "Pat McGrath" },
      highlighter: { name: "Pat McGrath Gold 001", shade: "Brass Bronze", color: "#C89028", brand: "Pat McGrath" },
      eyeliner: { name: "L'Oreal Infallible", shade: "Matte Black", color: "#1A1A1A", brand: "L'Oreal" },
    },
  },
];

// ─── Scoring ────────────────────────────────────────────────────────────────────
function scoreLook(look: Look, profile: SkinProfile): number {
  let score = 0;

  // Occasion match is highest priority
  if (look.occasion === profile.occasion) score += 10;

  // Skin tone match
  if (look.skin_tone_match.includes(profile.skin_tone)) score += 6;
  else {
    // Partial credit for adjacent tones
    const toneOrder: SkinTone[] = ["fair", "light", "medium", "tan", "deep"];
    const profileIdx = toneOrder.indexOf(profile.skin_tone);
    const hasAdjacent = look.skin_tone_match.some(
      (t) => Math.abs(toneOrder.indexOf(t) - profileIdx) === 1
    );
    if (hasAdjacent) score += 2;
  }

  // Undertone match
  if (look.undertone_match.includes(profile.undertone)) score += 4;
  else if (look.undertone_match.includes("neutral")) score += 1;

  return score;
}

// ─── Main export ────────────────────────────────────────────────────────────────
export function getMatchedLooks(profile: SkinProfile): Look[] {
  const scored = ALL_LOOKS.map((look) => ({
    look,
    score: scoreLook(look, profile),
  }));

  // Sort by score descending, take top 5
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((s) => s.look);
}
