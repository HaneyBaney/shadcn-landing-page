"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { LAST_UPDATED, NEXT_UPDATE } from "@/data/value-index";
import { PLATFORMS_TESTED } from "@/data/value-index-adapter";
import { rankedPlatforms } from "@/data/ranked-platforms";

// FAQ Schema data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the Value Index™ rank AI girlfriend apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Value Index™ calculates a score from 0-100 using two inputs: feature coverage (what's included without extra cost) and price efficiency (value per dollar). These are combined using a geometric mean — the same formula the UN uses for the Human Development Index."
      }
    },
    {
      "@type": "Question",
      "name": "Why use a geometric mean instead of a simple average?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A simple average lets platforms game the system. Score 90 on features and 10 on price, and a simple average still shows 50. The geometric mean gives that same platform a 30. It penalizes imbalance, so platforms must deliver on both features and pricing to score well."
      }
    },
    {
      "@type": "Question",
      "name": "Where does aigfnow.com get its pricing data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All pricing is pulled directly from each platform's official pricing page. Monthly rates, yearly rates, token costs, and credit systems are documented and verifiable. Data is refreshed monthly."
      }
    },
    {
      "@type": "Question",
      "name": "Do affiliate commissions affect the rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Commission rates have zero weight in the Value Index formula. Rankings are calculated purely from feature access and pricing data. Platforms with no affiliate program have ranked above high-commission platforms when the math favored them."
      }
    },
    {
      "@type": "Question",
      "name": "How many AI girlfriend platforms does aigfnow.com compare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Currently ${PLATFORMS_TESTED} platforms are indexed, covering the major players in the AI companion market including chat, image generation, voice, video, and memory features.`
      }
    },
    {
      "@type": "Question",
      "name": "How often is the data updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monthly. AI companion platforms change pricing frequently. Every ranking page shows the last-updated timestamp so you know exactly how current the data is."
      }
    }
  ]
};

// ItemList Schema for platforms
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AI Girlfriend Apps Ranked by Value Index™",
  "description": "AI girlfriend platforms ranked by feature coverage and price efficiency using a geometric mean formula.",
  "numberOfItems": PLATFORMS_TESTED,
  "itemListElement": rankedPlatforms.map((p, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": p.meta.name,
    "url": `https://aigfnow.com/#${p.meta.slug}`
  }))
};

// WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Value Index™ Methodology — How We Rank AI Girlfriend Apps",
  "description": "Our Value Index™ ranks AI girlfriend apps by feature access and pricing using a geometric mean formula. No opinions — just data from official pricing pages.",
  "url": "https://aigfnow.com/how-we-test",
  "dateModified": "2026-04-08",
  "publisher": {
    "@type": "Organization",
    "name": "aigfnow.com",
    "url": "https://aigfnow.com"
  }
};

