import { ModeToggle } from "@bigcomponents/core/react";

export default function Header() {
  return (
    <header className="flex items-center h-[60px] justify-between px-5 border-b">
      <div>Logo</div>

      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </header>
  );
}
