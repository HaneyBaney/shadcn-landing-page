# Value Index™ — Open Methodology

Most "best AI girlfriend" lists are opinions.

This isn't.

The Value Index™ measures one thing only:

👉 What you actually get before paying extra — per dollar.

---

## How it works

We score each platform on two dimensions:

### 1. Feature Coverage
What's included in the base subscription — before credits, tokens, or paywalls.

We track:
- Chat
- Image generation  
- Voice
- Video
- Memory

Each feature is classified as:
- **Included** (no limits)
- **Limited** (daily/monthly caps)
- **Credit-based** (requires extra payment)

---

### 2. Price Efficiency

How close the plan is to the cheapest option tested.

- The cheapest plan = 100
- More expensive plans score proportionally lower

---

## Why we use geometric mean

Most rankings can be gamed.

Example:
- Platform A: amazing features (90), terrible price (10)
- Average score = 50 → looks "good"

That's misleading.

We use a geometric mean instead:

**Value Index = √(coverage × priceEfficiency)**

That same platform scores 30, not 50.

Because:
- Expensive platforms shouldn't rank high
- Cheap but useless platforms shouldn't rank high

Both must be strong.

---

## Same approach used by the UN

The Human Development Index (HDI) combines:
- Life expectancy
- Education  
- Income

Using a geometric mean.

A country can't compensate for low life expectancy with high GDP.

We apply the same logic:
A platform can't compensate for bad pricing with good features.

---

## What we measure (strict rules)

We only count what's usable before extra payments.

- **"Unlimited"** = no cap, no credits
- **"Limited"** = capped usage (daily/monthly)
- **"Credit-based"** = requires tokens, coins, or hearts

No guessing. No assumptions.

---

## Data sources

All data comes from:
- Official pricing pages
- Public plan descriptions

We do not rely on:
- Affiliate claims
- Marketing copy
- Sponsored placements

---

## Current Rankings (March 2026)

| Rank | Platform | Value Index | Unlimited | Limited | Credit-based |
|------|----------|-------------|-----------|----------|--------------|
| #1 | AiAllure | 84 | 3 | 2 | 1 |
| #2 | Secrets AI | 78 | 1 | 1 | 3 |
| #3 | OurDream AI | 77 | 1 | 4 | 0 |
| #4 | Nectar AI | 64 | 0 | 5 | 1 |
| #5 | GPTGirlfriend | 60 | 0 | 3 | 2 |
| #6 | Candy AI | 56 | 1 | 1 | 3 |
| #7 | MyDreamCompanion | 51 | 0 | 2 | 3 |
| #8 | Secret Desires | 50 | 1 | 1 | 2 |

---

## Updates

- **Last updated**: March 26, 2026
- **Next update**: April 2026
- **Platforms tested**: 8

---

## Why this matters

Most platforms look cheap at first.

But:
- Credits run out
- Limits hit fast  
- Real cost increases

The Value Index™ exposes that.

---

## Sources

[1] UNDP — Human Development Index  
[2] OECD — Handbook on Constructing Composite Indicators (2008)  
[3] Springer — Aggregation methods & geometric mean (2024)

---

## Technical Implementation

Our Value Index calculator uses:

```typescript
// Feature coverage scoring
function getUsabilityScore(platform: PlatformData): number {
  // Scores unlimited > limited > credit-based
}

// Price efficiency vs cheapest plan  
function getPriceEfficiencyScore(platform: PlatformData, medianPrice: number): number {
  // Compares to cheapest option in dataset
}

// Final geometric mean (penalizes imbalance)
function computePlatformScores(platform: PlatformData): PlatformComputedScores {
  const usability = getUsabilityScore(platform);
  const priceEfficiency = getPriceEfficiencyScore(platform, medianPrice);
  
  const finalScore = geometricMean(
    [usability, costProtection, quality, priceEfficiency],
    [weights.usability, weights.costProtection, weights.quality, weights.price]
  ) * 100;
  
  return {
    usability,
    costProtection, 
    quality,
    priceEfficiency,
    finalScore: Math.round(finalScore),
  };
}
```

This ensures no platform can "game" the system by excelling in only one dimension.
