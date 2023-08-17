import { siteConfig } from "./site";

import ViteIMG from "../public/images/vite-template.png";
import GatsbyIMG from "../public/images/gatsby-template.png";

interface TemplateConfig {
  url: string;
  name: string;
  madeBy: string;
  image: any;
  framework: "nextjs" | "vite" | "gatsby" | "cra";
}

export const templatesConfig: TemplateConfig[] = [
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
