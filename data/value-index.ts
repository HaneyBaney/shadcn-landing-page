export type FeatureAccess = "unlimited" | "limited" | "coins" | "none";

export interface Feature {
  key: string;
  label: string;
  access: FeatureAccess;
  detail?: string;
}

export type NewsType = "new" | "price_drop" | "improvement" | "stable" | "warning";

export interface IndexEntry {
  id: string;
  prevRank: number;
  role: string;
  subMonthly: number;
  subYearly: number | null;
  freeCoins: string | null;
  freeMessages: string | null;
  momentum: number;
  features: Feature[];
  news: string;
  newsType: NewsType;
  checked: string;
  coinNote: string;
}

// Import new system
import { rankedPlatforms } from "./ranked-platforms";
export { rankedPlatforms, currentRankings } from "./ranked-platforms";
export type { PlatformData, RankedPlatform } from "./types";

export const LAST_UPDATED = "March 13, 2026";
export const NEXT_UPDATE = "April 2026";

/* ── Access tier points (used in score + calculator) ── */
const ACCESS_PTS: Record<FeatureAccess, number> = { unlimited: 10, limited: 7, coins: 4, none: 0 };

const RAW: IndexEntry[] = [
  {
    id: "ourdream-ai",
    prevRank: 2,
    role: "Best Overall",
    subMonthly: 19.99,
    subYearly: 9.99,
    freeCoins: "1,000/mo",
    freeMessages: "Unlimited",
    momentum: 60,
    features: [
      { key: "chat", label: "Chat", access: "unlimited" },
      { key: "images", label: "Image Gen", access: "limited", detail: "200/mo" },
      { key: "voice", label: "Voice Calls", access: "limited", detail: "20 min/mo" },
      { key: "video", label: "Video Gen", access: "limited", detail: "10/mo" },
      { key: "characters", label: "Characters", access: "unlimited" },
      { key: "memory", label: "Memory", access: "limited", detail: "basic" },
      { key: "extra-media", label: "Extra images, voice, video", access: "coins", detail: "dreamcoins beyond monthly cap" },
    ],
    news: "Premium $9.99/yr. 1k dreamcoins/mo included. Chat + audio unlimited. Images, voice, video capped from shared coin pool.",
    newsType: "stable",
    checked: "Mar 13, 2026",
    coinNote: "1,000 dreamcoins/mo shared across images (200), voice (20 min), video (10). Deluxe ($29.99/yr) adds 5k coins + 3x memory.",
  },
  {
    id: "secrets-ai",
    prevRank: 0,
    role: "Best Memory",
    subMonthly: 19.99,
    subYearly: 13.33,
    freeCoins: "8,000/mo",
    freeMessages: "20/day",
    momentum: 75,
    features: [
      { key: "chat", label: "Chat", access: "unlimited" },
      { key: "images", label: "Image Gen", access: "coins", detail: "50 moments/img" },
      { key: "video", label: "Video Gen", access: "coins", detail: "480 moments/vid" },
      { key: "voice", label: "Audio Calls", access: "coins", detail: "100 moments/min" },
      { key: "characters", label: "Characters", access: "unlimited" },
      { key: "memory", label: "Memory", access: "unlimited", detail: "enhanced (4x access, +60% context)" },
    ],
    news: "Premium $19.99/mo (or $13.33/mo annual). 8,000 moments/mo, unlimited chat, enhanced memory. Ultimate $39.99 adds personas + group chats + 6x memory.",
    newsType: "new",
    checked: "Mar 25, 2026",
    coinNote: "8,000 moments/mo in Premium. All media (images, video, voice) uses moments. 8k moments ≈ 160 images OR ~16 videos OR 80 min voice/month.",
  },
  {
    id: "aiallure",
    prevRank: 3,
    role: "Best Visuals",
    subMonthly: 19.90,
    subYearly: 9.90,
    freeCoins: null,
    freeMessages: null,
    momentum: 95,
    features: [
      { key: "chat", label: "Chat", access: "unlimited" },
      { key: "images", label: "Image Gen", access: "unlimited" },
      { key: "video", label: "Short Video", access: "unlimited", detail: "~3 clips, up to 8 sec" },
      { key: "video-long", label: "Long Video", access: "coins", detail: "10–120 sec, AllureCoins" },
      { key: "voice", label: "Voice", access: "unlimited" },
      { key: "characters", label: "Characters", access: "unlimited" },
      { key: "memory", label: "Memory", access: "unlimited", detail: "advanced biographical" },
    ],
    news: "Live Rooms launched. Starter $9.90/yr. Unlimited chat + images + voice. Video gen requires AllureCoins.",
    newsType: "new",
    checked: "Mar 13, 2026",
    coinNote: "AllureCoins needed for video gen and premium companions. No free coins in base plan.",
  },
  {
    id: "candy-ai",
    prevRank: 5,
    role: "Best Value",
    subMonthly: 13.99,
    subYearly: 3.99,
    freeCoins: "100/mo",
    freeMessages: "Unlimited",
    momentum: 40,
    features: [
      { key: "chat", label: "Chat", access: "unlimited" },
      { key: "images", label: "Image Gen", access: "coins", detail: "token-based" },
      { key: "voice", label: "Phone Calls", access: "coins", detail: "token-based" },
      { key: "video", label: "Video", access: "coins", detail: "token-based" },
      { key: "memory", label: "Memory", access: "limited", detail: "adaptive" },
      { key: "characters", label: "Characters", access: "unlimited" },
    ],
    news: "Cheapest yearly at $3.99/mo ($47.88/yr). Chat unlimited. Images + phone calls included in sub. Video costs tokens.",
    newsType: "price_drop",
    checked: "Mar 13, 2026",
    coinNote: "100 free tokens/mo. Video generation costs tokens. Extra token prices vary by pack size.",
  },
  {
    id: "gptgirlfriend",
    prevRank: 3,
    role: "Best Chat",
    subMonthly: 12.00,
    subYearly: 9.58,
    freeCoins: "400/mo",
    freeMessages: "5,000/mo",
    momentum: 55,
    features: [
      { key: "chat", label: "Chat", access: "limited", detail: "5k/mo" },
      { key: "images", label: "Image Gen", access: "coins", detail: "6 coins/img" },
      { key: "voice", label: "Voice", access: "limited", detail: "in Premium" },
      { key: "video", label: "Video", access: "coins", detail: "5-sec clips" },
      { key: "characters", label: "Characters", access: "unlimited" },
      { key: "memory", label: "Memory", access: "unlimited" },
    ],
    news: "Premium $9.58/yr. 400 coins + 5k msgs/mo. Video gen + voice included. Best memory system.",
    newsType: "improvement",
    checked: "Mar 13, 2026",
    coinNote: "400 coins/mo (≈66 images). Coin packs: 300 for €9, 840 for €23, 2000 for €45. Video uses coins.",
  },
  {
    id: "mydreamcompanion",
    prevRank: 5,
    role: "Budget Pick",
    subMonthly: 11.99,
    subYearly: 5.84,
    freeCoins: "100/mo",
    freeMessages: "6,000/mo",
    momentum: 30,
    features: [
      { key: "chat", label: "Chat", access: "limited", detail: "6k/mo" },
      { key: "images", label: "Image Gen", access: "coins", detail: "5 coins/img" },
      { key: "video", label: "Video Gen", access: "coins", detail: "20 coins/vid" },
      { key: "voice", label: "Voice Msgs", access: "coins", detail: "2.8 coins/play" },
      { key: "characters", label: "Characters", access: "unlimited" },
      { key: "memory", label: "Memory", access: "limited", detail: "standard" },
    ],
    news: "Premium $5.84/yr — cheapest entry. 100 coins/mo. 6k msg cap. Ultimate ($24.99/yr) unlocks everything.",
    newsType: "stable",
    checked: "Mar 13, 2026",
    coinNote: "100 coins/mo (img=5, vid=20, voice=2.8 per play). Ultimate ($24.99/yr) adds 800 coins + unlimited msgs + ultra memory.",
  },
  {
    id: "secret-desires",
    prevRank: 0,
    role: "Chat-Focused",
    subMonthly: 7.99,
    subYearly: 7.99,
    freeCoins: null,
    freeMessages: "Unlimited",
    momentum: 45,
    features: [
      { key: "chat", label: "Chat", access: "unlimited", detail: "base chat" },
      { key: "images", label: "Image Gen", access: "coins", detail: "hearts required" },
      { key: "video", label: "Video Gen", access: "none", detail: "not confirmed on lowest paid tier" },
      { key: "voice", label: "Voice", access: "coins", detail: "1 heart = 30 sec" },
      { key: "characters", label: "Characters", access: "unlimited" },
      { key: "memory", label: "Memory", access: "limited", detail: "standard" },
    ],
    news: "Lowest paid plan includes unlimited base chat. Images, voice, and advanced chat models use hearts.",
    newsType: "new",
    checked: "Mar 26, 2026",
    coinNote: "Hearts are used for advanced chat engines, image generation, and voice. Higher tiers include more hearts.",
  },
  {
    id: "nectar-ai",
    prevRank: 0,
    role: "Best Scenarios",
    subMonthly: 9.99,
    subYearly: 4.99,
    freeCoins: null,
    freeMessages: "Unlimited",
    momentum: 35,
    features: [
      { key: "chat", label: "Chat", access: "unlimited" },
      { key: "images", label: "Image Gen", access: "unlimited" },
      { key: "video", label: "Video Gen", access: "limited", detail: "basic" },
      { key: "voice", label: "Voice", access: "limited", detail: "basic" },
      { key: "characters", label: "Characters", access: "unlimited" },
      { key: "memory", label: "Memory", access: "coins", detail: "credits for enhanced memory" },
    ],
    news: "Scenario builder with anime + realistic styles. $4.99/mo yearly for unlimited chat + images. Credits for enhanced roleplay.",
    newsType: "stable",
    checked: "Mar 25, 2026",
    coinNote: "Credits system for enhanced roleplay: improved storytelling and contextual memory. 2,500 credits for $4.99.",
  },
];

