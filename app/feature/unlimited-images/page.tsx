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
      "name": "Which AI girlfriend app has unlimited image generation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AiAllure is the only platform in our index with truly unlimited image generation included in the base plan at $9.90/month yearly. Every other platform either caps images monthly or charges per-image via tokens/coins."
      }
    },
    {
      "@type": "Question",
      "name": "How many images do you get on AI girlfriend apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It varies wildly. AiAllure: unlimited. Nectar AI: 100/day. OurDream AI: ~200/mo from coin pool. Candy AI: ~15-20 from 100 tokens. GPTGirlfriend: ~60 from 400 credits. Most platforms advertise 'image generation included' but the real limits are much tighter than expected."
      }
    },
    {
      "@type": "Question",
      "name": "Do AI girlfriend apps charge per image?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most do. Candy AI, GPTGirlfriend, MyDreamCompanion, Secrets AI, and Secret Desires AI all use token/coin/credit systems where each image costs currency. OurDream AI includes images in a monthly coin pool. Only AiAllure offers truly unlimited generation."
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
  "secret-desires": { logo: "/logos/faviconV2.png", domain: "secret-desires.ai" },
};

const UNLIMITED_PLATFORMS: Platform[] = [
  {
    id: "aiallure",
    name: "AiAllure",
    rank: "1",
    rankClass: "bg-amber-400 text-black",
    badge: { text: "Unlimited Images", class: "bg-green-500/10 text-green-600" },
    description: "The only platform with truly unlimited image generation on the base plan. No token budgeting, no daily caps, no running out mid-conversation. Best visual quality in our testing — best-looking AI characters across all 8 platforms. Also includes unlimited voice.",
    features: [
      { text: "✓ Unlimited images", type: "included" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "✓ Unlimited voice", type: "included" },
      { text: "Short video — ~3 clips", type: "capped" },
      { text: "Memory — basic", type: "capped" },
    ],
    priceYearly: "$9.90",
    priceMonthly: "$19.90",
    valueIndex: 84,
    affiliateUrl: "https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow",
    featured: true,
    primaryCta: true,
    ...PLATFORM_LOGOS["aiallure"],
  },
];

