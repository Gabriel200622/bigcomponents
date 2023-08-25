import { Badge } from "@bigcomponents/core";
import { useReducedMotion } from "@bigcomponents/hooks";

export default function UseReducedMotionDemo() {
  const reduceMotion = useReducedMotion();

  return (
    <Badge
      variant={reduceMotion ? "destructive" : "default"}
      style={{ transitionDuration: reduceMotion ? "0ms" : "200ms" }}
    >
      {reduceMotion
        ? "You prefer to reduce motion"
        : "You prefer not to reduce motion"}
    </Badge>
  );
}
