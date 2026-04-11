import { PlatformData } from "./types";

export function getIncludedFeatures(platform: PlatformData): string[] {
  const items: string[] = [];

  if (platform.features.chat === "unlimited") items.push("Chat");
  if (platform.features.images === "unlimited") items.push("Image Gen");
  if (platform.features.voice === "unlimited") items.push("Voice");
  if (platform.features.video === "unlimited") items.push("Video");
  if (platform.features.memory === "unlimited" || platform.memoryLevel === "enhanced" || platform.memoryLevel === "deep") {
    items.push(getMemoryLabel(platform));
  }

  return items;
}

export function getCappedFeatures(platform: PlatformData): string[] {
  const items: string[] = [];

  if (platform.features.images === "generous_cap" || platform.features.images === "moderate_cap") {
    items.push(`Image Gen — ${platform.limits.imagesIncluded ?? "capped"}/mo`);
  }

  if (platform.features.voice === "generous_cap" || platform.features.voice === "moderate_cap") {
    items.push(`Voice — ${platform.limits.voiceMinutesIncluded ?? "capped"} min/mo`);
  }

  if (platform.features.video === "generous_cap" || platform.features.video === "moderate_cap") {
    items.push(`Video — ${platform.limits.videosIncluded ?? "capped"}/mo`);
  }

  if (platform.features.chat === "generous_cap" || platform.features.chat === "moderate_cap") {
    items.push(`Chat — ${platform.limits.chatMessagesIncluded ?? "capped"}/mo`);
  }

  if (
    platform.features.memory === "generous_cap" ||
    platform.features.memory === "moderate_cap" ||
    platform.features.memory === "limited"
  ) {
    items.push(getMemoryLabel(platform));
  }

  return items;
}

export function getCreditFeatures(platform: PlatformData): string[] {
  const items: string[] = [];

  if (platform.features.images === "credit_based") {
    if (platform.meta.slug === "secrets-ai") {
      items.push("Image Gen — 50 moments/image");
    } else {
      items.push("Image Gen — uses credits/tokens");
    }
  }

  if (platform.features.voice === "credit_based") {
    if (platform.meta.slug === "secrets-ai") {
      items.push("Audio Calls — 100 moments/min");
    } else {
      items.push("Voice — uses credits/tokens");
    }
  }

  if (platform.features.video === "credit_based") {
    if (platform.meta.slug === "secrets-ai") {
      items.push("Video Gen — moments (5–10s, resolution-based)");
    } else {
      items.push("Video Gen — uses credits/tokens");
    }
  }

  return items;
}

export function getMemoryLabel(platform: PlatformData): string {
  switch (platform.memoryLevel) {
    case "deep":
      return "Memory — deep";
    case "enhanced":
      return "Memory — enhanced (4x access, +60% context)";
    case "standard":
      return "Memory — standard";
    case "basic":
      return "Memory — basic";
    default:
      return "Memory";
  }
}

export function getUsageRealityLine(platform: PlatformData): string | null {
  if (platform.meta.slug === "secrets-ai") {
    return "8,000 moments ≈ 160 images OR 80 min voice OR ~16 standard 8s 720p videos/month";
  }

  if (platform.meta.slug === "candy-ai") {
    return "100 tokens/month is enough for light testing, not heavy media use.";
  }

  if (platform.meta.slug === "ourdream") {
    return "Includes 200 images, 20 voice minutes, and 10 videos before extra DreamCoins.";
  }

  if (platform.meta.slug === "aiallure") {
    return "Unlimited images and voice are included; longer video usage still depends on extra coins.";
  }

  return null;
}
