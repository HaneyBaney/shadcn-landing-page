import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Coins, ArrowRight, ExternalLink } from "lucide-react";
import { VALUE_INDEX, ScoredEntry } from "@/lib/index";

export type FeatureKey = "images" | "voice" | "video" | "memory" | "chat";

// ── AFFILIATE LINKS — Real tracking URLs ─────────────────────────────────
export const AFFILIATE_LINKS: Record<string, string> = {
  "ourdream-ai":      "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172",
  "candy-ai":         "https://t.crjmpx.com/389267/9022/39453?aff_sub5=SF_006OG000004lmDN",
  "gptgirlfriend":    "https://www.gptgirlfriend.online/?ref=mgi4mjj",
  "secrets-ai":       "https://t.vlmai-1.com/389267/10381/0?aff_sub5=SF_006OG000004lmDN",
  "secret-desires":   "https://secretdesires.ai?via=hana64",
  "mydreamcompanion": "https://www.mydreamcompanion.com/?linkId=lp_645321&sourceId=11754648&tenantId=dreamcompanion",
  "aiallure":         "https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow",
  "nectar-ai":        "https://nectar.ai/?_ef_transaction_id=&oid=1&affid=51",
};

// ── 2. ADD LOGO URLS HERE — check your ranked-platforms.ts for logo fields ─
// Use the same logo URLs/paths already used on your main rankings page
// Example: "aiallure": "https://aiallure.com/logo.png"
//      or: "aiallure": "/logos/aiallure.png"
export const PLATFORM_LOGOS: Record<string, string> = {
  "ourdream-ai":      "/logos/ourdream-ai.png",
  "aiallure":         "/logos/aiallure.png",
  "secret-desires":   "/logos/faviconV2.png",
  // "candy-ai":         "", // No logo defined in lib/platforms.ts
  // "gptgirlfriend":    "", // No logo defined in lib/platforms.ts
  // "secrets-ai":       "", // No logo defined in lib/platforms.ts
  // "nectar-ai":        "", // No logo defined in lib/platforms.ts
  // "mydreamcompanion": "", // No logo defined in lib/platforms.ts
};

export const PLATFORM_NAMES: Record<string, string> = {
  "ourdream-ai":      "OurDream AI",
  "aiallure":         "AiAllure",
  "candy-ai":         "Candy AI",
  "gptgirlfriend":    "GPTGirlfriend",
  "secrets-ai":       "Secrets AI",
  "nectar-ai":        "Nectar AI",
  "secret-desires":   "Secret Desires",
  "mydreamcompanion": "MyDreamCompanion",
};

const PLATFORM_COLORS: Record<string, string> = {
  "ourdream-ai":      "#7C3AED",
  "aiallure":         "#EC4899",
  "candy-ai":         "#F59E0B",
  "gptgirlfriend":    "#10B981",
  "secrets-ai":       "#3B82F6",
  "nectar-ai":        "#EF4444",
  "secret-desires":   "#8B5CF6",
  "mydreamcompanion": "#06B6D4",
};

// ── CTA copy per feature ───────────────────────────────────────────────────
const CTA_LABEL: Record<FeatureKey, string> = {
  images: "Start generating free",
  voice:  "Try voice free",
  video:  "Try video free",
  memory: "Try free",
  chat:   "Chat free now",
};

