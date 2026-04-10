export type SkinTone = "fair" | "light" | "medium" | "tan" | "deep";
export type Undertone = "warm" | "cool" | "neutral";
export type SkinType = "oily" | "dry" | "combo" | "normal";
export type EyeColor = "brown" | "blue" | "green" | "hazel" | "gray" | "black";
export type Occasion = "daily" | "office" | "party" | "bridal";

export interface SkinProfile {
  skin_tone: SkinTone;
  undertone: Undertone;
  skin_type: SkinType;
  eye_color: EyeColor;
  occasion: Occasion;
}

export interface Product {
  name: string;
  shade: string;
  color: string; // hex color for swatch
  brand?: string;
  affiliate_url?: string;
}

export interface LookProducts {
  foundation: Product;
  blush: Product;
  lipstick: Product;
  eyeshadow: Product;
  highlighter: Product;
  eyeliner?: Product;
}

export interface Look {
  id: string;
  name: string;
  occasion: Occasion;
  description: string;
  skin_tone_match: SkinTone[];
  undertone_match: Undertone[];
  products: LookProducts;
  image_url?: string;
  tags: string[];
}

export interface SavedLook {
  user_id: string;
  look_id: string;
  created_at: string;
}

export interface DbProfile {
  id: string;
  user_id: string;
  skin_tone: SkinTone;
  undertone: Undertone;
  skin_type: SkinType;
  eye_color: EyeColor;
  created_at: string;
  updated_at: string;
}

export interface QuizStep {
  id: number;
  title: string;
  subtitle: string;
  field: keyof SkinProfile;
}
