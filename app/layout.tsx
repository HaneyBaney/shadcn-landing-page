import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { StickyCTA } from "@/components/layout/sticky-cta";
import { FooterSection } from "@/components/layout/sections/footer";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "AI GF Now — Best AI Girlfriend Apps Ranked by Value Index™ (2026)",
  description: "AI girlfriend apps scored by a mathematical formula: feature access × price efficiency. Geometric mean ranking — same method the UN uses for HDI. No opinions, just data.",
  metadataBase: new URL("https://aigfnow.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans text-[18px] md:text-[19px] leading-[1.7]", inter.variable, jetbrains.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}

          <FooterSection />
          <StickyCTA />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
