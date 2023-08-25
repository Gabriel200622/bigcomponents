import { Button } from "@bigcomponents/core";
import { useScrollIntoView } from "@bigcomponents/hooks";

export default function UseScrollIntoViewDemo() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <div className="flex flex-col items-center w-full gap-3">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: "center",
          })
        }
      >
        Scroll to target
      </Button>

      <div className="w-full h-[50vh] bg-accent rounded-md" />

      <p ref={targetRef}>Hello there</p>
    </div>
  );
}
