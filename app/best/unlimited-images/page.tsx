import { Metadata } from "next";
import { FeaturePage } from "@/components/layout/feature-page";

export const metadata: Metadata = {
  title: "Best AI Girlfriend Apps With Unlimited Image Generation (2026)",
  description:
    "Only some AI companion apps include unlimited images in the subscription. We ranked every platform by actual image coverage — not marketing claims.",
};

export default function UnlimitedImagesPage() {
  return (
    <FeaturePage
      title="Best AI Companion Apps With Unlimited Image Generation (2026)"
      subtitle="Unlimited Images"
      description="Most AI companion apps advertise image generation but quietly charge per image through token or coin systems. We tested every platform and ranked them by what's actually included in your subscription."
      featureKey="images"
      angle="'Unlimited images' rarely means unlimited. Here's which platforms actually include image generation — and which ones hit you with a coin wall after the first few."
    />
  );
}
