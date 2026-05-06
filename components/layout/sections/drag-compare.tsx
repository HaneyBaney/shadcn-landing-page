"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Minus,
  Crown,
  Check,
  X,
  Coins,
  SlidersHorizontal,
  MessageCircle,
  Video,
  Mic,
  Brain,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Star,
  HelpCircle,
  ImageIcon,
  EyeOff,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPlatform } from "@/lib/platforms";
import { VALUE_INDEX_FROM_ENGINE as VALUE_INDEX, PLATFORMS_TESTED } from "@/data/value-index-adapter";
import {
  LAST_UPDATED,
  NEXT_UPDATE,
  calculatePersonalized,
  VS_MATCHUPS,
  FEATURE_CHIPS,
  type ScoredEntry,
  type Feature,
} from "@/data/value-index";

/* ── Score circle (SVG ring) ── */
function ScoreCircle({ score, size = "lg" }: { score: number; size?: "lg" | "sm" }) {
  const color = score >= 75 ? "stroke-green-600 dark:stroke-emerald-500/40" : score >= 60 ? "stroke-amber-600 dark:stroke-amber-500/40" : "stroke-orange-600 dark:stroke-orange-500/40";
  const textColor = score >= 75 ? "text-green-700 dark:text-emerald-400/60" : score >= 60 ? "text-amber-700 dark:text-amber-400/60" : "text-orange-700 dark:text-orange-400/60";
  const r = size === "lg" ? 34 : 20;
  const sw = size === "lg" ? 4 : 3;
  const circ = 2 * Math.PI * r;
  const dim = (r + sw) * 2;
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      <svg width={dim} height={dim} className="-rotate-90">
        <circle cx={r + sw} cy={r + sw} r={r} fill="none" stroke="currentColor" strokeWidth={sw} className="text-muted/20" />
        <circle cx={r + sw} cy={r + sw} r={r} fill="none" strokeWidth={sw} strokeLinecap="round"
          className={color} strokeDasharray={`${circ}`} strokeDashoffset={`${circ * (1 - score / 100)}`}
          style={{ transition: "stroke-dashoffset 0.8s ease" }} />
      </svg>
      <span className={`absolute ${textColor} ${size === "lg" ? "text-2xl" : "text-sm"} font-black font-mono tabular-nums`}>{score}</span>
    </div>
  );
}

