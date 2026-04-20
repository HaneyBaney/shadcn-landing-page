import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Girlfriend Long-Term Memory (2026) | aigfnow.com",
  description: "Which AI girlfriend actually remembers your conversations? We tested memory on all 8 platforms. GPTGirlfriend and Secrets AI lead. Here's the full breakdown.",
  openGraph: {
    title: "AI Girlfriend Long-Term Memory (2026) | aigfnow.com",
    description: "Which AI girlfriend actually remembers your conversations? We tested memory on all 8 platforms.",
    type: "article",
    url: "https://www.aigfnow.com/feature/long-term-memory",
    siteName: "aigfnow.com",
    images: [{ url: "https://www.aigfnow.com/hero-image-dark.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend Apps With Long-Term Memory (2026)",
    description: "Which AI girlfriend actually remembers your conversations? We tested all 8 platforms.",
    images: ["https://www.aigfnow.com/hero-image-dark.jpeg"],
  },
  alternates: { canonical: "https://www.aigfnow.com/feature/long-term-memory" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