export const PLATFORMS_TESTED = rankedPlatforms.length;

/* ── Feature Utility v2 helpers (favor unlimited, adjust for caps + coin friction) ── */
type NormalizedKey = "chat" | "images" | "voice" | "video" | "memory";
const NORM_KEYS: NormalizedKey[] = ["chat", "images", "voice", "video", "memory"];

const ACCESS_BASE: Record<FeatureAccess, number> = {
  unlimited: 1.0,
  limited: 0.8,
  coins: 0.45,
  none: 0.0,
};
const COIN_FRICTION = 0.8; // extra mental/payment friction when usage costs credits
const ALPHA = 0.9; // adequacy curve softness (log-based)

// Typical monthly usage (Regular) to judge whether a cap is generous
const TYPICAL: Record<NormalizedKey, number> = {
  chat: 3000,
  images: 200,
  voice: 30, // minutes
  video: 12, // short clips or a few long videos equivalently
  memory: 1,
};

const FEATURE_WEIGHTS: Record<NormalizedKey, number> = { chat: 0.35, images: 0.30, voice: 0.20, video: 0.10, memory: 0.05 };

function parseFreeCoins(s: string | null): number | null {
  if (!s) return null;
  // examples: "400/mo", "1,000/mo", "100/mo", "Hearts/mo"
  if (s.includes("Hearts")) return 500; // Assume moderate hearts amount
  const m = s.replace(/[,\s]/g, "").match(/(\d+)/);
  return m ? parseInt(m[1], 10) : null;
}

