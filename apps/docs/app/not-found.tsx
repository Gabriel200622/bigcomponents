import Link from "next/link";
import { Button } from "@bigcomponents/core";

export default function NotFound() {
  return (
    <main className="grid min-h-full px-6 py-24 bg-background place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-secondary-foreground">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <Button className="mt-5" asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </main>
  );
}
