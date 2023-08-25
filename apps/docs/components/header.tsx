"use client";

import Link from "next/link";
import MobileSheet from "./mobile-sheet";
import { ModeToggle } from "@bigcomponents/core/next";
import { CommandMenu } from "./command-menu";
import { cn, Button } from "@bigcomponents/core";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex border-b bg-background items-center h-[60px] sticky top-0 z-50">
      <div className="container flex items-center justify-between w-full px-2 mx-auto">
        <div className="flex items-center gap-1 md:gap-10">
          <MobileSheet />

          <Link
            href="/"
            className="flex items-center gap-px text-lg font-black"
          >
            <Icons.logo />

            <span className="hidden md:block">{siteConfig.name}</span>
          </Link>

          <div className="items-center hidden gap-4 md:flex">
            <Button
              variant="link"
              className={cn(
                "px-0",
                pathname === "/docs/introduction" && "text-primary",
              )}
              asChild
            >
              <Link href="/docs">Docs</Link>
            </Button>

            <Button
              variant="link"
              className={cn(
                "px-0",
                pathname?.startsWith("/docs/components") && "text-primary",
              )}
              asChild
            >
              <Link href="/docs/components">Components</Link>
            </Button>

            <Button
              variant="link"
              className={cn(
                "px-0",
                pathname?.startsWith("/docs/hooks") && "text-primary",
              )}
              asChild
            >
              <Link href="/docs/hooks">Hooks</Link>
            </Button>

            <Button
              variant="link"
              className={cn(
                "px-0",
                pathname === "/templates" && "text-primary",
              )}
              asChild
            >
              <Link href="/templates">Templates</Link>
            </Button>

            <Button variant="link" className="px-0" asChild>
              <Link href={siteConfig.links.github} target="_blank">
                Github
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <CommandMenu />

          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