function coinsPerUnitFor(entry: IndexEntry, key: NormalizedKey): number | null {
  // Attempt to extract per-unit coin rates from feature details like "6 coins/img", "20 coins/vid", "2.8 coins/play", "1 heart/30 sec"
  const re = /([0-9]+(?:\.[0-9]+)?)\s*(?:coins?|moments?|hearts?)\s*\/(img|image|vid|video|play|min|call|sec)/i;
  for (const f of entry.features) {
    const nk = normalizeKeyForFeature(f);
    if (nk !== key) continue;
    if (!f.detail) continue;
    const m = f.detail.match(re);
    if (m) {
      const v = parseFloat(m[1]);
      if (!isNaN(v) && v > 0) return v;
    }
  }
  return null;
}

function coinAdequacyFromFree(entry: IndexEntry, key: NormalizedKey): number | null {
  const free = parseFreeCoins(entry.freeCoins);
  if (!free) return null;
  const cpu = coinsPerUnitFor(entry, key);
  if (!cpu) return null;
  const freeUnits = free / cpu; // e.g., images included from free coins
  const typical = TYPICAL[key] || 1;
  const ratio = Math.log1p(freeUnits) / Math.log1p(typical);
  const adequacy = Math.min(1, Math.pow(ratio, ALPHA));
  return adequacy;
}

