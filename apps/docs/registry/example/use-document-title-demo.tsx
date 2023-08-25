import { useState } from "react";
import { useDocumentTitle, randomId } from "@bigcomponents/hooks";
import { Button } from "@bigcomponents/core";

export default function UseDocumentTitleDemo() {
  const [title, setTitle] = useState("");
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}
