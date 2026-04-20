import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Zap, Crown, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare AI Girlfriend Apps Side-by-Side (2026) | AI GF Now",
  description: "Compare the top AI companion apps feature-by-feature. See which platform gives you the most value for chat, images, voice, and video.",
  openGraph: {
    title: "Compare AI Girlfriend Apps Side-by-Side (2026)",
    description: "Feature-by-feature comparison of top AI companion platforms.",
    type: "website",
    url: "https://www.aigfnow.com/compare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare AI Girlfriend Apps Side-by-Side (2026)",
    description: "Feature-by-feature comparison of top AI companion platforms.",
  },
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://www.aigfnow.com/compare",
  },
};

const quickComparisons = [
  {
    title: "Best for Unlimited Images",
    winner: "AiAllure",
    reason: "Unlimited image generation included in base plan",
    href: "/feature/unlimited-images",
    icon: Zap,
  },
  {
    title: "Best Overall Value",
    winner: "OurDream AI",
    reason: "Chat + images + voice + video in one subscription",
    href: "/",
    icon: Crown,
  },
  {
    title: "Cheapest Entry",
    winner: "Candy AI",
    reason: "$3.99/mo yearly — lowest price for unlimited chat",
    href: "/feature/cheapest",
    icon: DollarSign,
  },
];

const topPlatforms = [
  {
    name: "OurDream AI",
    tagline: "All-in-one plan",
    price: "$9.99/mo",
    features: ["200 images/mo", "20 min voice", "10 videos", "Unlimited chat"],
    url: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=2",
    badge: "Best Overall",
  },
  {
    name: "AiAllure",
    tagline: "Unlimited images + voice",
    price: "$9.90/mo",
    features: ["Unlimited images", "Unlimited voice", "Live Rooms", "Short clips free"],
    url: "https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow",
    badge: "Best Visuals",
  },
  {
    name: "Candy AI",
    tagline: "Cheapest yearly plan",
    price: "$3.99/mo",
    features: ["Unlimited chat", "100 tokens/mo", "Low entry price", "Good memory"],
    url: "https://t.crjmpx.com/389267/9022/39453",
    badge: "Cheapest",
  },
];

export default function ComparePage() {
  return (
    <main className="container py-16 sm:py-24 max-w-4xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">Updated March 2026</Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Compare AI Companion Apps
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stop guessing. See exactly what each platform includes — and what costs extra.
        </p>
      </div>

      {/* Quick Winners */}
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        {quickComparisons.map(({ title, winner, reason, href, icon: Icon }) => (
          <Link
            key={title}
            href={href}
            className="bg-card border border-secondary rounded-2xl p-5 hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{title}</span>
            </div>
            <p className="font-semibold text-lg text-foreground mb-1">{winner}</p>
            <p className="text-sm text-muted-foreground">{reason}</p>
            <span className="text-primary text-sm mt-2 inline-block group-hover:underline">
              See rankings →
            </span>
          </Link>
        ))}
      </div>

      {/* Top 3 Comparison */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Top 3 Platforms</h2>
      <div className="flex flex-col gap-4 mb-12">
        {topPlatforms.map((platform, index) => (
          <div
            key={platform.name}
            className="bg-card border border-secondary rounded-2xl p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-muted-foreground/30 w-6">
                  {index + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-foreground">{platform.name}</h3>
                    <Badge variant="secondary" className="text-xs">{platform.badge}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{platform.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {platform.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-md"
                      >
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                <div className="text-right">
                  <p className="text-xl font-bold text-foreground">{platform.price}</p>
                  <p className="text-xs text-muted-foreground">yearly</p>
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Try Free →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-muted/40 border border-secondary rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-foreground mb-2">
          Not sure which is right for you?
        </h2>
        <p className="text-muted-foreground mb-5">
          Answer 3 quick questions and we&apos;ll match you to the best platform.
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          Find My App <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
