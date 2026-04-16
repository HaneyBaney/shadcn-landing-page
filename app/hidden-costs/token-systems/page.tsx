import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI Girlfriend Token Costs Explained (2026) | aigfnow.com",
  description: "Tokens, coins, moments, hearts — every AI girlfriend app uses a different currency. We converted them all to real dollar costs so you can see what you're actually paying per image, per voice minute, per video.",
  openGraph: {
    title: "AI Girlfriend Tokens – Real Cost Per Image (2026)",
    description: "We did the math. Here's what every token, coin, moment, and heart actually costs in real dollars across 8 platforms.",
    type: "article",
    url: "https://aigfnow.com/hidden-costs/token-systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend Tokens Explained",
    description: "What tokens, coins & credits actually cost in real dollars.",
  },
  alternates: {
    canonical: "https://aigfnow.com/hidden-costs/token-systems",
  },
};

interface PlatformData {
  id: string;
  name: string;
  currency: string;
  currencyType: "free" | "token";
  included: string;
  costs: { action: string; tokens: string; dollars: string; type?: "free" | "dollars" | "none" }[];
  topup: string;
  highlight?: boolean;
  url: string;
  logo?: string;
  domain: string;
}

const PLATFORMS: PlatformData[] = [
  {
    id: "aiallure",
    name: "AiAllure",
    currency: "No tokens for core features",
    currencyType: "free",
    included: "Unlimited chat, unlimited images, unlimited voice, short video clips (~3 clips/batch, up to 8 sec) are included in the base plan. Long videos (10-120 sec) cost coins: 10 sec = 100 coins ($1.00), 30 sec = 300 coins ($3.00), 120 sec = 1200 coins ($12.00).",
    costs: [
      { action: "1 image", tokens: "—", dollars: "$0.00", type: "free" },
      { action: "1 voice message", tokens: "—", dollars: "$0.00", type: "free" },
      { action: "1 short video clip", tokens: "—", dollars: "$0.00", type: "free" },
      { action: "1 long video (10-120s)", tokens: "450 AllureCoins", dollars: "~$2-4", type: "dollars" },
    ],
    topup: "AllureCoins only needed for long-form video generation and vault upgrades. Core features are truly unlimited.",
    highlight: true,
    url: "https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow",
    logo: "/logos/aiallure.png",
    domain: "aiallure.ai",
  },
  {
    id: "ourdream",
    name: "OurDream AI",
    currency: "DreamCoins",
    currencyType: "token",
    included: "Unlimited chat + 1,000 DreamCoins/month shared across images, voice, and video.",
    costs: [
      { action: "1 image", tokens: "~5 coins", dollars: "~$0.05", type: "dollars" },
      { action: "1 voice minute", tokens: "~10 coins", dollars: "~$0.10", type: "dollars" },
      { action: "1 video clip", tokens: "~50 coins", dollars: "~$0.50", type: "dollars" },
    ],
    topup: "$4.99 for 500 DreamCoins. Most users stay within limits if they don't go heavy on video.",
    url: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=2",
    logo: "/logos/ourdream-ai.png",
    domain: "ourdreamersai.com",
  },
  {
    id: "secrets",
    name: "Secrets AI",
    currency: "Moments",
    currencyType: "token",
    included: "Unlimited chat + 8,000 Moments/month for ALL media (images, voice, video).",
    costs: [
      { action: "1 image", tokens: "50-100 moments", dollars: "~$0.06-$0.12", type: "dollars" },
      { action: "1 voice message", tokens: "100-200 moments", dollars: "~$0.12-$0.25", type: "dollars" },
      { action: "1 video clip", tokens: "500-1000 moments", dollars: "~$0.62-$1.25", type: "dollars" },
    ],
    topup: "$9.99 for 10,000 moments. The 8K allowance feels generous until you mix media types — video eats moments fast.",
    url: "https://t.vlmai-1.com/389267/10381/0?aff_sub5=SF_006OG000004lmDN",
    domain: "secrets.ai",
  },
  {
    id: "gptgf",
    name: "GPTGirlfriend",
    currency: "Coins",
    currencyType: "token",
    included: "Capped chat + capped voice + 400 coins/month for images and video.",
    costs: [
      { action: "1 image", tokens: "5-10 coins", dollars: "~$0.10-$0.20", type: "dollars" },
      { action: "1 voice message", tokens: "8-12 coins", dollars: "~$0.16-$0.24", type: "dollars" },
      { action: "1 video clip", tokens: "20-40 coins", dollars: "~$0.40-$0.80", type: "dollars" },
    ],
    topup: "$9.99 for 500 coins. Best memory system of any platform — you'll generate fewer images because the conversations are better.",
    url: "https://www.gptgirlfriend.online/?ref=mgi4mjj",
    domain: "gptgirlfriend.online",
  },
  {
    id: "candy",
    name: "Candy AI",
    currency: "Tokens",
    currencyType: "token",
    included: "Unlimited chat + 100 tokens/month. All media (images, voice, video) shares tokens: 1 image = 2-4 tokens, 1 voice message = 3-5 tokens, 1 video clip = 10-20 tokens.",
    costs: [
      { action: "1 image", tokens: "2-4 tokens", dollars: "~$0.10-$0.20", type: "dollars" },
      { action: "1 voice message", tokens: "3-5 tokens", dollars: "~$0.15-$0.25", type: "dollars" },
      { action: "1 video clip", tokens: "10-20 tokens", dollars: "~$0.50-$1.00", type: "dollars" },
    ],
    topup: "$4.99 for 100 tokens. 100 tokens/month = roughly 25-50 images with nothing left for voice or video. Heavy users spend $10-15/mo on top-ups.",
    url: "https://t.crjmpx.com/389267/9022/39453",
    domain: "candy.ai",
  },
  {
    id: "mydream",
    name: "MyDreamCompanion",
    currency: "Dream Coins",
    currencyType: "token",
    included: "Capped chat + 100 Dream Coins/month for images, voice, and video.",
    costs: [
      { action: "1 image", tokens: "~5 coins", dollars: "~$0.25", type: "dollars" },
      { action: "1 voice playback", tokens: "~3 coins", dollars: "~$0.15", type: "dollars" },
      { action: "1 video clip", tokens: "~20 coins", dollars: "~$1.00", type: "dollars" },
    ],
    topup: "Coin packs available. 100 coins = roughly 20 images OR 5 videos OR 35 voice playbacks. Runs out fastest of all platforms we tested.",
    url: "https://www.mydreamcompanion.com/?linkId=lp_645321&sourceId=11754648&tenantId=dreamcompanion",
    domain: "mydreamcompanion.com",
  },
  {
    id: "secret-desires",
    name: "Secret Desires AI",
    currency: "Hearts",
    currencyType: "token",
    included: "Unlimited chat. Hearts for images and voice. No video at all.",
    costs: [
      { action: "1 image", tokens: "Hearts", dollars: "Varies", type: "dollars" },
      { action: "1 voice message", tokens: "Hearts", dollars: "Varies", type: "dollars" },
      { action: "Video", tokens: "Not available", dollars: "—", type: "none" },
    ],
    topup: "Hearts system for media generation. $6.67/mo yearly ($79.99/yr) or $7.99/mo monthly.",
    url: "https://secretdesires.ai?via=hana64",
    logo: "/logos/faviconV2.png",
    domain: "secret-desires.ai",
  },
  {
    id: "nectar",
    name: "Nectar AI",
    currency: "Credits (video only)",
    currencyType: "token",
    included: "6,000 messages/mo + 100 images/day + capped voice. Only video costs credits.",
    costs: [
      { action: "1 image", tokens: "Included (100/day)", dollars: "$0.00", type: "free" },
      { action: "1 voice message", tokens: "Included (capped)", dollars: "$0.00", type: "free" },
      { action: "1 video clip", tokens: "Credits", dollars: "Extra cost", type: "dollars" },
    ],
    topup: "Structured daily limits instead of monthly token pools. Predictable if you stay within caps. $4.99/mo yearly.",
    url: "https://nectar.ai/?_ef_transaction_id=&oid=1&affid=51",
    domain: "nectar.ai",
  },
];

