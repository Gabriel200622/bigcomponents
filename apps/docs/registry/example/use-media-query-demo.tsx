import { Badge } from "@bigcomponents/core";
import { useMediaQuery } from "@bigcomponents/hooks";

export default function UseMediaQueryDemo() {
  const matches = useMediaQuery("(min-width: 56.25em)");

  return (
    <Badge variant={matches ? "default" : "destructive"}>
      Breakpoint {matches ? "matches" : "does not match"}
    </Badge>
  );
}
