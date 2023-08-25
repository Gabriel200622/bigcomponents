import { Button, Input } from "@bigcomponents/core";
import { useState } from "react";
import { useDebouncedValue } from "@bigcomponents/hooks";

export default function UseDebouncedValueDemo() {
  const [value, setValue] = useState("");
  const [debounced, cancel] = useDebouncedValue(value, 1000);

  return (
    <div className="w-[650px]">
      <Input
        placeholder="Enter value to see debounce"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Button onClick={cancel} className="mt-2">
        Cancel
      </Button>

      <p className="px-2 mt-2">
        Value: <span className="font-semibold">{value}</span>
      </p>
      <p className="px-2 mt-2">
        Debounced value: <span className="font-semibold">{debounced}</span>
      </p>
    </div>
  );
}
