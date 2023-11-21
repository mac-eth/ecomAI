import "@/app/globals.css";

import { fontMono, fontSans } from "@/lib/fonts";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { Providers } from "@/components/providers";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: {
    default: "Ecommerce Explorer",
    template: `Ecommerce Explorer - %s`,
  },
  description:
    "Ecommerce Explorer is a collection of free tools designed to help you grow your ecommerce business.",
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Toaster />
        <Providers attribute="class" defaultTheme="light" headers={headers()}>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden scroll-smooth">
            <Navbar />
            <main className="flex flex-1 flex-col bg-muted/10">{children}</main>
          </div>
          <Analytics />
          {/* <TailwindIndicator /> */}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
