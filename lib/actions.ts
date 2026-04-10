"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SkinProfile } from "@/types";
import { revalidatePath } from "next/cache";

// ─── Profile ────────────────────────────────────────────────────────────────────
export async function saveProfile(profile: SkinProfile) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { error: "Not authenticated" };

  await prisma.profile.upsert({
    where: { userId: session.user.id },
    create: {
      userId: session.user.id,
      skinTone: profile.skin_tone,
      undertone: profile.undertone,
      skinType: profile.skin_type,
      eyeColor: profile.eye_color,
    },
    update: {
      skinTone: profile.skin_tone,
      undertone: profile.undertone,
      skinType: profile.skin_type,
      eyeColor: profile.eye_color,
    },
  });

  revalidatePath("/looks");
  return { success: true };
}

export async function getProfile() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  return prisma.profile.findUnique({
    where: { userId: session.user.id },
  });
}

// ─── Saved Looks ────────────────────────────────────────────────────────────────
export async function saveLook(lookId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { error: "Not authenticated" };

  await prisma.savedLook.upsert({
    where: { userId_lookId: { userId: session.user.id, lookId } },
    create: { userId: session.user.id, lookId },
    update: {},
  });

  revalidatePath("/looks");
  return { success: true };
}

export async function removeSavedLook(lookId: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return { error: "Not authenticated" };

  await prisma.savedLook.deleteMany({
    where: { userId: session.user.id, lookId },
  });

  revalidatePath("/looks");
  return { success: true };
}

export async function getSavedLookIds(): Promise<string[]> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return [];

  const saved = await prisma.savedLook.findMany({
    where: { userId: session.user.id },
    select: { lookId: true },
  });

  return saved.map((s) => s.lookId);
}
