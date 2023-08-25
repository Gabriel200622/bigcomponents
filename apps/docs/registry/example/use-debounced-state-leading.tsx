import { Input } from "@bigcomponents/core";
import { useDebouncedState } from "@bigcomponents/hooks";

export default function UseDebouncedStateDemo() {
  const [value, setValue] = useDebouncedState("", 200, { leading: true });

  return (
    <div className="w-[650px]">
      <Input
        placeholder="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />

      <p className="px-2 mt-2">
        Debounced value: <span className="font-semibold">{value}</span>
      </p>
    </div>
  );
}
