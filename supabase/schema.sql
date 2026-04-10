-- ─── Glowra Supabase Schema ────────────────────────────────────────────────────
-- Run this in the Supabase SQL editor to set up your database.

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─── PROFILES ──────────────────────────────────────────────────────────────────
-- Stores skin profile data per user.
create table if not exists public.profiles (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  skin_tone   text not null check (skin_tone in ('fair','light','medium','tan','deep')),
  undertone   text not null check (undertone in ('warm','cool','neutral')),
  skin_type   text not null check (skin_type in ('oily','dry','combo','normal')),
  eye_color   text not null check (eye_color in ('brown','blue','green','hazel','gray','black')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (user_id)
);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

-- ─── LOOKS ─────────────────────────────────────────────────────────────────────
-- Stores the look catalogue (managed by admin, or seeded).
create table if not exists public.looks (
  id                uuid primary key default uuid_generate_v4(),
  slug              text unique not null,  -- e.g. 'rose-gold-glow'
  name              text not null,
  occasion          text not null check (occasion in ('daily','office','party','bridal')),
  description       text,
  skin_tone_match   text[] not null default '{}',
  undertone_match   text[] not null default '{}',
  products          jsonb not null default '{}',
  tags              text[] not null default '{}',
  image_url         text,
  is_active         boolean not null default true,
  created_at        timestamptz not null default now()
);

-- ─── SAVED LOOKS ───────────────────────────────────────────────────────────────
-- Junction table: user ↔ saved looks.
create table if not exists public.saved_looks (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  look_id     text not null,  -- references the static look id (slug-based)
  created_at  timestamptz not null default now(),
  unique (user_id, look_id)
);

-- ─── ROW LEVEL SECURITY ────────────────────────────────────────────────────────
alter table public.profiles enable row level security;
alter table public.looks enable row level security;
alter table public.saved_looks enable row level security;

-- Profiles: users can only read/write their own
create policy "profiles: select own" on public.profiles
  for select using (auth.uid() = user_id);

create policy "profiles: insert own" on public.profiles
  for insert with check (auth.uid() = user_id);

create policy "profiles: update own" on public.profiles
  for update using (auth.uid() = user_id);

-- Looks: anyone can read active looks
create policy "looks: select active" on public.looks
  for select using (is_active = true);

-- Saved looks: users manage their own
create policy "saved_looks: select own" on public.saved_looks
  for select using (auth.uid() = user_id);

create policy "saved_looks: insert own" on public.saved_looks
  for insert with check (auth.uid() = user_id);

create policy "saved_looks: delete own" on public.saved_looks
  for delete using (auth.uid() = user_id);

-- ─── INDEXES ───────────────────────────────────────────────────────────────────
create index if not exists profiles_user_id_idx on public.profiles(user_id);
create index if not exists saved_looks_user_id_idx on public.saved_looks(user_id);
create index if not exists looks_occasion_idx on public.looks(occasion);
