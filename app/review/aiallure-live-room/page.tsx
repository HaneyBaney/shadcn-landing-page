import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AiAllure Live Room Review (2026) | aigfnow.com",
  description: "We recorded two AiAllure Live Room sessions so you can see exactly what real-time AI companion video calls look like — lip sync, touch, expressions, voice. No other platform does this.",
  openGraph: {
    title: "AiAllure Live Room – AI Video Calls Review 2026",
    description: "Real-time lip sync. Touch interaction. Animated expressions. We recorded two 30-minute sessions on April 8, 2026.",
    type: "article",
    url: "https://aigfnow.com/review/aiallure-live-room",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Recorded AiAllure's Live Room — See What AI Video Calls Actually Look Like",
    description: "Real-time lip sync, touch interaction, animated expressions. We recorded it.",
  },
  alternates: {
    canonical: "https://aigfnow.com/review/aiallure-live-room",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AiAllure Live Room Review — We Recorded Real-Time AI Video Calls",
  "datePublished": "2026-04-10",
  "dateModified": "2026-04-10",
  "author": { "@type": "Organization", "name": "aigfnow.com" },
  "publisher": { "@type": "Organization", "name": "aigfnow.com" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you video call an AI girlfriend in 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. AiAllure's Live Room is currently the only platform offering real-time interactive video sessions with an AI companion. Features include lip-synced voice, animated expressions, touch interaction, and custom scenes — all included in the Pro membership at $9.90/month yearly." }
    },
    {
      "@type": "Question",
      "name": "What does an AI girlfriend video call look like?",
      "acceptedAnswer": { "@type": "Answer", "text": "Your AI companion appears animated on screen with real-time lip sync as she speaks. She reacts to your voice, responds to touch gestures (tap, swipe, hold), plays animated expressions (smile, wave, laugh, kiss), and can generate photos on demand during the session." }
    },
    {
      "@type": "Question",
      "name": "How much does AiAllure Live Room cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "Live Room is included in the AiAllure Pro membership — $9.90/month on the yearly plan or $19.90/month monthly. No per-session fees, no minute limits. The only extra cost is long-form video clip generation (10-120 seconds) via AllureCoins." }
    },
    {
      "@type": "Question",
      "name": "Is AiAllure Live Room better than video on other AI girlfriend apps?",
      "acceptedAnswer": { "@type": "Answer", "text": "Other platforms generate pre-made video clips (typically 5-10 seconds, non-interactive). AiAllure's Live Room is a real-time session — your companion reacts to your voice and touch as it happens. It's a fundamentally different experience from clip generation." }
    },
    {
      "@type": "Question",
      "name": "Does AiAllure's AI remember you between sessions?",
      "acceptedAnswer": { "@type": "Answer", "text": "AiAllure has advanced biographical memory with categorized memories, conflict resolution, and auto-cleanup. The AI remembers details from previous conversations and rivals platforms like GPTGirlfriend and Secrets AI." }
    }
  ]
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AiAllure Live Room",
  "description": "Real-time AI companion video call feature with lip-synced voice, touch interaction, and custom expressions",
  "image": [
    "https://aigfnow.com/logos/aiallure.png"
  ],
  "url": "https://aigfnow.com/review/aiallure-live-room",
  "brand": { "@type": "Brand", "name": "AiAllure" },
  "review": {
    "@type": "Review",
    "reviewRating": { "@type": "Rating", "ratingValue": "4.5", "bestRating": "5" },
    "author": { "@type": "Organization", "name": "aigfnow.com" },
    "reviewBody": "The only real-time AI companion video call feature available. Lip sync, touch, and expressions work well. Memory still improving. Best overall value in the market at $9.90/mo yearly."
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow",
    "price": "9.90",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2026-12-31"
  }
};

