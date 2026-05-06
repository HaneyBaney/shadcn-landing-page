import { PlatformData } from "./types";

export const platforms: PlatformData[] = [
  {
    meta: {
      slug: "lovescape",
      name: "LoveScape",
      affiliateUrl: "https://t.vlmai-1.com/389267/10224/0?aff_sub5=SF_006OG000004lmDN",
      websiteUrl: "https://lovescape.com",
      badge: "Best for Scenarios",
      description: "Unlimited chat + characters. 600 chips/mo for images, video, voice.",
      bestFor: ["Scenario roleplay", "Character creation", "NSFW content"],
      notIdealFor: ["Heavy media users", "Users wanting unlimited media"],
      highlights: ["Unlimited chat", "600 chips/mo", "Character publishing"],
    },
    pricing: {
      monthly: 19.99,
      yearlyMonthly: 7.80,
    },
    features: {
      chat: "unlimited",
      images: "credit_based",
      voice: "credit_based",
      video: "credit_based",
      memory: "limited",
    },
    memoryLevel: "standard",
    limits: {
      chatMessagesIncluded: null,
      imagesIncluded: 0,
      voiceMinutesIncluded: 0,
      videosIncluded: 0,
      monthlyCreditsIncluded: 600,
    },
    quality: {
      memory: 0.65,
      visuals: 0.75,
      voice: 0.7,
      video: 0.6,
      extras: 0.7,
    },
  },
  {
    meta: {
      slug: "aiallure",
      name: "AiAllure",
      affiliateUrl: "https://www.aiallure.com/landing/c2ae4697-119e-4f5e-a63b-77a03554ad21?ref=2dUtCeDi0MF8kaakyQMtNjC11Ln",
      websiteUrl: "https://aiallure.ai",
      badge: "Best Visuals",
      description:
        "Unlimited chat, images, voice; short clips included. Best visuals.",
      bestFor: [
        "Images",
        "Voice messages",
        "Best-looking AI characters",
      ],
      notIdealFor: ["If you're on a tight budget"],
      highlights: ["Live Rooms", "Voice Calls", "Unlimited Images"],
    },
    pricing: {
      monthly: 19.9,
      yearlyMonthly: 9.9,
    },
    features: {
      chat: "unlimited",
      images: "unlimited",
      voice: "unlimited",
      video: "moderate_cap",
      memory: "unlimited",
    },
    memoryLevel: "enhanced",
    limits: {
      chatMessagesIncluded: null,
      imagesIncluded: null,
      voiceMinutesIncluded: null,
      videosIncluded: 12, // example estimate for short clips
      monthlyCreditsIncluded: 0,
    },
    quality: {
      memory: 0.45,
      visuals: 0.95,
      voice: 0.85,
      video: 0.75,
      extras: 0.95,
    },
  },

  {
    meta: {
      slug: "ourdream-ai",
      name: "OurDream AI",
      affiliateUrl: "https://www.ourdreamersai.com/3D6C519/2CTPL/?uid=172",
      websiteUrl: "https://ourdreamersai.com",
      badge: "Best Overall",
      description:
        "Chat, images, voice, and video all in one plan — go over the monthly cap and it costs dreamcoins.",
      bestFor: [
        "One plan for everything",
        "No separate coin purchases for basic use",
      ],
      notIdealFor: [
        "If you go over the cap often",
        "If you want the cheapest price",
      ],
      highlights: ["One plan for everything"],
    },
    pricing: {
      monthly: 19.99,
      yearlyMonthly: 9.99,
    },
    features: {
      chat: "unlimited",
      images: "generous_cap",
      voice: "moderate_cap",
      video: "moderate_cap",
      memory: "limited",
    },
    memoryLevel: "basic",
    limits: {
      chatMessagesIncluded: null,
      imagesIncluded: 200,
      voiceMinutesIncluded: 20,
      videosIncluded: 10,
      monthlyCreditsIncluded: 1000,
    },
    quality: {
      memory: 0.5,
      visuals: 0.8,
      voice: 0.8,
      video: 0.75,
      extras: 0.7,
    },
  },

  {
    meta: {
      slug: "candy-ai",
      name: "Candy AI",
      affiliateUrl: "https://t.crjmpx.com/389267/9022/39453?aff_sub5=SF_006OG000004lmDN",
      websiteUrl: "https://candy.ai",
      badge: "Cheapest",
      description:
        "Cheapest chat plan — images, voice, and video cost tokens.",
      bestFor: ["Saving money", "Chatting a lot", "Trying AI GF cheap"],
      notIdealFor: [
        "If you want images or voice included",
        "If you need video often",
      ],
      highlights: ["Low price"],
    },
    pricing: {
      monthly: 13.99,
      yearlyMonthly: 3.99,
    },
    features: {
      chat: "unlimited",
      images: "credit_based",
      voice: "credit_based",
      video: "credit_based",
      memory: "moderate_cap",
    },
    memoryLevel: "standard",
    limits: {
      chatMessagesIncluded: null,
      imagesIncluded: 0,
      voiceMinutesIncluded: 0,
      videosIncluded: 0,
      monthlyCreditsIncluded: 100,
    },
    quality: {
      memory: 0.65,
      visuals: 0.7,
      voice: 0.65,
      video: 0.6,
      extras: 0.45,
    },
  },

  {
    meta: {
      slug: "gptgirlfriend",
      name: "GPTGirlfriend",
      affiliateUrl: "https://www.gptgirlfriend.online/?ref=mgi4mjj",
      websiteUrl: "https://gptgirlfriend.online",
      badge: "Best Chat",
      description:
        "Best for deep, realistic chats — not for heavy image/video use.",
      bestFor: ["Long roleplay", "Memory-driven convos", "Lower price"],
      notIdealFor: ["Tons of images", "Frequent video"],
      highlights: ["Long roleplay", "Memory"],
    },
    pricing: {
      monthly: 12,
      yearlyMonthly: 9.58,
    },
    features: {
      chat: "moderate_cap",
      images: "credit_based",
      voice: "limited",
      video: "credit_based",
      memory: "limited",
    },
    memoryLevel: "deep",
    limits: {
      chatMessagesIncluded: 5000,
      imagesIncluded: 0,
      voiceMinutesIncluded: 0,
      videosIncluded: 0,
      monthlyCreditsIncluded: 400,
    },
    quality: {
      memory: 0.95,
      visuals: 0.6,
      voice: 0.5,
      video: 0.45,
      extras: 0.5,
    },
  },

  {
    meta: {
      slug: "mydreamcompanion",
      name: "MyDreamCompanion",
      affiliateUrl: "https://www.mydreamcompanion.com/?linkId=lp_645321&sourceId=11754648&tenantId=dreamcompanion",
      websiteUrl: "https://mydreamcompanion.com",
      badge: "Budget Pick",
      description:
        "Low yearly entry price, but images, video, and voice burn through Dream Coins quickly.",
      bestFor: [
        "Budget-conscious users",
        "Light chat use",
        "Users who mainly want texting"
      ],
      notIdealFor: [
        "Heavy image generation",
        "Frequent video usage",
        "Voice-heavy use"
      ],
      highlights: [
        "6000 text messages",
        "100 Dream Coins/mo",
        "Low yearly price"
      ],
    },
    pricing: {
      monthly: 11.99,
      yearlyMonthly: 5.84,
    },
    features: {
      chat: "moderate_cap",
      images: "credit_based",
      voice: "credit_based",
      video: "credit_based",
      memory: "limited",
    },
    memoryLevel: "standard",
    limits: {
      chatMessagesIncluded: 6000,
      imagesIncluded: 0,
      voiceMinutesIncluded: 0,
      videosIncluded: 0,
      monthlyCreditsIncluded: 100,
    },
    quality: {
      memory: 0.6,
      visuals: 0.65,
      voice: 0.45,
      video: 0.4,
      extras: 0.45,
    },
  },

  {
    meta: {
      slug: "secrets-ai",
      name: "Secrets AI",
      affiliateUrl: "https://t.vlmai-1.com/389267/10381/0?aff_sub5=SF_006OG000004lmDN",
      websiteUrl: "https://secrets.ai",
      badge: "Best Memory",
      description:
        "Only chat is unlimited — all media (images, video, voice) costs moments.",
      bestFor: [
        "Memory-heavy chats",
        "Users who want unlimited chat only",
        "Enhanced 4x memory",
      ],
      notIdealFor: [
        "Heavy media users",
        "Users wanting included media",
        "Budget-conscious users",
      ],
      highlights: ["4x Enhanced Memory", "8,000 moments/mo", "Unlimited chat only"],
    },
    pricing: {
      monthly: 19.99,
      yearlyMonthly: 9.99,
    },
    features: {
      chat: "unlimited",
      images: "credit_based",
      voice: "credit_based",
      video: "credit_based",
      memory: "limited",
    },
    memoryLevel: "enhanced",
    limits: {
      chatMessagesIncluded: null,
      imagesIncluded: 0,
      voiceMinutesIncluded: 0,
      videosIncluded: 0,
      monthlyCreditsIncluded: 8000,
    },
    quality: {
      memory: 0.9,
      visuals: 0.75,
      voice: 0.8,
      video: 0.7,
      extras: 0.65,
    },
  },

  {
    meta: {
      slug: "nectar-ai",
      name: "Nectar AI",
      affiliateUrl: "https://nectar.ai/?_ef_transaction_id=&oid=1&affid=51",
      websiteUrl: "https://nectar.ai",
      badge: "Best Scenarios",
      description: "Daily-limited images + capped messaging — credits unlock advanced features.",
      bestFor: ["Scenario builders", "Structured roleplay", "Users okay with daily limits"],
      notIdealFor: ["Heavy media users", "Users expecting unlimited usage", "Frequent video generation"],
      highlights: ["Scenario Builder", "100 generations/day", "8K context memory"],
    },
    pricing: {
      monthly: 9.99,
      yearlyMonthly: 4.99,
    },
    features: {
      chat: "moderate_cap",
      images: "moderate_cap",
      voice: "limited",
      video: "credit_based",
      memory: "limited",
      photoMessages: "limited",
    },
    memoryLevel: "basic",
    limits: {
      chatMessagesIncluded: 6000,
      imagesIncluded: 100,
      voiceMinutesIncluded: 50,
      videosIncluded: 0,
      monthlyCreditsIncluded: 0,
    },
    quality: {
      memory: 0.7,
      visuals: 0.8,
      voice: 0.6,
      video: 0.6,
      extras: 0.75,
    },
  },
];
