import { useWindowScroll } from "@bigcomponents/hooks";
import { Button } from "@bigcomponents/core";

export default function UseWindowScrollDemo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className="flex flex-col items-center">
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>

      <Button className="mt-2" onClick={() => scrollTo({ y: 0 })}>
        Scroll to top
      </Button>
    </div>
  );
}
