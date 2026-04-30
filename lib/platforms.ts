export interface Platform {
  id: string;
  name: string;
  hook: string;
  rating: number;
  price: string;
  priceMonthly: string;
  subMonthly: number;
  subYearly: number | null;
  url: string;
  domain: string;
  logo?: string;
  video?: string;
  features: {
    chat: number;
    video: number;
    voice: number;
    memory: number;
    images: number;
  };
  freeTier: boolean;
  bestFor: string;
  tagline: string;
  priority: "top" | "high" | "medium";
}

export const platforms: Record<string, Platform> = {
  "ourdream-ai": {
    id: "ourdream-ai",
    name: "OurDream AI",
    hook: "All-in-one plan",
    rating: 4.9,
    price: "$9.99/mo yearly",
    priceMonthly: "$19.99",
    subMonthly: 19.99,
    subYearly: 9.99,
    url: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172",
    domain: "ourdreamersai.com",
    logo: "/logos/ourdream-ai.png",
    features: { chat: 5, video: 4, voice: 5, memory: 4, images: 4 },
    freeTier: true,
    bestFor: "Chat + images + voice + video in one subscription",
    tagline: "Chat, images, voice, video — one plan, one price",
    priority: "top",
  },
  "candy-ai": {
    id: "candy-ai",
    name: "Candy AI",
    hook: "Cheapest yearly plan",
    rating: 4.6,
    price: "$3.99/mo yearly",
    priceMonthly: "$13.99",
    subMonthly: 13.99,
    subYearly: 3.99,
    url: "https://t.crjmpx.com/389267/9022/39453?aff_sub5=SF_006OG000004lmDN",
    domain: "candy.ai",
    features: { chat: 4, video: 3, voice: 3, memory: 3, images: 4 },
    freeTier: true,
    bestFor: "Lowest yearly price — unlimited chat, images + voice cost tokens",
    tagline: "$3.99/mo yearly — cheapest entry with unlimited chat",
    priority: "top",
  },
  "gptgirlfriend": {
    id: "gptgirlfriend",
    name: "GPTGirlfriend",
    hook: "Unlimited memory",
    rating: 4.7,
    price: "$9.58/mo yearly",
    priceMonthly: "$12.00",
    subMonthly: 12.00,
    subYearly: 9.58,
    url: "https://www.gptgirlfriend.online/?ref=mgi4mjj",
    domain: "gptgirlfriend.online",
    video: "/videos/gptgirlfriend.mp4",
    features: { chat: 5, video: 3, voice: 3, memory: 4, images: 4 },
    freeTier: true,
    bestFor: "Unlimited memory + 400 coins/mo — strongest chat engine",
    tagline: "Unlimited memory, 5k msgs/mo, 400 coins included",
    priority: "top",
  },
  "aiallure": {
    id: "aiallure",
    name: "AiAllure",
    hook: "Unlimited images + voice",
    rating: 4.5,
    price: "$9.90/mo yearly",
    priceMonthly: "$19.90",
    subMonthly: 19.90,
    subYearly: 9.90,
    url: "https://www.aiallure.com/landing/c2ae4697-119e-4f5e-a63b-77a03554ad21?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln",
    domain: "aiallure.ai",
    logo: "/logos/aiallure.png",
    features: { chat: 3, video: 5, voice: 5, memory: 4, images: 5 },
    freeTier: false,
    bestFor: "Unlimited chat + images + voice — video gen costs AllureCoins",
    tagline: "Unlimited images + voice, short video included",
    priority: "high",
  },
  "mydreamcompanion": {
    id: "mydreamcompanion",
    name: "MyDreamCompanion",
    hook: "Cheapest entry point",
    rating: 4.5,
    price: "$5.84/mo yearly",
    priceMonthly: "$11.99",
    subMonthly: 11.99,
    subYearly: 5.84,
    url: "https://www.mydreamcompanion.com/?linkId=lp_645321&sourceId=11754648&tenantId=dreamcompanion",
    domain: "mydreamcompanion.com",
    features: { chat: 4, video: 3, voice: 3, memory: 5, images: 3 },
    freeTier: false,
    bestFor: "100 coins/mo + 6k msgs — cheapest starter plan",
    tagline: "$5.84/mo yearly — cheapest premium entry point",
    priority: "high",
  },
  "fantasygf": {
    id: "fantasygf",
    name: "FantasyGF",
    hook: "Multi-modal chat",
    rating: 4.3,
    price: "$5.83/mo",
    priceMonthly: "$5.83",
    subMonthly: 5.83,
    subYearly: null,
    url: "https://fantasygf.ai/?via=hana91",
    domain: "fantasygf.ai",
    features: { chat: 3, video: 3, voice: 3, memory: 2, images: 4 },
    freeTier: true,
    bestFor: "Voice + image + video in one chat window",
    tagline: "Voice + image + video in one chat window",
    priority: "high",
  },
  "nectar-ai": {
    id: "nectar-ai",
    name: "Nectar AI",
    hook: "Scenario builder",
    rating: 4.2,
    price: "$4.99/mo",
    priceMonthly: "$9.99",
    subMonthly: 9.99,
    subYearly: 4.99,
    url: "https://nectar.ai/?_ef_transaction_id=&oid=1&affid=51",
    domain: "nectar.ai",
    features: { chat: 4, video: 2, voice: 2, memory: 3, images: 4 },
    freeTier: false,
    bestFor: "Custom scenario builder — anime + realistic styles",
    tagline: "Custom scenario builder, anime/realistic",
    priority: "medium",
  },
  "spicychat-ai": {
    id: "spicychat-ai",
    name: "SpicyChat AI",
    hook: "Community characters",
    rating: 4.2,
    price: "$12.99/mo",
    priceMonthly: "$12.99",
    subMonthly: 12.99,
    subYearly: null,
    url: "https://spicychat.ai/?ref=mwrioda",
    domain: "spicychat.ai",
    features: { chat: 4, video: 1, voice: 1, memory: 2, images: 2 },
    freeTier: true,
    bestFor: "Thousands of community-created characters",
    tagline: "Thousands of community characters, instant variety",
    priority: "medium",
  },
  "secret-desires": {
    id: "secret-desires",
    name: "Secret Desires AI",
    hook: "Guided scenarios",
    rating: 4.8,
    price: "$6.67/mo",
    priceMonthly: "$7.99",
    subMonthly: 7.99,
    subYearly: 6.67,
    url: "https://secretdesires.ai?via=hana64",
    domain: "secret-desires.ai",
    logo: "/logos/faviconV2.png",
    features: { chat: 4, video: 3, voice: 4, memory: 3, images: 4 },
    freeTier: false,
    bestFor: "Guided scenarios — 3 affordable tiers",
    tagline: "Guided scenarios, 3 affordable tiers",
    priority: "medium",
  },
  "secrets-ai": {
    id: "secrets-ai",
    name: "Secrets AI",
    hook: "Best memory system",
    rating: 4.7,
    price: "$9.99/mo yearly",
    priceMonthly: "$19.99",
    subMonthly: 19.99,
    subYearly: 9.99,
    url: "https://t.vlmai-1.com/389267/10381/0?aff_sub5=SF_006OG000004lmDN",
    domain: "secrets.ai",
    features: { chat: 5, video: 4, voice: 5, memory: 5, images: 4 },
    freeTier: true,
    bestFor: "4x memory access + unlimited chat + 8k moments",
    tagline: "Unlimited chat, 8k moments, 4x memory",
    priority: "high",
  },
};

export const platformList = Object.values(platforms);

export const getPlatform = (id: string): Platform | undefined => platforms[id];

export const getTopPlatforms = () =>
  platformList.filter((p) => p.priority === "top");

export const generateVSPairs = (): Array<{ a: Platform; b: Platform; slug: string }> => {
  const pairs: Array<{ a: Platform; b: Platform; slug: string }> = [];
  const ids = Object.keys(platforms);
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      pairs.push({
        a: platforms[ids[i]],
        b: platforms[ids[j]],
        slug: `${ids[i]}-vs-${ids[j]}`,
      });
    }
  }
  return pairs;
};
