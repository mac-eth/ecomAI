import * as React from "react";
import Link from "next/link";
import { clearChats } from "@/app/actions";
import { ChatSidebar } from "@/components/chat-sidebar";
import { ClearHistory } from "@/components/clear-history";
import { MainNav } from "@/components/main-nav";
import { MainNavSidebar } from "@/components/main-nav-sidebar";
import { SidebarFooter } from "@/components/sidebar-footer";
import { SidebarList } from "@/components/sidebar-list";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { IconDocs, IconNextChat, IconSeparator } from "@/components/ui/icons";
import { UserMenu } from "@/components/user-menu";
import { cn } from "@/lib/utils";

import { auth } from "@ecomai/auth";

export async function Header() {
  const session = await auth();
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex w-60 items-center">
        {session?.user ? (
          <ChatSidebar>
            <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
              <SidebarList userId={session?.user?.id} />
            </React.Suspense>
            <SidebarFooter>
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </ChatSidebar>
        ) : (
          <Link href="/" target="_blank" rel="nofollow">
            <IconNextChat className="mr-2 h-6 w-6 dark:hidden" inverted />
            <IconNextChat className="mr-2 hidden h-6 w-6 dark:block" />
          </Link>
        )}
        <div className="flex items-center">
          <IconSeparator className="h-6 w-6 text-muted-foreground/50" />
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <Button variant="link" asChild className="-ml-2">
              <Link href="/sign-in?callbackUrl=/">Login</Link>
            </Button>
          )}
        </div>
      </div>
      <MainNav className="mx-6 hidden md:flex" />
      <div className="flex w-60 items-center justify-end space-x-2">
        <a
          href="https://github.com/vercel/nextjs-ai-chatbot/"
          target="_blank"
          className={cn(buttonVariants())}
          rel="noreferrer"
        >
          <IconDocs className="mr-2" />
          <span className="hidden sm:block">Documentation</span>
          <span className="sm:hidden">Docs</span>
        </a>

        <ThemeToggle />
        <MainNavSidebar className="flex sm:hidden" />
      </div>
    </header>
  );
}
