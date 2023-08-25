import { useRef } from "react";
import { useIntersection } from "@bigcomponents/hooks";
import { cn } from "@bigcomponents/core";

export default function UseIntersectionDemo() {
  const containerRef = useRef(null);

  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <div ref={containerRef} className="h-[300px] w-[650px] overflow-y-scroll">
      <div className="pt-[260px] pb-[280px]">
        <div
          ref={ref}
          className={cn(
            "border text-white p-4 rounded-md",
            entry?.isIntersecting ? "bg-green-500" : "bg-red-500",
          )}
        >
          {entry?.isIntersecting ? "Fully visible" : "Obscured"}
        </div>
      </div>
    </div>
  );
}
