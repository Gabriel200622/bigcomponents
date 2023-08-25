import { useState } from "react";
import { getHotkeyHandler } from "@bigcomponents/hooks";
import { Input, Label, useToast } from "@bigcomponents/core";

export default function UseHotkeysDemo() {
  const { toast } = useToast();

  const [value, setValue] = useState(
    "I've just used a hotkey to send a message",
  );
  const handleSubmit = () =>
    toast({ title: "Your message", description: value });
  const handleSave = () =>
    toast({ title: "You saved", color: "teal", description: value });

  return (
    <div>
      <Label>
        Press ⌘+Enter or Ctrl+Enter when input has focus to send message
      </Label>

      <Input
        placeholder="Your message"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={getHotkeyHandler([
          ["mod+Enter", handleSubmit],
          ["mod+S", handleSave],
        ])}
      />
    </div>
  );
}
