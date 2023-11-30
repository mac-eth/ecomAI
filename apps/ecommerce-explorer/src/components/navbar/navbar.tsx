"use client";

import type { ReactNode } from "react";
import Link from "next/link";
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
      className="fixed top-0 z-20 w-full border-b transition-all"
      scrollY={50}
      defaultClass="py-5 border-transparent"
      activeClass="fixed py-2 bg-background border-border background-blur-lg"
    >
      <div className="container relative z-10 mx-auto flex flex-row items-center justify-between">
        {/* Navbar Branding */}
        <a
          href="/"
          className="focus-visible:shadow-outline-shadow -ml-2 flex items-center rounded-full px-2 font-thunder text-xl uppercase transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-4xl"
        >
          <span className="font-extrabold text-primary">Ecom</span>
          <span className="text-text">Explorer</span>
        </a>

        {/* Menu Items */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="text-text flex flex-col font-satoshi text-xl text-foreground/80 lg:flex-row lg:gap-8">
            {menuItems.map((item, index) => (
              <div key={item.title}>
                {!item.children && (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={item.path}
                      className="underline-offset-2 transition-all hover:underline"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
                {item.children && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="">
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
        </NavigationMenu>
        <div>
          <div className="flex items-center gap-4">
            {/* <Button
              variant="link"
              className="focus-visible:shadow-outline-red rounded-full px-2 py-1 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              Log in
            </Button> */}
            <Button
              size="lg"
              className="group inline-flex items-center gap-px"
              asChild
            >
              <Link href="https://lp.ecomexplorer.com.au/questionnaire-mac">
                <span>Book A Free Call</span>
              </Link>
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
          <div className="flex flex-col gap-y-2">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-foreground/50">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
