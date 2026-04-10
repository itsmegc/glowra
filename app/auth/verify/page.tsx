import Link from "next/link";
import { Sparkles, Mail } from "lucide-react";

// NextAuth redirects here after sending the email magic link (pages.verifyRequest)
export default function VerifyRequestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ivory to-blush-50 flex flex-col items-center justify-center px-4 py-16">
      <Link href="/" className="flex items-center gap-2 mb-10 group">
        <div className="w-9 h-9 bg-rose-accent rounded-full flex items-center justify-center shadow-soft">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-playfair font-bold text-2xl text-rose-700">Glowra</span>
      </Link>

      <div className="w-full max-w-md glowra-card text-center space-y-5">
        <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8 text-rose-accent" />
        </div>

        <div className="space-y-2">
          <h1 className="font-playfair text-2xl font-bold text-foreground">
            Check your email
          </h1>
          <p className="text-sm font-inter text-muted-foreground leading-relaxed">
            A sign-in link has been sent to your email address.
            Click the link to sign in — it expires in 24 hours.
          </p>
        </div>

        <p className="text-xs font-inter text-muted-foreground">
          Didn&apos;t receive it? Check your spam folder or{" "}
          <Link href="/auth" className="text-rose-accent hover:underline">
            try again
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
