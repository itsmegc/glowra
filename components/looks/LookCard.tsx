"use client";

import { useState } from "react";
import { Heart, ShoppingBag, Tag } from "lucide-react";
import { Look } from "@/types";
import ProductSwatch from "./ProductSwatch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { saveLook, removeSavedLook } from "@/lib/actions";
import { toast } from "@/hooks/use-toast";

const OCCASION_LABEL: Record<string, string> = {
  daily: "Daily",
  office: "Office",
  party: "Party ✨",
  bridal: "Bridal 💍",
};

interface LookCardProps {
  look: Look;
  isSaved?: boolean;
  rank: number;
}

export default function LookCard({ look, isSaved = false, rank }: LookCardProps) {
  const [saved, setSaved] = useState(isSaved);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      if (saved) {
        const res = await removeSavedLook(look.id);
        if (res.error === "Not authenticated") {
          toast({ title: "Sign in to save looks", description: "Create a free account to save your favourites." });
        } else {
          setSaved(false);
          toast({ title: "Look removed" });
        }
      } else {
        const res = await saveLook(look.id);
        if (res.error === "Not authenticated") {
          toast({ title: "Sign in to save looks", description: "Create a free account to save your favourites." });
        } else {
          setSaved(true);
          toast({ title: "Look saved! 💖", description: `${look.name} added to your profile.` });
        }
      }
    } finally {
      setSaving(false);
    }
  };

  const productEntries = Object.entries(look.products) as [string, typeof look.products.foundation][];

  return (
    <div className="glowra-card space-y-5 hover:shadow-card transition-all duration-300 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="blush" className="gap-1">
              <Tag className="w-3 h-3" />
              {OCCASION_LABEL[look.occasion]}
            </Badge>
            {rank === 1 && (
              <Badge variant="default" className="bg-rose-accent text-white">
                Best Match
              </Badge>
            )}
          </div>
          <h3 className="font-playfair text-xl font-bold text-foreground">
            {look.name}
          </h3>
          <p className="text-sm font-inter text-muted-foreground leading-relaxed">
            {look.description}
          </p>
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200",
            saved
              ? "border-rose-accent bg-rose-50 text-rose-accent"
              : "border-blush-200 bg-white text-muted-foreground hover:border-rose-300 hover:text-rose-accent"
          )}
          aria-label={saved ? "Remove from saved" : "Save look"}
        >
          <Heart className={cn("w-4 h-4", saved && "fill-rose-accent")} />
        </button>
      </div>

      {/* Colour palette strip */}
      <div className="flex items-center gap-2">
        {productEntries.slice(0, 5).map(([key, product]) => (
          <div
            key={key}
            className="w-8 h-8 rounded-full border-2 border-white shadow-sm ring-1 ring-blush-100"
            style={{ backgroundColor: product.color }}
            title={`${key}: ${product.shade}`}
          />
        ))}
        <span className="ml-1 text-xs font-inter text-muted-foreground">
          {productEntries.length} products
        </span>
      </div>

      {/* Products list */}
      <div className="space-y-3 pt-1 border-t border-blush-50">
        {productEntries.map(([key, product]) => (
          <ProductSwatch
            key={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            product={product}
          />
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {look.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-inter text-rose-accent/70 bg-blush-50 border border-blush-100 rounded-full px-2.5 py-0.5"
          >
            #{tag.replace(/ /g, "-")}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={() => toast({ title: "Coming soon!", description: "Shop links will be live soon. Save this look to be notified." })}
        >
          <ShoppingBag className="w-4 h-4" />
          Shop This Look
        </Button>
      </div>
    </div>
  );
}
