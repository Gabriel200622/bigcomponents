"use client";

import Link from "next/link";
import { ScrollArea, cn } from "@bigcomponents/core";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "@/types/nav";
import { useEffect, useRef } from "react";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

const DocsSidebar = ({ items }: DocsSidebarNavProps) => {
  const pathname = usePathname();

  return (
    <div className="h-[calc(100vh-5.5rem)] sticky top-14 w-full hidden md:block">
      <ScrollArea className="h-full p-2">
        <div className="w-full">
          {items.map((item, index) => (
            <div key={index} className={cn("pb-4")}>
              <h4 className="px-2 py-1 mb-1 text-sm font-semibold rounded-md">
                {item.title}
              </h4>
              {item?.items?.length && (
                <DocsSidebarNavItems items={item.items} pathname={pathname} />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [pathname, linkRef]);

  return items?.length ? (
    <div className="grid grid-flow-row text-sm auto-rows-max">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            ref={pathname === item.href ? linkRef : null}
            className={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null;
}

export default DocsSidebar;
