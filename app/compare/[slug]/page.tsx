import { platforms, platformList, type Platform } from "@/lib/platforms";
import { VALUE_INDEX, coverageByKey, type ScoredEntry } from "@/data/value-index";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, X, Minus, HelpCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ── Helpers ── */
const viMap = new Map(VALUE_INDEX.map((e) => [e.id, e]));

function parsePair(slug: string): { a: Platform; b: Platform } | null {
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return null;
  const a = platforms[parts[0]];
  const b = platforms[parts[1]];
  if (!a || !b) return null;
  return { a, b };
}

function bestPrice(p: Platform): string {
  if (p.subYearly) return `$${p.subYearly.toFixed(2)}/mo (yearly)`;
  return `$${p.subMonthly.toFixed(2)}/mo`;
}

function cheaperPlatform(a: Platform, b: Platform): Platform {
  const aEff = a.subYearly ?? a.subMonthly;
  const bEff = b.subYearly ?? b.subMonthly;
  return aEff <= bEff ? a : b;
}

export async function generateStaticParams() {
  const ids = Object.keys(platforms);
  const params: { slug: string }[] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      params.push({ slug: `${ids[i]}-vs-${ids[j]}` });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pair = parsePair(params.slug);
  if (!pair) return {};
  const viA = viMap.get(pair.a.id);
  const viB = viMap.get(pair.b.id);
  const scoreSnippet = viA && viB ? ` Value Index: ${viA.score} vs ${viB.score}.` : "";
  return {
    title: `${pair.a.name} vs ${pair.b.name} — Data-Driven Comparison (2026)`,
    description: `${pair.a.name} vs ${pair.b.name} compared on real pricing, feature coverage, and Value Index scores.${scoreSnippet} No opinions — just math.`,
    robots: { index: false, follow: true },
  };
}

/* ── Coverage bar (0–100 adequacy from Value Index formula) ── */
function CoverageBar({ label, aVal, bVal }: { label: string; aVal: number | null; bVal: number | null }) {
  const aV = aVal ?? 0;
  const bV = bVal ?? 0;
  const barColor = (v: number) =>
    v >= 80 ? "bg-emerald-500 dark:bg-emerald-500/50" :
    v >= 50 ? "bg-amber-500 dark:bg-amber-500/50" :
    v > 0 ? "bg-orange-500 dark:bg-orange-500/50" : "bg-muted/30";
  const winner = aV > bV ? "a" : bV > aV ? "b" : "tie";
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-3 border-b border-secondary/50">
      <div className="flex items-center gap-2 justify-end">
        <span className={`text-xs font-bold font-mono tabular-nums ${winner === "a" ? "text-primary" : "text-muted-foreground"}`}>
          {aV > 0 ? `${aV}%` : "—"}
        </span>
        <div className="w-24 h-2 rounded-full bg-muted/20 overflow-hidden flex justify-end">
          <div className={`h-full rounded-full ${barColor(aV)}`} style={{ width: `${aV}%`, transition: "width 0.6s ease" }} />
        </div>
      </div>
      <span className="text-xs font-bold font-mono text-center w-16">{label}</span>
      <div className="flex items-center gap-2">
        <div className="w-24 h-2 rounded-full bg-muted/20 overflow-hidden">
          <div className={`h-full rounded-full ${barColor(bV)}`} style={{ width: `${bV}%`, transition: "width 0.6s ease" }} />
        </div>
        <span className={`text-xs font-bold font-mono tabular-nums ${winner === "b" ? "text-primary" : "text-muted-foreground"}`}>
          {bV > 0 ? `${bV}%` : "—"}
        </span>
      </div>
    </div>
  );
}

/* ── Score ring (reused from main index) ── */
function ScoreRing({ score, label }: { score: number; label: string }) {
  const r = 28; const sw = 3;
  const circ = 2 * Math.PI * r;
  const dim = (r + sw) * 2;
  const color = score >= 75 ? "stroke-emerald-500" : score >= 60 ? "stroke-amber-500" : "stroke-orange-500";
  const textColor = score >= 75 ? "text-emerald-500" : score >= 60 ? "text-amber-500" : "text-orange-500";
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative inline-flex items-center justify-center">
        <svg width={dim} height={dim} className="-rotate-90">
          <circle cx={r + sw} cy={r + sw} r={r} fill="none" stroke="currentColor" strokeWidth={sw} className="text-muted/20" />
          <circle cx={r + sw} cy={r + sw} r={r} fill="none" strokeWidth={sw} strokeLinecap="round"
            className={color} strokeDasharray={`${circ}`} strokeDashoffset={`${circ * (1 - score / 100)}`} />
        </svg>
        <span className={`absolute ${textColor} text-lg font-black font-mono tabular-nums`}>{score}</span>
      </div>
      <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  );
}

