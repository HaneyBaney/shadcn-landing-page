/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  output: 'export',
  trailingSlash: true,
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
  basePath: process.env.NODE_ENV === 'production' ? '/aigfnow-shadcn' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aigfnow-shadcn' : '',
};

export default nextConfig;
