import {
  BenchmarkUsage,
  MemoryLevel,
  PlatformData,
  PlatformComputedScores,
  RankedPlatform,
  ValueIndexWeights,
} from "./types";

const FEATURE_WEIGHTS = {
  chat: 0.25,
  images: 0.25,
  voice: 0.15,
  video: 0.2,
  memory: 0.15,
} as const;

export const DEFAULT_BENCHMARKS: BenchmarkUsage = {
  chatMessages: 2000,
  images: 100,
  voiceMinutes: 30,
  videos: 8,
};

export const DEFAULT_WEIGHTS: ValueIndexWeights = {
  usability: 0.35,
  costProtection: 0.30,
  quality: 0.30,
  price: 0.05,
};

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function geometricMean(values: number[], weights: number[]): number {
  const safeValues = values.map((v) => Math.max(v, 0.0001));
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);

  const weightedLogSum = safeValues.reduce((sum, value, index) => {
    return sum + Math.log(value) * weights[index];
  }, 0);

  return Math.exp(weightedLogSum / totalWeight);
}

function accessLevelToScore(access: string): number {
  switch (access) {
    case "unlimited":
      return 1.0;
    case "generous_cap":
      return 0.85;
    case "moderate_cap":
      return 0.65;
    case "credit_based":
      return 0.4;
    case "limited":
      return 0.25;
    case "locked":
      return 0.0;
    default:
      return 0.0;
  }
}

function memoryLevelToScore(memoryLevel: MemoryLevel): number {
  switch (memoryLevel) {
    case "deep":
      return 1.0;
    case "enhanced":
      return 0.85;
    case "standard":
      return 0.65;
    case "basic":
      return 0.45;
    case "none":
      return 0.0;
    default:
      return 0.0;
  }
}

function getUsabilityScore(platform: PlatformData): number {
  const scores = {
    chat: accessLevelToScore(platform.features.chat),
    images: accessLevelToScore(platform.features.images),
    voice: accessLevelToScore(platform.features.voice),
    video: accessLevelToScore(platform.features.video),
    memory: Math.max(
      accessLevelToScore(platform.features.memory),
      memoryLevelToScore(platform.memoryLevel)
    ),
  };

  return clamp01(
    scores.chat * FEATURE_WEIGHTS.chat +
      scores.images * FEATURE_WEIGHTS.images +
      scores.voice * FEATURE_WEIGHTS.voice +
      scores.video * FEATURE_WEIGHTS.video +
      scores.memory * FEATURE_WEIGHTS.memory
  );
}

function ratioOrUnlimited(
  included: number | null | undefined,
  benchmark: number
): number {
  if (included == null) return 1;
  return clamp01(included / benchmark);
}

function estimateCreditCoverage(platform: PlatformData, feature: "images" | "voice" | "video"): number {
  const credits = platform.limits.monthlyCreditsIncluded ?? 0;

  if (credits <= 0) return 0;

  if (platform.meta.slug === "secrets-ai") {
    if (feature === "images") return clamp01((credits / 50) / DEFAULT_BENCHMARKS.images);
    if (feature === "voice") return clamp01((credits / 100) / DEFAULT_BENCHMARKS.voiceMinutes);
    if (feature === "video") return clamp01((credits / 480) / DEFAULT_BENCHMARKS.videos);
  }

  if (platform.meta.slug === "candy-ai") {
    if (feature === "images") return 0.2;
    if (feature === "voice") return 0.15;
    if (feature === "video") return 0.1;
  }

  if (platform.meta.slug === "gptgirlfriend") {
    if (feature === "images") return 0.5;
    if (feature === "voice") return 0.1;
    if (feature === "video") return 0.15;
  }

  if (platform.meta.slug === "mydreamcompanion") {
    if (feature === "images") return 0.2;
    if (feature === "voice") return 0.15;
    if (feature === "video") return 0.1;
  }

  if (platform.meta.slug === "ourdream-ai") {
    if (feature === "images") return 1;
    if (feature === "voice") return 0.67;
    if (feature === "video") return 1;
  }

  return 0.2;
}

