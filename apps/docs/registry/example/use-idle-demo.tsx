import { Badge } from "@bigcomponents/core";
import { useIdle } from "@bigcomponents/hooks";

export default function UseIdleDemo() {
  const idle = useIdle(2000);

  return (
    <Badge variant={idle ? "default" : "secondary"}>
      Current state: {idle ? "idle" : "not idle"}
    </Badge>
  );
}
