import { ChevronRight } from "@bigcomponents/core/lucide";
import { Button } from "@bigcomponents/core";

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <ChevronRight className="w-4 h-4" />
    </Button>
  );
}
