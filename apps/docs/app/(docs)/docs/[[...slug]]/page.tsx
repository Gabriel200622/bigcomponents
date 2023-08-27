import "@/styles/mdx.css";

import Balancer from "react-wrap-balancer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { DashboardTableOfContents } from "@/components/toc";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import { ScrollArea } from "@bigcomponents/core";
import { getTableOfContents } from "@/lib/toc";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      /* images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ], */
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      /* images: [siteConfig.ogImage], */
      creator: "@biggabo",
    },
  };
}

const DocPage = async ({ params }: DocPageProps) => {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0 p-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight text-primary scroll-m-20">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-foreground">
              <Balancer>{doc.description}</Balancer>
            </p>
          )}
        </div>

        <div className="pt-8 pb-12">
          <Mdx code={doc.body.code} />
        </div>
      </div>

      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <ScrollArea className="pb-10">
              <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                <DashboardTableOfContents toc={toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  );
};

export default DocPage;