function parseCap(detail?: string): number | null {
  if (!detail) return null;
  const s = detail.toLowerCase();
  // e.g., "5k/mo", "200/mo", "20 min/mo", "~3 clips"
  const approx = s.match(/~?\s*(\d+(?:\.\d+)?)/);
  if (!approx) return null;
  let n = parseFloat(approx[1]);
  if (s.includes("k")) n *= 1000;
  // We don't convert minutes/seconds to counts; we just use the numeric magnitude for adequacy
  return isNaN(n) ? null : n;
}

function pickBetterAccess(a: FeatureAccess, b: FeatureAccess): FeatureAccess {
  const rank: Record<FeatureAccess, number> = { none: 0, coins: 1, limited: 2, unlimited: 3 };
  return rank[a] >= rank[b] ? a : b;
}

function normalizeKeyForFeature(f: Feature): NormalizedKey | null {
  const k = f.key.toLowerCase();
  if (k.includes("chat")) return "chat";
  if (k.includes("image")) return "images";
  if (k.includes("voice")) return "voice";
  if (k.includes("video")) return "video"; // includes short/long video variants
  if (k.includes("memory")) return "memory";
  if (k.includes("character")) return null;
  // Skip synthetic/auxiliary entries like extra-media used for UI only
  return null;
}

function coinAdequacyFallback(entry: IndexEntry, key: NormalizedKey): number {
  // If platform grants freeCoins monthly, assume a modest adequacy boost
  return entry.freeCoins ? 0.65 : 0.55;
}

