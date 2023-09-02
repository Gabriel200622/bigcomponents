import { Textarea } from "@bigcomponents/core";

export default function TextareaDisabled() {
  return (
    <Textarea
      className="resize"
      placeholder="Type your message here."
      disabled
    />
  );
}
