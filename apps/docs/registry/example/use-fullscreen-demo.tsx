import { Button } from "@bigcomponents/core";
import { useFullscreen } from "@bigcomponents/hooks";

export default function UseFullscreenDemo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} variant={fullscreen ? "secondary" : "default"}>
      {fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
    </Button>
  );
}
