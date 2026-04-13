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
    ];
  },
};

export default nextConfig;
