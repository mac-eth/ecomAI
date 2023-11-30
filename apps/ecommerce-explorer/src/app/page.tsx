import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";

export const runtime = "edge";

export default function Page() {
  return (
    <>
      <Hero />
      <SocialProof />
    </>
  );
}
