import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "What's Really Included in AI Girlfriend Subscriptions | AI GF Now",
  description: "Feature-by-feature breakdown of what's actually included in each AI companion subscription before credits kick in. No marketing fluff.",
  openGraph: {
    title: "What's Really Included in AI Girlfriend Subscriptions",
    description: "See exactly what you get before tokens and credits start draining your wallet.",
    type: "article",
    url: "https://www.aigfnow.com/hidden-costs/whats-included",
  },
  twitter: {
    card: "summary_large_image",
    title: "What's Really Included in AI Girlfriend Subscriptions",
    description: "Feature breakdown before credits kick in.",
  },
  alternates: {
    canonical: "https://www.aigfnow.com/hidden-costs/whats-included",
  },
};

const platforms = [
  {
    name: "OurDream AI",
    price: "$9.99/mo",
    included: ["Unlimited chat", "200 images/mo", "20 min voice", "10 video clips"],
    notIncluded: ["Extra images cost DreamCoins", "Extra voice costs DreamCoins"],
    verdict: "Best all-in-one value",
    url: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172",
  },
  {
    name: "AiAllure",
    price: "$9.90/mo",
    included: ["Unlimited chat", "Unlimited images", "Unlimited voice", "Short video clips"],
    notIncluded: ["Longer videos cost AllureCoins", "Live Rooms have limits"],
    verdict: "Best for images & voice",
    url: "https://www.aiallure.com/landing/c2ae4697-119e-4f5e-a63b-77a03554ad21?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln",
  },
  {
    name: "Candy AI",
    price: "$3.99/mo",
    included: ["Unlimited chat", "100 tokens/mo"],
    notIncluded: ["Images cost tokens", "Voice costs tokens", "Video costs tokens"],
    verdict: "Cheapest entry, but tokens add up",
    url: "https://t.crjmpx.com/389267/9022/39453",
  },
  {
    name: "GPTGirlfriend",
    price: "$9.58/mo",
    included: ["5,000 messages/mo", "400 coins/mo", "Unlimited memory"],
    notIncluded: ["Images cost coins", "Voice costs coins", "Video costs coins"],
    verdict: "Best memory system",
    url: "https://www.gptgirlfriend.online/?ref=mgi4mjj",
  },
  {
    name: "Secrets AI",
    price: "$9.99/mo",
    included: ["Unlimited chat", "8,000 moments/mo", "4x enhanced memory"],
    notIncluded: ["Images cost moments", "Voice costs moments", "Video costs moments"],
    verdict: "Best memory, but media costs extra",
    url: "https://t.vlmai-1.com/389267/10381/0?aff_sub5=SF_006OG000004lmDN",
  },
];

export default function WhatsIncludedPage() {
  return (
    <main className="container py-16 sm:py-24 max-w-4xl mx-auto">
      {/* Hero */}
      <div className="mb-12">
        <Badge variant="outline" className="mb-4">Transparency</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          What&apos;s Really Included
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Every platform says &quot;unlimited&quot; somewhere. Here&apos;s what that actually means — 
          and where the hidden costs start.
        </p>
      </div>

      {/* Platform Breakdown */}
      <div className="space-y-6 mb-12">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="bg-card border border-secondary rounded-2xl p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">{platform.name}</h2>
                <p className="text-sm text-muted-foreground">{platform.verdict}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-foreground">{platform.price}</span>
                <span className="text-xs text-muted-foreground">yearly</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-2 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Included in subscription
                </p>
                <ul className="space-y-1">
                  {platform.included.map((item) => (
                    <li key={item} className="text-sm text-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> Costs extra
                </p>
                <ul className="space-y-1">
                  {platform.notIncluded.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <XCircle className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              Try {platform.name} <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-muted/40 border border-secondary rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">
          Want the full breakdown?
        </h2>
        <p className="text-muted-foreground mb-5">
          See how token systems work and what users actually spend per month.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/hidden-costs/token-systems"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            Token Systems Explained <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-secondary text-foreground font-medium px-6 py-3 rounded-xl hover:bg-muted transition-colors"
          >
            See All Rankings
          </Link>
        </div>
      </div>
    </main>
  );
}
