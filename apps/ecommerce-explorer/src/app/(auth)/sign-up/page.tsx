import { redirect } from "next/navigation";
import { RegistrationPanel } from "@/components/registration-panel";
import { Container } from "@/components/ui/container";

export default async function SignInPage() {
  // redirect to home if user is already logged in
  // if (session?.user) {
  //   redirect("/");
  // }
  return (
    <Container>
      <div className="h-[calc(100% - 2rem)] flex items-center justify-center ">
        <div className="grid grid-cols-2 gap-12">
          <div className="col-span-1 col-start-2 ">
            <RegistrationPanel />
          </div>
        </div>
      </div>
    </Container>
  );
}
