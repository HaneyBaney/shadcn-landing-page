import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unlimited AI Girlfriend Images (2026) | aigfnow.com",
  description: "Only 1 of 8 AI girlfriend apps includes truly unlimited image generation. See which platforms cap images, which use tokens, and what you actually get per month.",
  openGraph: {
    title: "Unlimited AI Girlfriend Images (2026) | aigfnow.com",
    description: "Only 1 of 8 AI girlfriend apps includes truly unlimited image generation. See which platforms cap images and what you actually get.",
    type: "article",
    url: "https://www.aigfnow.com/feature/unlimited-images",
    siteName: "aigfnow.com",
    images: [{ url: "https://www.aigfnow.com/hero-image-dark.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend Apps With Unlimited Images (2026)",
    description: "Only 1 of 8 AI girlfriend apps includes truly unlimited image generation.",
    images: ["https://www.aigfnow.com/hero-image-dark.jpeg"],
  },
  alternates: { canonical: "https://www.aigfnow.com/feature/unlimited-images" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
