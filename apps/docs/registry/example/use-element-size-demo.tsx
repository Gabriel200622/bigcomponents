import { Textarea } from "@bigcomponents/core";
import { useElementSize } from "@bigcomponents/hooks";

export default function UseElementSizeDemo() {
  const { ref, width, height } = useElementSize();

  return (
    <div>
      <p className="mb-2 text-center">
        Resize textarea by dragging its right bottom corner
      </p>

      <Textarea
        ref={ref}
        className="bg-accent w-[400px] h-[120px] p-0 border-none resize"
      />

      <div className="mt-2">
        Width: {width}, height: {height}
      </div>
    </div>
  );
}