function computeFeatureUtility(entry: IndexEntry): { featureUtility: number; unlimitedCount: number; ptsLegacy: number; maxLegacy: number } {
  // Combine multiple feature rows per normalized key by taking best access and most relevant cap
  const combined: Record<NormalizedKey, { access: FeatureAccess; cap: number | null }> = Object.fromEntries(
    NORM_KEYS.map((k) => [k, { access: "none" as FeatureAccess, cap: null }])
  ) as any;

  for (const f of entry.features) {
    const nk = normalizeKeyForFeature(f);
    if (!nk) continue;
    const prev = combined[nk];
    const nextAccess = pickBetterAccess(prev.access, f.access);
    const nextCap = f.access === "limited" ? (parseCap(f.detail) ?? prev.cap) : prev.cap;
    combined[nk] = { access: nextAccess, cap: nextCap };
  }

  const perFeatureScores: number[] = [];
  let unlimitedCount = 0;
  for (const k of NORM_KEYS) {
    const { access, cap } = combined[k];
    if (access === "unlimited") unlimitedCount += 1;
    let coverage = 0;
    if (access === "unlimited") {
      coverage = 1;
    } else if (access === "limited") {
      if (cap && TYPICAL[k] > 1) {
        const ratio = Math.log1p(cap) / Math.log1p(TYPICAL[k]);
        coverage = Math.min(1, Math.pow(ratio, ALPHA));
      } else {
        coverage = k === "memory" ? 0.7 : 0.8;
      }
    } else if (access === "coins") {
      const adequacy = coinAdequacyFromFree(entry, k);
      if (adequacy !== null) {
        coverage = adequacy * COIN_FRICTION;
      } else {
        coverage = coinAdequacyFallback(entry, k) * COIN_FRICTION;
      }
    } else {
      coverage = 0;
    }
    const weighted = FEATURE_WEIGHTS[k] * coverage;
    perFeatureScores.push(weighted);
  }

  let coverageWeighted = perFeatureScores.reduce((a, b) => a + b, 0);
  if (unlimitedCount >= 5) coverageWeighted *= 1.10;
  else if (unlimitedCount >= 3) coverageWeighted *= 1.06;
  if (coverageWeighted > 1) coverageWeighted = 1;
  const featurePct = coverageWeighted * 100;

  // Legacy points retained for UI elements that may rely on them
  const ptsLegacy = entry.features.reduce((s, f) => s + ACCESS_PTS[f.access], 0);
  const maxLegacy = entry.features.length * 10;
  return { featureUtility: featurePct, unlimitedCount, ptsLegacy, maxLegacy };
}

/* ── Exported helper for UI: per-feature adequacy breakdown (0–100) ── */
export type CoverageBreakdown = {
  key: NormalizedKey;
  label: string;
  weight: number;   // e.g., 0.35 for chat
  adequacy: number; // 0..100 — how much is included before paying extra
  typical: string;  // display hint ("3k msgs", "200 images", etc.)
};

export function coverageByKey(entry: IndexEntry | ScoredEntry): CoverageBreakdown[] {
  // Merge multiple feature rows per normalized key using best access and relevant cap
  const combined: Record<NormalizedKey, { access: FeatureAccess; cap: number | null; label: string }>
    = Object.fromEntries(NORM_KEYS.map((k) => [k, { access: "none" as FeatureAccess, cap: null, label: k }])) as any;

  for (const f of entry.features) {
    const nk = normalizeKeyForFeature(f);
    if (!nk) continue;
    const prev = combined[nk];
    const nextAccess = pickBetterAccess(prev.access, f.access);
    const nextCap = f.access === "limited" ? (parseCap(f.detail) ?? prev.cap) : prev.cap;
    combined[nk] = { access: nextAccess, cap: nextCap, label: f.label || prev.label };
  }

  function adequacyFor(key: NormalizedKey): number {
    const { access, cap } = combined[key];
    if (access === "unlimited") return 100;
    if (access === "limited") {
      const typical = TYPICAL[key] || 1;
      if (cap && typical > 1) {
        const ratio = Math.log1p(cap) / Math.log1p(typical);
        const a = Math.min(1, Math.pow(ratio, ALPHA));
        return Math.round(a * 100);
      }
      // If no numeric cap given, use a soft adequacy assumption (slightly lower for memory)
      return Math.round((key === "memory" ? 0.7 : 0.8) * 100);
    }
    if (access === "coins") {
      // Give coins features some credit based on how much the free coin pool covers
      const rawEntry = "features" in entry ? entry as IndexEntry : null;
      if (rawEntry) {
        const adequacy = coinAdequacyFromFree(rawEntry, key);
        if (adequacy !== null) return Math.round(adequacy * COIN_FRICTION * 100);
        return Math.round(coinAdequacyFallback(rawEntry, key) * COIN_FRICTION * 100);
      }
      return 35;
    }
    // none / locked
    return 0;
  }

  const TYP_HINT: Record<NormalizedKey, string> = {
    chat: "3k msgs",
    images: "200 images",
    voice: "30 min",
    video: "12 videos",
    memory: "1 memory",
  };

  const rows: CoverageBreakdown[] = NORM_KEYS.map((k) => ({
    key: k,
    label: k.charAt(0).toUpperCase() + k.slice(1),
    weight: FEATURE_WEIGHTS[k],
    adequacy: adequacyFor(k),
    typical: TYP_HINT[k],
  }));

  return rows;
}

