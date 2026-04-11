export type FeatureKey = "chat" | "images" | "voice" | "video" | "memory";

export type AccessLevel =
  | "unlimited"
  | "generous_cap"
  | "moderate_cap"
  | "credit_based"
  | "limited"
  | "locked";

export type MemoryLevel =
  | "none"
  | "basic"
  | "standard"
  | "enhanced"
  | "deep";

export interface PlatformFeatureAccess {
  chat: AccessLevel;
  images: AccessLevel;
  voice: AccessLevel;
  video: AccessLevel;
  memory: AccessLevel;
  photoMessages?: AccessLevel;
}

export interface PlatformLimits {
  chatMessagesIncluded?: number | null;
  imagesIncluded?: number | null;
  voiceMinutesIncluded?: number | null;
  videosIncluded?: number | null;
  monthlyCreditsIncluded?: number | null;
}

export interface PlatformQuality {
  memory: number; // 0..1
  visuals: number; // 0..1
  voice: number; // 0..1
  video: number; // 0..1
  extras: number; // 0..1
}

export interface PlatformPricing {
  monthly: number;
  yearlyMonthly: number;
}

export interface PlatformMeta {
  slug: string;
  name: string;
  affiliateUrl: string;
  websiteUrl: string;
  badge?: string;
  description?: string;
  bestFor?: string[];
  notIdealFor?: string[];
  highlights?: string[];
}

export interface PlatformData {
  meta: PlatformMeta;
  pricing: PlatformPricing;
  features: PlatformFeatureAccess;
  memoryLevel: MemoryLevel;
  limits: PlatformLimits;
  quality: PlatformQuality;
}

export interface BenchmarkUsage {
  chatMessages: number;
  images: number;
  voiceMinutes: number;
  videos: number;
}

export interface ValueIndexWeights {
  usability: number;
  costProtection: number;
  quality: number;
  price: number;
}

export interface PlatformComputedScores {
  usability: number;
  costProtection: number;
  quality: number;
  priceEfficiency: number;
  finalScore: number;
}

export interface RankedPlatform extends PlatformData {
  scores: PlatformComputedScores;
  valueIndex: number;
  featureSummary: string;
  rank?: number;
}
