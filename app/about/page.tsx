import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AI GF Now - Honest AI Companion Reviews",
  description: "Learn about AI GF Now's mission to provide honest, data-driven reviews of AI companion apps. Our testing methodology and commitment to transparency.",
  openGraph: {
    title: "About AI GF Now - Our Mission",
    description: "Honest, data-driven reviews of AI companion apps. No sponsored content, just real testing results.",
    type: "website",
    url: "https://aigfnow.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-6">About AI GF Now</h1>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-muted-foreground mb-6">
          AI GF Now provides honest, data-driven reviews of AI companion platforms. We cut through the marketing hype to give you real insights about features, pricing, and user experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Test</h2>
        <p className="text-muted-foreground mb-4">
          Every platform we review is thoroughly tested by our team. We:
        </p>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>Create real accounts and test features</li>
          <li>Document actual user experiences</li>
          <li>Verify pricing and feature claims</li>
          <li>Update rankings monthly based on current data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">No Sponsored Content</h2>
        <p className="text-muted-foreground mb-6">
          We don't accept payment for positive reviews. Our rankings are based solely on our testing and analysis. Affiliate links help fund our testing but don't influence our ratings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-muted-foreground">
          Have questions or feedback? We'd love to hear from you. Your input helps us improve our reviews and testing methodology.
        </p>
      </div>
    </div>
  );
}
