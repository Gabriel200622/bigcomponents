import { Mail } from "@bigcomponents/core/lucide";
import { Button } from "@bigcomponents/core";

export default function ButtonWithIcon() {
  return (
    <Button>
      <Mail className="w-4 h-4 mr-2" /> Login with Email
    </Button>
  );
}