// ── FAQ content per feature ────────────────────────────────────────────────
const FEATURE_FAQS: Record<string, { q: string; a: string }[]> = {
  images: [
    {
      q: "Which AI companion app has truly unlimited image generation?",
      a: "AiAllure and Nectar AI both include unlimited image generation in their base subscription. AiAllure costs $9.90/mo (yearly) and Nectar AI $4.99/mo (yearly). Every other platform either caps images or charges per generation through a token or coin system.",
    },
    {
      q: "What does 'costs credits' mean for image generation?",
      a: "It means every image you generate deducts from a coin or token balance. Some platforms give you a free monthly allowance (e.g. 100 tokens), but once that runs out you pay to top up. Platforms like Candy AI and MyDreamCompanion work this way.",
    },
    {
      q: "Is a capped plan worth it for images?",
      a: "Depends on how many images you generate. OurDream AI includes 200 images/mo in the base plan — enough for most users. If you generate heavily (500+/mo), only unlimited plans make financial sense.",
    },
    {
      q: "How is the Value Index calculated?",
      a: "The Value Index is a geometric mean of feature coverage and price efficiency — the same method the UN uses for the Human Development Index. A platform needs to score well on both dimensions to rank high. Neither cheap-but-weak nor expensive-but-feature-rich dominates.",
    },
  ],
  voice: [
    {
      q: "Which AI companion apps include voice calls in the subscription?",
      a: "OurDream AI includes 20 minutes of voice per month in its base plan. AiAllure includes unlimited voice. Most other platforms charge per minute or per voice message through a token system.",
    },
    {
      q: "What's the difference between voice messages and voice calls?",
      a: "Voice messages are pre-recorded audio clips sent back and forth. Voice calls are real-time conversations. AiAllure's Live Rooms feature is the closest to a real-time call. Most platforms offer voice messages only.",
    },
    {
      q: "Is 20 minutes of voice per month enough?",
      a: "For casual use, yes. A typical voice message exchange uses 1-3 minutes. Heavy users who want longer sessions should look at unlimited plans like AiAllure.",
    },
  ],
  video: [
    {
      q: "Which AI companion apps actually include video generation?",
      a: "OurDream AI includes 10 video clips/mo in its base plan. AiAllure includes short video clips (up to 8 seconds) free, with longer videos costing AllureCoins. Most other platforms charge per video through coin systems.",
    },
    {
      q: "Why do most platforms charge extra for video?",
      a: "Video generation is computationally expensive — much more so than images or chat. Platforms pass that cost on through coin systems rather than baking it into subscription pricing.",
    },
    {
      q: "How long are the videos?",
      a: "Most platforms generate clips between 5-30 seconds. AiAllure is notable for supporting videos up to 120 seconds with AllureCoins. OurDream AI's included videos are short clips.",
    },
  ],
  memory: [
    {
      q: "Which AI companion app has the best memory?",
      a: "GPTGirlfriend has the strongest memory system we've tested — fully unlimited, meaning your AI remembers details from conversations weeks or months ago. Secrets AI offers enhanced memory (4x access, +60% context) at higher tiers.",
    },
    {
      q: "What's the difference between basic and enhanced memory?",
      a: "Basic memory retains recent conversation context — usually the last few sessions. Enhanced memory persists specific details, preferences, and relationship history over a longer period. For a companion that actually knows you, enhanced memory matters.",
    },
    {
      q: "Does memory reset if I cancel and resubscribe?",
      a: "This varies by platform. Most platforms tie memory to your account, so it persists across billing cycles. We recommend checking each platform's terms before subscribing if this matters to you.",
    },
  ],
};

const DEFAULT_FAQS: { q: string; a: string }[] = [
  {
    q: "How is the Value Index calculated?",
    a: "The Value Index is a geometric mean of feature coverage and price efficiency — the same method the UN uses for the Human Development Index. A platform needs to score well on both to rank high.",
  },
  {
    q: "How often is this updated?",
    a: "We update rankings monthly using real accounts on each platform. Prices and feature access are verified directly from pricing pages.",
  },
];

interface FeaturePageProps {
  title: string;
  subtitle: string;
  description: string;
  featureKey: FeatureKey | null;
  filterFn?: (e: ScoredEntry) => boolean;
  angle: string;
  lastUpdated?: string;
}

