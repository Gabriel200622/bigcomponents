import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import Header from "../components/header";
import { Button } from "@bigcomponents/core";
import { ThemeProvider } from "@bigcomponents/core/react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider>
      <Header />

      <div className="flex flex-col items-center">
        <h1 className="mt-10 text-2xl font-bold dark:text-gray-300">
          Gatsby Example
        </h1>

        <Button className="mt-5 text-lg" asChild variant="link">
          <a
            target="_blank"
            href="https://github.com/Gabriel200622/bigcomponents"
          >
            See documentation
          </a>
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>BigComponents with Gatsby and Typescript</title>
);
