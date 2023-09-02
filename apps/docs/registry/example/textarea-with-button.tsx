import { Button, Textarea } from "@bigcomponents/core";

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea className="resize" placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
