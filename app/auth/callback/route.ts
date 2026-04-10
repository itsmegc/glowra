// NextAuth handles email magic link callbacks at /api/auth/callback/email
// This route redirects any stray traffic there.
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const url = new URL(request.url);
  url.pathname = "/api/auth/callback/email";
  return NextResponse.redirect(url);
}
