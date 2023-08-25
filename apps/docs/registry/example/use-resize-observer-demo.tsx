import { Textarea } from "@bigcomponents/core";
import { useResizeObserver } from "@bigcomponents/hooks";

export default function UseResizeObserverDemo() {
  const [ref, rect] = useResizeObserver();

  return (
    <div className="flex flex-col items-center">
      <p className="mb-2 text-center">
        Resize textarea by dragging its right bottom corner
      </p>

      <Textarea
        ref={ref}
        className="bg-accent w-[400px] h-[120px] p-0 border-none resize"
      />

      <div className="mt-2">Rect: {JSON.stringify(rect)}</div>
    </div>
  );
}
