import Link from "next/link";
import { Button } from "@bigcomponents/core";

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
