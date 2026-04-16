import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Girlfriend Apps With Video (2026) | aigfnow.com",
  description: "Video is the most marketed and least delivered feature in AI girlfriend apps. We tested every platform — here's who includes video and what it actually costs.",
  openGraph: {
    title: "AI Girlfriend Apps With Video (2026) | aigfnow.com",
    description: "Video is the most marketed and least delivered feature. Here's who includes video and what it costs.",
    type: "article",
    url: "https://aigfnow.com/feature/video-generation",
    siteName: "aigfnow.com",
    images: [{ url: "https://aigfnow.com/hero-image-dark.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend Apps With Video (2026)",
    description: "Video is the most marketed and least delivered feature. Here's who actually delivers.",
    images: ["https://aigfnow.com/hero-image-dark.jpeg"],
  },
  alternates: { canonical: "https://aigfnow.com/feature/video-generation" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