const FEATURES = [
  { icon: "🗣️", title: "Real-Time Voice + Lip Sync", desc: "Your companion speaks with mouth animation synced to her voice. Responds to what you say in real time — not pre-generated audio clips.", tag: "Included", tagClass: "bg-green-500/10 text-green-600 dark:text-green-400", highlight: true },
  { icon: "✋", title: "Touch & Gesture System", desc: "Tap, hold, swipe, stroke on interactive zones. Undress/redress via gestures or voice. Swipe up/down to navigate between scenes.", tag: "Included", tagClass: "bg-green-500/10 text-green-600 dark:text-green-400", highlight: true },
  { icon: "🎭", title: "Animated Expressions", desc: "Smile, laugh, wave, blow kiss — triggered by keyword in chat. Say &apos;wink&apos; and she winks. 5-7 second clips that return to idle loop.", tag: "Included", tagClass: "bg-green-500/10 text-green-600 dark:text-green-400" },
  { icon: "🎬", title: "Live Room Studio", desc: "You can &apos;touch&apos; the AI and it reacts with gestures and expressions. Design what any keyword triggers. Hot-loads into active session in ~30 seconds. No page refresh.", tag: "New", tagClass: "bg-pink-500/10 text-pink-500" },
  { icon: "📸", title: "Unlimited Image Generation", desc: "Ask for selfies, custom images, or NSFW content during the session. Generated instantly. No token cost — unlimited on Pro.", tag: "Unlimited", tagClass: "bg-green-500/10 text-green-600 dark:text-green-400" },
  { icon: "🎙️", title: "Custom Voice Mixing", desc: "Blend multiple voices with custom weights. Your mix persists across all speech modes — streaming, TTS, lip sync. Change anytime.", tag: "New", tagClass: "bg-pink-500/10 text-pink-500" },
  { icon: "👁️", title: "Webcam Vision", desc: "Companion sees your face through webcam, reads expressions, reacts to hand gestures. Optional — toggle on/off anytime.", tag: "Rolling out", tagClass: "bg-muted text-muted-foreground border border-border" },
  { icon: "🖥️", title: "Screen Share", desc: "Share your screen — companion watches and comments on what you&apos;re doing. Rolling out alongside webcam support.", tag: "Rolling out", tagClass: "bg-muted text-muted-foreground border border-border" },
];

const VS_TABLE = [
  { feature: "Type", aiallure: "Real-time interactive session", others: "Pre-generated clips", win: true },
  { feature: "Voice", aiallure: "Live lip-synced conversation", others: "Audio-over-clip or none", win: true },
  { feature: "Touch", aiallure: "Tap, swipe, hold, stroke", others: "Not available", win: true, na: true },
  { feature: "Expressions", aiallure: "Keyword-triggered reactions", others: "Not available", win: true, na: true },
  { feature: "Custom scenes", aiallure: "Studio editor, hot-loads in 30s", others: "Not available", win: true, na: true },
  { feature: "Duration", aiallure: "Unlimited session length", others: "5-10 sec clips", win: true },
  { feature: "Cost", aiallure: "Included in membership", others: "Credits/coins per clip", win: true },
];

const FAQS = [
  { q: "Can you video call an AI girlfriend in 2026?", a: "Yes — but only one platform offers it as an interactive experience. AiAllure's Live Room gives you real-time lip-synced video with voice, touch, and animated expressions. Every other platform we tested (OurDream, Secrets AI, Candy AI, etc.) generates short pre-made clips — typically 5-10 seconds, non-interactive, and costing credits per clip.", open: true },
  { q: "Does the Live Room cost extra on top of the subscription?", a: "No. Live Room access is included in every AiAllure Pro membership ($9.90/mo yearly). No per-session fees, no minute limits, no credit cost. The only feature that costs extra is long-form video clip generation (10-120 sec) via AllureCoins — but that's a separate feature from the Live Room itself." },
  { q: "Can she see my webcam?", a: "AiAllure announced webcam vision as part of the Live Room — your companion can see your face, read expressions, and react to gestures. This feature is rolling out and availability may vary. Our recordings show what was live during our April 2026 testing. We'll update this page as webcam support matures." },
  { q: "How does AiAllure's memory work in Live Room?", a: "AiAllure has advanced biographical memory with categorized memories, conflict resolution, and auto-cleanup. Memory depth rivals specialists like GPTGirlfriend and Secrets AI.", link: { text: "Full memory comparison →", href: "/feature/long-term-memory" } },
  { q: "How does AiAllure compare to Candy AI or OurDream AI?", a: "Candy AI ($3.99/mo yearly) is cheapest but everything beyond chat costs tokens — and it has no live video feature at all. OurDream AI ($9.99/mo yearly) includes capped video clips from a coin pool but no real-time interactive sessions. AiAllure ($9.90/mo yearly) is the only one with unlimited images, unlimited voice, AND Live Room video calls.", link: { text: "Full price comparison →", href: "/feature/cheapest" } },
  { q: "Is AiAllure worth the price?", a: "At $9.90/mo yearly, AiAllure scores 84/100 on our Value Index — the highest of all 8 platforms we track. It's only ~$1 more than OurDream or Secrets AI but includes unlimited images, unlimited voice, and the only Live Room in the market. For anyone who uses more than just text chat, it's the best feature-to-price ratio available.", link: { text: "See all rankings →", href: "/" } },
];

