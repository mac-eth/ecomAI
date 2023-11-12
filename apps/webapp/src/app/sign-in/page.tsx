import { redirect } from "next/navigation";
import { LoginPanel } from "@/components/login-panel";

import { auth } from "@ecomai/auth";

export default async function SignInPage() {
  const session = await auth();
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <LoginPanel />
    </div>
  );
}
