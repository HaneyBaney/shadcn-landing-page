import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI GF Now",
  description: "AI GF Now's privacy policy - how we collect, use, and protect your information when you visit our site.",
  openGraph: {
    title: "Privacy Policy | AI GF Now",
    description: "Your privacy matters. Learn how AI GF Now handles your data.",
    type: "website",
    url: "https://aigfnow.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        
        <p className="text-muted-foreground mb-6">
          <strong>Effective:</strong> January 2025<br />
          <strong>Last Updated:</strong> January 2025
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="text-muted-foreground mb-6">
          We collect information automatically when you visit our site:
        </p>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>IP address and browsing behavior</li>
          <li>Device and browser information</li>
          <li>Pages visited and time spent</li>
          <li>Referral source</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use This Information</h2>
        <p className="text-muted-foreground mb-6">
          We use collected data to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>Improve our website and content</li>
          <li>Analyze traffic patterns</li>
          <li>Understand user preferences</li>
          <li>Provide relevant content recommendations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p className="text-muted-foreground mb-6">
          We use third-party services that may collect data:
        </p>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>Google Analytics for website analytics</li>
          <li>Affiliate networks for tracking referrals</li>
          <li>Content delivery networks for performance</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
        <p className="text-muted-foreground mb-6">
          We use cookies to enhance your experience. You can control cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing</h2>
        <p className="text-muted-foreground mb-6">
          We don't sell personal information. We may share anonymized data with analytics providers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="text-muted-foreground mb-6">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-muted-foreground">
          <li>Access data we collect about you</li>
          <li>Request data deletion</li>
          <li>Opt out of analytics tracking</li>
          <li>Control cookie preferences</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-muted-foreground">
          If you have questions about this privacy policy or our data practices, please contact us.
        </p>

        <p className="text-muted-foreground mt-8">
          <strong>This policy may be updated periodically.</strong> Changes will be posted on this page with a new effective date.
        </p>
      </div>
    </div>
  );
}