export default function HowWeTestPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <main className="max-w-[740px] mx-auto px-6 py-12">
        {/* HERO */}
        <header className="py-16 border-b-2 border-border">
          <nav className="text-sm text-muted-foreground mb-5 tracking-wide">
            <Link href="/" className="hover:text-foreground transition-colors">aigfnow.com</Link> / Methodology
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How We Rank <span className="text-transparent bg-gradient-to-r from-primary via-amber-400 to-orange-500 bg-clip-text">AI Girlfriend Apps</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-[600px] leading-relaxed">
            The Value Index™ scores platforms by what you actually get before paying extra, divided by what it costs. No subjective reviews — just pricing data and a formula.
          </p>

          <div className="flex flex-wrap gap-4 mt-7">
            <Link 
              href="/#rankings" 
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground bg-card border border-border px-4 py-2 rounded-full hover:border-primary/50 hover:text-foreground transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {PLATFORMS_TESTED} platforms indexed
            </Link>
            <span className="inline-flex items-center text-sm font-medium text-muted-foreground bg-card border border-border px-4 py-2 rounded-full">
              Updated {LAST_UPDATED}
            </span>
            <span className="inline-flex items-center text-sm font-medium text-muted-foreground bg-card border border-border px-4 py-2 rounded-full">
              Next refresh: {NEXT_UPDATE}
            </span>
          </div>
        </header>

      {/* WHAT IS THE VALUE INDEX */}
      <section className="py-14 border-b border-border">
        <h2 className="text-2xl font-bold mb-5">The Value Index™ — One Score, Zero Opinions</h2>

        <p className="text-muted-foreground mb-6">
          Most AI girlfriend comparison sites test a platform for an afternoon and publish a subjective rating. The Value Index takes a different approach: it&apos;s a single score (0–100) calculated from two data points that anyone can verify.
        </p>

        {/* Formula Card */}
        <div className="bg-card border border-border rounded-xl p-8 text-center my-7">
          <div className="font-mono text-xl md:text-2xl font-medium text-foreground mb-3">
            Value Index = √(Feature Score × Price Score)
          </div>
          <div className="text-sm text-muted-foreground">
            Geometric mean — same method the UN uses for the Human Development Index
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Input 1</div>
            <div className="text-lg font-semibold text-foreground mb-1">Feature Coverage</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              How many features — chat, images, voice, video, memory — are included on the cheapest paid plan without extra credits or add-ons.
            </p>
            <span className="inline-block mt-3 font-mono text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded">50% weight</span>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Input 2</div>
            <div className="text-lg font-semibold text-foreground mb-1">Price Efficiency</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Value per dollar. A $5/month plan with 3 features beats a $20/month plan with 4 features. The cheapest viable plan in our index scores 100.
            </p>
            <span className="inline-block mt-3 font-mono text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded">50% weight</span>
          </div>
        </div>

        <p className="text-muted-foreground">
          A platform can&apos;t score high by being cheap but feature-poor. It also can&apos;t score high by offering everything at a price nobody should pay. You need both to rank well — that&apos;s the entire point of the geometric mean.
        </p>
      </section>

      {/* WHY GEOMETRIC MEAN */}
      <section className="py-14 border-b border-border">
        <h2 className="text-2xl font-bold mb-5">Why a Geometric Mean Instead of a Simple Average?</h2>

        <p className="text-muted-foreground mb-6">
          A simple average lets platforms game the system. Score 90 on features and 10 on price, and the arithmetic mean still shows a respectable 50. The geometric mean gives that same platform a score of 30 — which is closer to how a real user would experience it.
        </p>

        {/* Callout */}
        <div className="bg-primary/5 border-l-4 border-primary px-6 py-5 rounded-r-xl my-6">
          <p className="text-muted-foreground text-[15px]">
            <strong className="text-foreground">The UN does the same thing.</strong> The Human Development Index combines life expectancy, education, and income using a geometric mean. A country can&apos;t compensate for low life expectancy with high GDP. We apply identical logic: a platform can&apos;t compensate for bad pricing with good features.
          </p>
        </div>

        <p className="text-muted-foreground">
          This isn&apos;t a novel approach. The OECD <em>Handbook on Constructing Composite Indicators</em> (2008) recommends geometric means for exactly this type of multi-dimensional comparison, and peer-reviewed research has confirmed that the geometric mean penalizes imbalance in a way that produces more meaningful rankings.
        </p>
      </section>

      {/* HOW WE COLLECT DATA */}
      <section className="py-14 border-b border-border">
        <h2 className="text-2xl font-bold mb-5">How We Collect Pricing and Feature Data</h2>

        <div className="space-y-7 my-7">
          {[
            { num: 1, title: "Pull pricing from official sources", desc: "Every data point comes directly from the platform's public pricing page. Monthly rates, annual rates, token costs, credit pack prices — documented and verifiable. We never use third-party estimates." },
            { num: 2, title: "Map feature access by tier", desc: "Each feature is categorized as unlimited, capped (with a specific monthly limit), or credit-based (costs extra per use). We document the cheapest paid plan that gives real access to each feature — not the free trial, not the enterprise tier." },
            { num: 3, title: "Calculate the effective monthly price", desc: "Annual plans are divided by 12. Credit packs are converted to per-use costs and estimated for moderate monthly usage. The goal is one comparable number: what does a real user actually pay per month?" },
            { num: 4, title: "Run the formula and publish", desc: "Feature Score and Price Score are normalized to 0–100, then combined via geometric mean. Every ranking page shows the last-updated date. Data is re-pulled from pricing pages monthly." },
          ].map((step) => (
            <div key={step.num} className="grid grid-cols-[40px_1fr] gap-4">
              <div className="w-9 h-9 rounded-full bg-foreground text-primary font-mono text-sm font-semibold flex items-center justify-center shrink-0 mt-0.5">
                {step.num}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-[15px] text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DATA POINTS */}
      <section className="py-14 border-b border-border">
        <h2 className="text-2xl font-bold mb-5">What We Measure for Each AI Girlfriend Platform</h2>

        <p className="text-muted-foreground mb-6">
          Five feature categories and full pricing data. No subjective quality ratings — only whether a feature exists, what its limits are, and what it costs.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse my-6">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground p-4">Feature</th>
                <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground p-4">What We Record</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-4 font-semibold text-foreground">Chat</td>
                <td className="p-4 text-muted-foreground">Message limits from pricing page. Access tier: unlimited, capped, or credit-based.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Image Generation</td>
                <td className="p-4 text-muted-foreground">Images included per month on cheapest paid plan, or credit cost per image.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Voice</td>
                <td className="p-4 text-muted-foreground">Minutes included per month, or credit cost per minute of voice interaction.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Video</td>
                <td className="p-4 text-muted-foreground">Clips included, length limits, credit costs. Noted if feature exists at all.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Memory</td>
                <td className="p-4 text-muted-foreground">Context window persistence tier: basic, standard, or enhanced long-term memory.</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-foreground">Pricing</td>
                <td className="p-4 text-muted-foreground">Monthly rate, annual rate (÷ 12), credit pack prices, token expiration policy.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* OPEN SOURCE FORMULA */}
      <section className="py-14 border-b border-border">
        <h2 className="text-2xl font-bold mb-5">Open-Source Formula</h2>

        <p className="text-muted-foreground mb-6">
          The ranking formula is published. You can read it, verify it, or tell us it&apos;s wrong.
        </p>

        <ValueIndexExplainer />
      </section>

      {/* AFFILIATE DISCLOSURE */}
      <section className="py-14 border-b border-border">
        <h2 className="text-2xl font-bold mb-5">Affiliate Disclosure</h2>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-2">Links on this site are affiliate links.</h3>
          <p className="text-sm text-muted-foreground">
            Commission rates have zero weight in the Value Index formula — rankings are calculated purely from feature access and pricing data. Platforms with no affiliate program have ranked above high-commission platforms when the math favored them. We believe transparency about how we earn revenue makes our methodology more trustworthy, not less.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">How does the Value Index™ rank AI girlfriend apps?</h3>
            <p className="text-muted-foreground">
              It calculates a 0–100 score from two inputs: feature coverage (what&apos;s included without extra cost) and price efficiency (value per dollar). These are combined using a geometric mean — the same mathematical method the UN uses for the Human Development Index.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Why not just rank by price?</h3>
            <p className="text-muted-foreground">
              Because a $3/month plan with only text chat is a fundamentally different product than a $10/month plan with chat, images, voice, and video. Price alone doesn&apos;t tell you what you&apos;re getting. The Value Index accounts for both dimensions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Do affiliate commissions affect the rankings?</h3>
            <p className="text-muted-foreground">
              No. The formula takes two inputs: feature access data and pricing data. There is no input for commission rate. Platforms without affiliate programs have outranked platforms that pay commissions when their feature-to-price ratio was better.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">How often is the data updated?</h3>
            <p className="text-muted-foreground">
              Monthly. AI companion platforms change pricing frequently — new tiers, adjusted credit costs, seasonal promotions. Every ranking page shows the exact date data was last pulled so you can judge freshness yourself.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Why only {PLATFORMS_TESTED} platforms?</h3>
            <p className="text-muted-foreground">
              Quality over quantity. We index the platforms that represent the meaningful choices in the market. Adding dozens of near-identical clones would dilute the comparison without helping anyone make a better decision. New platforms are added when they offer something genuinely distinct.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Can I see the raw data?</h3>
            <p className="text-muted-foreground">
              The formula is open source. The data sources are public pricing pages, linked from each platform&apos;s ranking entry. You can verify every number yourself.
            </p>
          </div>
        </div>
      </section>

        {/* VIDEO */}
        <section className="py-14">
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <video
              className="w-full aspect-video"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="/hero-image-dark.jpeg"
            >
              <source src="/videos/methodology-video..mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center">
          <p className="text-sm text-muted-foreground">Data sourced exclusively from public pricing pages.</p>
          <div className="font-mono text-xs text-muted-foreground mt-1">
            Last updated: {LAST_UPDATED} · Next update: {NEXT_UPDATE} · {PLATFORMS_TESTED} platforms tested
          </div>
        </footer>
      </main>
    </>
  );
}

