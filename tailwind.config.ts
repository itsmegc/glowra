import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // Glowra brand palette
        blush: {
          DEFAULT: "#F7D6D0",
          50: "#fdf4f3",
          100: "#fbe8e5",
          200: "#F7D6D0",
          300: "#f0b4ab",
          400: "#e58c7e",
          500: "#d86556",
          600: "#c44d3d",
          700: "#a33d30",
          800: "#87352b",
          900: "#703029",
        },
        nude: {
          DEFAULT: "#E8C4A0",
          50: "#fdf8f2",
          100: "#faeee0",
          200: "#F5DEC0",
          300: "#E8C4A0",
          400: "#d9a474",
          500: "#cc8a53",
          600: "#b87040",
          700: "#975836",
          800: "#7a4830",
          900: "#643c29",
        },
        ivory: {
          DEFAULT: "#FAF7F4",
          50: "#FAF7F4",
          100: "#f5ede5",
          200: "#ecddd0",
        },
        rose: {
          DEFAULT: "#C4566A",
          accent: "#C4566A",
          50: "#fdf2f4",
          100: "#fce7eb",
          200: "#f9d0d8",
          300: "#f4a8b7",
          400: "#ec7690",
          500: "#e0496b",
          600: "#C4566A",
          700: "#ad3055",
          800: "#912a49",
          900: "#7b2742",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(196, 86, 106, 0.08)",
        card: "0 4px 32px rgba(196, 86, 106, 0.10)",
        glow: "0 0 40px rgba(247, 214, 208, 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
