"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LoginButton } from "./login-button";
import { IconGitHub, IconGoogle } from "./ui/icons";

export function LoginPanel() {
  return (
    <Card className="bg-background">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 gap-4">
          <LoginButton
            text="Login with GitHub"
            icon={IconGitHub}
            auth="github"
          />
          <LoginButton
            text="Login with Google"
            icon={IconGoogle}
            auth="google"
          />
        </div>
      </CardContent>
    </Card>
  );
}
