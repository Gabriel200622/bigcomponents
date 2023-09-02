import { Label, Textarea } from "@bigcomponents/core";

export default function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea
        className="resize"
        placeholder="Type your message here."
        id="message"
      />
    </div>
  );
}
