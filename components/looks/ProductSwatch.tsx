import { Product } from "@/types";
import { ExternalLink } from "lucide-react";

interface ProductSwatchProps {
  label: string;
  product: Product;
}

export default function ProductSwatch({ label, product }: ProductSwatchProps) {
  return (
    <div className="flex items-center gap-3 group">
      {/* Color swatch */}
      <div
        className="w-9 h-9 rounded-full border-2 border-white shadow-md ring-1 ring-blush-100 flex-shrink-0"
        style={{ backgroundColor: product.color }}
        title={`${label}: ${product.shade}`}
      />

      {/* Product info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-inter font-semibold text-rose-accent uppercase tracking-wide">
            {label}
          </span>
          {product.brand && (
            <span className="text-[10px] font-inter text-muted-foreground">
              · {product.brand}
            </span>
          )}
        </div>
        <p className="text-sm font-inter text-foreground leading-tight truncate">
          {product.name}
        </p>
        <p className="text-xs font-inter text-muted-foreground italic">
          {product.shade}
        </p>
      </div>

      {/* Affiliate link placeholder */}
      {product.affiliate_url && (
        <a
          href={product.affiliate_url}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-accent hover:text-rose-700"
          aria-label={`Shop ${product.name}`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
}
