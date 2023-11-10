import { siteConfig } from "./site";

import ViteIMG from "../public/images/vite-example.png";
import GatsbyIMG from "../public/images/gatsby-example.png";

interface ExampleConfig {
  url: string;
  name: string;
  madeBy: string;
  image: any;
  framework: "nextjs" | "vite" | "gatsby" | "cra";
}

export const examplesConfig: ExampleConfig[] = [
  {
    name: "Vite Boilerplate",
    framework: "vite",
    madeBy: siteConfig.name,
    url: "https://github.com/Gabriel200622/bigcomponents/tree/main/examples/with-vite",
    image: ViteIMG,
  },
  {
    name: "Gatsby Boilerplate",
    framework: "gatsby",
    madeBy: siteConfig.name,
    url: "https://github.com/Gabriel200622/bigcomponents/tree/main/examples/with-gatsby",
    image: GatsbyIMG,
  },
];
