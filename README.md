<div align="center">

# ✨ Glowra

### *Your perfect look, personalized.*

AI-powered makeup suggestion platform that matches curated looks to your unique skin tone, undertone, skin type, and occasion.

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/Neon_PostgreSQL-00E699?style=for-the-badge&logo=postgresql&logoColor=black)](https://neon.tech/)

</div>

---

## 🌸 Overview

**Glowra** is a full-stack beauty platform that uses a smart matching algorithm to recommend personalised makeup looks based on a user's skin profile. Answer a 5-step quiz, get curated looks with product recommendations and colour swatches — no account required.

### The Flow

```
Skin Quiz (5 steps) → Smart Match Algorithm → Curated Looks + Product Swatches → Save & Shop
```

---

## 🎨 Features

### Phase 1 (MVP — current)

| Feature | Description |
|---|---|
| 🏠 **Landing Page** | Hero section, how-it-works, testimonials, CTA |
| 📋 **Skin Profile Quiz** | 5-step form: skin tone, undertone, skin type, eye colour, occasion |
| 💄 **Look Recommendations** | 3–5 personalised looks with product swatches per profile |
| 🎨 **Colour Swatches** | Foundation, blush, lipstick, eyeshadow & highlighter per look |
| 💾 **Save Looks** | Authenticated users can save favourite looks to their profile |
| 🔐 **Magic Link Auth** | Passwordless sign-in via NextAuth.js email provider |
| 📱 **Mobile-first** | Fully responsive, premium feminine design |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + custom design system |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Database** | Neon (serverless PostgreSQL) |
| **ORM** | Prisma |
| **Auth** | NextAuth.js v4 (magic link / email provider) |
| **Fonts** | Playfair Display + Inter (via next/font) |
| **Deployment** | Vercel |
| **Image Storage** | Cloudinary (Phase 2) |

---

## 🎨 Design System

```
Blush Pink    #F7D6D0  ████  Primary background accent
Warm Nude     #E8C4A0  ████  Secondary tones
Soft Ivory    #FAF7F4  ████  Page background
Deep Rose     #C4566A  ████  CTA / accent colour
```

**Typography:** Playfair Display (headings) · Inter (body)

---

## 📁 Project Structure

```
glowra/
├── app/
│   ├── api/auth/[...nextauth]/   # NextAuth API handler
│   ├── auth/                     # Sign-in + verify pages
│   ├── quiz/                     # 5-step skin quiz
│   ├── looks/                    # Personalised results page
│   ├── layout.tsx
│   ├── page.tsx                  # Landing page
│   └── globals.css
├── components/
│   ├── auth/                     # AuthForm
│   ├── landing/                  # Hero, HowItWorks, Testimonials, CTA
│   ├── layout/                   # Header, Footer
│   ├── looks/                    # LookCard, ProductSwatch, LooksClient
│   ├── quiz/                     # QuizForm, StepIndicator, 5 step components
│   └── ui/                       # Button, Badge, Toast (shadcn/ui)
├── lib/
│   ├── auth.ts                   # NextAuth config
│   ├── prisma.ts                 # Prisma client singleton
│   └── actions.ts                # Server Actions
├── prisma/
│   └── schema.prisma             # DB schema
├── utils/
│   ├── looks-matcher.ts          # Scoring algorithm + look catalogue
│   └── cn.ts                     # Tailwind class merge
└── types/
    ├── index.ts                  # App types
    └── next-auth.d.ts            # Session type augmentation
```

---

## 🧠 How the Matching Works

The algorithm scores each look against the user's skin profile using a weighted point system:

```
Occasion match   → 10 pts  (highest priority)
Skin tone match  →  6 pts
Adjacent tone    →  2 pts  (partial credit)
Undertone match  →  4 pts
Neutral undertone→  1 pt   (fallback)
```

Top 5 highest-scoring looks are returned and displayed.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn
- A [Neon](https://neon.tech) PostgreSQL database
- An SMTP email provider (Gmail App Password or [Resend](https://resend.com))

### 1. Clone & Install

```bash
git clone https://github.com/itsmegc/glowra.git
cd glowra
yarn
```

### 2. Environment Variables

```bash
cp .env.local.example .env.local
```

Fill in `.env.local`:

```env
# Neon PostgreSQL
DATABASE_URL="postgresql://...@...neon.tech/neondb?sslmode=require&pgbouncer=true"
DATABASE_URL_UNPOOLED="postgresql://...@...neon.tech/neondb?sslmode=require"

# NextAuth
NEXTAUTH_SECRET="your-secret"      # openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"

# Email (magic link)
EMAIL_SERVER_HOST="smtp.gmail.com"
EMAIL_SERVER_PORT="587"
EMAIL_SERVER_USER="you@gmail.com"
EMAIL_SERVER_PASSWORD="your-app-password"
EMAIL_FROM="Glowra <you@gmail.com>"

NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3. Database Setup

```bash
yarn db:generate   # generate Prisma client
yarn db:push       # push schema to Neon
```

### 4. Run

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Scripts

```bash
yarn dev           # start development server
yarn build         # production build
yarn start         # start production server
yarn lint          # run ESLint
yarn db:generate   # regenerate Prisma client
yarn db:push       # sync schema to DB (dev)
yarn db:migrate    # create migration (prod)
yarn db:studio     # open Prisma Studio
```

---

## 🗄️ Database Schema

```prisma
model Profile {
  userId    String   @unique
  skinTone  String   # fair | light | medium | tan | deep
  undertone String   # warm | cool | neutral
  skinType  String   # oily | dry | combo | normal
  eyeColor  String   # brown | blue | green | hazel | gray | black
}

model SavedLook {
  userId  String
  lookId  String   # references static look slug
  @@unique([userId, lookId])
}
```

Full NextAuth models (User, Account, Session, VerificationToken) are included in [prisma/schema.prisma](prisma/schema.prisma).

---

## 🗺️ Roadmap

### Phase 2 (planned)
- [ ] Claude AI integration for dynamic look generation
- [ ] Cloudinary image uploads (user photos for better matching)
- [ ] Product affiliate link integration
- [ ] Saved looks profile page
- [ ] Look sharing / social features
- [ ] Admin panel for managing the look catalogue

---

## 📄 License

MIT © [itsmegc](https://github.com/itsmegc)

---

<div align="center">
  Made with 💖 for beauty lovers everywhere
</div>
