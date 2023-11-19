import Link from "next/link";
import { MainNavSidebar } from "@/components/main-nav-sidebar";
import { StickyHeader } from "@/components/navbar/sticky-header";

export function Navbar() {
  return (
    <StickyHeader
      className="sticky top-0 z-20 border-b transition-all"
      scrollY={50}
      defaultClass="py-5 border-transparent"
      activeClass="py-2 bg-background/80 border-border background-blur-lg"
    >
      <div className="relative z-10 flex flex-col items-center justify-between lg:flex-row">
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link
            href="/"
            className="focus-visible:shadow-outline-accent -ml-2 flex items-center rounded-full px-2 text-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="font-bold text-red-500">Ecommerce</span>
            <span className="text-muted">Explorer</span>
            <span className="ml-1 mt-0.5 rounded-md bg-red-200 px-2 py-1 text-[10px] font-bold uppercase leading-none text-muted">
              AI
            </span>
          </Link>
          <MainNavSidebar className="flex sm:hidden" />
        </div>
      </div>
    </StickyHeader>
  );
}
