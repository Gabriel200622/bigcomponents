import { Button, Card, CardContent } from "@bigcomponents/core";
import { useClickOutside } from "@bigcomponents/hooks";
import { useState } from "react";

export default function UseClickOutsideDemo() {
  const [opened, setOpened] = useState(false);
  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(null);
  const [control, setControl] = useState<HTMLButtonElement | null>(null);

  useClickOutside(
    () => setOpened(false),
    ["mouseup", "touchend"],
    [control, dropdown],
  );

  return (
    <div className="relative">
      <Button ref={setControl} onClick={() => setOpened(!opened)}>
        Open dropdown
      </Button>

      {opened && (
        <Card ref={setDropdown} className="absolute w-[250px]">
          <CardContent className="p-3">
            <p>Dropdown</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
