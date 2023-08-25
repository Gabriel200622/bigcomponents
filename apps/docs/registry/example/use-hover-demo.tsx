import { useHover } from "@bigcomponents/hooks";

export default function UseHoverDemo() {
  const { hovered, ref } = useHover();

  return (
    <div
      ref={ref}
      className="bg-accent p-4 w-[400px] flex justify-center rounded-md"
    >
      {hovered ? "I am hovered" : "Put mouse over me please"}
    </div>
  );
}
