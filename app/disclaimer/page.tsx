import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | AI GF Now",
  description: "AI GF Now's affiliate disclosure - transparency about our affiliate relationships and how we fund our testing.",
  openGraph: {
    title: "Affiliate Disclosure | AI GF Now",
    description: "Full transparency about our affiliate relationships and testing independence.",
    type: "website",
    url: "https://aigfnow.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-6">Affiliate Disclosure</h1>
        
        <p className="text-muted-foreground mb-6">
          <strong>Effective:</strong> January 2025<br />
          <strong>Last Updated:</strong> January 2025
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Promise to You</h2>
        <p className="text-muted-foreground mb-6">
          AI GF Now is committed to honest, unbiased reviews. Our affiliate relationships don't influence our ratings, rankings, or recommendations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We're Funded</h2>
        <p className="text-muted-foreground mb-6">
          We participate in affiliate programs for AI companion platforms. When you click our links and make a purchase, we may earn a commission at no extra cost to you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Partners</h2>
        <p className="text-muted-foreground mb-6">
          We have affiliate relationships with:
        </p>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>AiAllure</li>
          <li>OurDream AI</li>
          <li>Candy AI</li>
          <li>Secrets AI</li>
          <li>And other AI companion platforms</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">No Paid Reviews</h2>
        <p className="text-muted-foreground mb-6">
          We don't accept payment for:
        </p>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>Positive reviews</li>
          <li>Better rankings</li>
          <li>Featured placement</li>
          <li>Removing negative feedback</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Testing Independence</h2>
        <p className="text-muted-foreground mb-6">
          Our testing process is completely independent:
        </p>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>We purchase our own subscriptions</li>
          <li>We test features thoroughly</li>
          <li>We document real user experiences</li>
          <li>We update rankings monthly based on performance</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Transparency Matters</h2>
        <p className="text-muted-foreground mb-6">
          We clearly mark affiliate links throughout our site. You're never required to use our links, and you can always visit platforms directly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Questions?</h2>
        <p className="text-muted-foreground">
          If you have questions about our affiliate relationships or testing methodology, please contact us. We believe in complete transparency.
        </p>

        <p className="text-muted-foreground mt-8">
          <strong>Thank you for supporting our independent testing.</strong> Your trust is important to us.
        </p>
      </div>
    </div>
  );
}
