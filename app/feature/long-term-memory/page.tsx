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
      "name": "Which AI girlfriend app has the best memory?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPTGirlfriend has the deepest memory — fully persistent, remembers long conversations and details over weeks. Secrets AI has enhanced memory with the best categorization. AiAllure has advanced biographical memory. OurDream AI, Candy AI, Nectar AI, and MyDreamCompanion have basic/standard memory."
      }
    },
    {
      "@type": "Question",
      "name": "Do AI girlfriends remember past conversations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most do, but the depth varies enormously. GPTGirlfriend remembers details from weeks ago. Secrets AI categorizes memories by type. AiAllure has advanced biographical memory. Basic memory platforms (OurDream, Nectar) remember recent context but lose older details faster."
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

const DEEP_MEMORY: Platform[] = [
  {
    id: "gptgirlfriend",
    name: "GPTGirlfriend",
    rank: "1",
    rankClass: "bg-amber-400 text-black",
    badge: { text: "Deepest Memory", class: "bg-green-500/10 text-green-600" },
    description: "The best memory system we've tested. Fully persistent — remembers details from weeks of conversation, inside jokes, preferences, personal history. Designed for long roleplay sessions where continuity matters. If memory is your #1 priority, this is the clear choice.",
    features: [
      { text: "✓ Memory — deep, persistent", type: "included" },
      { text: "Chat — capped", type: "capped" },
      { text: "Voice — capped", type: "capped" },
      { text: "Images: credits (~60)", type: "credits" },
    ],
    priceYearly: "$9.58",
    priceMonthly: "$12.00",
    valueIndex: 60,
    affiliateUrl: "https://www.gptgirlfriend.online/?ref=mgi4mjj",
    featured: true,
    primaryCta: true,
    ...PLATFORM_LOGOS["gptgirlfriend"],
  },
  {
    id: "secrets-ai",
    name: "Secrets AI",
    rank: "2",
    rankClass: "bg-black text-amber-400",
    badge: { text: "Enhanced", class: "bg-amber-400/10 text-amber-600" },
    description: "Enhanced memory with the best structure — memories are categorized and weighted. Good recall across sessions. The trade-off: all media (images, voice, video) costs moments from a shared pool. Best for chat-focused users who value remembrance.",
    features: [
      { text: "✓ Memory — enhanced, categorized", type: "included" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Images: moments", type: "credits" },
      { text: "Voice: moments", type: "credits" },
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
    id: "aiallure",
    name: "AiAllure",
    rank: "3",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: { text: "Advanced", class: "bg-green-500/10 text-green-600" },
    description: "Advanced biographical memory system: memories categorized by type (identity, preferences, relationships, goals), smart extraction of meaningful facts, automatic conflict resolution, and memory health check. One of the better memory systems available.",
    features: [
      { text: "✓ Advanced memory", type: "included" },
      { text: "✓ Unlimited images", type: "included" },
      { text: "✓ Unlimited voice", type: "included" },
      { text: "✓ Live Rooms", type: "included" },
    ],
    priceYearly: "$9.90",
    priceMonthly: "$19.90",
    valueIndex: 84,
    affiliateUrl: "https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow",
    featured: false,
    primaryCta: false,
    ...PLATFORM_LOGOS["aiallure"],
  },
];

const STANDARD_MEMORY: Platform[] = [
  {
    id: "candy-ai",
    name: "Candy AI",
    rank: "4",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Adaptive memory — works well for recent context but forgets older details faster than GPTGirlfriend or Secrets AI. Good enough for casual daily use, not ideal for multi-week storylines.",
    features: [
      { text: "Memory — standard, adaptive", type: "capped" },
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
    rank: "5",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Standard memory. Remembers basics across sessions but nothing exceptional. Limited by the small coin budget for everything else.",
    features: [
      { text: "Memory — standard", type: "capped" },
      { text: "Chat — capped", type: "capped" },
      { text: "Images: coins", type: "credits" },
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
    rank: "6",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Standard memory in a chat-focused package. Remembers key details but depth is limited. The guided scenario system compensates somewhat by keeping conversations structured.",
    features: [
      { text: "Memory — standard", type: "capped" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Images: hearts", type: "credits" },
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

const BASIC_MEMORY: Platform[] = [
  {
    id: "ourdream-ai",
    name: "OurDream AI",
    rank: "7",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Basic memory. Remembers within sessions and some cross-session context, but loses details faster. The all-in-one coin model is the selling point — memory isn't the strength.",
    features: [
      { text: "Memory — basic", type: "capped" },
      { text: "✓ Unlimited chat", type: "included" },
      { text: "Images/Voice/Video — coin pool", type: "capped" },
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
    id: "nectar-ai",
    name: "Nectar AI",
    rank: "8",
    rankClass: "bg-muted text-muted-foreground border border-border",
    badge: null,
    description: "Basic memory — retains some context within sessions but doesn't build long-term profiles. Scenario builder is the main draw, not memory depth.",
    features: [
      { text: "Memory — basic", type: "capped" },
      { text: "Images — 100/day", type: "capped" },
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

const FAQS = [
  {
    q: "Which AI girlfriend remembers you best?",
    a: "GPTGirlfriend — deep persistent memory that recalls details from weeks ago. Secrets AI is second with enhanced categorized memory. AiAllure has advanced biographical memory with conflict resolution and auto-cleanup.",
    defaultOpen: true,
  },
  {
    q: "Do AI girlfriends forget conversations?",
    a: "Eventually, yes — on most platforms. \"Basic\" memory (OurDream, Nectar) forgets older context faster. \"Standard\" memory (Candy AI) keeps recent weeks. \"Deep\" memory (GPTGirlfriend) and \"Enhanced\" memory (Secrets AI) retain details across weeks and months. The difference is significant for long-term use.",
  },
  {
    q: "Can you manage or delete memories?",
    a: "AiAllure has a memory dashboard with category badges, age indicators, and one-click delete. GPTGirlfriend and Secrets AI also let you view stored memories. Most other platforms don't expose memory management to users.",
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

export default function LongTermMemoryPage() {
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
            Long-Term Memory
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            AI Girlfriend Apps That Actually Remember You
          </h1>
          <p className="text-xl text-muted-foreground max-w-[640px] font-light">
            Memory is what separates a chatbot from a companion. We tested how long each platform retains context — some remember weeks, others forget overnight.
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
            <strong className="text-foreground">Best memory:</strong> GPTGirlfriend — deep, fully persistent across weeks.{" "}
            <strong className="text-foreground">Best categorized memory:</strong> Secrets AI — enhanced with structured recall.{" "}
            <strong className="text-foreground">Most advanced system:</strong> AiAllure — new biographical intelligence with auto-cleanup, conflict resolution, deduplication.{" "}
            <strong className="text-foreground">Standard:</strong> Candy AI, MyDreamCompanion, Secret Desires AI.{" "}
            <strong className="text-foreground">Basic:</strong> OurDream AI, Nectar AI.
          </p>
        </div>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Deep / Enhanced Memory</h2>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-green-500/10 text-green-600">
              Best for Long-Term Use
            </span>
          </div>
          {DEEP_MEMORY.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Standard Memory</h2>
            <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-600">
              Adequate for Most Users
            </span>
          </div>
          {STANDARD_MEMORY.map((p) => <PlatformCard key={p.id} platform={p} />)}
        </section>

        <section className="my-12">
          <div className="flex items-baseline gap-3 mb-5 pb-3 border-b-2 border-border flex-wrap">
            <h2 className="text-2xl font-bold">Basic Memory</h2>
          </div>
          {BASIC_MEMORY.map((p) => <PlatformCard key={p.id} platform={p} />)}
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
          <Link href="/feature/voice-calls" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">Voice Calls →</div>
            <div className="text-sm text-muted-foreground font-light">Who includes voice.</div>
          </Link>
          <Link href="/feature/no-tokens" className="bg-card border border-border rounded-lg p-5 hover:border-primary/40 transition-colors">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</div>
            <div className="text-base font-semibold text-foreground mb-1">No Tokens / Credits →</div>
            <div className="text-sm text-muted-foreground font-light">Flat plans, no coin systems.</div>
          </Link>
        </div>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-5">Memory Questions</h2>
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
