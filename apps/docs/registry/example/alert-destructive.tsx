import { AlertCircle } from "@bigcomponents/core/lucide";
import { Alert, AlertDescription, AlertTitle } from "@bigcomponents/core";

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="w-4 h-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  );
}
