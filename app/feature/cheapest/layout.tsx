import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheapest AI Girlfriend Apps 2026 — Real Prices Tested | aigfnow.com",
  description: "All 8 AI girlfriend apps sorted by actual monthly cost. Candy AI $3.99/mo cheapest, AiAllure $9.90/mo best value (84/100). Tested with real accounts.",
  keywords: "cheapest AI girlfriend app, AI girlfriend pricing, AI companion cost, budget AI girlfriend, affordable AI girlfriend",
  openGraph: {
    title: "Cheapest AI Girlfriend Apps 2026 — Real Prices Tested",
    description: "All 8 AI girlfriend apps sorted by actual monthly cost. Candy AI $3.99/mo cheapest, AiAllure $9.90/mo best value.",
    type: "article",
    url: "https://www.aigfnow.com/feature/cheapest",
    siteName: "aigfnow.com",
    images: [
      {
        url: "https://www.aigfnow.com/hero-image-dark.jpeg",
        width: 1200,
        height: 630,
        alt: "Cheapest AI Girlfriend Apps 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheapest AI Girlfriend Apps 2026 — Real Prices Tested",
    description: "All 8 AI girlfriend apps sorted by actual monthly cost. Tested with real accounts.",
    images: ["https://www.aigfnow.com/hero-image-dark.jpeg"],
  },
  alternates: {
    canonical: "https://www.aigfnow.com/feature/cheapest",
  },
};

export default function CheapestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
