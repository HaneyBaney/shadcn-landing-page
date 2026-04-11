"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";

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

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the cheapest AI girlfriend app in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Candy AI at $3.99/month (annual) is cheapest with unlimited chat + 100 tokens. Nectar AI is $4.99/mo yearly with 100 images/day. MyDreamCompanion is $5.84/mo yearly. Secret Desires AI is $6.67/mo yearly."
      }
    },
    {
      "@type": "Question",
      "name": "Which AI girlfriend app gives the most features for the price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AiAllure at $9.90/mo yearly — Value Index 84/100. Unlimited chat, images, voice, short video clips, and Live Rooms. No other platform includes that much."
      }
    },
    {
      "@type": "Question",
      "name": "How much do AI girlfriend apps cost per month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Budget: $3.99-7.99/mo. Mid-range: $9.58-9.99/mo yearly. Monthly prices without annual commitment: $7.99-19.99/mo. Most platforms save 50%+ on annual billing."
      }
    },
    {
      "@type": "Question",
      "name": "Are annual plans worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Candy AI saves 71%, AiAllure/OurDream save 50%, GPTGirlfriend saves 20%. Try monthly first for 2 weeks then switch to annual."
      }
    }
  ]
};

// Platform logos
const PLATFORM_LOGOS: Record<string, { logo?: string; domain: string }> = {
  "aiallure": { logo: "/logos/aiallure.png", domain: "aiallure.ai" },
  "nectar-ai": { domain: "nectar.ai" },
  "ourdream-ai": { logo: "/logos/ourdream-ai.png", domain: "ourdreamersai.com" },
  "secrets-ai": { domain: "secrets.ai" },
  "gptgirlfriend": { domain: "gptgirlfriend.online" },
  "candy-ai": { domain: "candy.ai" },
  "mydreamcompanion": { domain: "mydreamcompanion.com" },
  "secret-desires": { logo: "/logos/faviconV2.png", domain: "secret-desires.ai" },
};