const MATH_CARDS = [
  { name: "AiAllure", base: "$9.90/mo base", total: "$9.90/mo", note: "All included — no extra cost", winner: true, totalClass: "text-green-600 dark:text-green-400", url: "https://aiallure.ai" },
  { name: "OurDream AI", base: "$9.99/mo base", total: "$9.99/mo", note: "Likely within 1K coin limit", winner: false, totalClass: "text-green-600 dark:text-green-400" },
  { name: "Secrets AI", base: "$9.99/mo base", total: "~$12-15/mo", note: "May need extra moments for video", winner: false, totalClass: "text-foreground" },
  { name: "GPTGirlfriend", base: "$9.58/mo base", total: "~$15-20/mo", note: "400 coins won't cover this usage", winner: false, totalClass: "text-foreground" },
  { name: "Candy AI", base: "$3.99/mo base", total: "~$14-19/mo", note: "Need 2-3 extra token packs", winner: false, totalClass: "text-orange-600 dark:text-orange-400" },
  { name: "MyDreamCompanion", base: "$5.84/mo base", total: "~$16-22/mo", note: "100 coins barely covers 20 images", winner: false, totalClass: "text-orange-600 dark:text-orange-400" },
];

const FAQ_ITEMS = [
  {
    q: "How do AI girlfriend tokens work?",
    a: "Most platforms include unlimited text chat but charge virtual currency (tokens, coins, moments, hearts) for media — images, voice, and video. You get a monthly allowance (e.g., 100 tokens on Candy AI) and buy more when it runs out. Each action (generating an image, sending a voice message) costs a set number of tokens. The conversion rate to real dollars varies by platform.",
  },
  {
    q: "How many tokens do I need per month?",
    a: "For moderate use (5 images/day + daily voice): roughly 250-500 tokens on Candy AI (only 100 included), 600-1000 coins on GPTGirlfriend (400 included), or 4000-6000 moments on Secrets AI (8000 included). Most users exceed the free allowance within 1-2 weeks and need to buy more or switch to a platform with better included limits.",
  },
  {
    q: "Which AI girlfriend has no tokens at all?",
    a: "AiAllure at $9.90/mo yearly — unlimited images and unlimited voice with zero token cost. Only long-form video generation uses AllureCoins.",
  },
  {
    q: "Why do platforms use fake currencies instead of charging dollars?",
    a: "Psychological pricing. Spending \"50 tokens\" triggers less spending pain than spending \"$2.50.\" It also makes cross-platform comparison harder — which benefits platforms with expensive per-use costs. This guide exists to make that comparison easy.",
  },
  {
    q: "What's the real monthly cost once you factor in token purchases?",
    a: "For moderate media use: Candy AI goes from $3.99 to $14-19/mo. GPTGirlfriend from $9.58 to $15-20/mo. MyDreamCompanion from $5.84 to $16-22/mo. AiAllure stays flat at $9.90/mo. OurDream AI usually stays at $9.99/mo within its coin limit.",
  },
];

