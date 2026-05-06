"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which AI girlfriend app has no tokens or credits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AiAllure comes closest — unlimited chat, unlimited images, and unlimited voice with no token system. Short video clips are also free. The only feature that costs extra is long-form video (10-120 sec) via AllureCoins. Every other platform uses tokens, coins, moments, hearts, or credits for media generation."
      }
    },
    {
      "@type": "Question",
      "name": "Why do AI girlfriend apps use token systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Image generation, voice synthesis, and video creation are computationally expensive. Token systems let platforms offer lower subscription prices by charging per-use for heavy features. The trade-off is unpredictable monthly costs. Platforms like AiAllure absorb the cost into a higher base price for a simpler experience."
      }
    }
  ]
};

interface Platform {
  id: string;
  name: string;
  rank: string;
  rankClass: string;
  badge: { text: string; class: string } | null;
  description: string;
  features: { text: string; type: string }[];
  priceYearly: string;
  priceMonthly?: string;
  billingNote?: string;
  valueIndex: number;
  affiliateUrl: string;
  featured: boolean;
  primaryCta: boolean;
  logo?: string;
  domain: string;
}

const PLATFORM_LOGOS: Record<string, { logo?: string; domain: string }> = {
  "aiallure": { logo: "/logos/aiallure.png", domain: "aiallure.ai" },
  "nectar-ai": { domain: "nectar.ai" },
  "ourdream-ai": { logo: "/logos/ourdream-ai.png", domain: "ourdreamersai.com" },
  "secrets-ai": { domain: "secrets.ai" },
  "gptgirlfriend": { domain: "gptgirlfriend.online" },
  "candy-ai": { domain: "candy.ai" },
  "mydreamcompanion": { domain: "mydreamcompanion.com" },
  "lovescape": { logo: "/logos/lovescape.png", domain: "lovescape.com" },
};

const TOKEN_FREE: Platform[] = [
  {
    id: "aiallure",
    name: "AiAllure",
    rank: "1",
    rankClass: "bg-amber-400 text-black",
    badge: { text: "Closest to Flat Rate", class: "bg-green-500/10 text-green-600" },
    description: "Three core features are truly unlimited with no tokens: chat, image generation, and voice. Short video clips (~3 per batch, 8 sec) are also free. The only thing that costs extra is long-form video (10-120 seconds) via AllureCoins. For 90% of users, this feels like a flat-rate plan.",
    features: [
      { text: "✓ Chat — unlimited, no tokens", type: "included" },
      { text: "✓ Images — unlimited, no tokens", type: "included" },
      { text: "✓ Voice — unlimited, no tokens", type: "included" },
      { text: "Short video — free", type: "capped" },
      { text: "Long video only: AllureCoins", type: "credits" },
    ],
    priceYearly: "$9.90",
    priceMonthly: "$19.90",
    valueIndex: 84,
    affiliateUrl: "https://www.aiallure.com/landing/c2ae4697-119e-4f5e-a63b-77a03554ad21?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln",
    featured: true,
    primaryCta: true,
    ...PLATFORM_LOGOS["aiallure"],
  },
];

