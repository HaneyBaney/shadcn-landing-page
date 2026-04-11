import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Rank AI Girlfriend Apps — Value Index™ Methodology | aigfnow.com",
  description: "Our Value Index™ ranks AI girlfriend apps by feature access and pricing using a geometric mean formula. No opinions — just data from official pricing pages, updated monthly.",
  keywords: "AI girlfriend comparison, AI girlfriend pricing, AI companion value, best AI girlfriend app, AI girlfriend subscription cost",
  openGraph: {
    title: "How We Rank AI Girlfriend Apps — Value Index™ Methodology",
    description: "The only AI girlfriend comparison that uses math instead of opinions. Feature access ÷ price = your Value Index score.",
    type: "article",
    url: "https://aigfnow.com/how-we-test",
    siteName: "aigfnow.com",
    images: [
      {
        url: "https://aigfnow.com/hero-image-dark.jpeg",
        width: 1200,
        height: 630,
        alt: "AI GF Now - Value Index Methodology",
      },
    ],
    videos: [
      {
        url: "https://aigfnow.com/videos/methodology-video..mp4",
        type: "video/mp4",
        width: 1920,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Rank AI Girlfriend Apps — Value Index™ Methodology",
    description: "The only AI girlfriend comparison that uses math instead of opinions. Feature access ÷ price = your Value Index score.",
    images: ["https://aigfnow.com/hero-image-dark.jpeg"],
  },
  alternates: {
    canonical: "https://aigfnow.com/how-we-test",
  },
};

export default function HowWeTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
