import { Loader2 } from "@bigcomponents/core/lucide";
import { Button } from "@bigcomponents/core";

export default function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      Please wait
    </Button>
  );
}
