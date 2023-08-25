import { useState, useEffect } from "react";
import { useInterval } from "@bigcomponents/hooks";
import { Button } from "@bigcomponents/core";

export default function UseIntervalDemo() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p>
        Page loaded <b>{seconds}</b> seconds ago
      </p>

      <Button onClick={interval.toggle} className="mt-2" variant="outline">
        {interval.active ? "Stop" : "Start"} counting
      </Button>
    </div>
  );
}
