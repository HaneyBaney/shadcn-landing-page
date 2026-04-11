import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <Heart className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary text-white p-1.5" />
              <h3 className="text-2xl font-mono">AI GF Now</h3>
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs font-mono">
              Independent AI companion platform reviews. Tested with real accounts. Updated monthly.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg font-mono">By Feature</h3>
            <div>
              <Link href="/feature/video-generation" className="opacity-60 hover:opacity-100">
                Best With Video
              </Link>
            </div>
            <div>
              <Link href="/feature/voice-calls" className="opacity-60 hover:opacity-100">
                Best With Voice
              </Link>
            </div>
            <div>
              <Link href="/feature/long-term-memory" className="opacity-60 hover:opacity-100">
                Best With Memory
              </Link>
            </div>
            <div>
              <Link href="/feature/unlimited-images" className="opacity-60 hover:opacity-100">
                Unlimited Images
              </Link>
            </div>
            <div>
              <Link href="/feature/no-tokens" className="opacity-60 hover:opacity-100">
                No Tokens / Credits
              </Link>
            </div>
            <div>
              <Link href="/feature/cheapest" className="opacity-60 hover:opacity-100">
                Cheapest Plans
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg font-mono">Resources</h3>
            <div>
              <Link href="/how-we-test" className="opacity-60 hover:opacity-100">
                How We Test
              </Link>
            </div>
            <div>
              <Link href="/hidden-costs/token-systems" className="opacity-60 hover:opacity-100">
                Token Systems Explained
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg font-mono">Legal</h3>
            <div>
              <Link href="/about" className="opacity-60 hover:opacity-100">
                About Us
              </Link>
            </div>
            <div>
              <Link href="/privacy" className="opacity-60 hover:opacity-100">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href="/disclaimer" className="opacity-60 hover:opacity-100">
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <h3 className="text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} AI GF Now. All rights reserved.
          </h3>
          <p className="text-xs text-muted-foreground font-mono">
            Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </section>
      </div>
    </footer>
  );
};
