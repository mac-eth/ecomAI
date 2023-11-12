"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import { IconGitHub, IconSpinner } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";

interface LoginButtonProps extends ButtonProps {
  auth: string;
  showIcon?: boolean;
  text?: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
}

export function LoginButton({
  text,
  auth,
  showIcon = true,
  icon: Icon,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Button
      variant="secondary"
      onClick={() => {
        setIsLoading(true);
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        void signIn(auth, { callbackUrl: `/` });
      }}
      disabled={isLoading}
      className={cn("h-10", className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 h-4 w-4 animate-spin" />
      ) : showIcon ? (
        <Icon className="mr-2 h-4 w-4" />
      ) : null}
      {text}
    </Button>
  );
}