function getCostProtectionScore(
  platform: PlatformData,
  benchmark: BenchmarkUsage = DEFAULT_BENCHMARKS
): number {
  const chatCoverage =
    platform.features.chat === "unlimited"
      ? 1
      : ratioOrUnlimited(platform.limits.chatMessagesIncluded, benchmark.chatMessages);

  const imageCoverage =
    platform.features.images === "unlimited"
      ? 1
      : platform.features.images === "credit_based"
      ? estimateCreditCoverage(platform, "images")
      : ratioOrUnlimited(platform.limits.imagesIncluded, benchmark.images);

  const voiceCoverage =
    platform.features.voice === "unlimited"
      ? 1
      : platform.features.voice === "credit_based"
      ? estimateCreditCoverage(platform, "voice")
      : ratioOrUnlimited(platform.limits.voiceMinutesIncluded, benchmark.voiceMinutes);

  const videoCoverage =
    platform.features.video === "unlimited"
      ? 1
      : platform.features.video === "credit_based"
      ? estimateCreditCoverage(platform, "video")
      : ratioOrUnlimited(platform.limits.videosIncluded, benchmark.videos);

  const memoryCoverage = memoryLevelToScore(platform.memoryLevel);

  return clamp01(
    chatCoverage * FEATURE_WEIGHTS.chat +
      imageCoverage * FEATURE_WEIGHTS.images +
      voiceCoverage * FEATURE_WEIGHTS.voice +
      videoCoverage * FEATURE_WEIGHTS.video +
      memoryCoverage * FEATURE_WEIGHTS.memory
  );
}

function getQualityScore(platform: PlatformData): number {
  const { memory, visuals, voice, video, extras } = platform.quality;

  return clamp01(
    memory * 0.35 +
      visuals * 0.2 +
      voice * 0.15 +
      video * 0.15 +
      extras * 0.15
  );
}

function getMedianPrice(platforms: PlatformData[]): number {
  const values = [...platforms]
    .map((p) => p.pricing.yearlyMonthly)
    .sort((a, b) => a - b);

  const mid = Math.floor(values.length / 2);

  if (values.length % 2 === 0) {
    return (values[mid - 1] + values[mid]) / 2;
  }

  return values[mid];
}

function getPriceEfficiencyScore(platform: PlatformData, medianPrice: number): number {
  return clamp01(medianPrice / platform.pricing.yearlyMonthly);
}

export function computePlatformScores(
  platform: PlatformData,
  allPlatforms: PlatformData[],
  benchmark: BenchmarkUsage = DEFAULT_BENCHMARKS,
  weights: ValueIndexWeights = DEFAULT_WEIGHTS
): PlatformComputedScores {
  const usability = getUsabilityScore(platform);
  const costProtection = getCostProtectionScore(platform, benchmark);
  const quality = getQualityScore(platform);
  const medianPrice = getMedianPrice(allPlatforms);
  const priceEfficiency = getPriceEfficiencyScore(platform, medianPrice);

  const finalScore =
    geometricMean(
      [usability, costProtection, quality, priceEfficiency],
      [weights.usability, weights.costProtection, weights.quality, weights.price]
    ) * 100;

  return {
    usability,
    costProtection,
    quality,
    priceEfficiency,
    finalScore: Math.round(finalScore),
  };
}

export function summarizeFeatureCounts(platform: PlatformData): string {
  const values = Object.values(platform.features);

  const unlimited = values.filter((v) => v === "unlimited").length;
  const capped = values.filter(
    (v) => v === "generous_cap" || v === "moderate_cap"
  ).length;
  const credits = values.filter((v) => v === "credit_based").length;
  const limited = values.filter((v) => v === "limited").length;
  const locked = values.filter((v) => v === "locked").length;

  const parts = [
    unlimited ? `${unlimited} unlimited` : null,
    capped ? `${capped} capped` : null,
    credits ? `${credits} credits` : null,
    limited ? `${limited} limited` : null,
    locked ? `${locked} locked` : null,
  ].filter(Boolean);

  return parts.join(" · ");
}

export function rankPlatforms(
  allPlatforms: PlatformData[],
  benchmark: BenchmarkUsage = DEFAULT_BENCHMARKS,
  weights: ValueIndexWeights = DEFAULT_WEIGHTS
): RankedPlatform[] {
  const computed: RankedPlatform[] = allPlatforms.map((platform) => {
    const scores = computePlatformScores(platform, allPlatforms, benchmark, weights);

    return {
      ...platform,
      scores,
      valueIndex: scores.finalScore,
      featureSummary: summarizeFeatureCounts(platform),
    };
  });

  return computed
    .sort((a, b) => b.valueIndex - a.valueIndex)
    .map((platform, index) => ({
      ...platform,
      rank: index + 1,
    }));
}
