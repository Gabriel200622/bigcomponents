import { Button } from "@bigcomponents/core";
import { useToggle } from "@bigcomponents/hooks";

export default function UseToggleDemo() {
  const [value, toggle] = useToggle([
    "link",
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
  ]);

  return (
    <Button variant={value as any} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
