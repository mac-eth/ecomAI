"use client";

import * as React from "react";
import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { env } from "@/env.mjs";
import { api } from "@/utils/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import superjson from "superjson";

interface ProviderProps extends ThemeProviderProps {
  headers: Headers;
}

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (env.VERCEL_URL) return env.VERCEL_URL; // SSR should use vercel url

  return `http://localhost:${env.PORT}`; // dev SSR should use localhost
};

export function Providers({ children, headers, ...props }: ProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      }),
  );

  const [trpcClient] = useState(() =>
    api.createClient({
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            const headersMapped = new Map(headers);
            headers.set("x-trpc-source", "nextjs-react");
            return Object.fromEntries(headersMapped);
          },
        }),
      ],
    }),
  );
  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration transformer={superjson}>
          <NextThemesProvider {...props}>
            <TooltipProvider>{children}</TooltipProvider>
          </NextThemesProvider>
        </ReactQueryStreamedHydration>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </api.Provider>
  );
}
