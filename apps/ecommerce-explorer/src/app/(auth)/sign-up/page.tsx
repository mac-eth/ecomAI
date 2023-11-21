import { redirect } from "next/navigation";
import { RegistrationPanel } from "@/components/registration-panel";
import { Container } from "@/components/ui/container";

import { auth } from "@ecomai/auth";

export default async function SignInPage() {
  const session = await auth();
  // redirect to home if user is already logged in
  // if (session?.user) {
  //   redirect("/");
  // }
  return (
    <Container>
      <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10  ">
        <RegistrationPanel />
      </div>
    </Container>
  );
}
