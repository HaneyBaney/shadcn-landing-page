import path from "path";
import { getPosts } from "@/lib/mdx";
import { platforms } from "@/lib/platforms";
import { FEATURE_TAGS } from "@/data/value-index";
import type { MetadataRoute } from "next";

const BASE_URL = "https://aigfnow.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const reviewsDir = path.join(process.cwd(), "content", "reviews");
  const reviews = getPosts(reviewsDir);
  

  const ids = Object.keys(platforms);
  const comparePairs: string[] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      comparePairs.push(`${ids[i]}-vs-${ids[j]}`);
    }
  }

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...reviews.map((post) => ({
      url: `${BASE_URL}/reviews/${post.slug}`,
      lastModified: new Date(post.metadata.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...comparePairs.map((slug) => ({
      url: `${BASE_URL}/compare/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...FEATURE_TAGS.map((tag) => ({
      url: `${BASE_URL}${tag.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
