import { useDocumentTitle, useDocumentVisibility } from "@bigcomponents/hooks";

export default function UseDocumentVisibilityDemo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(`Document is ${documentState}`);

  return <p>Switch to another tab to see document title change</p>;
}