/* ── Value Index Explainer — Open Source Methodology View ── */
function ValueIndexExplainer() {
  const [activeTab, setActiveTab] = useState<"formula" | "readme">("formula");

  return (
    <div className="space-y-4">
      {/* ── IDE Window ── */}
      <div className="rounded-xl overflow-hidden border border-border/60 dark:border-white/[0.08] shadow-2xl">

        {/* ── Title bar (macOS style) ── */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e1e1e]">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs font-mono text-white/30 ml-2">aigfnow / data /</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/20">
            <span>TypeScript</span>
            <span className="mx-1">·</span>
            <span>UTF-8</span>
          </div>
        </div>

        {/* ── Tab bar ── */}
        <div className="flex bg-[#252526] border-b border-[#1e1e1e]">
          <button
            onClick={() => setActiveTab("formula")}
            className={`px-4 py-2 text-xs font-mono flex items-center gap-2 border-r border-[#1e1e1e] transition-colors ${
              activeTab === "formula"
                ? "bg-[#1e1e1e] text-white/80"
                : "text-white/30 hover:text-white/50"
            }`}
          >
            <span className="text-blue-400">TS</span> value-index.ts
          </button>
          <button
            onClick={() => setActiveTab("readme")}
            className={`px-4 py-2 text-xs font-mono flex items-center gap-2 border-r border-[#1e1e1e] transition-colors ${
              activeTab === "readme"
                ? "bg-[#1e1e1e] text-white/80"
                : "text-white/30 hover:text-white/50"
            }`}
          >
            <span className="text-white/40">MD</span> README.md
          </button>
        </div>

        {/* ── Code content ── */}
        <div className="bg-[#1e1e1e] min-h-[320px]">

          {activeTab === "formula" && (
            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-[1.7] text-[#cdd6f4]">
<span className="text-[#6c7086]">{`// Why geometric mean?
// A simple average lets platforms game the system —
// score 90 on features and 10 on price, average = 50.
// Geometric mean gives that same platform a 30.

`}</span>
<span className="text-[#cba6f7]">function</span> <span className="text-[#89b4fa]">valueIndex</span>(featureScore: number, priceScore: number): number {"{"}
  <span className="text-[#cba6f7]">return</span> Math.<span className="text-[#89b4fa]">sqrt</span>(featureScore * priceScore);
{"}"}

<span className="text-[#6c7086]">{`// Feature score: 0-100
// Counts included features on cheapest paid plan
// chat + images + voice + video + memory
// Each weighted by access tier:
//   unlimited = 20pts, capped = 12pts, credits = 5pts

// Price score: 0-100
// Normalized against cheapest plan in index
// priceScore = (cheapest / thisPrice) * 100

// Sources:
// [1] UNDP Human Development Index — geometric mean
// [2] OECD Handbook on Composite Indicators (2008)
// [3] Aggregating the HDI (Springer, 2024)`}</span>
              </pre>
            </div>
          )}

          {activeTab === "readme" && (
            <div className="p-6 max-w-3xl">
              <div className="space-y-5 font-mono text-sm leading-relaxed text-[#cccccc]">
                <div>
                  <h4 className="text-base font-bold text-white mb-2"># Why geometric mean?</h4>
                  <p className="text-[#9d9d9d]">
                    A simple average lets platforms game the system — score 90 on features
                    and 10 on price, and the average still looks decent at 50. But the
                    geometric mean gives that same platform a <strong className="text-[#f97583]">30</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-2">## The UN does the same thing</h4>
                  <p className="text-[#9d9d9d]">
                    The Human Development Index combines life expectancy, education, and
                    income using a geometric mean. A country can&apos;t compensate for low
                    life expectancy with high GDP. We apply the same logic.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-2">## Sources</h4>
                  <div className="text-[#9d9d9d] space-y-1 text-xs">
                    <p><a href="https://hdr.undp.org/data-center/human-development-index" target="_blank" rel="noopener noreferrer" className="text-[#569cd6] hover:underline">[1] UNDP Human Development Index</a></p>
                    <p><a href="https://www.oecd.org/en/publications/handbook-on-constructing-composite-indicators-methodology-and-user-guide_9789264043466-en.html" target="_blank" rel="noopener noreferrer" className="text-[#569cd6] hover:underline">[2] OECD Handbook on Composite Indicators (2008)</a></p>
                    <p><a href="https://link.springer.com/article/10.1007/s11205-024-03318-7" target="_blank" rel="noopener noreferrer" className="text-[#569cd6] hover:underline">[3] Aggregating the HDI (Springer, 2024)</a></p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Status bar ── */}
        <div className="flex items-center justify-between px-4 py-1 bg-[#007acc] text-white text-[10px] font-mono">
          <div className="flex items-center gap-3">
            <span>main</span>
            <span>✓ {PLATFORMS_TESTED} platforms indexed</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Updated {LAST_UPDATED}</span>
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      </div>

      {/* Repo card */}
      <div className="bg-[#1e1e2e] rounded-xl px-5 py-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span>📂</span>
          <span className="font-mono text-sm text-[#cdd6f4] font-medium">aigfnow / data /</span>
        </div>
        <div className="font-mono text-xs text-[#6c7086] flex gap-4">
          <span className="text-[#89b4fa]">main</span>
          <span>✓ {PLATFORMS_TESTED} platforms indexed</span>
        </div>
      </div>
    </div>
  );
}
