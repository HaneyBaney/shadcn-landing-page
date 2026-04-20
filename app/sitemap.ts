import type { MetadataRoute } from "next";

const BASE_URL = "https://www.aigfnow.com";

const STRONG_PAGES = [
  { path: "/", priority: 1.0, freq: "weekly" },
  { path: "/feature/cheapest", priority: 0.9, freq: "monthly" },
  { path: "/feature/unlimited-images", priority: 0.9, freq: "monthly" },
  { path: "/feature/video-generation", priority: 0.9, freq: "monthly" },
  { path: "/feature/voice-calls", priority: 0.9, freq: "monthly" },
  { path: "/feature/long-term-memory", priority: 0.9, freq: "monthly" },
  { path: "/feature/no-tokens", priority: 0.9, freq: "monthly" },
  { path: "/hidden-costs/token-systems", priority: 0.8, freq: "monthly" },
  { path: "/hidden-costs/whats-included", priority: 0.8, freq: "monthly" },
  { path: "/how-we-test", priority: 0.8, freq: "monthly" },
  { path: "/match", priority: 0.8, freq: "monthly" },
  { path: "/review/aiallure-live-room", priority: 0.8, freq: "monthly" },
  { path: "/about", priority: 0.5, freq: "yearly" },
  { path: "/disclaimer", priority: 0.3, freq: "yearly" },
  { path: "/privacy", priority: 0.3, freq: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return STRONG_PAGES.map(({ path, priority, freq }) => ({
    url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));
}
