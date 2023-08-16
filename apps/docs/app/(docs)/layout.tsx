import DocsSidebar from "@/components/docs-sidebar";
import { docsConfig } from "@/config/docs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="max-w-[1400px] mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
        <DocsSidebar items={docsConfig.sidebarNav} />

        <div>{children}</div>
      </div>
    </>
  );
}