/* ── Score calculation ── */
/* Formula: Value Index = √(Feature Score × Price Efficiency)            */
/* Geometric mean — same method as UN Human Development Index            */
/* Feature Score (Utility) favors unlimited, adjusts for caps + friction */
/* Price Efficiency = (cheapest monthly price / platform price) × 100    */
/* Neither dimension can dominate alone — need both to rank high         */

export interface ScoredEntry extends IndexEntry {
  score: number;
  rank: number;
  subPrice: number;
  featureScore: number;
  featurePts: number;
  featureMax: number;
  priceEfficiency: number;
}

const FEATURES_WEIGHT = 0.72; // features heavily outweigh price — cheap weak plans shouldn't dominate

function calcScore(e: IndexEntry, minPrice: number): Omit<ScoredEntry, "rank"> {
  const { featureUtility, ptsLegacy, maxLegacy } = computeFeatureUtility(e);
  const eff = e.subYearly && e.subYearly < e.subMonthly ? e.subYearly : e.subMonthly;
  const priceEff = (minPrice / eff) * 100;
  const weighted = Math.pow(featureUtility, FEATURES_WEIGHT) * Math.pow(priceEff, 1 - FEATURES_WEIGHT);
  const score = Math.round(weighted);
  return { ...e, score, subPrice: e.subMonthly, featureScore: featureUtility, featurePts: ptsLegacy, featureMax: maxLegacy, priceEfficiency: priceEff };
}

export function calculateIndex(): ScoredEntry[] {
  const minPrice = Math.min(...RAW.map((e) => (e.subYearly && e.subYearly < e.subMonthly ? e.subYearly : e.subMonthly)));
  const scored = RAW.map((e) => calcScore(e, minPrice));
  scored.sort((a, b) => b.score - a.score);
  return scored.map((e, i) => ({ ...e, rank: i + 1 }));
}

/* Included-only points for personalization (coins = 0, matching the main index) */
const INCLUDED_PTS: Record<FeatureAccess, number> = { unlimited: 10, limited: 7, coins: 0, none: 0 };

export function calculatePersonalized(weights: { budget: number; chat: number; images: number; video: number; voice: number; memory: number }): ScoredEntry[] {
  const minPrice = Math.min(...RAW.map((e) => (e.subYearly && e.subYearly < e.subMonthly ? e.subYearly : e.subMonthly)));
  const results = RAW.map((e) => {
    const base = calcScore(e, minPrice);
    if (e.subMonthly > weights.budget) {
      return { ...base, rank: 0, score: Math.round(base.score * 0.5) };
    }
    // Build a map of best access per normalized key
    const accessMap: Record<string, FeatureAccess> = { chat: "none", images: "none", video: "none", voice: "none", memory: "none" };
    for (const f of e.features) {
      const nk = normalizeKeyForFeature(f);
      if (nk) accessMap[nk] = pickBetterAccess(accessMap[nk] as FeatureAccess, f.access);
    }
    const totalWeight = weights.chat + weights.images + weights.video + weights.voice + weights.memory;
    if (totalWeight === 0) return { ...base, rank: 0 };
    const personalScore =
      (INCLUDED_PTS[accessMap["chat"] as FeatureAccess] * weights.chat +
       INCLUDED_PTS[accessMap["images"] as FeatureAccess] * weights.images +
       INCLUDED_PTS[accessMap["video"] as FeatureAccess] * weights.video +
       INCLUDED_PTS[accessMap["voice"] as FeatureAccess] * weights.voice +
       INCLUDED_PTS[accessMap["memory"] as FeatureAccess] * weights.memory) / (totalWeight * 10) * 100;
    const blended = Math.round(base.score * 0.5 + personalScore * 0.5);
    return { ...base, score: blended, rank: 0 };
  });
  results.sort((a, b) => b.score - a.score);
  return results.map((e, i) => ({ ...e, rank: i + 1 }));
}

