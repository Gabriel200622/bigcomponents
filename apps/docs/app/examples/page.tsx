import Image from "next/image";
import { examplesConfig } from "@/config/examples";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

const Examples = () => {
  return (
    <div className="max-w-[1200px] mx-auto pb-10">
      <h1 className="mt-10 text-5xl font-black text-center">
        Examples
      </h1>

      <div className="grid grid-cols-1 gap-5 px-2 mt-10 md:grid-cols-2 xl:grid-cols-3">
        {examplesConfig.map((examples, index) => (
          <a
            href={examples.url}
            target="_blank"
            key={index}
            className="overflow-hidden duration-200 border rounded-md shadow-md hover:border-primary"
          >
            <div className="relative overflow-hidden aspect-video">
              <Image src={examples.image} fill alt={examples.name} />
            </div>

            <div className="px-4 py-2 border-t">
              <h3 className="font-bold">{examples.name}</h3>

              <p className="flex items-center mt-2 text-sm text-foreground">
                by{" "}
                {examples.madeBy === siteConfig.name && (
                  <Icons.logo className="w-4 h-4 mx-1" />
                )}{" "}
                {examples.madeBy}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Examples;