const HARD_CAPS: Platform[] = [
  {
    id: "nectar-ai",
    name: "Nectar AI",
    rank: "2",
    rankClass: "bg-black text-amber-400",
    badge: null,
    description: "Daily-limited: 100 image generations/day, 6,000 messages/month, capped voice. Structured usage that works for some. Video costs credits.",
    features: [
      { text: "Chat — 6,000/mo", type: "capped" },
      { text: "Images — 100/day", type: "capped" },
      { text: "Voice — capped", type: "capped" },
      { text: "Video only: credits", type: "credits" },
    ],
    priceYearly: "$4.99",
    priceMonthly: "$9.99",
    valueIndex: 64,
    affiliateUrl: "https://nectar.ai/?_ef_transaction_id=&oid=1&affid=51",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["nectar-ai"],
  },
  {
    id: "ourdream-ai",
    name: "OurDream AI",
    rank: "3",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "One coin pool (1,000 dreamcoins) covers everything — images, voice, video. It's technically a token system, but simpler than most: one pool, one number to track. No separate purchases needed for basic use. Only costs extra if you exceed the monthly pool.",
    features: [
      { text: "All media — 1,000 coins/mo pool", type: "capped" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Memory — basic", type: "capped" },
    ],
    priceYearly: "$9.99",
    priceMonthly: "$19.99",
    valueIndex: 77,
    affiliateUrl: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["ourdream-ai"],
  },
];

const TOKEN_SYSTEMS: Platform[] = [
  {
    id: "secrets-ai",
    name: "Secrets AI",
    rank: "4",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "\"Moments\" — 8,000/month shared across images, voice, video. Better than per-feature tokens but you're still budgeting. Enhanced memory is excellent though.",
    features: [
      { text: "8,000 moments/mo — all media", type: "credits" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Memory — enhanced ★", type: "capped" },
    ],
    priceYearly: "$9.99",
    priceMonthly: "$19.99",
    valueIndex: 78,
    affiliateUrl: "https://t.vlmai-1.com/389267/10381/0?aff_sub5=SF_006OG000004lmDN",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["secrets-ai"],
  },
  {
    id: "gptgirlfriend",
    name: "GPTGirlfriend",
    rank: "5",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "400 credits/month. Covers images and video. Best memory compensates — you'll use fewer images because conversations are more engaging. Still a token system though.",
    features: [
      { text: "400 credits/mo — images + video", type: "credits" },
      { text: "Chat + Voice — capped", type: "capped" },
      { text: "Memory — deep ★", type: "capped" },
    ],
    priceYearly: "$9.58",
    priceMonthly: "$12.00",
    valueIndex: 60,
    affiliateUrl: "https://www.gptgirlfriend.online/?ref=mgi4mjj",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["gptgirlfriend"],
  },
  {
    id: "candy-ai",
    name: "Candy AI",
    rank: "6",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "100 tokens/month. Images, voice, AND video all compete for the same 100 tokens. Cheapest subscription but the token budget is extremely tight for anything beyond text chat.",
    features: [
      { text: "100 tokens/mo — all media", type: "credits" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Memory — standard", type: "capped" },
    ],
    priceYearly: "$3.99",
    priceMonthly: "$13.99",
    valueIndex: 56,
    affiliateUrl: "https://t.crjmpx.com/389267/9022/39453?aff_sub5=SF_006OG000004lmDN",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["candy-ai"],
  },
  {
    id: "mydreamcompanion",
    name: "MyDreamCompanion",
    rank: "7",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "100 Dream Coins for everything. Runs out fastest of all platforms — roughly 20 images OR 5 videos OR 35 voice playbacks per month. Low price, high real cost.",
    features: [
      { text: "100 coins/mo — all media", type: "credits" },
      { text: "Chat — capped", type: "capped" },
      { text: "Memory — standard", type: "capped" },
    ],
    priceYearly: "$5.84",
    priceMonthly: "$11.99",
    valueIndex: 51,
    affiliateUrl: "https://www.mydreamcompanion.com/?linkId=lp_645321&sourceId=11754648&tenantId=dreamcompanion",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["mydreamcompanion"],
  },
  {
    id: "lovescape",
    name: "LoveScape",
    rank: "8",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "600 chips/mo for images, video, voice. Unlimited chat included. $19.99/mo ($7.80/mo annual).",
    features: [
      { text: "Chips — images + voice + video", type: "credits" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Memory — standard", type: "capped" },
    ],
    priceYearly: "$7.80",
    priceMonthly: "$19.99",
    valueIndex: 50,
    affiliateUrl: "https://t.vlmai-1.com/389267/10224/0?aff_sub5=SF_006OG000004lmDN",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["lovescape"],
  },
];

const FAQS = [
  {
    q: "Which AI girlfriend has no tokens or credits?",
    a: "AiAllure is the closest — unlimited chat, images, and voice with zero token cost. Only long-form video uses AllureCoins. No other platform in our index offers more than one unlimited media feature.",
    defaultOpen: true,
  },
  {
    q: "Why do platforms use token systems?",
    a: "Image generation, voice, and video are expensive to run. Tokens let platforms offer lower base prices by charging per-use for heavy features. The trade-off: unpredictable monthly costs. AiAllure absorbs the cost into a flat $9.90/mo for a simpler, more predictable experience.",
  },
  {
    q: "What's the real monthly cost with tokens?",
    a: "For moderate users (daily chat + 3-5 images/day + some voice): Candy AI goes from $3.99 to $14-19/mo with token top-ups. MyDreamCompanion from $5.84 to $15-20/mo. AiAllure stays at $9.90/mo flat. The \"cheap\" plan often isn't cheap once you use it.",
  },
];

function FeatureTag({ text, type }: { text: string; type: string }) {
  const classes: Record<string, string> = {
    included: "bg-green-500/10 text-green-600 dark:text-green-400",
    capped: "bg-muted text-muted-foreground border border-border",
    credits: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    none: "bg-red-500/10 text-red-600 dark:text-red-400 line-through opacity-60",
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-md inline-flex items-center gap-1 ${classes[type] || classes.capped}`}>
      {text}
    </span>
  );
}

function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <div className={`bg-card border rounded-xl p-6 mb-4 grid md:grid-cols-[1fr_180px] gap-6 transition-all hover:shadow-md hover:border-primary/30 ${platform.featured ? "border-amber-400 bg-gradient-to-br from-card to-amber-400/5" : "border-border"}`}>
      <div>
        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
          <span className={`font-mono text-xs font-semibold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${platform.rankClass}`}>
            {platform.rank}
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={platform.logo ?? `https://www.google.com/s2/favicons?domain=${platform.domain}&sz=128`}
            alt={platform.name}
            className="size-7 object-contain rounded"
          />
          <span className="text-xl font-bold text-foreground">{platform.name}</span>
          {platform.badge && (
            <span className={`text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded ${platform.badge.class}`}>
              {platform.badge.text}
            </span>
          )}
        </div>
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">{platform.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {platform.features.map((f, i) => <FeatureTag key={i} text={f.text} type={f.type} />)}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between text-right md:items-end md:text-right items-start text-left">
        <div>
          <div className="font-mono text-2xl font-bold text-foreground">
            {platform.priceYearly}<span className="text-sm font-normal text-muted-foreground">/mo</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">{platform.billingNote || "billed yearly"}</div>
          {platform.priceMonthly && !platform.billingNote && (
            <div className="text-xs text-muted-foreground line-through mt-0.5">{platform.priceMonthly} monthly</div>
          )}
          <div className="font-mono text-xs text-muted-foreground mt-1.5">
            Value Index: <strong className="text-amber-600">{platform.valueIndex}</strong>
          </div>
        </div>
        <a
          href={platform.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full mt-3 transition-all ${
            platform.primaryCta
              ? "bg-foreground text-amber-400 hover:bg-foreground/90 hover:-translate-y-0.5"
              : "border border-border text-foreground bg-card hover:border-foreground"
          }`}
        >
          Try Free →
        </a>
      </div>
    </div>
  );
}

function FAQItem({ faq, defaultOpen = false }: { faq: { q: string; a: string; defaultOpen?: boolean }; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center gap-3 py-4 text-left">
        <span className="text-[15px] font-semibold text-foreground">{faq.q}</span>
        <span className="font-mono text-lg text-muted-foreground flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      <div className={`text-sm text-muted-foreground leading-relaxed overflow-hidden transition-all ${open ? "max-h-96 pb-4" : "max-h-0"}`}>
        {faq.a}
      </div>
    </div>
  );
}

export default function NoTokensPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="max-w-[900px] mx-auto px-5 py-12">
        <header className="py-12 border-b border-border">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">aigfnow.com</Link>
            {" / "}
            <Link href="/feature" className="hover:text-foreground transition-colors">By Feature</Link>
            {" / "}
            No Tokens / Credits
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            AI Girlfriend Apps With No Token or Credit Systems
          </h1>
          <p className="text-xl text-muted-foreground max-w-[640px] font-light">
            Tokens, coins, moments, hearts, credits — every platform has a different name for the same thing: charging you extra per image, per voice minute, per video clip. Here&apos;s who does it and who doesn&apos;t.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-card border border-border px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              8 platforms tested
            </span>
            <span className="inline-flex items-center text-xs font-medium text-muted-foreground bg-card border border-border px-3.5 py-1.5 rounded-full">
              Updated March 2026
            </span>
          </div>
        </header>

        <div className="bg-card border border-border rounded-xl p-7 my-8 relative">
          <span className="absolute -top-2.5 left-6 text-[11px] font-bold tracking-widest text-amber-600 bg-background px-2">
            QUICK ANSWER
          </span>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Closest to token-free:</strong> AiAllure — unlimited chat, images, and voice with no coin system. Only long videos cost AllureCoins.{" "}
            <strong className="text-foreground">Predictable caps (no per-use charges):</strong> Nectar AI — daily/monthly limits but nothing costs extra within those limits.{" "}
            <strong className="text-foreground">Everyone else:</strong> Uses tokens, coins, moments, hearts, or credits for at least some features.
          </p>
        </div>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Mostly Token-Free</h2>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-green-500/10 text-green-600">
              Best Experience
            </span>
          </div>
          {TOKEN_FREE.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Hard Caps — No Per-Use Charges</h2>
            <span className="font-mono text-sm text-muted-foreground">You know exactly what you get</span>
          </div>
          {HARD_CAPS.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Token / Credit Systems</h2>
            <span className="font-mono text-sm text-muted-foreground">Every media action costs currency</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-orange-500/10 text-orange-600">
              Unpredictable Cost
            </span>
          </div>
          {TOKEN_SYSTEMS.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        {/* The Hidden Cost Math */}
        <div className="bg-card border border-border rounded-xl p-8 my-12">
          <h2 className="text-2xl font-bold mb-2">The Hidden Cost Math</h2>
          <p className="text-[15px] text-muted-foreground mb-4 font-light">
            The cheapest subscription isn&apos;t always the cheapest experience. Here&apos;s what moderate media use actually costs when you factor in token purchases:
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            <strong className="text-foreground">Candy AI:</strong> $3.99/mo base + ~$10-15/mo in extra tokens for regular image generation = <strong className="text-foreground">$14-19/mo real cost</strong>
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            <strong className="text-foreground">AiAllure:</strong> $9.90/mo base, unlimited images and voice included = <strong className="text-foreground">$9.90/mo real cost</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            The &quot;expensive&quot; plan is often cheaper than the &quot;cheap&quot; plan once you use it normally. That&apos;s why the{" "}
            <Link href="/how-we-test" className="text-foreground underline underline-offset-2">Value Index</Link> exists — it accounts for what&apos;s actually included, not just the sticker price.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 my-12">
          <Link href="/feature/cheapest" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Cheapest Plans →</div>
            <div className="text-sm text-muted-foreground font-light">All 8 sorted by price.</div>
          </Link>
          <Link href="/feature/unlimited-images" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Unlimited Images →</div>
            <div className="text-sm text-muted-foreground font-light">No per-image charges.</div>
          </Link>
          <Link href="/feature/voice-calls" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Voice Calls →</div>
            <div className="text-sm text-muted-foreground font-light">Who includes voice.</div>
          </Link>
          <Link href="/feature/long-term-memory" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Long-Term Memory →</div>
            <div className="text-sm text-muted-foreground font-light">AI that remembers you.</div>
          </Link>
        </div>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-5">Token & Credit Questions</h2>
          {FAQS.map((faq, i) => <FAQItem key={i} faq={faq} defaultOpen={faq.defaultOpen} />)}
        </section>

        <footer className="py-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Data from official pricing pages · Updated March 2026 ·{" "}
            <Link href="/how-we-test" className="text-muted-foreground hover:text-foreground">How we rank</Link>
            {" "}· Affiliate links
          </p>
        </footer>
      </main>
    </>
  );
}
