import { redirect } from "next/navigation";

import { auth } from "@ecomai/auth";

export const runtime = "edge";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/sign-in");
  } else {
    redirect("/chat");
  }

  return <></>;
}