export default function TokenSystemsPage() {
  return (
    <main className="max-w-[860px] mx-auto px-5 py-12">
      {/* Header */}
      <header className="pb-10 border-b border-border mb-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground transition-colors">aigfnow.com</Link>
          {" / "}
          <Link href="/hidden-costs" className="hover:text-foreground transition-colors">Hidden Costs</Link>
          {" / Token Systems"}
        </nav>
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-500 border border-pink-500/20">Must Read</span>
          <span className="text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full bg-card text-muted-foreground border border-border">Updated April 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          How AI Girlfriend Tokens Actually Work — And What They Cost in Real Dollars
        </h1>
        <p className="text-lg text-muted-foreground font-light">
          Tokens, coins, moments, hearts, AllureCoins, DreamCoins — every platform invented its own currency. We converted them all to actual dollar costs so you can compare apples to apples.
        </p>
      </header>

      {/* TL;DR */}
      <div className="bg-card border border-border rounded-xl p-7 mb-8 relative">
        <span className="absolute -top-2.5 left-6 text-xs font-bold tracking-wider text-amber-500 bg-background px-2 font-mono">TL;DR</span>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          <strong className="text-foreground">The short version:</strong> Most platforms give you unlimited text chat but charge virtual currency for every image, voice message, and video clip. A single image costs $0.05–$0.25 in real money depending on platform. Moderate media use adds $5–$15/month on top of your subscription. <strong className="text-foreground">The exception:</strong> AiAllure includes unlimited images and voice with no token cost at $9.90/mo yearly.
        </p>
      </div>

      {/* Why Tokens Exist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Why Platforms Use Tokens Instead of Dollars</h2>
        <p className="text-[15px] text-muted-foreground font-light leading-relaxed mb-4">
          Same reason casinos use chips. Spending &quot;50 tokens&quot; feels less painful than spending &quot;$2.50.&quot; The abstraction layer makes it harder to track how much you&apos;re actually spending. Platforms know this — it&apos;s by design, not by accident.
        </p>
        <div className="bg-amber-500/10 border-l-[3px] border-amber-500 py-5 px-6 rounded-r-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">The rule:</strong> Before buying any token pack, divide the price by the number of tokens to get the real dollar cost per image. Then multiply by how many images you generate per month. That&apos;s your actual monthly spend — not the subscription price on the landing page.
          </p>
        </div>
        <p className="text-[15px] text-muted-foreground font-light leading-relaxed mt-4">
          Every platform in our index uses a different currency name, a different exchange rate, and a different included allowance. Below, we&apos;ve done the conversion math for all 8 so you don&apos;t have to.
        </p>
      </section>

      {/* Platform Breakdowns */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Platform-by-Platform: What Every Token Actually Costs</h2>
        <p className="text-[15px] text-muted-foreground font-light mb-6">
          Sorted from most transparent to most obscured. Dollar costs are approximate based on top-up pack pricing.
        </p>

        <div className="space-y-4">
          {PLATFORMS.map((p) => (
            <div
              key={p.id}
              className={`bg-card border rounded-xl p-6 transition-shadow hover:shadow-md ${
                p.highlight ? "border-amber-400" : "border-border"
              }`}
            >
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center border border-border/50">
                    {p.logo ? (
                      <Image src={p.logo} alt={p.name} width={40} height={40} className="w-full h-full object-cover" />
                    ) : (
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=64`}
                        alt={p.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    )}
                  </div>
                  <span className="text-lg font-bold">{p.name}</span>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  p.currencyType === "free"
                    ? "bg-green-500/10 text-green-600 dark:text-green-400"
                    : "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                }`}>
                  {p.currency}
                </span>
              </div>

              <p className="text-sm text-muted-foreground font-light mb-4">
                <strong className="text-foreground font-semibold">Included:</strong> {p.included}
              </p>

              {/* Cost Table */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left text-xs font-bold uppercase tracking-wide text-muted-foreground py-2">Action</th>
                      <th className="text-left text-xs font-bold uppercase tracking-wide text-muted-foreground py-2">Currency cost</th>
                      <th className="text-left text-xs font-bold uppercase tracking-wide text-muted-foreground py-2">Real $ cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.costs.map((cost, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="py-2 font-medium text-foreground">{cost.action}</td>
                        <td className={`py-2 font-mono font-medium ${cost.type === "none" ? "text-red-500" : ""}`}>{cost.tokens}</td>
                        <td className={`py-2 font-mono font-semibold ${
                          cost.type === "free" ? "text-green-600 dark:text-green-400" :
                          cost.type === "none" ? "text-red-500" :
                          "text-orange-600 dark:text-orange-400"
                        }`}>
                          {cost.dollars}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground font-light">
                  <strong className="text-muted-foreground font-medium">Top-up:</strong> {p.topup}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-sm font-semibold px-5 py-2 rounded-full transition-all shrink-0 ${
                    p.highlight
                      ? "bg-foreground text-amber-400 hover:opacity-90"
                      : "border border-border text-foreground hover:border-foreground"
                  }`}
                >
                  Try Free →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Real Math */}
      <div className="bg-card border border-border rounded-xl p-8 mb-8">
        <h2 className="text-xl font-bold mb-1">The Real Math: What Moderate Use Actually Costs</h2>
        <p className="text-sm text-muted-foreground font-light mb-5">
          Not the subscription price — the real monthly spend for someone who generates images, uses voice, and occasionally watches video.
        </p>

        <div className="bg-muted/50 rounded-lg p-4 mb-5 text-sm text-muted-foreground font-light">
          <strong className="text-foreground font-semibold">Scenario:</strong> 50 images + 30 voice messages + 5 video clips per month. That&apos;s roughly 2 images/day and a voice message every day — moderate, not heavy.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MATH_CARDS.map((card) => (
            <div
              key={card.name}
              className={`p-5 rounded-lg border ${
                card.winner ? "border-amber-400 bg-amber-500/5" : "border-border"
              }`}
            >
              <p className="text-sm font-bold mb-1">{card.name}</p>
              <p className="text-xs text-muted-foreground">{card.base}</p>
              <p className={`font-mono text-2xl font-bold my-2 ${card.totalClass}`}>{card.total}</p>
              <p className="text-xs text-muted-foreground font-light">{card.note}</p>
              {card.winner && card.url && (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold px-4 py-1.5 rounded-full bg-foreground text-amber-400 mt-2"
                >
                  Best Value →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Inline CTA */}
      <div className="bg-card border-2 border-amber-400 rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-foreground">
            <strong>The &quot;cheapest&quot; plan isn&apos;t cheapest once you use it.</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            See all platforms ranked by what you actually pay — not the sticker price.
          </p>
        </div>
        <Link
          href="/feature/cheapest"
          className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 rounded-full bg-amber-400 text-foreground hover:shadow-lg transition-shadow whitespace-nowrap"
        >
          Real Prices →
        </Link>
      </div>

      {/* Cross-links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
        <Link href="/feature/no-tokens" className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground transition-colors">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</p>
          <p className="font-semibold text-foreground mb-1">No Token Platforms →</p>
          <p className="text-sm text-muted-foreground font-light">Flat-rate plans with no coin systems.</p>
        </Link>
        <Link href="/feature/cheapest" className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground transition-colors">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</p>
          <p className="font-semibold text-foreground mb-1">Cheapest Plans →</p>
          <p className="text-sm text-muted-foreground font-light">All 8 sorted by actual monthly cost.</p>
        </Link>
        <Link href="/feature/unlimited-images" className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground transition-colors">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</p>
          <p className="font-semibold text-foreground mb-1">Unlimited Images →</p>
          <p className="text-sm text-muted-foreground font-light">Only 1 platform has no image cap.</p>
        </Link>
        <Link href="/match" className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground transition-colors">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Tool</p>
          <p className="font-semibold text-foreground mb-1">Find My App →</p>
          <p className="text-sm text-muted-foreground font-light">Live algorithm matches you to the best platform.</p>
        </Link>
      </div>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-5">Token System Questions</h2>
        <div className="divide-y divide-border">
          {FAQ_ITEMS.map((item, i) => (
            <details key={i} className="group">
              <summary className="flex justify-between items-center gap-3 py-4 cursor-pointer list-none text-[15px] font-semibold text-foreground">
                {item.q}
                <span className="font-mono text-lg text-muted-foreground group-open:hidden">+</span>
                <span className="font-mono text-lg text-muted-foreground hidden group-open:inline">−</span>
              </summary>
              <p className="text-sm text-muted-foreground font-light leading-relaxed pb-4">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-card border-2 border-amber-400 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-foreground">
            <strong>Stop guessing what tokens cost.</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            Use our live matcher to find the platform that fits your budget and usage.
          </p>
        </div>
        <Link
          href="/match"
          className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 rounded-full bg-amber-400 text-foreground hover:shadow-lg transition-shadow whitespace-nowrap"
        >
          Find My App →
        </Link>
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground font-light">
          Data from pricing pages and top-up stores · Updated April 2026 · <Link href="/how-we-test" className="text-muted-foreground hover:text-foreground">How we rank</Link> · Affiliate links
        </p>
      </footer>
    </main>
  );
}
