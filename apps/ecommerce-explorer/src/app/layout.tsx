import "@/app/globals.css";

import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import { Navbar } from "@/components/navbar/navbar";
import { Providers } from "@/components/providers";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

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

const GTM_ID = "GTM-TDQ4C6RB";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
        </Script>
      </head>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Toaster />
        <Providers attribute="class" defaultTheme="light" headers={headers()}>
          <div className="font-satoshi relative flex min-h-screen flex-col overflow-x-hidden scroll-smooth">
            <Navbar />
            <main className="flex flex-1 flex-col bg-muted/5">{children}</main>
          </div>
          <Analytics />
          {/* <TailwindIndicator /> */}
        </Providers>
        <Analytics />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