export const VALUE_INDEX = calculateIndex();

export const VS_MATCHUPS = [
  {
    slug: "aiallure-vs-ourdream-ai",
    a: "ourdream-ai",
    b: "aiallure",
    title: "OurDream AI vs AiAllure — Which Gives You More?",
    points: [
      "Both land around $9.90–$9.99/yr on yearly plans, so price is basically a tie.",
      "AiAllure includes unlimited image generation and voice in the base plan — OurDream caps images at 200/mo and voice at 20 minutes.",
      "OurDream bundles 10 video clips per month from its coin pool. AiAllure gives you short clips free but charges AllureCoins for anything over 8 seconds.",
      "AiAllure recently launched Live Rooms — a real-time interaction feature no other platform has yet.",
      "OurDream has a simpler pricing model: one coin pool covers images, voice, and video. AiAllure splits free vs. paid features more unevenly.",
    ],
  },
  {
    slug: "ourdream-ai-vs-candy-ai",
    a: "ourdream-ai",
    b: "candy-ai",
    title: "OurDream AI vs Candy AI — Premium or Budget?",
    points: [
      "Candy AI is the cheapest yearly plan we've tested at $3.99/mo ($47.88/yr). OurDream costs $9.99/yr — still affordable, but more than double.",
      "The catch with Candy AI: images, phone calls, and video all cost tokens. You get 100 free tokens per month, which doesn't go far.",
      "OurDream includes 200 images, 20 min voice, and 10 videos per month in the base plan — no extra purchase needed.",
      "Both have unlimited chat. If texting is all you care about, Candy AI saves you real money.",
      "If you want to actually generate images or use voice regularly, OurDream's included allowances make it the better deal despite the higher sticker price.",
    ],
  },
  {
    slug: "gptgirlfriend-vs-candy-ai",
    a: "gptgirlfriend",
    b: "candy-ai",
    title: "GPTGirlfriend vs Candy AI — Deep Chats or More Features?",
    points: [
      "GPTGirlfriend has the best memory system we've seen — fully unlimited, meaning your AI actually remembers long conversations and details.",
      "Candy AI offers adaptive memory that works well but isn't as deep. It forgets older context sooner.",
      "GPTGirlfriend costs $9.58/yr and gives you 5,000 messages plus 400 coins per month. Candy AI is cheaper at $3.99/yr with unlimited messages but only 100 tokens.",
      "Candy AI includes phone calls in the subscription. GPTGirlfriend reserves voice for Premium tier users.",
      "If conversation quality and long-term memory matter most, GPTGirlfriend is the clear pick. If you want the cheapest way in with more media options, go Candy AI.",
    ],
  },
];

export interface FeatureTag {
  slug: string;
  label: string;
  href: string;
  h1: string;
  description: string;
  filterKey: string | null;        // normalized key to highlight (chat, images, voice, video, memory) or null for custom
  filterFn?: (e: ScoredEntry) => boolean;  // custom filter for ranking
  angle: string;                   // the "why this page exists" hook
}

