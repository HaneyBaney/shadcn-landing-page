import { TrendingUp, Layers, Zap, Shield, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "~30%+", label: "CAGR", detail: "AI companion market growth rate" },
  { value: "$400B+", label: "by 2034", detail: "Projected market size" },
  { value: "700%", label: "app growth", detail: "Increase in AI companion apps" },
  { value: "20–25%", label: "CAGR", detail: "AI girlfriend niche specifically" },
];

const WINNER_SIGNALS = [
  {
    icon: <Layers className="size-5 text-primary" />,
    title: "Multi-Modal Dominance",
    body: "Chat + images + video + voice — all in one. Platforms that combine every modality will dominate. Users want interaction, fantasy, and immersion without switching apps.",
  },
  {
    icon: <TrendingUp className="size-5 text-primary" />,
    title: "Retention Over Acquisition",
    body: "Most platforms lose users after novelty fades. Winners have long-term memory, emotional continuity, and evolving relationships. This is the biggest gap in the market right now.",
  },
  {
    icon: <Zap className="size-5 text-primary" />,
    title: "Zero-Friction UX",
    body: "Most platforms still require complex prompts and hide pricing. Winners offer one input box, instant gratification, and zero learning curve.",
  },
  {
    icon: <Shield className="size-5 text-primary" />,
    title: "Emotional + NSFW Hybrid",
    body: "Users come for NSFW, stay for emotional attachment. Pure generators get commoditized. Emotional + erotic = sticky = long-term revenue.",
  },
  {
    icon: <DollarSign className="size-5 text-primary" />,
    title: "Pricing Transparency",
    body: "Most platforms hide limits behind tokens and credits. Platforms with clear unlimited models win conversion. This is exactly why the Value Index exists — to expose real value.",
  },
];

const TIERS = [
  {
    rank: "Tier 1",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    label: "High-probability winners",
    traits: "Unlimited / simple pricing, video generation, strong visuals, minimal friction UX",
  },
  {
    rank: "Tier 2",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    label: "Still strong but risk",
    traits: "Chat-first platforms, cheaper / freemium models — good for traffic, worse for retention",
  },
  {
    rank: "Tier 3",
    color: "text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    label: "Likely decline",
    traits: "Token-heavy systems, complex prompt-based generators, 'unlock this / unlock that' UX — users are getting tired",
  },
];

export function MarketInsightsSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-lg text-primary mb-2 tracking-wider font-mono">
            Market Intelligence
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Why Rankings Change Fast
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-mono">
            The AI companion market is still early-stage chaos. Rankings today won&apos;t be winners tomorrow.
            Here&apos;s what the data says about where things are heading.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s) => (
            <div key={s.label + s.value} className="rounded-xl border border-border/40 dark:border-white/[0.08] bg-card p-5 text-center">
              <div className="text-2xl md:text-3xl font-black font-mono tabular-nums text-primary">{s.value}</div>
              <div className="text-sm font-bold font-mono text-foreground/70 mt-1">{s.label}</div>
              <div className="text-xs text-muted-foreground font-mono mt-0.5">{s.detail}</div>
            </div>
          ))}
        </div>

        {/* What predicts winners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-mono mb-6">What Actually Predicts a Winning Platform</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {WINNER_SIGNALS.map((s) => (
              <div key={s.title} className="rounded-xl border border-border/40 dark:border-white/[0.08] bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  {s.icon}
                  <h4 className="font-bold font-mono text-lg">{s.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform tiers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-mono mb-6">Which Platforms Will Be Popular in 2026?</h3>
          <div className="space-y-4">
            {TIERS.map((t) => (
              <div key={t.rank} className={`rounded-xl border ${t.border} ${t.bg} p-6`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-sm font-extrabold font-mono uppercase tracking-wider ${t.color}`}>{t.rank}</span>
                  <span className="text-sm font-bold font-mono text-foreground/70">{t.label}</span>
                </div>
                <p className="text-sm text-muted-foreground font-mono">{t.traits}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line + CTA */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center">
          <p className="text-lg font-bold font-mono mb-2">You can&apos;t predict which brand wins.</p>
          <p className="text-sm text-muted-foreground font-mono max-w-xl mx-auto mb-6">
            But you can predict with high confidence that the winner = multi-modal + simple + emotionally sticky + transparent value.
            That&apos;s exactly what the Value Index measures.
          </p>
          <Link href="#platforms" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold font-mono text-primary-foreground hover:bg-primary/90 transition-colors">
            See Current Rankings <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
