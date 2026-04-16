import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Girlfriend Voice Calls (2026) | aigfnow.com",
  description: "Which AI girlfriend apps include voice calls? Only AiAllure offers unlimited voice. See who caps minutes, who charges credits, and what real-time voice actually sounds like.",
  openGraph: {
    title: "AI Girlfriend Voice Calls (2026) | aigfnow.com",
    description: "Which AI girlfriend apps include voice calls? Only AiAllure offers unlimited voice.",
    type: "article",
    url: "https://aigfnow.com/feature/voice-calls",
    siteName: "aigfnow.com",
    images: [{ url: "https://aigfnow.com/hero-image-dark.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend Apps With Voice Calls (2026)",
    description: "Which AI girlfriend apps include voice calls? Only AiAllure offers unlimited voice.",
    images: ["https://aigfnow.com/hero-image-dark.jpeg"],
  },
  alternates: { canonical: "https://aigfnow.com/feature/voice-calls" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
