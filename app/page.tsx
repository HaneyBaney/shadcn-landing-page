import { CommunitySection } from "@/components/layout/sections/community";
import { FAQSection } from "@/components/layout/sections/faq";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { PlatformShowcase } from "@/components/layout/sections/team";
import { DragCompareSection } from "@/components/layout/sections/drag-compare";
import { rankedPlatforms } from "@/data/ranked-platforms";
import { getPlatform } from "@/lib/platforms";

export const metadata = {
  title: "AI GF Now — AI Girlfriend Apps Ranked by Value Index™ (2026)",
  description: "AI girlfriend apps scored by a mathematical formula: feature access × price efficiency. Geometric mean ranking — same method the UN uses for HDI. No opinions, just data.",
  openGraph: {
    type: "website",
    url: "https://aigfnow.com",
    title: "AI GF Now — AI Girlfriend Apps Ranked by Value Index™ (2026)",
    description: "AI girlfriend apps scored by a mathematical formula: feature access × price efficiency. Geometric mean ranking — same method the UN uses for HDI.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI GF Now — AI Girlfriend Apps Ranked by Value Index",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI GF Now — AI Girlfriend Apps Ranked by Value Index™ (2026)",
    description: "Mathematical scoring of AI girlfriend apps. Feature access × price efficiency. No opinions, just data from pricing pages.",
  },
  alternates: {
    canonical: "https://aigfnow.com",
  },
};

export default function Home() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best AI Girlfriend Apps Ranked by Value Index (2026)",
    description: "AI girlfriend platforms ranked by the Value Index — a geometric mean of feature coverage and price efficiency. Updated monthly.",
    numberOfItems: rankedPlatforms.length,
    itemListElement: rankedPlatforms.map((platform, i) => {
      const p = getPlatform(platform.meta.slug);
      return {
        "@type": "ListItem",
        position: i + 1,
        name: platform.meta.name,
        url: platform.meta.affiliateUrl,
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <HeroSection />
      <DragCompareSection />
      <SponsorsSection />
      <PlatformShowcase />
      <CommunitySection />
      <FAQSection />
    </>
  );
}
