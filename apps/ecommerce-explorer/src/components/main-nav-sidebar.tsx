"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { IconList } from "@/components/ui/icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface MainNavProps {
  className?: string;
}

export function MainNavSidebar({
  className,
}: React.HTMLAttributes<HTMLElement> & MainNavProps) {
  const path = usePathname();
  const startPathname = path.split("/")[1];
  return (
    <div className={className}>
      <Sheet key={"right"}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="-ml-2 h-9 w-9 p-0">
            <IconList className="h-6 w-6" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="inset-y-0 flex h-auto w-[400px] flex-col p-0"
        >
          <SheetHeader className="p-4">
            <SheetTitle className="text-md">Navigation</SheetTitle>
          </SheetHeader>
          <div className="flex-1 space-y-3 overflow-auto px-2">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "text-md group w-full pl-8 pr-16",
                  item.href === "/" + startPathname && "bg-accent",
                )}
              >
                <div
                  className="relative flex-1 select-none overflow-hidden text-ellipsis break-all py-4"
                  title={item.name}
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