// ── Logo or colored initial ────────────────────────────────────────────────
function PlatformLogo({ id, name }: { id: string; name: string }) {
  const logo = PLATFORM_LOGOS[id];
  const color = PLATFORM_COLORS[id] ?? "#6B7280";
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  if (logo) {
    return <img src={logo} alt={name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />;
  }
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}

// ── Access status line ─────────────────────────────────────────────────────
function AccessLine({ access, detail }: { access: string; detail?: string }) {
  if (access === "unlimited") {
    return (
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
        <span className="text-base text-green-600 dark:text-green-400 font-medium">
          Unlimited — included free
        </span>
      </div>
    );
  }
  if (access === "limited") {
    return (
      <div className="flex items-center gap-2">
        <Circle className="w-4 h-4 text-amber-500 flex-shrink-0" />
        <span className="text-base text-amber-600 dark:text-amber-400 font-medium">
          Included — {detail ?? "capped"}
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <Coins className="w-4 h-4 text-muted-foreground flex-shrink-0" />
      <span className="text-base text-muted-foreground">
        Costs credits{detail ? ` — ${detail}` : ""}
      </span>
    </div>
  );
}

// ── The smart CTA ─────────────────────────────────────────────────────────
function SmartCTA({
  access,
  platformName,
  affiliateUrl,
  featureKey,
}: {
  access: string;
  platformName: string;
  affiliateUrl: string;
  featureKey: FeatureKey | null;
}) {
  const label = featureKey ? CTA_LABEL[featureKey] : "Try free";

  // Tier 1 — unlimited: High-converting CTA with urgency
  if (access === "unlimited") {
    return (
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-xl whitespace-nowrap hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
      >
        {label}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </a>
    );
  }

  // Tier 2 — capped: platform name with value prop
  if (access === "limited") {
    return (
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group inline-flex items-center gap-2 bg-primary/90 text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-xl whitespace-nowrap hover:bg-primary hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all duration-200"
      >
        Try {platformName} free
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </a>
    );
  }

  // Tier 3 — costs credits: honest but still clickable
  return (
    <div className="flex flex-col items-end gap-1">
      <a
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group inline-flex items-center gap-2 border border-secondary text-foreground text-sm font-medium px-5 py-2.5 rounded-xl whitespace-nowrap hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
      >
        View {platformName}
        <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
      </a>
      <span className="text-[11px] text-muted-foreground">
        {featureKey ? `${featureKey} uses tokens` : "token-based"}
      </span>
    </div>
  );
}

export function FeaturePage({
  title,
  subtitle,
  description,
  featureKey,
  filterFn,
  angle,
  lastUpdated = "March 2026",
}: FeaturePageProps) {
  let platforms = [...VALUE_INDEX];

  if (filterFn) {
    platforms = platforms.filter(filterFn);
  } else if (featureKey) {
    platforms.sort((a, b) => {
      const rank: Record<string, number> = { unlimited: 0, limited: 1, coins: 2, none: 3 };
      const getAccess = (e: ScoredEntry) =>
        e.features.find((f) => f.key.toLowerCase().includes(featureKey))?.access ?? "none";
      const diff = (rank[getAccess(a)] ?? 3) - (rank[getAccess(b)] ?? 3);
      return diff !== 0 ? diff : b.score - a.score;
    });
  }

  const faqs = featureKey ? (FEATURE_FAQS[featureKey] ?? DEFAULT_FAQS) : DEFAULT_FAQS;

  const unlimitedCount = featureKey
    ? platforms.filter((p) =>
        p.features.some((f) => f.key.toLowerCase().includes(featureKey) && f.access === "unlimited")
      ).length
    : 0;

  return (
    <main className="container py-16 sm:py-24 max-w-3xl mx-auto">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-base text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary transition-colors">Rankings</Link>
        <span>/</span>
        <span className="hover:text-primary transition-colors">By Feature</span>
        <span>/</span>
        <span className="text-foreground font-medium">{subtitle}</span>
      </nav>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Badge variant="outline" className="text-sm px-3 py-1">Updated {lastUpdated}</Badge>
        <Badge variant="outline" className="text-sm px-3 py-1">{platforms.length} platforms tested</Badge>
        {unlimitedCount > 0 && (
          <Badge className="text-sm px-3 py-1 bg-green-600 hover:bg-green-600 text-white border-0">
            {unlimitedCount} include it free
          </Badge>
        )}
      </div>

      {/* Title + description */}
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">{title}</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-5">{description}</p>

      {/* Expert angle */}
      <div className="border-l-2 border-primary pl-4 py-1 mb-10">
        <p className="text-base text-muted-foreground italic">{angle}</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-5 text-base text-muted-foreground mb-8 pb-6 border-b border-secondary">
        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /><span>Included — unlimited</span></div>
        <div className="flex items-center gap-2"><Circle className="w-4 h-4 text-amber-500" /><span>Included with cap</span></div>
        <div className="flex items-center gap-2"><Coins className="w-4 h-4 text-muted-foreground" /><span>Costs credits</span></div>
      </div>

      {/* Platform list */}
      <div className="flex flex-col gap-4 mb-16">
        {platforms.map((platform, index) => {
          const name = PLATFORM_NAMES[platform.id] ?? platform.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
          const affiliateUrl = AFFILIATE_LINKS[platform.id] ?? "#";
          const relevantFeature = featureKey
            ? platform.features.find((f) => f.key.toLowerCase().includes(featureKey))
            : platform.features[0];
          const access = relevantFeature?.access ?? "none";

          return (
            <div
              key={platform.id}
              className="bg-card border border-secondary rounded-2xl p-5 sm:p-6 hover:border-primary/40 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">

                {/* Rank */}
                <span className="text-xl font-bold text-muted-foreground/30 tabular-nums w-5 flex-shrink-0 text-right">
                  {index + 1}
                </span>

                {/* Logo */}
                <PlatformLogo id={platform.id} name={name} />

                {/* Name + access status */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="font-semibold text-lg text-foreground">{name}</h2>
                    {platform.newsType === "new" && <Badge variant="secondary" className="text-xs">New</Badge>}
                  </div>
                  <AccessLine access={access} detail={relevantFeature?.detail} />
                </div>

                {/* Score + price */}
                <div className="hidden sm:flex flex-col items-end flex-shrink-0 mr-4">
                  <p className="text-3xl font-bold text-foreground tabular-nums leading-none">{platform.score}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Value Index</p>
                  {platform.subYearly && (
                    <>
                      <p className="text-base font-semibold text-foreground mt-2">${platform.subYearly}/mo</p>
                      <p className="text-sm text-muted-foreground">yearly</p>
                    </>
                  )}
                </div>

                {/* CTA */}
                <SmartCTA
                  access={access}
                  platformName={name}
                  affiliateUrl={affiliateUrl}
                  featureKey={featureKey}
                />
              </div>

              {/* Mobile score row */}
              <div className="flex sm:hidden items-center justify-between mt-3 pt-3 border-t border-secondary/50">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-2xl font-bold text-foreground tabular-nums leading-none">{platform.score}</p>
                    <p className="text-xs text-muted-foreground">Value Index</p>
                  </div>
                  {platform.subYearly && (
                    <div>
                      <p className="text-base font-semibold text-foreground">${platform.subYearly}/mo</p>
                      <p className="text-xs text-muted-foreground">yearly</p>
                    </div>
                  )}
                </div>
                <Link href={`/review/${platform.id}`} className="text-sm text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors">
                  Full review
                </Link>
              </div>

              {/* Desktop: full review link */}
              {platform.news && (
                <p className="hidden sm:block text-sm text-muted-foreground mt-3 pt-3 border-t border-secondary/50 leading-relaxed">
                  {platform.news}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* FAQ section */}
      <div className="border-t border-secondary pt-12 mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-6">
          {faqs.map(({ q, a }) => (
            <div key={q}>
              <h3 className="text-base font-semibold text-foreground mb-2">{q}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-6 bg-muted/40 rounded-2xl border border-secondary text-center">
        <p className="font-semibold text-xl text-foreground mb-2">Not sure which is right for you?</p>
        <p className="text-base text-muted-foreground mb-5">
          Answer 3 quick questions and we&apos;ll match you to the best platform for your needs.
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-base px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          Find My App <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </main>
  );
}
