"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const LABELS = ["Don't care", "Nice to have", "Important", "Essential"];

interface Platform {
  id: string;
  name: string;
  price: number;
  priceMonthly: number;
  vi: number;
  images: number;
  voice: number;
  video: number;
  memory: number;
  tags: string[];
  tagTypes: string[];
  noTokens: boolean;
  liveRoom: boolean;
  url: string;
  meta: string;
  logo?: string;
  domain: string;
}

const PLATFORMS: Platform[] = [
  {
    id: "aiallure",
    name: "AiAllure",
    price: 9.9,
    priceMonthly: 19.9,
    vi: 84,
    images: 3,
    voice: 3,
    video: 3,
    memory: 1,
    tags: ["Unlimited images", "Unlimited voice", "Live Room"],
    tagTypes: ["green", "green", "accent"],
    noTokens: true,
    liveRoom: true,
    url: "https://www.aiallure.com/landing/c2ae4697-119e-4f5e-a63b-77a03554ad21?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln",
    meta: "Unlimited images + voice · Live Room · Best visuals",
    logo: "/logos/aiallure.png",
    domain: "aiallure.ai",
  },
  {
    id: "secrets",
    name: "Secrets AI",
    price: 9.99,
    priceMonthly: 19.99,
    vi: 78,
    images: 1,
    voice: 1,
    video: 1,
    memory: 3,
    tags: ["Enhanced memory", "8K moments/mo"],
    tagTypes: ["green", "orange"],
    noTokens: false,
    liveRoom: false,
    url: "https://secrets.ai",
    meta: "Chat-first · Best memory categorization · Moments for media",
    domain: "secrets.ai",
  },
  {
    id: "ourdream",
    name: "OurDream AI",
    price: 9.99,
    priceMonthly: 19.99,
    vi: 77,
    images: 2,
    voice: 2,
    video: 2,
    memory: 1,
    tags: ["All-in-one plan", "1K coins/mo"],
    tagTypes: ["green", "orange"],
    noTokens: false,
    liveRoom: false,
    url: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172",
    meta: "One coin pool for everything · Simpler pricing model",
    logo: "/logos/ourdream-ai.png",
    domain: "ourdreamersai.com",
  },
  {
    id: "nectar",
    name: "Nectar AI",
    price: 4.99,
    priceMonthly: 9.99,
    vi: 64,
    images: 2,
    voice: 1,
    video: 1,
    memory: 1,
    tags: ["100 images/day", "$4.99/mo yearly"],
    tagTypes: ["green", "green"],
    noTokens: false,
    liveRoom: false,
    url: "https://nectar.ai/?_ef_transaction_id=&oid=1&affid=51",
    meta: "Daily caps · $4.99/mo yearly · Structured usage · Video costs credits",
    domain: "nectar.ai",
  },
  {
    id: "gptgf",
    name: "GPTGirlfriend",
    price: 9.58,
    priceMonthly: 12.0,
    vi: 60,
    images: 1,
    voice: 1,
    video: 0,
    memory: 3,
    tags: ["Deepest memory", "Roleplay focus"],
    tagTypes: ["green", "accent"],
    noTokens: false,
    liveRoom: false,
    url: "https://www.gptgirlfriend.online/?ref=mgi4mjj",
    meta: "Best memory system · Deep roleplay · 400 credits/mo",
    domain: "gptgirlfriend.online",
  },
  {
    id: "secret-desires",
    name: "Secret Desires AI",
    price: 6.67,
    priceMonthly: 7.99,
    vi: 50,
    images: 1,
    voice: 1,
    video: 0,
    memory: 2,
    tags: ["Chat-focused", "Hearts system"],
    tagTypes: ["green", "orange"],
    noTokens: false,
    liveRoom: false,
    url: "https://secretdesires.ai?via=hana64",
    meta: "$6.67/mo yearly · Unlimited chat · Hearts for media · No video",
    logo: "/logos/faviconV2.png",
    domain: "secret-desires.ai",
  },
  {
    id: "mydream",
    name: "MyDreamCompanion",
    price: 5.84,
    priceMonthly: 11.99,
    vi: 51,
    images: 1,
    voice: 1,
    video: 1,
    memory: 2,
    tags: ["Low entry price", "Coins run fast"],
    tagTypes: ["orange", "orange"],
    noTokens: false,
    liveRoom: false,
    url: "https://www.mydreamcompanion.com/?linkId=lp_645321&sourceId=11754648&tenantId=dreamcompanion",
    meta: "$5.84/mo · 100 coins = ~20 images · Budget text-only",
    domain: "mydreamcompanion.com",
  },
  {
    id: "candy",
    name: "Candy AI",
    price: 3.99,
    priceMonthly: 13.99,
    vi: 56,
    images: 1,
    voice: 1,
    video: 1,
    memory: 2,
    tags: ["Cheapest plan", "100 tokens/mo"],
    tagTypes: ["green", "orange"],
    noTokens: false,
    liveRoom: false,
    url: "https://t.crjmpx.com/389267/9022/39453",
    meta: "$3.99/mo cheapest · Unlimited chat · Media costs tokens",
    domain: "candy.ai",
  },
];