// Platform data - sorted by yearly price ascending
const BUDGET_PLATFORMS: Platform[] = [
  {
    id: "candy-ai",
    name: "Candy AI",
    rank: "1",
    rankClass: "bg-amber-400 text-black",
    badge: { text: "Cheapest", class: "bg-amber-400/10 text-amber-600" },
    description: "Cheapest yearly plan we've tested. Unlimited chat is solid — but images, voice, and video all cost tokens. 100 tokens/month runs out fast if you generate images regularly. Best for text-only users on a budget.",
    features: [
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Memory — standard", type: "capped" },
      { text: "Images: tokens", type: "credits" },
      { text: "Voice: tokens", type: "credits" },
      { text: "Video: tokens", type: "credits" },
    ],
    priceYearly: "$3.99",
    priceMonthly: "$13.99",
    valueIndex: 56,
    affiliateUrl: "https://t.crjmpx.com/389267/9022/39453?aff_sub5=SF_006OG000004lmDN",
    featured: false,
    primaryCta: true,
    ...PLATFORM_LOGOS["candy-ai"],
  },
  {
    id: "nectar-ai",
    name: "Nectar AI",
    rank: "2",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: { text: "100 img/day", class: "bg-green-500/10 text-green-600" },
    description: "Best budget option with generous limits. 100 images/day, 6,000 messages/month, capped voice. Scenario builder included. Video costs credits.",
    features: [
      { text: "Chat — 6,000/mo", type: "capped" },
      { text: "Images — 100/day", type: "capped" },
      { text: "Voice — capped", type: "capped" },
      { text: "Memory — basic", type: "capped" },
      { text: "Video: credits", type: "credits" },
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
    id: "mydreamcompanion",
    name: "MyDreamCompanion",
    rank: "3",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Low entry price but coins run out fast. 100 Dream Coins/month = roughly 20 images OR 5 videos OR 35 voice playbacks — not all three. Chat is capped too. Only for light, text-focused use.",
    features: [
      { text: "Chat — capped", type: "capped" },
      { text: "Memory — standard", type: "capped" },
      { text: "Images: coins", type: "credits" },
      { text: "Voice: coins", type: "credits" },
      { text: "Video: coins", type: "credits" },
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
    id: "secret-desires",
    name: "Secret Desires AI",
    rank: "4",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Chat-focused platform — $6.67/mo yearly ($79.99/yr). Unlimited chat, hearts system for images/voice. No video generation at all. Good for chat-first users.",
    features: [
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Memory — standard", type: "capped" },
      { text: "Images: hearts", type: "credits" },
      { text: "Voice: hearts", type: "credits" },
      { text: "No video", type: "none" },
    ],
    priceYearly: "$6.67",
    priceMonthly: "$7.99",
    valueIndex: 50,
    affiliateUrl: "https://secretdesires.ai?via=hana64",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["secret-desires"],
  },
];

// Mid-range platforms - sorted by yearly price ascending
const MIDRANGE_PLATFORMS: Platform[] = [
  {
    id: "gptgirlfriend",
    name: "GPTGirlfriend",
    rank: "1",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: { text: "Best Memory", class: "bg-purple-500/10 text-purple-600" },
    description: "Best memory system we've tested — deep, fully persistent. Best for roleplay and chat-heavy users. 400 credits (~60 images). Not built for media-heavy use.",
    features: [
      { text: "Chat — capped", type: "capped" },
      { text: "Voice — capped", type: "capped" },
      { text: "Memory — deep ★", type: "capped" },
      { text: "Images: credits", type: "credits" },
      { text: "Video: credits", type: "credits" },
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
    id: "aiallure",
    name: "AiAllure",
    rank: "2",
    rankClass: "bg-amber-400 text-black",
    badge: { text: "#1 Value", class: "bg-green-500/10 text-green-600" },
    description: "Best value in the mid-range. Unlimited images AND unlimited voice included. Short videos (8 sec) are queue-based — 3 at a time, but no monthly cap. Long videos (10-120 sec) cost AllureCoins.",
    features: [
      { text: "✓ Unlimited chat", type: "included" },
      { text: "✓ Unlimited images", type: "included" },
      { text: "✓ Unlimited voice", type: "included" },
      { text: "Short video — queue-based", type: "capped" },
      { text: "Memory — advanced", type: "capped" },
      { text: "Long video: AllureCoins", type: "credits" },
    ],
    priceYearly: "$9.90",
    priceMonthly: "$19.90",
    valueIndex: 84,
    affiliateUrl: "https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow",
    featured: true,
    primaryCta: true,
    ...PLATFORM_LOGOS["aiallure"],
  },
  {
    id: "secrets-ai",
    name: "Secrets AI",
    rank: "3",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: { text: "Best Memory AI", class: "bg-purple-500/10 text-purple-600" },
    description: "Only chat is truly unlimited — all media costs \"moments.\" 8,000 moments/mo ≈ 160 images OR 16 videos OR 80 min voice (not all three). Enhanced memory is the standout feature.",
    features: [
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Memory — enhanced ★", type: "capped" },
      { text: "Images: moments", type: "credits" },
      { text: "Voice: moments", type: "credits" },
      { text: "Video: moments", type: "credits" },
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
    id: "ourdream-ai",
    name: "OurDream AI",
    rank: "4",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "All-in-one coin pool: 1,000 dreamcoins cover images, voice, and video. Simpler pricing — one pool for everything. ~200 images OR 20 videos OR 100 min voice (not all three).",
    features: [
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Images — ~200/mo (coins)", type: "capped" },
      { text: "Voice — ~100 min (coins)", type: "capped" },
      { text: "Video — ~20 clips (coins)", type: "capped" },
      { text: "Memory — basic", type: "capped" },
    ],
    priceYearly: "$9.99",
    priceMonthly: "$19.99",
    valueIndex: 77,
    affiliateUrl: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=2",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["ourdream-ai"],
  },
];

const FAQS = [
  {
    q: "What is the cheapest AI girlfriend app in 2026?",
    a: "Candy AI at $3.99/mo yearly is cheapest but media costs tokens. Nectar AI at $4.99/mo yearly gives you 100 images/day — best budget value. MyDreamCompanion is $5.84/mo. Secret Desires AI is $6.67/mo yearly.",
    defaultOpen: true,
  },
  {
    q: "How much do AI girlfriend apps actually cost?",
    a: "Budget: $3.99-$7.99/mo (chat + limited tokens). Mid-range: $9.58-$9.99/mo yearly — where the real value is. Monthly without annual: $7.99-$19.99. Annual savings are 20-71%.",
  },
  {
    q: "Which gives the most features for the price?",
    a: "AiAllure at $9.90/mo yearly — Value Index 84/100. Unlimited chat, images, voice, short clips, Live Rooms with webcam. No other platform matches that at any price.",
    link: { text: "Full review →", href: "/review/aiallure" },
  },
  {
    q: "Are annual plans worth it?",
    a: "Almost always. Candy AI saves 71% ($13.99→$3.99). AiAllure/OurDream save 50%. GPTGirlfriend saves 20%. Test monthly for 2 weeks first, then switch if you stick with it.",
  },
  {
    q: "Is cheapest actually best value?",
    a: "No — that's why the Value Index exists. Candy AI is cheapest at $3.99 but scores 56/100 because media costs extra. AiAllure is $5.91 more but scores 84/100 with almost everything unlimited. For anyone using more than text chat, AiAllure is the better deal.",
    link: { text: "How we rank →", href: "/how-we-test" },
  },
];

function FeatureTag({ text, type }: { text: string; type: string }) {
  const classes = {
    included: "bg-green-500/10 text-green-600 dark:text-green-400",
    capped: "bg-muted text-muted-foreground border border-border",
    credits: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    none: "bg-red-500/10 text-red-600 dark:text-red-400 line-through opacity-60",
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-1 rounded-md inline-flex items-center gap-1 ${classes[type as keyof typeof classes] || classes.capped}`}>
      {text}
    </span>
  );
}

function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <div className={`bg-card border rounded-xl p-6 mb-4 grid md:grid-cols-[1fr_180px] gap-6 transition-all hover:shadow-md hover:border-primary/30 ${platform.featured ? "border-amber-400 bg-gradient-to-br from-card to-amber-400/5" : "border-border"}`}>
      <div>
        {/* Header */}
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

        {/* Description */}
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">
          {platform.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5">
          {platform.features.map((f, i) => (
            <FeatureTag key={i} text={f.text} type={f.type} />
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="flex flex-col items-end justify-between text-right md:items-end md:text-right items-start text-left">
        <div>
          <div className="font-mono text-2xl font-bold text-foreground">
            {platform.priceYearly}<span className="text-sm font-normal text-muted-foreground">/mo</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {platform.billingNote || "billed yearly"}
          </div>
          {platform.priceMonthly && !platform.billingNote && (
            <div className="text-xs text-muted-foreground line-through mt-0.5">
              {platform.priceMonthly} monthly
            </div>
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

function FAQItem({ faq, defaultOpen = false }: { faq: typeof FAQS[0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center gap-3 py-4 text-left"
      >
        <span className="text-base font-semibold text-foreground">{faq.q}</span>
        <span className="font-mono text-lg text-muted-foreground flex-shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      <div className={`text-base text-muted-foreground leading-relaxed overflow-hidden transition-all ${open ? "max-h-96 pb-4" : "max-h-0"}`}>
        {faq.a}
        {faq.link && (
          <>
            {" "}
            <Link href={faq.link.href} className="text-foreground hover:text-primary underline underline-offset-2">
              {faq.link.text}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default function CheapestPage() {
  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="max-w-[900px] mx-auto px-5 py-12">
        {/* Header */}
        <header className="py-12 border-b border-border">
          <nav className="text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-foreground transition-colors">aigfnow.com</Link>
            {" / "}
            <Link href="/feature" className="hover:text-foreground transition-colors">By Feature</Link>
            {" / "}
            Cheapest
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Cheapest AI Girlfriend Apps in 2026
          </h1>

          <p className="text-xl text-muted-foreground max-w-[640px] font-light">
            All 8 platforms sorted by what you actually pay per month — yearly plan pricing, not inflated monthly sticker price. Tested with real accounts.
          </p>

          <div className="flex flex-wrap gap-4 mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-card border border-border px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              8 platforms tested
            </span>
            <span className="inline-flex items-center text-xs font-medium text-muted-foreground bg-card border border-border px-3.5 py-1.5 rounded-full">
              Updated April 2026
            </span>
            <span className="inline-flex items-center text-xs font-medium text-muted-foreground bg-card border border-border px-3.5 py-1.5 rounded-full">
              Yearly prices shown
            </span>
          </div>
        </header>

        {/* Quick Answer */}
        <div className="bg-card border border-border rounded-xl p-7 my-8 relative">
          <span className="absolute -top-2.5 left-6 text-[11px] font-bold tracking-widest text-amber-600 bg-background px-2">
            QUICK ANSWER
          </span>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Cheapest plan:</strong> Candy AI at $3.99/mo yearly — unlimited chat + 100 tokens, but all media costs extra.{" "}
            <strong className="text-foreground">Best value under $10:</strong> AiAllure at $9.90/mo — unlimited images, voice, and short clips included (Value Index 84/100).{" "}
            <strong className="text-foreground">Chat-focused:</strong> Secret Desires AI at $6.67/mo yearly — unlimited chat, hearts for media.
          </p>
        </div>

        {/* Budget Tier */}
        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Budget Tier</h2>
            <span className="font-mono text-sm text-muted-foreground">Under $8/month</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-600">
              Most Searched
            </span>
          </div>
          {BUDGET_PLATFORMS.map((p) => (
            <PlatformCard key={p.id} platform={p} />
          ))}
        </section>

        {/* Mid-Range Tier */}
        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Mid-Range — The Value Zone</h2>
            <span className="font-mono text-sm text-muted-foreground">$9.58 – $9.99/month yearly</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-green-500/10 text-green-600">
              Best Value
            </span>
          </div>
          {MIDRANGE_PLATFORMS.map((p) => (
            <PlatformCard key={p.id} platform={p} />
          ))}
        </section>

        {/* What You Get Per Platform */}
        <div className="bg-card border border-border rounded-xl p-8 my-12">
          <h2 className="text-2xl font-bold mb-3">What you actually get per month</h2>
          <p className="text-base text-muted-foreground mb-6 font-light">
            Subscription price is just the start. Here&apos;s what&apos;s included before you pay extra.
          </p>
          
          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">Platform</th>
                  <th className="text-left py-3 px-3 font-semibold text-foreground">Price</th>
                  <th className="text-left py-3 px-3 font-semibold text-foreground">Images</th>
                  <th className="text-left py-3 px-3 font-semibold text-foreground">Voice</th>
                  <th className="text-left py-3 px-3 font-semibold text-foreground">Video</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium text-foreground">Candy AI</td>
                  <td className="py-3 px-3 font-mono">$3.99</td>
                  <td className="py-3 px-3">~20 (100 tokens)</td>
                  <td className="py-3 px-3">~10 min</td>
                  <td className="py-3 px-3">~2 clips</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium text-foreground">Nectar AI</td>
                  <td className="py-3 px-3 font-mono">$4.99</td>
                  <td className="py-3 px-3 text-green-600">100/day ✓</td>
                  <td className="py-3 px-3">Capped</td>
                  <td className="py-3 px-3">Credits</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium text-foreground">MyDreamCompanion</td>
                  <td className="py-3 px-3 font-mono">$5.84</td>
                  <td className="py-3 px-3">~20 (100 coins)</td>
                  <td className="py-3 px-3">~35 plays</td>
                  <td className="py-3 px-3">~5 clips</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium text-foreground">Secret Desires</td>
                  <td className="py-3 px-3 font-mono">$6.67</td>
                  <td className="py-3 px-3">Hearts system</td>
                  <td className="py-3 px-3">Hearts</td>
                  <td className="py-3 px-3 text-red-500">None</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium text-foreground">GPTGirlfriend</td>
                  <td className="py-3 px-3 font-mono">$9.58</td>
                  <td className="py-3 px-3">~60 (400 credits)</td>
                  <td className="py-3 px-3">Capped</td>
                  <td className="py-3 px-3">Credits</td>
                </tr>
                <tr className="border-b border-border/50 bg-amber-400/5">
                  <td className="py-3 pr-4 font-medium text-foreground">AiAllure ★</td>
                  <td className="py-3 px-3 font-mono">$9.90</td>
                  <td className="py-3 px-3 text-green-600">Unlimited ✓</td>
                  <td className="py-3 px-3 text-green-600">Unlimited ✓</td>
                  <td className="py-3 px-3">Queue-based (no hard cap)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4 font-medium text-foreground">Secrets AI</td>
                  <td className="py-3 px-3 font-mono">$9.99</td>
                  <td className="py-3 px-3">~160 (8K moments)</td>
                  <td className="py-3 px-3">~80 min</td>
                  <td className="py-3 px-3">~16 clips</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">OurDream AI</td>
                  <td className="py-3 px-3 font-mono">$9.99</td>
                  <td className="py-3 px-3">~200 (1K coins)</td>
                  <td className="py-3 px-3">~100 min</td>
                  <td className="py-3 px-3">~20 clips</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            * Coin/token platforms: numbers show what you get if you spend ALL coins on that feature. Mix usage = less of each.
          </p>
        </div>

        {/* Cross-links */}
        <div className="grid sm:grid-cols-2 gap-3 my-12">
          <Link href="/feature/unlimited-images" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Unlimited Images →</div>
            <div className="text-sm text-muted-foreground font-light">Apps that don&apos;t charge per image.</div>
          </Link>
          <Link href="/feature/voice-calls" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Voice Calls →</div>
            <div className="text-sm text-muted-foreground font-light">Platforms with real-time voice included.</div>
          </Link>
          <Link href="/feature/video-generation" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Video Generation →</div>
            <div className="text-sm text-muted-foreground font-light">Which apps actually deliver usable video.</div>
          </Link>
          <Link href="/feature/no-tokens" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">No Tokens / Credits →</div>
            <div className="text-sm text-muted-foreground font-light">Flat plans with no hidden coin systems.</div>
          </Link>
        </div>

        {/* FAQ */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-5">Pricing Questions</h2>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} defaultOpen={faq.defaultOpen} />
          ))}
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Data from official pricing pages · Updated April 2026 ·{" "}
            <Link href="/how-we-test" className="text-muted-foreground hover:text-foreground">How we rank</Link>
            {" "}· Affiliate links on this page
          </p>
        </footer>
      </main>
    </>
  );
}
