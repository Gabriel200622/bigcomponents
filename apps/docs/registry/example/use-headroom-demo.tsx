import { useHeadroom } from "@bigcomponents/hooks";
import { Portal, cn } from "@bigcomponents/core";

export default function UseHeadroomDemo() {
  const pinned = useHeadroom({ fixedAt: 60 });

  return (
    <>
      <Portal>
        <div
          className={cn(
            "fixed top-0 left-0 right-0 p-2 h-[60px] z-[9999] bg-accent transition-all",
            pinned ? "translate-y-0" : "-translate-y-[60px]",
          )}
        >
          Pinned header
        </div>
      </Portal>

      <p className="text-center">
        Header is {pinned ? "pinned" : "not pinned"}
      </p>
    </>
  );
}
