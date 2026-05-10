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
      "name": "Which AI girlfriend app has the best voice calls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AiAllure offers unlimited voice with real-time lip sync in Live Rooms. GPTGirlfriend has capped voice included. OurDream AI includes voice minutes from its coin pool. Most other platforms charge per-minute via tokens or credits."
      }
    },
    {
      "@type": "Question",
      "name": "Can you talk to an AI girlfriend on the phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — several platforms support voice interaction. AiAllure has real-time voice with lip-synced video in Live Rooms. GPTGirlfriend and OurDream AI include voice minutes. Candy AI, Secrets AI, and others charge tokens/credits for voice."
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

const UNLIMITED_VOICE: Platform[] = [
  {
    id: "aiallure",
    name: "AiAllure",
    rank: "1",
    rankClass: "bg-amber-400 text-black",
    badge: { text: "Unlimited Voice", class: "bg-green-500/10 text-green-600" },
    description: "Only platform with truly unlimited voice on the base plan. Live Rooms add real-time lip sync, webcam vision, and custom voice mixing — blend multiple voices to create your companion's unique sound. Voice works in standard chat and in Live Room video calls.",
    features: [
      { text: "✓ Unlimited voice", type: "included" },
      { text: "✓ Live Room lip sync", type: "included" },
      { text: "✓ Custom voice mixing", type: "included" },
      { text: "✓ Webcam vision", type: "included" },
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

const CAPPED_VOICE: Platform[] = [
  {
    id: "gptgirlfriend",
    name: "GPTGirlfriend",
    rank: "2",
    rankClass: "bg-black text-amber-400",
    badge: null,
    description: "Voice included and capped. Best memory system helps voice conversations feel continuous — she remembers what you talked about. Not many minutes but the quality of interaction is high.",
    features: [
      { text: "Voice — capped minutes", type: "capped" },
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
    id: "ourdream-ai",
    name: "OurDream AI",
    rank: "3",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Voice minutes come from the shared 1,000 dreamcoin pool. Using voice means fewer images/videos. Decent voice quality, but the shared pool makes budgeting tricky.",
    features: [
      { text: "Voice — from coin pool", type: "capped" },
      { text: "Images — from coin pool", type: "capped" },
      { text: "Video — from coin pool", type: "capped" },
    ],
    priceYearly: "$9.99",
    priceMonthly: "$19.99",
    valueIndex: 77,
    affiliateUrl: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["ourdream-ai"],
  },
  {
    id: "nectar-ai",
    name: "Nectar AI",
    rank: "4",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Voice is capped — included in subscription but limited. Scenario builder is the main draw. Not built for heavy voice use.",
    features: [
      { text: "Voice — capped", type: "capped" },
      { text: "Chat — 6,000/mo", type: "capped" },
    ],
    priceYearly: "$4.99",
    priceMonthly: "$9.99",
    valueIndex: 64,
    affiliateUrl: "https://nectar.ai/?_ef_transaction_id=&oid=1&affid=51",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["nectar-ai"],
  },
];

const CREDIT_VOICE: Platform[] = [
  {
    id: "secrets-ai",
    name: "Secrets AI",
    rank: "5",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Voice costs moments. 8,000 moments/mo ≈ 80 min voice if you spend all moments on voice only. Sharing with images/video means less. Enhanced memory is the real draw here.",
    features: [
      { text: "Voice — moments (~80 min max)", type: "credits" },
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
    id: "candy-ai",
    name: "Candy AI",
    rank: "6",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Voice costs tokens from your 100/month budget. Cheapest plan but voice eats tokens fast — expect only a few minutes per month unless you buy more tokens.",
    features: [
      { text: "Voice — tokens", type: "credits" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Images: tokens", type: "credits" },
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
    description: "100 Dream Coins ≈ 35 voice playbacks. Coins shared with images and video. Very limited voice on the base plan.",
    features: [
      { text: "Voice — ~35 playbacks from coins", type: "credits" },
      { text: "Images: coins", type: "credits" },
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
    id: "lovescape",
    name: "Lovescape",
    rank: "8",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "600 chips/mo for voice, images, video. $19.99/mo ($7.80/mo annual). Unlimited chat included.",
    features: [
      { text: "Voice — chips", type: "credits" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Video — chips", type: "credits" },
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
    q: "Which AI girlfriend has the best voice?",
    a: "AiAllure — unlimited voice with custom voice mixing (blend multiple voices), real-time lip sync in Live Rooms, and webcam vision so she reacts while talking to you. No per-minute cost.",
    defaultOpen: true,
  },
  {
    q: "Can you actually call your AI girlfriend?",
    a: "Yes. AiAllure's Live Rooms offer real-time voice + video calls. GPTGirlfriend, OurDream, and Nectar include capped voice minutes. Others charge per minute via tokens. The experience ranges from voice messages to full interactive calls depending on platform.",
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

export default function VoiceCallsPage() {
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
            Voice Calls
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            AI Girlfriend Apps With Voice Calls
          </h1>
          <p className="text-xl text-muted-foreground max-w-[640px] font-light">
            Voice makes AI companions feel real — but most platforms charge per minute or lock it behind premium tiers. Here&apos;s who actually includes voice and what kind.
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
            <strong className="text-foreground">Unlimited voice:</strong> AiAllure only — real-time voice with lip-synced Live Room video.{" "}
            <strong className="text-foreground">Voice included with caps:</strong> GPTGirlfriend, OurDream AI, Nectar AI.{" "}
            <strong className="text-foreground">Voice costs credits:</strong> Candy AI, Secrets AI, MyDreamCompanion, Lovescape.
          </p>
        </div>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Unlimited Voice</h2>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-green-500/10 text-green-600">
              Best Experience
            </span>
          </div>
          {UNLIMITED_VOICE.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Voice Included — With Limits</h2>
            <span className="font-mono text-sm text-muted-foreground">Minutes capped monthly</span>
          </div>
          {CAPPED_VOICE.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Voice Costs Credits</h2>
            <span className="font-mono text-sm text-muted-foreground">Per-minute charges</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-orange-500/10 text-orange-600">
              Extra Cost
            </span>
          </div>
          {CREDIT_VOICE.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

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
          <Link href="/feature/video-generation" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Video Generation →</div>
            <div className="text-sm text-muted-foreground font-light">Who delivers usable video.</div>
          </Link>
          <Link href="/feature/long-term-memory" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Long-Term Memory →</div>
            <div className="text-sm text-muted-foreground font-light">AI that remembers you.</div>
          </Link>
        </div>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-5">Voice Call Questions</h2>
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
