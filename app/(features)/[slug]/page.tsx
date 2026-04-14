import { FEATURE_TAGS, VALUE_INDEX, coverageByKey, type ScoredEntry, type FeatureTag } from "@/data/value-index";
import { getPlatform } from "@/lib/platforms";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, X, Minus, Coins, HelpCircle, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ── Helpers ── */
const tagMap = new Map(FEATURE_TAGS.map((t) => [t.slug, t]));

function getTag(slug: string): FeatureTag | undefined {
  return tagMap.get(slug);
}

export async function generateStaticParams() {
  return FEATURE_TAGS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tag = getTag(params.slug);
  if (!tag) return {};
  return {
    title: tag.h1,
    description: tag.description,
    robots: { index: false, follow: true },
    openGraph: {
      title: tag.h1,
      description: tag.description,
      type: "website",
      url: `https://aigfnow.com${tag.href}`,
    },
  };
}

/* ── Score ring ── */
function ScoreRing({ score }: { score: number }) {
  const r = 22; const sw = 3;
  const circ = 2 * Math.PI * r;
  const dim = (r + sw) * 2;
  const color = score >= 75 ? "stroke-emerald-500" : score >= 60 ? "stroke-amber-500" : "stroke-orange-500";
  const textColor = score >= 75 ? "text-emerald-500" : score >= 60 ? "text-amber-500" : "text-orange-500";
  return (
    <div className="relative inline-flex items-center justify-center shrink-0">
      <svg width={dim} height={dim} className="-rotate-90">
        <circle cx={r + sw} cy={r + sw} r={r} fill="none" stroke="currentColor" strokeWidth={sw} className="text-muted/20" />
        <circle cx={r + sw} cy={r + sw} r={r} fill="none" strokeWidth={sw} strokeLinecap="round"
          className={color} strokeDasharray={`${circ}`} strokeDashoffset={`${circ * (1 - score / 100)}`} />
      </svg>
      <span className={`absolute ${textColor} text-sm font-black font-mono tabular-nums`}>{score}</span>
    </div>
  );
}

/* ── Coverage bar for a single feature ── */
function FeatureCoverageRow({ entry, featureKey }: { entry: ScoredEntry; featureKey: string }) {
  const cov = coverageByKey(entry);
  const row = cov.find((c) => c.key === featureKey);
  if (!row) return null;
  const pct = row.adequacy;
  const barColor = pct >= 80 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : pct > 0 ? "bg-orange-500" : "bg-muted/30";
  return (
    <div className="flex items-center gap-3">
      <div className="w-32 h-2.5 rounded-full bg-muted/20 overflow-hidden">
        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-bold font-mono tabular-nums">{pct}%</span>
    </div>
  );
}

