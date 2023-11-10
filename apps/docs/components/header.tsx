"use client";

import Link from "next/link";
import MobileSheet from "./mobile-sheet";
import { CommandMenu } from "./command-menu";
import { cn, Button } from "@bigcomponents/core";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";
import { GitHubLogoIcon } from "@bigcomponents/core/radix";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 items-center h-[60px] sticky top-0 z-50">
      <div className="container flex items-center justify-between w-full gap-2 px-2 mx-auto">
        <div className="flex items-center gap-1 md:gap-10">
          <MobileSheet />

          <Link
            href="/"
            className="flex items-center gap-px text-lg font-black"
          >
            <Icons.logo />

            <span className="hidden md:block">{siteConfig.name}</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="items-center hidden gap-4 md:flex">
            <Button
              variant="link"
              className={cn(
                "px-0",
                pathname === "/docs/introduction" && "text-primary"
              )}
              asChild
            >
              <Link href="/docs">Docs</Link>
            </Button>

            {/* <Button
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
            </Button> */}

            <Button
              variant="link"
              className={cn("px-0", pathname === "/examples" && "text-primary")}
              asChild
            >
              <Link href="/examples">Examples</Link>
            </Button>

            <CommandMenu />

            <Link href={siteConfig.links.github} target="_blank">
              <GitHubLogoIcon className="w-7 h-7" />
            </Link>
          </div>

          <div>{/* <ModeToggle /> */}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
