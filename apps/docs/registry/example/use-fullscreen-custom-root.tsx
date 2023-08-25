import Image from "next/image";
import { useFullscreen } from "@bigcomponents/hooks";
import { Button } from "@bigcomponents/core";

export default function UseFullscreenDemo() {
  const { ref, toggle, fullscreen } = useFullscreen();

  return (
    <div className="flex flex-col gap-2">
      <Image
        ref={ref}
        src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        alt="Unsplash Image to make Fullscreen"
        width={200}
        height={135}
      />

      <Button onClick={toggle} color={fullscreen ? "red" : "blue"}>
        {fullscreen ? "Exit Fullscreen" : "View Image Fullscreen"}
      </Button>
    </div>
  );
}
