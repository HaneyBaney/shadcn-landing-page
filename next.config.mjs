/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
  },
  async redirects() {
    return [
      // Existing redirects
      {
        source: "/best/unlimited-images",
        destination: "/feature/unlimited-images",
        permanent: true,
      },
      {
        source: "/best/video",
        destination: "/feature/video-generation",
        permanent: true,
      },
      {
        source: "/best/voice-calls",
        destination: "/feature/voice-calls",
        permanent: true,
      },
      {
        source: "/best/memory",
        destination: "/feature/long-term-memory",
        permanent: true,
      },
      {
        source: "/best/no-tokens",
        destination: "/feature/no-tokens",
        permanent: true,
      },
      {
        source: "/best/cheapest",
        destination: "/feature/cheapest",
        permanent: true,
      },

      // Fix Bing 4xx errors — review slugs missing "-review" suffix
      {
        source: "/reviews/aiallure",
        destination: "/reviews/aiallure-review",
        permanent: true,
      },
      {
        source: "/reviews/candy-ai",
        destination: "/reviews/candy-ai-review",
        permanent: true,
      },
      {
        source: "/reviews/ourdream-ai",
        destination: "/reviews/ourdream-ai-review",
        permanent: true,
      },
      {
        source: "/reviews/mydreamcompanion",
        destination: "/reviews/mydreamcompanion-review",
        permanent: true,
      },
      {
        source: "/reviews/gptgirlfriend",
        destination: "/reviews/gptgirlfriend-review",
        permanent: true,
      },
      {
        source: "/reviews/nectar-ai",
        destination: "/reviews/nectar-ai-review",
        permanent: true,
      },
      {
        source: "/reviews/secret-desires",
        destination: "/reviews/lovescape-review",
        permanent: true,
      },
      {
        source: "/reviews/secrets-ai",
        destination: "/",
        permanent: true,
      },

      // Fix wrong path prefix (/review/ → /reviews/)
      {
        source: "/review/aiallure",
        destination: "/reviews/aiallure-review",
        permanent: true,
      },

      // Old blog post that no longer exists
      {
        source: "/blog/spicychat-vs-nectar-ai",
        destination: "/",
        permanent: true,
      },

      // Index pages that don't exist
      {
        source: "/feature",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hidden-costs",
        destination: "/hidden-costs/whats-included",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
