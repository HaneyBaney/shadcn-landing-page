import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Girlfriend Apps – No Tokens (2026) | aigfnow.com",
  description: "Tired of running out of tokens? Only 1 of 8 AI girlfriend apps offers truly unlimited features with no coin system. See which platforms use credits and which don't.",
  openGraph: {
    title: "AI Girlfriend Apps – No Tokens (2026) | aigfnow.com",
    description: "Tired of running out of tokens? Only 1 of 8 AI girlfriend apps offers truly unlimited features with no coin system.",
    type: "article",
    url: "https://aigfnow.com/feature/no-tokens",
    siteName: "aigfnow.com",
    images: [{ url: "https://aigfnow.com/hero-image-dark.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend Apps With No Tokens or Credits (2026)",
    description: "Tired of running out of tokens? See which platforms use credits and which don't.",
    images: ["https://aigfnow.com/hero-image-dark.jpeg"],
  },
  alternates: { canonical: "https://aigfnow.com/feature/no-tokens" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
