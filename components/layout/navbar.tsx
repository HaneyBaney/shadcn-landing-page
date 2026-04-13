"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface SubmenuItemProps {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

const featureList: SubmenuItemProps[] = [
  {
    title: "Unlimited Images",
    description: "Apps that don't charge per image generated.",
    href: "/feature/unlimited-images",
  },
  {
    title: "Voice Calls",
    description: "Platforms with real-time or async voice included.",
    href: "/feature/voice-calls",
  },
  {
    title: "Video Generation",
    description: "Which apps actually deliver usable video.",
    href: "/feature/video-generation",
  },
  {
    title: "Long-Term Memory",
    description: "AI companions that remember you over time.",
    href: "/feature/long-term-memory",
  },
  {
    title: "No Tokens / Credits",
    description: "Flat plans with no hidden coin systems.",
    href: "/feature/no-tokens",
  },
  {
    title: "Cheapest Plans",
    description: "Most value per dollar, tested with real accounts.",
    href: "/feature/cheapest",
    badge: "Popular",
  },
];

const hiddenCostsList: SubmenuItemProps[] = [
  {
    title: "Token & Coin Systems Explained",
    description: "How platforms quietly charge you more.",
    href: "/hidden-costs/token-systems",
    badge: "Must Read",
  },
];


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-3 bg-card">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logos/aigfnow-logo-transparent.png"
          alt="aigfnow.com"
          width={220}
          height={80}
          className="h-20 w-auto object-contain"
          priority
        />
      </Link>

      {/* Mobile menu */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex h-dvh max-h-dvh flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary overflow-hidden"
          >
            <div className="flex flex-1 min-h-0 flex-col overflow-y-auto">
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logos/aigfnow-logo-transparent.png"
                      alt="aigfnow.com"
                      width={180}
                      height={64}
                      className="h-16 w-auto object-contain"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-1 pb-24">
                <p className="text-xs text-muted-foreground px-3 pt-2 pb-1 uppercase tracking-wide">
                  Rankings
                </p>
                <Button onClick={() => setIsOpen(false)} asChild variant="ghost" className="justify-start text-base">
                  <Link href="/">Value Rankings</Link>
                </Button>
                <p className="text-xs text-muted-foreground px-3 pt-3 pb-1 uppercase tracking-wide">
                  By Feature
                </p>
                {featureList.map(({ href, title }) => (
                  <Button key={href} onClick={() => setIsOpen(false)} asChild variant="ghost" className="justify-start text-base">
                    <Link href={href}>{title}</Link>
                  </Button>
                ))}

                <p className="text-xs text-muted-foreground px-3 pt-3 pb-1 uppercase tracking-wide">
                  Transparency
                </p>
                {hiddenCostsList.map(({ href, title }) => (
                  <Button key={href} onClick={() => setIsOpen(false)} asChild variant="ghost" className="justify-start text-base">
                    <Link href={href}>{title}</Link>
                  </Button>
                ))}
                <Button onClick={() => setIsOpen(false)} asChild variant="ghost" className="justify-start text-base">
                  <Link href="/how-we-test">How We Test</Link>
                </Button>

                <p className="text-xs text-muted-foreground px-3 pt-3 pb-1 uppercase tracking-wide">
                  Featured
                </p>
                <Button onClick={() => setIsOpen(false)} asChild variant="ghost" className="justify-start text-base">
                  <Link href="/review/aiallure-live-room" className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    Live Room Review
                  </Link>
                </Button>
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start gap-3">
              <Separator className="mb-1" />
              <Button asChild className="w-full font-semibold">
                <Link href="/match">Find My App →</Link>
              </Button>
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop nav */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className="text-lg font-medium px-4 py-2 hover:text-primary transition-colors">
                Rankings
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card !text-lg !font-medium">
              By Feature
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[480px] grid-cols-2 gap-2 p-4">
                {featureList.map(({ title, description, href, badge }) => (
                  <li key={title}>
                    <NavigationMenuLink asChild>
                      <Link href={href} className="block rounded-md p-3 text-base hover:bg-muted transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold leading-none text-foreground">{title}</p>
                          {badge && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">{badge}</Badge>
                          )}
                        </div>
                        <p className="line-clamp-2 text-muted-foreground text-sm leading-relaxed">{description}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card !text-lg !font-medium">
              Hidden Costs
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[420px] gap-2 p-4">
                {hiddenCostsList.map(({ title, description, href, badge }) => (
                  <li key={title}>
                    <NavigationMenuLink asChild>
                      <Link href={href} className="block rounded-md p-3 text-base hover:bg-muted transition-colors">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold leading-none text-foreground">{title}</p>
                          {badge && (
                            <Badge variant="destructive" className="text-[10px] px-1.5 py-0 h-4">{badge}</Badge>
                          )}
                        </div>
                        <p className="line-clamp-2 text-muted-foreground text-sm leading-relaxed">{description}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/how-we-test" className="text-lg font-medium px-4 py-2 hover:text-primary transition-colors">
                How We Test
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/review/aiallure-live-room" className="text-lg font-medium px-4 py-2 hover:text-primary transition-colors flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                Live Room
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      {/* Right side */}
      <div className="hidden lg:flex items-center gap-2">
        <ToggleTheme />
        <Button asChild size="sm" className="font-semibold">
          <Link href="/match">Find My App →</Link>
        </Button>
      </div>
    </header>
  );
};