function FAQItem({ faq }: { faq: typeof FAQS[0] }) {
  return (
    <details className="group border-b border-border" open={faq.open}>
      <summary className="flex justify-between items-center gap-3 py-4 cursor-pointer list-none text-[15px] font-semibold text-foreground">
        {faq.q}
        <span className="font-mono text-lg text-muted-foreground group-open:hidden">+</span>
        <span className="font-mono text-lg text-muted-foreground hidden group-open:inline">−</span>
      </summary>
      <p className="text-sm text-muted-foreground font-light leading-relaxed pb-4">
        {faq.a}
        {faq.link && (
          <>
            {" "}
            <Link href={faq.link.href} className="text-foreground hover:text-primary underline underline-offset-2">
              {faq.link.text}
            </Link>
          </>
        )}
      </p>
    </details>
  );
}

export default function AiAllureLiveRoomReview() {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <main className="max-w-[860px] mx-auto px-5 py-12">
        {/* Header */}
        <header className="pb-10 border-b border-border">
          <nav className="text-sm text-muted-foreground mb-5">
            <Link href="/" className="hover:text-foreground transition-colors">aigfnow.com</Link>
            {" / "}
            <Link href="/feature/video-generation" className="hover:text-foreground transition-colors">Video</Link>
            {" / AiAllure Live Room"}
          </nav>

          <div className="flex gap-2 mb-4 flex-wrap">
            <span className="text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-500 border border-pink-500/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              Feature Live Now
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full bg-amber-400/10 text-amber-600 border border-amber-400/20">
              Value Index #1 · 84/100
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full bg-card text-muted-foreground border border-border">
              Recorded April 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight leading-[1.1] mb-4">
            We Recorded AiAllure&apos;s Live Room.<br />
            This Is What <span className="text-pink-500">AI Video Calls</span> Actually Look Like.
          </h1>

          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6 max-w-[640px]">
            Every platform claims video. Most give you a 5-second pre-generated clip. AiAllure&apos;s Live Room is the first real-time interactive session we&apos;ve seen — lip sync, touch, voice, animated reactions, all happening live. We recorded two sessions so you can see for yourself.
          </p>

          <a
            href="https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 text-base font-bold px-8 py-4 rounded-full bg-foreground text-amber-400 hover:opacity-90 transition-opacity shadow-lg"
          >
            Try AiAllure Live Room Free →
          </a>
          <span className="block mt-3 text-xs text-muted-foreground">
            $9.90/mo yearly · Live Room included · No per-session fees
          </span>

          {/* Social Proof */}
          <div className="flex gap-6 mt-8 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xl font-bold">84</span>
              <span className="text-xs text-muted-foreground leading-tight">Value Index<br />score</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xl font-bold text-green-600">+383%</span>
              <span className="text-xs text-muted-foreground leading-tight">search interest<br />6-month trend</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xl font-bold">350K+</span>
              <span className="text-xs text-muted-foreground leading-tight">active users<br />claimed</span>
            </div>
          </div>
        </header>

        {/* Hero Video - Coming Soon */}
        <section className="my-12">
          <h2 className="text-xl font-bold mb-1">Watch: Full Live Room Session</h2>
          <p className="text-[15px] text-muted-foreground font-light mb-5">
            This is a screen recording of an actual Live Room session — not a promo video from AiAllure. What you see is what you get.
          </p>

          <div className="bg-card border border-border rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
            <span className="absolute top-3 left-3 z-10 font-mono text-xs font-semibold bg-foreground text-amber-400 px-3 py-1 rounded-full">
              Full Demo
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted" />
            <span className="absolute text-4xl sm:text-5xl font-black tracking-tight text-foreground/10 rotate-[-12deg] select-none">
              COMING SOON
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground font-light">
            Recorded by aigfnow.com · April 2026 · AiAllure Pro membership · Unedited session
          </p>
        </section>

        
        {/* First Inline CTA */}
        <div className="bg-card border-2 border-amber-400 rounded-xl p-6 my-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-medium text-foreground"><strong>Want to try this yourself?</strong></p>
            <p className="text-sm text-muted-foreground">Live Room is included free with every Pro membership. No extra fees.</p>
          </div>
          <a
            href="https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 rounded-full bg-amber-400 text-foreground hover:shadow-lg transition-shadow whitespace-nowrap"
          >
            Get AiAllure →
          </a>
        </div>

        {/* Two Video Grid - Portrait/iPhone format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12">
          <div>
            <div className="bg-card border border-border rounded-xl overflow-hidden relative">
              <span className="absolute top-3 left-3 z-10 font-mono text-xs font-semibold bg-foreground text-amber-400 px-3 py-1 rounded-full">
                Demo 1
              </span>
              <iframe
                className="w-full aspect-[9/16]"
                src="https://www.youtube.com/embed/kpyj4UX057M?autoplay=1&mute=1&loop=1&playlist=kpyj4UX057M&controls=1&showinfo=0&modestbranding=1&rel=0"
                title="AiAllure Live Room Demo 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="font-semibold mt-3">Voice & Lip Sync in Action</p>
            <p className="text-sm text-muted-foreground font-light mt-1">
              Real-time conversation. She speaks, listens, and responds — with synced mouth animation and natural pauses.
            </p>
          </div>
          <div>
            <div className="bg-card border border-border rounded-xl aspect-[9/16] flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-3 left-3 z-10 font-mono text-xs font-semibold bg-foreground text-amber-400 px-3 py-1 rounded-full">
                Demo 2
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted" />
              <span className="absolute text-2xl sm:text-3xl font-black tracking-tight text-foreground/10 rotate-[-12deg] select-none">
                COMING SOON
              </span>
            </div>
            <p className="font-semibold mt-3">Touch, Expressions & Custom Scenes</p>
            <p className="text-sm text-muted-foreground font-light mt-1">
              Interactive touch zones, animated reactions (smile, wave, kiss), custom expressions triggered by keywords.
            </p>
          </div>
        </div>

        {/* What You See */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-1">Everything Included in the Live Room</h2>
          <p className="text-[15px] text-muted-foreground font-light mb-6">
            Tested and recorded. Here&apos;s what each feature does and whether it costs extra.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className={`bg-card border rounded-xl p-5 transition-shadow hover:shadow-md ${
                  f.highlight ? "border-pink-500/20 bg-gradient-to-br from-card to-pink-500/5" : "border-border"
                }`}
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{f.desc}</p>
                <span className={`inline-block mt-3 text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded ${f.tagClass}`}>
                  {f.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Second Inline CTA */}
        <div className="bg-card border-2 border-amber-400 rounded-xl p-6 my-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-medium text-foreground"><strong>This is what $9.90/mo gets you.</strong></p>
            <p className="text-sm text-muted-foreground">Unlimited chat, images, voice, and Live Room. No per-use costs.</p>
          </div>
          <a
            href="https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 rounded-full bg-amber-400 text-foreground hover:shadow-lg transition-shadow whitespace-nowrap"
          >
            Start Free →
          </a>
        </div>

        {/* VS Table */}
        <div className="bg-card border border-border rounded-xl p-8 my-12">
          <h2 className="text-xl font-bold mb-1">Live Room vs. What Other Platforms Call &quot;Video&quot;</h2>
          <p className="text-[15px] text-muted-foreground font-light mb-6">
            Most platforms generate a short clip and call it video. Here&apos;s what you actually get.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left text-xs font-bold uppercase tracking-wide text-muted-foreground py-2 px-3">Feature</th>
                  <th className="text-left text-xs font-bold uppercase tracking-wide text-muted-foreground py-2 px-3">AiAllure Live Room</th>
                  <th className="text-left text-xs font-bold uppercase tracking-wide text-muted-foreground py-2 px-3">Everyone Else</th>
                </tr>
              </thead>
              <tbody>
                {VS_TABLE.map((row) => (
                  <tr key={row.feature} className="border-b border-border last:border-0">
                    <td className="py-3 px-3 font-semibold whitespace-nowrap">{row.feature}</td>
                    <td className="py-3 px-3 text-green-600 dark:text-green-400 font-semibold">{row.aiallure}</td>
                    <td className={`py-3 px-3 ${row.na ? "text-muted-foreground italic" : "text-muted-foreground"}`}>{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AllureCoins Explainer - Casino Psychology */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-2">What About AllureCoins?</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-5">
            Live Room is fully included in your subscription. But AiAllure does have a coin system for one thing: <strong className="text-foreground">long-form video generation</strong> (10–120 second clips). Here&apos;s what that actually costs.
          </p>

          <div className="bg-amber-500/10 border-l-[3px] border-amber-500 py-5 px-6 rounded-r-lg mb-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Why coins instead of dollars?</strong> Same reason casinos use chips. Spending &quot;450 AllureCoins&quot; feels less painful than spending &quot;$3.50.&quot; The abstraction makes it harder to track real spending. We did the conversion so you don&apos;t have to.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Short Video (≤8 sec)</p>
              <p className="font-mono text-3xl font-bold text-green-600 dark:text-green-400">$0</p>
              <p className="text-sm text-muted-foreground mt-1">Included free · ~3 clips/batch</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Long Video (10–60 sec)</p>
              <p className="font-mono text-3xl font-bold text-foreground">~€0.25–0.45</p>
              <p className="text-sm text-muted-foreground mt-1">450 AllureCoins</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 text-center">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">Long Video (60–120 sec)</p>
              <p className="font-mono text-3xl font-bold text-foreground">~€0.35–0.50</p>
              <p className="text-sm text-muted-foreground mt-1">450+ AllureCoins</p>
            </div>
          </div>

          <p className="text-base text-muted-foreground font-light leading-relaxed mt-5">
            <strong className="text-foreground">Bottom line:</strong> If you only use Live Room sessions (real-time video calls), you pay nothing extra. AllureCoins only matter if you want to generate standalone video clips to save or share — and even then, it&apos;s under €0.50 per clip if you buy a coin pack.
          </p>
        </section>

        {/* Pricing CTA */}
        <div className="bg-card border border-border rounded-xl p-12 text-center my-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-pink-500 to-amber-400" />
          <h2 className="text-2xl font-bold mb-1">Everything you saw. One price.</h2>
          <p className="text-sm text-muted-foreground font-light">No per-session fees. No minute limits. No credit costs for Live Room.</p>

          <div className="font-mono text-5xl font-bold my-5">
            $9.90<span className="text-lg font-normal text-muted-foreground">/mo</span>
          </div>
          <p className="text-sm text-muted-foreground mb-5">Billed yearly · $19.90/mo monthly · 30-day money-back guarantee</p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-7">
            {["Unlimited chat", "Unlimited images", "Unlimited voice", "Live Room sessions", "Touch + expressions", "Live Room Studio", "Custom voice mixing", "On-demand photos"].map((item) => (
              <span key={item} className="text-sm flex items-center gap-1.5">
                <span className="text-green-600 font-bold">✓</span> {item}
              </span>
            ))}
          </div>

          <a
            href="https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 text-lg font-bold px-12 py-4 rounded-full bg-foreground text-amber-400 hover:opacity-90 transition-opacity shadow-lg"
          >
            Try AiAllure Free →
          </a>
          <span className="block mt-4 text-xs text-muted-foreground">
            Affiliate link · Commission at no extra cost to you · <Link href="/how-we-test" className="hover:text-foreground">How we rank</Link>
          </span>
        </div>

        {/* FAQ */}
        <section className="my-12">
          <h2 className="text-xl font-bold mb-5">Questions About AI Companion Video Calls</h2>
          <div className="divide-y divide-border">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </section>

        {/* Cross-links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-12">
          <Link href="/feature/video-generation" className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground transition-colors">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</p>
            <p className="font-semibold text-foreground mb-1">All Platforms With Video →</p>
            <p className="text-sm text-muted-foreground font-light">Side-by-side video feature comparison.</p>
          </Link>
          <Link href="/feature/voice-calls" className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground transition-colors">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</p>
            <p className="font-semibold text-foreground mb-1">Voice Call Comparison →</p>
            <p className="text-sm text-muted-foreground font-light">Who includes voice and what it costs.</p>
          </Link>
          <Link href="/feature/cheapest" className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground transition-colors">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</p>
            <p className="font-semibold text-foreground mb-1">Cheapest Plans →</p>
            <p className="text-sm text-muted-foreground font-light">All 8 platforms sorted by real price.</p>
          </Link>
          <Link href="/feature/unlimited-images" className="bg-card border border-border rounded-lg p-5 hover:border-muted-foreground transition-colors">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">By Feature</p>
            <p className="font-semibold text-foreground mb-1">Unlimited Images →</p>
            <p className="text-sm text-muted-foreground font-light">Only 1 platform has no cap.</p>
          </Link>
        </div>

        {/* Final CTA */}
        <div className="bg-card border-2 border-amber-400 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-medium text-foreground"><strong>Still reading? Just try it.</strong></p>
            <p className="text-sm text-muted-foreground">Free plan available. See the Live Room yourself.</p>
          </div>
          <a
            href="https://www.aiallure.com/?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln&sub1=aigfnow"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 rounded-full bg-amber-400 text-foreground hover:shadow-lg transition-shadow whitespace-nowrap"
          >
            Try Free →
          </a>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-light">
            Recorded & tested April 2026 · <Link href="/how-we-test" className="hover:text-foreground">How we rank</Link> · <Link href="/" className="hover:text-foreground">All rankings</Link> · Affiliate links on this page
          </p>
        </footer>
      </main>
    </>
  );
}
