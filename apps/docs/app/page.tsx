import Link from "next/link";
import { Button } from "@bigcomponents/core";

const Home = () => {
  return (
    <div>
      <h1 className="px-2 mt-20 text-3xl font-black text-center text-gray-900 lg:text-6xl dark:text-gray-300">
        The all-in-one React components library
      </h1>

      <div className="flex justify-center mt-10">
        <Button asChild size="lg" className="text-lg text-white rounded-full">
          <Link href="/docs/introduction">Get started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
