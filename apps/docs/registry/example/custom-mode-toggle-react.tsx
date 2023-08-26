import { Button } from "@bigcomponents/core";
import { useTheme } from "@bigcomponents/core/react";

export default function CustomModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1 items-center">
        <p>Theme is</p>
        <span className="dark:block hidden">dark</span>
        <span className="dark:hidden block">light</span>
      </div>

      <div className="flex gap-2 mt-2 items-center">
        <Button onClick={() => setTheme("dark")}>Set Dark</Button>

        <Button onClick={() => setTheme("light")}>Set Light</Button>
      </div>
    </div>
  );
}
