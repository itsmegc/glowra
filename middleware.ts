export { default } from "next-auth/middleware";

// Protect routes that require authentication.
// All other routes (landing, quiz, looks) are public.
export const config = {
  matcher: ["/profile/:path*", "/saved/:path*"],
};