export const FEATURE_TAGS: FeatureTag[] = [
  {
    slug: "best-ai-girlfriend-with-video",
    label: "Best AI girlfriend with video",
    href: "/best-ai-girlfriend-with-video",
    h1: "Best AI Girlfriend Apps With Video Generation (2026)",
    description: "Which AI girlfriend apps actually include video in the subscription? We tested every platform and ranked them by real video coverage — not marketing claims.",
    filterKey: "video",
    angle: "Most platforms advertise video but charge extra per clip. Here's who actually includes it.",
  },
  {
    slug: "ai-girlfriend-unlimited-images",
    label: "AI girlfriend unlimited images",
    href: "/ai-girlfriend-unlimited-images",
    h1: "AI Girlfriend Apps With Unlimited Image Generation (2026)",
    description: "Only some AI girlfriend apps include unlimited images in the subscription. We ranked every platform by actual image coverage using the Value Index.",
    filterKey: "images",
    angle: "Token-based image generation burns through credits fast. These platforms include it.",
  },
  {
    slug: "ai-girlfriend-no-tokens",
    label: "AI girlfriend no tokens",
    href: "/ai-girlfriend-no-tokens",
    h1: "AI Girlfriend Apps With No Token System (2026)",
    description: "Tired of running out of tokens? These AI girlfriend platforms include features in your subscription — no coins, no credits, no hidden costs.",
    filterKey: null,
    angle: "Token systems are designed to make you spend more. These platforms don't use them.",
  },
  {
    slug: "best-ai-girlfriend-with-voice",
    label: "Best AI girlfriend with voice",
    href: "/best-ai-girlfriend-with-voice",
    h1: "Best AI Girlfriend Apps With Voice Chat & Calls (2026)",
    description: "Which AI girlfriend apps include voice messages or real-time voice calls? Ranked by actual voice coverage from the Value Index.",
    filterKey: "voice",
    angle: "Voice is the next frontier. Most platforms charge per minute. Here's who includes it.",
  },
  {
    slug: "best-ai-girlfriend-with-memory",
    label: "Best AI girlfriend with memory",
    href: "/best-ai-girlfriend-with-memory",
    h1: "Best AI Girlfriend Apps With Long-Term Memory (2026)",
    description: "Most AI girlfriends forget you after a few messages. These platforms actually remember your conversations, preferences, and relationship history.",
    filterKey: "memory",
    angle: "Memory is what separates a chatbot from a companion. Here's who gets it right.",
  },
  {
    slug: "ai-girlfriend-hidden-limits",
    label: "Hidden limits exposed",
    href: "/ai-girlfriend-hidden-limits",
    h1: "AI Girlfriend Hidden Limits Exposed — What They Don't Tell You (2026)",
    description: "Every AI girlfriend platform advertises features they don't fully include. We tested each one and documented exactly what's unlimited, what's capped, and what costs extra.",
    filterKey: null,
    angle: "Marketing says 'unlimited'. The pricing page says otherwise. We checked.",
  },
  {
    slug: "ai-girlfriend-real-image-limits",
    label: "How many images do you really get?",
    href: "/ai-girlfriend-real-image-limits",
    h1: "How Many AI Girlfriend Images Do You Actually Get Per Month? (2026)",
    description: "We calculated exactly how many images each AI girlfriend platform gives you per month — including free coins, token rates, and subscription caps.",
    filterKey: "images",
    angle: "'Unlimited images' rarely means unlimited. Here's the real math.",
  },
  {
    slug: "best-ai-girlfriend-free-trial",
    label: "AI girlfriend free trial",
    href: "/best-ai-girlfriend-free-trial",
    h1: "Best AI Girlfriend Apps With Free Trials (2026)",
    description: "Which AI girlfriend apps let you try before paying? We tested every free tier and ranked them by what you actually get without a credit card.",
    filterKey: null,
    angle: "Free tiers vary wildly. Some are generous. Some are just a login screen.",
  },
];

// Backward-compatible export for existing chip UI
export const FEATURE_CHIPS = FEATURE_TAGS.map((t) => ({ label: t.label, href: t.href }));
