import Link from "next/link";
import { ModeToggle } from "@bigcomponents/core/next";
import { BoltIcon } from "@bigcomponents/core/heroicons/solid";
import { CommandMenu } from "./command-menu";

const Header = () => {
  return (
    <header className="flex border-b bg-white dark:bg-gray-950 dark:border-gray-800 items-center h-[60px] sticky top-0 z-50">
      <div className="container flex items-center justify-between w-full px-4 mx-auto">
        <Link href="/" className="flex items-center gap-px text-lg font-black">
          <BoltIcon className="w-6 h-6 text-primary" />
          <span>BigComponents</span>
        </Link>

        <div className="flex items-center gap-4">
          <CommandMenu />

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