const GENEROUS_PLATFORMS: Platform[] = [
  {
    id: "nectar-ai",
    name: "Nectar AI",
    rank: "2",
    rankClass: "bg-black text-amber-400",
    badge: { text: "100/day", class: "bg-amber-400/10 text-amber-600" },
    description: "Daily limit instead of monthly — 100 image generations per day resets every 24 hours. For most users this is effectively unlimited. The catch: 6,000 message cap, and video costs extra credits.",
    features: [
      { text: "Images — 100/day", type: "capped" },
      { text: "Chat — 6,000/mo", type: "capped" },
      { text: "Voice — capped", type: "capped" },
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
    id: "ourdream-ai",
    name: "OurDream AI",
    rank: "3",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "1,000 dreamcoins/month shared across images, voice, and video. Roughly 200 images if you don't use voice/video — less if you split the pool. Simpler pricing: one pool for everything.",
    features: [
      { text: "Images — from coin pool (~200)", type: "capped" },
      { text: "Voice — from coin pool", type: "capped" },
      { text: "Video — from coin pool", type: "capped" },
      { text: "✓ Unlimited chat", type: "included" },
    ],
    priceYearly: "$9.99",
    priceMonthly: "$19.99",
    valueIndex: 77,
    affiliateUrl: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=2",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["ourdream-ai"],
  },
  {
    id: "secrets-ai",
    name: "Secrets AI",
    rank: "4",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "8,000 moments/month — roughly 160 images if you spend all moments on images only. But moments also cover voice and video, so real image count depends on how you split usage.",
    features: [
      { text: "Images — moments (~160 max)", type: "credits" },
      { text: "Voice — moments", type: "credits" },
      { text: "Video — moments", type: "credits" },
      { text: "✓ Unlimited chat", type: "included" },
    ],
    priceYearly: "$9.99",
    priceMonthly: "$19.99",
    valueIndex: 78,
    affiliateUrl: "https://t.vlmai-1.com/389267/10381/0?aff_sub5=SF_006OG000004lmDN",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["secrets-ai"],
  },
];

const TOKEN_PLATFORMS: Platform[] = [
  {
    id: "gptgirlfriend",
    name: "GPTGirlfriend",
    rank: "5",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "400 credits/month = roughly 60 images. Best memory system of any platform, but not built for heavy image generation. Better for chat-focused users.",
    features: [
      { text: "Images — ~60 from credits", type: "credits" },
      { text: "Memory — deep ★", type: "capped" },
      { text: "Chat — capped", type: "capped" },
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
    description: "100 tokens/month. Each image costs tokens — roughly 15-20 images depending on type. Cheapest plan overall but the token budget is tight for image generation.",
    features: [
      { text: "Images — ~15-20 from tokens", type: "credits" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Voice: tokens", type: "credits" },
      { text: "Video: tokens", type: "credits" },
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
    description: "100 Dream Coins/month = roughly 20 images. Coins also cover voice and video, so actual image count drops if you use other features.",
    features: [
      { text: "Images — ~20 from coins", type: "credits" },
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
    rank: "8",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Hearts system — each image costs hearts. No annual plan, no video. Most limited image generation of all platforms tested.",
    features: [
      { text: "Images — hearts", type: "credits" },
      { text: "✓ Unlimited chat", type: "included" },
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

const FAQS = [
  {
    q: "Which AI girlfriend app has unlimited image generation?",
    a: "AiAllure is the only one. $9.90/mo yearly — generate as many images as you want with no tokens, no daily cap, no coin cost. Every other platform in our index either caps images or charges per generation.",
    defaultOpen: true,
  },
  {
    q: "How many images do you really get per month?",
    a: "AiAllure: unlimited. Nectar AI: up to 3,000/mo (100/day). OurDream AI: ~200 from coin pool. Secrets AI: ~160 from moments. GPTGirlfriend: ~60. Candy AI: ~15-20. MyDreamCompanion: ~20. The gap between platforms is enormous.",
  },
  {
    q: "Which has the best image quality?",
    a: "AiAllure produces the best-looking AI characters in our testing — most realistic and visually consistent. Nectar AI and OurDream AI are also strong. Candy AI and GPTGirlfriend are decent but a tier below. Quality and quantity don't always correlate.",
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
          {platform.features.map((f, i) => (
            <FeatureTag key={i} text={f.text} type={f.type} />
          ))}
        </div>
      </div>
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

export default function UnlimitedImagesPage() {
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
            Unlimited Images
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            AI Girlfriend Apps With Unlimited Images
          </h1>
          <p className="text-xl text-muted-foreground max-w-[640px] font-light">
            Most platforms advertise &quot;image generation included&quot; but every image costs tokens. Here&apos;s what you actually get — and the one platform where generation is truly unlimited.
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
            <strong className="text-foreground">Only 1 of 8 platforms offers truly unlimited images:</strong> AiAllure at $9.90/mo yearly. Nectar AI gives the most capped images (100/day). OurDream AI includes ~200/mo from its coin pool. Everyone else charges per image via tokens, coins, or credits.
          </p>
        </div>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Unlimited — No Caps, No Tokens</h2>
            <span className="font-mono text-sm text-muted-foreground">Generate as much as you want</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-green-500/10 text-green-600">
              Only 1 Platform
            </span>
          </div>
          {UNLIMITED_PLATFORMS.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Generous Caps</h2>
            <span className="font-mono text-sm text-muted-foreground">High limits included in plan</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-600">
              Good Enough for Most
            </span>
          </div>
          {GENEROUS_PLATFORMS.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Token / Credit-Based</h2>
            <span className="font-mono text-sm text-muted-foreground">Every image costs currency</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-orange-500/10 text-orange-600">
              Watch Your Spend
            </span>
          </div>
          {TOKEN_PLATFORMS.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        <div className="grid sm:grid-cols-2 gap-3 my-12">
          <Link href="/feature/cheapest" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Cheapest Plans →</div>
            <div className="text-sm text-muted-foreground font-light">All 8 platforms sorted by real monthly cost.</div>
          </Link>
          <Link href="/feature/voice-calls" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Voice Calls →</div>
            <div className="text-sm text-muted-foreground font-light">Platforms with voice included.</div>
          </Link>
          <Link href="/feature/video-generation" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Video Generation →</div>
            <div className="text-sm text-muted-foreground font-light">Which apps deliver usable video.</div>
          </Link>
          <Link href="/feature/long-term-memory" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Long-Term Memory →</div>
            <div className="text-sm text-muted-foreground font-light">AI companions that remember you.</div>
          </Link>
        </div>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-5">Image Generation Questions</h2>
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
