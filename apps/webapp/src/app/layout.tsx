import "@/app/globals.css";

import type { Metadata } from "next";
import { headers } from "next/headers";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "EcomAI",
    template: `EcomAI - %s`,
  },
  description:
    "An AI-powered chatbot designed to assist you in your E-commerce business.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
        <Providers
          attribute="class"
          defaultTheme="system"
          headers={headers()}
          enableSystem
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex flex-1 flex-col bg-muted/50">{children}</main>
          </div>
          <Analytics />
          <TailwindIndicator />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}