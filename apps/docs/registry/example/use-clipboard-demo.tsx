import { Button } from "@bigcomponents/core";
import { useClipboard } from "@bigcomponents/hooks";

export default function UseClipboardDemo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      variant={clipboard.copied ? "default" : "secondary"}
      onClick={() => clipboard.copy("Hello, world!")}
    >
      {clipboard.copied ? "Copied" : "Copy"}
    </Button>
  );
}
