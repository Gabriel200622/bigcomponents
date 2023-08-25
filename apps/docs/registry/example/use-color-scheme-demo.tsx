import { Badge } from "@bigcomponents/core";
import { useColorScheme } from "@bigcomponents/hooks";

export default function UseColorSchemeDemo() {
  const colorScheme = useColorScheme();

  return (
    <Badge variant="secondary">Your system color scheme is {colorScheme}</Badge>
  );
}