/* ── Platform row for feature-specific ranking ── */
function PlatformRow({ entry, rank, featureKey }: { entry: ScoredEntry; rank: number; featureKey: string | null }) {
  const platform = getPlatform(entry.id);
  if (!platform) return null;

  const cov = coverageByKey(entry);
  const included = entry.features.filter((f) => f.access === "unlimited");
  const limited = entry.features.filter((f) => f.access === "limited");
  const credits = entry.features.filter((f) => f.access === "coins");

  const bestYearly = entry.subYearly && entry.subYearly < entry.subMonthly ? entry.subYearly : null;

  return (
    <div className="rounded-xl border border-border/50 dark:border-white/[0.08] bg-card p-6 hover:border-primary/30 transition-all">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <span className="text-2xl font-black font-mono tabular-nums text-muted-foreground/20">{rank}</span>
        <ScoreRing score={entry.score} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={platform.logo ?? `https://www.google.com/s2/favicons?domain=${platform.domain}&sz=64`}
          alt={platform.name}
          className="size-8 rounded-lg object-contain"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold font-mono text-lg">{platform.name}</h3>
          <a href={`https://${platform.domain}`} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-muted-foreground/50 hover:text-primary transition-colors">
            {platform.domain} ↗
          </a>
        </div>
        <div className="text-right">
          <div className="font-black font-mono text-xl tabular-nums">${entry.subMonthly.toFixed(2)}<span className="text-xs font-semibold text-muted-foreground">/mo</span></div>
          {bestYearly && (
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400">${bestYearly.toFixed(2)}/mo yearly</div>
          )}
        </div>
      </div>

      {/* Feature-specific coverage if this page targets a specific feature */}
      {featureKey && (
        <div className="mb-4">
          <p className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground/50 mb-2">{featureKey} coverage</p>
          <FeatureCoverageRow entry={entry} featureKey={featureKey} />
        </div>
      )}

      {/* What's included / limited / credits */}
      <div className="grid gap-2 sm:grid-cols-3 text-sm">
        {included.length > 0 && (
          <div>
            <p className="font-bold font-mono text-green-700 dark:text-emerald-400 text-xs mb-1">Included</p>
            <ul className="space-y-1">
              {included.map((f) => (
                <li key={f.key} className="flex items-center gap-1.5 font-mono text-green-800 dark:text-emerald-300/70">
                  <Check className="size-3 shrink-0" /> {f.label}
                </li>
              ))}
            </ul>
          </div>
        )}
        {limited.length > 0 && (
          <div>
            <p className="font-bold font-mono text-amber-700 dark:text-amber-400 text-xs mb-1">Capped</p>
            <ul className="space-y-1">
              {limited.map((f) => (
                <li key={f.key} className="flex items-center gap-1.5 font-mono text-amber-800 dark:text-amber-300/70">
                  <Minus className="size-3 shrink-0" /> {f.label}{f.detail ? ` (${f.detail})` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
        {credits.length > 0 && (
          <div>
            <p className="font-bold font-mono text-orange-700 dark:text-orange-400 text-xs mb-1">Costs credits</p>
            <ul className="space-y-1">
              {credits.map((f) => (
                <li key={f.key} className="flex items-center gap-1.5 font-mono text-orange-800 dark:text-orange-300/70">
                  <Coins className="size-3 shrink-0" /> {f.label}{f.detail ? ` (${f.detail})` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-4 flex gap-3">
        <Button asChild size="sm" className="font-bold font-mono group/arrow">
          <a href={platform.url} target="_blank" rel="noopener noreferrer">
            Try {platform.name} <ArrowRight className="size-3.5 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
          </a>
        </Button>
        <Button asChild size="sm" variant="ghost" className="font-mono">
          <Link href={`/reviews/${platform.id}`}>Read review</Link>
        </Button>
      </div>
    </div>
  );
}

/* ── Full coverage breakdown table (for "hidden limits" and "real image limits" pages) ── */
function FullCoverageTable({ featureKey }: { featureKey?: string }) {
  const LABELS: Record<string, string> = { chat: "Chat", images: "Images", voice: "Voice", video: "Video", memory: "Memory" };
  const keys = featureKey ? [featureKey] : ["chat", "images", "voice", "video", "memory"];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-mono">
        <thead>
          <tr className="border-b border-secondary">
            <th className="text-left py-3 px-2 font-bold">Platform</th>
            {keys.map((k) => (
              <th key={k} className="text-center py-3 px-2 font-bold">{LABELS[k] ?? k}</th>
            ))}
            <th className="text-center py-3 px-2 font-bold">Price</th>
            <th className="text-center py-3 px-2 font-bold">VI Score</th>
          </tr>
        </thead>
        <tbody>
          {VALUE_INDEX.map((entry) => {
            const cov = coverageByKey(entry);
            const covMap = Object.fromEntries(cov.map((c) => [c.key, c.adequacy]));
            const platform = getPlatform(entry.id);
            if (!platform) return null;
            const best = entry.subYearly && entry.subYearly < entry.subMonthly ? entry.subYearly : entry.subMonthly;
            return (
              <tr key={entry.id} className="border-b border-secondary/50 hover:bg-muted/10">
                <td className="py-3 px-2 font-bold">{platform.name}</td>
                {keys.map((k) => {
                  const v = covMap[k] ?? 0;
                  const color = v >= 80 ? "text-emerald-500" : v >= 50 ? "text-amber-500" : v > 0 ? "text-orange-500" : "text-muted-foreground/30";
                  return (
                    <td key={k} className={`text-center py-3 px-2 font-bold tabular-nums ${color}`}>
                      {v > 0 ? `${v}%` : "—"}
                    </td>
                  );
                })}
                <td className="text-center py-3 px-2 tabular-nums">${best.toFixed(2)}</td>
                <td className="text-center py-3 px-2 font-bold tabular-nums">{entry.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function FeatureTagPage({ params }: { params: { slug: string } }) {
  const tag = getTag(params.slug);
  if (!tag) notFound();

  // Sort platforms by the relevant feature coverage, then by overall score
  const sorted = [...VALUE_INDEX].sort((a, b) => {
    if (tag.filterKey) {
      const covA = coverageByKey(a).find((c) => c.key === tag.filterKey)?.adequacy ?? 0;
      const covB = coverageByKey(b).find((c) => c.key === tag.filterKey)?.adequacy ?? 0;
      if (covA !== covB) return covB - covA;
    }
    return b.score - a.score;
  });

  const isExposePage = tag.slug === "ai-girlfriend-hidden-limits" || tag.slug === "ai-girlfriend-real-image-limits";

  return (
    <div className="container max-w-4xl py-16 md:py-24 font-mono">
      {/* Header */}
      <div className="mb-12">
        <Badge variant="outline" className="mb-4 font-mono">Updated March 2026 · Value Index Data</Badge>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{tag.h1}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">{tag.description}</p>
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Ranked by the Value Index</strong> — feature coverage × price efficiency, geometric mean.
            Same methodology as the UN Human Development Index. {tag.angle}
          </p>
        </div>
      </div>

      {/* Expose pages get a comparison table */}
      {isExposePage && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Real Numbers</h2>
          <p className="text-muted-foreground mb-6">
            Coverage = % of feature included in your subscription before you need to pay extra. 100% = unlimited. 0% = pay-per-use or missing entirely.
          </p>
          <Card>
            <CardContent className="pt-6">
              <FullCoverageTable featureKey={tag.filterKey ?? undefined} />
            </CardContent>
          </Card>
        </div>
      )}

      {/* Platform rankings */}
      <h2 className="text-2xl font-bold mb-6">
        {isExposePage ? "Platform Details" : "Rankings"}
      </h2>
      <div className="space-y-4 mb-12">
        {sorted.map((entry, i) => (
          <PlatformRow key={entry.id} entry={entry} rank={i + 1} featureKey={tag.filterKey} />
        ))}
      </div>

      {/* How we measure */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-lg">How We Measure This</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-3">
          <p>
            Every platform is tested with a real paid account. We check what&apos;s actually included in the subscription vs. what costs extra (tokens, coins, credits).
          </p>
          <p>
            <strong className="text-foreground">Coverage</strong> = how much of a feature is included before you pay more. 100% means unlimited use. 0% means you pay per use or it&apos;s not available.
          </p>
          <p>
            <strong className="text-foreground">Value Index</strong> = √(Feature Coverage × Price Efficiency). A platform can&apos;t score high by being cheap but useless, or feature-rich but overpriced. Both dimensions must hold up.
          </p>
          <p>
            Data sources: public pricing pages only. Updated monthly. No sponsored placements.
          </p>
        </CardContent>
      </Card>

      {/* Browse other tags */}
      <div className="mb-12">
        <p className="text-xs font-bold font-mono uppercase tracking-wider text-muted-foreground/50 mb-3">Browse more</p>
        <div className="flex flex-wrap gap-2">
          {FEATURE_TAGS.filter((t) => t.slug !== tag.slug).map((t) => (
            <Link key={t.href} href={t.href}
              className="rounded-full border border-border/50 px-3.5 py-1.5 text-sm font-mono text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground">
              {t.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center py-8 border-t border-secondary">
        <h2 className="text-2xl font-bold mb-3">See the Full Rankings</h2>
        <p className="text-muted-foreground mb-6">All platforms ranked by the Value Index — the only score based on what you actually get per dollar.</p>
        <Button asChild className="font-bold font-mono group/arrow">
          <Link href="/#compare">
            View Value Index <ArrowRight className="size-4 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: tag.h1,
            description: tag.description,
            dateModified: "2026-03-13",
            author: { "@type": "Organization", name: "AI GF Now", url: "https://aigfnow.com" },
          }),
        }}
      />
    </div>
  );
}
