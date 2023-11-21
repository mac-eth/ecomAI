"use client";

import type { ReactNode } from "react";
import { StickyHeader } from "@/components/navbar/sticky-header";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  GlobeIcon,
  LightningBoltIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import { Button } from "../ui/button";

const menuItems = [
  {
    title: "AI Expert",
    path: "/ai-expert",
  },
  {
    title: "Calculators",
    path: "/about",
    children: [
      {
        title: "Profitability Calculator",
        path: "/profitability-calculator",
        description: "Calculate your profitability with this calculator.",
        icon: <RocketIcon className="mr-4 h-9 w-9 text-foreground/50" />,
      },
      {
        title: "Shipping Calculator",
        path: "/shipping-calculator",
        description: "Calculate your shipping costs with this calculator.",
        icon: <GlobeIcon className="mr-4 h-9 w-9 text-foreground/50" />,
      },
      {
        title: "Tax Calculator",
        path: "/tax-calculator",
        description: "Calculate your taxes with this calculator.",
        icon: <LightningBoltIcon className="mr-4 h-9 w-9 text-foreground/50" />,
      },
    ],
  },
  {
    title: "Resources",
    path: "/resources",
  },
  {
    title: "Coaching",
    path: "/coaching",
  },
];

export function Navbar() {
  return (
    <StickyHeader
      className="fixed top-0 z-20 w-full border-b bg-card transition-all"
      scrollY={50}
      defaultClass="py-5 border-transparent"
      activeClass="fixed py-2 bg-background/80 border-border background-blur-lg"
    >
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-between lg:flex-row">
        {/* Navbar Branding */}
        <a
          href="/"
          className="focus-visible:shadow-outline-red -ml-2 flex items-center rounded-full px-2 text-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          <span className="font-bold text-red-500">Ecommerce</span>
          <span className="text-slate-600">Explorer</span>
          <span className="ml-1 mt-0.5 rounded-md bg-red-200 px-2 py-1 text-[10px] font-bold uppercase leading-none text-slate-700">
            AI
          </span>
        </a>

        {/* Menu Items */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex flex-col text-foreground/80 lg:flex-row lg:gap-8">
            {menuItems.map((item, index) => (
              <div key={item.title}>
                {!item.children && (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink href={item.path}>
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
                {item.children && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-md text-text">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {item.children.map((menuItem) => (
                          <ListItem
                            key={menuItem.title}
                            title={menuItem.title}
                            href={menuItem.path}
                            icon={menuItem.icon}
                          >
                            {menuItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
              </div>
            ))}
          </NavigationMenuList>
          <div className="mt-3 flex items-center gap-4 lg:hidden">
            <Button variant="link">Log in</Button>
            <Button>Get Started Free</Button>
          </div>
        </NavigationMenu>
        <div>
          <div className="hidden items-center gap-4 lg:flex">
            <Button
              variant="link"
              className="focus-visible:shadow-outline-red rounded-full px-2 py-1 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              Log in
            </Button>
            <Button className="group inline-flex items-center gap-px">
              <span>Get Started For Free</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-px h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </StickyHeader>
  );
}

function ListItem({
  className,
  title,
  children,
  href,
  icon,
  ...props
}: {
  className?: string;
  title: string;
  children: ReactNode;
  href: string;
  icon: ReactNode;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "flex select-none flex-row items-center justify-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          {icon && <div className="mr-2">{icon}</div>}
          <div className="flex flex-col">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
