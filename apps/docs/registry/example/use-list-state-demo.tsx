import { Checkbox, cn } from "@bigcomponents/core";
import { Minus } from "@bigcomponents/core/lucide";
import { useListState, randomId } from "@bigcomponents/hooks";

const initialValues = [
  { label: "Receive email notifications", checked: false, key: randomId() },
  { label: "Receive sms notifications", checked: false, key: randomId() },
  { label: "Receive push notifications", checked: false, key: randomId() },
];

export default function UseListStateDemo() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <div key={value.key}>
      <Checkbox
        className={cn("mt-2 ml-4")}
        checked={value.checked}
        onCheckedChange={(event) =>
          handlers.setItemProp(index, "checked", event as boolean)
        }
      />

      <label className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {value.label}
      </label>
    </div>
  ));

  return (
    <div className="flex flex-col items-start">
      <div>
        <Checkbox
          checked={allChecked ? allChecked : indeterminate}
          customIcon={indeterminate ? <Minus className="w-4 h-4" /> : undefined}
          onCheckedChange={() =>
            handlers.setState((current) =>
              current.map((value) => ({ ...value, checked: !allChecked })),
            )
          }
        />

        <label className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Receive all notifications
        </label>
      </div>

      {items}
    </div>
  );
}
