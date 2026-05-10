# Value Index™ — Open Methodology

Most "best AI girlfriend" lists are opinions.

This isn't.

The Value Index™ measures one thing only:

👉 What you actually get before paying extra — per dollar.

---

## How it works

We score each platform across **four dimensions**, then combine them using a weighted geometric mean.

### 1. Usability Score (35% weight)
What access level each feature provides in the base subscription.

We track five features with these weights:
- **Chat** — 25%
- **Images** — 25%
- **Video** — 20%
- **Voice** — 15%
- **Memory** — 15%

Each feature is assigned an access-level score:
- **Unlimited** = 1.00
- **Generous cap** = 0.85
- **Moderate cap** = 0.65
- **Credit-based** = 0.40
- **Limited** = 0.25
- **Locked** = 0.00

---

### 2. Cost Protection Score (30% weight)
How much of a realistic monthly usage is covered before you need to pay extra.

We benchmark typical usage as: 2,000 chat messages, 100 images, 30 min voice, 8 videos/month.
Unlimited access = full coverage. Capped features are scored proportionally. Credit-based features are estimated based on the included monthly credit allowance.

---

### 3. Quality Score (30% weight)
Actual performance quality, rated from our testing:
- **Memory quality** — 35%
- **Visual quality** — 20%
- **Video quality** — 15%
- **Voice quality** — 15%
- **Platform extras** — 15%

---

### 4. Price Efficiency Score (5% weight)
How the yearly plan price compares to the median across all tested platforms.

- At or below median price = higher score
- Significantly above median = lower score

Price has only a 5% weight intentionally — cheap-but-useless platforms should not rank high.

---

## Why we use weighted geometric mean

Most rankings can be gamed.

Example:
- Platform A: amazing features (90), terrible price (10)
- Simple average = 50 → looks "good"

That's misleading.

We use a **weighted geometric mean** instead — the same method used by the UN Human Development Index:

**Value Index = geometricMean([Usability, CostProtection, Quality, Price], [0.35, 0.30, 0.30, 0.05]) × 100**

Because:
- Expensive platforms with few included features shouldn't rank high
- Cheap platforms with poor quality shouldn't rank high

All four dimensions must be strong to score well.

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
| #8 | Lovescape | 50 | 1 | 1 | 2 |

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
