import { Metadata } from "next";
import { FeaturePage } from "@/components/layout/feature-page";

export const metadata: Metadata = {
  title: "Best AI Companion Apps With Long-Term Memory (2026)",
  description:
    "Most AI companions forget you after a few messages. These platforms actually remember your conversations, preferences, and relationship history.",
};

export default function MemoryPage() {
  return (
    <FeaturePage
      title="Best AI Companion Apps With Long-Term Memory (2026)"
      subtitle="Long-Term Memory"
      description="Memory is what separates a chatbot from a companion. Most platforms offer basic context memory that fades after a few conversations. A small number actually persist your history, preferences, and relationship details over time."
      featureKey="memory"
      angle="Memory is the feature that makes an AI companion feel real. Most platforms offer just enough to seem like they have it — then forget you a week later."
    />
  );
}