/* ── Value Index Explainer — Open Source Methodology View ── */
function ValueIndexExplainer() {
  const [activeTab, setActiveTab] = useState<"formula" | "readme">("formula");

  return (
    <div className="mt-16 space-y-6">
      {/* ── Header ── */}
      <div className="text-center mb-2">
        <p className="text-xs font-bold font-mono uppercase tracking-wider text-primary/60 mb-2">View source</p>
        <h3 className="text-2xl md:text-3xl font-bold font-mono">Open Source Methodology</h3>
      </div>

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
        <div className="bg-[#1e1e1e] min-h-[360px]">

          {activeTab === "formula" && (
            <div className="flex">
              {/* Line numbers */}
              <div className="select-none py-5 pl-5 pr-4 text-right font-mono text-sm md:text-base leading-[1.85] text-white/10 border-r border-white/[0.04] shrink-0">
                {Array.from({ length: 25 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              {/* Code */}
              <div className="py-5 px-5 md:px-6 overflow-x-auto flex-1">
                <pre className="font-mono text-sm md:text-base leading-[1.85]">
                  <code>
{/* Line 1-3: Module comment */}
<span className="text-[#6a9955]">{"/**\n * Value Index™ — open methodology\n * Inspired by the UN Human Development Index (HDI)\n *\n * The HDI uses a geometric mean to combine life expectancy,\n * education, and income. We apply the same principle:\n * a platform can't compensate for a weak dimension.\n *\n * Sources:\n *   [1] hdr.undp.org — UNDP Human Development Index\n *   [2] OECD Handbook on Composite Indicators (2008)\n *   [3] Springer Social Indicators Research (2024)\n */"}</span>
{"\n\n"}
<span className="text-[#569cd6]">{"type "}</span>
<span className="text-[#4ec9b0]">{"Feature"}</span>
<span className="text-[#d4d4d4]">{" = "}</span>
<span className="text-[#ce9178]">{`"chat" | "images" | "voice" | "video" | "memory"`}</span>
<span className="text-[#d4d4d4]">{";\n\n"}</span>
<span className="text-[#569cd6]">{"function "}</span>
<span className="text-[#dcdcaa]">{"computeValueIndex"}</span>
<span className="text-[#d4d4d4]">{"(platform: "}</span>
<span className="text-[#4ec9b0]">{"Platform"}</span>
<span className="text-[#d4d4d4]">{") {\n"}</span>
<span className="text-[#6a9955]">{"  // Step 1: What's included before credits kick in\n"}</span>
<span className="text-[#569cd6]">{"  const "}</span>
<span className="text-[#9cdcfe]">{"coverage"}</span>
<span className="text-[#d4d4d4]">{" = "}</span>
<span className="text-[#dcdcaa]">{"scoreFeatures"}</span>
<span className="text-[#d4d4d4]">{"(platform.chat, platform.images,\n                       platform.voice, platform.video,\n                       platform.memory);\n\n"}</span>
<span className="text-[#6a9955]">{"  // Step 2: How close to the cheapest plan we tested\n"}</span>
<span className="text-[#569cd6]">{"  const "}</span>
<span className="text-[#9cdcfe]">{"priceEfficiency"}</span>
<span className="text-[#d4d4d4]">{" = (cheapestPlan / platform.price) * "}</span>
<span className="text-[#b5cea8]">{"100"}</span>
<span className="text-[#d4d4d4]">{";\n\n"}</span>
<span className="text-[#6a9955]">{"  // Step 3: Geometric mean — punishes imbalance\n"}</span>
<span className="text-[#6a9955]">{"  // Score 90 on features + 10 on price ≠ 50. It's 30.\n"}</span>
<span className="text-[#569cd6]">{"  return "}</span>
<span className="text-[#d4d4d4]">{"Math."}</span>
<span className="text-[#dcdcaa]">{"sqrt"}</span>
<span className="text-[#d4d4d4]">{"(coverage * priceEfficiency);\n}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === "readme" && (
            <div className="p-6 md:p-8 max-w-3xl">
              <div className="space-y-6 font-mono text-base leading-relaxed text-[#cccccc]">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3"># Why geometric mean?</h4>
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
                    life expectancy with high GDP. We apply the same logic: a platform
                    can&apos;t compensate for bad pricing with good features.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-2">## What we measure</h4>
                  <div className="text-[#9d9d9d] space-y-1">
                    <p><strong className="text-[#cccccc]">Coverage</strong> — chat, image generation, voice, video, memory.
                      What&apos;s actually included on the cheapest paid plan, before credits or add-ons.</p>
                    <p><strong className="text-[#cccccc]">Price efficiency</strong> — how close is this plan to the cheapest
                      option we&apos;ve tested? The cheapest scores 100.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-2">## Current Rankings (March 2026)</h4>
                  <div className="text-[#9d9d9d] space-y-1 text-sm font-mono">
                    <p><span className="text-[#f97583]">#1</span> AiAllure — 84 (3 unlimited · 2 capped · 1 credits)</p>
                    <p><span className="text-[#f97583]">#2</span> Secrets AI — 78 (1 unlimited · 1 capped · 3 credits)</p>
                    <p><span className="text-[#f97583]">#3</span> OurDream AI — 77 (1 unlimited · 4 capped · 0 credits)</p>
                    <p><span className="text-[#f97583]">#4</span> Nectar AI — 64 (0 unlimited · 5 capped · 1 credits)</p>
                    <p><span className="text-[#f97583]">#5</span> GPTGirlfriend — 60 (0 unlimited · 3 capped · 2 credits)</p>
                    <p><span className="text-[#f97583]">#6</span> Candy AI — 56 (1 unlimited · 1 capped · 3 credits)</p>
                    <p><span className="text-[#f97583]">#7</span> MyDreamCompanion — 51 (0 unlimited · 2 capped · 3 credits)</p>
                    <p><span className="text-[#f97583]">#8</span> LoveScape — 50 (1 unlimited · 1 capped · 2 credits)</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-2">## Sources</h4>
                  <div className="text-[#9d9d9d] space-y-1 text-sm">
                    <p><a href="https://hdr.undp.org/data-center/human-development-index" target="_blank" rel="noopener noreferrer" className="text-[#569cd6] hover:underline">[1] UNDP Human Development Index — geometric mean of normalized indices</a></p>
                    <p><a href="https://www.oecd.org/en/publications/handbook-on-constructing-composite-indicators-methodology-and-user-guide_9789264043466-en.html" target="_blank" rel="noopener noreferrer" className="text-[#569cd6] hover:underline">[2] OECD Handbook on Constructing Composite Indicators (2008)</a></p>
                    <p><a href="https://link.springer.com/article/10.1007/s11205-024-03318-7" target="_blank" rel="noopener noreferrer" className="text-[#569cd6] hover:underline">[3] Aggregating the HDI: geometric mean penalizes imbalance (Springer, 2024)</a></p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.06] text-xs text-[#555555]">
                  <p>Last updated: {LAST_UPDATED} · Next update: {NEXT_UPDATE} · {PLATFORMS_TESTED} platforms tested</p>
                  <p>Data sourced exclusively from public pricing pages.</p>
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

      {/* ── Promo video ── */}
      <div className="relative max-w-2xl mx-auto mt-4">
        <div className="absolute top-2 lg:-top-6 left-1/2 -translate-x-1/2 w-[90%] h-24 lg:h-40 bg-primary/40 rounded-full blur-3xl" />
        <div className="relative overflow-hidden rounded-lg border border-t-2 border-secondary border-t-primary/30">
          <video
            playsInline
            controls
            className="w-full block"
            style={{ marginBottom: "-30px" }}
            src="/videos/kling_20260321_作品_Camera_sta_123_0.mp4"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg" />
      </div>
    </div>
  );
}

/* ── Movement arrow ── */
function RankDelta({ rank, prev }: { rank: number; prev: number }) {
  if (prev > rank) return <span className="flex items-center gap-0.5 text-sm font-bold text-green-400"><ArrowUp className="size-4" /></span>;
  if (prev < rank) return <span className="flex items-center gap-0.5 text-sm font-bold text-red-400"><ArrowDown className="size-4" /></span>;
  return <span className="flex items-center text-muted-foreground/25"><Minus className="size-4" /></span>;
}

/* ── Feature score bar ── */
function FeatureBar({ entry }: { entry: ScoredEntry }) {
  const pct = Math.round(entry.featureScore);
  const counts = { unlimited: 0, limited: 0, coins: 0, none: 0 };
  entry.features.forEach((f) => counts[f.access]++);
  const parts: string[] = [];
  if (counts.unlimited > 0) parts.push(`${counts.unlimited} unlimited`);
  if (counts.limited > 0) parts.push(`${counts.limited} capped`);
  if (counts.coins > 0) parts.push(`${counts.coins} coins`);
  if (counts.none > 0) parts.push(`${counts.none} locked`);
  const barColor = pct >= 80 ? "from-green-500 to-green-400 dark:from-emerald-500/30 dark:to-emerald-400/30" : pct >= 65 ? "from-amber-500 to-amber-400 dark:from-amber-500/30 dark:to-amber-400/30" : "from-orange-500 to-orange-400 dark:from-orange-500/30 dark:to-orange-400/30";
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold font-mono">Features: <span className="tabular-nums">{pct}/100</span></span>
        <span className="text-xs text-muted-foreground font-mono">{parts.join(" · ")}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted/30 overflow-hidden">
        <div className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
          style={{ width: `${pct}%`, transition: "width 0.8s ease" }} />
      </div>
    </div>
  );
}

/* ── Per-platform card content (human-readable, no jargon) ── */
const CARD_CONTENT: Record<string, {
  verdict: string;
  priceNote: string;
  bestFor: string[];
  notIdealFor: string[];
}> = {
  "gptgirlfriend": {
    verdict: "Best for deep, realistic chats — not for heavy image/video",
    priceNote: "Includes 400 credits (~60 images)",
    bestFor: ["Long roleplay", "Memory-driven convos", "Lower price"],
    notIdealFor: ["Tons of images", "Frequent video"],
  },
  "candy-ai": {
    verdict: "Cheapest entry — but media always costs extra",
    priceNote: "Includes 100 tokens + unlimited chat",
    bestFor: ["Saving money", "Chatting a lot", "Trying AI GF cheap"],
    notIdealFor: ["If you want images or voice included", "If you need video often"],
  },
  "mydreamcompanion": {
    verdict: "Low entry price, high real cost — coins run out fast",
    priceNote: "$11.99/mo ($5.84/yr annual) - 100 Dream Coins = ~20 images OR 5 videos OR ~35 voice playbacks",
    bestFor: ["Budget-conscious users", "Light chat use", "Users who mainly want texting"],
    notIdealFor: ["Heavy image generation", "Frequent video usage", "Voice-heavy use"],
  },
  "aiallure": {
    verdict: "Unlimited chat, images, voice; short clips included. Best visuals.",
    priceNote: "Unlimited images + voice, short videos included (~3 clips/batch). Long videos (10-120 sec) cost AllureCoins.",
    bestFor: ["Images", "Voice messages", "Best-looking AI characters"],
    notIdealFor: ["If you're on a tight budget", "Users wanting unlimited long videos"],
  },
  "ourdream-ai": {
    verdict: "Chat, images, voice, and video all in one plan — go over the monthly cap and it costs dreamcoins",
    priceNote: "1,000 dreamcoins/mo included for images, voice, video",
    bestFor: ["One plan for everything", "No separate coin purchases for basic use"],
    notIdealFor: ["If you go over the cap often", "If you want the cheapest price"],
  },
  "secrets-ai": {
    verdict: "Only chat is unlimited — ALL media (images, video, voice) costs moments",
    priceNote: "8,000 moments/mo ≈ 160 images OR ~16 videos OR 80 min voice",
    bestFor: ["Chat-first users", "Memory-focused interactions", "Not for media-heavy use"],
    notIdealFor: ["Heavy media users", "Users wanting included media", "Budget-conscious users"],
  },
  "lovescape": {
    verdict: "Unlimited chat + characters. 600 chips/mo for images, video, voice.",
    priceNote: "$19.99/mo ($7.80/mo annual) — 600 chips/mo for media",
    bestFor: ["Scenario roleplay", "Character creation", "NSFW content"],
    notIdealFor: ["Heavy media users", "Users wanting unlimited media"],
  },
  "nectar-ai": {
    verdict: "Daily-limited images + capped messaging — credits unlock advanced features",
    priceNote: "$9.99/mo — 100 generations/day, 6000 messages/month, capped voice + credits for advanced features",
    bestFor: ["Users who prefer structured usage", "Scenario builders", "Daily-limit users"],
    notIdealFor: ["Heavy media users", "Users expecting unlimited usage", "Frequent video generation"],
  },
};

/* ── Google Trends search interest (6-month, 0–100 scale) ── */
/* Update monthly from https://trends.google.com — last updated March 2026 */
const TREND_DATA: Record<string, { points: number[]; change: number }> = {
  "ourdream-ai": { points: [22, 28, 35, 48, 62, 74], change: +236 },
  "gptgirlfriend":  { points: [70, 65, 60, 58, 55, 52], change: -26 },
  "candy-ai":       { points: [55, 58, 62, 60, 65, 68], change: +24 },
  "aiallure":       { points: [12, 18, 25, 34, 45, 58], change: +383 },
  "mydreamcompanion": { points: [8, 12, 18, 22, 28, 35], change: +338 },
  "fantasygf":      { points: [40, 38, 42, 40, 38, 36], change: -10 },
  "lovescape": { points: [15, 14, 16, 18, 20, 22], change: +47 },
  "spicychat-ai":   { points: [50, 52, 48, 45, 42, 40], change: -20 },
  "nectar-ai":      { points: [20, 22, 25, 24, 26, 28], change: +40 },
  "secrets-ai":    { points: [10, 18, 28, 40, 55, 72], change: +620 },
};

function TrendSparkline({ id }: { id: string }) {
  const data = TREND_DATA[id];
  if (!data) return null;
  const pts = data.points;
  const max = Math.max(...pts, 1);
  const h = 40, w = 120;
  const coords = pts.map((v, i) => `${(i / (pts.length - 1)) * w},${h - (v / max) * (h - 4)}`).join(" ");
  const fillCoords = `0,${h} ${coords} ${w},${h}`;
  const rising = data.change > 0;
  const color = rising ? "#10b981" : "#f59e0b";
  const fillColor = rising ? "#10b98120" : "#f59e0b15";
  return (
    <div className="flex items-center gap-4">
      <svg width={w} height={h} className="shrink-0" aria-hidden>
        <polygon fill={fillColor} points={fillCoords} />
        <polyline fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={coords} />
        <circle cx={(pts.length - 1) / (pts.length - 1) * w} cy={h - (pts[pts.length - 1] / max) * (h - 4)} r="3.5" fill={color} />
      </svg>
      <div className="flex flex-col">
        <span className={`text-sm font-bold font-mono tabular-nums ${rising ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}>
          {rising ? "+" : ""}{data.change}%
        </span>
        <span className="text-xs text-foreground/50 font-mono">6-month trend</span>
      </div>
    </div>
  );
}

/* ── Human-readable feature label ── */
function featureHumanLabel(f: Feature): string {
  if (!f.detail || f.detail === "included") return f.label;
  return `${f.label} — ${f.detail}`;
}

/* ── Platform card ── */
function PlatformCard({ entry, rank }: { entry: ScoredEntry; rank: number }) {
  const platform = getPlatform(entry.id);
  if (!platform) return null;
  const isWinner = rank === 1;
  const content = CARD_CONTENT[entry.id];
  const included = entry.features.filter((f) => f.access === "unlimited");
  const limited = entry.features.filter((f) => f.access === "limited");
  const credits = entry.features.filter((f) => f.access === "coins");
  const HIGHLIGHTS_OVERRIDES: Record<string, string[]> = { aiallure: ["Live Rooms", "Voice Calls", "Unlimited Images"] };
  const highlights = (HIGHLIGHTS_OVERRIDES[entry.id] ?? (content?.bestFor || [])).slice(0, 3);

  return (
    <div className={[
      "relative rounded-2xl border p-6 md:p-8 transition-all duration-200 md:hover:scale-[1.01] md:hover:shadow-xl md:hover:z-10",
      isWinner
        ? "border-primary/30 bg-gradient-to-b from-primary/[0.04] to-card shadow-lg shadow-primary/5 md:hover:shadow-primary/10"
        : "border-border dark:border-white/[0.08] bg-card md:hover:border-primary/30 md:hover:shadow-lg",
    ].join(" ")}>
      {isWinner && (
        <div className="absolute -top-4 left-6 flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-sm font-bold font-mono text-primary-foreground shadow-md">
          <Crown className="size-4" /> #1 Best Value
        </div>
      )}

      {/* ── Top: Left conversion funnel + Right highlights ── */}
      <div className="grid gap-6 sm:grid-cols-[1fr_300px] sm:gap-8">
        {/* Left: Identity + Verdict + Price + CTAs */}
        <div className="min-w-0 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            {!isWinner && <span className="text-3xl font-black font-mono tabular-nums text-muted-foreground/15">{rank}</span>}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <ScoreCircle score={entry.score} />
              <span className="text-[10px] font-bold font-mono uppercase tracking-[0.15em] text-foreground/40 inline-flex items-center gap-1 cursor-help" title="Value Index — what you can do before paying extra, per dollar. Only subscription-included features count.">
                Value Index <HelpCircle className="size-3" />
              </span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={platform.logo ?? `https://www.google.com/s2/favicons?domain=${platform.domain}&sz=64`} alt={`${platform.name} logo`} className={`rounded-lg shadow-sm ${isWinner ? "size-10" : "size-8"} object-contain`} />
            <h3 className="font-mono font-black text-2xl md:text-4xl tracking-tight break-words">{platform.name}</h3>
            <RankDelta rank={entry.rank} prev={entry.prevRank} />
          </div>
          {content && (
            <p className="text-base text-foreground/60 leading-relaxed max-w-xl font-mono">{content.verdict}</p>
          )}
          <div>
            <span className="font-black font-mono text-4xl md:text-5xl leading-none">
              <span className="tabular-nums">${entry.subPrice.toFixed(2)}</span><span className="ml-1 align-top text-sm font-semibold text-muted-foreground">/mo</span>
            </span>
            {content && <p className="text-sm text-foreground/50 mt-0.5 font-mono">{content.priceNote}</p>}
          </div>
          <div className="flex flex-col gap-2.5 max-w-xs">
            <Button asChild size="lg" className="w-full font-bold font-mono h-12 text-base">
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                Get {platform.name} <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            {entry.subYearly && entry.subYearly < entry.subMonthly && (
              <a href={platform.url} target="_blank" rel="noopener noreferrer"
                className="flex w-full items-center justify-between rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/30 px-4 py-3 transition-all hover:bg-emerald-100 dark:hover:bg-emerald-950/50 hover:border-emerald-300 dark:hover:border-emerald-700/40">
                <div className="flex flex-col">
                  <span className="text-sm font-bold font-mono text-emerald-900 dark:text-emerald-300">Yearly Plan</span>
                  <span className="text-base font-black font-mono tabular-nums text-emerald-800 dark:text-emerald-200">${entry.subYearly.toFixed(2)}<span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">/mo</span></span>
                </div>
                <span className="rounded-full bg-emerald-600 dark:bg-emerald-500 px-3 py-1 text-xs font-extrabold font-mono text-white tracking-wide">SAVE {Math.round((1 - entry.subYearly / entry.subMonthly) * 100)}%</span>
              </a>
            )}
          </div>
        </div>

        {/* Right: Highlights card filling blank space */}
        {highlights.length > 0 && (
          <div className="rounded-xl border border-border/40 dark:border-white/[0.08] bg-muted/20 dark:bg-white/[0.03] p-6 flex flex-col">
            <p className="text-sm font-extrabold font-mono uppercase tracking-[0.1em] text-primary mb-5">✦ Highlights</p>
            <ul className="space-y-4 flex-1">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-[15px] font-semibold font-mono text-foreground/90">
                  <span className="size-2 rounded-full bg-primary/70 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            {content && (
              <div className="mt-5 pt-5 border-t border-border/30 dark:border-white/[0.05]">
                <p className="text-xs font-bold font-mono uppercase tracking-[0.12em] text-foreground/50 mb-2">Best for</p>
                <p className="text-[15px] text-foreground/70 leading-relaxed font-mono">{content.bestFor.join(" · ")}</p>
              </div>
            )}
            {TREND_DATA[entry.id] && (
              <div className="mt-5 pt-5 border-t border-border/30 dark:border-white/[0.05]">
                <p className="text-xs font-bold font-mono uppercase tracking-[0.12em] text-foreground/50 mb-3">Search Interest</p>
                <TrendSparkline id={entry.id} />
                <a href={`https://trends.google.com/trends/explore?q=${encodeURIComponent(platform.name)}`} target="_blank" rel="noopener noreferrer" className="text-[10px] text-foreground/30 hover:text-foreground/50 transition-colors mt-2 inline-block">
                  via Google Trends ↗
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Row 2: Feature bar ── */}
      <div className="mt-6">
        <FeatureBar entry={entry} />
      </div>

      {/* ── Row 3: Included / Limited / Credits ── */}
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {included.length > 0 && (
          <div className="rounded-xl bg-green-50 border border-green-200 p-4 dark:bg-emerald-950/20 dark:border-emerald-800/25">
            <p className="text-base font-extrabold font-mono text-green-800 dark:text-emerald-300 mb-2">Included</p>
            <ul className="space-y-2">
              {included.map((f) => (
                <li key={f.key} className="flex items-center gap-2 text-[15px] font-medium font-mono text-green-900 dark:text-emerald-300/70">
                  <Check className="size-3.5 shrink-0" /> {f.label}
                </li>
              ))}
            </ul>
          </div>
        )}
        {limited.length > 0 && (
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 dark:bg-amber-950/20 dark:border-amber-800/25">
            <p className="text-base font-extrabold font-mono text-amber-800 dark:text-amber-300 mb-1">Included with cap</p>
            {(credits.length > 0 || entry.freeCoins) && (
              <p className="text-xs text-amber-700/90 dark:text-amber-400/50 mb-1 font-mono">Over cap → uses credits</p>
            )}
            <ul className="space-y-2">
              {limited.map((f) => (
                <li key={f.key} className="flex items-center gap-2 text-[15px] font-medium font-mono text-amber-900 dark:text-amber-300/70">
                  <Minus className="size-3.5 shrink-0" /> {featureHumanLabel(f)}
                </li>
              ))}
            </ul>
          </div>
        )}
        {credits.length > 0 && (
          <div className="rounded-xl bg-orange-50 border border-orange-200 p-4 dark:bg-orange-950/20 dark:border-orange-800/25">
            <p className="text-base font-extrabold font-mono text-orange-800 dark:text-orange-300 mb-2">Costs credits</p>
            <ul className="space-y-2">
              {credits.map((f) => (
                <li key={f.key} className="flex items-center gap-2 text-[15px] font-medium font-mono text-orange-900 dark:text-orange-300/70">
                  <Coins className="size-3.5 shrink-0" /> {featureHumanLabel(f)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ── Row 4: Not ideal for ── */}
      {content && (
        <div className="mt-4">
          <div className="flex items-start gap-2 text-[15px]">
            <X className="size-4 mt-0.5 text-muted-foreground/40 shrink-0" />
            <span>
              <strong className="text-foreground/70 font-mono">Not ideal for:</strong>{" "}
              <span className="text-muted-foreground font-mono">{content.notIdealFor.join(" · ")}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Calculator slider ── */
const SLIDER_HINTS: Record<string, string> = {
  chat: "Messaging & roleplay",
  images: "AI image generation",
  video: "AI video clips",
  voice: "Voice calls & messages",
  memory: "Remembers past conversations",
};

function CalcSlider({ id, label, hint, icon, value, onChange }: { id: string; label: string; hint: string; icon: React.ReactNode; value: number; onChange: (v: number) => void }) {
  const intensityLabel = value === 0 ? "Don't care" : value <= 3 ? "Low" : value <= 6 ? "Medium" : value <= 9 ? "High" : "Must have";
  const intensityColor = value === 0 ? "text-muted-foreground/40" : value <= 3 ? "text-muted-foreground" : value <= 6 ? "text-amber-500" : "text-primary";
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold font-mono">{icon} {label}</div>
        <span className={`text-xs font-bold font-mono ${intensityColor}`}>{intensityLabel}</span>
      </div>
      <p className="text-[11px] text-muted-foreground/60 -mt-0.5 font-mono">{hint}</p>
      <div className="flex items-center gap-3">
        <input type="range" min={0} max={10} step={1} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary" />
        <span className="w-6 text-right text-sm font-black font-mono tabular-nums">{value}</span>
      </div>
    </div>
  );
}

/* ── Why #1 explanation ── */
function WhyTopPick({ entry }: { entry: ScoredEntry }) {
  const included = entry.features.filter((f) => f.access === "unlimited" || f.access === "limited");
  const coins = entry.features.filter((f) => f.access === "coins");
  const parts: string[] = [];
  if (included.length > 0) parts.push(`${included.length} features included`);
  if (coins.length > 0) parts.push(`${coins.length} need credits`);
  parts.push(`$${entry.subPrice.toFixed(2)}/mo`);
  if (entry.subYearly && entry.subYearly < entry.subMonthly)
    parts.push(`$${entry.subYearly.toFixed(2)}/mo yearly`);
  return (
    <p className="text-xs text-muted-foreground mt-1">
      <span className="font-semibold text-primary">Why #1:</span> {parts.join(" · ")}
    </p>
  );
}

/* ── Calculator ── */
function ValueCalculator() {
  const [budget, setBudget] = useState(20);
  const [chat, setChat] = useState(7);
  const [images, setImages] = useState(5);
  const [video, setVideo] = useState(5);
  const [voice, setVoice] = useState(5);
  const [memory, setMemory] = useState(5);
  const [open, setOpen] = useState(true);
  const [hideOverBudget, setHideOverBudget] = useState(false);
  const results = calculatePersonalized({ budget, chat, images, video, voice, memory });
  const filtered = hideOverBudget ? results.filter((e) => e.subMonthly <= budget) : results;

  return (
    <div className="mt-10 rounded-2xl border-2 border-primary/20 bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-primary/5 transition-colors">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10">
            <SlidersHorizontal className="size-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-mono">Find Your Best Match</h3>
            <p className="text-sm text-muted-foreground font-mono">Tell us what matters — we re-rank based on included features only</p>
          </div>
        </div>
        {open ? <ChevronUp className="size-5 text-primary" /> : <ChevronDown className="size-5 text-muted-foreground" />}
      </button>
      {open && (
        <div className="border-t border-primary/10 p-6">
          <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
            {/* Left: Preferences */}
            <div className="space-y-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-3">Your Budget</p>
                <div className="flex items-center gap-3">
                  <DollarSign className="size-4 text-muted-foreground shrink-0" />
                  <input type="range" min={3} max={30} step={1} value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary" />
                  <span className="w-20 text-right text-sm font-black font-mono tabular-nums">${budget}/mo</span>
                </div>
                <p className="text-[11px] text-muted-foreground/60 mt-1 ml-8">Max you want to spend per month</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-3">How important is each feature?</p>
                <p className="text-[11px] text-muted-foreground/50 mb-3">0 = Don&apos;t care · 5 = Nice to have · 10 = Must have included</p>
                <div className="space-y-4">
                  <CalcSlider id="chat" label="Chat" hint={SLIDER_HINTS.chat} icon={<MessageCircle className="size-4" />} value={chat} onChange={setChat} />
                  <CalcSlider id="images" label="Images" hint={SLIDER_HINTS.images} icon={<ImageIcon className="size-4" />} value={images} onChange={setImages} />
                  <CalcSlider id="video" label="Video" hint={SLIDER_HINTS.video} icon={<Video className="size-4" />} value={video} onChange={setVideo} />
                  <CalcSlider id="voice" label="Voice" hint={SLIDER_HINTS.voice} icon={<Mic className="size-4" />} value={voice} onChange={setVoice} />
                  <CalcSlider id="memory" label="Memory" hint={SLIDER_HINTS.memory} icon={<Brain className="size-4" />} value={memory} onChange={setMemory} />
                </div>
              </div>

              <div className="rounded-lg bg-muted/20 px-3 py-2 text-[11px] text-muted-foreground/60">
                <strong className="text-foreground/70">How it works:</strong> <span className="font-mono">We re-rank using your priorities. Only subscription-included features count — coins/credits score 0.</span>
              </div>
            </div>

            {/* Right: Results */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60">Your Ranking</p>
                <button onClick={() => setHideOverBudget(!hideOverBudget)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">
                  {hideOverBudget ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
                  {hideOverBudget ? "Show all" : "Hide over budget"}
                </button>
              </div>
              <div className="space-y-2">
                {filtered.length === 0 && (
                  <p className="text-sm text-muted-foreground py-4 text-center">No platforms match your budget. Try increasing it.</p>
                )}
                {filtered.map((entry, i) => {
                  const p = getPlatform(entry.id);
                  if (!p) return null;
                  const overBudget = entry.subMonthly > budget;
                  const isTop = i === 0;
                  return (
                    <div key={entry.id}
                      className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all ${isTop ? "border-primary/30 bg-primary/5" : "border-border/30"} ${overBudget ? "opacity-30" : ""}`}>
                      <span className={`text-lg font-black font-mono tabular-nums w-6 shrink-0 ${isTop ? "text-primary" : "text-muted-foreground/20"}`}>{i + 1}</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.logo ?? `https://www.google.com/s2/favicons?domain=${p.domain}&sz=32`} alt={`${p.name} logo`} className="size-6 rounded shrink-0 object-contain" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold font-mono truncate">{p.name}</p>
                        <p className="text-xs text-muted-foreground">
                          <span className="font-mono tabular-nums">${entry.subPrice.toFixed(2)}/mo</span>
                          {overBudget && <span className="ml-2 text-red-400 font-semibold">Over budget</span>}
                          {!overBudget && entry.subYearly && entry.subYearly < entry.subMonthly && (
                            <span className="ml-2 text-green-600 dark:text-green-400 font-semibold">${entry.subYearly.toFixed(2)}/mo yearly</span>
                          )}
                        </p>
                        {isTop && !overBudget && <WhyTopPick entry={entry} />}
                      </div>
                      <ScoreCircle score={entry.score} size="sm" />
                      {isTop && !overBudget && (
                        <Button asChild size="sm" className="font-bold shrink-0">
                          <a href={p.url} target="_blank" rel="noopener noreferrer">Go <ArrowRight className="ml-1 size-3.5" /></a>
                        </Button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Main section ── */
export function DragCompareSection() {
  return (
    <section id="platforms" className="container py-16 md:py-24 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">

      {/* ── Header ── */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold font-mono tracking-tight md:text-5xl">
          AI Girlfriend <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">Value Index</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground font-mono">
          {PLATFORMS_TESTED} platforms scored by what you can do <strong className="text-foreground">before paying extra</strong>, per dollar — included-only features vs. effective monthly price. Geometric mean, same method the UN uses for the Human Development Index. No opinions, just data from pricing pages.
        </p>
        <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green-300 bg-green-100 px-3 py-1.5 text-sm font-semibold font-mono text-green-700 dark:bg-white/[0.03] dark:text-foreground/60 dark:border-white/[0.06]">
            <Check className="size-4" /> Included — before any credits
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3 py-1.5 text-sm font-semibold font-mono text-amber-700 dark:bg-white/[0.03] dark:text-foreground/60 dark:border-white/[0.06]">
            <Minus className="size-4" /> Included with cap
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-300 bg-orange-100 px-3 py-1.5 text-sm font-semibold font-mono text-orange-700 dark:bg-white/[0.03] dark:text-foreground/60 dark:border-white/[0.06]">
            <Coins className="size-4" /> Costs credits
          </span>
        </div>
      </div>

      {/* ── Platform Cards ── */}
      <div className="space-y-6">
        {(VALUE_INDEX ?? []).map((entry, i) => (
          <PlatformCard key={entry.id} entry={entry} rank={i + 1} />
        ))}
      </div>


      {/* ── VS Listicles ── */}
      <div className="mt-12 space-y-5">
        {VS_MATCHUPS.map((card) => {
          const pA = getPlatform(card.a);
          const pB = getPlatform(card.b);
          if (!pA || !pB) return null;
          return (
            <Link key={card.slug} href={`/compare/${card.slug}`}
              className="group block rounded-2xl border border-border bg-card p-5 md:p-6 transition-all hover:border-primary/30 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pA.logo ?? `https://www.google.com/s2/favicons?domain=${pA.domain}&sz=32`} alt={`${pA.name} logo`} className="size-7 rounded-full border-2 border-card object-contain bg-background" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={pB.logo ?? `https://www.google.com/s2/favicons?domain=${pB.domain}&sz=32`} alt={`${pB.name} logo`} className="size-7 rounded-full border-2 border-card object-contain bg-background" />
                </div>
                <h4 className="text-base md:text-lg font-bold font-mono text-foreground group-hover:text-primary transition-colors">{card.title}</h4>
              </div>
              <ul className="space-y-2.5 mb-4">
                {card.points.map((point, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-foreground/70 leading-relaxed font-mono">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary/40" />
                    {point}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center text-sm font-bold font-mono text-primary group-hover:gap-2 transition-all">
                Read the full comparison <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>

      {/* ── Feature Chips ── */}
      <div className="mt-8">
        <p className="mb-3 text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground/50">Browse by feature</p>
        <div className="flex flex-wrap gap-2">
          {FEATURE_CHIPS.map((chip) => (
            <Link key={chip.href} href={chip.href}
              className="rounded-full border border-border/50 px-3.5 py-1.5 text-sm font-mono text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground">
              {chip.label}
            </Link>
          ))}
        </div>
      </div>

      </div>{/* end max-w-4xl wrapper */}
    </section>
  );
}