function TagBadge({ text, type }: { text: string; type: string }) {
  const classes: Record<string, string> = {
    green: "bg-green-500/10 text-green-600 dark:text-green-400",
    orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    accent: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wide ${classes[type] || classes.orange}`}>
      {text}
    </span>
  );
}

export default function MatchPage() {
  const [budget, setBudget] = useState(12);
  const [wImages, setWImages] = useState(1);
  const [wVoice, setWVoice] = useState(1);
  const [wVideo, setWVideo] = useState(0);
  const [wMemory, setWMemory] = useState(1);

  const [toggles, setToggles] = useState({
    noTokens: false,
    liveRoom: false,
  });

  const toggleOption = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const scored = useMemo(() => {
    return PLATFORMS.map((p) => {
      let score = p.vi;

      // Budget scoring
      if (p.price > budget) {
        score -= (p.price - budget) * 8;
      } else {
        score += (budget - p.price) * 1.5;
      }

      // Feature weighting
      score += p.images * wImages * 5;
      score += p.voice * wVoice * 5;
      score += p.video * wVideo * 6;
      score += p.memory * wMemory * 4;

      // Toggle bonuses
      if (toggles.noTokens) {
        score += p.noTokens ? 20 : -15;
      }
      if (toggles.liveRoom) {
        score += p.liveRoom ? 25 : -10;
      }

      // Dimming logic
      let dimmed = false;
      if (p.price > budget + 3) dimmed = true;
      if (wVideo === 3 && p.video <= 0) dimmed = true;
      if (toggles.liveRoom && !p.liveRoom) dimmed = true;

      return { ...p, score: Math.max(0, score), dimmed };
    }).sort((a, b) => b.score - a.score);
  }, [budget, wImages, wVoice, wVideo, wMemory, toggles]);

  const maxScore = scored[0]?.score || 1;
  const visibleCount = scored.filter((s) => !s.dimmed).length;

  return (
    <div className="container max-w-[940px] py-12">
      {/* Header */}
      <header className="text-center mb-8">
        <nav className="text-sm text-muted-foreground mb-5">
          <Link href="/" className="hover:text-foreground transition-colors">
            aigfnow.com
          </Link>
          {" / Find My App"}
        </nav>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Move the Sliders.{" "}
          <span className="text-pink-500">Watch the Rankings Shift.</span>
        </h1>
        <p className="text-muted-foreground text-xl font-light">
          Drag a slider. The rankings move with you.
        </p>
      </header>

      {/* Controls */}
      <div className="bg-card border border-border rounded-xl p-6 sm:p-8 mb-8 sticky top-3 z-10 shadow-lg">
        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Recalculating live
        </div>

        {/* Sliders */}
        <div className="space-y-4">
          {/* Budget */}
          <div className="grid grid-cols-[100px_1fr_80px] sm:grid-cols-[140px_1fr_100px] gap-4 items-center">
            <span className="text-base font-semibold">Max Budget</span>
            <input
              type="range"
              min={3}
              max={20}
              step={0.5}
              value={budget}
              onChange={(e) => setBudget(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:shadow-md"
            />
            <span className="text-base font-mono text-muted-foreground text-right">
              ${budget % 1 === 0 ? budget : budget.toFixed(1)}/mo
            </span>
          </div>

          {/* Images */}
          <div className="grid grid-cols-[100px_1fr_80px] sm:grid-cols-[140px_1fr_100px] gap-4 items-center">
            <span className="text-base font-semibold">Images</span>
            <input
              type="range"
              min={0}
              max={3}
              step={1}
              value={wImages}
              onChange={(e) => setWImages(parseInt(e.target.value))}
              className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:shadow-md"
            />
            <span className="text-base text-muted-foreground text-right">{LABELS[wImages]}</span>
          </div>

          {/* Voice */}
          <div className="grid grid-cols-[100px_1fr_80px] sm:grid-cols-[140px_1fr_100px] gap-4 items-center">
            <span className="text-base font-semibold">Voice</span>
            <input
              type="range"
              min={0}
              max={3}
              step={1}
              value={wVoice}
              onChange={(e) => setWVoice(parseInt(e.target.value))}
              className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:shadow-md"
            />
            <span className="text-base text-muted-foreground text-right">{LABELS[wVoice]}</span>
          </div>

          {/* Video */}
          <div className="grid grid-cols-[100px_1fr_80px] sm:grid-cols-[140px_1fr_100px] gap-4 items-center">
            <span className="text-base font-semibold">Video</span>
            <input
              type="range"
              min={0}
              max={3}
              step={1}
              value={wVideo}
              onChange={(e) => setWVideo(parseInt(e.target.value))}
              className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:shadow-md"
            />
            <span className="text-base text-muted-foreground text-right">{LABELS[wVideo]}</span>
          </div>

          {/* Memory */}
          <div className="grid grid-cols-[100px_1fr_80px] sm:grid-cols-[140px_1fr_100px] gap-4 items-center">
            <span className="text-base font-semibold">Memory</span>
            <input
              type="range"
              min={0}
              max={3}
              step={1}
              value={wMemory}
              onChange={(e) => setWMemory(parseInt(e.target.value))}
              className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:shadow-md"
            />
            <span className="text-base text-muted-foreground text-right">{LABELS[wMemory]}</span>
          </div>
        </div>

        {/* Toggles */}
        <div className="flex gap-2 flex-wrap mt-5 pt-5 border-t border-border">
          <button
            onClick={() => toggleOption("noTokens")}
            className={`text-sm font-medium px-5 py-2 rounded-full border transition-all ${
              toggles.noTokens
                ? "bg-foreground text-amber-400 border-foreground"
                : "bg-card text-muted-foreground border-border hover:border-muted-foreground"
            }`}
          >
            No tokens / flat rate
          </button>
          <button
            onClick={() => toggleOption("liveRoom")}
            className={`text-sm font-medium px-5 py-2 rounded-full border transition-all ${
              toggles.liveRoom
                ? "bg-foreground text-amber-400 border-foreground"
                : "bg-card text-muted-foreground border-border hover:border-muted-foreground"
            }`}
          >
            Live video calls
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Your Rankings</span>
          <span className="text-sm font-mono text-muted-foreground">
            {visibleCount} platform{visibleCount !== 1 ? "s" : ""} matched
          </span>
        </div>

        <div className="space-y-3">
          {scored.map((p, i) => {
            const isBest = i === 0 && !p.dimmed;
            const barPct = Math.round((p.score / maxScore) * 100);

            return (
              <div
                key={p.id}
                className={`bg-card border rounded-xl p-5 grid grid-cols-[40px_1fr] sm:grid-cols-[44px_1fr_100px_140px] gap-4 items-center transition-all relative overflow-hidden ${
                  isBest ? "border-amber-400 shadow-[0_0_0_1px_#FFC400]" : "border-border"
                } ${p.dimmed ? "opacity-35 scale-[0.98] grayscale-[0.3]" : ""}`}
              >
                {isBest && (
                  <span className="absolute top-0 right-0 text-[10px] font-bold tracking-wide bg-amber-400 text-foreground px-3 py-1 rounded-bl-lg">
                    BEST MATCH
                  </span>
                )}

                {/* Logo */}
                <div className="w-11 h-11 rounded-lg overflow-hidden bg-muted flex items-center justify-center shrink-0 border border-border/50">
                  {p.logo ? (
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=64`}
                      alt={p.name}
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  )}
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">{p.name}</span>
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                      i === 0
                        ? "bg-amber-400 text-foreground"
                        : i === 1
                        ? "bg-foreground text-amber-400"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      #{i + 1}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground font-light mt-0.5">{p.meta}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.tags.map((tag, ti) => (
                      <TagBadge key={tag} text={tag} type={p.tagTypes[ti]} />
                    ))}
                  </div>
                </div>

                {/* Score - hidden on mobile */}
                <div className="hidden sm:block text-center">
                  <div className={`font-mono text-2xl font-bold ${barPct > 80 ? "text-amber-500" : ""}`}>
                    {Math.round(p.score)}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-0.5">Match</div>
                  <div className="h-1 bg-border rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${isBest ? "bg-amber-400" : "bg-foreground"}`}
                      style={{ width: `${barPct}%` }}
                    />
                  </div>
                </div>

                {/* CTA - desktop */}
                <div className="hidden sm:block text-center">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`inline-flex items-center gap-1 text-base font-semibold px-6 py-2.5 rounded-full transition-all ${
                      isBest
                        ? "bg-foreground text-amber-400 hover:opacity-90"
                        : "border border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {isBest ? "Best Match →" : "Try Free →"}
                  </a>
                  <div className="font-mono text-sm text-muted-foreground mt-2">
                    ${p.price.toFixed(2)}/mo yr
                  </div>
                </div>

                {/* CTA - mobile */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`sm:hidden col-span-full mt-2 inline-flex items-center justify-center gap-1 text-sm font-semibold px-5 py-2.5 rounded-full transition-all ${
                    isBest
                      ? "bg-foreground text-amber-400 hover:opacity-90"
                      : "border border-border text-foreground hover:border-foreground"
                  }`}
                >
                  {isBest ? "Best Match →" : "Try Free →"} · ${p.price.toFixed(2)}/mo
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          Rankings powered by{" "}
          <Link href="/how-we-test" className="hover:text-foreground transition-colors">
            Value Index™
          </Link>{" "}
          · Data from pricing pages · Updated April 2026 · Affiliate links
        </p>
      </footer>
    </div>
  );
}
