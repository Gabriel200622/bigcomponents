import "@/styles/globals.css";

import Header from "../components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { ThemeProvider } from "@bigcomponents/core/next";
import { Toaster } from "@bigcomponents/core";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "biggabo",
    },
  ],
  creator: "biggabo",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
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
    title: siteConfig.name,
    description: siteConfig.description,
    /* images: [siteConfig.ogImage], */
    creator: "@biggabo",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.className} bg-background min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
