import { rankedPlatforms } from "./ranked-platforms";
import type { ScoredEntry, Feature } from "./value-index";

function mapAccess(access: string): "unlimited" | "limited" | "coins" | "none" {
  if (access === "unlimited") return "unlimited";
  if (access === "generous_cap" || access === "moderate_cap" || access === "limited") return "limited";
  if (access === "credit_based") return "coins";
  return "none";
}

function toFeatureList(platform: any): Feature[] {
  // Special case for AiAllure to preserve detailed video information
  if (platform.meta.slug === "aiallure") {
    return [
      { key: "chat", label: "Chat", access: mapAccess(platform.features.chat) },
      { key: "images", label: "Image Gen", access: mapAccess(platform.features.images) },
      { key: "voice", label: "Voice", access: mapAccess(platform.features.voice) },
      { key: "video", label: "Short Video", access: mapAccess(platform.features.video), detail: "~3 clips, up to 8 sec" },
      { key: "long-video", label: "Long Video", access: "coins", detail: "10–120 sec, AllureCoins" },
      { key: "memory", label: "Memory", access: mapAccess(platform.features.memory), detail: platform.memoryLevel },
    ];
  }
  
  // Special case for Nectar AI to include photo messages
  if (platform.meta.slug === "nectar-ai") {
    return [
      { key: "chat", label: "Chat", access: mapAccess(platform.features.chat) },
      { key: "images", label: "Image Gen", access: mapAccess(platform.features.images) },
      { key: "voice", label: "Voice", access: mapAccess(platform.features.voice) },
      { key: "video", label: "Video", access: mapAccess(platform.features.video) },
      { key: "memory", label: "Memory", access: mapAccess(platform.features.memory), detail: platform.memoryLevel },
      { key: "photoMessages", label: "Photo Messages", access: mapAccess(platform.features.photoMessages) },
    ];
  }
  
  return [
    { key: "chat", label: "Chat", access: mapAccess(platform.features.chat) },
    { key: "images", label: "Image Gen", access: mapAccess(platform.features.images) },
    { key: "voice", label: "Voice", access: mapAccess(platform.features.voice) },
    { key: "video", label: "Video", access: mapAccess(platform.features.video) },
    { key: "memory", label: "Memory", access: mapAccess(platform.features.memory), detail: platform.memoryLevel },
  ];
}

export const VALUE_INDEX_FROM_ENGINE: ScoredEntry[] = rankedPlatforms.map((p) => ({
  id: p.meta.slug,
  prevRank: 0,
  role: p.meta.badge ?? "",
  subMonthly: p.pricing.monthly,
  subYearly: p.pricing.yearlyMonthly,
  freeCoins: p.limits.monthlyCreditsIncluded ? `${p.limits.monthlyCreditsIncluded}/mo` : null,
  freeMessages: "Unlimited",
  momentum: 0,
  features: toFeatureList(p),
  news: "",
  newsType: "stable" as const,
  checked: "Mar 26, 2026",
  coinNote: p.limits.monthlyCreditsIncluded ? `${p.limits.monthlyCreditsIncluded} credits included monthly. Additional features may require extra credits.` : "Credit-based features available for purchase.",
  score: p.valueIndex,
  rank: p.rank ?? 0,
  subPrice: p.pricing.monthly,
  featureScore: Math.round(p.scores.usability * 100),
  featurePts: 0,
  featureMax: 0,
  priceEfficiency: Math.round(p.scores.priceEfficiency * 100),
}));

// Make PLATFORMS_TESTED dynamic
export const PLATFORMS_TESTED = rankedPlatforms.length;
