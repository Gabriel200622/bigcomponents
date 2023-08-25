import "@/styles/mdx.css";

import Balancer from "react-wrap-balancer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allDocs } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

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

  return (
    <main className="p-4">
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
    </main>
  );
};

export default DocPage;