export default function ComparePage({
  params,
}: {
  params: { slug: string };
}) {
  const pair = parsePair(params.slug);
  if (!pair) notFound();

  const { a, b } = pair;
  const viA = viMap.get(a.id);
  const viB = viMap.get(b.id);
  const cheaper = cheaperPlatform(a, b);

  // Coverage breakdown (0–100 per feature) from Value Index formula
  const covA = viA ? Object.fromEntries(coverageByKey(viA).map((c) => [c.key, c.adequacy])) : null;
  const covB = viB ? Object.fromEntries(coverageByKey(viB).map((c) => [c.key, c.adequacy])) : null;

  const FEATURES = ["chat", "images", "voice", "video", "memory"] as const;
  const FEATURE_LABELS: Record<string, string> = { chat: "Chat", images: "Images", voice: "Voice", video: "Video", memory: "Memory" };

  // Count which platform wins more feature categories
  let aWins = 0; let bWins = 0;
  if (covA && covB) {
    for (const k of FEATURES) {
      if ((covA[k] ?? 0) > (covB[k] ?? 0)) aWins++;
      else if ((covB[k] ?? 0) > (covA[k] ?? 0)) bWins++;
    }
  }

  const faqItems = [
    {
      q: `Which scores higher on the Value Index, ${a.name} or ${b.name}?`,
      a: viA && viB
        ? `${viA.score > viB.score ? a.name : b.name} scores ${Math.max(viA.score, viB.score)}/100 vs ${Math.min(viA.score, viB.score)}/100. The Value Index measures feature coverage × price efficiency using a geometric mean — the same method as the UN Human Development Index.`
        : `${viA ? a.name + " scores " + viA.score + "/100" : a.name + " is not yet in the Value Index"}. ${viB ? b.name + " scores " + viB.score + "/100" : b.name + " is not yet in the Value Index"}.`,
    },
    {
      q: `Which is cheaper, ${a.name} or ${b.name}?`,
      a: `${a.name} costs ${bestPrice(a)}. ${b.name} costs ${bestPrice(b)}. ${cheaper.name} is the more affordable option at its best available price.`,
    },
    {
      q: `What does the coverage percentage mean?`,
      a: `Coverage shows how much of each feature is included in your subscription before you need to pay extra (tokens, coins, etc). 100% = unlimited. 0% = not included or costs credits for every use. This is calculated from public pricing pages, not opinion.`,
    },
  ];

  return (
    <div className="container max-w-4xl py-16 md:py-24 font-mono">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 font-mono">Updated March 2026</Badge>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {a.name} vs {b.name}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Compared on real pricing and feature coverage. No opinions — just data from public pricing pages.
        </p>
      </div>

      {/* Quick verdict box — data-driven */}
      <Card className="mb-12 border-primary/30 bg-primary/5">
        <CardContent className="pt-6">
          <h2 className="text-lg font-bold mb-3">Quick Verdict</h2>
          <div className="space-y-2 text-muted-foreground text-sm">
            {viA && viB && (
              <p>
                <strong>By Value Index:</strong>{" "}
                {viA.score > viB.score ? a.name : viA.score < viB.score ? b.name : "Tied"}{" "}
                scores higher ({viA.score > viB.score ? viA.score : viB.score}/100 vs {viA.score > viB.score ? viB.score : viA.score}/100).
              </p>
            )}
            <p>
              <strong>By price:</strong> {cheaper.name} is cheaper at {bestPrice(cheaper)}.
            </p>
            <p>
              <strong>{a.name}:</strong> {a.bestFor}
            </p>
            <p>
              <strong>{b.name}:</strong> {b.bestFor}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Head-to-Head */}
      <h2 className="text-2xl font-bold mb-6 text-center">Head-to-Head Comparison</h2>

      <div className="rounded-xl border border-secondary overflow-hidden mb-12">
        {/* Header with scores */}
        <div className="grid grid-cols-[1fr_auto_1fr] bg-card border-b border-secondary">
          <div className="p-6 flex flex-col items-center gap-2 border-r border-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.logo ?? `https://www.google.com/s2/favicons?domain=${a.domain}&sz=64`} alt={a.name} className="size-10 rounded-lg object-contain" />
            <h3 className="font-bold text-lg text-center">{a.name}</h3>
            {viA ? (
              <ScoreRing score={viA.score} label="Value Index" />
            ) : (
              <span className="text-xs text-muted-foreground">Not yet ranked</span>
            )}
          </div>
          <div className="p-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-muted-foreground">VS</span>
          </div>
          <div className="p-6 flex flex-col items-center gap-2 border-l border-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.logo ?? `https://www.google.com/s2/favicons?domain=${b.domain}&sz=64`} alt={b.name} className="size-10 rounded-lg object-contain" />
            <h3 className="font-bold text-lg text-center">{b.name}</h3>
            {viB ? (
              <ScoreRing score={viB.score} label="Value Index" />
            ) : (
              <span className="text-xs text-muted-foreground">Not yet ranked</span>
            )}
          </div>
        </div>

        {/* Feature coverage bars */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-center gap-1 py-2 text-[10px] text-muted-foreground">
            <HelpCircle className="size-3" />
            <span>Coverage = % of feature included in subscription (100% = unlimited, 0% = pay-per-use or missing)</span>
          </div>
          {FEATURES.map((key) => (
            <CoverageBar
              key={key}
              label={FEATURE_LABELS[key]}
              aVal={covA ? covA[key] ?? null : null}
              bVal={covB ? covB[key] ?? null : null}
            />
          ))}
        </div>

        {/* Price row */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-3 border-t border-secondary bg-card/50">
          <div className="text-center">
            <span className="font-bold text-lg tabular-nums">{bestPrice(a)}</span>
            {a.subYearly && <p className="text-xs text-muted-foreground">${a.subMonthly.toFixed(2)}/mo monthly</p>}
          </div>
          <div className="text-center text-sm font-bold w-16">Price</div>
          <div className="text-center">
            <span className="font-bold text-lg tabular-nums">{bestPrice(b)}</span>
            {b.subYearly && <p className="text-xs text-muted-foreground">${b.subMonthly.toFixed(2)}/mo monthly</p>}
          </div>
        </div>

        {/* Free tier row */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-3 border-t border-secondary">
          <div className="flex justify-center">
            {a.freeTier ? <Check className="size-5 text-green-500" /> : <X className="size-5 text-muted-foreground" />}
          </div>
          <div className="text-center text-sm font-bold w-16">Free Tier</div>
          <div className="flex justify-center">
            {b.freeTier ? <Check className="size-5 text-green-500" /> : <X className="size-5 text-muted-foreground" />}
          </div>
        </div>

        {/* Feature wins summary */}
        {covA && covB && (
          <div className="grid grid-cols-[1fr_auto_1fr] items-center py-3 border-t border-secondary bg-card/50">
            <div className="text-center">
              <span className={`font-bold tabular-nums ${aWins > bWins ? "text-primary" : "text-muted-foreground"}`}>{aWins}</span>
            </div>
            <div className="text-center text-sm font-bold w-16">Wins</div>
            <div className="text-center">
              <span className={`font-bold tabular-nums ${bWins > aWins ? "text-primary" : "text-muted-foreground"}`}>{bWins}</span>
            </div>
          </div>
        )}
      </div>

      {/* Choose cards — factual */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Choose {a.name} if...</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm space-y-2">
            <p>• {a.bestFor}</p>
            <p>• Best price: {bestPrice(a)}</p>
            {viA && <p>• Value Index: {viA.score}/100 (#{viA.rank} overall)</p>}
            <Button asChild size="sm" className="mt-4 w-full font-bold font-mono group/arrow">
              <a href={a.url} target="_blank" rel="noopener noreferrer">
                Try {a.name}
                <ArrowRight className="size-3.5 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Choose {b.name} if...</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm space-y-2">
            <p>• {b.bestFor}</p>
            <p>• Best price: {bestPrice(b)}</p>
            {viB && <p>• Value Index: {viB.score}/100 (#{viB.rank} overall)</p>}
            <Button asChild size="sm" className="mt-4 w-full font-bold font-mono group/arrow">
              <a href={b.url} target="_blank" rel="noopener noreferrer">
                Try {b.name}
                <ArrowRight className="size-3.5 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Third option — only if neither is OurDream */}
      {a.id !== "ourdream-ai" && b.id !== "ourdream-ai" && (() => {
        const od = viMap.get("ourdream-ai");
        return od ? (
          <Card className="mb-12 border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg">The Third Option: OurDream AI</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              <p className="mb-3">
                Can&apos;t decide? <strong>OurDream AI</strong> scores {od.score}/100 on the Value Index (#{od.rank} overall).
                It bundles chat, images, voice, and video in one plan at $9.99/mo yearly.
              </p>
              <Button asChild size="sm" className="font-bold font-mono group/arrow">
                <a href="https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=2" target="_blank" rel="noopener noreferrer">
                  Try OurDream AI
                  <ArrowRight className="size-3.5 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ) : null;
      })()}

      {/* FAQ */}
      <h2 className="text-2xl font-bold mb-6">FAQ</h2>
      <div className="space-y-4 mb-12">
        {faqItems.map((item, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{item.q}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              {item.a}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Final CTA */}
      <div className="text-center py-8 border-t border-secondary">
        <h2 className="text-2xl font-bold mb-3">Ready to Try?</h2>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="font-bold font-mono group/arrow">
            <a href={a.url} target="_blank" rel="noopener noreferrer">
              Try {a.name}
              <ArrowRight className="size-4 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="secondary" className="font-bold font-mono group/arrow">
            <a href={b.url} target="_blank" rel="noopener noreferrer">
              Try {b.name}
              <ArrowRight className="size-4 ml-1 group-hover/arrow:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
