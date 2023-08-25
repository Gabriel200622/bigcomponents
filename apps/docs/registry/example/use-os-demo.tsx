import { useOs } from "@bigcomponents/hooks";

export default function UseOsDemo() {
  const os = useOs();

  return (
    <div>
      Your os is <b>{os}</b>
    </div>
  );
}
